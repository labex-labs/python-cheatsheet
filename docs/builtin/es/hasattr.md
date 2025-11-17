---
title: 'Función incorporada hasattr() de Python - Hoja de trucos de Python'
description: 'Los argumentos son un objeto y una cadena. El resultado es Verdadero si la cadena es el nombre de uno de los atributos del objeto, Falso si no lo es. (Esto se implementa llamando a getattr(objeto, nombre) y comprobando si lanza un AttributeError o no).'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada hasattr() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#hasattr">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Los argumentos son un objeto y una cadena. El resultado es `True` si la cadena es el nombre de uno de los atributos del objeto, `False` si no lo es. (Esto se implementa llamando a <router-link to="/builtin/getattr">getattr(object, name)</router-link> y viendo si lanza un AttributeError o no).
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `hasattr()` comprueba si un objeto tiene un atributo dado. Toma el objeto y el nombre del atributo (como una cadena) como argumentos y devuelve `True` si el atributo existe, y `False` en caso contrario.

### Ejemplo

```python
class Person:
    name = "John"
    age = 30

p = Person()

print(hasattr(p, 'name'))
print(hasattr(p, 'age'))
print(hasattr(p, 'email'))
```

Salida:

```plaintext
True
True
False
```

## Enlaces relevantes

- <router-link :to="'/builtin/getattr'">`getattr()`</router-link>
- <router-link :to="'/builtin/setattr'">`setattr()`</router-link>
- <router-link :to="'/builtin/delattr'">`delattr()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">Conceptos básicos de OOP</router-link>
- <router-link :to="'/builtin/dir'">`dir()`</router-link>
