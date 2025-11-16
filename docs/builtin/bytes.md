---
title: Python bytes() built-in function - Python Cheatsheet
description: Return a new “bytes” object which is an immutable sequence of integers in the range [...]. bytes is an immutable version of bytearray – it has the same non-mutating methods and the same indexing and slicing behavior.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python bytes() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#bytes">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Return a new “bytes” object which is an immutable sequence of integers in the range [...]. bytes is an immutable version of bytearray – it has the same non-mutating methods and the same indexing and slicing behavior.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

In Python, the `bytes` type is an immutable sequence of single bytes. It represents a sequence of integers in the range of 0 to 255, which can be used to represent binary data such as images, audio, or other types of files.

You can create a bytes object in several ways. One way is to use the `bytes()` constructor and pass it a string, a bytearray object, or a bytes object. For example:

```python
data = "Hello, World!"
bytes_obj = bytes(data, "utf-8")
print(bytes_obj)
```

Output:

```plaintext
b'Hello, World!'
```

Another way is to use a literal notation prefixing the string with `b` or `B`:

```python
data = b"Hello, World!"
print(data)
```

Output:

```plaintext
b'Hello, World!'
```

## Relevant links

- <router-link :to="'/builtin/bytearray'">bytearray()</router-link>
- <router-link :to="'/builtin/memoryview'">memoryview()</router-link>
- <router-link :to="'/cheatsheet/reading-and-writing-files'">Reading and Writing Files</router-link>
- <router-link :to="'/blog/python-data-types'">Python Data Types</router-link>
