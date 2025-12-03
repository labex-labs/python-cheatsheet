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

```output
'table'
```

```python
furniture[1]
```

```output
'chair'
```

```python
furniture[2]
```

```output
'rack'
```

```python
furniture[3]
```

```output
'shelf'
```

## Negative indexes

```python
# Negative index: access elements from the end of the list
furniture = ['table', 'chair', 'rack', 'shelf']

furniture[-1]  # Returns last element: 'shelf'
```

```output
'shelf'
```

```python
furniture[-3]
```

```output
'chair'
```

```python
f'The {furniture[-1]} is bigger than the {furniture[-3]}'
```

```output
'The shelf is bigger than the chair'
```

<BaseQuiz id="cheatsheet-lists-and-tuples-1" correct="B">
<template #question>
What does <code>furniture[-1]</code> return if <code>furniture = ['table', 'chair', 'rack', 'shelf']</code>?
</template>

<BaseQuizOption value="A">A. <code>'table'</code></BaseQuizOption>
<BaseQuizOption value="B" correct>B. <code>'shelf'</code></BaseQuizOption>
<BaseQuizOption value="C">C. <code>['shelf']</code></BaseQuizOption>
<BaseQuizOption value="D">D. <code>IndexError</code></BaseQuizOption>
<BaseQuizAnswer>Negative indices access elements from the end of the list. <code>-1</code> refers to the last element, <code>-2</code> to the second-to-last, and so on.</BaseQuizAnswer>
</BaseQuiz>

## Getting sublists with Slices

```python
# Slicing: get sublist using [start:end] syntax (end is exclusive)
furniture = ['table', 'chair', 'rack', 'shelf']

furniture[0:4]  # Returns elements from index 0 to 3 (4 excluded)
```

```output
['table', 'chair', 'rack', 'shelf']
```

```python
furniture[1:3]
```

```output
['chair', 'rack']
```

```python
furniture[0:-1]
```

```output
['table', 'chair', 'rack']
```

```python
# Slice from beginning: omit start index (defaults to 0)
furniture[:2]  # Returns first two elements
```

```output
['table', 'chair']
```

```python
# Slice to end: omit end index (defaults to end of list)
furniture[1:]  # Returns all elements from index 1 to end
```

```output
['chair', 'rack', 'shelf']
```

```python
furniture[:]
```

```output
['table', 'chair', 'rack', 'shelf']
```

Slicing the complete list will perform a copy:

```python
# Slicing creates a copy: [:] creates a shallow copy of the list
spam = ['cat', 'bat', 'rat', 'elephant']
spam2 = spam[:]  # Create a copy, not a reference
spam2
```

```output
['cat', 'bat', 'rat', 'elephant']
```

```python
spam.append('dog')
spam
```

```output
['cat', 'bat', 'rat', 'elephant', 'dog']
```

```python
spam2
```

```output
['cat', 'bat', 'rat', 'elephant']
```

<BaseQuiz id="cheatsheet-lists-and-tuples-2" correct="C">
<template #question>
What does <code>spam[:]</code> create when <code>spam</code> is a list?
</template>

<BaseQuizOption value="A">A. A reference to the same list</BaseQuizOption>
<BaseQuizOption value="B">B. An empty list</BaseQuizOption>
<BaseQuizOption value="C" correct>C. A shallow copy of the list</BaseQuizOption>
<BaseQuizOption value="D">D. A reversed list</BaseQuizOption>
<BaseQuizAnswer>Slicing the complete list with <code>[:]</code> creates a shallow copy. Modifying the copy won't affect the original list.</BaseQuizAnswer>
</BaseQuiz>

## Getting a list length with len()

```python
# len() returns the number of items in a list
furniture = ['table', 'chair', 'rack', 'shelf']
len(furniture)  # Returns 4
```

```output
4
```

## Changing values with indexes

```python
# Modify list elements by assigning new values to indexes
furniture = ['table', 'chair', 'rack', 'shelf']

furniture[0] = 'desk'  # Replace first element
furniture
```

```output
['desk', 'chair', 'rack', 'shelf']
```

```python
furniture[2] = furniture[1]
furniture
```

```output
['desk', 'chair', 'chair', 'shelf']
```

```python
furniture[-1] = 'bed'
furniture
```

```output
['desk', 'chair', 'chair', 'bed']
```

## Concatenation and Replication

```python
# List concatenation: combine two lists using + operator
[1, 2, 3] + ['A', 'B', 'C']  # Returns [1, 2, 3, 'A', 'B', 'C']
```

```output
[1, 2, 3, 'A', 'B', 'C']
```

```python
# List replication: repeat list multiple times using * operator
['X', 'Y', 'Z'] * 3  # Returns ['X', 'Y', 'Z', 'X', 'Y', 'Z', 'X', 'Y', 'Z']
```

```output
['X', 'Y', 'Z', 'X', 'Y', 'Z', 'X', 'Y', 'Z']
```

```python
my_list = [1, 2, 3]
my_list = my_list + ['A', 'B', 'C']
my_list
```

```output
[1, 2, 3, 'A', 'B', 'C']
```

## Using for loops with Lists

```python
# Iterate over list elements using for loop
furniture = ['table', 'chair', 'rack', 'shelf']

for item in furniture:  # Loop through each item
    print(item)
```

```output
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

```output
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

```output
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

```output
True
```

```python
'bed' in ['table', 'chair', 'rack', 'shelf']
```

```output
False
```

```python
furniture = ['table', 'chair', 'rack', 'shelf']
'bed' not in furniture
```

```output
True
```

```python
'rack' not in furniture
```

```output
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

