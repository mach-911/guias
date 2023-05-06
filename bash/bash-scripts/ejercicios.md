
Ejemplo de como leer la entrada estándar y almacenarlo en una variable y mostrar su contenido:

```bash
echo "Hola, ¿Con quién tengo el gusto?"
read varname
echo "Mucho gusto $varname"
```

Ejemplo de como leer variables por la entrada estándar y simular el login: 

```bash
read -p "Usuario: " uservar
read -sp "Password: " passvar
echo
echo "Gracias $uservar tu acceso fue correcto"
```

Ejemplo de como almacenar cada valor que ingrese el usuario por la entrada estándar en diferentes variables

```bash
echo "¿Cuáles son tus autos favoritos?"
read car1 car2 car3
echo "Tu primer auto favorito es: $car1"
echo "Tu segundo auto favorito es: $car2"
echo "Tu tercero auto favorito es: $car3"
```

>Sin embargo, si al ejecutar el script ingresamos más de 3 valores, todos se añaden a la última variable

Otro ejemplo de como capturar varios valores y almacenarlos en una variable como una especie de lista, donde podremos acceder a cada valor mediante su indice. Ejemplo:

```bash
echo "Ingresa nombres: "
read -a NOMBRES
echo -e "Los nombres inscritos son:\n${NOMBRES[0]}, ${NOMBRES[1]}"
```


## Operaciones matemáticas

### Usando expansión aritmética $((...))

Las operaciones aritmética en [**shells POSIX**](https://es.wikipedia.org/wiki/POSIX) se realiza con paréntesis dobles. Ejemplo:

```bash
#!/bin/bash
read -p "Ingresa el primer valor: " varA
read -p "Ingresa el segundo valor: " varB
echo "El resultado de la suma es: $(($varA + $varB))"
echo "El resultado de la multiplicación es: $(($varA * $varB))"
echo "El resultado de la división es: $(($varA / $varB))"
echo "El resultado del resto de la división es: $(($varA % $varB))"
echo "El resultado de la diferencia es: $(($varA - $varB))"
echo "El resultado de la potencia es: $(($varA ** $varB))"
```

### Usando expr

Sin embargo, otra es forma es usando el comando **`expr`** que nos sirve para resolver expresiones matemáticas. Por ejemplo si queremos que nos aparezca el resultado de la siguiente expresión `1 + 9` ponemos lo siguiente en la terminal.

```bash
expr 1 + 9 
```

#### Consideraciones

- **`$((...))`** se denomina **expansión aritmética** y es típico en bash y kash. Sin embargo este método sólo nos permite operar con números entero, pero no con punto flotante.
- **`((...))`** se denomina **evaluación aritmética** y puede utilizarse como parte de un **`if ((...)); then`** o **`while ((...)); do`**


Más ejemplos:

```bash
#!/bin/bash
read -p "Ingresa el primer valor: " varA
read -p "Ingresa el segundo valor: " varB
echo "El resultado de la suma es:" `expr $varA + $varB`
echo "El resultado de la multiplicación es:" `expr $varA \* $varB`
echo "El resultado de la división es:" `expr $varA / $varB`
echo "El resultado del resto de la división es:" `expr $varA % $varB`
echo "El resultado de la diferencia es:" `expr $varA - $varB`
```

> Es importante que cada valor y operador estén separados por un espacio. (la potencia con este método no es posible)



### Usando let


Sigamos viendo comandos para resolver operaciones matemáticas, otro que es el preferido es el comando **`let`** que ofrece una sintaxis menos restrictiva, podremos almacenar en una variable el resultado de diferentes operaciones aritméticas y luego mostrarla. Por ejemplo:

```bash
#!/bin/bash
read -p "Ingresa el primer valor: " varA
read -p "Ingresa el segundo valor: " varB

# Operaciones con el comando let:
let suma=$varA+$varB
echo "El resultado de la suma es: $suma"

let multiplicacion=$varA*$varB
echo "El resultado de la multiplicación es: $multiplicacion"

# Si la division es algo dividido por 0 dará error y lo mostrará por STDERR.
let division=$varA/$varB 
echo "El resultado de la división es: $division"

let resto=$varA%$varB
echo "El resultado del resto de la división es: $resto"

let potencia=$varA**$varB
echo "El resultado de la potencia es: $potencia"
```

