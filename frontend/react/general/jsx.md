## ¿Que es JSX?

- **JSX** significa Javascript XML
- **JSX** nos permite escribir HTML en React
- **JSX** facilita escribir y agregar HTML en React

### Codificación JSX

**JSX** nos permite escribir elementos **HTML** en javascript y colocarlos en el **DOM** sin necesidad de usar métodos como **`createElement`** y/o **`appendChild`**.

**JSX** convierte etiquetas **HTML** en elementos de React.

>no es necesario que usemos JSX, pero JSX facilita la escritura de aplicaciones React

**Ejemplo usando JSX**

```jsx
const myElement = <h1>I love JSX</h1>
const root = ReactDOM.createRoot(
	document.getElementById('root')
)
root.render(myElement)
```

**Ejemplo sin JSX**

```jsx
const myElement = React.createElement('h1', {}, 'sin JSX')
const root = ReactDOM.createRoot(
	document.getElementById('root')
)
root.render(myElement)
```

**JSX** es una extensión del lenguaje javascript basado en **ES6** y se traduce a javascript normal en tiempo de ejecución.




