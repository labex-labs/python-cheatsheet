---
title: 'Função Embutida enumerate() em Python - Guia Rápido Python'
description: 'Retorna um objeto enumerate. O iterável deve ser uma sequência, um iterador ou outro objeto que suporte iteração. O método __next__() do iterador retornado por enumerate() retorna uma tupla contendo uma contagem (a partir de start, que é 0 por padrão) e os valores obtidos ao iterar sobre o iterável.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in Python enumerate()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#enumerate">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retorna um objeto enumerate. O iterável deve ser uma sequência, um iterador ou algum outro objeto que suporte iteração. O método __next__() do iterador retornado por enumerate() retorna uma tupla contendo uma contagem (a partir de start, que é 0 por padrão) e os valores obtidos ao iterar sobre o iterável.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `enumerate()` em Python é uma função built-in que adiciona um contador a um iterável. Ela retorna um objeto enumerate, que produz pares contendo uma contagem (a partir de um índice inicial, que é 0 por padrão) e o valor correspondente do iterável. Isso é particularmente útil quando você precisa tanto do índice quanto do item ao percorrer uma sequência.

## Exemplos

```python
l = enumerate([1, 2, 3, 4, 5])
print(l)
print(l.__next__())
print(l.__next__())
print(l.__next__())
print(l.__next__())
print(l.__next__())
```

Saída:

```plaintext
<enumerate object at 0x7fcac409cc40>
(0, 1)
(1, 2)
(2, 3)
(3, 4)
(4, 5)
```

`enumerate` é geralmente usado em um loop `for` para obter o índice de um item:

```python
for i, item in enumerate([1, 2, 3, 4, 5]):
    print(f"Index: {i}, Item: {item}")
```

Saída:

```plaintext
Index: 0, Item: 1
Index: 1, Item: 2
Index: 2, Item: 3
Index: 3, Item: 4
Index: 4, Item: 5
```

## Links Relevantes

- <router-link :to="'/cheatsheet/control-flow'">Fluxo de Controle</router-link>
- <router-link :to="'/builtin/iter'">iter()</router-link>
- <router-link :to="'/builtin/next'">next()</router-link>
- <router-link :to="'/cheatsheet/lists-and-tuples'">Listas e Tuplas</router-link>
- <router-link :to="'/builtin/zip'">zip()</router-link>
- <router-link :to="'/builtin/range'">range()</router-link>
