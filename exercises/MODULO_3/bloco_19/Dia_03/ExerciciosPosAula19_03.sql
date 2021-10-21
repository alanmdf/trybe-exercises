USE PecasFornecedores;

-- Exercicio 1
SELECT 
    `name`
FROM
    Pecas
WHERE
    `name` LIKE 'gr%';

-- Exercicio 2
SELECT 
    *
FROM
    Fornecimentos
WHERE
    peca = 2
ORDER BY Fornecedor;

-- Exercicio 3
SELECT 
    peca, Preco, Fornecedor
FROM
    Fornecimentos
WHERE
    Fornecedor LIKE '%N%';

-- Exercicio 4
SELECT 
    *
FROM
    Fornecedores
WHERE
    `name` LIKE '%LTDA%'
ORDER BY `name` DESC;

-- Exercicio 5
SELECT 
    COUNT(*) AS 'Fornecedores com F no código'
FROM
    Fornecedores
WHERE
    code LIKE '%F%';

-- Exercicio 6
SELECT 
    *
FROM
    Fornecimentos
WHERE
    Preco BETWEEN 15 AND 40
ORDER BY Preco;

-- Exercicio 7
SELECT 
    COUNT(*) AS 'Numero de vendas'
FROM
    Vendas
WHERE
    DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';


 