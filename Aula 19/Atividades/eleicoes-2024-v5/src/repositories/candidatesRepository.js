import pool from '../configs/dbConfig.js';

export async function getCandidates() {
    try {
        const result = await pool.query('SELECT * FROM candidato');
        return result.rows;
    } catch (error) {
        console.error("Erro: ", error.message);
    }
}

export async function getCandidateByNumberAndElection(eleicao_id, numero) {
    try {
        const result = await pool.query(
            `
            SELECT candidato.*
            FROM candidato
            INNER JOIN candidato_eleicao
                ON candidato_eleicao.candidato_id = candidato.id
                AND candidato_eleicao.eleicao_id = $1
            WHERE candidato.numero = $2
            `,
            [eleicao_id, numero]
        );
        return result.rows[0];
    } catch (error) {
        console.error("Erro: ", error.message);
    }
}

export async function getCandidateById(id) {
    try {
        const result = await pool.query('SELECT * FROM candidato WHERE id = $1', [id]);
        return result.rows[0] ?? false;
    } catch (error) {
        console.error("Erro: ", error.message);
    }
}

export async function getCandidatesByElection(eleicao_id){
    try {
        const result = await pool.query(`
            SELECT candidato.*
            FROM candidato
            INNER JOIN candidato_eleicao
                ON candidato_eleicao.candidato_id = candidato.id
                AND candidato_eleicao.eleicao_id = $1
            `, 
        [eleicao_id]);
        return result.rows[0] ?? false;
    } catch (error) {
        console.error("Erro: ", error.message);
    }
}

export async function getCandidateByElection(id, eleicao_id){
    try {
        const result = await pool.query(`
            SELECT candidato.*
            FROM candidato
            INNER JOIN candidato_eleicao
                ON candidato_eleicao.candidato_id = $1
                AND candidato_eleicao.eleicao_id = $2
            `, 
        [id, eleicao_id]);
        return result.rows[0] ?? false;
    } catch (error) {
        console.error("Erro: ", error.message);
    }
}

export async function createCandidate(candidate) {
    try {
        const result = await pool.query(
            'INSERT INTO candidato (nome, numero, partido) VALUES ($1, $2, $3) RETURNING *',
            [candidate.nome, candidate.numero, candidate.partido]
        );
        return result.rows[0];
    } catch (error) {
        console.error("Erro: ", error.message);
    }
}

export async function updateCandidate(id, candidate) {
    try {
        const result = await pool.query(
            'UPDATE candidato SET nome = $1, numero = $2, partido = $3 WHERE id = $4 RETURNING *',
            [candidate.nome, candidate.numero, candidate.partido, id]
        );
        return result.rows[0];
    } catch (error) {
        console.error("Erro: ", error.message);
    }
}

export async function deleteCandidate(id) {
    try {
        await pool.query('DELETE FROM candidato WHERE id = $1', [id]);
    } catch (error) {
        console.error("Erro: ", error.message);
    }
}