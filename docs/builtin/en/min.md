---
title: Python min() built-in function - Python Cheatsheet
description: Return the smallest item in an iterable or the smallest of two or more arguments.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python min() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#min">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return the smallest item in an iterable or the smallest of two or more arguments.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `min()` function is the counterpart to <router-link to="/builtin/max">max()</router-link>. It can be used in two ways:

1. With an iterable (like a <router-link to="/builtin/list">list</router-link> or <router-link to="/builtin/tuple">tuple</router-link>), it returns the smallest item.
2. With two or more arguments, it returns the smallest of them.

### Examples

**Finding the min in an iterable:**

```python
numbers = [10, 2, 1, 40, 5]
print(min(numbers))

letters = ('z', 'b', 'a')
print(min(letters))
```

Output:

```plaintext
1
a
```

**Finding the min of several arguments:**

```python
print(min(10, 20, 5))
```

Output:

```plaintext
5
```

## Relevant links

- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Lists and Tuples</router-link>
- <router-link to="/builtin/max">max()</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/sum">sum()</router-link>
