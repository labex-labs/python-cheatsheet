---
title: 'Генераторы Python - Шпаргалка по Python'
description: 'Генераторы списков обеспечивают краткий способ создания списков'
labUrl: 'https://labex.io/ru/labs/python-python-comprehensions-633649?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Comprehensions
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

List Comprehensions — это особый синтаксис, который позволяет нам создавать списки из других списков и невероятно полезен при работе с числами и одним или двумя уровнями вложенных циклов `for`.

<base-disclaimer>
  <base-disclaimer-title>
    Из руководства Python 3 <a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions">tutorial</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    List comprehensions provide a concise way to create lists. [...] or to create a subsequence of those elements that satisfy a certain condition.
  </base-disclaimer-content>
</base-disclaimer>

Прочтите <router-link to="/blog/python-comprehensions-step-by-step">Python Comprehensions: A step by step Introduction</router-link> для более подробного введения.

## List comprehension

Вот как мы создаем новый список из существующей коллекции с помощью цикла For:

```python
# Traditional approach: create list using a for loop
names = ['Charles', 'Susan', 'Patrick', 'George']

new_list = []
for n in names:
    new_list.append(n)

new_list
```

Вывод:

```plaintext
['Charles', 'Susan', 'Patrick', 'George']
```

А вот как мы делаем то же самое с помощью List Comprehension:

```python
# List comprehension: concise way to create a new list
# Syntax: [expression for item in iterable]
names = ['Charles', 'Susan', 'Patrick', 'George']

new_list = [n for n in names]  # Create list with all names
new_list
```

Вывод:

```plaintext
['Charles', 'Susan', 'Patrick', 'George']
```

Мы можем сделать то же самое с числами:

```python
# Nested list comprehension: create tuples from two ranges
# Equivalent to nested for loops
n = [(a, b) for a in range(1, 3) for b in range(1, 3)]
n
```

Вывод:

```plaintext
[(1, 1), (1, 2), (2, 1), (2, 2)]
```

## Adding conditionals

Если бы мы хотели, чтобы `new_list` содержал только имена, начинающиеся с C, с помощью цикла for, мы бы сделали это так:

```python
# Traditional approach: filter with if condition
names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']

new_list = []
for n in names:
    if n.startswith('C'):  # Filter names starting with 'C'
        new_list.append(n)

print(new_list)
```

Вывод:

```plaintext
['Charles', 'Carol']
```

В List Comprehension мы добавляем оператор `if` в конце:

```python
# List comprehension with condition: filter items
# Syntax: [expression for item in iterable if condition]
new_list = [n for n in names if n.startswith('C')]
print(new_list)
```

Вывод:

```plaintext
['Charles', 'Carol']
```

Чтобы использовать оператор `if-else` в List Comprehension:

```python
# List comprehension with if-else: conditional expression
# Syntax: [expression_if_true if condition else expression_if_false for item in iterable]
nums = [1, 2, 3, 4, 5, 6]
new_list = [num*2 if num % 2 == 0 else num for num in nums]  # Double even numbers
print(new_list)
```

Вывод:

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

Вывод:

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

Вывод:

```plaintext
{'Pooka': 'name', 5: 'age'}
```

List comprehension может быть сгенерирован из словаря:

```python
# List comprehension from dictionary: create formatted strings
c = {'name': 'Pooka', 'age': 5}
["{}:{}".format(k.upper(), v) for k, v in c.items()]  # Format as "KEY:value"
```

Вывод:

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
