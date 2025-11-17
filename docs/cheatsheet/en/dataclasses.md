---
title: Python Dataclasses - Python Cheatsheet
description: Dataclasses are python classes, but are suited for storing data objects. This module provides a decorator and functions for automatically adding generated special methods such as __init__() and __repr__() to user-defined classes.
labUrl: https://labex.io/labs/python-python-dataclasses-633652?course=python-cheatsheet
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Dataclasses
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

`Dataclasses` are python classes, but are suited for storing data objects.
This module provides a decorator and functions for automatically adding generated special methods such as `__init__()` and `__repr__()` to user-defined classes.

## Features

1. They store data and represent a certain data type. Ex: A number. For people familiar with ORMs, a model instance is a data object. It represents a specific kind of entity. It holds attributes that define or represent the entity.

2. They can be compared to other objects of the same type. Ex: A number can be greater than, less than, or equal to another number.

Python 3.7 provides a decorator dataclass that is used to convert a class into a dataclass.

```python
class Number:
    def __init__(self, val):
        self.val = val

obj = Number(2)
obj.val
```

Output:

```plaintext
2
```

with dataclass

```python
# Dataclass: automatically generates __init__ and __repr__ methods
from dataclasses import dataclass

@dataclass  # Decorator converts class to dataclass
class Number:
    val: int  # Type annotation required

obj = Number(2)  # __init__ automatically created
obj.val
```

Output:

```plaintext
2
```

## Default values

It is easy to add default values to the fields of your data class.

```python
# Dataclass with default values: fields with defaults must come after required fields
@dataclass
class Product:
    name: str        # Required field
    count: int = 0   # Optional field with default value
    price: float = 0.0  # Optional field with default value

obj = Product("Python")  # Only name required, others use defaults
obj.name
```

Output:

```plaintext
Python
```

```python
obj.count
```

Output:

```plaintext
0
```

```python
obj.price
```

Output:

```plaintext
0.0
```

## Type hints

It is mandatory to define the data type in dataclass. However, If you would rather not specify the datatype then, use `typing.Any`.

```python
from dataclasses import dataclass
from typing import Any

@dataclass
class WithoutExplicitTypes:
   name: Any
   value: Any = 42
```

## Relevant links

- <router-link to="/cheatsheet/oop-basics">OOP Basics</router-link>
- <router-link to="/cheatsheet/decorators">Decorators</router-link>
- <router-link to="/blog/python-data-types">Python Data Types Blog Post</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
- <router-link to="/builtin/type">type()</router-link>
