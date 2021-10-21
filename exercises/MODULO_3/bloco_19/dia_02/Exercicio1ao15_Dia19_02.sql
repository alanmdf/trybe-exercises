SELECT 'This is SQL Exercise, Practice and Solution';

SELECT 1 as 'Primeiro Numero', 2 as 'Segundo Numero', 3 as 'Terceiro Numero';

SELECT 10 + 15;

SELECT 3 * 3;

SELECT * FROM Scientists;

SELECT 
    `Name` AS `Nome do Projeto`, `Hours` AS `Tempo de Trabalho`
FROM
    Projects;
    
SELECT 
    *
FROM
    Scientists
ORDER BY `Name`;

SELECT 
    *
FROM
    Projects
ORDER BY `Name` DESC;

SELECT 
    CONCAT('O projeto ',
            `Name`,
            ' precisou de ',
            `Hours`,
            ' horas para ser concluido')
FROM
    Projects;
    
SELECT 
    *
FROM
    Projects
ORDER BY Hours DESC
LIMIT 3;

SELECT DISTINCT Project from AssignedTo;

SELECT 
    *
FROM
    Projects
ORDER BY Hours DESC
LIMIT 1;

SELECT 
    *
FROM
    Projects
ORDER BY Hours DESC
LIMIT 1 OFFSET 1;

SELECT 
    *
FROM
    Projects
ORDER BY Hours
LIMIT 5;

SELECT 
    CONCAT('Existem ',
            COUNT(`Name`),
            ' cientistas na tabela Scientists')
FROM
    Scientists;