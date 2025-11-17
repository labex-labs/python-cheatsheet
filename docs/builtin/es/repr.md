---
title: 'Función incorporada repr() de Python - Hoja de trucos de Python'
description: 'Devuelve una cadena que contiene una representación imprimible de un objeto. Para muchos tipos, esta función intenta devolver una cadena que produciría un objeto con el mismo valor cuando se pasa a eval(); de lo contrario, la representación es una cadena encerrada entre corchetes angulares que contiene el nombre del tipo del objeto junto con información adicional que a menudo incluye el nombre y la dirección del objeto. Una clase puede controlar lo que devuelve esta función para sus instancias definiendo un método __repr__().'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada Python repr()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#repr">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Devuelve una cadena que contiene una representación imprimible de un objeto. Para muchos tipos, esta función intenta devolver una cadena que produciría un objeto con el mismo valor cuando se pasa a eval(); de lo contrario, la representación es una cadena encerrada entre corchetes angulares que contiene el nombre del tipo del objeto junto con información adicional que a menudo incluye el nombre y la dirección del objeto. Una clase puede controlar lo que devuelve esta función para sus instancias definiendo un método __repr__().
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `repr()` devuelve una cadena que contiene una representación imprimible de un objeto. El objetivo de `repr()` es no ser ambiguo. Para muchos tipos, `repr()` devuelve una cadena que puede ser ejecutada por <router-link to="/builtin/eval">eval()</router-link> para crear un objeto idéntico.

Esto es diferente de <router-link to="/builtin/str">str()</router-link>, que tiene la intención de ser legible por humanos.

### Ejemplo

```python
import datetime

# Para una cadena, repr() añade comillas
print(repr("hello"))

# Para un objeto datetime, no es ambiguo
now = datetime.datetime.now()
print(repr(now))

# Puedes definir __repr__ para tus propias clases
class Person:
    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return f"Person(name='{self.name}')"

p = Person("John")
print(repr(p))
```

Salida:

```plaintext
'hello'
datetime.datetime(2023, 10, 27, 10, 0, 0, 123456)
Person(name='John')
```

## Enlaces relevantes

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: Fundamentos de OOP</router-link>
- <router-link to="/cheatsheet/debugging">Cheatsheet: Depuración</router-link>
- <router-link to="/cheatsheet/string-formatting">Cheatsheet: Formato de Cadenas</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/ascii">ascii()</router-link>
- <router-link to="/builtin/eval">eval()</router-link>
- <router-link to="/builtin/format">format()</router-link>
