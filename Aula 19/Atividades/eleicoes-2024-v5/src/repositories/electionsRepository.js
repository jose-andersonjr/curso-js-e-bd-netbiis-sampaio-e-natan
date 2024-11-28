import pool from '../configs/dbConfig.js';

export async function getElections() {
    const result = await pool.query('SELECT * FROM eleicao');
    return result.rows;
}


export async function getElectionById(id){
    const query = {
        text: 'SELECT * FROM eleicao WHERE eleicao.id = $1',
        values: [id]
    }
    const result = await pool.query(query.text, query.values);
    return result.rows[0];
}

export async function createElection(election) {
    const query = {
        text: 'INSERT INTO eleicao (nome, data, descricao) VALUES ($1, $2, $3) RETURNING *',
        values: [election.nome, election.data, election.descricao]
    };
    try {
        const result = await pool.query(query.text, query.values);
        return result.rows[0];
    } catch (error) {
        console.error('Erro: ', error.message);
        return false;
    }
}

export async function updateElection(id, election){
    try {
        const result = await pool.query(
            'UPDATE eleicao SET nome = $1, data = $2, descricao = $3 WHERE eleicao.id = $4 RETURNING *',
            [election.nome, election.data, election.descricao, id]    
        );
        return result.rows[0];
    } catch (error) {
        console.error('Erro: ', error.message);
    }
}
export async function deleteElection(id){
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        await client.query('DELETE FROM candidato_eleicao WHERE candidato_eleicao.eleicao_id = $1', [id]);
        await client.query('DELETE FROM voto WHERE voto.eleicao_id = $1', [id]);
        await client.query('DELETE FROM eleicao WHERE eleicao.id = $1', [id]);
        await client.query('COMMIT');
    } catch (error) {
        await client.query('ROLLBACK');
        console.error('Erro:', error.message);
    } finally {
        client.release();
    }
}

export async function registerCandidate(eleicao_id, candidato_id) {
    const query = {
        text: 'INSERT INTO candidato_eleicao (eleicao_id, candidato_id) VALUES ($1, $2) RETURNING *',
        values: [eleicao_id, candidato_id]
    };
    await pool.query(query.text, query.values);
}

export async function deleteCandidate(eleicao_id, candidato_id){
    const query = {
        text: 'DELETE FROM candidato_eleicao WHERE candidato_eleicao.eleicao_id = $1 AND candidato_eleicao.candidato_id = $2',
        values: [eleicao_id, candidato_id]
    };
    await pool.query(query.text, query.values);
}

export async function getElectionsResume(){
    const result = await pool.query(
        'SELECT * FROM vw_resumo_votos'
    );
    return result.rows;
}