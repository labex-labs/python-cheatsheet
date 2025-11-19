---
title: 'Python Comprehensions - Python Spickzettel'
description: 'List Comprehensions bieten eine prägnante Methode zur Erstellung von Listen'
labUrl: 'https://labex.io/de/labs/python-python-comprehensions-633649?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Comprehensions
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

List Comprehensions sind eine spezielle Syntax, mit der wir Listen aus anderen Listen erstellen können, und sie sind unglaublich nützlich beim Umgang mit Zahlen und mit ein oder zwei Ebenen verschachtelter for-Schleifen.

<base-disclaimer>
  <base-disclaimer-title>
    Aus dem Python 3 <a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions">Tutorial</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    List comprehensions provide a concise way to create lists. [...] or to create a subsequence of those elements that satisfy a certain condition.
  </base-disclaimer-content>
</base-disclaimer>

Lesen Sie <router-link to="/blog/python-comprehensions-step-by-step">Python Comprehensions: A step by step Introduction</router-link> für eine eingehendere Einführung.

## List comprehension

So erstellen wir eine neue Liste aus einer bestehenden Sammlung mit einer For-Schleife:

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

Und so machen wir dasselbe mit einer List Comprehension:

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

Dasselbe können wir mit Zahlen machen:

```python
# Nested list comprehension: create tuples from two ranges
# Equivalent to nested for loops
n = [(a, b) for a in range(1, 3) for b in range(1, 3)]
n
```

```output
[(1, 1), (1, 2), (2, 1), (2, 2)]
```

## Hinzufügen von Bedingungen

Wenn wir möchten, dass `new_list` nur die Namen enthält, die mit C beginnen, würden wir dies mit einer for-Schleife wie folgt tun:

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

In einer List Comprehension fügen wir die `if`-Anweisung am Ende hinzu:

```python
# List comprehension with condition: filter items
# Syntax: [expression for item in iterable if condition]
new_list = [n for n in names if n.startswith('C')]
print(new_list)
```

```output
['Charles', 'Carol']
```

Um eine `if-else`-Anweisung in einer List Comprehension zu verwenden:

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
    Set- und Dict-Comprehensions
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

```output
{"ABC", "DEF"}
```

## Dict comprehension

```python
# Dict comprehension: swap keys and values
# Syntax: {key_expression: value_expression for item in iterable}
c = {'name': 'Pooka', 'age': 5}
{v: k for k, v in c.items()}  # Reverse key-value pairs
```

```output
{'Pooka': 'name', 5: 'age'}
```

Eine List Comprehension kann aus einem Dictionary generiert werden:

```python
# List comprehension from dictionary: create formatted strings
c = {'name': 'Pooka', 'age': 5}
["{}:{}".format(k.upper(), v) for k, v in c.items()]  # Format as "KEY:value"
```

```output
['NAME:Pooka', 'AGE:5']
```

## Relevante Links

- <router-link to="/blog/python-comprehensions-step-by-step">Python Comprehensions: A step by step Introduction</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Python Lists and Tuples</router-link>
- <router-link to="/cheatsheet/sets">Python Sets</router-link>
- <router-link to="/cheatsheet/dictionaries">Python Dictionaries</router-link>
- <router-link to="/blog/python-sets-what-why-how">Python Sets: What, Why and How</router-link>
- <router-link to="/blog/python-data-types">Python Data Types Blog Post</router-link>
