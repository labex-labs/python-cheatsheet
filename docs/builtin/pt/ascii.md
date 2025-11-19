---
title: 'Função Embutida ascii() do Python - Folha de Dicas Python'
description: "Tal como repr(), retorna uma string contendo uma representação imprimível de um objeto, mas escapa os caracteres não-ASCII na string retornada por repr() usando escapes \\x, \\u ou \\U."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in ascii() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#ascii">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Tal como <code>repr()</code>, retorna uma string contendo uma representação imprimível de um objeto, mas escapa os caracteres não-ASCII na string retornada por <code>repr()</code> usando escapes <code>\x</code>, <code>\u</code>, ou <code>\U</code>.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `ascii()` em Python é uma função built-in que retorna uma string contendo uma representação imprimível de um objeto, semelhante a `repr()`. No entanto, `ascii()` escapa quaisquer caracteres não-ASCII com sequências de escape `\x`, `\u`, ou `\U`. Isso é útil para garantir que uma string seja segura para ser usada em um ambiente que só aceita ASCII.

## Exemplos

```python
# Para um caractere ASCII, é o mesmo que repr()
ascii('A')

# Para um caractere não-ASCII, ele é escapado
ascii('ë')

# Para comparação, repr() não o escaparia
repr('ë')

# Funciona em iteráveis também
ascii(['A', 'ë'])
```

```output
'A'
'\\xeb'
'ë'
['A', '\\xeb']
```

## Links Relevantes

- <router-link to="/cheatsheet/manipulating-strings">Cheatsheet: Manipulação de Strings</router-link>
- <router-link to="/blog/python-data-types">Blog: Tipos de Dados Python</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
- <router-link to="/builtin/chr">chr()</router-link>
- <router-link to="/builtin/ord">ord()</router-link>
