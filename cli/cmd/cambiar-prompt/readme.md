## Cambiar prompt de Windows permanentemente

Abrir el panel de control y vamos **Sistema**. Una vez ahí seleccionamos **configuración avanzada del sistema**

Hacemos clic en **Variables de entorno**, agregamos una nueva variable del sistema, en **Nombre de la variable** colocamos **`PROMPT`**.

Como ejemplo yo lo tengo configurado para que me muestre el **path** y en una segunda línea me permite ingresar los comandos, el valor para la variable de entorno `PROMPT` para que genere este resultado sería el siguiente:

```bat
setx PROMPT $P$_$G 
```

Ahora podemos abrir una nueva consola y el prompt estará aplicado.

```txt
C:\Users\home\Desktop
> dir /B
organizer
personal
start.bat
cv.pdf
test_grep.txt
```
