---
title: Python staticmethod() built-in function - Python Cheatsheet
description: Transform a method into a static method.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python staticmethod() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#staticmethod">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Transform a method into a static method.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `@staticmethod` decorator transforms a method so that it belongs to a class but does not receive the class or instance as the first argument. This is useful for creating utility functions that have a logical connection to a class but do not depend on class or instance state.

A static method can be called either on the class itself or on an instance.

### Example

Here is how you define and call a static method:

```python
class MathHelper:
    @staticmethod
    def add(x, y):
        return x + y

# Call on the class
result1 = MathHelper.add(5, 3)
print(result1)

# Call on an instance
helper = MathHelper()
result2 = helper.add(10, 20)
print(result2)
```

```output
8
30
```

A static method does not have access to the class (`cls`) or the instance (`self`). It's essentially a regular function namespaced within the class.

## Relevant links

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: OOP Basics</router-link>
- <router-link to="/cheatsheet/decorators">Cheatsheet: Decorators</router-link>
- <router-link to="/cheatsheet/functions">Cheatsheet: Functions</router-link>
- <router-link to="/builtin/classmethod">classmethod()</router-link>
- <router-link to="/builtin/property">property()</router-link>
