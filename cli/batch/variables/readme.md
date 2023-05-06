# VARIABLES EN BATCH

## CONTENIDO

- [Variables posicionales](#variables-posicionales)

Podemos anidar cualquier variable en otras variables. Por ejemplo:

```bat
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


- **`%0`**: almacena el nombre del comando
- **`%1`¨**: se almacena el valor del primer argumento
- **`%2,..., %9`**:  se guarda el valor del segundo argumento, y así sucesivamente
- **`%*`**: contiene **la lista** con todos los argumentos introducidos desde línea de comandos.


```bat
@echo off
echo nombre del script: %0
echo primer argumento: %1 
pause
```



