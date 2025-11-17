---
title: Python Lists and Tuples - Python Cheatsheet
description: In python, Lists are are one of the 4 data types in Python used to store collections of data.
labUrl: https://labex.io/labs/python-python-lists-and-tuples-633660?course=python-cheatsheet
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Lists
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Lists are one of the 4 data types in Python used to store collections of data.

```python
# List: ordered collection of items enclosed in square brackets
['John', 'Peter', 'Debora', 'Charles']
```

## Getting values with indexes

```python
# Access list elements using index (0-based, first element is index 0)
furniture = ['table', 'chair', 'rack', 'shelf']

furniture[0]  # Returns first element: 'table'
```

Output:

```plaintext
'table'
```

```python
furniture[1]
```

Output:

```plaintext
'chair'
```

```python
furniture[2]
```

Output:

```plaintext
'rack'
```

```python
furniture[3]
```

Output:

```plaintext
'shelf'
```

## Negative indexes

```python
# Negative index: access elements from the end of the list
furniture = ['table', 'chair', 'rack', 'shelf']

furniture[-1]  # Returns last element: 'shelf'
```

Output:

```plaintext
'shelf'
```

```python
furniture[-3]
```

Output:

```plaintext
'chair'
```

```python
f'The {furniture[-1]} is bigger than the {furniture[-3]}'
```

Output:

```plaintext
'The shelf is bigger than the chair'
```

## Getting sublists with Slices

```python
# Slicing: get sublist using [start:end] syntax (end is exclusive)
furniture = ['table', 'chair', 'rack', 'shelf']

furniture[0:4]  # Returns elements from index 0 to 3 (4 excluded)
```

Output:

```plaintext
['table', 'chair', 'rack', 'shelf']
```

```python
furniture[1:3]
```

Output:

```plaintext
['chair', 'rack']
```

```python
furniture[0:-1]
```

Output:

```plaintext
['table', 'chair', 'rack']
```

```python
# Slice from beginning: omit start index (defaults to 0)
furniture[:2]  # Returns first two elements
```

Output:

```plaintext
['table', 'chair']
```

```python
# Slice to end: omit end index (defaults to end of list)
furniture[1:]  # Returns all elements from index 1 to end
```

Output:

```plaintext
['chair', 'rack', 'shelf']
```

```python
furniture[:]
```

Output:

```plaintext
['table', 'chair', 'rack', 'shelf']
```

Slicing the complete list will perform a copy:

```python
# Slicing creates a copy: [:] creates a shallow copy of the list
spam = ['cat', 'bat', 'rat', 'elephant']
spam2 = spam[:]  # Create a copy, not a reference
spam2
```

Output:

```plaintext
['cat', 'bat', 'rat', 'elephant']
```

```python
spam.append('dog')
spam
```

Output:

```plaintext
['cat', 'bat', 'rat', 'elephant', 'dog']
```

```python
spam2
```

Output:

```plaintext
['cat', 'bat', 'rat', 'elephant']
```

## Getting a list length with len()

```python
# len() returns the number of items in a list
furniture = ['table', 'chair', 'rack', 'shelf']
len(furniture)  # Returns 4
```

Output:

```plaintext
4
```

## Changing values with indexes

```python
# Modify list elements by assigning new values to indexes
furniture = ['table', 'chair', 'rack', 'shelf']

furniture[0] = 'desk'  # Replace first element
furniture
```

Output:

```plaintext
['desk', 'chair', 'rack', 'shelf']
```

```python
furniture[2] = furniture[1]
furniture
```

Output:

```plaintext
['desk', 'chair', 'chair', 'shelf']
```

```python
furniture[-1] = 'bed'
furniture
```

Output:

```plaintext
['desk', 'chair', 'chair', 'bed']
```

## Concatenation and Replication

```python
# List concatenation: combine two lists using + operator
[1, 2, 3] + ['A', 'B', 'C']  # Returns [1, 2, 3, 'A', 'B', 'C']
```

Output:

```plaintext
[1, 2, 3, 'A', 'B', 'C']
```

```python
# List replication: repeat list multiple times using * operator
['X', 'Y', 'Z'] * 3  # Returns ['X', 'Y', 'Z', 'X', 'Y', 'Z', 'X', 'Y', 'Z']
```

Output:

```plaintext
['X', 'Y', 'Z', 'X', 'Y', 'Z', 'X', 'Y', 'Z']
```

```python
my_list = [1, 2, 3]
my_list = my_list + ['A', 'B', 'C']
my_list
```

Output:

```plaintext
[1, 2, 3, 'A', 'B', 'C']
```

## Using for loops with Lists

```python
# Iterate over list elements using for loop
furniture = ['table', 'chair', 'rack', 'shelf']

for item in furniture:  # Loop through each item
    print(item)
```

Output:

```plaintext
table
chair
rack
shelf
```

## Getting the index in a loop with enumerate()

```python
# enumerate() returns both index and value in a loop
furniture = ['table', 'chair', 'rack', 'shelf']

for index, item in enumerate(furniture):  # Get index and item together
    print(f'index: {index} - item: {item}')
```

Output:

```plaintext
index: 0 - item: table
index: 1 - item: chair
index: 2 - item: rack
index: 3 - item: shelf
```

## Loop in Multiple Lists with zip()

```python
# zip() combines multiple lists element-wise in a loop
furniture = ['table', 'chair', 'rack', 'shelf']
price = [100, 50, 80, 40]

for item, amount in zip(furniture, price):  # Pair elements from both lists
    print(f'The {item} costs ${amount}')
```

Output:

```plaintext
The table costs $100
The chair costs $50
The rack costs $80
The shelf costs $40
```

