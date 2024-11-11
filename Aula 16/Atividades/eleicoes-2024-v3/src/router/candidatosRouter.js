import { Router } from 'express';
import candidatosValidator from '../validators/candidatosValidator.js';

const router = Router();

let candidatos = [
    {
        id: 1,
        nome: "João Silva",
        partido: "Partido A",
        numero: "101",
        foto: "foto.jpg",
        votos: 0,
    },
    {
        id: 2,
        nome: "Maria Oliveira",
        partido: "Partido B",
        numero: "202",
        foto: "foto.jpg",
        votos: 0,
    },
    {
        id: 3,
        nome: "Carlos Souza",
        partido: "Partido C",
        numero: "303",
        foto: "foto.jpg",
        votos: 0,
    },
    {
        id: 4,
        nome: "Ana Costa",
        partido: "Partido D",
        numero: "404",
        foto: "foto.jpg",
        votos: 0,
    },
    {
        id: 5,
        nome: "Paulo Santos",
        partido: "Partido E",
        numero: "505",
        foto: "foto.jpg",
        votos: 0,
    },
];

router.get('/', (req, res) => {
    const id = validateNumberParam(req.query.id);
    if (id) {
        const candidato = candidatos.find((candidato) => candidato.id == id);
        if (candidato) {
            res.json(candidato);
            return;
        } else {
            res.status(404).send(`Candidato ${id} não encontrado usando queryParam`);
            return;
        }
    } else if (req.query.id == undefined) {
        res.json(candidatos);
    } else {
        res.status(400).send('O ID inserido é inválido');
    }
});

router.get('/:id', (req, res) => {
    const id = validateNumberParam(req.params.id);
    if (id) {
        const candidato = candidatos.find((candidato) => candidato.id == id);
        if (candidato) {
            res.json(candidato);
        } else {
            res.status(404).send(`Candidato ${id} não encontrado usando o id na url`);
        }
    } else {
        res.status(400).send('O ID inserido é inválido');
    }
});

router.post('/', (req, res) => {
    let alreadyExists = candidatos.find(
        (candidato) => candidato.id == req.body.id
    );
    if (alreadyExists) {
        res.send(`O candidato ${req.body.id} já existe`);
    } else {
        candidatos.push(req.body);
        res.send(
            `Adicionou o candidato ${req.body.nome}-${req.body.id} na lista de candidatos`
        );
    }
});

router.put('/:id', (req, res) => {
    console.log(req.body);
    const id = validateNumberParam(req.params.id);
    let validator = candidatosValidator.validate(req.body);
    console.log(validator);
    if (validator.error) {
        res.status(400).send({"error": `${validator.error.details[0].message}`});
    } else {
        res.header('Content-Type', 'application/json');
        if (id) {
            let newCandidatos = candidatos.filter(candidato => candidato.id != id);
            if (newCandidatos.length == candidatos.length) {
                res.status(404).send(`O candidato de ID ${id} não existe`);
                return;
            } else {
                newCandidatos.push(req.body);
                candidatos = newCandidatos
                res.status(200).send(`O usuário ${req.body.id} foi alterado com sucesso`);
                return;
            }
        } else {
            res.status(400).send('O ID inserido é inválido');
        }
    }
})

router.delete('/:id', (req, res) => {
    const id = validateNumberParam(req.params.id);
    if (id) {
        let newCandidatos = candidatos;
        candidatos = candidatos.filter((candidato) => {
            return candidato.id != id;
        });
        if (candidatos.length != newCandidatos.length) {
            res.send(`O candidato ${id} foi removido com sucesso`);
        } else {
            res.status(404).send('Nenhum candidato foi encontrado');
        }
    } else {
        res.status(400).send('O ID inserido é inválido');
    }
});

router.post('/votar/:numero', (req, res) => {
    const numero = validateNumberParam(req.params.numero);
    if (numero) {
        let voted = false;
        candidatos.forEach((candidato) => {
            if (candidato.numero == numero) {
                candidato.votos += 1;
                res.send(
                    `Você votou no candidato ${candidato.nome} e agora ele tem ${candidato.votos} votos!`
                );
            }
        });
        if (!voted) {
            res.status(404).send('Candidato não encontrado!');
        }
    } else {
        res.status(400).send('O número inserido é inválido');
    }
});

router.delete('/votar', (req, res) => {
    candidatos = candidatos.forEach(candidato => {
        candidato.votos = 0;
    });
    res.status(200).send({ message: 'A votação foi reiniciada!' });
});

function validateNumberParam(numberParam) {
    if (!isNaN(numberParam) && parseInt(numberParam) >= 0) {
        return parseInt(numberParam);
    }
    return null;
}

export default router;