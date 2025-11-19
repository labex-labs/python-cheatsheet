---
title: Python delattr() built-in function - Python Cheatsheet
description: This is a relative of setattr(). The arguments are an object and a string. The string must be the name of one of the object’s attributes. The function deletes the named attribute, provided the object allows it. For example, delattr(x, 'foobar') is equivalent to del x.foobar.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python delattr() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#delattr">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   This is a relative of `setattr()`. The arguments are an object and a string. The string must be the name of one of the object’s attributes. The function deletes the named attribute, provided the object allows it. For example, `delattr(x, 'foobar')` is equivalent to `del x.foobar`.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `delattr()` function in Python is used to delete an attribute from an object. It's the counterpart to `setattr()` and <router-link to="/builtin/getattr">`getattr()`</router-link>.

## Syntax

```python
delattr(object, name)
```

- **object**: The object from which the attribute should be deleted.
- **name**: The name of the attribute to delete, given as a string.

## Examples

### Deleting an attribute from an object

```python
class Person:
    name = "John"
    age = 30

person = Person()
print(person.__dict__)
delattr(person, "age")
print(person.__dict__)
```

```output
{'name': 'John', 'age': 30}
{'name': 'John'}
```

### Deleting a non-existent attribute

```python
class Person:
    name = "John"

person = Person()
try:
    delattr(person, "age")
except AttributeError as e:
    print(f"Error: {e}")
```

```output
Error: age
```

## Relevant links

- <router-link :to="'/builtin/setattr'">`setattr()`</router-link>
- <router-link :to="'/builtin/getattr'">`getattr()`</router-link>
- <router-link :to="'/builtin/hasattr'">`hasattr()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP Basics</router-link>
