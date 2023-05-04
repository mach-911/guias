# React Router :rocket:

<a name="top"></a>
## CONTENIDO

- [Instalación](#instalacion)
- [Configurar rutas](#configurar-rutas)
- [Usar el hook useRoutes](#usar-hook-useroutes)
- [Usar el hook useParams](#usar-hook-useparams)
- [Usar el hook useNavigate](#usar-hook-usenavigate)


<a name="instalacion"></a>
## Instalación

```bash
npm install react-router-dom
```

<a name="configurar-rutas"></a>
## Configurar rutas

El enrutador o '**Router**' es un componente de nivel superior que hace que todos los demas componentes de navegación y *hooks* funcionen. React Router tiene **`BrowserRouter`** y **`HashRouter`** para aplicaciones web. En una aplicación se usa comúnmente **`<BrowserRouter>`** y este componente envuelve uno o más elementos **`<Routes>`**.  

**`<Routes>`** comprueba todos sus hijos (*`children`*) que son elementos **`<Route>`** para encontrar la mejor coincidencia y representar esa parte de la interfaz.  

**`<Route>`** se define como un objeto o un elemento de una ruta. Si es un objeto, el objeto tiene una forma de **`{path, element}`**. Si es un elemento de ruta, el componente tiene una forma de **`<Route path element>`**. Cuando el patrón de ruta coincide con la URL actual, se representará la propiedad **`element`**.  

Para ver como funciona, preparamos unas páginas de ejemplo:  

```jsx
// src/Pages.jsx
import {loremIpsum} from 'lorem-ipsum' // => npm i lorem-ipsum

const getPage = (index) => {
  return (
  	<>
  	  <h1>Página actual</h1>
  	    <section>
  	      <h3>Contenido de la página: {index}</h3>
  	      <p>{loremIpsum({count: 10})}</p>
  	    </section>
  	</>
  )
}

export const PageOne = () => getPage(1);
export const PageTwo = () => getPage(2);
```

En el bloque anterior creamos una función que genera una página con título donde el contenido de la página se genera con la función de `loremIpsum()` con 10 oraciones aleatorias y finalmente usamos la función `getPage` para generar `PageOne` y `PageTwo`.  
Ahora podemos importar y crear dos rutas para representar cada página:  


```jsx
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {PageOne, PageTwo} from "./Pages";

export default function App() {
  return (
    <BrowserRouter>
  	  <Routes>
  	    <Route path="/one" element={<PageOne/>} />
  	    <Route path="/two" element={<PageTwo/>} />
  	  </Routes>
    </BrowserRouter>
  )
}
```

**`<BrowserRouter>`** y **`<Routes>`** se utilizan para definir el enrutador. Hay dos **`<Route>`** en la aplicación para cuando la URL coincide con la ruta "**one**" la aplicación mostrará **`<PageOne>`** cuando la URL coincide con la ruta "**two**" se muestra **`<PageTwo>`**.

![React router gif](./assets/01.gif)

Como vemos la aplicación funciona para las rutas **one** y **two**. Sin embargo '`http://localhost:<port>`' no muestra nada nada, al igual que cualquier URL no válida. Este problema en principio se puede resolver con una ruta comodín de la siguiente manera: **`<Route path="*" element={<PageOne/>}/>`**.  

> ***Nota:*** Dado que react Router v6 es lo suficientemente inteligente como para elgir la coincidencia más específica, el orden de la ruta no importa

---

<a href="configurar-navegacion"></a>
## Configurar navegación de rutas

Las dos rutas de ejemplo anterior funcionan como se esperaba. Sin embargo no es conveniente escribir la URL en la barra de direcciones, sería mejor que nuestra aplicación sea capaz de navegar haciendo clic en los enlaces, que en React Router los podemos usar como un elemento **`<Link>`**.  

```jsx
// src/MainPage.jsx
import {Link} from "react-router-dom";

export const MainPage = () => (
  <nav>
    <ul>
      <li>
        <Link to="/one">Página uno</Link>
      </li>
      <li>
        <Link to="/two">Página dos</Link>
      </li>
    </ul>
  </nav>
);
```

```jsx
// src/App.jsx
import {MainPage} from "./MainPage";

export default function App() {
  <BrowserRouter>
    <Routes>
      <Route index element={<MainPage/>} />
      <Route path="/one" element={<PageOne/>} />
      <Route path="/two" element={<PageTwo/>} />
    </Routes>
  </BrowserRouter>
}
```

Ahora tenemos una nevegación muy básica con dos enlaces que nos llevará a las rutas definidas. Sin embargo dentro de **`PageOne`** y **`PageTwo`**, no podemos usar los enlaces para navegar ya que no aparecen como se muestra a continuación:  

![React router gif](./assets/02.gif)


Para resolver este problema, crearemos un componente **`<Outlet>`** en **`<MainPage>`**. El componente **`<Outlet/>`** representa la siguiente coincidencia : ("**one**" para PageOne y "**two**" para PageTwo) en la ruta.  

```jsx
// src/MainPage.jsx
import {Link} from "react-router-dom";

export const MainPage = () => (
  <>
    <nav>
      <ul>
        <li>
          <Link to="/one">Página uno</Link>
        </li>
        <li>
          <Link to="/two">Página dos</Link>
        </li>
      </ul>
    </nav>
    <hr/>
    <Outlet />
  </>
);
```

**`<Outlet>`** muestra rutas anidadas, donde cada ruta puede tener rutas secundarias para ocupar parte de la URL. Las rutas anidadas suelen utilizar enlaces relativos.  

```jsx
// src/App.jsx
import {MainPage} from "./MainPage";

export default function App() {
  <BrowserRouter>
    <Routes>
      <Route index element={<MainPage/>}>
        <Route index element={<PageOne/>} />
        <Route path="/one" element={<PageOne/>} />
        <Route path="/two" element={<PageTwo/>} />
      </Route>
    </Routes>
  </BrowserRouter>
}
```

---

<a name="usar-hook-useroutes"></a>
## Usar el hook useRoutes

Otra forma, en lugar de **`<Routes>`**, también podemos usar el *hook* **`useRoutes`** que nos proporciona React Router.  

Podemos rescribir las rutas anidadas en *`src/App.jsx`* de la siguiente forma:  

```jsx
import {BrowserRouter, useRoutes} from "react-router-dom";
import {MainPage} from "./MainPage";
import {PageOne, PageTwo} from "./Pages";

function App() {
  const routes = useRoutes([
    { 
      path: "/",
      element: <MainPage/>,
      children: [
        {index, element: <PageOne/>},
        {path:"*", element: <PageOne/>},
        {path:"two", element: <PageTwo/>}
      ]
    }  
  ]);
  return routes;
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  )	
}
```

[![](https://img.shields.io/badge/regresar%20a%20contenido-%E2%86%A9-%232BAAEC?style=for-the-badge)](#top)

---

<a name="usar-hook-uselocation"></a>
## Usar el hook useLocation


El *location* es un objeto que representa la ubicación de la URL, se basa en el objeto del navegador **`useLocation`** usa `window.location` por abajo:  


```jsx
import {useEffect} from "react";
import {BrowserRouter, useLocation, useRoutes} from "react-router-dom";
import {MainPage} from "./MainPage";
import {PageOne, PageTwo} from "./Pages";

function App() {
  const location = useLocation();
  useEffect(() => {
    console.log("Estas en", location);
  },[location]);

  const routes = useRoutes([
    { 
      path: "/",
      element: <MainPage/>,
      children: [
        {index, element: <PageOne/>},
        {path:"*", element: <PageOne/>},
        {path:"two", element: <PageTwo/>}
      ]
    }  
  ]);
  return routes;
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  )	
}
```

[![](https://img.shields.io/badge/regresar%20a%20contenido-%E2%86%A9-%232BAAEC?style=for-the-badge)](#top)

---

<a name="usar-hook-useparams"></a>
## Usar el hook useParams

Para hacer un ejemplo más interesante, podemos anidar más rutas. En **`MainPage`** además de los enlaces para **`PageOne`** y **`PageTwo`**, agregamos enlaces más detallados como **`P1`** para el **párrafo 1** y **`P2`** **párrafo 2**:  

```jsx
// src/App.jsx
import {BrowserRouter, useRoutes, useParams} from "react-router-dom";
import {MainPage} from "./MainPage";
import {PageOne, PageTwo} from "./Pages";

function App(){
  const location = useLocation();

  useEffect(() => {
    console.log("Estás en:", location.pathname);
  }, [location]);
  
  const routes = useRoutes([
    {
      path: "/",
      element: <MainPage />,
      children: [
        { index: true, element: <PageOne /> },
        { path: "*", element: <PageOne /> },
        {
          path: "one",
          element: <PageOne />,
          children: [{ path: ":id", element: <PageOne /> }],
        },
        {
          path: "two",
          element: <PageTwo />,
          children: [{ path: ":id", element: <PageTwo /> }],
        },
      ],
    },
  ]);
  return routes;
}


export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  )	
}
```

Ahora modificamos los enlaces en *`src/MainPage.jsx`*:  

```jsx
// src/MainPage.jsx
import {Link, Outline} from "react-router-dom";

export const MainPage = () => {
  return (
  <>
    <nav>
      <ul>
        <li>
          <Link to="/one">Página uno</Link>&nbsp;
          <Link to="/one/1">P1</Link>&nbsp;
          <Link to="/one/2">P2</Link>
        </li>
        <li>
          <Link to="/two">Página dos</Link>&nbsp;
          <Link to="/two/1">P1</Link>&nbsp;
          <Link to="/two/2">P2</Link>
        </li>
      </ul>
    </nav>
    <hr/>
    <Outlet />
  </>
  )
}
```

El *hook* **`useParams`** devuelve un objeto de pares **clave/valor** de los parámetros dinámicos de la URL actual. Aquí en *`src/Pages`* podemos modificar lo siguiente:  


```jsx
// src/Pages
import { loremIpsum } from "lorem-ipsum"; // => npm i lorem-ipsum
import { useParams } from "react-router";

const BuildPage = (index) => {
  const { id } = useParams();

  return (
    <>
      <h2>Página {index}</h2>
      <section>
        <h3>Contenido de la página: {index}</h3>
        {id && <h4>Párrafo {id}</h4>}
        <p>{loremIpsum({ count: 5 })}</p>
      </section>
    </>
  );
};

export const PageOne = () => BuildPage(1);
export const PageTwo = () => BuildPage(2);

```

Dado que de debe usar un *hook* en un componente de React, es por ello que cambiamos la función de **getPage** a **BuildPage**. Si abrimos la consola del navegador, veremos mensajes como: `Estás en la ruta: /two/1`

[![](https://img.shields.io/badge/regresar%20a%20contenido-%E2%86%A9-%232BAAEC?style=for-the-badge)](#top)

---

<a name="usar-hook-usenavigate"></a>
## Uso del hook useNavigate

Este *hook* nos devuelve una función que se puede usar para navegar programaticamente. Remplacemos los enlaces **`<Link>`** por **`<button>`** en *`src/MainPage`*:  


```jsx
// src/MainPage.jsx
import { useNavigate, Link, Outlet } from "react-router-dom";

export const MainPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav>
        <ul>
          <li>
            <button onClick={() => navigate("one", { replace: false })}>
              Página uno
            </button>{" "}
            <Link to="/one/1">P1</Link>&nbsp;
            <Link to="/one/2">P2</Link>
          </li>
          <li>
            <button onClick={() => navigate("two", { replace: false })}>
              Página dos
            </button>{" "}
            <Link to="/two/1">P1</Link>&nbsp;
            <Link to="/two/2">P2</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </>
  );
};
```

[![](https://img.shields.io/badge/regresar%20a%20contenido-%E2%86%A9-%232BAAEC?style=for-the-badge)](#top)