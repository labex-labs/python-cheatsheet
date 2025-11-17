---
title: 'Função Integrada zip() do Python - Guia Rápido Python'
description: 'Itere sobre vários iteráveis em paralelo, produzindo tuplas com um item de cada um.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in Python zip()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#zip">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Itera sobre vários iteráveis em paralelo, produzindo tuplas com um item de cada um.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `zip()` em Python é uma função built-in que aceita dois ou mais iteráveis (como listas, tuplas ou strings) e os agrega em um único iterador de tuplas. Cada tupla contém elementos de todos os iteráveis de entrada na mesma posição.

## Exemplos

```python
furniture = ['table', 'chair', 'rack', 'shelf']
price = [100, 50, 80, 40]

for item, amount in zip(furniture, price):
    print(f'The {item} costs ${amount}')
```

Saída:

```plaintext
The table costs $100
The chair costs $50
The rack costs $80
The shelf costs $40
```

## Outros Casos de Uso

A função zip em Python mescla múltiplos iteráveis em tuplas.

```python
# Combinando três listas
list1 = [1, 2, 3]
list2 = ['a', 'b', 'c']
list3 = [True, False, True]

zipped = zip(list1, list2, list3)
print(list(zipped))
```

Saída:

```plaintext
[(1, 'a', True), (2, 'b', False), (3, 'c', True)]
```

### Descompactando (Unzipping)

```python
# Descompactando um objeto zipado
zipped = [(1, 'a'), (2, 'b'), (3, 'c')]
list1, list2 = zip(*zipped)
print(list1)
print(list2)
```

Saída:

```plaintext
(1, 2, 3)
('a', 'b', 'c')
```

## Mais Exemplos

### Zipando com Comprimentos Diferentes

zip para de criar tuplas quando o iterável mais curto se esgota.

```python
numbers = [1, 2, 3]
letters = ['a', 'b']

for num, letter in zip(numbers, letters):
    print(f'{num} -> {letter}')
```

Saída:

```plaintext
1 -> a
2 -> b
```

### Usando zip com Dicionários

Você pode usar zip para combinar chaves e valores de duas listas em um dicionário.

```python
keys = ['name', 'age', 'city']
values = ['Alice', 25, 'New York']

my_dict = dict(zip(keys, values))
print(my_dict)
```

Saída:

```plaintext
{'name': 'Alice', 'age': 25, 'city': 'New York'}
```

### Usando zip com List Comprehensions

Você pode usar zip em list comprehensions para um código mais conciso.

```python
list1 = [1, 2, 3]
list2 = [4, 5, 6]

summed = [x + y for x, y in zip(list1, list2)]
print(summed)
```

Saída:

```plaintext
[5, 7, 9]
```

## Links Relevantes

- <router-link to="/cheatsheet/lists-and-tuples/">Listas e Tuplas</router-link>
- <router-link to="/cheatsheet/comprehensions/">Comprehensions</router-link>
- <router-link to="/builtin/slice/">slice()</router-link>
- <router-link to="/builtin/sorted/">sorted()</router-link>
- <router-link to="/builtin/sum/">sum()</router-link>
- <router-link to="/builtin/map/">map()</router-link>
- <router-link to="/builtin/filter/">filter()</router-link>
- <router-link to="/builtin/enumerate/">enumerate()</router-link>
- <router-link to="/modules/itertools-module/">Módulo Itertools</router-link>
