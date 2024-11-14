-- Conteúdo da Aula 18
CREATE TABLE clientes (
	id SERIAL PRIMARY KEY NOT NULL,
	nome VARCHAR(255) NOT NULL,
	email VARCHAR(255)
);

CREATE TABLE pedidos(
	id SERIAL PRIMARY KEY NOT NULL,
	descricao TEXT,
	valor NUMERIC NOT NULL,
	cliente_id INTEGER REFERENCES clientes(id)
);

SELECT * FROM clientes;

INSERT INTO clientes (nome, email) VALUES 
										('José', 'jose@gmail.com'),
										('Pedro', 'pedro@gmail.com'),
										('Thiago', 'thiago@gmail.com');

INSERT INTO pedidos (descricao, valor, cliente_id) VALUES 
										('Compra de teclado', 50, 1),
										('Compra de mouse', 80, 2),
										('Compra de monitor', 1050, 3);

SELECT * FROM pedidos WHERE cliente_id = 2;

-- Aprendendo INNER JOIN, juntando as tabelas clientes e pedidos linkando os clientes id ao respectivos pedidos
SELECT * FROM pedidos INNER JOIN clientes ON clientes.id = cliente_id;

SELECT pedidos.id, pedidos.descricao, clientes.nome FROM pedidos 
	INNER JOIN clientes ON clientes.id = cliente_id
	WHERE pedidos.cliente_id = 1;
	
-- LEFT JOIN
-- Primeiro adiciono um cliente que não tem um pedido
INSERT INTO clientes (nome) VALUES ('Antônio');

-- Aqui verificamos que o JOIN traz o cliente que não tem pedidos
SELECT pedidos.id, pedidos.descricao, clientes.nome FROM clientes 
	LEFT JOIN pedidos ON clientes.id = cliente_id;

-- Criando pedido que não tem cliente
INSERT INTO pedidos (descricao, valor) VALUES ('Compra de mousepad', 25);

SELECT pedidos.id, pedidos.descricao, clientes.nome FROM pedidos 
	LEFT JOIN clientes ON clientes.id = cliente_id;

-- RIGHT JOIN
-- Pega todos os pedidos, inclusive os pedidos que não tem clientes
SELECT clientes.id, clientes.nome, pedidos.descricao, pedidos.valor
	FROM clientes
	RIGHT JOIN pedidos ON pedidos.cliente_id = clientes.id;

-- FULL JOIN
SELECT pedidos.id, pedidos.descricao, clientes.nome FROM clientes FULL JOIN pedidos ON clientes.id = cliente_id;

SELECT pedidos.id, pedidos.descricao, clientes.nome FROM clientes FULL JOIN pedidos ON clientes.id = cliente_id
	WHERE pedidos.cliente_id IS NULL;

-- GROUP BY, Agrupamento de consultas
SELECT clientes.id, clientes.nome, COUNT(pedidos.descricao) as quantidade_pedidos, SUM(pedidos.valor) as total_vendido
	FROM clientes
	INNER JOIN pedidos ON pedidos.cliente_id = clientes.id
	GROUP BY clientes.nome, clientes.id;

-- ORDER BY, ordenando o resultado
SELECT clientes.id, clientes.nome, COUNT(pedidos.descricao) as quantidade_pedidos, SUM(pedidos.valor) as total_vendido
	FROM clientes
	INNER JOIN pedidos ON pedidos.cliente_id = clientes.id
	GROUP BY clientes.nome, clientes.id 
	ORDER BY clientes.id;
	
-- HAVING, adicionando condicionais na exibição do resultado
-- Adicionando novo pedido a um cliente
INSERT INTO pedidos (cliente_id, descricao, valor) 
	VALUES ('1', 'Compra de um processador', 800);	

SELECT clientes.id, clientes.nome, COUNT(pedidos.descricao) as quantidade_pedidos, SUM(pedidos.valor) as total_vendido
	FROM clientes
	INNER JOIN pedidos ON pedidos.cliente_id = clientes.id
	GROUP BY clientes.nome, clientes.id 
	HAVING COUNT(pedidos.descricao) > 1
	ORDER BY clientes.id;

-- Implementando melhorias no código mostrado em aula
-- Peguei os códigos de exemplo anteriores e decidi melhorar da seguinte forma
SELECT clientes.id, clientes.nome, COUNT(*) as quantidade_pedidos, SUM(pedidos.valor) as total_vendido
	FROM clientes
	INNER JOIN pedidos ON pedidos.cliente_id = clientes.id
	GROUP BY clientes.nome, clientes.id 
	HAVING COUNT(*) > 1
	ORDER BY clientes.id;

SELECT clientes.id, clientes.nome, COUNT(*) as quantidade_pedidos, SUM(pedidos.valor) as total_vendido
	FROM clientes
	INNER JOIN pedidos ON pedidos.cliente_id = clientes.id
	GROUP BY clientes.nome, clientes.id 
	ORDER BY total_vendido DESC;

-- Criando views
CREATE VIEW vw_resumo_pedidos AS
	SELECT clientes.id, clientes.nome, COUNT(*) as quantidade_pedidos, SUM(pedidos.valor) as total_vendido
	FROM clientes
	INNER JOIN pedidos ON pedidos.cliente_id = clientes.id
	GROUP BY clientes.nome, clientes.id 
	ORDER BY total_vendido DESC;

-- Utilizando as views
SELECT * FROM vw_resumo_pedidos;

