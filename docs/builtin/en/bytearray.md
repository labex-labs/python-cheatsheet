---
title: Python bytearray() built-in function - Python Cheatsheet
description: Return a new array of bytes. The bytearray class is a mutable sequence of integers in the range [...]. It has most of the usual methods of mutable sequences, described in Mutable Sequence Types, as well as most methods that the bytes type has [...]
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python bytearray() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#bytearray">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Return a new array of bytes. The bytearray class is a mutable sequence of integers in the range [...]. It has most of the usual methods of mutable sequences, described in Mutable Sequence Types, as well as most methods that the bytes type has [...].
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `bytearray()` function returns a new array of bytes. This object is a mutable sequence of integers in the range 0 <= x < 256. It's essentially a mutable version of the `bytes` object, which means you can change its contents after it's created. This is useful for handling binary data that needs to be modified in place.

## Examples

```python
# Create a bytearray from a string with a specific encoding
ba1 = bytearray("hello", "utf-8")
print(ba1)
```

Output:

```plaintext
bytearray(b'hello')
```

```python
# Create a bytearray from a list of integers
ba2 = bytearray([72, 101, 108, 108, 111])
print(ba2)
```

Output:

```plaintext
bytearray(b'Hello')
```

```python
# Modify a bytearray (it's mutable)
ba2[0] = 104  # ASCII for 'h'
ba2.append(33)  # ASCII for '!'
print(ba2)
```

Output:

```plaintext
bytearray(b'hello!')
```

## Relevant links

- <router-link to="/cheatsheet/reading-and-writing-files">Cheatsheet: Reading and Writing Files</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Lists and Tuples</router-link>
- <router-link to="/blog/python-data-types">Blog: Python Data Types</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/memoryview">memoryview()</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/int">int()</router-link>
