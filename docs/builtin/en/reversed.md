---
title: Python reversed() built-in function - Python Cheatsheet
description: Return a reverse iterator. seq must be an object which has a __reversed__() method or supports the sequence protocol (the __len__() method and the __getitem__() method with integer arguments starting at 0).
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python reversed() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#reversed">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return a reverse iterator. seq must be an object which has a __reversed__() method or supports the sequence protocol (the __len__() method and the __getitem__() method with integer arguments starting at 0).
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `reversed()` function returns a reverse iterator. This means it can be used to loop over a sequence (like a <router-link to="/builtin/list">list</router-link>, <router-link to="/builtin/tuple">tuple</router-link>, or <router-link to="/builtin/str">string</router-link>) in reverse order. It doesn't modify the original sequence but instead provides a new iterator that yields items from end to start.

### Examples

To get a reversed list, you can convert the iterator to a list:

```python
my_list = [1, 2, 3, 4, 5]
reversed_list = list(reversed(my_list))
print(reversed_list)
```

```output
[5, 4, 3, 2, 1]
```

You can also iterate over it directly in a `for` loop:

```python
for char in reversed("hello"):
    print(char)
```

```output
o
l
l
e
h
```

Here is another example demonstrating the iterator behavior:

```python
i = reversed([1, 2, 3])
print(next(i))
print(next(i))
print(next(i))
```

```output
3
2
1
```

## Relevant links

- <router-link to="/cheatsheet/control-flow">Cheatsheet: Control Flow (for loops)</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Lists and Tuples</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/next">next()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
