---
title: Python getattr() built-in function - Python Cheatsheet
description: Return the value of the named attribute of object. name must be a string. If the string is the name of one of the object’s attributes, the result is the value of that attribute.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python getattr() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#getattr">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return the value of the named attribute of object. name must be a string. If the string is the name of one of the object’s attributes, the result is the value of that attribute.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `getattr()` function in Python is a built-in function that allows you to access an object's attribute by its name, provided as a string. This is a powerful feature for dynamic programming, as it enables you to retrieve an attribute when its name is not known until runtime. You can also provide a default value to be returned if the attribute does not exist, which helps in avoiding errors.

## Syntax

```python
getattr(object, name)
```

or

```python
getattr(object, name, default)
```

-`object`: The object whose attribute you want to access.

-`name`: The name of the attribute you want to retrieve.

-`default`: (Optional) The value to be returned if the attribute is not found. If not provided, `None` is returned.

## Example

```python
class Example:
    attribute = "Hello, World!"

# Creating an instance of the class
obj = Example()

# Using getattr to access the attribute
value = getattr(obj, 'attribute', 'Nothing found')

print(value)
```

```output
Hello, World!
```

Note: If the 'attribute' does not exist then 'Nothing found' will be printed.

## Relevant links

- <router-link :to="'/builtin/hasattr'">`hasattr()`</router-link>
- <router-link :to="'/builtin/delattr'">`delattr()`</router-link>
- <router-link :to="'/builtin/setattr'">`setattr()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP Basics</router-link>
- <router-link :to="'/builtin/dir'">`dir()`</router-link>
