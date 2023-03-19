<h1 align="center">
 <img src="https://badges.aleen42.com/src/python.svg" alt="badge python" height="50" align="left">
 <img src="../../../../../../assets/png/logo_sin_bg.png" height="55" align="right"><br><br>
<code>enumerate()</code>
</h1>



La función integrada **`enumerate()`** devuelve un objeto de enumeración. Un [**_`iterable`_**](https://www.w3schools.com/python/python_iterators.asp) debe ser una secuencia, un iterador o algún otro objeto que admita la iteración. El método `__next__()` del iterador por la función **`enumerate()`** devuelve una tupla que contiene un recuento de cada elemento en la secuencia (desde el argumento *`start`*, por defecto el valor es 0) y los valores obtenidos al iterar sobre el *iterable*.


**_Sintaxis_**

```python
enumerate(iterable, start=0)
```

**_Parámetros_**

La función toma dos parámetros:

- **iterable** : una secuencia, un iterador u objetos que admiten la iteración
- **start** (opcional): **`enumerate()`** si **start** se omite comienza a contar desde 0.

```python
frameworks = ['Django', 'Flask', 'Pyramid']

enumerar_frameworks = enumerate(frameworks)

# Convertir el objeto de enumeración en una lista
print(list(enumerar_frameworks))
# Output: [(0, 'Django'), (1, 'Flask'), (2, 'Pyramid')]
```

***Equivalente a***


```python
def enumerate(sequence, start=0):
    n = start
    for elem in sequence:
        yield n, elem
        n += 1
print(list(enumerate(frameworks)))
# Output: [(0, 'Django'), (1, 'Flask'), (2, 'Pyramid')]
```



### Más ejemplos

<details><summary><b>CLIC:</b> Ver ejemplos</summary><br>
<p>

<ul><li><details><summary><b>CLIC:</b> Ejemplo °1 con bucles</summary><br>


```python
languages = ['Python', 'Java', 'JavaScript']

for item in enumerate(languages):
  print(item)

# output: 
# (0, 'Python') 
# (1, 'Java') 
# (2, 'JavaScript') 

print('\n')

for count, item in enumerate(languages):
  print(count, item)

# output: 
# 0 Python
# 1 Java
# 2 JavaScript'

print('\n')
# cambiando el valor por defecto de start
for count, item in enumerate(languages, 100):
  print(count, item)

# output: 
# 100 Python
# 101 Java
# 102 JavaScript'
```
</p>

<p align="center">
 <a target="_blank" href="https://colab.research.google.com/drive/1qe60DxwLFGXjrhzuk_5xxzlF0O0ftN-d?#enumerate&usp=sharing">
  <img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab" height="40"/><br><img src="../../../../../../assets/png/practice.png" height="70"/></a> 
</p>

</details></li></ul>
</details>



