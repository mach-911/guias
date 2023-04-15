La integridad referencial es una funcionalidad común que está disponible en las bases de datos relacionales que garantiza la coherencia de datos entre relaciones.  

Bajo mi punto de vista, es una de las características básicas y más importantes que una base de datos nos puede proporcionar y siempre se deberia de usar para garantizar la integridad de datos.  

La integridad referencial se define con el uso combinado de claves primarias (*primary key* 🔑) y clave foránea (*foreign key* 🗝️).

Las claves primarias y candidatas están formadas por valores únicos y una clave foránea solamente puede estar asociada a una de estas para garantizar la existencia de un solo valor correcto. Las claves candidatas se pueden definir creando un índice único (`CREATE UNIQUE INDEX ...`) en la columna pertinente.


