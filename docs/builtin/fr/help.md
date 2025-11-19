---
title: 'Fonction intégrée Python help() - Aide-mémoire Python'
description: "Invoque le système d'aide intégré. (Cette fonction est destinée à une utilisation interactive.) Si aucun argument n'est fourni, le système d'aide interactif démarre sur la console de l'interpréteur. Si l'argument est une chaîne de caractères, celle-ci est recherchée comme nom de module, fonction, classe, méthode, mot-clé ou sujet de documentation, et une page d'aide est affichée sur la console."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python help()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#help">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Invoque le système d'aide intégré. (Cette fonction est destinée à une utilisation interactive.) Si aucun argument n'est fourni, le système d'aide interactif démarre sur la console de l'interpréteur. Si l'argument est une chaîne de caractères, cette chaîne est recherchée comme nom d'un module, d'une fonction, d'une classe, d'une méthode, d'un mot-clé ou d'un sujet de documentation, et une page d'aide est imprimée sur la console.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `help()` en Python est un utilitaire intégré qui donne accès au vaste système d'aide de Python. Elle est particulièrement utile pour l'exploration et l'apprentissage interactifs, car elle permet d'obtenir la documentation des modules, fonctions, classes et mots-clés directement dans l'interpréteur Python. Lorsqu'elle est appelée sans argument, elle démarre une session d'aide interactive ; sinon, elle affiche l'aide pour l'objet donné.

## Examples

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

## Relevant links

- <router-link :to="'/builtin/dir'">dir()</router-link>
- <router-link :to="'/builtin/globals'">globals()</router-link>
- <router-link :to="'/builtin/locals'">locals()</router-link>
- <router-link :to="'/builtin/type'">type()</router-link>
- <router-link :to="'/builtin/vars'">vars()</router-link>
- <router-link :to="'/cheatsheet/debugging'">Debugging</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP Basics</router-link>
