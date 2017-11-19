SELECT *
FROM scott.emp; /*scott / tiger*/

SHOW TABLES ;

DESC test;

SELECT *
FROM scott.test;

SELECT lcase(ENAME)
FROM scott.emp
WHERE ENAME = BINARY 'ward';