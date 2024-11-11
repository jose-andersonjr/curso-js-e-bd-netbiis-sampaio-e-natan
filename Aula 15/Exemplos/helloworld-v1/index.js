import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/alunos', (req, res) => {
    res.send('Página de alunos');
});

app.get('/alunos/:id', (req, res) => {
    let id = req.params.id;
    if(parseInt(id) <= 0 || isNaN(parseInt(id))){
        res.status(400).send('ID inválido');
        return;
    }
    res.send(`O aluno ${id} foi encontrado`);
});

app.post('/alunos', (req, res) => {
    const headers = req.headers;
    console.log(headers);
    const body = req.body;
    console.log(body);
    res.header('Content-Type', 'application/json');
    res.header('X-Powered-By', 'Express');
    res.status(201).send('Aluno novo criado');
});

app.put('/alunos/:id', (req, res) => {
    console.log(req.body);
    let id = req.params.id;
    if(parseInt(id) <= 0 || isNaN(parseInt(id))){
        res.status(400).send('ID inválido');
        return;
    }
    res.header('Content-Type', 'application/json');
    res.send(`Aluno foi ${req.params.id} editado`);
})

app.delete('/alunos', (req, res) => {
    res.send('Aluno deletado com sucesso!');
});

app.use('/static', express.static('public'));

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});