## Creamos una tabla

```sql
CREATE TABLE public.employee (
	id int NOT NULL,
	name varchar(120) NOT NULL,
	salary int NOT NULL,
	CONSTRAINT emp_pk PRIMARY KEY(id)
)
```

<a name="generar-datos-ficticios"></a>
## Generar datos ficticios

La siguiente sentencia SQL genera 1 millón de registros de empleados:  

```sql
WITH salary_list AS (
	SELECT '{1000, 2000, 5000}'::INT[] salary
)

INSERT INTO public.employee
(id, name, salary)
SELECT n, 'Empleado ' || n as name, salary[1 + mod(n, array_length(salary, 1))]
FROM salary_list, generate_series(1, 1000) as n;
```
