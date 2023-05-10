## Entry (texto corto)

En **tcl/tk** esta representado a través de la clase `ttk.Entry`, que a su vez hereda la funcionalidad de un control más primitivo como `tk.Entry`.

Para crear una caja de texto, entonces, creamos una instancia de la primera clase:

```py
import tkinter as tk
from tkinter import ttk

root = tk.Tk()
root.config(width=300, height=400)
entry = ttk.Entry(root)
entry.place(x=50, y=50) # posicionamos la ventana
root.mainloop()
```
Como en todos los controles (*widgets*), el primer argumento se indica el control padre, en este caso la ventana **`root`**. Para especificar la justificación del texto, esto si debe alinearse a la izquierda, derecha o al centro, lo podemos indicar usando el parámetro **`justify`**, cuyos valores pueden ser respectivamente, `tk.LEFT` (*default*), `tk.RIGHT`, `tk.CENTER`.

Ejemplo:

```py
entry = ttk.Entry(root, justify=tk.RIGHT)
```

A través del parámetro **width** indicamos el ancho del control, pero no en **pixeles**, sino en caracteres. Por ejemplo, el siguiente código establece un ancho suficiente para visualizar una línea de 10 caracteres:

```py
entry = ttk.Entry(root, width=10)
```

La caja de texto puede iniciarse como deshabilitada (el usuario no podrá escribir en ella y aparecerá sombreada) usando el parámetro `state`:

```py
entry = ttk.Entry(root, state=tk.DISABLED)
```

Luego podemos habilitarlo nuevamente, restableciendo este parámetro vía método **`config`**:

```py
entry.config(state=tk.NORMAL)
```

Un estado intermedio es **`readonly`** (*solo lectura*), en el que el usuario visualiza el control normalmente pero no puede escribir en él: 

```python
entry = ttk.Entry(root, state="readonly")
```

Podemos hacer que la caja de texto muestre un glifo en particular cuando queremos ocultar texto a simple vista. Por ejemplo, si el control es empleado para escribir una contraseña:

```python
entry = ttk.Entry(root, show="*")
```


Una vez creado, las operaciones principales son las siguientes:

- inserción (texto)
- obtención (texto)
- selección (texto)
- eliminación (texto)



Para añadir un texto empleamos **`insert()`** que toma como primer argumento la posición y como segundo la cadena de texto:

```python
entry.insert(0, "Hola mundo!")
```

Este código es similar a si hicieramos lo siguiente:  

```python
entry.insert(0, "¡Hola,")
entry.insert(6, " mundo!")
```

Todas las operaciones en **Tk** que requieren una posición aceptan la constante `tk.END`, que representa el final del texto. En nuestro caso, `tk.END` es equivalente a `len(entry.get())`. Por esto, el siguiente código también consigue el mismo resultado que el ejemplo anterior:  

```python
entry.insert(0, "¡Hola,")
entry.insert(tk.END, " mundo!")
```

La eliminación de un texto o una parte de él se consigue a través del método **`delete()`**, pasándole como argumentos los índices de inicio y fin.

```python
# Elimina el texto completo.
entry.delete(0, tk.END)
```

De forma análoga opera el método **`select_range()`**, que selecciona el texto desde una posición hasta otra. Por ejemplo, el siguiente código selecciona la palabra "mundo".


```python
entry.insert(0, "¡Hola, mundo!")
# Seleccionar desde el carácter 7 hasta el 12.
entry.select_range(7, 12)
# Enviar el foco a la caja de texto para hacer efectiva
# la selección.
entry.focus()
```

Para obtener la posición del cursor en la caja de texto, llamamos al método **`index()`** con la constante `tk.INSERT`.  

```python
print(entry.index(tk.INSERT))
```

Y para establecer la posición:

```python
entry.insert(0, "¡Hola, mundo!")
# Ubica el cursor antes de la "m".
entry.icursor(7)
# Envía el foco.
entry.focus()
```

**Tk** no provee una función específica para retornar el texto seleccionado, pero haciendo uso del método `index()` junto con las constantes `tk.SEL_FIRST` y `tk.SEL_LAST` que retornan los índices de inicio y fin de la selección, podemos construirla manualmente:  

```python
entry.insert(0, "¡Hola, mundo!")
def get_selection():
    # Comprobar primero que haya una selección.
    if entry.select_present():
        # Obtener los índices del inicio y fin de la selección
        first = entry.index(tk.SEL_FIRST)
        last = entry.index(tk.SEL_LAST)
        print(entry.get()[first:last])
    else:
        print("No hay selección.")
button = ttk.Button(text="Obtener selección", command=get_selection)
```

Para obtener lo que un usuario ha escrito en la caja de texto, llamamos al método **`get()`**:  

```python
print(entry.get())
```

Por ejemplo, el siguinte código imprime en la consola el texto ingresado al presionar un botón

```python
entry.insert(0, "Hola mundo!")
entry.place(x=50, y=50)
button = ttk.Button(text="Obtener texto", command=lambda: print(entry.get()))
button.place(x=50, y=100)
```
