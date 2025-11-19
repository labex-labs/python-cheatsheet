---
title: 'Python help()-Funktion – Python Spickzettel'
description: 'Ruft das integrierte Hilfesystem auf. (Diese Funktion ist für die interaktive Nutzung gedacht.) Wenn kein Argument angegeben wird, startet das interaktive Hilfesystem auf der Interpreterkonsole. Wenn das Argument ein String ist, wird dieser String als Name eines Moduls, einer Funktion, Klasse, Methode, eines Schlüsselworts oder eines Dokumentationsthemas nachgeschlagen und eine Hilfeseite auf der Konsole ausgegeben.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python eingebaute Funktion help()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#help">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Ruft das eingebaute Hilfesystem auf. (Diese Funktion ist für die interaktive Nutzung vorgesehen.) Wenn kein Argument übergeben wird, startet das interaktive Hilfesystem auf der Interpreterkonsole. Wenn das Argument ein String ist, wird der String als Name eines Moduls, einer Funktion, einer Klasse, einer Methode, eines Schlüsselworts oder eines Dokumentationsthemas nachgeschlagen und eine Hilfeseite auf der Konsole ausgegeben.
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die Funktion `help()` in Python ist ein eingebautes Dienstprogramm, das Zugriff auf Pythons umfangreiches Hilfesystem bietet. Sie ist besonders nützlich für die interaktive Erkundung und das Lernen, da sie es ermöglicht, Dokumentationen für Module, Funktionen, Klassen und Schlüsselwörter direkt im Python-Interpreter abzurufen. Wenn sie ohne Argument aufgerufen wird, startet sie eine interaktive Hilfesitzung; andernfalls wird die Hilfe für das angegebene Objekt ausgegeben.

## Beispiele

```python
help(type)
```

```output
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

```output
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

```output
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

## Relevante Links

- <router-link :to="'/builtin/dir'">dir()</router-link>
- <router-link :to="'/builtin/globals'">globals()</router-link>
- <router-link :to="'/builtin/locals'">locals()</router-link>
- <router-link :to="'/builtin/type'">type()</router-link>
- <router-link :to="'/builtin/vars'">vars()</router-link>
- <router-link :to="'/cheatsheet/debugging'">Debugging</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP Basics</router-link>
