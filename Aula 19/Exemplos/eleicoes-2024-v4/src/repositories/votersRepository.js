import pool from '../configs/dbConfig.js';

export async function createVoter(voter){
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