---
title: 'Python Args e Kwargs - Folha de Dicas Python'
description: 'Args e kwargs podem parecer assustadores, mas a verdade é que não são difíceis de entender e têm o poder de conceder flexibilidade e legibilidade às suas funções.'
labUrl: 'https://labex.io/pt/labs/python-python-args-and-kwargs-633646?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Args e Kwargs do Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a href="https://docs.python.org/3/tutorial/index.html">Python args and kwargs Made Easy</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    <code>*args</code> e <code>**kwargs</code> podem parecer assustadores, mas a verdade é que não são tão difíceis de entender e têm o poder de conceder muita flexibilidade às suas funções.
  </base-disclaimer-content>
</base-disclaimer>

Leia o artigo <router-link to="/blog/python-easy-args-kwargs">Python \*args and \*\*kwargs Made Easy</router-link> para uma introdução mais aprofundada.

## Args e Kwargs

`*args` e `**kwargs` permitem que você passe um número indefinido de argumentos e palavras-chave ao chamar uma função.

```python
# Define uma função que aceita qualquer número de argumentos posicionais e de palavra-chave
def some_function(*args, **kwargs):
    pass

# Chama com qualquer número de argumentos posicionais
some_function(arg1, arg2, arg3)

# Chama com qualquer número de argumentos de palavra-chave
some_function(key1=arg1, key2=arg2, key3=arg3)

# Chama com argumentos posicionais e de palavra-chave
some_function(arg, key1=arg1)

# Ou chama sem argumentos
some_function()
```

<base-warning>
  <base-warning-title>
    Convenções do Python
  </base-warning-title>
  <base-warning-content>
    As palavras <code>*args</code> e <code>**kwargs</code> são convenções. Elas não são impostas pelo interpretador, mas são consideradas boas práticas pela comunidade Python.
  </base-warning-content>
</base-warning>

## Args

Você pode acessar os _argumentos_ através da variável `args`:

```python
# *args coleta argumentos posicionais em uma tupla
def some_function(*args):
    print(f'Argumentos passados: {args} como {type(args)}')

# Passa múltiplos argumentos - eles serão coletados na tupla args
some_function('arg1', 'arg2', 'arg3')
```

Saída:

```plaintext
Arguments passed: ('arg1', 'arg2', 'arg3') as <class 'tuple'>
```

## Kwargs

Palavras-chave são acessadas através da variável `kwargs`:

```python
# **kwargs coleta argumentos de palavra-chave em um dicionário
def some_function(**kwargs):
    print(f'palavras-chave: {kwargs} como {type(kwargs)}')

# Passa argumentos de palavra-chave - eles serão coletados no dicionário kwargs
some_function(key1='arg1', key2='arg2')
```

Saída:

```plaintext
keywords: {'key1': 'arg1', 'key2': 'arg2'} as <class 'dict'>
```

## Links relevantes

- <router-link to="/cheatsheet/functions">Funções</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Listas e Tuplas</router-link>
- <router-link to="/cheatsheet/dictionaries">Dicionários Python</router-link>
- <router-link to="/blog/python-easy-args-kwargs">Python \*args and \*\*kwargs Made Easy</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
