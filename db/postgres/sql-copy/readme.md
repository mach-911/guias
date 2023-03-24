**`COPY`** mueva datos entre tablas de PostgreSQL y archivos estándar del sistema de archivos. **`COPY TO`** copia el contenido de una tabla a un archivo, mientras que **`COPY FROM`** copia los datos de un archivo a una tabla (*agregando los datos desde el archivo en la tabla*). **`COPY TO`** también puede copiar los resultados de una consulta **`SELECT`**.


Si se especifica una lista de columnas, **`COPY TO`** copia solo los datos de las columnas especificas en el archivo. Para  **`COPY FROM`**, cada campo del archivo se inserta, en orden, en la columna especificada. Las columnas de la tabla no especificadas en la lista de columnas **`COPY FROM`** recibirán sus valores prdeterminados.  

**`COPY`** con un nombre de archivo indica al servidor PostgreSQL que lea o escriba directamente en un archivo. **El archivo debe ser accesible** para el usuario de PostgreSQL (*el ID usuario con el que se ejecuta el servidor*) y el nombre debe especificarse desde el punto de vista del servidor.