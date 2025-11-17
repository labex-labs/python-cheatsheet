---
title: 'Función Incorporada Python isinstance() - Hoja de Trucos de Python'
description: 'Devuelve Verdadero si el argumento objeto es una instancia del argumento classinfo, o de una subclase (directa, indirecta o virtual) de este. Si objeto no es una instancia del tipo dado, la función siempre devuelve Falso. Si classinfo es una tupla de objetos de tipo (o recursivamente, otras tuplas similares) o un Tipo Unión de múltiples tipos, devuelve Verdadero si objeto es una instancia de cualquiera de los tipos. Si classinfo no es un tipo o una tupla de tipos y tales tuplas, se genera una excepción TypeError.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada Python isinstance()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#isinstance">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Devuelve True si el argumento object es una instancia del argumento classinfo, o de una subclase (directa, indirecta o virtual) del mismo. Si object no es un objeto del tipo dado, la función siempre devuelve False. Si classinfo es una tupla de objetos de tipo (o recursivamente, otras tuplas de este tipo) o un Tipo Union de múltiples tipos, devuelve True si object es una instancia de cualquiera de los tipos. Si classinfo no es un tipo o una tupla de tipos y tales tuplas, se genera una excepción TypeError.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `isinstance()` comprueba si un objeto es una instancia de una clase en particular o una subclase de la misma. Devuelve `True` si el objeto es del tipo especificado y `False` en caso contrario.

También puedes comprobar contra una tupla de tipos.

### Ejemplos

**Comprobación del tipo de un objeto:**

```python
my_list = [1, 2, 3]
print(isinstance(my_list, list))
print(isinstance(my_list, tuple))
```

Salida:

```plaintext
True
False
```

**Comprobación contra múltiples tipos:**

```python
print(isinstance("hello", (int, str, list)))
```

Salida:

```plaintext
True
```

```python
isinstance(1, int)
isinstance(1, str)
```

Salida:

```plaintext
True
False
```

## Enlaces relevantes

- <router-link :to="'/builtin/issubclass'">`issubclass()`</router-link>
- <router-link :to="'/builtin/type'">`type()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">Conceptos básicos de OOP</router-link>
- <router-link :to="'/blog/python-data-types'">Tipos de datos de Python</router-link>
- <router-link :to="'/builtin/callable'">`callable()`</router-link>
