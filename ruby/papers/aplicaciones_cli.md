## Aplicaciones de línea de comandos

Este será un artículo completo sobre como escribir una herramienta de línea de comando.

### Aplicación del tiempo

Como primer ejemplo, crearemos un programa para imprimir el clima desde el código postal provisto a la herramienta de línea de comandos.

El primer paso es requerir la gema `yahoo_weatherman`. Si no tenem os esta gema, podemos instalarla con el siguiente comando:

```bash
gem install yahoo_weatherman
```

Ahora que tenemos la gema instalada, podemos crear un método `weather(zip_code)`, para que nos devuelva el clima expresado en grados celcius para un código postal dado:


```ruby
require 'yahoo_weatherman'
def weather(zip_code)
	client = Weatherman::Client.new
	client.lookup_by_location(zip_code).condition['temp']
end
```

Ahora tenemos un método muy básico que da el clima cuando se le proporciona un código postal. Ahora necesitamos convertir esto en una herramienta de línea de comandos. Para ello vamos a modificar el código:  

```ruby
#!/usr/bin/ruby
require 'yahoo_weatherman'

def weather(zip_code)
	client = Weatherman::Client.new
	client.lookup_by_location(zip_code).condition['temp']
end
puts weather(ARGV[0])
```

Bueno, ahora tenemos una aplicación de línea de comandos que se puede ejecutar. Observemos que en la primera línea se específica el *she-bang* al principio del archivo (`#!/usr/bin/ruby`). Esto permite que el archivo se convierta en ejecutable, de esta forma podemos guardar el archivo como **clima**



