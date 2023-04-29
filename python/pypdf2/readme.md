<h2 align="center">PyPDF2</h2>


### Instalación

Instalar con pip:

```bash
pip install PyPDF2
```

### Acceder a páginas y extraer contenido

Acceder y extraer el contenido de la primera página:

```python
import PyPDF2 ## Versión anterior a la 3

FILE_PATH = "path/file.pdf"

with open(FILE_PATH) as f:
    reader = PyPDF2.PdfFileReader(f)
    page = reader.getPage(0)
    print(page.extractText())
```

Versión superior a la 3 de PyPDF2:

```py
import PyPDF2

FILE_PATH = "path/file.pdf"

with open(FILE_PATH, "rb") as f:
    reader = PyPDF2.PdfReader(f)
    page = reader.pages[0]
    print(page.extract_text())
```


Acceder a todas las páginas

```py
import PyPDF2

FILE_PATH = "path/file.pdf"

with open(FILE_PATH, "rb") as f:
	reader = PyPDF2.PdfFileReader(f)
	for page in reader.pages:
		page.extractText()
```

Versión superior a la 3 de PyPDF2:

```py
import PyPDF2

FILE_PATH = "path/file.pdf"

with open(FILE_PATH, "rb") as f:
	reader = PyPDF2.PdfReader(f)
	for page in reader.pages:
		page.extract_text()
```

>La propiedad **pages** es una lista de clase **PageObject**. Por lo tanto podemos utilizar un bucle for para iterar por cada página.


