---
title: Python next() built-in function - Python Cheatsheet
description: Retrieve the next item from the iterator by calling its __next__() method. If default is given, it is returned if the iterator is exhausted, otherwise StopIteration is raised.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python next() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#next">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retrieve the next item from the iterator by calling its __next__() method. If default is given, it is returned if the iterator is exhausted, otherwise StopIteration is raised.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `next()` function retrieves the next item from an iterator. If the iterator is exhausted, it raises a `StopIteration` exception.

You can also provide a default value to be returned if the iterator is exhausted, which prevents the `StopIteration` exception.

### Examples

**Using `next()` with an iterator:**

```python
my_list = [1, 2]
my_iter = iter(my_list)

print(next(my_iter))
print(next(my_iter))

try:
    print(next(my_iter))
except StopIteration:
    print("Iterator is exhausted")
```

Output:

```plaintext
1
2
Iterator is exhausted
```

**Using `next()` with a default value:**

```python
my_iter = iter([1])
print(next(my_iter, "default"))
print(next(my_iter, "default"))
```

Output:

```plaintext
1
default
```

More examples:

```python
i = iter([1, 2, 3])
print(next(i))
print(next(i))
print(next(i))
```

Output:

```plaintext
1
2
3
```

## Relevant links

- <router-link to="/cheatsheet/control-flow">Cheatsheet: Control Flow (for loops)</router-link>
- <router-link to="/modules/itertools-module">Module: itertools</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
- <router-link to="/builtin/map">map()</router-link>
- <router-link to="/builtin/filter">filter()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
