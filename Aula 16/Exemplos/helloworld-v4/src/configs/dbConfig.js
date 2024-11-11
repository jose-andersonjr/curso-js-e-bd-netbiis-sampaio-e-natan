import { JSONFilePreset, JSONFileSync } from 'lowdb/node';

const defaultData = {
    alunos: [],
    cursos: [],
    professores: []
};

const db = await JSONFilePreset('db.json', defaultData);

export default db;