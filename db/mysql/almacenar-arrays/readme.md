## Cómo almacenar el tipo de datos de matriz en MySQL


Aunque un `array` es uno de los tipos de datos más comunes en el mundo de la programación, **MySQL** en realidad no permite guardar un tipo `array` directamente.

Quiere decir que no podemos crear una columna en la tabla que sea de tipo `array`. La forma más fácil de almacenar un tipo de dato que podamos usarlo como un `array` es usando el tipo de datos **JSON**.

Considerar que este tipo de dato `JSON` se agregó por primera vez en la versión **5.7.98** de **MySQL** y de esta forma podemos almacenar matrices y objetos.

Veamos un ejemplo básico, primero creamos una tabla de ejemplo llamada **demojson** y las siguientes columnas:  

```sql
CREATE TABLE demojson (
 `id` int not null auto_increment,
 `docs` JSON,
 PRIMARY KEY(`id`)
);
```

Como vemos la tabla **demojson** tiene dos columnas: `id` y `docs`.


```sql
INSERT INTO demojson (docs)
VALUES ('["file.txt", "file.csv"]');
```

Ahora si consultamos la tabla, tendremos una matríz almacenada en la primera fila, de la siguiente manera:


```txt
+----+--------------------------+
| id | docs                     |
+----+--------------------------+
|  1 | ["file.txt", "file.csv"] |
+----+--------------------------+
```

Y esa es la forma más fácil de almacenar un `array` usando **MySQL**.

Podemos insertar matrices con diferentes longitudes:  

```sql
INSERT INTO demojson (docs)
VALUES 
('["file1.txt"]'),
('["file2.txt", "file2.csv", "file.ppt"]');
```

Consultamos la tabla:

```txt
+----+----------------------------------------+
| id | docs                                   |
+----+----------------------------------------+
|  1 | ["file.txt", "file.csv"]               |
|  2 | ["file1.txt"]                          |
|  3 | ["file2.txt", "file2.csv", "file.ppt"] |
+----+----------------------------------------+
```


