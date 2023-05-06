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