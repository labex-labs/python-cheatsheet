---
title: 'Comprensiones de Python - Hoja de Trucos de Python'
description: 'Las comprensiones de listas ofrecen una forma concisa de crear listas'
labUrl: 'https://labex.io/es/labs/python-python-comprehensions-633649?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Comprensiones de Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Las Comprensiones de Listas son un tipo especial de sintaxis que nos permite crear listas a partir de otras listas, y son increíblemente útiles cuando se trabaja con números y con uno o dos niveles de bucles for anidados.

<base-disclaimer>
  <base-disclaimer-title>
    Del <a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions">tutorial</a> de Python 3
  </base-disclaimer-title>
  <base-disclaimer-content>
    Las comprensiones de listas proporcionan una forma concisa de crear listas. [...] o para crear una subsecuencia de esos elementos que satisfacen una cierta condición.
  </base-disclaimer-content>
</base-disclaimer>

Lea <router-link to="/blog/python-comprehensions-step-by-step">Python Comprehensions: A step by step Introduction</router-link> para una introducción más profunda.

## Comprensión de listas

Así es como creamos una nueva lista a partir de una colección existente con un Bucle For:

```python
# Traditional approach: create list using a for loop
names = ['Charles', 'Susan', 'Patrick', 'George']

new_list = []
for n in names:
    new_list.append(n)

new_list
```

```output
['Charles', 'Susan', 'Patrick', 'George']
```

Y así es como hacemos lo mismo con una Comprensión de Listas:

```python
# List comprehension: concise way to create a new list
# Syntax: [expression for item in iterable]
names = ['Charles', 'Susan', 'Patrick', 'George']

new_list = [n for n in names]  # Create list with all names
new_list
```

```output
['Charles', 'Susan', 'Patrick', 'George']
```

Podemos hacer lo mismo con números:

```python
# Nested list comprehension: create tuples from two ranges
# Equivalent to nested for loops
n = [(a, b) for a in range(1, 3) for b in range(1, 3)]
n
```

```output
[(1, 1), (1, 2), (2, 1), (2, 2)]
```

## Añadir condicionales

Si queremos que `new_list` contenga solo los nombres que comienzan con C, con un bucle for, lo haríamos de esta manera:

```python
# Traditional approach: filter with if condition
names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']

new_list = []
for n in names:
    if n.startswith('C'):  # Filter names starting with 'C'
        new_list.append(n)

print(new_list)
```

```output
['Charles', 'Carol']
```

En una Comprensión de Listas, añadimos la declaración `if` al final:

```python
# List comprehension with condition: filter items
# Syntax: [expression for item in iterable if condition]
new_list = [n for n in names if n.startswith('C')]
print(new_list)
```

```output
['Charles', 'Carol']
```

Para usar una declaración `if-else` en una Comprensión de Listas:

```python
# List comprehension with if-else: conditional expression
# Syntax: [expression_if_true if condition else expression_if_false for item in iterable]
nums = [1, 2, 3, 4, 5, 6]
new_list = [num*2 if num % 2 == 0 else num for num in nums]  # Double even numbers
print(new_list)
```

```output
[1, 4, 3, 8, 5, 12]
```

<base-disclaimer>
  <base-disclaimer-title>
    Comprensiones de conjuntos y diccionarios
  </base-disclaimer-title>
  <base-disclaimer-content>
    Los conceptos básicos de las comprensiones de `list` también se aplican a los <b>conjuntos</b> (sets) y a los <b>diccionarios</b> (dictionaries).
  </base-disclaimer-content>
</base-disclaimer>

## Comprensión de conjuntos (Set comprehension)

```python
# Set comprehension: create a set using comprehension syntax
# Syntax: {expression for item in iterable}
b = {"abc", "def"}
{s.upper() for s in b}  # Convert all strings to uppercase
```

```output
{"ABC", "DEF"}
```

## Comprensión de diccionarios (Dict comprehension)

```python
# Dict comprehension: swap keys and values
# Syntax: {key_expression: value_expression for item in iterable}
c = {'name': 'Pooka', 'age': 5}
{v: k for k, v in c.items()}  # Reverse key-value pairs
```

```output
{'Pooka': 'name', 5: 'age'}
```

Una comprensión de listas puede generarse a partir de un diccionario:

```python
# List comprehension from dictionary: create formatted strings
c = {'name': 'Pooka', 'age': 5}
["{}:{}".format(k.upper(), v) for k, v in c.items()]  # Format as "KEY:value"
```

```output
['NAME:Pooka', 'AGE:5']
```

## Enlaces relevantes

- <router-link to="/blog/python-comprehensions-step-by-step">Python Comprehensions: A step by step Introduction</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Python Lists and Tuples</router-link>
- <router-link to="/cheatsheet/sets">Python Sets</router-link>
- <router-link to="/cheatsheet/dictionaries">Python Dictionaries</router-link>
- <router-link to="/blog/python-sets-what-why-how">Python Sets: What, Why and How</router-link>
- <router-link to="/blog/python-data-types">Python Data Types Blog Post</router-link>
