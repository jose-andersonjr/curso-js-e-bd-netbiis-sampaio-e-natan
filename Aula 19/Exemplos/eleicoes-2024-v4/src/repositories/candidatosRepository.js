import pool from '../configs/dbConfig.js';

export async function getCandidates() {
    try {
        const result = await pool.query('SELECT * FROM candidato');
        return result.rows;
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