---
title: Python zip() built-in function - Python Cheatsheet
description: Iterate over several iterables in parallel, producing tuples with an item from each one.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python zip() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#zip">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Iterate over several iterables in parallel, producing tuples with an item from each one.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `zip()` function in Python is a built-in function that takes two or more iterables (like lists, tuples, or strings) and aggregates them into a single iterator of tuples. Each tuple contains elements from all the input iterables at the same position.

## Examples

```python
furniture = ['table', 'chair', 'rack', 'shelf']
price = [100, 50, 80, 40]

for item, amount in zip(furniture, price):
    print(f'The {item} costs ${amount}')
```

Output:

```plaintext
The table costs $100
The chair costs $50
The rack costs $80
The shelf costs $40
```

## Other Use Cases

The zip function in Python merges multiple iterables into tuples.

```python
# Combining three lists
list1 = [1, 2, 3]
list2 = ['a', 'b', 'c']
list3 = [True, False, True]

zipped = zip(list1, list2, list3)
print(list(zipped))
```

Output:

```plaintext
[(1, 'a', True), (2, 'b', False), (3, 'c', True)]
```

### Unzipping

```python
# Unzipping a zipped object
zipped = [(1, 'a'), (2, 'b'), (3, 'c')]
list1, list2 = zip(*zipped)
print(list1)
print(list2)
```

Output:

```plaintext
(1, 2, 3)
('a', 'b', 'c')
```

## More Examples

### Zipping with Different Lengths

zip stops creating tuples when the shortest iterable is exhausted.

```python
numbers = [1, 2, 3]
letters = ['a', 'b']

for num, letter in zip(numbers, letters):
    print(f'{num} -> {letter}')
```

Output:

```plaintext
1 -> a
2 -> b
```

### Using zip with Dictionaries

You can use zip to combine keys and values from two lists into a dictionary.

```python
keys = ['name', 'age', 'city']
values = ['Alice', 25, 'New York']

my_dict = dict(zip(keys, values))
print(my_dict)
```

Output:

```plaintext
{'name': 'Alice', 'age': 25, 'city': 'New York'}
```

### Using zip with List Comprehensions

You can use zip in list comprehensions for more concise code.

```python
list1 = [1, 2, 3]
list2 = [4, 5, 6]

summed = [x + y for x, y in zip(list1, list2)]
print(summed)
```

Output:

```plaintext
[5, 7, 9]
```

## Relevant links

- <router-link to="/cheatsheet/lists-and-tuples/">Lists and Tuples</router-link>
- <router-link to="/cheatsheet/comprehensions/">Comprehensions</router-link>
- <router-link to="/builtin/slice/">slice()</router-link>
- <router-link to="/builtin/sorted/">sorted()</router-link>
- <router-link to="/builtin/sum/">sum()</router-link>
- <router-link to="/builtin/map/">map()</router-link>
- <router-link to="/builtin/filter/">filter()</router-link>
- <router-link to="/builtin/enumerate/">enumerate()</router-link>
- <router-link to="/modules/itertools-module/">Itertools Module</router-link>
