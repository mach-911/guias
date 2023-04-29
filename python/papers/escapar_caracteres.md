<h1 align="center">

<code>ESCAPAR CARACTERES</code>
</h1>

<img src="https://badges.aleen42.com/src/python.svg" alt="badge python" height="30">

Cuando use un carácter de escape, **Python** lo interpretará. Los caracteres de escape usarán comillas simples o dobles. Antes de que pueda usar un carácter de escape, es importante usar una barra invertida "**`\`**" para que Python sepa lo que esta tratando de hacer.
 

**`\a`** – una campana o una alerta :sound:

```py
sound = "\a"
print(sound) # se emite un sonido tipo bell
```

**`\b`** – salta un espacio <kbd>backspace</kbd>


```py
foo = "Hola\b bienvenido\b"
print(foo) # output: Hol bienvenid 
```

**`\t`** – inserta una tabulación <kbd>Tab&nbsp;↹</kbd>

```py
t = "Tab\tTab\tTab"
print(t) # output: Tab    Tab    Tab
```

**`\r`** – inserta un retorno de carro

```py
s = "Primera\rSugunda Tercera"
print(s) # output: Segunda Tercera
```

**`\v`** – inserta una tabulación vertical (funciona con gitbash en windows o en sistemas unix)

```py
nombre = "Marco\vContreras"
print(nombre) # output bash: Marco
              #                   Contreras
              # output cmd: Marco♂Contreras
```


**`\'`**,**`\"`**,**`\\`** – para guardar solo una comilla simple o dobles o barra invertida

```py
frase = "/\\\"Como bien dijo Einstein: \'La estupidez humana es "+\
"infinita\'\"."
print(frase)
# output: /\"Como bien dijo Einstein, 'La estupidez humana es infinita'".
```