-- Criando materialized views
CREATE MATERIALIZED VIEW mvw_resumo_pedidos AS
	SELECT clientes.id, clientes.nome, COUNT(*) as quantidade_pedidos, SUM(pedidos.valor) as total_vendido
	FROM clientes
	INNER JOIN pedidos ON pedidos.cliente_id = clientes.id
	GROUP BY clientes.nome, clientes.id 
	ORDER BY total_vendido DESC;

SELECT * FROM mvw_resumo_pedidos;

-- Adicionar um novo item para um usuario
INSERT INTO pedidos (valor, cliente_id, descricao)
	VALUES (300, 2, 'Compra de memória RAM');

-- Compare o valor da vw com a mwv.

-- Atualizando o valor de uma materialized view desatualizada
REFRESH MATERIALIZED VIEW mvw_resumo_pedidos;


-- Criando uma tabela para os produtos 
CREATE TABLE produtos (
	id SERIAL PRIMARY KEY NOT NULL,
	nome VARCHAR(255),
	valor NUMERIC NOT NULL
);

-- Alterando a tabela a regra do valor na tabela de pedidos
ALTER TABLE pedidos
	ALTER COLUMN valor DROP NOT NULL;

-- Criando uma tabela de relacionamentos entre pedidos e produtos
CREATE TABLE pedidos_produtos(
	id SERIAL PRIMARY KEY NOT NULL,
	pedido_id INTEGER REFERENCES pedidos(id),
	produto_id INTEGER REFERENCES produtos(id),
	quantidade INTEGER DEFAULT 1
);

-- Inserindo produtos relacionados a hardware de desktop
INSERT INTO produtos (nome, valor) VALUES
    ('Processador Intel Core i7', 1250.00),
    ('Memória RAM 16GB DDR4', 350.00),
    ('SSD 1TB NVMe', 450.00),
    ('Placa de Vídeo NVIDIA GTX 1660', 2000.00),
    ('Fonte de Alimentação 600W', 250.00),
    ('Placa-Mãe ATX Intel', 600.00),
    ('Cooler para CPU', 120.00),
    ('Gabinete Gamer RGB', 300.00);

SELECT pedidos.id AS pedidos, produtos.id as produtos, COUNT(*) as quantidade 
	FROM pedidos 
	INNER JOIN produtos ON produtos.id IS NOT NULL
	GROUP BY pedidos.id, produtos.id
	ORDER BY COUNT(*) DESC;

-- Estabelecendo relações, fazendo 'compras'
INSERT INTO pedidos_produtos
	(pedido_id, produto_id, quantidade) 
	VALUES
		(1, 1, 2),
		(2, 2, 3),
		(3, 5, 2);

-- Criando uma view para melhor analisar os dados
CREATE VIEW vw_detalhes_pedidos AS
SELECT pedidos.id, 
	pedidos.descricao, 
	clientes.nome AS cliente, 
	produtos.nome AS produtos, 
	pedidos_produtos.quantidade, 
	produtos.valor, 
	(produtos.valor * pedidos_produtos.quantidade) AS total_venda
	FROM pedidos_produtos
	INNER JOIN produtos ON produtos.id = pedidos_produtos.id
	INNER JOIN pedidos ON pedidos.id = pedidos_produtos.id
	INNER JOIN clientes ON clientes.id = pedidos.cliente_id;

SELECT * FROM vw_detalhes_pedidos;

-- Atividade prática 
-- Criar views para a tabela de eleicoes
-- Primeiro criar dados sincronizados sobre a tarefa

SELECT * FROM eleicoes;

INSERT INTO eleicoes (nome, data, descricao)
	VALUES 
		('Eleições para Vereador em Belém/PA', '2024-10-10', 'Vote Consciente'),
		('Eleições para Prefeito em Belém/PA', '2024-10-10', 'Vote Consciente');

SELECT * FROM candidatos;

-- Cadastrando candidatos nas eleicoes
INSERT INTO eleicoes_candidatos (candidato_id, eleicao_id)
	VALUES 
		(1, 1),
		(3, 1),
		(4, 1),
		(5, 2),
		(6, 2),
		(7, 2),
		(8, 2),
		(9, 1);

CREATE VIEW vw_eleicoes_candidatos AS
SELECT eleicoes.id AS eleicao, eleicoes.nome AS eleicao_descricao, eleicoes.data AS dia_de_votar, 
		candidatos.id AS candidato, candidatos.numero AS numero, candidatos.partido AS partido, candidatos.nome AS nome
	FROM eleicoes 
	INNER JOIN eleicoes_candidatos ON eleicoes_candidatos.eleicao_id = eleicoes.id
	INNER JOIN candidatos ON eleicoes_candidatos.candidato_id = candidatos.id
	GROUP BY eleicoes.id, candidatos.id, eleicoes_candidatos.eleicao_id
	ORDER BY eleicoes_candidatos.eleicao_id ASC;

CREATE VIEW vw_contagem_votos AS
SELECT eleicoes.id AS eleicao, candidatos.id AS candidato, candidatos.nome AS nome, SUM(candidatos.votos) AS quantidade_votos
	FROM eleicoes
	INNER JOIN eleicoes_candidatos ON eleicoes_candidatos.eleicao_id = eleicoes.id
	INNER JOIN candidatos ON eleicoes_candidatos.candidato_id = candidatos.id
	GROUP BY eleicoes.id, candidatos.id
	ORDER BY eleicoes.id, quantidade_votos DESC;
-- Fim da atividade prática 