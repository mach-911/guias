## PASAR INFORMACIÓN A UN ARCHIVO BAT

Hay dos métodos para pasar información a un archivo **bat**:  

2. [entrada estándar](#entrada-estandar)
1. [línea de comandos](#desde-linea-de-comandos)

<a name="entrada-estandar"></a>
**1)** Paso de parámetros a un archivo bat desde entrada estándar:  

```bat
SET /P variable=[mensaje]
```

>El modificador **`/P`** permite establecer el valor a la **variable** para una línea de entrada escrita por el usuario. Muestra el **mensaje** antes de leer la línea de entrada.


Ejemplo de uso: 

```bat
@echo off
set /p nombre=¿Cómo te llamas? 
echo.
echo nunca me gustó el nombre de %nombrex%
```

>nota: Podemos usar comillas en el mensaje que no serán visualizadas: `set /p nombre="¿Cómo te llamas?  "`


Otra cosa es que también podemos recibir el argumento desde una **entrada estándar** introduciendo la información a través de de un **pipe**, o redirigida desde un archivo o dispositivo:  


```bat
:: invocando al programa gresero.bat
echo Ferreolo Anastasio | grosero.bat
```
<a name="desde-linea-de-comandos"></a>
**2)** Paso de parámetros a un archivo bat desde línea de comandos

Podemos introducir datos al archivo **.bat** desde línea de comandos, que serán almacenados en las denominadas variables posicionales: 

- **`%0`**: almacena el nombre del comando
- **`%1`¨**: se almacena el valor del primer argumento
- **`%2,..., %9**:	se guarda el valor del segundo argumento, y así sucesivamente
- **`%*`**: contiene **la lista** con todos los argumentos introducidos desde línea de comandos.



