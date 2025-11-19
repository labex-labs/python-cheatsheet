---
title: Python Sets - Python Cheatsheet
description: Python comes equipped with several built-in data types to help us organize our data. These structures include lists, dictionaries, tuples and sets.
labUrl: https://labex.io/labs/python-python-sets-633665?course=python-cheatsheet
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Sets
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Python comes equipped with several built-in data types to help us organize our data. These structures include lists, dictionaries, tuples and **sets**.

<base-disclaimer>
  <base-disclaimer-title>
    From the Python 3 <a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#sets">documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    A set is an unordered collection with no duplicate elements. Basic uses include membership testing and eliminating duplicate entries.
  </base-disclaimer-content>
</base-disclaimer>

Read <router-link to="/blog/python-sets-what-why-how">Python Sets: What, Why and How</router-link> for a more in-deep reference.

## Initializing a set

There are two ways to create sets: using curly braces `{}` and the built-in function `set()`

<base-warning>
  <base-warning-title>
    Empty Sets
  </base-warning-title>
  <base-warning-content>
    When creating set, be sure to not use empty curly braces <code>{}</code> or you will get an empty dictionary instead.
  </base-warning-content>
</base-warning>

```python
# Create set using curly braces or set() function
s = {1, 2, 3}  # Using curly braces
s = set([1, 2, 3])  # Using set() constructor

# Warning: empty {} creates a dictionary, not a set
s = {}  # this will create a dictionary instead of a set
type(s)  # Returns <class 'dict'>
```

```output
<class 'dict'>
```

## Unordered collections of unique elements

A set automatically removes all the duplicate values.

```python
# Sets automatically remove duplicates
s = {1, 2, 3, 2, 3, 4}  # Duplicates are removed
s  # Returns {1, 2, 3, 4}
```

```output
{1, 2, 3, 4}
```

And as an unordered data type, they can't be indexed.

```python
s = {1, 2, 3}
s[0]
```

```output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'set' object does not support indexing
```

## set add and update

Using the `add()` method we can add a single element to the set.

```python
# add() method: add a single element to the set
s = {1, 2, 3}
s.add(4)  # Add element 4
s
```

```output
{1, 2, 3, 4}
```

And with `update()`, multiple ones:

```python
# update() method: add multiple elements from an iterable
s = {1, 2, 3}
s.update([2, 3, 4, 5, 6])  # Add multiple elements (duplicates ignored)
s
```

```output
{1, 2, 3, 4, 5, 6}
```

## set remove and discard

Both methods will remove an element from the set, but `remove()` will raise a `key error` if the value doesn't exist.

```python
# remove() method: remove element, raises KeyError if not found
s = {1, 2, 3}
s.remove(3)  # Remove element 3
s
```

```output
{1, 2}
```

```python
s.remove(3)
```

```output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 3
```

`discard()` won't raise any errors.

```python
# discard() method: remove element, no error if not found
s = {1, 2, 3}
s.discard(3)  # Remove element 3 (safe, no error if missing)
s
```

```output
{1, 2}
```

```python
s.discard(3)
```

## set union

`union()` or `|` will create a new set with all the elements from the sets provided.

```python
# union(): combine all elements from multiple sets (no duplicates)
s1 = {1, 2, 3}
s2 = {3, 4, 5}
s1.union(s2)  # or 's1 | s2' - returns {1, 2, 3, 4, 5}
```

```output
{1, 2, 3, 4, 5}
```

## set intersection

`intersection()` or `&` will return a set with only the elements that are common to all of them.

```python
# intersection(): return elements common to all sets
s1 = {1, 2, 3}
s2 = {2, 3, 4}
s3 = {3, 4, 5}
s1.intersection(s2, s3)  # or 's1 & s2 & s3' - returns {3}
```

```output
{3}
```

## set difference

`difference()` or `-` will return only the elements that are unique to the first set (invoked set).

```python
# difference(): return elements in first set but not in others
s1 = {1, 2, 3}
s2 = {2, 3, 4}

s1.difference(s2)  # or 's1 - s2' - returns {1}
```

```output
{1}
```

```python
s2.difference(s1) # or 's2 - s1'
```

```output
{4}
```

## set symmetric_difference

`symmetric_difference()` or `^` will return all the elements that are not common between them.

```python
# symmetric_difference(): return elements in either set, but not both
s1 = {1, 2, 3}
s2 = {2, 3, 4}
s1.symmetric_difference(s2)  # or 's1 ^ s2' - returns {1, 4}
```

```output
{1, 4}
```

## Relevant links

- <router-link to="/blog/python-data-types">Python Data Types Blog Post</router-link>
- <router-link to="/blog/python-sets-what-why-how">Python Sets: What, Why and How</router-link>
- <router-link to="/cheatsheet/dictionaries">Python Dictionaries</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Python Lists and Tuples</router-link>
