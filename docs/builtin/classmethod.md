---
title: Python classmethod() built-in function - Python Cheatsheet
description: Transform a method into a class method. A class method receives the class as an implicit first argument, just like an instance method receives the instance.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python classmethod() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#classmethod">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Transform a method into a class method. A class method receives the class as an implicit first argument, just like an instance method receives the instance.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

A `classmethod` is a method that is bound to the class and not the instance of the class. It takes the class itself as its first argument, conventionally named `cls`. This is in contrast to a regular instance method, which takes the instance as its first argument (`self`).

They are often used for factory methods that create instances of the class in a specific way.

## Example

Here's a common use case: creating a factory method that can instantiate the class from a different data format, like a dictionary.

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    @classmethod
    def from_dict(cls, data):
        # This is a factory method that creates a Person instance from a dictionary
        return cls(data['name'], data['age'])

    def display(self):
        print(f"Name: {self.name}, Age: {self.age}")

# Data for a new person
person_data = {'name': 'John', 'age': 30}

# Create a Person instance using the class method
p = Person.from_dict(person_data)

p.display()
```

Output:

```plaintext
Name: John, Age: 30
```

## Relevant links

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: OOP Basics</router-link>
- <router-link to="/cheatsheet/decorators">Cheatsheet: Decorators</router-link>
- <router-link to="/cheatsheet/functions">Cheatsheet: Functions</router-link>
- <router-link to="/builtin/staticmethod">staticmethod()</router-link>
- <router-link to="/builtin/property">property()</router-link>
- <router-link to="/builtin/object">object()</router-link>
