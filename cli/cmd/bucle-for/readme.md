## Estructura de control

**bucles FOR**

Ejecuta el comando para cada uno de los elementos especificados en la lista:  

**Sintaxis**


desde línea de comandos:

```cmd
FOR %NombreVariable IN (lista) DO comando  
```

dentro de archivos BAT:  

```cmd
FOR %%NombreVariable IN (lista) DO comando
```

- **NombreVariable**: Un nombre de variable de un *único carácter*, que se utilizará para recorrer los *archivos* de la lista.
> **Ojo:** la variable diferencia entre mayúscula y minúscula
- **(lista)**: Especifica un conjunto de elementos archivos separados por coma, punto y coma o espacios en blanco.
- **comando**: Comando `MS-DOS` a ejecutar con cada elemento de la lista.


**Ejemplo 1**

```bat
for %%x in (uno dos tres cuatro) do @echo %%x
```

Ahora podemos ejecutar el archivo por lote:

```txt
C:\bat>repite.bat
uno
dos
tres
cuatro
```

>**NOTA**: Si las extensiones de comandos están habilitadas, podemos suprimir las comillas de una variable con el símbolo `~` : `for %%X in (%*) do echo %%~X`

**Ejemplo 1**

Cuando aparezca un `*` en la lista, lo interpretará como un comodín, y antes de aplicar el comando se creará una lista de archivos que cumpla con la expresión regular. En la elaboración de la lista sólo tedrá en cuenta archivos, **NO** directorios.


Visualizamos los archivos del directorio actual

```cmd
FOR %f IN (*) DO @echo %f
```

Salida:

```txt
C:\Users\home\Desktop>FOR %f IN (*) DO @echo %f
gitflow.bat
nombres.txt
imagen.jpg
```

Visualizar ciertos tipos de archivos: 

```cmd
for %f in (*.png, *.jpg, *.gif) do echo %f
```

**Ejemplo 2**

En este ejemplo de **archivo.bat** nos lista todos los archivos ejecutables (**.exe**, **.msi**, **.bat**) del directorio pasado desde la línea de comandos. (Si no pasamos argumento, muestra los del directorio raíz)

```cmd
@echo off
FOR %%X IN (%1\*.exe %1\*.com %1\*.bat) DO echo %%X
```


### Mejoras en el FOR

Cuando las extensiones de comandos están habilitadas (por defecto lo están), el comando **FOR** admite una serie de parámetros que amplían su funcionalidad.

**1)** Con el parámetro `/R` ejecuta el comando recursivamente

```cmd
C:\>for /R %x in (*) do @echo %x
C:\editpad.zip
C:\LANGUAGE.txt
 ...
C:\Windows\bfsvc.exe
C:\Windows\bootstat.dat
C:\Windows\DtcInstall.log
...
C:\Windows\system32\mscoree.dll
C:\Windows\system32\msorcl32.dll
C:\Windows\system32\aaaamon.dll
...
```

**2)** Con el parámetro `/D` recorre los directorios, en lugar de archivos.


```cmd
C:\>for /D %x in (*) do @echo %x
Program Files
Program Files (x86)
Windows
...
```

**3)** Con el parámetro `/L` podemos crear el típico contador:

**Sintaxis**

```bat
FOR  /L  %NombreVariable  IN  (inicio salto  final)  DO comando
```

podemos separar '*inicio*', '*salto*' y '*final*' por comas (`,`) o punto y coma (`;`).

En el siguiente ejemplo de **archivo.bat** crea archivos **.txt** vacíos, cuyo nombre y cantidad la especificamos desde la línea de comandos: 

```cmd
@ECHO OFF
FOR /L %%A IN (1 1 %1) DO ECHO. > %2%%A.txt
```
Ejemplo de uso:

```txt
C:\pruebas>crea.bat 5 archivo
C:\pruebas>DIR CH* /B
archivo1.txt
archivo2.txt
archivo3.txt
archivo4.txt
archivo5.txt
```

**4)** Con el parámetro `/F` podemos recorrer las siguientes cosas:

- un archivo
- el resultado de la ejecución de un comando
- una cadena

Ejemplo en archivo:

```txt
C:\>type fich.txt
El corazón y el cerebro, las dos grandes vísceras
que se llevan la primacía de los sentimientos y de
la razón, son las que presiden el arranque de las
coplas de Jorge Manrique a la muerte de su padre.

C:\>FOR /F %x IN (fich.txt) DO @ECHO %x
El
que
la
coplas
```

El comando `for` va recorriendo todas las líneas, y cada línea se ha divido en "**tokens**" (por defecto: *`token=palabra`*). La **variable** del **`for`** almacena el primer token de cada línea.

***tokens***

Podemos seleccionar varios **tokens** mediante la cláusula **`tokens=`**, Los distintos tokens se irán guardando en nombres de variable alfabéticamente consecutivas a partir de la variable utilizada en el **for**.

En el siguiente nos quedamos con los tokens (*palabras*) 1, 3 y 5 de cada línea:

```txt
C:\>FOR /F "tokens=1,3,5" %i IN (fich.txt) DO @ECHO %i - %j - %k
El - y - cerebro,
que - llevan - primacía
la - son - que
coplas - Jorge - a
```

Podemos escoger randos, en el siguiente ejemplo nos quedamos con las primeras 3 palabras y la 5:

```txt
C:\>FOR /F "tokens=1-3,5" %a IN (fich.txt) DO @ECHO %a %b %c - %d
El corazón y - cerebro,
que se llevan - primacía
la razón, son - que
coplas de Jorge - a
```

Y si deseamos la línea completa a partir de la 7° palabra:

```txt
C:\>FOR /F "tokens=7*" %A IN (fich.txt) DO @ECHO %A %B
dos grandes vísceras
los sentimientos y de
el arranque de las
muerte de su padre.
```

Y si queremos toda la línea, seleccionaremos todos los **tokens** de cada línea:

```txt
C:\>FOR /F "tokens=*" %m IN (fich.txt) DO @ECHO [ %m ]
[ El corazón y el cerebro, las dos grandes vísceras ]
[ que se llevan la primacía de los sentimientos y de ]
[ la razón, son las que presiden el arranque de las ]
[ coplas de Jorge Manrique a la muerte de su padre. ]
```

**Delimitadores**

En los ejemplos anteriores los "**tokens**" coincidían con las palabras, para separarlos se han utilizado el espacio en blanco y la tabulación. Podemos modificar los delimitadores con la cláusula **`delims=`**.  

En el siguiente ejemplo anulamos los delimitadores y obtenemos lo mismo de antes:



