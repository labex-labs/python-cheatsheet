---
title: 'Função Embutida Python type() - Guia Rápido Python'
description: 'Com um argumento, retorna o tipo de um objeto. O valor de retorno é um objeto de tipo e geralmente o mesmo objeto retornado por object.__class__.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in type() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#type">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Com um argumento, retorna o tipo de um objeto. O valor de retorno é um objeto de tipo e geralmente o mesmo objeto retornado por object.__class__.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `type()` em Python é uma função built-in que retorna o tipo de um objeto. É uma ferramenta fundamental para entender os tipos de dados com os quais você está trabalhando em Python.

## Exemplos

```python
type('span')
type(99)
type(1.1)
type([1, 2])
type((1, 2))
type({1, 2})
type({'a': 1, 'b': 2})
```

Saída:

```plaintext
<class 'str'>
<class 'int'>
<class 'float'>
<class 'list'>
<class 'tuple'>
<class 'set'>
<class 'dict'>
```

## Links relevantes

- <router-link to="/blog/python-data-types/">Tipos de Dados Python</router-link>
- <router-link to="/builtin/isinstance/">isinstance()</router-link>
- <router-link to="/builtin/issubclass/">issubclass()</router-link>
- <router-link to="/builtin/str/">str()</router-link>
- <router-link to="/builtin/int/">int()</router-link>
- <router-link to="/builtin/float/">float()</router-link>
- <router-link to="/builtin/list/">list()</router-link>
- <router-link to="/builtin/tuple/">tuple()</router-link>
- <router-link to="/builtin/dict/">dict()</router-link>
- <router-link to="/builtin/set/">set()</router-link>
