---
title: 'Función incorporada vars() de Python - Hoja de trucos de Python'
description: 'Devuelve el atributo __dict__ de un módulo, clase, instancia o cualquier otro objeto con un atributo __dict__.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada vars() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#vars">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Devuelve el atributo __dict__ de un módulo, clase, instancia o cualquier otro objeto que tenga un atributo __dict__.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `vars()` devuelve el atributo `__dict__` de un objeto. Este diccionario contiene los atributos escribibles del objeto. Es una forma conveniente de ver todos los atributos de un objeto a la vez.

Si se llama sin argumentos, `vars()` actúa como `locals()`, devolviendo un diccionario de la tabla de símbolos local.

### Ejemplos

**Obtener los atributos de un objeto:**

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

my_person = Person("Dwight", 35)
print(vars(my_person))
```

Salida:

```plaintext
{'name': 'Dwight', 'age': 35}
```

**Usar `vars()` sin argumentos:**

```python
def my_function():
    x = 10
    print(vars())

my_function()
```

Salida:

```plaintext
{'x': 10}
```

## Enlaces relevantes

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: Conceptos básicos de OOP</router-link>
- <router-link to="/cheatsheet/debugging">Cheatsheet: Depuración</router-link>
- <router-link to="/cheatsheet/dictionaries">Cheatsheet: Diccionarios</router-link>
- <router-link to="/builtin/dir">dir()</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/globals">globals()</router-link>
- <router-link to="/builtin/locals">locals()</router-link>
