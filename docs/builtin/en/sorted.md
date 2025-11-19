---
title: Python sorted() built-in function - Python Cheatsheet
description: Return a new sorted list from the items in iterable.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python sorted() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#sorted">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return a new sorted list from the items in iterable.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `sorted()` function returns a new sorted list from the items in an iterable. It does not modify the original iterable.

You can also use the `reverse` parameter to sort in descending order.

### Examples

**Sorting a list of numbers:**

```python
numbers = [3, 1, 4, 1, 5, 9, 2, 6]
sorted_numbers = sorted(numbers)
print(sorted_numbers)
```

```output
[1, 1, 2, 3, 4, 5, 6, 9]
```

**Sorting a list of strings:**

```python
words = ["banana", "apple", "cherry"]
sorted_words = sorted(words)
print(sorted_words)
```

```output
['apple', 'banana', 'cherry']
```

**Sorting in reverse order:**

```python
numbers = [3, 1, 4, 1, 5, 9, 2, 6]
sorted_numbers_desc = sorted(numbers, reverse=True)
print(sorted_numbers_desc)
```

```output
[9, 6, 5, 4, 3, 2, 1, 1]
```

## Relevant links

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Lists and Tuples</router-link>
- <router-link to="/cheatsheet/dictionaries">Cheatsheet: Dictionaries</router-link>
- <router-link to="/cheatsheet/functions">Cheatsheet: Functions (for key argument)</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/reversed">reversed()</router-link>
- <router-link to="/builtin/min">min()</router-link>
- <router-link to="/builtin/max">max()</router-link>
