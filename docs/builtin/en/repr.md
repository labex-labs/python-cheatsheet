---
title: Python repr() built-in function - Python Cheatsheet
description: Return a string containing a printable representation of an object. For many types, this function makes an attempt to return a string that would yield an object with the same value when passed to eval(); otherwise, the representation is a string enclosed in angle brackets that contains the name of the type of the object together with additional information often including the name and address of the object. A class can control what this function returns for its instances by defining a __repr__() method.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python repr() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#repr">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return a string containing a printable representation of an object. For many types, this function makes an attempt to return a string that would yield an object with the same value when passed to eval(); otherwise, the representation is a string enclosed in angle brackets that contains the name of the type of the object together with additional information often including the name and address of the object. A class can control what this function returns for its instances by defining a __repr__() method.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `repr()` function returns a string containing a printable representation of an object. The goal of `repr()` is to be unambiguous. For many types, `repr()` returns a string that can be executed by <router-link to="/builtin/eval">eval()</router-link> to create an identical object.

This is different from <router-link to="/builtin/str">str()</router-link>, which is intended to be human-readable.

### Example

```python
import datetime

# For a string, repr() adds quotes
print(repr("hello"))

# For a datetime object, it's unambiguous
now = datetime.datetime.now()
print(repr(now))

# You can define __repr__ for your own classes
class Person:
    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return f"Person(name='{self.name}')"

p = Person("John")
print(repr(p))
```

```output
'hello'
datetime.datetime(2023, 10, 27, 10, 0, 0, 123456)
Person(name='John')
```

## Relevant links

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: OOP Basics</router-link>
- <router-link to="/cheatsheet/debugging">Cheatsheet: Debugging</router-link>
- <router-link to="/cheatsheet/string-formatting">Cheatsheet: String Formatting</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/ascii">ascii()</router-link>
- <router-link to="/builtin/eval">eval()</router-link>
- <router-link to="/builtin/format">format()</router-link>
