---
title: 'Função Embutida slice() do Python - Folha de Dicas Python'
description: 'Retorna um objeto slice representando o conjunto de índices especificado por range(start, stop, step). Os argumentos start e step são definidos como None por padrão. Objetos Slice possuem atributos de dados somente leitura start, stop e step que meramente retornam os valores dos argumentos (ou seus padrões).'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in slice() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#slice">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retorna um objeto slice que representa o conjunto de índices especificado por range(start, stop, step). Os argumentos start e step são definidos como None por padrão. Objetos Slice têm atributos de dados somente leitura start, stop e step que meramente retornam os valores dos argumentos (ou seus padrões).
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `slice()` em Python retorna um objeto slice que pode ser usado para fatiar sequências como listas, tuplas ou strings. Um objeto slice representa um conjunto de índices especificado por `start`, `stop` e `step`.

## Exemplos

```python
furniture = ['table', 'chair', 'rack', 'shelf']

print(furniture[0:4])
print(furniture[1:3])
print(furniture[0:-1])
print(furniture[:2])
print(furniture[1:])
print(furniture[:])
```

Saída:

```plaintext
['table', 'chair', 'rack', 'shelf']
['chair', 'rack']
['table', 'chair', 'rack']
['table', 'chair']
['chair', 'rack', 'shelf']
['table', 'chair', 'rack', 'shelf']
```

Fatiar a lista completa executará uma cópia:

```python
spam = ['cat', 'bat', 'rat', 'elephant']
spam2 = spam[:]
print(spam2)

spam.append('dog')
print(spam)
print(spam2)
```

Saída:

```plaintext
['cat', 'bat', 'rat', 'elephant']
['cat', 'bat', 'rat', 'elephant', 'dog']
['cat', 'bat', 'rat', 'elephant']
```

## Links Relevantes

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Listas e Tuplas</router-link>
- <router-link to="/cheatsheet/manipulating-strings">Cheatsheet: Manipulação de Strings</router-link>
- <router-link to="/cheatsheet/comprehensions">Cheatsheet: Comprehensions</router-link>
- <router-link to="/modules/itertools-module">Módulo: itertools (islice)</router-link>
- <router-link to="/builtin/range">range()</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/reversed">reversed()</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/enumerate">enumerate()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/map">map()</router-link>
- <router-link to="/builtin/filter">filter()</router-link>
