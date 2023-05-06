Crear un nuevo proyecto:

```bash
rails new api-lol --api
```

Instalar la gema, para añadir el driver de conexión para MySQL:

```bash
gem install mysql2
```

Modificamos el archivo **config/database.yml**:

```bash
default: &default
  adapter: mysql2
  username: "root"
  password: "root"
  pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>
  timeout: 5000

development:
  <<: *default
  database: demo_rails_db #Debe existir esta base de datos

# Warning: The database defined as "test" will be erased and
# re-generated from your development database when you run "rake".
# Do not set this db to the same as development or production.
test:
  <<: *default
  database: db/test.sqlite3

production:
  <<: *default
  database: db/production.sqlite3
```


Creamos un modelo para el ejemplo será con Campeones del video juego LOL:  

```bash
rails g model Campeon nombre rol comp
```
Ejecutar la migración:

```bash
rails db:migrate
```

>**Nota:** si obtenemos el siguiente error:  
rails db:migrate  
rails aborted!  
Invalid format of target version: `VERSION=[NUM.NUM]`  
Tasks: TOP => db:migrate  
(See full trace by running task with --trace)  
Simplemente antes de ejecutar el comando, corra esto en la terminal: unset VERSION

Ahora vamos agregar algunas validaciones en el modelo creado:  

```bash
class Campeon < ApplicationRecord
	validates :nombre, presence: true,
	validates :rol, presence: true,
	validates :region, presence: true,
	validates :comp, presence: true
end
```