[comment]: <> (Author: Marco Contreras Herrera)
[comment]: <> (Email: enidev911@gmail.com)


## Configurar sistema de compilación - (build)

[![Sublime Text](https://badges.aleen42.com/src/sublime_text.svg)](../../index.md)

<a name="top"></a>

### CONTENIDO

- [Opciones](#opciones-comunes)
- [Variables](#variables)
- [Ejemplos](#ejemplos)
    + [Python con CMD](#cmd-python)
    + [Python con Terminal-Mate](#mate-python)

Los sistemas de compilación ejecutan programas externos para procesar algunos conjuntos de archivos e imprimen su salida en el panel de salida. Al final llaman a la función [**`subprocess.Popen`**](https://docs.python.org/3/library/subprocess.html#subprocess.Popen) de Python :snake:.  

Esencialmente, los sistemas de compilación son datos de configuración y el programa externo a ejecutar. Los ejemplos de usos comunes para los sistemas de compilación son los mismo: **compilar**, **transpilar**, aplicar linting y ejecutar pruebas.  

Los sistemas de compilación se especifican a través de archivos [JSON](https://es.wikipedia.org/wiki/JSON) y se guardan con la extensión **`.sublime-build`**.


<a name="opciones-comunes"></a>
## Opciones

Todos los sistemas de compilación pueden usar las siguientes **claves** de nivel superior en un archivo nuevo con extensión `.sublime-build`:

- **cmd:** `array`  
Matriz que contiene el comando a ejecutar y sus argumentos deseados. Si no especifica una ruta absoluta, el programa externo **debe estar configurado como variable de entorno en el PATH del usuario o en la de su sistema**.

- **file_regex:** `string` 
*Opcional*. Expresión regular (estilo Perl) para capturar la salida de error de cmd. 

- **selector:** `string`  
*Opcional*. Se utiliza cuando tenemos **tools | Build System | Automatic** configurado en *true*. Sublime usa este selector de alcance para encontrar automáticamente build apropiado para la vista activa. (**Ej:** `"selector": "source.python"`)  

- **variants:** `array of objects`  
Sistemas de compilación subsidiarios que heredán las opciones del sistema de compilación de nivel superior. Cada variante debe especificar una clave `"name"` y puede anular o agregar opciones del sistema de compilación de nivel superior.  
**Ej:**
```json
[
    {
        "name": "Debug Symbols",
        "cmd": ["my_command", "-D", "$file"]
    }
]
```


- **working_dir**  
*Opcional*. Directorio para cambiar el directorio actual antes de ejecutar el comando de cmd. El directorio actual original se restaura después.  

- **enconding**  
*Opcional*. Codificación de salida de cmd. Debe ser una codificación Python válida. El valor predeterminado es **UTF-8**.  

- **target**  
*Opcional*. Comando que SublimeText va ejecutar. El valor predeterminado es **`exec(Packages/Default/exec.py`**

- **env**:  
*Opcional*. Diccionario de variables de entorno que se fusionarán con el proceso actual que se pasará a cmd.  

- **shell**:  
*Opcional*. Si el valor es ***True***, cmd se ejecutará a través del shell (cmd.exe, bash).

- **path**:  
*Opcional*. Esta cadena reemplazará el proceso actual de PATH antes de llamar a cmd. El valor PATH anterior se restaurará después de eso. Es útil agregar directorios a los PATH que no tiene o no desea en su PATH de entorno habitual en todas partes.

[![top](https://img.shields.io/badge/regresar%20a%20contenido-%E2%86%A9-%232B344C?style=for-the-badge)](#top)

---

<a name="variables"></a>
### Variables

Las siguientes variables se expandirán dentro de cualquier cadena especificada en las opciones **cmd**, **shell_cmd** o **working_dir**

Si es necesario especificar un literal `$` en una de estas opciones, debe escaparse con un `\`. Dado que **JSON** también usa barras invertidas para escapar, `$` deberá escribirse como `\\$`.  

Tenga en cuenta que esta situación ocurrirá para cualquier `<span class="key">"target"</span>`.



|Variable|Significado|Ejemplo|
|--------|-----------|-----|
|**$platform**|La plataforma en la que se ejecuta Sublime text.|`"windows"`, `"osx"`, `"linux"`|
|**$file**|La ruta completa al archivo actual.|C:\\Users\\user\\archivo.txt|
|**$file_path**|El directorio del archivo actual.|C:\\Users\\user|
|**$file_name**|La parte del nombre del archivo actual.|archivo.txt|
|**$file_extension**|La porción de extensión del archivo actual.|txt|
|**$file_base_name**|La parte de solo nombre del archivo actual|archivo|
|**$packages**|La ruta completa a la carpeta **Packages**|C:\\Users\\user\\Sublime Text\\Packages|
|**$project**|La ruta completa al archivo del proyecto actual.|C:\\Users\\user\\Project|
|**$project_path**La ruta completa que contiene el archivo del proyecto actual.|C:\\Users\\user\\Project\\archivo|
|**$project_extension**|La porción de extensión del archivo del proyecto actual.||
|**$project_base_name**|La parte de solo nombre del archivo de proyecto actual.||

[![top](https://img.shields.io/badge/regresar%20a%20contenido-%E2%86%A9-%232B344C?style=for-the-badge)](#top)
---

### <a name="ejemplos"></a>Ejemplos


Para los siguientes ejemplos debemos realizar, los siguientes pasos:

- Abrimos un nuevo archivo para configurar un build:
    + **Tools-\>Build System-\>New Build System**
- Guardar con el nombre de : **Mi_build.sublime-build**
- Copiar el siguiente código, remplazando los valores por los que tengas en tu sistema.


<a name="servor"></a>
<h3>Servor</h3>

```json
{
    "encoding":"utf-8",
    "shell_cmd": "servor $file_dir --browse --reload",
    "selector": "source.html",
    "working_dir": "$file_dir"
}
```

<a name="cmd-python"></a>**Configurar un build de Python para CMD**

*Python3_CMD.sublime-build*
```json
{
    "encoding":"utf-8",
    "shell_cmd": "start cmd /C \"({path_python}/python.exe \"$file\" || set /p = Ejecución fallida. Presiona Enter para salir...) && set /p = Ejecución exitosa. Presiona Enter para salir...\"",
    "selector": "source.python",
    "working_dir": "$file_dir"
}
```
Otra forma es declarando un path:  

```json
{
    "path":"C:\\Users\\Marco\\AppData\\Local\\Programs\\Python\\Python310",
    "encoding": "utf-8",
    "shell_cmd":  "start cmd /C \"(python.exe \"$file\" || set /p = Ejecución fallida. Presiona Enter para salir...) && set /p = Ejecución exitosa. Presiona Enter para salir...\"",
    "selector":"source.python",
    "file_regex": "^(...?):([0-9]):?([0-9]*)",
}
```

---

<a name="mate-python"></a>**Configurar un build para Python en ubuntu mate (terminal-mate)**


*Python3_terminal_mate.sublime-build*
```json
{
    "cmd": ["mate-terminal -e 'bash -c \"python3 -u $file;echo;echo Press ENTER to exit; read line\"'"],
    "shell": true
}
```

<a name="java"></a>**Configurar un build para Java**


```json
{
    "path": "C:\\Program Files\\Java\\jdk1.8.0_202\\bin",
    "encoding": "utf-8",
    "cmd": ["javac", "$file_name","&&","java", "$file_base_name"],
    "file_regex": "^(...?):([0-9]):?([0-9]*)",
    "selector": "source.java",
    "shell": true
}
```

[![top](https://img.shields.io/badge/regresar%20a%20contenido-%E2%86%A9-%232B344C?style=for-the-badge)](#top)