---
title: Python Typing Module - Python Cheatsheet
description: The typing module provides type hints for function arguments, return values, and data structures.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Typing Module
</base-title>

The `typing` module provides type hints for function arguments, return values, and data structures.

```python
from typing import TypedDict
```

Type hints do not change how Python runs your program. They help editors, linters, and readers understand what kinds of values your code expects.

## Annotating function signatures

```python
def greet(name: str) -> str:
    return f'Hello {name}'

print(greet('Ada'))
```

```output
Hello Ada
```

The annotation `name: str` means the function expects a string. The annotation `-> str` means it should return a string.

## Common collection types

Use type hints to describe the shape of your data.

```python
def average(values: list[float]) -> float:
    return sum(values) / len(values)

print(average([1.0, 2.0, 3.0]))
```

```output
2.0
```

`list[str]` style annotations require Python 3.9+.

## Optional values

Use `| None` when a value may be missing.

```python
def find_user(user_id: int) -> str | None:
    if user_id == 1:
        return 'Ada'
    return None

print(find_user(1))
print(find_user(2))
```

```output
Ada
None
```

The `X | Y` union syntax requires Python 3.10+.

## TypedDict

`TypedDict` describes dictionary-like objects with fixed keys.

```python
from typing import TypedDict

class User(TypedDict):
    name: str
    active: bool

user: User = {'name': 'Ada', 'active': True}
print(user['name'])
```

```output
Ada
```

## Type aliases

A type alias gives a readable name to a more complex type.

```python
Coordinates = tuple[float, float]

def show_location(point: Coordinates) -> str:
    return f'{point[0]}, {point[1]}'

print(show_location((12.5, 35.8)))
```

```output
12.5, 35.8
```

## Relevant links

- <router-link to="/cheatsheet/functions">Cheatsheet: Functions</router-link>
- <router-link to="/cheatsheet/dictionaries">Cheatsheet: Dictionaries</router-link>
- <router-link to="/cheatsheet/dataclasses">Cheatsheet: Dataclasses</router-link>
