**`WITH`** proporciona una forma de escribir declaraciones auxiliares para su uso en una consulta más grande. Estas declaraciones, que a menudo se denominan *Expresiones de tabla comunes* o ***CTE***, se pueden considerar como la definición de tablas temporales que existen solo para una consulta. Cada instrucción auxiliar en una cláusula **`WITH`** puede ser un **`SELECT`**, **`INSERT`**, **`UPDATE`** o **`DELETE`**; y la cláusula **`WITH`** en sí se adjunta a una declaración principal que también puede ser **`SELECT`**, **`INSERT`**, **`UPDATE`** o **`DELETE`**.  

<a name="select-en-with"></a>
## SELECT en WITH

Para comenzar, podemos volcar el siguiente código SQL para crear las tablas en una base de datos de una tienda:  

```sql
CREATE DATABASE tienda;
/c tienda;

CREATE TABLE  categoria (
	id SERIAL PRIMARY KEY,
	nombre VARCHAR(50) NOT NULL unique,
	descripcion TEXT NOT NULL unique,
	estado

)
```



```sql
WITH regiones AS (
	SELECT region, SUM(cantidad) AS total_ventas
	FROM ordenes
	GROUP BY region
), top_regions AS (
	SELECT region
	FROM regional_sales
	WHERE total_ventas > (SELECT SUM(total_ventas)/10 FROM regional_sales)
) 

SELECT region
	   product,
	   SUM(quantity) AS product_units,
	   SUM(amount) AS product_sales
FROM ventas
WHERE region IN() 

)
```


## Ejemplos

En el siguiente ejemplo, se muestra un caso posible más simple de una consulta que contiene la cláusula **`WITH`**. La consulta **`WITH`** denominada **`VENUECOPY`**