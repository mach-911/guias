## Alias de consola CMD

Para hacer que los **alias** sean persistente, debemos seguir los siguientes pasos:

1. Crea un archivo llamado **alias.bat** o **alias.cmd** con los comandos `DOSKEY` necesarios
2. Abrimos **regedit** y vamos a `HKEY_CURRENT_USER\Software\Microsoft\Command Processor`
3. Agregamos una entrada de valor de cadena con el nombre **AutoRun** y la ruta completa de su archivo `path/to/alias.bat`.


Para completar, aquí dejo unos ejemplos para ilustrar tipos de alias que pueden ser útil: 

```bat
:: Alias
DOSKEY ls=dir /B $*
DOSKEY rm=rmdir /S/Q $*
DOSKEY touch=echo. $G $*
:: Alias para git
DOSKEY gs=git status -s
DOSKEY ga=git add $*
DOSKEY gc=git commit -m $*
``` 