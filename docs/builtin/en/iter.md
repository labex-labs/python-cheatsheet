---
title: Python iter() built-in function - Python Cheatsheet
description: Return an iterator object. The first argument is interpreted very differently depending on the presence of the second argument. Without a second argument, object must be a collection object which supports the iterable protocol, or it must support the sequence protocol. If it does not support either of those protocols, TypeError is raised.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python iter() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#iter">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return an iterator object. The first argument is interpreted very differently depending on the presence of the second argument. Without a second argument, object must be a collection object which supports the iterable protocol, or it must support the sequence protocol. If it does not support either of those protocols, TypeError is raised.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `iter()` function returns an iterator object. An iterator is an object that can be iterated (looped) upon. It's what powers `for` loops in Python.

You can use `iter()` to get an iterator from any iterable object, like a list, tuple, or string.

### Examples

**Getting an iterator from a list:**

```python
my_list = [1, 2, 3]
my_iter = iter(my_list)

print(next(my_iter))
print(next(my_iter))
print(next(my_iter))
```

```output
1
2
3
```

```python
i = iter([1, 2, 3])
print(i)
print(i.__next__())
print(i.__next__())
print(i.__next__())
```

```output
<list_iterator object at 0x7f93158badc0>
1
2
3
```

## Relevant links

- <router-link :to="'/builtin/next'">`next()`</router-link>
- <router-link :to="'/cheatsheet/control-flow'">Control Flow</router-link>
- <router-link :to="'/cheatsheet/lists-and-tuples'">Lists and Tuples</router-link>
- <router-link :to="'/builtin/enumerate'">`enumerate()`</router-link>
- <router-link :to="'/builtin/zip'">`zip()`</router-link>
- <router-link :to="'/builtin/map'">`map()`</router-link>
- <router-link :to="'/builtin/filter'">`filter()`</router-link>
