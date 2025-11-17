---
title: 'Conjuntos Python - Folha de Referência Python'
description: 'Python possui vários tipos de dados nativos para ajudar a organizar seus dados. Essas estruturas incluem listas, dicionários, tuplas e conjuntos.'
labUrl: 'https://labex.io/pt/labs/python-python-sets-633665?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Conjuntos Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Python vem equipado com vários tipos de dados integrados para nos ajudar a organizar nossos dados. Essas estruturas incluem listas, dicionários, tuplas e **conjuntos** (sets).

<base-disclaimer>
  <base-disclaimer-title>
    Da documentação do Python 3 <a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#sets">documentação</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Um conjunto é uma coleção não ordenada sem elementos duplicados. Os usos básicos incluem teste de pertinência e eliminação de entradas duplicadas.
  </base-disclaimer-content>
</base-disclaimer>

Leia <router-link to="/blog/python-sets-what-why-how">Python Sets: What, Why and How</router-link> para uma referência mais aprofundada.

## Inicializando um conjunto

Existem duas maneiras de criar conjuntos: usando chaves `{}` e a função integrada `set()`

<base-warning>
  <base-warning-title>
    Conjuntos Vazios
  </base-warning-title>
  <base-warning-content>
    Ao criar um conjunto, certifique-se de não usar chaves vazias <code>{}</code> ou você obterá um dicionário vazio em vez disso.
  </base-warning-content>
</base-warning>

```python
# Create set using curly braces or set() function
s = {1, 2, 3}  # Using curly braces
s = set([1, 2, 3])  # Using set() constructor

# Warning: empty {} creates a dictionary, not a set
s = {}  # this will create a dictionary instead of a set
type(s)  # Returns <class 'dict'>
```

Output:

```plaintext
<class 'dict'>
```

## Coleções não ordenadas de elementos únicos

Um conjunto remove automaticamente todos os valores duplicados.

```python
# Sets automatically remove duplicates
s = {1, 2, 3, 2, 3, 4}  # Duplicates are removed
s  # Returns {1, 2, 3, 4}
```

Output:

```plaintext
{1, 2, 3, 4}
```

E como um tipo de dado não ordenado, eles não podem ser indexados.

```python
s = {1, 2, 3}
s[0]
```

Output:

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'set' object does not support indexing
```

## set add e update

Usando o método `add()` podemos adicionar um único elemento ao conjunto.

```python
# add() method: add a single element to the set
s = {1, 2, 3}
s.add(4)  # Add element 4
s
```

Output:

```plaintext
{1, 2, 3, 4}
```

E com `update()`, múltiplos:

```python
# update() method: add multiple elements from an iterable
s = {1, 2, 3}
s.update([2, 3, 4, 5, 6])  # Add multiple elements (duplicates ignored)
s
```

Output:

```plaintext
{1, 2, 3, 4, 5, 6}
```

## set remove e discard

Ambos os métodos removerão um elemento do conjunto, mas `remove()` levantará um `key error` se o valor não existir.

```python
# remove() method: remove element, raises KeyError if not found
s = {1, 2, 3}
s.remove(3)  # Remove element 3
s
```

Output:

```plaintext
{1, 2}
```

```python
s.remove(3)
```

Output:

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 3
```

`discard()` não levantará erros.

```python
# discard() method: remove element, no error if not found
s = {1, 2, 3}
s.discard(3)  # Remove element 3 (safe, no error if missing)
s
```

Output:

```plaintext
{1, 2}
```

```python
s.discard(3)
```

## set union

`union()` ou `|` criará um novo conjunto com todos os elementos dos conjuntos fornecidos.

```python
# union(): combine all elements from multiple sets (no duplicates)
s1 = {1, 2, 3}
s2 = {3, 4, 5}
s1.union(s2)  # or 's1 | s2' - returns {1, 2, 3, 4, 5}
```

Output:

```plaintext
{1, 2, 3, 4, 5}
```

## set intersection

`intersection()` ou `&` retornará um conjunto com apenas os elementos que são comuns a todos eles.

```python
# intersection(): return elements common to all sets
s1 = {1, 2, 3}
s2 = {2, 3, 4}
s3 = {3, 4, 5}
s1.intersection(s2, s3)  # or 's1 & s2 & s3' - returns {3}
```

Output:

```plaintext
{3}
```

## set difference

`difference()` ou `-` retornará apenas os elementos que são exclusivos do primeiro conjunto (conjunto invocado).

```python
# difference(): return elements in first set but not in others
s1 = {1, 2, 3}
s2 = {2, 3, 4}

s1.difference(s2)  # or 's1 - s2' - returns {1}
```

Output:

```plaintext
{1}
```

```python
s2.difference(s1) # or 's2 - s1'
```

Output:

```plaintext
{4}
```

## set symmetric_difference

`symmetric_difference()` ou `^` retornará todos os elementos que não são comuns entre eles.

```python
# symmetric_difference(): return elements in either set, but not both
s1 = {1, 2, 3}
s2 = {2, 3, 4}
s1.symmetric_difference(s2)  # or 's1 ^ s2' - returns {1, 4}
```

Output:

```plaintext
{1, 4}
```

## Relevant links

- <router-link to="/blog/python-data-types">Python Data Types Blog Post</router-link>
- <router-link to="/blog/python-sets-what-why-how">Python Sets: What, Why and How</router-link>
- <router-link to="/cheatsheet/dictionaries">Python Dictionaries</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Python Lists and Tuples</router-link>
