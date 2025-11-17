---
title: 'Função Embutida divmod() do Python - Folha de Dicas Python'
description: 'Recebe dois números (não complexos) como argumentos e retorna um par de números consistindo em seu quociente e resto ao usar a divisão inteira. Com tipos de operandos mistos, aplicam-se as regras para operadores aritméticos binários.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in divmod() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#divmod">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Recebe dois números (não complexos) como argumentos e retorna um par de números consistindo em seu quociente e resto ao usar a divisão inteira. Com tipos de operandos mistos, aplicam-se as regras para operadores aritméticos binários.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `divmod()` recebe dois números como argumentos e retorna uma tupla contendo o quociente e o resto de sua divisão inteira. É uma maneira conveniente de obter ambos os resultados em uma única chamada.

### Exemplos

```python
# Obter quociente e resto
quotient, remainder = divmod(10, 3)
print(quotient)
print(remainder)
print(divmod(2, 2))
print(divmod(10, 2))
print(divmod(7, 2))
```

Saída:

```plaintext
3
1
(1, 0)
(5, 0)
(3, 1)
```

## Links relevantes

- <router-link :to="'/cheatsheet/lists-and-tuples'">Listas e Tuplas</router-link>
- <router-link :to="'/blog/python-data-types'">Tipos de Dados Python</router-link>
- <router-link :to="'/builtin/int'">`int()`</router-link>
- <router-link :to="'/builtin/float'">`float()`</router-link>
- <router-link :to="'/builtin/tuple'">`tuple()`</router-link>
