## CONTENIDO

- [Instalación](#instalacion)

### Fragmentos de Emmet

- [Formularios](#formulario)

<a name="instalacion"></a>
## Instalación

### Visual Studio Code

**VS Code** viene integrado con [emmet](https://emmet.io/) por lo que no es necesario hacer nada. Para la acción de activar el código autocompletado debemos escribir la abreviatura correspondiente seguido de la tecla <kbd>TAB</kbd>.  

### SublimeText

Abrimos **package control** (<kbd>Crtl</kbd>+<kbd>Shift</kbd>+<kbd>p</kbd>) luego escribimos **install** y seleccionamos la opción ***Install Package***.

Escribir el nombre del paquete, en este caso tiene el nombre de ***Emmet***

---


Generar una etiqueta link para favicon:  


**`link:favicon`**

```html
  <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
```

Para generar una etiqueta `<p>` con un contenido de texto en su interior debemos usar las llaves `{}` y luego con el símbolo u operador `+` podemos generar otras etiquetas a partir del mismo texto:  

**`p>{Click }+a{aquí}+{ para continuar}`**

```html
<p>Click <a href="">aquí</a> para continuar</p>
```


Generar una lista desordenada `<ul>` con 3 etiquetas `<li>` en su interior:  

- **`ul>li*3`**

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

Generar una lista desordenada `<ul>` con 5 etiquetas `<li>` y a cada una de las etiquetas se le añade un contenido con el texto **item-** y terminando con un número que aumenta de forma ascendente por cada elemento de la lista:  

- **`ul>li*5{item-$}`**

```html
<ul>
  <li>item-1</li>
  <li>item-2</li>
  <li>item-3</li>
  <li>item-4</li>
  <li>item-5</li>
</ul>
```

<a name="formulario"></a>
## formularios

Generar un formulario ya sea con el método 'get' o 'post':  

- **`form:get`** || **`form:post`**

```html
<form action="" method="get"></form>
<form action="" method="post"></form>
```

Generar entradas de diferentes tipos:  

**tipo texto**

`inp` || `input:t` || `input:text`

```html
<input type="text" name="" id="">
```

**tipo contraseña**  

- `input:p` || `input:password`

```html
<input type="password" name="" id="">
```

Generar un control de selección única con opciones:

**`select>opt{HTML}+opt{CSS}+opt{JS}`**

```html
<select name="" id="">
  <option value="">HTML</option>
  <option value="">CSS</option>
  <option value="">JS</option>
</select>
```






Generar los 6 niveles de cabeceras de las etiquetas `<h>` añadiendole el atributo **`title`** con valor de **ejemplo** y un contenido en cada una de las etiquetas generadas agregandole al final de cada marcador de posición (`$`) la numeración ascendente.  

- **`h$[title=Cabecera$]{Esto es un H$}*6`**


```html
<h1 title="Cabecera1">Esto es un H1</h1>
<h2 title="Cabecera2">Esto es un H2</h2>
<h3 title="Cabecera3">Esto es un H3</h3>
<h4 title="Cabecera4">Esto es un H4</h4>
<h5 title="Cabecera5">Esto es un H5</h5>
<h6 title="Cabecera6">Esto es un H6</h6>
```







**tipo números**

- **`input:number`**

```html
<input type="number" name="" id="">
```
**tipo de rango**

- **`input:range`**

```html
<input type="range" name="" id="">
```

**email**

- **`input:email`**

```html
<input type="email" name="" id="">
```
**de teléfono**
	
- **`input:tel`**

```html
<input type="tel" name="" id="">
```

**de imagen**

- **`input:i`** || **`input:image`**

```html
<input type="image" src="" alt="">
```

**de botón**

- **`input:b`** || **`input:buttom`** || **`input:submit`**

**url**

- **`input:url`**

```html
<input type="url" name="" id="">
```

**oculto**

- **`input:h`** || **`input:hidden`**

```html
<input type="hidden" name="">
```
**de búsqueda**

- **`input:search`**

```html
<input type="search" name="" id="">
```

**de archivos**

- **`input:f`** || **`input:file`**

```html
<input type="file" name="" id="">
```

**un control de colores (color picker)**

- **`input:color`**

```html
<input type="color" name="" id="">
```

**de fecha y hora** 

- **`input:datetime`**

```html
<input type="datetime" name="" id="">
```

**de fecha**

- **`input:date`**

```html
<input type="date" name="" id="">
```

**de fecha y hora local**  

- **`input:datetime-local`**

```html
<input type="datetime-local" name="" id="">
```

**de mes**

- **`input:month`**

```html
<input type="month" name="" id="">
```

**de semana**

- **`input:week`**

```html
<input type="week" name="" id="">
```
**de hora**

- **`input:time`**

```html
<input type="time" name="" id="">
```

>Esto no es una guía completa de emmet, solo algunos ejemplos practicos que comprenden los métodos de uso. Para ver una guía más en detalle de todo lo que ofrece emmet puedes ir a su [documentación oficial.](https://docs.emmet.io/) 
