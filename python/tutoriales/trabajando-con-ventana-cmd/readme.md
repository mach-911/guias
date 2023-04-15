## Trabajando con ventana de consola


### Limpiar pantalla:

```py
import os os.system("cls")
os.system("cls") 
```

### Generar una pausa:


```py
import time

time.sleep(5)      # Espera por 5 segundo
time.sleep(.300)   # Espera por 300 milisegundo
```

### Desplegar en colores

En el siguiente ejemplo, observe que en pantalla se muestran las palabra **TEST1**, **TEST2** y **TEST3** con distintos colores.  

Colores opacos y brillos:  (algunas versiones antiguas como en Windows7, no soportan el estilo con brillo)


```py
from colorama import init, Fore, Back, Style 
init()  

print(Back.RED  + Fore.WHITE,  end="") 
print("PRUEBA 1") print(Back.BLUE + Fore.YELLOW, end="") 
print("PRUEBA 2") print(Back.CYAN + Fore.BLACK,  end="") 
print("PRUEBA 3") 
print() 
print(Back.RED  + Fore.WHITE  + Style.BRIGHT, end="") 
print("PRUEBA 1") 
print(Back.BLUE + Fore.YELLOW + Style.BRIGHT, end="") 
print("PRUEBA 2") 
print(Back.CYAN + Fore.BLACK  + Style.BRIGHT, end="") 
print("PRUEBA 3") 
input()
```

Existen dos formas de aplicar los colores: Persistentes y Momentáneamente.

- **Persistente**: para que el color persista, de tal forma que todo lo escrito en pantalla sea con el color especificado, hasta que se vuelva a cambiar por otro, la función **`init()`** no se especifican el parámetro de inicialización (se omite) o sea es equivalente a **autoreset=False**. Por ejemplo: `init(autoreset=False)`

- **Momentáneamente**: para que  el color se aplique solamente a lo desplegado con la función **`print`**, la función **init()** debe llevar el parámetro **`autoset=True`**
