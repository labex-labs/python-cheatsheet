---
title: 'Función incorporada help() de Python - Hoja de trucos de Python'
description: 'Invoca el sistema de ayuda incorporado. (Esta función está diseñada para uso interactivo). Si no se proporciona ningún argumento, el sistema de ayuda interactivo se inicia en la consola del intérprete. Si el argumento es una cadena, se busca como el nombre de un módulo, función, clase, método, palabra clave o tema de documentación, y se imprime una página de ayuda en la consola.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada Python help()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#help">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Invoca el sistema de ayuda incorporado. (Esta función está destinada al uso interactivo.) Si no se proporciona ningún argumento, el sistema de ayuda interactivo comienza en la consola del intérprete. Si el argumento es una cadena, la cadena se busca como el nombre de un módulo, función, clase, método, palabra clave o tema de documentación, y se imprime una página de ayuda en la consola.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `help()` en Python es una utilidad incorporada que proporciona acceso al extenso sistema de ayuda de Python. Es particularmente útil para la exploración y el aprendizaje interactivo, ya que permite obtener documentación para módulos, funciones, clases y palabras clave directamente en el intérprete de Python. Cuando se llama sin argumentos, inicia una sesión de ayuda interactiva; de lo contrario, imprime la ayuda para el objeto dado.

## Ejemplos

```python
help(type)
```

Salida:

```plaintext
Help on class type in module builtins:

class type(object)
 |  type(object_or_name, bases, dict)
 |  type(object) -> the object's type
 |  type(name, bases, dict) -> a new type
 |
 |  Methods defined here:
 |
 |  __call__(self, /, *args, **kwargs)
 |      Call self as a function.
 |
 |  __delattr__(self, name, /)
 |      Implement delattr(self, name).
 |
 |  __dir__(self, /)
 |      Specialized __dir__ implementation for types.
 |
 |  __getattribute__(self, name, /)
 :
```

```python
help(str)
```

Salida:

```plaintext
Help on class str in module builtins:

class str(object)
 |  str(object='') -> str
 |  str(bytes_or_buffer[, encoding[, errors]]) -> str
 |
 |  Create a new string object from the given object. If encoding or
 |  errors is specified, then the object must expose a data buffer
 |  that will be decoded using the given encoding and error handler.
 |  Otherwise, returns the result of object.__str__() (if defined)
 |  or repr(object).
 |  encoding defaults to sys.getdefaultencoding().
 |  errors defaults to 'strict'.
 |
 |  Methods defined here:
 :
```

```python
help(help)
```

Salida:

```plaintext
Help on _Helper in module _sitebuiltins object:

class _Helper(builtins.object)
 |  Define the builtin 'help'.
 |
 |  This is a wrapper around pydoc.help that provides a helpful message
 |  when 'help' is typed at the Python interactive prompt.
 |
 |  Calling help() at the Python prompt starts an interactive help session.
 |  Calling help(thing) prints help for the python object 'thing'.
 |
 |  Methods defined here:
 |
 |  __call__(self, *args, **kwds)
 |      Call self as a function.
 :
```

## Enlaces relevantes

- <router-link :to="'/builtin/dir'">dir()</router-link>
- <router-link :to="'/builtin/globals'">globals()</router-link>
- <router-link :to="'/builtin/locals'">locals()</router-link>
- <router-link :to="'/builtin/type'">type()</router-link>
- <router-link :to="'/builtin/vars'">vars()</router-link>
- <router-link :to="'/cheatsheet/debugging'">Debugging</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP Basics</router-link>
