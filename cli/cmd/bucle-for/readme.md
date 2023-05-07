## Estructura de control

**bucles FOR**

Ejecuta el comando para cada uno de los elementos especificados en la lista:  

**Sintaxis**

```bat
FOR %NombreVariable IN (lista) DO comando  # desde línea de comandos
FOR %%NombreVariable IN (lista) DO comando # dentro de archivos BAT
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

