-- Comandos SQL usados durante a aula 17
-- Criando tabela table_example
CREATE TABLE IF NOT EXISTS tabela_example (
	id SERIAL PRIMARY KEY NOT NULL,
	nome VARCHAR(255) NOT NULL,
	data DATE,
	votos INTEGER
);

-- Atividade prática 1 
-- Alterando dados da tabela já existente 
ALTER TABLE tabela_example RENAME TO candidatos;

ALTER TABLE candidatos ADD COLUMN partido VARCHAR(255),
						ADD COLUMN numero VARCHAR(255),
						ADD COLUMN foto VARCHAR(255);

-- Criando tabela eleitores
CREATE TABLE IF NOT EXISTS eleitores (
	id SERIAL PRIMARY KEY NOT NULL,
	nome VARCHAR(255) NOT NULL
);
-- Fim da Atividade 1

-- Criando tabela de votos
CREATE TABLE IF NOT EXISTS votos (
	id SERIAL PRIMARY KEY NOT NULL,
	numero VARCHAR(11),
	candidato_id INTEGER REFERENCES candidatos(id)
);

-- Inserindo dados na tabela de candidatos
INSERT INTO candidatos(nome, votos) VALUES ('Anderson', 0);

-- Criando tabela de eleições
CREATE TABLE IF NOT EXISTS eleicoes(
	id SERIAL PRIMARY KEY NOT NULL,
	nome VARCHAR(255),
	data DATE
);

-- Criando tabela de relação entre eleições e candidatos
CREATE TABLE IF NOT EXISTS eleicoes_candidatos(
	id SERIAL PRIMARY KEY NOT NULL,
	candidato_id INTEGER REFERENCES candidatos(id),
	eleicao_id INTEGER REFERENCES eleicoes(id)	
);

-- Atividade 2
-- Incrementando campos que ainda faltam 
ALTER TABLE eleicoes ADD COLUMN descricao VARCHAR(255),
						ADD COLUMN periodo VARCHAR(255);
ALTER TABLE eleitores ADD COLUMN cpf VARCHAR(255),
						ADD COLUMN senha VARCHAR(255);
ALTER TABLE votos ADD COLUMN data_hora DATE,
					ADD COLUMN eleicao_id INTEGER REFERENCES eleicoes(id),
					ADD COLUMN eleitor_id INTEGER REFERENCES eleitores(id);
-- Fim da atividade 2

-- Inserindo registros na tabela
INSERT INTO candidatos (nome, votos) VALUES 
	('Nunes', 0),
	('Boulos', 0),
	('Fernandes', 0),
	('Leitão', 0),
	('Emilia', 0),
	('Luis', 0);

-- Registrando votos para todos os candidatos (não recomendável)
UPDATE candidatos SET votos=1;

-- Registrando votos para um candidato
UPDATE candidatos SET votos = 10 WHERE id = 2;

-- Excluindo um registro 
DELETE FROM candidatos WHERE id = 3;

-- Exibindo todos os dados
SELECT * FROM candidatos; 

-- Atividade prática 3
-- Populando a tabela candidatos 
INSERT INTO candidatos (data, votos, partido, numero, foto, nome)
VALUES 
    ('2024-01-01', '1250', 'ABC', '101', 'foto1.jpg', 'Candidato 1'),
    ('2024-01-01', '1350', 'ABC', '102', 'foto2.jpg', 'Candidato 2'),
    ('2024-01-01', '1550', 'DEF', '103', 'foto3.jpg', 'Candidato 3'),
    ('2024-01-01', '1650', 'DEF', '104', 'foto4.jpg', 'Candidato 4'),
    ('2024-01-01', '1750', 'GHI', '105', 'foto5.jpg', 'Candidato 5'),
    ('2024-01-01', '1850', 'GHI', '106', 'foto6.jpg', 'Candidato 6'),
    ('2024-01-01', '1950', 'JKL', '107', 'foto7.jpg', 'Candidato 7'),
    ('2024-01-01', '2050', 'JKL', '108', 'foto8.jpg', 'Candidato 8'),
    ('2024-01-01', '2150', 'MNO', '109', 'foto9.jpg', 'Candidato 9'),
    ('2024-01-01', '2250', 'MNO', '110', 'foto10.jpg', 'Candidato 10'),
    ('2024-01-01', '2350', 'PQR', '111', 'foto11.jpg', 'Candidato 11'),
    ('2024-01-01', '2450', 'PQR', '112', 'foto12.jpg', 'Candidato 12'),
    ('2024-01-01', '2550', 'STU', '113', 'foto13.jpg', 'Candidato 13'),
    ('2024-01-01', '2650', 'STU', '114', 'foto14.jpg', 'Candidato 14'),
    ('2024-01-01', '2750', 'VWX', '115', 'foto15.jpg', 'Candidato 15'),
    ('2024-01-01', '2850', 'VWX', '116', 'foto16.jpg', 'Candidato 16'),
    ('2024-01-01', '2950', 'YZA', '117', 'foto17.jpg', 'Candidato 17'),
    ('2024-01-01', '3050', 'YZA', '118', 'foto18.jpg', 'Candidato 18'),
    ('2024-01-01', '3150', 'BCD', '119', 'foto19.jpg', 'Candidato 19'),
    ('2024-01-01', '3250', 'BCD', '120', 'foto20.jpg', 'Candidato 20');

