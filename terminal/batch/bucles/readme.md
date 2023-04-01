[comment]: <> (Author: Marco Contreras Herrera)
[comment]: <> (Email: enidev911@gmail.com)

# VARIABLES EN BATCH



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

