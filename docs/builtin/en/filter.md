---
title: Python filter() built-in function - Python Cheatsheet
description: Construct an iterator from those elements of iterable for which function returns true. iterable may be either a sequence, a container which supports iteration, or an iterator. If function is None, the identity function is assumed, that is, all elements of iterable that are false are removed.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python filter() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#filter">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Construct an <router-link to="/builtin/iter">iterator</router-link> from those elements of iterable for which function returns true. iterable may be either a sequence, a container which supports iteration, or an <router-link to="/builtin/iter">iterator</router-link>. If function is None, the identity function is assumed, that is, all elements of iterable that are false are removed.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `filter()` function in Python is a built-in function that allows you to process an iterable and extract those items that satisfy a certain condition. It returns an <router-link to="/builtin/iter">iterator</router-link> with the elements that meet the criteria.

## Syntax

```python
filter(function, iterable)
```

- **function**: The function to execute for each item in the iterable. It should return `True` or `False` for each item.
- **iterable**: The iterable to filter, such as a list, tuple, or string.

## Description

The `filter()` function constructs an iterator from those elements of the iterable for which the function returns `True`. If the function is `None`, it removes all elements of the iterable that are false.

## Example

```python
def is_even(num):
    return num % 2 == 0

numbers = [1, 2, 3, 4, 5, 6]
even_numbers = list(filter(is_even, numbers))
print(even_numbers)
```

```output
[2, 4, 6]
```

In this example, the `is_even` function is defined to determine whether a number is even or not. The filter method takes `two arguments`: the `first argument` is the function to apply to each element of the list, and the `second argument` is the list to be filtered. The filter method returns an <router-link to="/builtin/iter">iterator</router-link>, which is then converted to a list and stored in the even_numbers variable. The final output is the list of even numbers from the original list.

## Relevant links

- <router-link :to="'/builtin/map'">map()</router-link>: Apply a function to every item of an iterable and return an iterator of the results.
- <router-link :to="'/builtin/iter'">iter()</router-link>: Return an iterator object.
- <router-link :to="'/blog/python-comprehensions-step-by-step'">List Comprehensions</router-link>: A concise way to create lists, often used as an alternative to `filter()`.
- <router-link :to="'/cheatsheet/comprehensions'">Comprehensions</router-link>
- <router-link :to="'/cheatsheet/functions'">Functions</router-link>
- <router-link :to="'/builtin/reduce'">reduce()</router-link>
