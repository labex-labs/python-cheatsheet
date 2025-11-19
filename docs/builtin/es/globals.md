---
title: 'Función incorporada globals() de Python - Hoja de trucos de Python'
description: 'Devuelve el diccionario que implementa el espacio de nombres del módulo actual. Para el código dentro de funciones, se establece cuando se define la función y permanece igual independientemente de dónde se llame.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada globals() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#globals">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Devuelve el diccionario que implementa el espacio de nombres del módulo actual. Para el código dentro de las funciones, esto se establece cuando se define la función y permanece igual independientemente de dónde se llame la función.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `globals()` en Python devuelve un diccionario que representa la tabla de símbolos global actual. Esto incluye todas las variables globales, funciones y otros objetos en el ámbito actual.

Puede ser útil para inspeccionar el espacio de nombres global o para acceder dinámicamente a variables globales por sus nombres de cadena.

### Ejemplos

```python
# Definir una variable global
global_var = "Soy global"

def my_function():
    # Acceder a variables globales usando globals()
    global_dict = globals()
    print(global_dict["global_var"])

    # Modificar una variable global
    global_dict["global_var"] = "Global modificado"

my_function()
print(global_var)
```

```output
I am global
Modified global
```

También puede usar `globals()` para crear nuevas variables globales desde dentro de una función:

```python
def create_global():
    globals()["new_global"] = "Esto fue creado dinámicamente"

create_global()
print(new_global)
```

```output
This was created dynamically
```

## Enlaces relevantes

- <router-link :to="'/builtin/locals'">`locals()`</router-link>
- <router-link :to="'/builtin/dir'">`dir()`</router-link>
- <router-link :to="'/builtin/exec'">`exec()`</router-link>
- <router-link :to="'/builtin/eval'">`eval()`</router-link>
- <router-link :to="'/cheatsheet/functions'">Funciones</router-link>
