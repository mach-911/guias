Ir a <a href="https://api.slack.com/apps">Página para crear un nuevo bot</a>

<p align="center">
	<img src="assets/01.png" align="paso1">
</p>
<p align="center">
	<img src="assets/02.png" alt="paso1.1">
</p>

<p align="center">
	<img src="assets/03.png" alt="paso1.2">
</p>

<p align="center">
	<img src="assets/04.png" alt="paso1.3">
</p>

<p align="center">
	<img src="assets/05.png" alt="paso1.4">
</p>
<p align="center">
	<img src="assets/07.png" alt="paso1.5">
</p>

<p align="center">
	<img src="assets/08.png" alt="paso1.6">
</p>

<p align="center">
	<img src="assets/09.png" alt="paso1.7">
</p>


<p align="center">
	<img src="assets/10.png" alt="paso1.8">
</p>


## Segunda parte en Python



Como vamos a estar realizando peticiones vamos a instalar la librería de **requests** (*Si gustas tener el proyecto en un entorno virtual ya te la sabes: python -m venv venv*)


```bash
pip install requests
```



Creamos un archivo principal **main.py** y partiremos con un ejemplo básico:  


```py
import requests


if __name__ == '__main__': 
	url = "https://hooks.slack.com/services/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"
	msg = input("introduce el mensaje que quieres enviar: ")

	result = requests.post(url, json={'text': msg})

	if (result.text == 'ok'):
		print('El mensaje a hiso enviado')
	else:
		print(result.text)

```

Esta forma es solo  para una demostración sencilla, pero lo que nostros queremos es que nuestro bot no sólo envie mensaje, sino que también pueda responder a eventos, por eso necesitamos instalar la librería cliente de slack:  


```bash
pip install slackclient
```

Y además vamos a ponernos serios y vamos a cargar la información delicada como lo es el token usando variables de entorno, así que también instalamos dotenv

```bash
pip install python-dotenv
```


Hecho esto vamos a comenzar con las importaciones necesarias:  


```py
import requests
import os
from pathlib import Path
import slack
from dotenv import load_dotenv
```

ahora declararemos la ruta de nuetro archivo **.env** y así cargarlas:

```py
env_path = Path('.') / '.env'
load_dotenv(dotenv_path=env_path)
```

hecho esto, podemos empezar con lo relacionado con el cliente de Slack:

```py
client = slack.WebClient(token=os.environ['SLACK_TOKEN'])
```

>Si tienes algún error, muchas veces desinstala la librería slackclient y la vuelves a instalar o revisar los **scopes** desde la página de la api, y asegurarnos de que por lo menos tenga permiso de escribir chat:write


Para comenzar a probar los mensaje podemos mandar uno al canal de pruebas:

```py
client.chat_postMessage(channel="#test", text="Hello World!")
```


A modo general el código que llevamos sería el siguiente:  

```py
import requests
import os
from pathlib import Path
import slack
from dotenv import load_dotenv


if __name__ == '__main__': 
	env_path = Path('.') / '.env'
	load_dotenv(dotenv_path=env_path)

	client = slack.WebClient(token=os.environ['SLACK_TOKEN'])
	client.chat_postMessage(channel="#general", text="Hello World!")

```

### Parte 3: suscribir eventos

<p align="center">
	<img src="assets/11.png" alt="paso3">
</p>

Aquí vamos hacer algo interesante, ya que vamos a usar [**ngrok**](https://ngrok.com/) para exponer nuestro equipo como servidor y así podamos exponer nuestro bot a los demás miembros, pero también necesitamos flask para servir la aplicación.


```bash
pip install flask
```

Hecho esto, también debemos instalar la librería para trabajar con los eventos:  
```bash
pip install slackeventsapi
```

Ahora para empezar a configurar Flask de la forma tradicional:

```py
from flask import Flask
app = Flask(__name__)
if __name__ == "__main__":
	app.run(debug=True)
```


También necesitamos tener el secreto para el inicio de sesión para los eventos: 

<p align="center">
	<img src="assets/12.png" alt="3.1">
</p>

Y también vamos a importar la librería para el adaptar los eventos y configuramos con el valor del secreto de inicio de sesión, la ruta, y el servidor web:  

```py
from slackeventsapi import SlackEventAdapter

slack_event_adapter = SlackEventAdapter(
	os.environ['SIGNING_SECRET'],'/slack/events',app)
```


<p align="center">
	<img src="assets/13.png" alt="paso3.2">
</p>


<p align="center">
	<img src="assets/14.png" alt="paso3.3">
</p>
