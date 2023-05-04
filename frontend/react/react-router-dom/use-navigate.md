El hook `useNavigate` devuelve una función que permite navegar programáticamente. Ejemplo:


```js
import { useNavigate } from "react-router-dom";

function useLogoutTimer() {
  const userIsInactive = useFakeInactiveUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (userIsInactive) {
      fake.logout();
      navigate("/session-timed-out");
    }
  }, [userIsInactive]);
}
```

### Ruta con segundo

Si elegimos pasar la ruta que desea navegar y el segundo argumento opcional, podemos hacerlo así:  

```js
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

const submitHandler = async (event) => {
  event.preventDefault();

  try {
    await submitForm();
    navigate("/success"); // Omitimos el segundo argumento opcional
  } catch (error) {
    navigate("/error", { state: { message: "Error al enviar el formulario" } }); // Pasamos el segundo argumento opcional
  }
};

```

Como podemos ver en el ejemplo anterior, navegamos dentro de un controlador de eventos después de enviar un formulario. Donde naveguemos dependiendo si el envió del formulario fue exitoso o no.