## The in and not in operators

```python
# in operator: check if an item exists in a list
'rack' in ['table', 'chair', 'rack', 'shelf']  # Returns True
```

Output:

```plaintext
True
```

```python
'bed' in ['table', 'chair', 'rack', 'shelf']
```

Output:

```plaintext
False
```

```python
furniture = ['table', 'chair', 'rack', 'shelf']
'bed' not in furniture
```

Output:

```plaintext
True
```

```python
'rack' not in furniture
```

Output:

```plaintext
False
```

## The Multiple Assignment Trick

The multiple assignment trick is a shortcut that lets you assign multiple variables with the values in a list in one line of code. So instead of doing this:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
table = furniture[0]
chair = furniture[1]
rack = furniture[2]
shelf = furniture[3]
```

You could type this line of code:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
table, chair, rack, shelf = furniture

table
```

Output:

```plaintext
'table'
```

```python
chair
```

Output:

```plaintext
'chair'
```

```python
rack
```

Output:

```plaintext
'rack'
```

```python
shelf
```

Output:

```plaintext
'shelf'
```

The multiple assignment trick can also be used to swap the values in two variables:

```python
a, b = 'table', 'chair'
a, b = b, a
print(a)
```

Output:

```plaintext
chair
```

```python
print(b)
```

Output:

```plaintext
table
```

## The index Method

The `index` method allows you to find the index of a value by passing its name:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
furniture.index('chair')
```

Output:

```plaintext
1
```

## Adding Values

### append()

`append` adds an element to the end of a `list`:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
furniture.append('bed')
furniture
```

Output:

```plaintext
['table', 'chair', 'rack', 'shelf', 'bed']
```

### insert()

`insert` adds an element to a `list` at a given position:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
furniture.insert(1, 'bed')
furniture
```

Output:

```plaintext
['table', 'bed', 'chair', 'rack', 'shelf']
```

## Removing Values

### del()

`del` removes an item using the index:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
del furniture[2]
furniture
```

Output:

```plaintext
['table', 'chair', 'shelf']
```

```python
del furniture[2]
furniture
```

Output:

```plaintext
['table', 'chair']
```

### remove()

`remove` removes an item with using actual value of it:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
furniture.remove('chair')
furniture
```

Output:

```plaintext
['table', 'rack', 'shelf']
```

<base-warning>
  <base-warning-title>
    Removing repeated items
  </base-warning-title>
  <base-warning-content>
    If the value appears multiple times in the list, only the first instance of the value will be removed.
  </base-warning-content>
</base-warning>

### pop()

By default, `pop` will remove and return the last item of the list. You can also pass the index of the element as an optional parameter:

```python
animals = ['cat', 'bat', 'rat', 'elephant']

animals.pop()
```

Output:

```plaintext
'elephant'
```

```python
animals
```

Output:

```plaintext
['cat', 'bat', 'rat']
```

```python
animals.pop(0)
```

Output:

```plaintext
'cat'
```

```python
animals
```

Output:

```plaintext
['bat', 'rat']
```

## Sorting values with sort()

```python
numbers = [2, 5, 3.14, 1, -7]
numbers.sort()
numbers
```

Output:

```plaintext
[-7, 1, 2, 3.14, 5]
```

```python
furniture = ['table', 'chair', 'rack', 'shelf']
furniture.sort()
furniture
```

Output:

```plaintext
['chair', 'rack', 'shelf', 'table']
```

You can also pass `True` for the `reverse` keyword argument to have `sort()` sort the values in reverse order:

```python
furniture.sort(reverse=True)
furniture
```

Output:

```plaintext
['table', 'shelf', 'rack', 'chair']
```

If you need to sort the values in regular alphabetical order, pass `str.lower` for the key keyword argument in the sort() method call:

```python
letters = ['a', 'z', 'A', 'Z']
letters.sort(key=str.lower)
letters
```

Output:

```plaintext
['a', 'A', 'z', 'Z']
```

You can use the built-in function `sorted` to return a new list:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
sorted(furniture)
```

Output:

```plaintext
['chair', 'rack', 'shelf', 'table']
```

## The Tuple data type

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://stackoverflow.com/questions/1708510/list-vs-tuple-when-to-use-each">Tuples vs Lists</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    The key difference between tuples and lists is that, while <code>tuples</code> are <i>immutable</i> objects, <code>lists</code> are <i>mutable</i>. This means that tuples cannot be changed while the lists can be modified. Tuples are more memory efficient than the lists.
  </base-disclaimer-content>
</base-disclaimer>

```python
furniture = ('table', 'chair', 'rack', 'shelf')

furniture[0]
```

Output:

```plaintext
'table'
```

```python
furniture[1:3]
```

Output:

```plaintext
('chair', 'rack')
```

```python
len(furniture)
```

Output:

```plaintext
4
```

The main way that tuples are different from lists is that tuples, like strings, are immutable.

## Converting between list() and tuple()

```python
tuple(['cat', 'dog', 5])
```

Output:

```plaintext
('cat', 'dog', 5)
```

```python
list(('cat', 'dog', 5))
```

Output:

```plaintext
['cat', 'dog', 5]
```

```python
list('hello')
```

Output:

```plaintext
['h', 'e', 'l', 'l', 'o']
```

## Relevant links

- <router-link to="/blog/python-data-types">Python Data Types: A Visual Guide for Beginners</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Python Comprehensions Step-by-Step</router-link>
- <router-link to="/cheatsheet/comprehensions">Python Comprehensions</router-link>
- <router-link to="/modules/itertools-module">The itertools Module</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/len">len()</router-link>