```output
'table'
```

```python
chair
```

```output
'chair'
```

```python
rack
```

```output
'rack'
```

```python
shelf
```

```output
'shelf'
```

The multiple assignment trick can also be used to swap the values in two variables:

```python
a, b = 'table', 'chair'
a, b = b, a
print(a)
```

```output
chair
```

```python
print(b)
```

```output
table
```

## The index Method

The `index` method allows you to find the index of a value by passing its name:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
furniture.index('chair')
```

```output
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

```output
['table', 'chair', 'rack', 'shelf', 'bed']
```

<BaseQuiz id="cheatsheet-lists-and-tuples-3" correct="A">
<template #question>
What does the <code>append()</code> method do to a list?
</template>

<BaseQuizOption value="A" correct>A. Adds an element to the end of the list</BaseQuizOption>
<BaseQuizOption value="B">B. Adds an element to the beginning of the list</BaseQuizOption>
<BaseQuizOption value="C">C. Replaces the last element</BaseQuizOption>
<BaseQuizOption value="D">D. Removes the last element</BaseQuizOption>
<BaseQuizAnswer>The <code>append()</code> method adds a single element to the end of a list. To add an element at a specific position, use <code>insert()</code>.</BaseQuizAnswer>
</BaseQuiz>

### insert()

`insert` adds an element to a `list` at a given position:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
furniture.insert(1, 'bed')
furniture
```

```output
['table', 'bed', 'chair', 'rack', 'shelf']
```

## Removing Values

### del

`del` removes an item using the index:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
del furniture[2]
furniture
```

```output
['table', 'chair', 'shelf']
```

```python
del furniture[2]
furniture
```

```output
['table', 'chair']
```

### remove()

`remove` removes an item with using actual value of it:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
furniture.remove('chair')
furniture
```

```output
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

```output
'elephant'
```

```python
animals
```

```output
['cat', 'bat', 'rat']
```

```python
animals.pop(0)
```

```output
'cat'
```

```python
animals
```

```output
['bat', 'rat']
```

<BaseQuiz id="cheatsheet-lists-and-tuples-4" correct="B">
<template #question>
What does <code>pop()</code> do when called on a list?
</template>

<BaseQuizOption value="A">A. Only removes the last item</BaseQuizOption>
<BaseQuizOption value="B" correct>B. Removes and returns an item (last item by default, or specified index)</BaseQuizOption>
<BaseQuizOption value="C">C. Only returns the last item without removing it</BaseQuizOption>
<BaseQuizOption value="D">D. Removes all items from the list</BaseQuizOption>
<BaseQuizAnswer>The <code>pop()</code> method removes and returns an item. By default it removes the last item, but you can pass an index to remove a specific item.</BaseQuizAnswer>
</BaseQuiz>

## Sorting values with sort()

```python
numbers = [2, 5, 3.14, 1, -7]
numbers.sort()
numbers
```

```output
[-7, 1, 2, 3.14, 5]
```

```python
furniture = ['table', 'chair', 'rack', 'shelf']
furniture.sort()
furniture
```

```output
['chair', 'rack', 'shelf', 'table']
```

You can also pass `True` for the `reverse` keyword argument to have `sort()` sort the values in reverse order:

```python
furniture.sort(reverse=True)
furniture
```

```output
['table', 'shelf', 'rack', 'chair']
```

If you need to sort the values in regular alphabetical order, pass `str.lower` for the key keyword argument in the sort() method call:

```python
letters = ['a', 'z', 'A', 'Z']
letters.sort(key=str.lower)
letters
```

```output
['a', 'A', 'z', 'Z']
```

You can use the built-in function `sorted` to return a new list:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
sorted(furniture)
```

```output
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

```output
'table'
```

```python
furniture[1:3]
```

```output
('chair', 'rack')
```

```python
len(furniture)
```

```output
4
```

The main way that tuples are different from lists is that tuples, like strings, are immutable.

## Converting between list() and tuple()

```python
tuple(['cat', 'dog', 5])
```

```output
('cat', 'dog', 5)
```

```python
list(('cat', 'dog', 5))
```

```output
['cat', 'dog', 5]
```

```python
list('hello')
```

```output
['h', 'e', 'l', 'l', 'o']
```

<BaseQuiz id="cheatsheet-lists-and-tuples-5" correct="C">
<template #question>
What is the main difference between lists and tuples in Python?
</template>

<BaseQuizOption value="A">A. Lists can only contain numbers, tuples can contain anything</BaseQuizOption>
<BaseQuizOption value="B">B. Tuples are faster to create</BaseQuizOption>
<BaseQuizOption value="C" correct>C. Lists are mutable (can be changed), tuples are immutable (cannot be changed)</BaseQuizOption>
<BaseQuizOption value="D">D. Lists use square brackets, tuples use curly braces</BaseQuizOption>
<BaseQuizAnswer>Lists are mutable, meaning you can modify them after creation. Tuples are immutable, meaning once created, they cannot be changed. Both can contain any type of data.</BaseQuizAnswer>
</BaseQuiz>

## Relevant links

- <router-link to="/blog/python-data-types">Python Data Types: A Visual Guide for Beginners</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Python Comprehensions Step-by-Step</router-link>
- <router-link to="/cheatsheet/comprehensions">Python Comprehensions</router-link>
- <router-link to="/modules/itertools-module">The itertools Module</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/len">len()</router-link>
