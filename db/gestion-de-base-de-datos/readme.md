Este tema que veremos como hacer el diseño conceptual y lógico de una base de datos. Empezaremos elaborando el modelo conceptual usando diagramas **Entidad-relación** y **Entidad relación extendidos**. Este diseño es de más alto nivel, más proximo al usuario y más alejado del diseño físico de la base de datos. A partir del modelo **Entidad-Relación**, procederemos a general el modelo relacional, el cual ua se halla muy próximo al modelo físico de la base de datos. Veremos las reglas de transformación que hemos de seguir para ello. por último deberemos normalizar las tablas obtenidas para evitar redudancias. En resumen los dos modelos lógicos, de mayor a menor abstracción, que veremos son:

- **Modelo Entidad-Relació (extendido)n**
- **Modelo Relacional**


### Diseño de una BD (Base de datos)

El diseño de una base de datos consiste en extraer todos los datos relevantes de un problema, por ejemplo, saber que datos están implicados en el proceso de facturación de una empresa que vende artículos de tecnología, o, que datos son necesarios para llevar el control de pruebas de diagnósticos de un laboratorio. Para extraer esos datos, se debe realizar un análisis en profundidad del problema, para averiguar qué datos son esenciales para la base de datos y descartar los que no sean necesarios. Una vez extraídos los datos esenciales comenzamos a construir los modelos adecuados. Es decir, construimos, mediante una herramienta de diseño de base de datos, un esquema que exprese con total exactitud todos los datos que el problema requiere almacenar. Podemos decir que es equivalente al dibujo de un plano previo a la construcción de un edificio. También vamos a ver, las distintas fases por las que atraviesa el proceso de diseño de una base de datos. Además, previo al diseño es necesario realizar una primera fase denominada análisis.


### Fase de Anásilis: E.R.S (Especificación de requisitos de Software)

Antes de pasar a diseñar una **BD** hay que tener claro que es lo que queremos hacer. Para ello, típicamente el grupo de los informáticos se reúnen con los futuros usuarios del sistema para recopilar la información que necesitan para saber que desean hacer dichos usuarios. Normalmente se hace una reunión inicial y a partir de ella **se elabora una batería de preguntas** para entrevistar a los usuarios finales, en una segunda reunión podemos obtener una información más detallada por parte de los usuarios para ayudar a identificar lo que se espera de nuestra base de datos. De estas entrevistas, **se extrae el documento más importante del análisis, el documento de especificación de requisitos de software** o (E.R.S). A partir de dicho E.R.S. Se extrae toda la información necesaria para modelización de los datos.



### Fase 1 del diseño. Diseño Conceptual: Modelo Entidad/Relación

Habitualmente quien realiza la modelización es un analista informático que no tiene porqué se un experto en el problema que pretende resolver. Es por esto que es imprescindible contar con la experiencia de un futuro usuario de la base de datos que conozca a fondo todos los entresijos del negocio, y que, a su vez, no tienen porqué tener ningún conocimiento de informática. El objetivo de esta fase de diseño consiste es representar la información obtenida del usuario final y concretada en el **E.R.S**. mediante estándares para que el resto de la comunidad informática pueda entender y comprender el modelo realizado. El modelo que se utiliza en esta primera fase de diseño tiene un gran poder expresivo para poder comunicarse con el usuario que no es experto en informática y se denomina **Modelo Conceptual**. El modelo conceptual que utilizaremos es el Modelo Entidad/Relación e iremos profundizando en él a lo largo de los ejemplos.


### Fase 2 del diseño. Diseño Lógico: Modelo Relacional


Este modelo es más técnico que el anterior porque está orientado al personal informático y generalmente tiene traducción directa al modelo físico que entiende con el **SGBD** (Sistema Gestor de Base de Datos) seleccionado. Se obtiene a partir del modelo conceptual y dependerá de la implementación de la base de datos. Así, no es lo mismo implementar una base de datos jerárquica u orientada a objetos que una **BD relacional**.


### Fase 3 del diseño. Diseño Físico: Modelo Físico


Es el resultado de aplicar el modelo lógico a un **SGBD** concreto. Generalmente está expresado en el lenguaje SQL. Es la transición de transformar el modelo relacional al modelo físico mediante sentencias DDL (*Data Definition Language*) de SQL.


