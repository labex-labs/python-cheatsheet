---
title: 'Função Embutida Python int() - Folha de Dicas Python'
description: 'Retorna um objeto inteiro construído a partir de um número ou string x, ou retorna 0 se nenhum argumento for fornecido.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in int() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#int">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retorna um objeto inteiro construído a partir de um número ou string x, ou retorna 0 se nenhum argumento for fornecido.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `int()` em Python é uma função built-in que permite converter um valor em um inteiro. Ela pode receber uma string ou um número como argumento e retornará o equivalente inteiro. Isso é particularmente útil quando você precisa realizar operações matemáticas que exigem números inteiros ou quando precisa garantir que um valor seja do tipo inteiro.

## Exemplos

```python
# transformar uma string em um inteiro
from_integer = int('29')
print(from_integer)
print(type(from_integer))
```

Saída:

```plaintext
29
<class 'int'>
```

```python
# transformar um float em inteiro
from_float = int(-3.14)
print(from_float)
print(type(from_float))
```

Saída:

```plaintext
-3
<class 'int'>
```

```python
# retorna 0 se nenhum argumento for fornecido
int()
```

Saída:

```plaintext
0
```

## Links relevantes

- <router-link :to="'/builtin/float'">float()</router-link>
- <router-link :to="'/builtin/str'">str()</router-link>
- <router-link :to="'/builtin/hex'">hex()</router-link>
- <router-link :to="'/builtin/oct'">oct()</router-link>
- <router-link :to="'/builtin/bin'">bin()</router-link>
- <router-link :to="'/blog/python-data-types'">Tipos de Dados Python</router-link>
- <router-link :to="'/builtin/bool'">bool()</router-link>
- <router-link :to="'/builtin/complex'">complex()</router-link>
