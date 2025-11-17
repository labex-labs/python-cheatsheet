---
title: Python memoryview() built-in function - Python Cheatsheet
description: Return a “memory view” object created from the given argument. See Memory Views for more information.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python memoryview() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#memoryview">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return a “memory view” object created from the given argument. See Memory Views for more information.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `memoryview()` function creates a memory view object from a given argument. A memory view allows you to access the memory of another object, like a `<router-link to="/builtin/bytes">bytes</router-link>` or `<router-link to="/builtin/bytearray">bytearray</router-link>` object, without making a copy. This is highly efficient for large data, as it avoids memory duplication.

### Examples

Here's how you can use `memoryview()`:

```python
# Create a bytearray
data = bytearray(b'hello world')

# Create a memory view of the data
view = memoryview(data)

# Access the data through the view
print(view[0])  # ASCII for 'h'
print(view[6:11])  # a slice of the memory
print(view[6:11].tobytes())

# You can also modify the underlying data through the view
view[0] = 72  # ASCII for 'H'
print(data)
```

Output:

```plaintext
104
<memory at 0x...>
b'world'
bytearray(b'Hello world')
```

## Relevant links

- <router-link to="/blog/python-data-types">Blog: Python Data Types</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
- <router-link to="/builtin/bytearray">bytearray()</router-link>
