### GREP

EL comando **`grep`** (*Globally Search Regular Expression and Print out*). Es una herramienta de la línea de comando usado en sistemas Linux y Unix para buscar un patrón específico en un archivo o grupo de archivos.


**`grep`** tiene muchas opciones que permiten realizar varias acciones relacionadas con la búsqueda en archivos. En breve veremos como usar el comando **`grep`** con sus opciones disponibles tanto como expresiones regulares básicas y algunas más avanzadas.

### Cómo usar grep

La sintaxis es la siguiente:  

```bash
grep `<texto-buscado>`  <achivo/archivos>
```

>Tener en cuenta que las comillas simples o dobles son requeridas alrededor del texto si es más de una palabra

También podemos usar el comodín **`*`** para seleccionar todos los archivos de un directorio.


### Opciones usadas con grep


`-n` o `--line-number`

imprime las coincidencias de un texto junto con los números de línea. 

```bash
grep todos /path/to/test.txt -n
```

**Resultado**:

```txt
1: Hola a todos
3: Espero que estén todos bien
```


`-c` o `--count`

Imprimeel número de líneas de coincidencias:

```bash
grep com /path/to/test.txt
```

**Resultado**:

```bash
3
````

>**Tener en cuenta** la opción `-c` esta relacionado con el número de línea donde aparecen las coincidencia, no la cantidad de coincidencia.


### Expresiones regulares para patrones

`grep` también permite especificar patrones con expresiones regulars básicas. Dos de ellas son:


`^pattern` - inicio de línea

Este patrón significa que `grep` solo coincide con cadenas cuyas líneas empiecen con la cadena especificada después de `^`.


Veamos algunos ejemplos:  

```bash
grep ^A /path/to/test_grep.txt -n
```

**Resultado**

```bash
2: A
```



buscar palabras que comienzan con **com** en el archivo '**test.txt**' (sólo tomará aquellas que la línea actual comiencen con **com**):

```bash
grep ^com /path/to/test.txt
```

seleccionar todas las líneas del archivo '**test.txt**' que contienen números:  

```bash
grep [0-9] /path/to/test.txt
```

guardar el resultado de una búsqueda en un archivo:


```bash
 grep ^com test_grep.txt >> resultado.txt
```