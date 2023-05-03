
### Información del sistema

mostrar la arquitectura

```bash
arch
```

mostrar el kernel usado y la arquitectura

```bash
uname -r
```

mostrar la fecha del sistema

```bash
date
```


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

---

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

mostrar el camino (*path*) actual

```bash
pwd
```

ver los archivos de un directorio

```bash
ls
```

ver los archivos incluyendo los ocultos

```bash
ls -A
```



