## Array.new

Crear un nuevo Array vacio

```ruby
@nombres = Array.new
```
Esto hace que **@nombres** se convierta en un **Array**. Hay que notar que este array esta vació.


## Método []

Este método retorna un nuevo **Array** con el contenido que le pasemos directamente dentro de los corchetes `[]`. Por ejemplo:  

```ruby
@nombres = ["ivan", "luis", "pedro"]
```

Esto asigna a **@nombres** un array con los 3 elementos. Notemos que no tuvimos que llamar a la **clase Array** ya que ruby deduce por su naturaleza dinámica que esto es un array. Este método es muy usado en la creación de arrays.


## Método: +

Con este método sumamos arrays. Es decir, le agregamos el contenido de uno al final del otro. Por ejemplo:  

```ruby
@nombres = ["ivan", "luis", "pedro"]
@nombres_ingleses = ["Ralph, Joe, Bob"]

print @nombres + @nombres_ingleses 
# ["ivan", "luis", "pedro", "Ralph, Joe, Bob"]
```

## Método: -

De la mimsa manera podemos restar arrays:  

```ruby
@nombres = ["ivan", "luis", "pedro"]
@menos_nombres = ["ivan", "luis"]

print @nombres - @menos_nombres
# ["pedro"]
```

## Método: \*

Muy parecido podemos multiplicar un array por un número. Esto lo va a copiar tantas veces sea el valor de la multiplicación

```ruby
@numeros = [1, 2, 3] 
print @numeros * 3
# [1, 2, 3, 1, 2, 3, 1, 2, 3]
```


## Método: &lt;&lt;

Al ya tener un array podemos agregarle nuevos elementos con este método. Por ejemplo:  

```ruby
@nombres = ["ivan"]
print @nombres << "pedro" << "luis" << "cesar"
# ["ivan", "pedro", "luis", "cesar"]
```

## Método: \&

A este método lo llamamos intersección por que retorna los elementos comunes de dos arrays sin duplicarlos. Por ejemplo:


```ruby
@clientes = ["Raul", "Pedro", "Ivan", "Raul"]
@familia = ["Raul", "Raul"]

print @clientes & @familia
# ["Raul"]
```

## Método: &lt;=&gt;

A este método lo llamamo comparación. Retorna -1, 0, +1 si el array es menor que, igual que o mayor que otro array respectivamente. Por ejemplo:  


```ruby
puts ["Ivan", "Pedro"] <=> ["Pedro"]
# -1

puts ["Pedro", "Ivan"] <=> ["Ivan", "Pedro"]
# 1

puts ["Pedro", "Ivan"] <=> ["Pedro", "Ivan"]
#0
```

Notemos que retorna (-1) si los arrays son diferentes. Retorna 1 si los array son iguales pero los objetos no están en el mismo orden y retorna 0 si el array es exactamente igual.


## Método: ==

Igualdad. Con este método comprobamos que dos arrays son iguales. Ejemplo:  


```ruby
["pedro", "ivan"] == [1,2,3]
#false

["pedro", "ivan" ] == ["pedro", "ivan"]
# true
```