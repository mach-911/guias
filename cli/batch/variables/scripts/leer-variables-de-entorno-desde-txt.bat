@echo off


FOR /F "delims=" %%i IN (variables-de-entorno.txt) DO (
  @echo %%i   
)

pause>nul