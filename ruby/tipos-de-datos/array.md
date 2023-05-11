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
@nombres_ingleses = [ "Ralph, Joe, Bob" ]

@nombres + @nombres_ingleses # ["ivan", "luis", "pedro", "Ralph, Joe, Bob"]
```