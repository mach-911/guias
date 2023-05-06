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
