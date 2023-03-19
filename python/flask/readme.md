## FLASk


### Instalación


```bash
pip install Flask
```

### Configurar una aplicación

Lo recomendado es crear un *entorno virtual* que basicamente es una **copia** del **interprete de Python** y permite que lo usemos e instalemos cualquier paquete que sea necesario, sin necesidad de alterar el interprete de Python original o el desarrollo de otro proyecto.

Si tenemos una versión 3.4 o superior, el soporte de entornos virtuales viene incluido en la versión de Python, por lo tanto, se pueden crear entornos virtuales desde la terminal con el siguiente comando: 

```txt
python -m venv nombre_entorno
```

### Activar el entorno

**Linux**  

```bash
souce venv/bin/activate
```


**Windows CMD**

```bat
.\venv\Scripts\activate
```


### Hola mundo



```python
from flask import Flask
app = Flask(__name__)

@app.route('/')
def Hola():
    return 'Hola Mundo Flask es facil!'
if __name__ == "__main__":
    
    app.run(host='0.0.0.0',
            debug=True,
            port=8080)
```




