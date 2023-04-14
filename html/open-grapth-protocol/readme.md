

[introducción](#intro)  

## Introducción


El protocolo [Open Graph Protocol](https://ogp.me/) permite que cualquier página web se convierta en un objeto rico en gráfico social. 

## Metadatos básicos

Para convertir las páginas web en objetos gráficos, debe agregar metadatos básicos a su página. La versión inicial del protocolo en [RDFa], lo que significa que se colocará la etiqueta `<meta>` adicionalmente en la parte superior `<head>` de su página web. Las cuatro propiedades requeridas para cada página son:  


- **og:title**: El título de su objeto tal como debería aparecer dentro del gráfico.
- **og:type**: El [tipo](https://ogp.me/#types) de su objeto, por ejemplo, "website". Según el tipo que especifique, es también que se requieran otras propiedades.
- **og:image**: Una URL de imagen que debe representar el objeto dentro del gráfico.
- **og:url**: La URL canónica del objeto que se usará como su ID permanente en el gráfico, por ejemplo: `https://dblogging.github.io/`


Como por ejemplo, el siguiente caso:  

```html
<head>
	<meta property="og:type" content="website"/>
	<meta property="og:url" content="https://enidev911.github.io/"/>
	<meta property="og:title" content="Portfolio EniDev911"/>
	<meta property="og:description" content="fulltack js portfolio"/>
	<meta property="og:image" content="https://enidev911.github.io/banner.png"/>
</head>
```


**Metadatos opcionales**  

Las siguientes propiedades son opcionales para cualquier objeto y generalmente se recomiendan:  

- **og:audio**: Una URL a un archivo de audio para acompañar a este objeto.
- **og:description**: Una descripción de una o dos oraciones del objeto.
- **og:determiner**: La palabra que aparece antes del título de este objeto en una oración. Una enumeración de (a, an, the, "", auto). El valor predeterminado es ""(blanco).
- **og:locale** La configuración regional en la que están marcadas estas etiquetas. Del formato [language_TERRITORY](https://en.wikipedia.org/wiki/List_of_official_languages_by_country_and_territory). El valor predeterminado es **en_US**.
- **og:locale:alternate**: Una variedad de configuraciones regionales en la que está disponible esta página.


```html
	<meta property="og:type" content="website"/>
	<meta property="og:url" content="https://mdb.pushkaryadav.in/"/>
	<meta property="og:title" content="Markdown Badges"/>
	<meta property="og:description" content="Super Cool SVG based Badges for your Projects - Socials/ Languages/ Frameworks/ Libraries and more. Get generated markdown code, preview and a change badge style within single click"/>

	<meta property="og:image" content="https://mdb.pushkaryadav.in/banner.png"/>

	<meta property="twitter:card" content="summary_large_image"/>
	<meta property="twitter:url" content="https://mdb.pushkaryadav.in/"/>
	<meta property="twitter:title" content="Markdown Badges"/>
	<meta property="twitter:description" content="Super Cool SVG based Badges for your Projects - Socials/ Languages/ Frameworks/ Libraries and more. Get generated markdown code, preview and a change badge style within single click"/>

	<meta property="twitter:image" content="https://mdb.pushkaryadav.in/banner.png"/>
```