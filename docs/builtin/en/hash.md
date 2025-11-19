---
title: Python hash() built-in function - Python Cheatsheet
description: Return the hash value of the object (if it has one). Hash values are integers. They are used to quickly compare dictionary keys during a dictionary lookup. Numeric values that compare equal have the same hash value (even if they are of different types, as is the case for 1 and 1.0).
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python hash() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#hash">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return the hash value of the object (if it has one). Hash values are integers. They are used to quickly compare dictionary keys during a dictionary lookup. Numeric values that compare equal have the same hash value (even if they are of different types, as is the case for 1 and 1.0).
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `hash()` function returns an integer representing the hash value of an object. This is primarily used by dictionaries to quickly look up keys.

Only "hashable" objects can be passed to `hash()`. An object is hashable if it has a hash value that never changes during its lifetime. All of Python's built-in immutable types (like strings, numbers, and tuples) are hashable, while mutable containers (like lists and dictionaries) are not.

### Examples

```python
# Hash of an integer is the integer itself
print(hash(1))
print(hash(1.0))  # 1 and 1.0 are equal

# Hash of a string (output varies)
print(hash('hello'))

# Hash of a tuple (output varies)
print(hash((1, 2, 3)))

# Trying to hash a list will raise a TypeError
try:
    hash([1, 2, 3])
except TypeError as e:
    print(e)
```

```output
1
1
-1182655621190490452
529344067295497451
unhashable type: 'list'
```

## Relevant links

- <router-link :to="'/cheatsheet/dictionaries'">Dictionaries</router-link>
- <router-link :to="'/builtin/id'">id()</router-link>
- <router-link :to="'/cheatsheet/sets'">Sets</router-link>
- <router-link :to="'/blog/python-sets-what-why-how'">Python Sets: What, Why, and How</router-link>
- <router-link :to="'/builtin/frozenset'">frozenset()</router-link>
- <router-link :to="'/builtin/object'">object()</router-link>
