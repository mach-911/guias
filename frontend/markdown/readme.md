[comment]: <> (Author: Marco Contreras Herrera)
[comment]: <> (Email: marco.contreras.h90@gmail.com)


<h2 align="center">
<img height="50" src="https://img.shields.io/badge/markdown-%23000000.svg?logo=markdown&logoColor=white"><br><br>
Guía de referencia con la sintaxis y extras
</h2> 


Esta guía rápida sirve para recordar todas las posibilidades que ofrecen [Markdown](https://es.wikipedia.org/wiki/Markdown) y [Pygments](https://pygments.org/) para editar y formatear texto y comúnmente lo empleo para crear documentos como esta guía que estás revisando, artículos de blog, escribir en sitios web como <https://stackoverflow.com>. Esta guía tiene referencias y vista previa de los elementos que usan sintaxis de Markdown, de forma que no solo me sirva de guía a mí, si no a cualquiera que se sienta a gusto de experimentar desde la sintaxis básica hasta un cierto punto de la sintaxis extendida.  

A continuación sigue una lista detallada de todas las características que se pueden emplear en Markdown y Markdown Extra y los lexers más comunes de Pygments para resaltar el código fuente.  

<a name="top"></a>

## Introducción

- [¿Que es Markdown?](#intro-markdown)
- [Ventajas de usar Markdown](#ventajas)

## Utilidades

- [Editor Markdown online](https://dillinger.io)


## Sintaxys Markdown

- [Cabeceras](#cabeceras)
- [Enlaces](#enlaces)
- [Párrafos](#parrafos)
- [Formato](#formato)
- [Citas](#citas)
- [Listas](#listas)
- [Listas de definiciones](#lista-definiciones)
- [Imágenes](#imagenes)
- [Tablas](#tablas)
- [Código](#codigo)
- [Lineas Horizontales](#lineas)
- [Escapar caracteres](#escapar-caracteres)
- [Notas a pie de página](#pie-pagina)
- [Abreviaturas](#abreviatura)
- [Indentificadores de cabecera](#mark15)
- [Casillas de verificación](#casillas-verificacion)
- [Emojis](#emoji)
	+ [Usar emoji en tablas](#emoji-tablas)
- [Pygments](#pygments)


## <a name="intro-markdown"></a>¿Que es Markdown?

Markdown es un lenguaje de marcado ligero parecido al que se emplea en muchas wikis y basado originalmente en convenciones existentes en el marcado de los correos electrónicos. Emplea texto plano, procurando que sea legible pero consiguiendo que se convierta en XHTML correctamente formateado. Fue creado por [**John Gruber**](https://en.wikipedia.org/wiki/John_Gruber) en el año 2004, siendo a día de hoy uno de los lenguajes de marcado más famosos. Su popularidad se debe a que es sencillo, ligero y fácil de aprender.

<p align="left">
<img src="./assets/jhon_gruber_author.jpg" width="290" height="300">
</p>

## <a name="ventajas"></a>Ventajas de usar Markdown

- &nbsp;&nbsp; 🙌 &nbsp;&nbsp; **Es sencillo de aprender**
- &nbsp;&nbsp; 🤘 &nbsp;&nbsp; **Es bastante más legible y fácil de mantener**
- &nbsp;&nbsp; 🚀 &nbsp;&nbsp; **Escribir para web es más rápido y cómodo**
- &nbsp;&nbsp; 🔎 &nbsp;&nbsp; **Es más difícil de cometer errores se sintaxis**
- &nbsp;&nbsp; 📝 &nbsp;&nbsp; **Es perfecto para usarlo con editores de texto minimalistas**
- &nbsp;&nbsp; 👉 &nbsp;&nbsp; **Permite que te concentres en generar contenido en lugar del formato**
- &nbsp;&nbsp; 💾 &nbsp;&nbsp; **Portabilidad, se puede convertir en varios formatos**
- &nbsp;&nbsp; 👀 &nbsp;&nbsp; **Lo que ves es lo que quieres decir**


<a href="#top">![](https://img.shields.io/badge/regresar%20a%20contenido-%E2%86%A9-black?style=for-the-badge)</a>

---

<a name='cabeceras'></a>
## Cabeceras

Los encabezados en markdown se producen colocando un número determinado de almohadillas `#` antes del texto correspondiente al nivel de encabezamiento deseado (HTML ofrece hasta seis niveles). Los encabezamientos posibles se pueden ver en la siguiente tabla:  

<table>
	<colgroup>
		<col span="1" style="width:40%">
		<col span="1" style="width:60%">
	</colgroup>
	<thead>
		<tr>
			<th>Tecleas</th>
			<th>Resultado</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><pre class="no_mrkdwn"># Esto es un &#60;h1&#62; en html</pre></td>
			<td><h2 style="font-size:30px;">Esto es un &#60;h1&#62; en html</h2></td>
		</tr>
		<tr>
			<td>
				<pre class="no_mrkdwn">## Esto es un &#60;h2&#62; en html</pre>
			</td>
			<td>
				<h2>Esto es un &#60;h2&#62; en html</h2>
			</td>
		</tr>
		<tr>
			<td>
				<pre class="no_mrkdwn">### Esto es un &#60;h3&#62; en html</pre>
			</td>
			<td>
				<h3>Esto es un &#60;h3&#62; en html</h3>
			</td>
		</tr>
		<tr>
			<td>
				<pre class="no_mrkdwn">#### Esto es un &#60;h4&#62; en html</pre>
			</td>
			<td>
				<h4>Esto es un &#60;h4&#62; en html</h4>
			</td>
		</tr>
		<tr>
			<td>
				<pre class="no_mrkdwn">##### Esto es un &#60;h5&#62; en html</pre>
			</td>
			<td>
				<h5>Esto es un &#60;h5&#62; en html</h5>
			</td>
		</tr>
		<tr>
			<td>
				<pre class="no_mrkdwn">###### Esto es un &#60;h6&#62; en html</pre>
			</td>
			<td>
				<h6>Esto es un &#60;h6&#62; en html</h6>
			</td>
		</tr>
	</tbody>
</table>

Markdown también nos permite encerrar cada encabezado entre almohadillas, pero con el único fin de esto es un **motivo estético** porque no es necesario en absoluto, es decir, que podemos hacer lo siguiente:


<table>
 	<colgroup>
		<col span="1" style="width:40%;">
		<col span="1" style="width:60%">
	</colgroup>
	<thead>
		<tr>
			<th>Tecleas</th>
			<th>Resultado</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<pre class="no_mrkdwn">### Esto es un &#60;h3&#62; en html ###</pre>
			</td>
			<td>
				<h3>Esto es un &#60;h3&#62; en html</h3>
			</td>
		</tr>
	</tbody>
</table>

Para los encabezamientos de los dos primeros niveles existe también otra manera de hacer lo mismo seria lo siguiente: 

<table>
	 <colgroup>
		<col span="1" style="width:40%;">
		<col span="1" style="width:60%">
	</colgroup>
	<thead>
		<tr>
			<th>Tecleas</th>
			<th>Resultado</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<pre class="no_mrkdwn">Esto es un &#60;h1&#62; en html<br>=======================</pre>
			</td>
			<td>
				<h2 style="font-size:30px;">Esto es un &#60;h1&#62; en html</h2>
			</td>
		</tr>
			<tr>
			<td>
				<pre class="no_mrkdwn">Esto es un h2<br>-------------</pre>
			</td>
			<td>
				<h2>Esto es un h2</h2>
			</td>
		</tr>
	</tbody>
</table>

Es decir para los encabezamientos principales se subraya el texto con el signo igual '`=`'. Para los encabezamientos de segundo nivel se utilizan guiones '`-`' para subrayar. Es indiferente el número de signos iguales o guiones que se empleen, con uno es suficiente.

<a href="#top">![](https://img.shields.io/badge/regresar%20a%20contenido-%E2%86%A9-black?style=for-the-badge)</a>

---

<a name="enlaces"></a>
## Enlaces

Markdown admite dos maneras de crear enlaces en **línea** y por **referencia**.

Ejemplo enlaces en línea:  


<table>
	<colgroup>
		<col span="1" style="width:40%;">
		<col span="1" style="width:60%">
	</colgroup>
	<thead>
		<tr>
			<th>Tecleas</th>
			<th>Resultado</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<pre class="no_mrkdwn">[Con título](https://&#60;url&#62;.com "título")</pre>
			</td>
			<td>
				<a href="#enlaces" title="título">Con título</a>
			</td>
		</tr>
		<tr>
			<td>
				<pre class="no_mrkdwn">[Sin titulo](https://&#60;url&#62;.com)</pre>
			</td>
			<td>
				<a href="#enlaces">Sin título</a>
			</td>
		</tr>
	</tbody>
</table>

Ejemplo enlaces por referencia:  

<table>
	<colgroup>
		<col span="1" style="width:40%;">
		<col span="1" style="width:60%">
	</colgroup>
	<thead>
		<tr>
			<th>Tecleas</th>
			<th>Resultado</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<pre class="no_mrkdwn">[Enlace 1][1], [Enlace 2][2],<br>[Enlace 3][3]<br>[1]: http://&#60;url&#62;.com/tips<br>[2]: http://&#60;url&#62;.com/tips "Título"<br>[3]: http://&#60;url&#62;.com/</pre>
			</td>
			<td>
				<a href="#enlaces">Enlace1</a>,
				<a href="#enlaces" title="Título">Enlace2</a>,
				<a href="#enlaces">Enlace3</a>
			</td>
		</tr> 	
	</tbody>
</table>

Podemos embeber una imagén dentro un enlace de la siguiente manera:  

<table>
	<colgroup>
		<col span="1" style="width:40%;">
		<col span="1" style="width:60%">
	</colgroup>
	<thead>
		<tr>
			<th>Tecleas</th>
			<th>Resultado</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<pre class="no_mrkdwn">[![Guithub](https://&lt;url_imagen&gt;.png)](https://github.com)</pre>
			</td>
			<td>
				<a href="https://github.com">
					<img src="./assets/github.png" alt="github logo" height="40">
				</a>
			</td>
		</tr> 	
	</tbody>
</table>



Existe una manera adicional de crear enlaces automáticos para direcciones URL, simplemente encerrarla entre los caracteres '`<`' y '`>`':

<table>
	<colgroup>
		<col span="1" style="width:40%;">
		<col span="1" style="width:60%">
	</colgroup>
	<thead>
		<tr>
			<th>Tecleas</th>
			<th>Resultado</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><pre class="no_mrkdwn">&#60;http://google.com&#62;</pre></td>
			<td><a href="http://google.com">http://google.com</a></td>
		</tr>
	</tbody>
</table>


>**Consideración**: Markdown no tiene la opción de publicar links que se abran en una nueva pestaña del navegador como en HTML con el atributo `target='_blank'`.

<a href="#top">![](https://img.shields.io/badge/regresar%20a%20contenido-%E2%86%A9-black?style=for-the-badge)</a>

---

<a name="parrafos"></a>
## Párrafos

Para crear párrafos se deja una línea en blanco. De este mondo:  

<table>
	<colgroup>
		<col span="1" style="width:40%;">
		<col span="1" style="width:60%">
	</colgroup>
		<thead>
		<tr>
			<th>Tecleas</th>
			<th>Resultado</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<pre class="no_mrkdwn"> Este es el primer párrafo<br><br> Este es el segundo párrado</pre>
			</td>
			<td>
				<p>Este es el primer párrafo</p>
				<p>Este es el segundo párrafo</p>
			</td>
		</tr>
	</tbody>
</table>


Para crear un salto de línea dentro de un parráfo, simplemente se dejan dos espacios al final de la última palabra de esa línea, de este modo:  

<table>
	<colgroup>
		<col span="1" style="width:40%;">
		<col span="1" style="width:60%">
	</colgroup>
		<thead>
		<tr>
			<th>Tecleas</th>
			<th>Resultado</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<pre class="no_mrkdwn"> Esta es la primera línea  <br>y este es la segunda línea</pre>
			</td>
			<td>
				<p>Esta es la primera línea<br>y este es el salto de línea</p>
			</td>
		</tr>
	</tbody>
</table>

<a href="#top">![](https://img.shields.io/badge/regresar%20a%20contenido-%E2%86%A9-black?style=for-the-badge)</a>

---

<a name="formato"></a>
## Formato

El formato básico del texto, es decir negritas y cursivas, tachado, markdown no tiene para subrayar texto. Se pueden realizar de varias maneras: 


<table>
	<colgroup>
		<col span="1" style="width:40%;">
		<col span="1" style="width:60%">
	</colgroup>
	<thead>
		<tr>
			<th align="left">Tecleas</th>
			<th align="left">Resultado</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<pre class="no_mrkdwn">**Esto es negrita**</pre>
			</td>
			<td>
				<b>Esto es negrita</b>
			</td>
		</tr>
		<tr>
			<td>
				<pre class="no_mrkdwn">__Esto también es negrita__</pre>
			</td>
			<td>
				<b>Esto también es negrita</b>
			</td>
		</tr>
		<tr>
			<td>
				<pre class="no_mrkdwn">*Esto es cursiva*</pre>
			</td>
			<td>
				<i>Esto es cursiva</i>
			</td>
		</tr>
		<tr>
			<td>
				<pre class="no_mrkdwn">_Esto también es cursiva_</pre>
			</td>
			<td>
				<i>Esto también es cursiva</i>
			</td>
		</tr>
		<tr>
			<td>
				<pre class="no_mrkdwn">***Esto es negrita y cursiva***</pre>
			</td>
			<td>
				<b><i>Esto es negrita y cursiva</i></b>
			</td>
		</tr>
		<tr>
			<td>
				<pre class="no_mrkdwn">___Esto también es negrita y cursiva___</pre>
			</td>
			<td>
				<b><i>Esto también es negrita y cursiva</i></b>
			</td>
		</tr>
		<tr>
			<td>
				<pre class="no_mrkdwn">~~Esto es tachado~~</pre>
			</td>
			<td>
				<del>Esto es tachado</del>
			</td>
		</tr>
	</tbody>
</table>

Se pueden emplear indistintamente tanto el asterisco `*` como el guión bajo `_` siempre y cuando no se mezclen y lo que determina el formato es el número de ellos antes y después del bloque de texto a formatear. Uno es cursiva, dos es negrita, y tres ambas, así de sencillo.

<a href="#top">![](https://img.shields.io/badge/regresar%20a%20contenido-%E2%86%A9-black?style=for-the-badge)</a>

---

<a name="citas"></a>
## Citas

Para crear bloques de cita, se emplea el carácter mayor que `>` antes del bloque de texto. En la siguiente tabla se pueden ver las opciones para crearlos:  

<table>
	<colgroup>
		<col span="1" style="width:30%;">
		<col span="1" style="width:70%">
	</colgroup>
	<thead>
		<tr>
			<th align="left">Tecleas</th>
			<th align="left">Resultado</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<pre class="no_mrkdwn">Esto es una línea normal<br><br>>Esto es parte de un bloque de cita.<br>>Esto es parte del mismo bloque de cita.</pre>
			</td>
			<td>
				<p>Esto de una línea normal</p>
				<blockquote>
				<p>Esto es parte de un bloque de cita. Esto es parte del mismo bloque de cita.</p>
				</blockquote>
			</td>
		</tr>
		<tr>
			<td>
				<pre class="no_mrkdwn">>Esto es parte de un bloque de cita. <br>Esto continúa el bloque incluso aunque<br>no hay símbolo 'mayor que'.<br><br>La línea en blanco finaliza el bloque</pre>
			</td>
			<td>
				<blockquote>
					<p>Esto es parte de un bloque de cita. Esto continúa el bloque incluso aunque no hay símbolo 'mayor que'.</p>
				</blockquote>
				<p>La Línea en blanco finaliza el bloque</p>
			</td>
		</tr>
		<tr>
			<td>
				<pre>Esto es una línea normal<br><br>>Esto es parte de un bloque de cita.<br>>Esto es parte del mismo bloque de cita.<br>><br>>>Esto de otro bloque de cita anidado.<br>>>Esto es parte del bloque anidado. <br>><br>>Esto es parte del bloque de cita del primer nivel.
				</pre>
			</td>
			<td>
				<p>Esto es una línea normal</p>
				<blockquote>
					<p>Esto es parte de un bloque de cita. Esto es parte del mismo bloque de cita.</p><blockquote>
					<p>Esto es otro bloque de cita anidado. Esto es parte del bloque anidado.</p></blockquote>
				<p>Esto de parte del bloque de cita de primer nivel.</p>
				</blockquote>
			</td>
		</tr>
	</tbody>
</table>

<a href="#top">![](https://img.shields.io/badge/regresar%20a%20contenido-%E2%86%A9-black?style=for-the-badge)</a>

---

<a name="listas"></a>
## Listas

Markdown permite crear dos tipos de listas, ordenadas y desordenadas, es decir numeradas o listas de puntos. Para distinguir los tipos y como se crean, nada mejor que verlo con ejemplos:  


<table>
	<colgroup>
		<col span="1" style="width:40%;">
		<col span="1" style="width:60%">
	</colgroup>
	<thead>
		<tr>
			<th align="left">Tecleas</th>
			<th align="left">Resultado</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<pre>Lista numerada (ordenada)<br><br>1. Este es el primer elemento<br>2. Este es el segundo elemento<br>3. Este es el tercer elemento
				</pre>
			</td>
			<td>
				<p>Lista numerada (ordenada)</p>
				<ol>
					<li>Este es el primer elemento</li>
					<li>Este es el segundo elemento</li>		<li>Este es el tercer elemento</li>
				</ol>
			</td>
		</tr>
		<tr>
			<td>
				<pre>Lista de puntos (desordenada)<br><br>* Un elemento de la lista<br>* Otro elemento de la lista<br>* Tercer elemento de la lista</pre>
			</td>
			<td>
				<p>Lista de puntos (desordenada)</p>
				<ul>
					<li>Un elemento de la lista</li>
					<li>Otro elemento de la lista</li>
					<li>Tercer elemento de la lista</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>
				<pre>Se pueden emplear también + y -<br>en vez de *<br><br>* Un elemento de la lista<br>+ Otro elemento de la lista<br>- Tercer elemento de la lista</pre> 
			</td>
			<td>
				<p>Se pueden emplear también + y - en vez *</p>
				<ul>
					<li>Un elemento de la lista</li>
					<li>Otro elemento de la lista</li>
					<li>Tercer elemento de la lista</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>
				<pre>Se pueden mezclar distintos tipos<br>de listas y anidar unas dentro de<br>otras.<br><br>1. Esto es una lista ordenada<br>2. Segundo elemento de la lista ordenada<br>&nbsp;&nbsp;&nbsp;&nbsp;1. Esta es una lista ordenada<br> anidada dentro de otra<br>        * Lista desordenada anidada a tercer nivel<br>        * Segundo elemento de esta lista<br>    2. Este es el segundo elemento<br>de la lista ordenada anidada</pre>
			</td>
			<td>
				<p>Se pueden mezclar distintos tipos de listas y anidar unas dentro de otras.</p>
				<ol>
					<li>Esto es una lista ordenada</li>
					<li>Segundo elemento de la lista ordenada</li>
					<ol>
						<li>Esta es una lista ordenada anidada dentro de otra</li>
						<ul>
							<li>Lista desordenada anidada a tercer nivel</li>
							<li>Segundo elemento de esta lista</li>
						</ul>
						<li>Este es el segundo elemento de la lista ordenada anidada</li>
					</ol>
				</ol>
			</td>
		</tr>
	</tbody>
</table>

<a href="#top">![](https://img.shields.io/badge/regresar%20a%20contenido-%E2%86%A9-black?style=for-the-badge)</a>

---

<a name="lista-definiciones"></a>
## Listas de definiciones

Se pueden crear listas de definiciones, que están compuestas del **término** y la **lista de definiciones** del mismo, como si fuera un diccionario. Su creación es muy simple:  

<table>
	<colgroup>
		<col span="1" style="width:40%;">
		<col span="1" style="width:60%">
	</colgroup>
	<thead>
		<tr>
			<th align="left">Tecleas</th>
			<th align="left">Resultado</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<pre>Primer término<br> : Primera definición<br><br>Segundo término<br> : segunda definición
				</pre>
			</td>
			<td>
				<p><b>Primer término</b><br>&nbsp;&nbsp;&nbsp;&nbsp;Primera definición</p>
				<p><b>Segundo término</b><br>&nbsp;&nbsp;&nbsp;&nbsp;Segunda definición</p>
			</td>
		</tr>
		<tr>
			<td>
				<pre>Se pueden aplicar más de una<br>definición a un término<br><br>Primer término<br> : Primera definición<br> : Segunda definición<br><br>Segundo término<br> : Segunda definición</pre>
			</td>
			<td>
				<p>Se pueden aplicar más de una definición a un término</p>
				<p><b>Primer término</b><br>&nbsp;&nbsp;&nbsp;&nbsp;Primera definición<br>&nbsp;&nbsp;&nbsp;&nbsp;Segunda definición</p>
				<p><b>Segundo término</b><br>&nbsp;&nbsp;&nbsp;&nbsp;Segunda definición</p>
			</td>
		</tr>
		<tr>
			<td>
				<pre>Se pueden aplicar más de un<br>término a una definición<br><br>Primer término<br>Segundo término<br> : Primera definición<br><br>Tercer término<br> : Segunda definición</pre>
			</td>
			<td>
				<p>Se pueden aplicar más de un término a una definición</p>
				<p><b>Primer término</b><br><b>Segundo término</b><br>&nbsp;&nbsp;&nbsp;&nbsp;Primera definición</p>
				<p><b>Tercer término</b><br>&nbsp;&nbsp;&nbsp;&nbsp;Segunda definición</p>
			</td>
		</tr>
		<tr>
			<td>
				<pre>Una definición puede contar de<br>varios párrafos.<br><br>Primer término<br> : Primera definición<br><br>Segundo párrafo de la primera<br>definición</pre>
			</td>
			<td>
				<p>Una definición puede contar de varios párrafos.</p>
				<p><b>Primer término</b><br>&nbsp;&nbsp;&nbsp;&nbsp;Primera definición<br>&nbsp;&nbsp;&nbsp;&nbsp;Segundo parráfo de la primera definición</p>
			</td>
		</tr>
	</tbody>
</table>


>**Consideración**: En la primera línea escribimos el término y en la siguiente dejamos un espacio en blanco e ingresamos el carácter **`:`** y la definición de cuyo término precedido de un espacio en blanco.

<a href="#top">![](https://img.shields.io/badge/regresar%20a%20contenido-%E2%86%A9-black?style=for-the-badge)</a>

---

<a name="imagenes"></a>
## Imágenes

La manera de enlazar imágenes es básicamente la misma de crear enlaces, con una única diferencia de que se añade el carácter de exclamación **`!`** al principio de la pareja de corchetes que definen el nombre del enlace.  


<table>
	<colgroup>
		<col span="1" style="width:40%;">
		<col span="1" style="width:60%">
	</colgroup>
	<thead>
		<tr>
			<th align="left">Tecleas</th>
			<th align="left">Resultado</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<pre>![Con titulo](pictures/logo.png "logo")</pre>
			</td>
			<td>
				<img width="80" src="../../assets/png/logo_sin_bg.png" alt="logo" title="logo">
			</td>
		</tr>
		<tr>
			<td>
				<pre>![Sin tituo](pictures/logo.png)</pre>
			</td>
			<td>
				<img width="80" src="../../assets/png/logo_sin_bg.png" alt="logo">
			</td>
		</tr>
		<tr>
			<td>
				<pre>![Imagen 1][1]  ![Imagen 2][2]<br><br>[1]: pictures/logo.png<br>[2]: pictures/logo_bg.png "logo"</pre>
			</td>
			<td>
				<img width="80" src="../../assets/png/logo_sin_bg.png" alt="logo">
				<img width="80" src="../../assets/png/logo_con_bg.png" alt="logo">
			</td>
		</tr>
	</tbody>
</table>

<a href="#top">![](https://img.shields.io/badge/regresar%20a%20contenido-%E2%86%A9-black?style=for-the-badge)</a>

---

<a name="tablas"></a>
## Tablas

Crear tablas es sumamente sencillo, simplemente debemos indicar cuales son los elementos de la cabecera y separar los campos con el símbolo.  

Ejemplos:  


<table>
	<colgroup>
		<col span="1" style="width:40%;">
		<col span="1" style="width:60%">
	</colgroup>
	<thead>
		<tr>
			<th align="left">Tecleas</th>
			<th align="left">Resultado</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<pre>Cabecera A | Cabecera B<br>-- | --<br>Campo A0 | Campo B0<br>Campo A1 | Campo B1</pre>
			</td>
			<td>
				<table>
					<thead>
						<tr>
							<th style="width:50%;">Cabecera A</th>
							<th style="width:50%;">Cabecera B</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Campo A0</td>
							<td>Campo B0</td>
						</tr>
						<tr>
							<td>Campo A1</td>
							<td>Campo B1</td>
						</tr>
					</tbody>
				</table>	
			</td>
		</tr>
	</tbody>
</table>


Si prefiere, por estética, se pueden alinear las columnas e incluso comenzar y finalizar las filas con el símbolo **`|`**, pero no es necesario

<table>
	<colgroup>
		<col span="1" style="width:40%;">
		<col span="1" style="width:60%">
	</colgroup>
	<thead>
		<tr>
			<th align="left">Tecleas</th>
			<th align="left">Resultado</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<pre>| Cabecera A | Cabecera B |<br>| ---------- | ---------- |<br>| Campo A0   | Campo B0   |<br>| Campo A1   | Campo B1   |</pre>
			</td>
			<td>
				<table>
					<thead>
						<tr>
							<th style="width:50%;">Cabecera A</th>
							<th style="width:50%;">Cabecera B</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Campo A0</td>
							<td>Campo B0</td>
						</tr>
						<tr>
							<td>Campo A1</td>
							<td>Campo B1</td>
						</tr>
					</tbody>
				</table>
			</td>
		</tr>
	</tbody>
</table>


Se puede especificar la alineación de cada columna mediante la adición de dos puntos '`:`' a las líneas de separación:  

'`:`' a la izquierda de la línea de separación
 : hará que la columna esté alineada a la izquierda

'`:`' a la derecha de la línea de separación 
 : hará que la columna esté alineada a la derecha

'`:`' en ambos lados 
 : significa que la columna se alinea al centro

<table>
	<colgroup>
		<col span="1" style="width:40%;">
		<col span="1" style="width:60%">
	</colgroup>
	<thead>
		<tr>
			<th align="left">Tecleas</th>
			<th align="left">Resultado</th>
		</tr>
	</thead>
	<tbody>
	<tr>
			<td>
				<pre><br><br>| Elemento | Cantidad | Precio |<br>| :------- | :------: | -----: |<br>| Item 1   | 15       | $1.200 |<br>| Item 2   | 103      | $2.500 |</pre>
			</td>
			<td>
				<table>
					<thead>
						<tr>
							<th style="text-align: left;">Elemento</th>
							<th style="text-align: center;">Cantidad</th>
							<th style="text-align: right;">Precio</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td style="text-align: left;">Item 1</td>
							<td style="text-align: center;">15</td>
							<td style="text-align: right;">$1.200</td>
						</tr>
						<tr>
							<td style="text-align: left;">Item 2</td>
							<td style="text-align: center;">103</td>
							<td style="text-align: right;">$2.500</td>
						</tr>
					</tbody>
				</table>
			</td>
		</tr> 
	</tbody>
</table>	

<a href="#top">![](https://img.shields.io/badge/regresar%20a%20contenido-%E2%86%A9-black?style=for-the-badge)</a>


---

<a name="codigo"></a>
## Código

Se pueden crear bloques de código para albergar extractos de código fuente de un lenguaje de programación o para reproducir literalmente cualquier tipo de texto que sea interpretado por markdown. Lo único necesario es que cada línea de este bloque empiece por al menos 4 espacios o 1 tabulado.  


>De todos modos, es mucho más recomendable para estas tareas emplear el resaltado de código que se puede ver en esta [sección](#pygments).

Ejemplo:


<table>
	<colgroup>
		<col span="1" style="width:40%;">
		<col span="1" style="width:60%">
	</colgroup>
	<thead>
		<tr>
			<th align="left">Tecleas</th>
			<th align="left">Resultado</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<pre>Esto es un parráfo normal</pre>
			</td>
			<td>
				<p>Esto es un parráfo normal</p>
			</td>
		</tr>
		<tr>
			<td>
				<pre>    Esto es un extracto de código.</pre>
			</td>
			<td>
				<code>Esto es un extracto de código.</code>
			</td>
		</tr>
	</tbody>
</table>

Existe otro modo de crear un bloque de código, encerrándolo entre dos líneas formadas por tres o más caracteres tilde `~` o **\`**.

<table>
	<thead>
		<tr>
			<th style="width:50%;">Tecleas</th>
			<th style="width:50%;">Obtienes</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<pre>Esto es un parráfo normal         </pre>
			</td>
			<td>
				<p>Esto es un parráfo normal</p>
			</td>
		</tr>
		<tr>
			<td>
				<pre>~~~<br>Esto es un parráfo de código<br>~~~</pre>
			</td>
			<td>
				<code>Esto es un parráfo de código.</code>
			</td>
		</tr>
	</tbody>
</table>

Por último existe una opción para resaltar pequeños trozos de código dentro de parráfos de texto normal.  
Para lograr esto debemos encerrar el código entre dos acentos graves (\`). Por ejemplo:


<table>
	<thead>
		<tr>
			<th style="width:50%;">Tecleas</th>
			<th>Obtienes</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<pre>Esto es un parráfo normal, con un<br>trozo de código, `import this`<br>insertado en el medio del mismo.</pre>
			</td>
			<td>
				<p>Esto es un parráfo normal, con un trozo de código, <code>import this</code> insertado en el medio del mismo.</p>
			</td>
		</tr>
	</tbody>
</table>

<a href="#top">![](https://img.shields.io/badge/regresar%20a%20contenido-%E2%86%A9-black?style=for-the-badge)</a>

---

<a name="lineas"></a>
## Líneas Horizontales

Para crear líneas horizontales se debe crear una línea rodeaba de líneas en blanco y compuesta por 3 o más símbolos, que pueden ser guiones, asteriscos o guiones bajos. Pueden crearse espacios entre caracteres si así se desea por estética.

<table>
	<colgroup>
		<col span="1" style="width:40%;">
		<col span="1" style="width:60%">
	</colgroup>
	<thead>
		<tr>
			<th align="left">Tecleas</th>
			<th align="left">Resultado</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<pre>***</pre>
			</td>
			<td>
				<img height="10" src="./assets/hr.png"/>
			</td>
		</tr>
		<tr>
			<td>
				<pre>- - -</pre>
			</td>
			<td>
				<img height="10" src="./assets/hr.png"/>
			</td>
		</tr>
		<tr>
			<td>
				<pre>___</pre>
			</td>
			<td>
				<img height="10" src="./assets/hr.png"/>
			</td>
		</tr>
	</tbody>
</table>

<a href="#top">![](https://img.shields.io/badge/regresar%20a%20contenido-%E2%86%A9-black?style=for-the-badge)</a>

---

<a name="escapar-caracteres"></a>
## Escapar caracteres

¿Que ocurre cuando queremos mostrar un carácter que markdown emplea para el marcado? Es posible que dependiendo de donde y como se emplee esté símbolo, sea interpretado por markdown y alterará el formato del texto. En este caso lo que se necesita es **escapar el carácter** con el símbolo backslash **`\`**. En esta tabla se muestran los símbolos que pueden ser escapados por markdown.  

<table>
	<colgroup>
		<col span="1" style="width:40%;">
		<col span="1" style="width:60%">
	</colgroup>
	<thead>
		<tr>
			<th align="left">Tecleas</th>
			<th align="left">Resultado</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<pre>\\ \` \* \_ \{\} \[\] \(\) \# \+ \- \. \! \: \|
				</pre>
			</td>
			<td>
				<p><b>\ ` * _ {} [] () # + - . ! : |</b></p>
			</td>
		</tr>
	</tbody>
</table>

<a href="#top">![](https://img.shields.io/badge/regresar%20a%20contenido-%E2%86%A9-black?style=for-the-badge)</a>

---

<a name="pie-pagina"></a>
## Notas a pie de página

Las notas de páginas se crean de una manera muy sencilla en Markdown. Cada nota de pie página se compone de dos elementos: 

1. Un marcador al lado del texto que se convierte en un superíndice.
2. Una definición que se puede colocar en una lista de notas al pie al final de documento. 

Ejemplo:  

<table>
	<colgroup>
		<col span="1" style="width:40%;">
		<col span="1" style="width:60%">
	</colgroup>
	<thead>
		<tr>
			<th align="left">Tecleas</th>
			<th align="left">Resultado</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<pre>Esto es un texto con nota al pie[^1]
				<br><br>[^1]: Esto es una nota al pie de página.</pre>
			</td>
			<td>
				<p>Esto es un texto con nota al pie
				<sup id="fnref:1"><a href="#fn:1">1</a></sup></p>
				<div class="footnotes">
					<hr>
					<ol>
						<li id="fn:1">
							<p>Esto es una nota al pie de página. 
								<a href="#fnref:1">↩</a></p>
						</li>
					</ol>
				</div>
			</td>
		</tr>
	</tbody>
</table>

Las definiciones de la nota al pie se pueden encontrar en cualquier parte del documento, pero las notas siempre se mostrarán en el orden en que están vinculados en el texto. Hay que tener en cuenta que no puede hacer dos enlaces a la misma nota al pie, si se intenta, la referencia de la nota segunda quedará como texto sin formato.  

Cada marcador de nota debe tener un nombre distinto. Ese nombre se utiliza para vincular la nota a la que hace referencia a las definiciones de la nota, pero no tiene ningún efecto sobre la numeración de las notas al pie. Los nombres pueden contener cualquier carácter válido que sirva para la identificación de un atributo HTML (es decir, que cumpla con la expresión regular `[A-Za-z][-A-Za-z0-9_:.]*`), no tienen porque ser necesariamente números. Ejemplo:  

<table>
	<colgroup>
		<col span="1" style="width:40%;">
		<col span="1" style="width:60%">
	</colgroup>
	<thead>
		<tr>
			<th align="left">Tecleas</th>
			<th align="left">Resultado</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<pre>Esto es un texto con nota al pie<br>[^nota1] y esta es otra nota [^nota2]
				<br><br>[^nota1]: Esto es una nota al pie de página.<br>[^nota2]: Esto es la segunda nota al<br>pie.</pre>
			</td>
			<td>
				<p>Esto es un texto con nota al pie
				<sup id="fnref:1"><a href="#fn:1">1</a></sup> y esta es otra nota
				<sup id="fnref:2"><a href="fn:2">2</a></sup>
			</p>
				<div class="footnotes">
					<hr>
					<ol>
						<li id="fn:1">
							<p>Esto es una nota al pie de página. 
								<a href="#fnref:1">↩</a></p>
						</li>
						<li id="fn:1">
							<p>Esto es segunda nota al pie. 
								<a href="#fnref:1">↩</a></p>
						</li>
					</ol>
				</div>
			</td>
		</tr>
	</tbody>
</table>

<a href="#top">![](https://img.shields.io/badge/regresar%20a%20contenido-%E2%86%A9-black?style=for-the-badge)</a>

---

<a name="abreviatura"></a>
## Abreviaturas

Para crear abreviaturas HTML lo único necesario es crear una lista de ellas (normalmente al final del texto) y en cualquier lugar del texto que aparezca la abreviatura se aplicará automáticamente. Las listas de abreviaturas se crean como las listas de enlaces, pero precedidas por un asterisco.

<table>
	<colgroup>
		<col span="1" style="width:40%;">
		<col span="1" style="width:60%">
	</colgroup>
	<thead>
		<tr>
			<th align="left">Tecleas</th>
			<th align="left">Resultado</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<pre>La especificación HTML es mantenida por el<br>W3C.<br><br>*[HTML]: Hyper Text Markup Language<br>*[W3C]: World Wide Web Consortium</pre>
			</td>
			<td>
				<p>La especificación <abbr title="Hyper Text Markup Language">HTML</abbr> es mantenida por el <abbr title="World Wide Web Consortium">W3C</abbr>.</p>
			</td>
		</tr>
	</tbody>
</table>

Las abreviaturas son sensibles a mayúsculas, por lo que hay que tenerlo en cuenta. Se pueden crear abreviaturas de más de una palabra.

<a href="#top">![](https://img.shields.io/badge/regresar%20a%20contenido-%E2%86%A9-black?style=for-the-badge)</a>

---

<a name="identificadores"></a>
## Identificadores de Cabecera

Los identificadores de cabecera nos permiten establecer un identificador a las cabeceras para luego poder enlazarlas en cualquier otro lugar del texto.

<table>
	<colgroup>
		<col span="1" style="width:40%;">
		<col span="1" style="width:60%">
	</colgroup>
	<thead>
		<tr>
			<th align="left">Tecleas</th>
			<th align="left">Resultado</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<pre>### Esto es una cabecera con un Id<br>{#cabecera1}<br><br>[Enlace a esa cabecera](#cabecera1)</pre>
			</td>
			<td>
				<h3 id="cabecera1">Esto es una cabecera con Id</h3>
				<p><a href="#cabecera1">Enlace a esa cabecera</a></p>
			</td>
		</tr>
	</tbody>
</table>

En Markdown todas las cabeceras llevan por defecto asociado un Id que depende del texto de la misma, aunque siempre prevalece la que nosotros establezcamos.

<a href="#top">![](https://img.shields.io/badge/regresar%20a%20contenido-%E2%86%A9-black?style=for-the-badge)</a>

---

<a name="casillas-verificacion"></a>
## Casillas de verificación

Puede crear una lista de casillas de verificación usando la siguiente sintaxis.

Ejemplo: 

<table>
	<thead>
		<tr>
			<th style="width:50%;">Tecleas</th>
			<th>Obtienes</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<pre>### Sistema solar exploración, 1950s - 1960s<br><br>- [ ] Mercurio<br>- [x] Venus<br>- [x] Tierra (Órbita/Luna)<br>- [x] Martes<br>- [ ] Júpiter<br>- [ ] Saturno<br>- [ ] Urano<br>- [ ] Neptuno<br>- [ ] Cometa Halley
				</pre>
			</td>
			<td>
				<img src="../../../assets/png/web/html/checkbox/01.png"/>
			</td>
		</tr>
	</tbody>
</table>

<a href="#top">![](https://img.shields.io/badge/regresar%20a%20contenido-%E2%86%A9-black?style=for-the-badge)</a>

---

<a name="emoji"></a>
## Emojis

Esta es la lista completa de emojis y emoticonos disponibles en Markdown junto con sus respectivos **shorcodes**. Ten en cuenta que los shortcodes pueden variar entre diferentes aplicaciones. Por ello a continuación de deja el sabor a github o si esta visualizando este documento en formato pdf puede verse distinto.

<a name="emoji-list"></a>

- [Personas](#people)
- [Naturaleza](#nature)
- [Objetos](#objects)
- [Lugares](#places)
- [Símbolos](#symbols)


### <a name="people"></a>Personas

| :bowtie: `:bowtie:` | :smile: `:smile:` |
|:--|:--|
| :laughing: `:laughing:` | :blush: `:blush:` |
| :smiley: `:smiley:` | :relaxed: `:relaxed:` |
| :smirk: `:smirk:` | :heart_eyes: `:heart_eyes:` |
| :kissing_heart: `:kissing_heart:` | :kissing_closed_eyes: `:kissing_closed_eyes:` |
| :flushed: `:flushed:` | :relieved: `:relieved:` |
| :satisfied: `:satisfied:` | :grin: `:grin:` |
| :wink: `:wink:` | :stuck_out_tongue_winking_eye: `:stuck_out_tongue_winking_eye:` |
| :stuck_out_tongue_closed_eyes: `:stuck_out_tongue_closed_eyes:` | :grinning: `:grinning:` |
| :kissing: `:kissing:` | :kissing_smiling_eyes: `:kissing_smiling_eyes:` |
| :stuck_out_tongue: `:stuck_out_tongue:` | :sleeping: `:sleeping:` |
| :worried: `:worried:` | :frowning: `:frowning:` |
| :anguished: `:anguished:` | :open_mouth: `:open_mouth:` |
| :grimacing: `:grimacing:` | :confused: `:confused:` |
| :hushed: `:hushed:` | :expressionless: `:expressionless:` |
| :unamused: `:unamused:` | :sweat_smile: `:sweat_smile:` |
| :sweat: `:sweat:` | :disappointed_relieved: `:disappointed_relieved:` |
| :weary: `:weary:` | :pensive: `:pensive:` |
| :disappointed: `:disappointed:` | :confounded: `:confounded:` |
| :fearful: `:fearful:` | :cold_sweat: `:cold_sweat:` |
| :persevere: `:persevere:` | :cry: `:cry:` |
| :sob: `:sob:` | :joy: `:joy:` |
| :astonished: `:astonished:` | :scream: `:scream:` |
| :neckbeard: `:neckbeard:` | :tired_face: `:tired_face:` |
| :angry: `:angry:` | :rage: `:rage:` |
| :triumph: `:triumph:` | :sleepy: `:sleepy:` |
| :yum: `:yum:` | :mask: `:mask:` |
| :sunglasses: `:sunglasses:` | :dizzy_face: `:dizzy_face:` |
| :imp: `:imp:` | :smiling_imp: `:smiling_imp:` |
| :neutral_face: `:neutral_face:` | :no_mouth: `:no_mouth:` |
| :innocent: `:innocent:` | :alien: `:alien:` |
| :yellow_heart: `:yellow_heart:` | :blue_heart: `:blue_heart:` |
| :purple_heart: `:purple_heart:` | :heart: `:heart:` |
| :green_heart: `:green_heart:` | :broken_heart: `:broken_heart:` |
| :heartbeat: `:heartbeat:` | :heartpulse: `:heartpulse:` |
| :two_hearts: `:two_hearts:` | :revolving_hearts: `:revolving_hearts:` |
| :cupid: `:cupid:` | :sparkling_heart: `:sparkling_heart:` |
| :sparkles: `:sparkles:` | :star: `:star:` |
| :star2: `:star2:` | :dizzy: `:dizzy:` |
| :boom: `:boom:` | :collision: `:collision:` |
| :anger: `:anger:` | :exclamation: `:exclamation:` |
| :question: `:question:` | :grey_exclamation: `:grey_exclamation:` |
| :grey_question: `:grey_question:` | :zzz: `:zzz:` |
| :dash: `:dash:` | :sweat_drops: `:sweat_drops:` |
| :notes: `:notes:` | :musical_note: `:musical_note:` |
| :fire: `:fire:` | :hankey: `:hankey:` |
| :poop: `:poop:` | :shit: `:shit:` |
| :+1: `:+1:` | :thumbsup: `:thumbsup:` |
| :-1: `:-1:` | :thumbsdown: `:thumbsdown:` |
| :ok_hand: `:ok_hand:` | :punch: `:punch:` |
| :facepunch: `:facepunch:` | :fist: `:fist:` |
| :v: `:v:` | :wave: `:wave:` |
| :hand: `:hand:` | :raised_hand: `:raised_hand:` |
| :open_hands: `:open_hands:` | :point_up: `:point_up:` |
| :point_down: `:point_down:` | :point_left: `:point_left:` |
| :point_right: `:point_right:` | :raised_hands: `:raised_hands:` |
| :pray: `:pray:` | :point_up_2: `:point_up_2:` |
| :clap: `:clap:` | :muscle: `:muscle:` |
| :metal: `:metal:` | :fu: `:fu:` |
| :walking: `:walking:` | :runner: `:runner:` |
| :running: `:running:` | :couple: `:couple:` |
| :family: `:family:` | :two_men_holding_hands: `:two_men_holding_hands:` |
| :two_women_holding_hands: `:two_women_holding_hands:` | :dancer: `:dancer:` |
| :dancers: `:dancers:` | :ok_woman: `:ok_woman:` |
| :no_good: `:no_good:` | :information_desk_person: `:information_desk_person:` |
| :raising_hand: `:raising_hand:` | :bride_with_veil: `:bride_with_veil:` |
| :person_with_pouting_face: `:person_with_pouting_face:` | :person_frowning: `:person_frowning:` |
| :bow: `:bow:` | :couplekiss: `:couplekiss:` |
| :couple_with_heart: `:couple_with_heart:` | :massage: `:massage:` |
| :haircut: `:haircut:` | :nail_care: `:nail_care:` |
| :boy: `:boy:` | :girl: `:girl:` |
| :woman: `:woman:` | :man: `:man:` |
| :baby: `:baby:` | :older_woman: `:older_woman:` | 
|:older_man: `:older_man:` | :person_with_blond_hair: `:person_with_blond_hair:` |
| :man_with_gua_pi_mao: `:man_with_gua_pi_mao:` | :man_with_turban: `:man_with_turban:` |
| :construction_worker: `:construction_worker:` | :cop: `:cop:` |
| :angel: `:angel:` | :princess: `:princess:` |
| :smiley_cat: `:smiley_cat:` | :smile_cat: `:smile_cat:` |
| :heart_eyes_cat: `:heart_eyes_cat:` | :kissing_cat: `:kissing_cat:` |
| :smirk_cat: `:smirk_cat:` | :scream_cat: `:scream_cat:` |
| :crying_cat_face: `:crying_cat_face:` | :joy_cat: `:joy_cat:` |
| :pouting_cat: `:pouting_cat:` | :japanese_ogre: `:japanese_ogre:` |
| :japanese_goblin: `:japanese_goblin:` | :see_no_evil: `:see_no_evil:` |
| :hear_no_evil: `:hear_no_evil:` | :speak_no_evil: `:speak_no_evil:` |
| :guardsman: `:guardsman:` | :skull: `:skull:` |
| :feet: `:feet:` | :lips: `:lips:` |
| :kiss: `:kiss:` | :droplet: `:droplet:` |
| :ear: `:ear:` | :eyes: `:eyes:` |
| :nose: `:nose:` | :tongue: `:tongue:` |
| :love_letter: `:love_letter:` | :bust_in_silhouette: `:bust_in_silhouette:` |
| :busts_in_silhouette: `:busts_in_silhouette:` | :speech_balloon: `:speech_balloon:` | 
| :thought_balloon: `:thought_balloon:` | :feelsgood: `:feelsgood:` |
| :finnadie: `:finnadie:` | :goberserk: `:goberserk:` |
| :godmode: `:godmode:` | :hurtrealbad: `:hurtrealbad:` |
| :rage1: `:rage1:` | :rage2: `:rage2:` |
| :rage3: `:rage3:` | :rage4: `:rage4:` |
| :suspect: `:suspect:` | :trollface: `:trollface:` |


<a href="#emoji-list">![](https://img.shields.io/badge/regresar%20a%20lista%20emojis-%E2%86%A9-orange?style=for-the-badge&logo=aseprite&logoColor=%23FAC173)</a>


### <a name="nature"></a>Naturaleza

| :sunny: `:sunny:` | :umbrella: `:umbrella:` |
|:--|:--|
| :cloud: `:cloud:` | :snowflake: `:snowflake:` |
| :snowman: `:snowman:` | :zap: `:zap:` |
| :cyclone: `:cyclone:` | :foggy: `:foggy:` |
| :ocean: `:ocean:` | :cat: `:cat:` |
| :dog: `:dog:` | :mouse: `:mouse:` |
| :hamster: `:hamster:` | :rabbit: `:rabbit:` |
| :wolf: `:wolf:` | :frog: `:frog:` |
| :tiger: `:tiger:` | :koala: `:koala:` |
| :bear: `:bear:` | :pig: `:pig:` |
| :pig_nose: `:pig_nose:` | :cow: `:cow:` | 
| :boar: `:boar:` | :monkey_face: `:monkey_face:` |
| :monkey: `:monkey:` | :horse: `:horse:` |
| :racehorse: `:racehorse:` | :camel: `:camel:` |
| :sheep: `:sheep:` | :elephant: `:elephant:` |
| :panda_face: `:panda_face:` | :snake: `:snake:` |
| :bird: `:bird:` | :baby_chick: `:baby_chick:` |
| :hatched_chick: `:hatched_chick:` | :hatching_chick: `:hatching_chick:` |
| :chicken: `:chicken:` | :penguin: `:penguin:` |
| :turtle: `:turtle:` | :bug: `:bug:` |
| :honeybee: `:honeybee:` | :ant: `:ant:` |
| :beetle: `:beetle:` | :snail: `:snail:` |
| :octopus: `:octopus:` | :tropical_fish: `:tropical_fish:` |
| :fish: `:fish:` | :whale: `:whale:` |
| :whale2: `:whale2:` | :dolphin: `:dolphin:` |
| :cow2: `:cow2:` | :ram: `:ram:` |
| :rat: `:rat:` | :water_buffalo: `:water_buffalo:` |
| :tiger2: `:tiger2:` | :rabbit2: `:rabbit2:` |
| :dragon: `:dragon:` | :goat: `:goat:` |
| :rooster: `:rooster:` | :dog2: `:dog2:` |
| :pig2: `:pig2:` | :mouse2: `:mouse2:` |
| :ox: `:ox:` | :dragon_face: `:dragon_face:` |
| :blowfish: `:blowfish:` | :crocodile: `:crocodile:` |
| :dromedary_camel: `:dromedary_camel:` | :leopard: `:leopard:` |
| :cat2: `:cat2:` | :poodle: `:poodle:` |
| :paw_prints: `:paw_prints:` | :bouquet: `:bouquet:` |
| :cherry_blossom: `:cherry_blossom:` | :tulip: `:tulip:` |
| :four_leaf_clover: `:four_leaf_clover:` | :rose: `:rose:` |
| :sunflower: `:sunflower:` | :hibiscus: `:hibiscus:` |
| :maple_leaf: `:maple_leaf:` | :leaves: `:leaves:` |
| :fallen_leaf: `:fallen_leaf:` | :herb: `:herb:` |
| :mushroom: `:mushroom:` | :cactus: `:cactus:` |
| :palm_tree: `:palm_tree:` | :evergreen_tree: `:evergreen_tree:` |
| :deciduous_tree: `:deciduous_tree:` | :chestnut: `:chestnut:` |
| :seedling: `:seedling:` | :blossom: `:blossom:` |
| :ear_of_rice: `:ear_of_rice:` | :shell: `:shell:` |
| :globe_with_meridians: `:globe_with_meridians:` | :sun_with_face: `:sun_with_face:` |
| :full_moon_with_face: `:full_moon_with_face:` | :new_moon_with_face: `:new_moon_with_face:` |
| :new_moon: `:new_moon:` | :waxing_crescent_moon: `:waxing_crescent_moon:` |
| :first_quarter_moon: `:first_quarter_moon:` | :waxing_gibbous_moon: `:waxing_gibbous_moon:` |
| :full_moon: `:full_moon:` | :waning_gibbous_moon: `:waning_gibbous_moon:` |
| :last_quarter_moon: `:last_quarter_moon:` | :waning_crescent_moon: `:waning_crescent_moon:` |
| :last_quarter_moon_with_face: `:last_quarter_moon_with_face:` | :first_quarter_moon_with_face: `:first_quarter_moon_with_face:` |
| :moon: `:moon:` | :earth_africa: `:earth_africa:` |
| :earth_americas: `:earth_americas:` | :earth_asia: `:earth_asia:` |
| :volcano: `:volcano:` | :milky_way: `:milky_way:` |
| :partly_sunny: `:partly_sunny:` | :octocat: `:octocat:` |
| :squirrel: `:squirrel:` |

<a href="#emoji-list">![](https://img.shields.io/badge/regresar%20a%20lista%20emojis-%E2%86%A9-orange?style=for-the-badge&logo=aseprite&logoColor=%23FAC173)</a>

### <a name="objects"></a>Objectos

| :bamboo: `:bamboo:` | :gift_heart: `:gift_heart:` |
|:--|:--|
| :dolls: `:dolls:` | :school_satchel: `:school_satchel:` |
| :mortar_board: `:mortar_board:` | :flags: `:flags:` |
| :fireworks: `:fireworks:` | :sparkler: `:sparkler:` |
| :wind_chime: `:wind_chime:` | :rice_scene: `:rice_scene:` |
| :jack_o_lantern: `:jack_o_lantern:` | :ghost: `:ghost:` |
| :santa: `:santa:` | :christmas_tree: `:christmas_tree:` |
| :gift: `:gift:` | :bell: `:bell:` |
| :no_bell: `:no_bell:` | :tanabata_tree: `:tanabata_tree:` |
| :tada: `:tada:` | :confetti_ball: `:confetti_ball:` |
| :balloon: `:balloon:` | :crystal_ball: `:crystal_ball:` |
| :cd: `:cd:` | :dvd: `:dvd:` |
| :floppy_disk: `:floppy_disk:` | :camera: `:camera:` |
| :video_camera: `:video_camera:` | :movie_camera: `:movie_camera:` |
| :computer: `:computer:` | :tv: `:tv:` |
| :iphone: `:iphone:` | :phone: `:phone:` |
| :telephone: `:telephone:` | :telephone_receiver: `:telephone_receiver:` | 
| :pager: `:pager:` | :fax: `:fax:` |
| :minidisc: `:minidisc:` | :vhs: `:vhs:` |
| :sound: `:sound:` | :speaker: `:speaker:` |
| :mute: `:mute:` | :loudspeaker: `:loudspeaker:` |
| :mega: `:mega:` | :hourglass: `:hourglass:` |
| :hourglass_flowing_sand: `:hourglass_flowing_sand:` | :alarm_clock: `:alarm_clock:` |
| :watch: `:watch:` | :radio: `:radio:` |
| :satellite: `:satellite:` | :loop: `:loop:` |
| :mag: `:mag:` | :mag_right: `:mag_right:` |
| :unlock: `:unlock:` | :lock: `:lock:` |
| :lock_with_ink_pen: `:lock_with_ink_pen:` | :closed_lock_with_key: `:closed_lock_with_key:` |
| :key: `:key:` | :bulb: `:bulb:` |
| :flashlight: `:flashlight:` | :high_brightness: `:high_brightness:` |
| :low_brightness: `:low_brightness:` | :electric_plug: `:electric_plug:` |
| :battery: `:battery:` | :calling: `:calling:` |
| :email: `:email:` | :mailbox: `:mailbox:` |
| :postbox: `:postbox:` | :bath: `:bath:` |
| :bathtub: `:bathtub:` | :shower: `:shower:` |
| :toilet: `:toilet:` | :wrench: `:wrench:` |
| :nut_and_bolt: `:nut_and_bolt:` | :hammer: `:hammer:` |
| :seat: `:seat:` | :moneybag: `:moneybag:` |
| :yen: `:yen:` | :dollar: `:dollar:` |
| :pound: `:pound:` | :euro: `:euro:` |
| :credit_card: `:credit_card:` | :money_with_wings: `:money_with_wings:` |
| :e-mail: `:e-mail:` | :inbox_tray: `:inbox_tray:` |
| :outbox_tray: `:outbox_tray:` | :envelope: `:envelope:` |
| :incoming_envelope: `:incoming_envelope:` | :postal_horn: `:postal_horn:` |
| :mailbox_closed: `:mailbox_closed:` | :mailbox_with_mail: `:mailbox_with_mail:` |
| :mailbox_with_no_mail: `:mailbox_with_no_mail:` | :door: `:door:` |
| :smoking: `:smoking:` | :bomb: `:bomb:` |
| :gun: `:gun:` | :hocho: `:hocho:` |
| :pill: `:pill:` | :syringe: `:syringe:` |
| :page_facing_up: `:page_facing_up:` | :page_with_curl: `:page_with_curl:` |
| :bookmark_tabs: `:bookmark_tabs:` | :bar_chart: `:bar_chart:` |
| :chart_with_upwards_trend: `:chart_with_upwards_trend:` | :chart_with_downwards_trend: `:chart_with_downwards_trend:` |
| :scroll: `:scroll:` | :clipboard: `:clipboard:` |
| :calendar: `:calendar:` | :date: `:date:` |
| :card_index: `:card_index:` | :file_folder: `:file_folder:` |
| :open_file_folder: `:open_file_folder:` | :scissors: `:scissors:` |
| :pushpin: `:pushpin:` | :paperclip: `:paperclip:` |
| :black_nib: `:black_nib:` | :pencil2: `:pencil2:` |
| :straight_ruler: `:straight_ruler:` | :triangular_ruler: `:triangular_ruler:` |
| :closed_book: `:closed_book:` | :green_book: `:green_book:` |
| :blue_book: `:blue_book:` | :orange_book: `:orange_book:` |
| :notebook: `:notebook:` | :notebook_with_decorative_cover: `:notebook_with_decorative_cover:` |
| :ledger: `:ledger:` | :books: `:books:` |
| :bookmark: `:bookmark:` | :name_badge: `:name_badge:` |
| :microscope: `:microscope:` | :telescope: `:telescope:` |
| :newspaper: `:newspaper:` | :football: `:football:` |
| :basketball: `:basketball:` | :soccer: `:soccer:` |
| :baseball: `:baseball:` | :tennis: `:tennis:` | 
| :8ball: `:8ball:` | :rugby_football: `:rugby_football:` |
| :bowling: `:bowling:` | :golf: `:golf:` |
| :mountain_bicyclist: `:mountain_bicyclist:` | :bicyclist: `:bicyclist:` |
| :horse_racing: `:horse_racing:` | :snowboarder: `:snowboarder:` |
| :swimmer: `:swimmer:` | :surfer: `:surfer:` |
| :ski: `:ski:` | :spades: `:spades:` |
| :hearts: `:hearts:` | :clubs: `:clubs:` |
| :diamonds: `:diamonds:` | :gem: `:gem:` |
| :ring: `:ring:` | :trophy: `:trophy:` |
| :musical_score: `:musical_score:` | :musical_keyboard: `:musical_keyboard:` |
| :violin: `:violin:` | :space_invader: `:space_invader:` |
| :video_game: `:video_game:` | :black_joker: `:black_joker:` |
| :flower_playing_cards: `:flower_playing_cards:` | :game_die: `:game_die:` |
| :dart: `:dart:` | :mahjong: `:mahjong:` |
| :clapper: `:clapper:` | :memo: `:memo:` |
| :pencil: `:pencil:` | :book: `:book:` |
| :art: `:art:` | :microphone: `:microphone:` |
| :headphones: `:headphones:` | :trumpet: `:trumpet:` |
| :saxophone: `:saxophone:` | :guitar: `:guitar:` |
| :shoe: `:shoe:` | :sandal: `:sandal:` |
| :high_heel: `:high_heel:` | :lipstick: `:lipstick:` |
| :boot: `:boot:` | :shirt: `:shirt:` |
| :tshirt: `:tshirt:` | :necktie: `:necktie:` |
| :womans_clothes: `:womans_clothes:` | :dress: `:dress:` |
| :running_shirt_with_sash: `:running_shirt_with_sash:` | :jeans: `:jeans:` |
| :kimono: `:kimono:` | :bikini: `:bikini:` |
| :ribbon: `:ribbon:` | :tophat: `:tophat:` |
| :crown: `:crown:` | :womans_hat: `:womans_hat:` |
| :mans_shoe: `:mans_shoe:` | :closed_umbrella: `:closed_umbrella:` |
| :briefcase: `:briefcase:` | :handbag: `:handbag:` |
| :pouch: `:pouch:` | :purse: `:purse:` |
| :eyeglasses: `:eyeglasses:` | :fishing_pole_and_fish: `:fishing_pole_and_fish:` |
| :coffee: `:coffee:` | :tea: `:tea:` |
| :sake: `:sake:` | :baby_bottle: `:baby_bottle:` |
| :beer: `:beer:` | :beers: `:beers:` |
| :cocktail: `:cocktail:` | :tropical_drink: `:tropical_drink:` |
| :wine_glass: `:wine_glass:` | :fork_and_knife: `:fork_and_knife:` |
| :pizza: `:pizza:` | :hamburger: `:hamburger:` |
| :fries: `:fries:` | :poultry_leg: `:poultry_leg:` |
| :meat_on_bone: `:meat_on_bone:` | :spaghetti: `:spaghetti:` |
| :curry: `:curry:` | :fried_shrimp: `:fried_shrimp:` |
| :bento: `:bento:` | :sushi: `:sushi:` |
| :fish_cake: `:fish_cake:` | :rice_ball: `:rice_ball:` |
| :rice_cracker: `:rice_cracker:` | :rice: `:rice:` |
| :ramen: `:ramen:` | :stew: `:stew:` |
| :oden: `:oden:` | :dango: `:dango:` |
| :egg: `:egg:` | :bread: `:bread:` |
| :doughnut: `:doughnut:` | :custard: `:custard:` |
| :icecream: `:icecream:` | :ice_cream: `:ice_cream:` |
| :shaved_ice: `:shaved_ice:` | :birthday: `:birthday:` |
| :cake: `:cake:` | :cookie: `:cookie:` |
| :chocolate_bar: `:chocolate_bar:` | :candy: `:candy:` |
| :lollipop: `:lollipop:` | :honey_pot: `:honey_pot:` |
| :apple: `:apple:` | :green_apple: `:green_apple:` |
| :tangerine: `:tangerine:` | :lemon: `:lemon:` |
| :cherries: `:cherries:` | :grapes: `:grapes:` |
| :watermelon: `:watermelon:` | :strawberry: `:strawberry:` |
| :peach: `:peach:` | :melon: `:melon:` |
| :banana: `:banana:` | :pear: `:pear:` |
| :pineapple: `:pineapple:` | :sweet_potato: `:sweet_potato:` |
| :eggplant: `:eggplant:` | :tomato: `:tomato:` |
| :corn: `:corn:` |


<a href="#emoji-list">![](https://img.shields.io/badge/regresar%20a%20lista%20emojis-%E2%86%A9-orange?style=for-the-badge&logo=aseprite&logoColor=%23FAC173)</a>

### <a name="places"></a>Lugares

| :house: `:house:` | :house_with_garden: `:house_with_garden:` |
|:--|:--|
| :school: `:school:` | :office: `:office:` |
| :post_office: `:post_office:` | :hospital: `:hospital:` |
| :bank: `:bank:` | :convenience_store: `:convenience_store:` |
| :love_hotel: `:love_hotel:` | :hotel: `:hotel:` |
| :wedding: `:wedding:` | :church: `:church:` |
| :department_store: `:department_store:` | :european_post_office: `:european_post_office:` |
| :city_sunrise: `:city_sunrise:` | :city_sunset: `:city_sunset:` |
| :japanese_castle: `:japanese_castle:` | :european_castle: `:european_castle:` |
| :tent: `:tent:` | :factory: `:factory:` |
| :tokyo_tower: `:tokyo_tower:` | :japan: `:japan:` |
| :mount_fuji: `:mount_fuji:` | :sunrise_over_mountains: `:sunrise_over_mountains:` |
| :sunrise: `:sunrise:` | :stars: `:stars:` |
| :statue_of_liberty: `:statue_of_liberty:` | :bridge_at_night: `:bridge_at_night:` |
| :carousel_horse: `:carousel_horse:` | :rainbow: `:rainbow:` |
| :ferris_wheel: `:ferris_wheel:` | :fountain: `:fountain:` |
| :roller_coaster: `:roller_coaster:` | :ship: `:ship:` |
| :speedboat: `:speedboat:` | :boat: `:boat:` |
| :sailboat: `:sailboat:` | :rowboat: `:rowboat:` |
| :anchor: `:anchor:` | :rocket: `:rocket:` |
| :airplane: `:airplane:` | :helicopter: `:helicopter:` |
| :steam_locomotive: `:steam_locomotive:` | :tram: `:tram:` |
| :mountain_railway: `:mountain_railway:` | :bike: `:bike:` |
| :aerial_tramway: `:aerial_tramway:` | :suspension_railway: `:suspension_railway:` |
| :mountain_cableway: `:mountain_cableway:` | :tractor: `:tractor:` |
| :blue_car: `:blue_car:` | :oncoming_automobile: `:oncoming_automobile:` |
| :car: `:car:` | :red_car: `:red_car:` |
| :taxi: `:taxi:` | :oncoming_taxi: `:oncoming_taxi:` |
| :articulated_lorry: `:articulated_lorry:` | :bus: `:bus:` |
| :oncoming_bus: `:oncoming_bus:` | :rotating_light: `:rotating_light:` |
| :police_car: `:police_car:` | :oncoming_police_car: `:oncoming_police_car:` |
| :fire_engine: `:fire_engine:` | :ambulance: `:ambulance:` |
| :minibus: `:minibus:` | :truck: `:truck:` |
| :train: `:train:` | :station: `:station:` |
| :train2: `:train2:` | :bullettrain_front: `:bullettrain_front:` |
| :bullettrain_side: `:bullettrain_side:` | :light_rail: `:light_rail:` |
| :monorail: `:monorail:` | :railway_car: `:railway_car:` |
| :trolleybus: `:trolleybus:` | :ticket: `:ticket:` |
| :fuelpump: `:fuelpump:` | :vertical_traffic_light: `:vertical_traffic_light:` |
| :traffic_light: `:traffic_light:` | :warning: `:warning:` |
| :construction: `:construction:` | :beginner: `:beginner:` |
| :atm: `:atm:` | :slot_machine: `:slot_machine:` |
| :busstop: `:busstop:` | :barber: `:barber:` |
| :hotsprings: `:hotsprings:` | :checkered_flag: `:checkered_flag:` |
| :crossed_flags: `:crossed_flags:` | :izakaya_lantern: `:izakaya_lantern:` |
| :moyai: `:moyai:` | :circus_tent: `:circus_tent:` |
| :performing_arts: `:performing_arts:` | :round_pushpin: `:round_pushpin:` |
| :triangular_flag_on_post: `:triangular_flag_on_post:` | :jp: `:jp:` |
| :kr: `:kr:` | :cn: `:cn:` |
| :us: `:us:` | :fr: `:fr:` |
| :es: `:es:` | :it: `:it:` |
| :ru: `:ru:` | :gb: `:gb:` |
| :uk: `:uk:` | :de: `:de:` |

<a href="#emoji-list">![](https://img.shields.io/badge/regresar%20a%20lista%20emojis-%E2%86%A9-orange?style=for-the-badge&logo=aseprite&logoColor=%23FAC173)</a>

### <a name="symbols"></a>Símbolos

| :one: `:one:` | :two: `:two:` | :three: `:three:` |
|:--|:--|:--|
| :four: `:four:` | :five: `:five:` | :six: `:six:` |
| :seven: `:seven:` | :eight: `:eight:` | :nine: `:nine:` |
| :keycap_ten: `:keycap_ten:` | :1234: `:1234:` | :zero: `:zero:` |
| :hash: `:hash:` | :symbols: `:symbols:` | :arrow_backward: `:arrow_backward:` |
| :arrow_down: `:arrow_down:` | :arrow_forward: `:arrow_forward:` | :arrow_left: `:arrow_left:` |
| :capital_abcd: `:capital_abcd:` | :abcd: `:abcd:` | :abc: `:abc:` |
| :arrow_lower_left: `:arrow_lower_left:` | :arrow_lower_right: `:arrow_lower_right:` | :arrow_right: `:arrow_right:` |
| :arrow_up: `:arrow_up:` | :arrow_upper_left: `:arrow_upper_left:` | :arrow_upper_right: `:arrow_upper_right:` |
| :arrow_double_down: `:arrow_double_down:` | :arrow_double_up: `:arrow_double_up:` | :arrow_down_small: `:arrow_down_small:` |
| :arrow_heading_down: `:arrow_heading_down:` | :arrow_heading_up: `:arrow_heading_up:` | :leftwards_arrow_with_hook: `:leftwards_arrow_with_hook:` |
| :arrow_right_hook: `:arrow_right_hook:` | :left_right_arrow: `:left_right_arrow:` | :arrow_up_down: `:arrow_up_down:` |
| :arrow_up_small: `:arrow_up_small:` | :arrows_clockwise: `:arrows_clockwise:` | :arrows_counterclockwise: `:arrows_counterclockwise:` |
| :rewind: `:rewind:` | :fast_forward: `:fast_forward:` | :information_source: `:information_source:` |
| :ok: `:ok:` | :twisted_rightwards_arrows: `:twisted_rightwards_arrows:` | :repeat: `:repeat:` |
| :repeat_one: `:repeat_one:` | :new: `:new:` | :top: `:top:` |
| :up: `:up:` | :cool: `:cool:` | :free: `:free:` |
| :ng: `:ng:` | :cinema: `:cinema:` | :koko: `:koko:` |
| :signal_strength: `:signal_strength:` | :u5272: `:u5272:` | :u5408: `:u5408:` |
| :u55b6: `:u55b6:` | :u6307: `:u6307:` | :u6708: `:u6708:` |
| :u6709: `:u6709:` | :u6e80: `:u6e80:` | :u7121: `:u7121:` |
| :u7533: `:u7533:` | :u7a7a: `:u7a7a:` | :u7981: `:u7981:` |
| :sa: `:sa:` | :restroom: `:restroom:` | :mens: `:mens:` |
| :womens: `:womens:` | :baby_symbol: `:baby_symbol:` | :no_smoking: `:no_smoking:` |
| :parking: `:parking:` | :wheelchair: `:wheelchair:` | :metro: `:metro:` |
| :baggage_claim: `:baggage_claim:` | :accept: `:accept:` | :wc: `:wc:` |
| :potable_water: `:potable_water:` | :put_litter_in_its_place: `:put_litter_in_its_place:` | :secret: `:secret:` |
| :congratulations: `:congratulations:` | :m: `:m:` | :passport_control: `:passport_control:` |
| :left_luggage: `:left_luggage:` | :customs: `:customs:` | :ideograph_advantage: `:ideograph_advantage:` |
| :cl: `:cl:` | :sos: `:sos:` | :id: `:id:` |
| :no_entry_sign: `:no_entry_sign:` | :underage: `:underage:` | :no_mobile_phones: `:no_mobile_phones:` |
| :do_not_litter: `:do_not_litter:` | :non-potable_water: `:non-potable_water:` | :no_bicycles: `:no_bicycles:` |
| :no_pedestrians: `:no_pedestrians:` | :children_crossing: `:children_crossing:` | :no_entry: `:no_entry:` |
| :eight_spoked_asterisk: `:eight_spoked_asterisk:` | :eight_pointed_black_star: `:eight_pointed_black_star:` | :heart_decoration: `:heart_decoration:` |
| :vs: `:vs:` | :vibration_mode: `:vibration_mode:` | :mobile_phone_off: `:mobile_phone_off:` |
| :chart: `:chart:` | :currency_exchange: `:currency_exchange:` | :aries: `:aries:` |
| :taurus: `:taurus:` | :gemini: `:gemini:` | :cancer: `:cancer:` |
| :leo: `:leo:` | :virgo: `:virgo:` | :libra: `:libra:` |
| :scorpius: `:scorpius:` | :sagittarius: `:sagittarius:` | :capricorn: `:capricorn:` |
| :aquarius: `:aquarius:` | :pisces: `:pisces:` | :ophiuchus: `:ophiuchus:` |
| :six_pointed_star: `:six_pointed_star:` | :negative_squared_cross_mark: `:negative_squared_cross_mark:` | :a: `:a:` |
| :b: `:b:` | :ab: `:ab:` | :o2: `:o2:` |
| :diamond_shape_with_a_dot_inside: `:diamond_shape_with_a_dot_inside:` | :recycle: `:recycle:` | :end: `:end:` |
| :on: `:on:` | :soon: `:soon:` | :clock1: `:clock1:` |
| :clock130: `:clock130:` | :clock10: `:clock10:` | :clock1030: `:clock1030:` |
| :clock11: `:clock11:` | :clock1130: `:clock1130:` | :clock12: `:clock12:` |
| :clock1230: `:clock1230:` | :clock2: `:clock2:` | :clock230: `:clock230:` |
| :clock3: `:clock3:` | :clock330: `:clock330:` | :clock4: `:clock4:` |
| :clock430: `:clock430:` | :clock5: `:clock5:` | :clock530: `:clock530:` |
| :clock6: `:clock6:` | :clock630: `:clock630:` | :clock7: `:clock7:` |
| :clock730: `:clock730:` | :clock8: `:clock8:` | :clock830: `:clock830:` |
| :clock9: `:clock9:` | :clock930: `:clock930:` | :heavy_dollar_sign: `:heavy_dollar_sign:` |
| :copyright: `:copyright:` | :registered: `:registered:` | :tm: `:tm:` |
| :x: `:x:` | :heavy_exclamation_mark: `:heavy_exclamation_mark:` | :bangbang: `:bangbang:` |
| :interrobang: `:interrobang:` | :o: `:o:` | :heavy_multiplication_x: `:heavy_multiplication_x:` |
| :heavy_plus_sign: `:heavy_plus_sign:` | :heavy_minus_sign: `:heavy_minus_sign:` | :heavy_division_sign: `:heavy_division_sign:` |
| :white_flower: `:white_flower:` | :100: `:100:` | :heavy_check_mark: `:heavy_check_mark:` |
| :ballot_box_with_check: `:ballot_box_with_check:` | :radio_button: `:radio_button:` | :link: `:link:` |
| :curly_loop: `:curly_loop:` | :wavy_dash: `:wavy_dash:` | :part_alternation_mark: `:part_alternation_mark:` |
| :trident: `:trident:` | :black_square: `:black_square:` | :white_square: `:white_square:` |
| :white_check_mark: `:white_check_mark:` | :black_square_button: `:black_square_button:` | :white_square_button: `:white_square_button:` |
| :black_circle: `:black_circle:` | :white_circle: `:white_circle:` | :red_circle: `:red_circle:` |
| :large_blue_circle: `:large_blue_circle:` | :large_blue_diamond: `:large_blue_diamond:` | :large_orange_diamond: `:large_orange_diamond:` |
| :small_blue_diamond: `:small_blue_diamond:` | :small_orange_diamond: `:small_orange_diamond:` | :small_red_triangle: `:small_red_triangle:` |
| :small_red_triangle_down: `:small_red_triangle_down:` | :shipit: `:shipit:` |

<a href="#emoji-list">![](https://img.shields.io/badge/regresar%20a%20lista%20emojis-%E2%86%A9-orange?style=for-the-badge&logo=aseprite&logoColor=%23FAC173)</a>

## <a name="emoji-tablas"></a> Usar emoji en tablas

A continuación te dejo un ejemplo de como podemos usar emojis dentro de una tabla:  

<table>
	<thead>
		<tr>
			<th style="width:50%;">Tecleas</th>
			<th>Obtienes</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<pre>Function | MySQL | PostgreSQL<br>:------- | :-----| :---------<br>substr | :heavy_check_mark: |  :white_check_mark: 
				</pre>
			</td>
			<td>
				<img src="../../../assets/png/web/html/emojis/02.png">
			</td>
		</tr>
	</tbody>
</table>

<a href="#top">![](https://img.shields.io/badge/regresar%20contenido%20principal-%E2%86%A9-blue?style=for-the-badge&logo=readthedocs&logoColor=%23FAC173)</a>

---

## <a name="pygments"></a>Pygments: Resaltado de Sintaxis para Código Fuente

Para introducir ejemplos de código fuente en el sitio, habilitar el resaltado (o coloreado) de sintaxis mejora la presentación y legibilidad de los mismos. Existen diversos motores que nos permiten realizar esta función y **Pygments** es uno de los mejores. Está realizado en Python.  

Resaltar código con markdown y Pygments es realmente sencillo, solamente hay que hacer lo mismo que haríamos con markdown, pero añadiendo un **lexer** de Pygments en la primera línea. Un lexer es un indentificador del lenguaje que queremos resaltar para que el coloreado se haga correctamente. Los lexer se construyen empleando 2 caracteres '`~`' seguidos del nombre del lexer, por ejemplo, '`~~~python`' sería el lexer empleado para identificar un fragmento de código en lenguaje Python o en su lugar puede emplear también el acento grave **(\`)**.  


Lo podemos ver mejor con un ejemplo:


<table>
	<thead>
		<tr>
			<th style="width:50%;">Tecleas</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>
				<pre>```python<br>import lifetime<br><br>for each_day in lifetime.days():<br>&nbsp;&nbsp;&nbsp;&nbsp;carpe_diem()<br>```</pre>
			</td>
			<td>
				<pre><span style="color: darkblue;">import</span> <span>lifetine</span><br><br><span style="color: darkblue;">for </span>each_day <span style="color: darkblue;">in</span> <span>lifetime.days</span><span style="color: darkblue;">()</span>:<br>&nbsp;&nbsp;&nbsp;&nbsp;<span>carpe_diem</span><span style="color: darkblue;">()</span>
				</pre>
			</td>
		</tr>
	</tbody>
</table>

A continuación muestro una relación de los lexers más comunes empleados para el resaltado de código fuente.  


**`apache`** - configuración Apache  

```apache
<VirtualHost *:80>
DocumentRoot /www/example1
ServerName www.example1.com

# Other directives here

</VirtualHost>
```


**`bash`** y **`console`** - Bash y Shell  

```bash
#!/bin/bash
echo "Hola mundo"
```

**`bat`** - Archivos Batch DOS/Windows  

```bat
@echo "Hola mundo"
```


**`boo`** - Boo  

```boo
print "Hello, world"
```

**`c`** - C  

```c
#include <stdio.h>
int main()
{
    printf("¡Hola, mundo!\n");
    return 0;
}
```

**`cpp`** - C++  

```cpp
#include <iostream.h>
using namespace std;

int main() {
  cout << "¡Hola, mundo!" << endl;
  return 0;
}
```

**`csharp`** - C#  

```csharp
using System;

class MainClass
{
	public static void Main()
	{
		System.Console.WriteLine("¡Hola, mundo!");
	}
}
```

**`css`** - Cascade Style Sheet (CSS)  

```css
body {
    font: 75% georgia, sans-serif;
    color: #555753;
    background: #fff;
    margin: 0;
    padding: 5px;
}
```

**`diff`** ó **`udiff`** - Diff  

```diff
--- /path/to/original ''timestamp''
+++ /path/to/new      ''timestamp''
@@ -1,3 +1,9 @@
+This is an important
+notice! It should
+therefore be located at
+the beginning of this
+document!
+
 This part of the
 document has stayed the
 same from version to
```

**`erlang`** - Erlang  

```erlang
-module (hola).
-export ([hola_mundo/0]).

hola_mundo() -> io:fwrite("Hola mundo!\n").
```

**`go`** - Go  

```go
package main

import "fmt"

func main() {
   fmt.Println("Hello World!")
}
```

**`haskell`** - Haskell  

```haskell
holaMundo :: IO ()
holaMundo = putStrLn "Hola mundo!"
```

**`html`** - HTML  

```html
<html>
  <head>
    <title>Hola Mundo</title>
  </head>
  <body>¡Hola Mundo!
   </body>
</html>
```

**`java`** - Java  

```java
public class HolaMundo {
       public static void main(String[] args) {
          System.out.println("¡Hola, mundo!");
       }
}
```

**`js`** - javascript  

```js
<script type="text/javascript">
  document.write("¡Hola, mundo!");
</script>
```

**`latex`** - LaTex  

```latex
\documentclass[12pt]{article}
\usepackage{lingmacros}
\usepackage{tree-dvips}
\begin{document}

\section*{Notes for My Paper}
```

**`cl`** - Common Lisp  

```cl
(format t "¡Hola, mundo!")
```

**`lua`** - Lua  

```lua
print("¡Hola, Mundo!\n")
```

**`mysql`** - MySQL  

```mysql
SELECT '¡Hola Mundo!';
```

**`pascal`** y **`delphi`** - Pascal y Delphi  

```pascal
Program HolaMundo;
Begin
	Write('¡Hola, Mundo!');
End.
```

**`perl`** - Perl  

```perl
print "Hola, mundo\n"
```

**`php`** - PHP  

```php
<?php print "¡Hola Mundo!"; ?>
```

**`python || py || pycon || pytb || python3 || cython`** - Python  

```python
print("¡Hola Mundo!")
```

**`ruby`** - Ruby  

```ruby
puts "Hola Mundo"
```

**`scala`** - Scala  

```scala
object HelloWorld extends Application{
	println("¡Hola Mundo!")
}
```

- `scheme` - Scheme
```scheme
(display "¡Hola Mundo!")
```

- `smalltalk` - Smalltalk
```smalltalk
Transcript show: '¡Hola, Mundo!'
```

- `sql` - SQL
```sql
SELECT *
FROM Personas
```

- `sqlite3` - sqlite3
```sqlite3
sqlite> CREATE TABLE tbl2 (
   ...>   f1 varchar(30) primary key,
   ...>   f2 text,
   ...>   f3 real
   ...> );
sqlite>
```


- `text` - Texto simple monoespaciado
```text
Hola mundo
```

- `vala` - Vala
```vala
class Demo.HelloWorld : Glib.Object {
	public static int main(string[] args) {
		stdout.printf("¡Hola, Mundo!\n");
		return 0;
	}
}
```

- `vbnet` - Visual Basic .NET
```vbnet
Private Sub Form_load()
	Msgbox "¡Hola, Mundo!"
End Sub
```

- `vim` - Vim Script
```vim
function! ToggleSyntax()
	if exists("g:syntax_on")
		syntax off
	else
		syntax enable
	endif
endfunction

nmap <silent> ;s  :call ToggleSyntax()<CR>
```

<a href="#top">![](https://img.shields.io/badge/regresar%20contenido%20principal-%E2%86%A9-blue?style=for-the-badge&logo=readthedocs&logoColor=%23FAC173)</a>


<h3 align="center">FIN</h3>

---


<p align="center">
Si tienes alguna sugerencia escribeme:<br>
<a href="mailto:enidev911@gmai.com?subject=hello marco" target="_blank"><img src="../../../assets/ico/sm/gmail_logo.ico" alt="" width="50"></a><br><br>
<a href="https://www.buymeacoffee.com/9111592">
<img src="../../../assets/png/buymeacoffee.png" width="195"><br>
<img src="../../../assets/png/practice.png"/></a> 
</p>