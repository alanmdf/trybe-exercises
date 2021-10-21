-- 2
-- R: PG-13

SELECT 
    rating,
    SUM(replacement_cost) AS `Soma de custo de substituição`
FROM
    sakila.film
GROUP BY rating;

-- 3
-- R: ID = 350

SELECT 
    customer_id,
    (AVG(DATE(`return_date`) - DATE(`rental_date`))) AS `Tempo de aluguel`
FROM
    sakila.rental
GROUP BY customer_id
ORDER BY `Tempo de aluguel`;

