# VARIABLES EN BAT

## CONTENIDO

- [Capturar en variable la entrada estándar](#entrada-estandar)
- [Anidar variables](#variables-anidada)
- [Capturar los argumentos posicionales](#variables-posicionales)


<a name="entrada-estandar"></a>
### Capturar los argumentos posicionales

**1)** Paso de parámetros a un archivo bat desde entrada estándar:  

```bat
SET /P variable=[mensaje]
```

>El modificador **`/P`** permite establecer el valor a la **variable** para una línea de entrada escrita por el usuario. Muestra el **mensaje** antes de leer la línea de entrada.


Ejemplo de uso: 

```cmd
@echo off
set /p nombre=¿Cómo te llamas? 
echo.
echo nunca me gustó el nombre de %nombrex%
```

>nota: Podemos usar comillas en el mensaje que no serán visualizadas: `set /p nombre="¿Cómo te llamas?  "`


Otra cosa es que también podemos recibir el argumento desde una **entrada estándar** introduciendo la información a través de de un **pipe**, o redirigida desde un archivo o dispositivo:  


```cmd
:: invocando al programa gresero.bat
echo Ferreolo Anastasio | grosero.bat
```
---

<a name="variables-anidada"></a>
### Anidar variables

Podemos anidar cualquier variable en otras variables. Por ejemplo:

```cmd
@echo off

set POSTGRESROOT=C:\PostgreSQL
set POSTGRESCURRENT=%POSTGRESROOT%\12
set POSTGRESDATA=%POSTGRESCURRENT%\data
echo %POSTGRESDATA%
:: salida 👉 C:\PostgreSQL\12\data
pause
```

<a name="variables-posicionales"></a>
## Variables posicionales


- **`%0`**: almacena el nombre del script
- **`%1`**: se almacena el valor del primer argumento
- **`%2,..., %9`**:  se guarda el valor del segundo argumento, y así sucesivamente
- **`%*`**: contiene **la lista** con todos los argumentos introducidos desde línea de comandos.


```cmd
@echo off
echo nombre del script: %0
echo primer argumento: %1 
echo segundo argumento: %2
echo tercer argumento: %3
echo todos los argumentos: %*

pause
```



