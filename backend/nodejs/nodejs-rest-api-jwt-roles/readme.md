## NodeJs Rest Api con JWT

![Babel](https://img.shields.io/badge/Babel-F9DC3e?logo=babel&logoColor=black)
![JWT](https://img.shields.io/badge/JWT-black?logo=JSON%20web%20tokens)

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/25423296/163456776-7f95b81a-f1ed-45f7-b7ab-8fa810d529fa.png" width="30">
  <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png" width="30">
  <img alt="Shows an illustrated sun in light mode and a moon with stars in dark mode." src="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png" width="30">
</picture>



## CONTENIDO

- [Dependencias](#dependencias)
- [Configurar morgan](#configurar-morgan)




<a name="dependencias"></a>
## Dependencias

```bash
npm i express bcryptjs jsonwebtoken cors pg dotenv pg
```


Para tener separados y delegar bien el proyecto vamos a dejar nuestro archivo *`src/app.js`* con todo lo relacionado con la aplicación:  

```js
import express from "express";

const app = express();
export default app;
```

Como vemos exportamos la constante app, ahora vamos a *`src/index.js`* que va ser el punto de partida e importamos la constante:  

```js
import app from "./app";

app.listen(4000);
console.log("Server running on port:", 4000);
```

<a name="configurar-morgan"></a>
## Confirando morgan

El módulo de **morgan** se utiliza como un ***middleware*** de express, y lo podemos usar de la siguiente manera:  

```js
import morgan from "morgan";
app.use(morgan('dev'));
```

Aquí le especificamos el argumento "`dev`", y este módulo hará lo siguiente, cada vez que nosotros visitemos una URL, nos va a mostrar los mensaje con la información como el tipo de petición, el código de respuesta y el tiempo de demora.

<a name="configurar-rutas"></a>
## Configurando las primeras rutas

Para configurar nuestras rutas, vamos a crear unos archivos en **`src/routes`** para ir organizando mejor el proyecto


```js
// src/productos.routes.js

```

