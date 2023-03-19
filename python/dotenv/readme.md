[comment]: <> (Author: Marco Contreras Herrera)
[comment]: <> (Email: enidev911@gmail.com)

## MÓDULO DE DOTENV

![Python](https://badges.aleen42.com/src/python.svg)
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/25423296/163456776-7f95b81a-f1ed-45f7-b7ab-8fa810d529fa.png" width="30">
  <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png" width="30">
  <img alt="Shows an illustrated sun in light mode and a moon with stars in dark mode." src="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png" width="30">
</picture>



### Instalación

```cmd
pip install python-dotenv
```

### Descripción

El módulo **dotenv** es un módulo de dependencia cero que carga variables de entorno a partir de un archivo `.env`. en `process.env`. El almacenamiento de la configuración en el entorno separado del código se basa en la metodología de una aplicación Twelve-Factor.


### Variables de entorno

Las variables de entorno nos permiten gestionar la configuración de nuestras aplicaciones por separado de nuestro código base. La separación de configuraciones facilita que nuestra aplicación se implementa en entornos diferentes.  

Las variables de entorno son variables externas a nuestra aplicación que residen en el sistema operativo.  


### ¿Cómo es un archivo .env?

Es un simple archivo de texto donde, en cada línea, definimos una variable de entorno y le asignamos su valor mediante el operador `=`.

```txt
PG_USER=postgres
PG_PASSWORD=miclavesupersecreta
PG_DBNAME=labasededatos
PG_HOST=elservidor
API_KEY=la_key_supersecreta
```


### Cargar variables de entorno

La función **`load_dotenv()`** por defecto busca un archivo llamado **`.env`** ubicado en el mismo directorio que el archivo de Python donde esta siendo llamado. Puede anular este comportamiento pasando como argumento una ruta de la siguiente manera:  

```python
load_dotenv(dotenv_path='path/to/.env')
```

### Cargando la configuración en un diccionario


Es posible que desee tener todas las configuraciones agrupadas en un diccionario, python-dotenv lo hace fácil usando el función **`dotenv_values`**. La función **`dotenv_values`** funciona más menos de la misma manera que **`load_dotenv()`**, excepto que no toca el entorno, solo devuelve un [dict](https://docs.python.org/3/tutorial/datastructures.html#dictionaries) con los valores analizados en el archivo `.env`. 


```python
from dotenv import dotenv_values
config = dotenv_values('path/to/.env')
# config = {"USUARIO": "foo", "PORT_NUMBER": "3306"}
config['PORT_NUMBER'] = int(config['PORT_NUMBER'])
```

### Ignorar el archivo .env del repositorio

Para no guardar estos datos sensibles en nuestro repositorio, es importante agregar el archivo `.gitignore` el archivo `.env` y, para no perder de vista las variables de entorno que podemos configurar, duplicar el archivo como `.env.sample`, eso sí, sin poner los valores reales. De esta forma, cuando descarguemos nuestro proyecto, bastará con copiar el archivo `.env.sample` y renombrarlo a `.env`.


### Interfaz de línea de comandos

También se incluye una interfaz CLI dotenv, que lo ayuda a manipular el .envarchivo sin abrirlo manualmente.



### Repaso rápido:
 

- Instalar el módulo : `pip install python-dotenv`.
- Cree el archivo `.env` con la configuración adecuada.
- Agréguelo al archivo `.gitignore`
- Cargue la configuración en sus archivos de Python usando la función `dotenv_load()`
- Puede cargar la configuración  como un diccionario usando la función `dotenv_values()`
