## Expresiones en JSX

Con **JSX** podemos escribir expresiones dentro de llaves `{}`, la expresión puede ser una variable o propiedad de React. o cualquier otra expresión de **javascript** válida. JSX ejecutará la expresión y devolverá el resultado:


```jsx
const myElement = <h1>React es {5+5} veces mejor</h1> 
```

Para insertar un bloque grande de **HTML** debemos colocarlo entre paréntesis: 

```jsx
const myElement = (
	<ul>
	  <li>Apple</li>
	  <li>Bananas</li>
	  <li>Cherries</li>
	</ul>
)
```

Alternativamente, podemos usar un `fragment`, para envolver varias líneas. Esto evitará agregar innecesariamente nodos adicionales al **DOM**: 

```
const myElement = (
	<>
	  <p>Primer párrafo</p>
	  <p>Segundo párrafo</p>
	</>
)
```

**JSX** sigue la regla XML y, por lo tanto, los elementos **HTML** deben cerrarse correctamente.

```jsx
const myElement = <input type="text" />;
```