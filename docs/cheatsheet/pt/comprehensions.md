---
title: 'Compreensões Python - Guia Rápido Python'
description: 'Compreensões de lista oferecem uma maneira concisa de criar listas'
labUrl: 'https://labex.io/pt/labs/python-python-comprehensions-633649?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Compreensões Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

List Comprehensions são um tipo especial de sintaxe que nos permite criar listas a partir de outras listas, e são incrivelmente úteis ao lidar com números e com um ou dois níveis de loops `for` aninhados.

<base-disclaimer>
  <base-disclaimer-title>
    Do tutorial do Python 3 <a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions">tutorial</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    List comprehensions provide a concise way to create lists. [...] or to create a subsequence of those elements that satisfy a certain condition.
  </base-disclaimer-content>
</base-disclaimer>

Leia <router-link to="/blog/python-comprehensions-step-by-step">Python Comprehensions: A step by step Introduction</router-link> para uma introdução mais aprofundada.

## List comprehension

É assim que criamos uma nova lista a partir de uma coleção existente com um Loop For:

```python
# Traditional approach: create list using a for loop
names = ['Charles', 'Susan', 'Patrick', 'George']

new_list = []
for n in names:
    new_list.append(n)

new_list
```

Output:

```plaintext
['Charles', 'Susan', 'Patrick', 'George']
```

E é assim que fazemos o mesmo com uma List Comprehension:

```python
# List comprehension: concise way to create a new list
# Syntax: [expression for item in iterable]
names = ['Charles', 'Susan', 'Patrick', 'George']

new_list = [n for n in names]  # Create list with all names
new_list
```

Output:

```plaintext
['Charles', 'Susan', 'Patrick', 'George']
```

Podemos fazer o mesmo com números:

```python
# Nested list comprehension: create tuples from two ranges
# Equivalent to nested for loops
n = [(a, b) for a in range(1, 3) for b in range(1, 3)]
n
```

Output:

```plaintext
[(1, 1), (1, 2), (2, 1), (2, 2)]
```

## Adicionando condicionais

Se quisermos que `new_list` contenha apenas os nomes que começam com C, com um loop for, faríamos assim:

```python
# Traditional approach: filter with if condition
names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']

new_list = []
for n in names:
    if n.startswith('C'):  # Filter names starting with 'C'
        new_list.append(n)

print(new_list)
```

Output:

```plaintext
['Charles', 'Carol']
```

Em uma List Comprehension, adicionamos a instrução `if` no final:

```python
# List comprehension with condition: filter items
# Syntax: [expression for item in iterable if condition]
new_list = [n for n in names if n.startswith('C')]
print(new_list)
```

Output:

```plaintext
['Charles', 'Carol']
```

Para usar uma instrução `if-else` em uma List Comprehension:

```python
# List comprehension with if-else: conditional expression
# Syntax: [expression_if_true if condition else expression_if_false for item in iterable]
nums = [1, 2, 3, 4, 5, 6]
new_list = [num*2 if num % 2 == 0 else num for num in nums]  # Double even numbers
print(new_list)
```

Output:

```plaintext
[1, 4, 3, 8, 5, 12]
```

<base-disclaimer>
  <base-disclaimer-title>
    Set and Dict comprehensions
  </base-disclaimer-title>
  <base-disclaimer-content>
    The basics of `list` comprehensions also apply to <b>sets</b> and <b>dictionaries</b>.
  </base-disclaimer-content>
</base-disclaimer>

## Set comprehension

```python
# Set comprehension: create a set using comprehension syntax
# Syntax: {expression for item in iterable}
b = {"abc", "def"}
{s.upper() for s in b}  # Convert all strings to uppercase
```

Output:

```plaintext
{"ABC", "DEF"}
```

## Dict comprehension

```python
# Dict comprehension: swap keys and values
# Syntax: {key_expression: value_expression for item in iterable}
c = {'name': 'Pooka', 'age': 5}
{v: k for k, v in c.items()}  # Reverse key-value pairs
```

Output:

```plaintext
{'Pooka': 'name', 5: 'age'}
```

Uma List comprehension pode ser gerada a partir de um dicionário:

```python
# List comprehension from dictionary: create formatted strings
c = {'name': 'Pooka', 'age': 5}
["{}:{}".format(k.upper(), v) for k, v in c.items()]  # Format as "KEY:value"
```

Output:

```plaintext
['NAME:Pooka', 'AGE:5']
```

## Relevant links

- <router-link to="/blog/python-comprehensions-step-by-step">Python Comprehensions: A step by step Introduction</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Python Lists and Tuples</router-link>
- <router-link to="/cheatsheet/sets">Python Sets</router-link>
- <router-link to="/cheatsheet/dictionaries">Python Dictionaries</router-link>
- <router-link to="/blog/python-sets-what-why-how">Python Sets: What, Why and How</router-link>
- <router-link to="/blog/python-data-types">Python Data Types Blog Post</router-link>
