import pool from '../configs/dbConfig.js';

export async function getVoters() {
    const result = await pool.query('SELECT * FROM eleitor');
    return result.rows;
}

export async function getVotersByElection(eleicao_id){
    const result = await pool.query(
        `
        SELECT eleitor.* FROM eleitor
            INNER JOIN voto ON voto.eleitor_id = eleitor.id AND voto.eleicao_id = $1
        `,
        [eleicao_id]
    );
    return result.rows;
}

export async function getVoterById(id){
    const query = {
        text: 'SELECT * FROM eleitor WHERE eleitor.id = $1',
        values: [id]
    }
    const result = await pool.query(query.text, query.values);
    return result.rows[0];
}

export async function createVoter(voter) {
    const query = {
        text: 'INSERT INTO eleitor (nome, cpf, senha) VALUES ($1, $2, $3) RETURNING *',
        values: [voter.nome, voter.cpf, voter.senha]
    };
    try {
        const result = await pool.query(query.text, query.values);
        return result.rows[0];
    } catch (error) {
        console.error('Erro: ', error.message);
        return false;
    }
}

export async function updateVoter(id, voter){
    try {
        const result = await pool.query(
            'UPDATE eleitor SET nome = $1, cpf = $2, senha = $3 WHERE eleitor.id = $4 RETURNING *',
            [voter.nome, voter.cpf, voter.senha, id]    
        );
        return result.rows[0];
    } catch (error) {
        console.error('Erro: ', error.message);
    }
}

export async function deleteVoter(id){
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        await client.query(`DELETE FROM voto WHERE voto.eleitor_id = $1`, [id]);
        await client.query(`DELETE FROM eleitor WHERE eleitor.id = $1`, [id]);
        await client.query('COMMIT');
    } catch (error) {
        await client.query('ROLLBACK');
        console.error('Erro:', error.message);
    } finally {
        client.release();
    }
}