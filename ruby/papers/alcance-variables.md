## Alcance de variables y visibilidad


**Sintaxis**

- `$var`: variable global
- `@@var`: variable de clase
- `@var`: variable de instancia
- `var`: variable local

### Observaciones

Las variables de clase se comportan en la jerarquía de clases. Esto puede resultar en un comportamiento sorprendente:


```ruby
class A
 @@variable = :x
 def self.variable
 	@@variable
 end
end

class B < A
 @@variable = :y
end
A.variable # :y
```

### Variables locales

Las variables locales (a diferencia de las otras clases de variables) no tienen ningún prefijo

```ruby
local_variable = "local"
p local_variable # "local"
```

Su alcance depende de donde se ha declarado, no se puede usar fuera del alcance de "**contenedores de declaración**". Por ejemplo, si una variable local se declara en un método, solo se puede usar dentro de ese método.


```ruby
def metodo_foo
	scope_var = "hola estoy dentro del método"
	p scope_var
end
metodo_foo
# "hola estoy dentro del método"
scope_var
# NameError: undefined local variable or method `scope_var'
```

Por supuesto, las variables locales no se limitan a los métodos, como regla de oro podríamos decir que, tan pronto como declare una variable dentro de un bloque `do ... end` o envuelto entre `{}`, será local y estará dentro del alcance del bloque declarado en:

```ruby
2.times do |n|
 local_var = n + 1
 p local_var
end
# 1
# 2
local_var
# NameError: undefined local variable or method `local_var'
```

Sin embargo, las variable locales declaradas en los bloques `if` o los bloques `case` se pueden usar en el ámbito principal:  

```ruby
if true
 usable = "sigo disponible en el ámbito principal"
end
p usable
```

Si bien las variables locales no pueden utilizarse fuera de su bloque de declaración, se pueden transmitir a los bloques:

```ruby
my_var = "foo"

my_var.split("").each_with_index do |char, i|

```
