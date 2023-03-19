## Crear elementos HTML


Existen una serie de métodos para **crear de forma eficiente** diferentes elementos **HTML** o nodos, y que nos pueden convertir en una tarea muy sencilla al momento de crear estructuras dinámicas, mediante bucles o estructuras definidas:  

|Métodos|Descripción|
|-------|-----------|
|`.createElement(tag, options)`|Crea y devuelve el elemento **HTML** definido por el argumento `tag`.|


### El método : `createElement()`


Mediante el método **`.createElement()`** podemos crear **un elemento HTML en memoria** (*¡no estará insertado aún en nuestro documento HTML!*). Con dicho elemento almacenado en una variable, podremos modificar sus características o contenido, para **posteriormente** insertarlo en una posición determinada del **DOM** o documento **HTML**.


### Usar fragmento : `createDocumentFragment()`


En algunas ocasiones, nos puede resultar muy interesante utilizar **fragmentos**. Los fragmentos son una especie de documento paralelo, aislado de página con la que estamos trabajando, que tiene varias características:

- No tiene elemento padre. Está aislado de la página o documento.
- Es mucho más simple y ligero (*mejor rendimiento*).
- Si necesitamos hacer cambios consecutivos, no afecta el **reflow** (*repintado de la página*). 


