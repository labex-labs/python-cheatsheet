---
title: Python map() built-in function - Python Cheatsheet
description: Return an iterator that applies function to every item of iterable, yielding the results. If additional iterable arguments are passed, function must take that many arguments and is applied to the items from all iterables in parallel. With multiple iterables, the iterator stops when the shortest iterable is exhausted. For cases where the function inputs are already arranged into argument tuples.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python map() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#map">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return an iterator that applies function to every item of iterable, yielding the results. If additional iterable arguments are passed, function must take that many arguments and is applied to the items from all iterables in parallel. With multiple iterables, the iterator stops when the shortest iterable is exhausted. For cases where the function inputs are already arranged into argument <router-link to="/builtin/tuple">tuples</router-link>.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The map function, _map(function, iterable)_ takes in one or more iterables, a 'callback function' (often a lambda), and returns a "Map Object". The map object contains the result of the map function applying the callback to each element in the iterable arguments. Map iterates over the provided iterable objects simultaneously. As in, at every step, "i" in the map function, the element at index "i" of each iterable will be available to the map function at that time. You will often want to cast the resultant map object to a <router-link to="/builtin/list">list</router-link>, <router-link to="/builtin/tuple">tuple</router-link>, or another form of object that is more convenient to work with once you are finished mapping.

\*\*\*An important note: As of the release of Python 3, if the iterables supplied to map are of different lengths, The map will stop and return when it has hit the number of steps corresponding to the length of the shortest iterable.

## Input Parameters

Function: takes the item (or items) at the index corresponding to the current step of the Map and gives the return result as an item to store in the Map Object. The type of element stored to the map object will be identical to the type returned from the function.

Iterable(s): `<router-link to="/builtin/tuple">tuple</router-link>`, `<router-link to="/builtin/list">list</router-link>`, `<router-link to="/builtin/range">range</router-link>`, `<router-link to="/builtin/dict">dictionary</router-link>`, `<router-link to="/builtin/set">set</router-link>`, `<router-link to="/builtin/str">string</router-link>`.

## A very simple example

```python
def double_map(func, iter):
    my_map = map(func, iter)
    return list(my_map)

def double(element):
    return element * 2

nums = [1, 2, 3, 4]

print(double_map(double, nums))
```

Output:

```plaintext
[2, 4, 6, 8]
```

## A less simple example

### This example employs callback function written as a lambda, as well as

```python
def multi_map(func, *iters):
    my_map = map(func, *iters)
    return list(my_map)

list1 = [1, 2, 3]
list2 = [4, 5, 6]

print(multi_map((lambda item1, item2: item1 * item2), list1, list2))
```

Output:

```plaintext
[4, 10, 18]
```

## An example demonstrating map's handling of different iterable lengths

```python
def max(a, b):
    if a > b:
        return a
    else:
        return b

list1 = [1, 1, 1]
list2 = [0, 0, 0, 1, 1, 1, 1, 1, 1, 1]

result = list(map(max, list1, list2))

print(result)
```

Output:

```plaintext
[1, 1, 1]
```

Notice how the length of the resultant list is equal to list1's length?

## Relevant links

- <router-link to="/cheatsheet/functions">Cheatsheet: Functions (including Lambdas)</router-link>
- <router-link to="/cheatsheet/comprehensions">Cheatsheet: Comprehensions</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Blog: Python Comprehensions Step-by-Step</router-link>
- <router-link to="/modules/itertools-module">Module: itertools</router-link>
- <router-link to="/builtin/filter">filter()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
