### Operador AND lógico


El **operador lógico AND** establece una condición donde devolverá el primer valor si es `false`, o el segundo valor si el primero es `true`. Esto se puede leer de forma que &lt;&lt;devuelve **b** si **a** y **b** son verdaderos, sino **a**&gt;&gt;.

Veamos algunos ejemplos:

```js
false && false // false (si ninguno de los dos es true)
true && false // false (idem)
false && true // false (idem)
true && true // true (si ambos son true)
```



---

<a name="operador-ternario"></a>
### Operador ternario

El **operador ternario** es una especie de **if compacto** que tienen la mayoría de los lenguajes de programación, donde en lugar de utilizar un `if / else` tradicional, para escribir en varias líneas, podemos hacermo mediante el **operador ternario**. Su estructura es la siguiente: **`(condición) ? valor verdadero : valor false`**.  

Veamos como se utiliza, comparándolo con un **`if`**:  

```js
// Sin operador ternario
let role;
if (name === "Jhon Doe") {
	role = "admin";
} else {
	role = "user";
}

// Con operador ternario
const role = name === "Jhon Doe" ? "admin" : "user";
```

En este caso, `name === "Jhon Doe"` sería la condición, `"admin"` es el valor si la condición es verdadera, y `"user"` el valor si la condición es falsa. Como podemos ver, el operador ternario permite escribir código mucho más compacto en muchas situaciones.


