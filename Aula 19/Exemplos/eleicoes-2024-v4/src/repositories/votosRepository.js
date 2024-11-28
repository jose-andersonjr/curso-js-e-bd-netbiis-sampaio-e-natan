import pool from '../configs/dbConfig.js';

export async function checkAlreadyVoted(eleicao_id, eleitor_id){
    const query = {
        text: 'SELECT * FROM voto WHERE eleicao_id = $1 AND eleitor_id = $2',
        values: [eleicao_id, eleitor_id]
    };
    try {
        const result = await pool.query(query.text, query.values);
        return result.rows.length > 0;
    } catch (error) {
        console.error('Erro: ', error.message);
        return false;
    }
}

export async function insertVote(vote){
    const { eleicao_id, eleitor_id, numero } = vote;
    const query = {
        text: 'INSERT INTO voto (eleicao_id, eleitor_id, data_hora, numero) VALUES ($1, $2, NOW(), $3) RETURNING *',
        values: [eleicao_id, eleitor_id, numero]
    };

    try {
        const result = await pool.query(query.text, query.values);
        return result.rows[0];
    } catch (error) {
        console.error('Erro: ', error.message);
        return false;
    }
}