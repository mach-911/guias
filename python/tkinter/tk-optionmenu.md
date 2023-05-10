## OptionMenu

Ej:

```python
import tkinter as tk

optionList = [
	"Aries",
	"Taurus",
	"Geminis",
	"Cancer"
]

app = tk.Tk()
app.geometry("300x500")

variable = tk.StringVar(app)
variable.set(optionList[0])

opt = tk.OptionMenu(app, variable, optionList)
```