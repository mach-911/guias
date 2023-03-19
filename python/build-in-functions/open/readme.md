<h1 align="center">
 <img src="https://badges.aleen42.com/src/python.svg" alt="badge python" height="50" align="left">
 <img src="../../../../../../assets/png/logo_sin_bg.png" height="55" align="right"><br><br>
<code>open()</code>
</h1>


La función **`open()`** se usa para abrir archivos almacenados. Devuelve el contenido del archivo como objeto python.   

**_Sintaxis_**  

```python
open(file_name, mode)
```

**_Parámetros_** 

- **file_name**: este parámetro como su nombre indica, es el nombre de archivo que queremos abrir.  

- **mode**: este parámetro es una cadena que se utiliza para especificar el modo en que se abrirá el archivo. Las siguientes cadena son las operaciones que se pueden utilizar para activar un modo especifico:  
	+ **'r' &#x2023;**  abierto para lectura (por defecto).
	+ **'w' &#x2023;**  abierto para escritura, truncando primero el archivo.
	+ **'x' &#x2023;**  abierto para creación en exclusiva, **falla si el archivo ya existe**. 
	+ **'a' &#x2023;**  abierto para escritura, añadiendo al final del cursor si el archivo ya existe.  
	+ **'b' &#x2023;**  modo binario.
	+ **'t' &#x2023;**  modo texto (por defecto).
	+ **'+' &#x2023;**  abierto para actualizar (lectura y escritura).
	

**_Ejemplos_**

Para crear un archivo de texto llamado "archivo.txt".  

```python
file = open("archivo.txt", "x")
```

Leer y escribir un archivo

```python
file = open("archivo.txt", "w")
file.write("Aprendiendo a escribir en archivos con Python.")
file.close()

# leemos el archivo
file = open("archivo.txt")
print(file.read())
```

Agregar contenido al archivo

```python
file = open("archivo.txt", "a")
file.write("Añadiendo más texto en el archivo")
file.close()

# leemos el archivo
file = open("archivo.txt")
print(file.read())
```

