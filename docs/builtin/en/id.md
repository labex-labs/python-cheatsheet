---
title: Python id() built-in function - Python Cheatsheet
description: Return the “identity” of an object. This is an integer which is guaranteed to be unique and constant for this object during its lifetime. Two objects with non-overlapping lifetimes may have the same id() value.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python id() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#id">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return the “identity” of an object. This is an integer which is guaranteed to be unique and constant for this object during its lifetime. Two objects with non-overlapping lifetimes may have the same id() value.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `id()` function returns a unique integer that identifies an object in memory. This ID is guaranteed to be unique for the lifetime of the object. It's essentially the memory address of the object.

### Examples

```python
x = 10
y = 10
z = 20

print(id(x))
print(id(y))  # same as id(x) because Python caches small integers
print(id(z))
print(id(1))
print(id('1'))
print(id([1, 2]))
```

```output
4331368528
4331368528
4331368560
4331368496
4331368560
4331368560
```

## Relevant links

- <router-link :to="'/builtin/hash'">hash()</router-link>
- <router-link :to="'/builtin/object'">object()</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP Basics</router-link>
- <router-link :to="'/blog/python-data-types'">Python Data Types</router-link>
- <router-link :to="'/builtin/type'">type()</router-link>
