---
title: 'Função Embutida filter() em Python - Guia Rápido Python'
description: 'Constrói um iterador a partir dos elementos do iterável para os quais a função retorna verdadeiro. O iterável pode ser uma sequência, um contêiner que suporta iteração ou um iterador. Se a função for None, assume-se a função identidade, ou seja, todos os elementos falsos do iterável são removidos.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in filter() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#filter">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Constrói um <router-link to="/builtin/iter">iterador</router-link> a partir daqueles elementos do iterável para os quais a função retorna verdadeiro. O iterável pode ser uma sequência, um contêiner que suporta iteração, ou um <router-link to="/builtin/iter">iterador</router-link>. Se a função for None, a função identidade é assumida, ou seja, todos os elementos do iterável que são falsos são removidos.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `filter()` em Python é uma função built-in que permite processar um iterável e extrair os itens que satisfazem uma determinada condição. Ela retorna um <router-link to="/builtin/iter">iterador</router-link> com os elementos que atendem aos critérios.

## Sintaxe

```python
filter(function, iterable)
```

- **function**: A função a ser executada para cada item no iterável. Deve retornar `True` ou `False` para cada item.
- **iterable**: O iterável a ser filtrado, como uma lista, tupla ou string.

## Descrição

A função `filter()` constrói um iterador a partir daqueles elementos do iterável para os quais a função retorna `True`. Se a função for `None`, ela remove todos os elementos do iterável que são falsos.

## Exemplo

```python
def is_even(num):
    return num % 2 == 0

numbers = [1, 2, 3, 4, 5, 6]
even_numbers = list(filter(is_even, numbers))
print(even_numbers)
```

Saída:

```plaintext
[2, 4, 6]
```

Neste exemplo, a função `is_even` é definida para determinar se um número é par ou não. O método filter recebe `dois argumentos`: o `primeiro argumento` é a função a ser aplicada a cada elemento da lista, e o `segundo argumento` é a lista a ser filtrada. O método filter retorna um <router-link to="/builtin/iter">iterador</router-link>, que é então convertido em uma lista e armazenado na variável even_numbers. A saída final é a lista de números pares da lista original.

## Links Relevantes

- <router-link :to="'/builtin/map'">map()</router-link>: Aplica uma função a todos os itens de um iterável e retorna um iterador com os resultados.
- <router-link :to="'/builtin/iter'">iter()</router-link>: Retorna um objeto iterador.
- <router-link :to="'/blog/python-comprehensions-step-by-step'">List Comprehensions</router-link>: Uma maneira concisa de criar listas, frequentemente usada como alternativa a `filter()`.
- <router-link :to="'/cheatsheet/comprehensions'">Comprehensions</router-link>
- <router-link :to="'/cheatsheet/functions'">Functions</router-link>
- <router-link :to="'/builtin/reduce'">reduce()</router-link>
