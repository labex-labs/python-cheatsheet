---
title: 'Função Embutida help() do Python - Folha de Dicas Python'
description: 'Invoca o sistema de ajuda embutido. (Esta função destina-se a uso interativo.) Se nenhum argumento for fornecido, o sistema de ajuda interativo inicia no console do interpretador. Se o argumento for uma string, essa string é procurada como o nome de um módulo, função, classe, método, palavra-chave ou tópico de documentação, e uma página de ajuda é impressa no console.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in Python help()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#help">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Invoca o sistema de ajuda built-in. (Esta função destina-se a uso interativo.) Se nenhum argumento for fornecido, o sistema de ajuda interativo inicia no console do interpretador. Se o argumento for uma string, a string é procurada como o nome de um módulo, função, classe, método, palavra-chave ou tópico de documentação, e uma página de ajuda é impressa no console.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `help()` em Python é uma utilidade built-in que fornece acesso ao extenso sistema de ajuda do Python. É particularmente útil para exploração e aprendizado interativo, pois permite obter documentação para módulos, funções, classes e palavras-chave diretamente no interpretador Python. Quando chamada sem um argumento, inicia uma sessão de ajuda interativa; caso contrário, imprime a ajuda para o objeto fornecido.

## Exemplos

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

## Links Relevantes

- <router-link :to="'/builtin/dir'">dir()</router-link>
- <router-link :to="'/builtin/globals'">globals()</router-link>
- <router-link :to="'/builtin/locals'">locals()</router-link>
- <router-link :to="'/builtin/type'">type()</router-link>
- <router-link :to="'/builtin/vars'">vars()</router-link>
- <router-link :to="'/cheatsheet/debugging'">Debugging</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP Basics</router-link>
