## gets

![Ruby](https://img.shields.io/badge/ruby-%23CC342D.svg?logo=ruby&logoColor=white)

Los desarrolladores a menudo tenemos la necesidad de interactuar con los usuarios, ya sea para obtener datos o para proporcionar algún tipo de resultado. La mayoría de los programas utilizan cuadros de diálogos como una forma de pedirle al usuario que proporcione algún tipo de entrada. Mientras que **Ruby** nos proporciona una función incorporada para leer desde la entrada estándar del teclado: **`gets`**

Esta función **`gets`** primero toma la entrada del usuario y luego se evalúa la expresión, lo que significa que **Ruby** identifica automáticamente si el usuario ingresó. Por defecto los valores que se ingresan por la entrada estándar ***`stdin`*** lo almacena como un **String**, ejemplo:  


```ruby
puts "¿Cuál es tu número favorito?"  
STDOUT.flush  # esto es opcional es para limpiar los datos anteriores
numero = gets
puts numero.class # String
```

<h3 class="title_section">Como funciona internamente Gets en Ruby</h3>

- Primero se ejecuta la función **`gets`**, el flujo del programa se detendrá hasta que el usuario haya dado una entrada.
- Lo que sea que ingrese como entrada el usuario, la función **`gets`** lo convierte en una cadena, quiere decir, si ingresa un valor como un número entero, será procesado como una cadena, necesitaremos convertirlo explícitamente en un número entero en el código.

Ejemplo: convertir explícitamente a entero:


```ruby
puts "Ingrese un número: "
num = gets
puts num.class # output: String
puts "Ingrese un número: "
num = gets.to_i 
puts num.class # output: Integer
# otra opción más legible es:
puts "Ingrese un número: "
num = gets
puts num.to_i.class
```

---

<h3 class="title_section">Tomando múltiples entradas</h3>

En **Ruby** así como en varios lenguajes de programación, podemos tomar múltiples valores o entradas en una línea, para ello usaremos el método **split()**.

**SINTAXIS**  

```txt
str.split(pattern, limit)
```

Ejemplos:  

```ruby
puts "Ingresa dos valores: "

x, y = gets.split()
puts "Eje x: #{x}"
puts "Eje y: #{y}"
# ======== Otra forma
puts "Ingresa dos valores: "
a, b = gets.split()
puts 'Primer número %s y segundo número es %s' % [a, b]
```

