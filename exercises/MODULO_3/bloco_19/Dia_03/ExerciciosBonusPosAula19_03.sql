USE Scientists;

-- Exercicio 1
SELECT 
    *
FROM
    Scientists
WHERE
    `Name` LIKE '%e%';

-- Exercicio 2
SELECT 
    `Name`
FROM
    Projects
WHERE
    `Code` LIKE 'A%'
ORDER BY `Name`;

-- Exercicio 3
SELECT 
    `Code`, `Name`
FROM
    Projects
WHERE
    `Code` LIKE '%3%'
ORDER BY `Name`;

-- Exercicio 4
SELECT 
    Scientist
FROM
    AssignedTo
WHERE
    Project IN ('AeH3' , 'Ast3', 'Che1');

-- Exercicio 5
SELECT 
    *
FROM
    Projects
WHERE
    Hours > 500;

-- Exercicio 6
SELECT 
    *
FROM
    Projects
WHERE
    Hours BETWEEN 250 AND 800;

-- Exercicio 7
SELECT 
    `Code`, `Name`
FROM
    Projects
WHERE
    `Name` NOT LIKE 'A%';

-- Exercicio 8
SELECT 
    `Name`
FROM
    Projects
WHERE
    `Code` LIKE '%H%';






