---
title: Python slice() built-in function - Python Cheatsheet
description: Return a slice object representing the set of indices specified by range(start, stop, step). The start and step arguments default to None. Slice objects have read-only data attributes start, stop, and step which merely return the argument values (or their default).
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python slice() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#slice">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return a slice object representing the set of indices specified by range(start, stop, step). The start and step arguments default to None. Slice objects have read-only data attributes start, stop, and step which merely return the argument values (or their default).
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `slice()` function in Python returns a slice object that can be used to slice sequences like lists, tuples, or strings. A slice object represents a set of indices specified by `start`, `stop`, and `step`.

## Examples

```python
furniture = ['table', 'chair', 'rack', 'shelf']

print(furniture[0:4])
print(furniture[1:3])
print(furniture[0:-1])
print(furniture[:2])
print(furniture[1:])
print(furniture[:])
```

Output:

```plaintext
['table', 'chair', 'rack', 'shelf']
['chair', 'rack']
['table', 'chair', 'rack']
['table', 'chair']
['chair', 'rack', 'shelf']
['table', 'chair', 'rack', 'shelf']
```

Slicing the complete list will perform a copy:

```python
spam = ['cat', 'bat', 'rat', 'elephant']
spam2 = spam[:]
print(spam2)

spam.append('dog')
print(spam)
print(spam2)
```

Output:

```plaintext
['cat', 'bat', 'rat', 'elephant']
['cat', 'bat', 'rat', 'elephant', 'dog']
['cat', 'bat', 'rat', 'elephant']
```

## Relevant links

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Lists and Tuples</router-link>
- <router-link to="/cheatsheet/manipulating-strings">Cheatsheet: Manipulating Strings</router-link>
- <router-link to="/cheatsheet/comprehensions">Cheatsheet: Comprehensions</router-link>
- <router-link to="/modules/itertools-module">Module: itertools (islice)</router-link>
- <router-link to="/builtin/range">range()</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/reversed">reversed()</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/enumerate">enumerate()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/map">map()</router-link>
- <router-link to="/builtin/filter">filter()</router-link>
