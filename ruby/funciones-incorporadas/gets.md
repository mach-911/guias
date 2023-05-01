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

