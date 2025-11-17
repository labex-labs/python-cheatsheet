---
title: 'Função Embutida str() do Python - Folha de Dicas Python'
description: 'Retorna uma versão em string do objeto. Se o objeto não for fornecido, retorna uma string vazia. Caso contrário, o comportamento de str() depende se a codificação ou erros são fornecidos.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in Python str()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#func-str">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Retorna uma versão em string do objeto. Se nenhum objeto for fornecido, retorna a string vazia. Caso contrário, o comportamento de str() depende se codificação ou erros são fornecidos.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `str()` em Python é uma função built-in que retorna uma versão em string de um objeto. Se nenhum objeto for fornecido, ela retorna uma string vazia. É uma função versátil para converter outros tipos de dados em strings.

## Exemplos

```python
# transformar um inteiro em uma string
from_integer = str(29)
print(from_integer)
print(type(from_integer))
```

Saída:

```plaintext
29
<class 'str'>
```

```python
# transformar um float em string
from_float = str(-3.14)
print(from_float)
print(type(from_float))
```

Saída:

```plaintext
-3.14
<class 'str'>
```

```python
# retornar uma string vazia
str()
```

Saída:

```plaintext
''
```

## Links relevantes

- <router-link to="/cheatsheet/manipulating-strings">Cheatsheet: Manipulação de Strings</router-link>
- <router-link to="/cheatsheet/string-formatting">Cheatsheet: Formatação de Strings</router-link>
- <router-link to="/blog/python-data-types">Blog: Tipos de Dados Python</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
- <router-link to="/builtin/ascii">ascii()</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/set">set()</router-link>
