### Apagar (reiniciar sistema o cerrar sesión)


apagar el sistema

```bash
shutdown -h now
init 0
halt
```

apagar planificado:

```bash
shutdown -h hours -minutes 8
```

cancelar el apagado planificado

```bash
shutdown -c
```

reiniciar el sistema

```bash
shutdown -r now
reboot
```

cerrar sesión

```bash
logout
```


### Archivos y directorios


entrar a un directorio

```bash
cd 'path/to/file'
```
retroceder un nivel

```bash
cd ..    # un nivel
cd ../.. # dos niveles
```

ir al directorio del usuario

```bash
cd ~
```






