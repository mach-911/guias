## Función : abs() <img src="../../../../assets/png/python/python.png" width="33" align="left" style="margin-right: 12px;">

La función **`abs()`** devuelve el valor absoluto del número dado. Si el número es un número complejo, **abs** devuelve su magnitud.  


***Sintaxis***  

```python
abs(num)
```

***Parámetros***  

- **num** : un número cuyo valor absoluto se va a devolver. El número puede ser:
	+ entero
	+ número flotante
	+ Número complejo
	
***Retorna***

- **abs()** : devuelve el valor absoluto del número dado.
	+ Para números enteros : se devuelve el valor absoluto entero
	+ Para números flotantes: se devuelve el valor absoluto flotante
	+ Para números complejos - se devuelve la magnitud del número


### Ejemplos

<details><summary>Ver</summary>
<p>

<b>Ejemplo 1: obtener el valor absoluto de un número</b>

```python
# entero aleatorio
entero = -25
print('El valor absoluto de -25 es:', abs(entero))
# output: El valor abdoluto de -25 es: 25
print()
# número flotante
flotante = -10.23
print('El valor absoluto de -10.23 es:', abs(flotante))
# output: El valor abdoluto de -10.23 es: 10.23
```


<b>Ejemplo 2: Obtener la magnitud de un número complejo</b>

```python
# número complejo aleatorio
complejo = (3 - 4j)
print('La magnitud  de 3 - 4j es:', abs(complejo))
# output: La magnitud de 3 - 4j es: 5
```

</p>
</details>

<br>

