---
title: Python setattr() built-in function - Python Cheatsheet
description: This is the counterpart of getattr(). The arguments are an object, a string, and an arbitrary value. The string may name an existing attribute or a new attribute. The function assigns the value to the attribute, provided the object allows it. For example, setattr(x, 'foobar', 123) is equivalent to x.foobar = 123.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python setattr() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#setattr">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   This is the counterpart of <router-link to="/builtin/getattr">getattr()</router-link>. The arguments are an object, a string, and an arbitrary value. The string may name an existing attribute or a new attribute. The function assigns the value to the attribute, provided the object allows it. For example, setattr(x, 'foobar', 123) is equivalent to x.foobar = 123.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `setattr()` function is a built-in Python function that allows you to set the value of an attribute of an object. It takes three arguments: the object, the name of the attribute (as a string), and the value you want to assign to that attribute.

This is particularly useful when the attribute name is determined dynamically at runtime. Instead of using dot notation (`object.attribute = value`), which requires you to know the attribute name beforehand, `setattr()` lets you use a variable.

### Examples

Here's how you can use `setattr()` to add or modify attributes:

```python
class Person:
    name = "John"

p = Person()

# Set the 'age' attribute to 30
setattr(p, 'age', 30)

print(p.age)

# Change the 'name' attribute
setattr(p, 'name', 'Jane')
print(p.name)
```

Output:

```plaintext
30
Jane
```

## Relevant links

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: OOP Basics</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/dir">dir()</router-link>
- <router-link to="/builtin/getattr">getattr()</router-link>
- <router-link to="/builtin/hasattr">hasattr()</router-link>
- <router-link to="/builtin/delattr">delattr()</router-link>
