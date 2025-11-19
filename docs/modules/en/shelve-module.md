---
title: Python Shelve Module - Python Cheatsheet
description: A “shelf” is a persistent, dictionary-like object. in a shelf can be essentially arbitrary Python objects — anything that the pickle module can handle.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Shelve Module
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/shelve.html">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   A “shelf” is a persistent, dictionary-like object. The difference with “dbm” databases is that the values (not the keys!) in a shelf can be essentially arbitrary Python objects — anything that the pickle module can handle. This includes most class instances, recursive data types, and objects containing lots of shared sub-objects. The keys are ordinary strings.
  </base-disclaimer-content>
</base-disclaimer>

## Save variables

```python
import shelve

wife = ['Pretty', 'Lovely', 'Nice']
# Open shelf file and save data
with shelve.open('mydata') as shelf_file:
    shelf_file['wife'] = wife
```

## Open and read variables

```python
# Open shelf file and read data
with shelve.open('mydata') as shelf_file:
    print(type(shelf_file))
    # Access stored value by key
    print(shelf_file['wife'])
```

```output
<class 'shelve.DbfilenameShelf'>
['Pretty', 'Lovely', 'Nice']
```

Just like dictionaries, `shelf` values have `keys()` and `values()` methods that will return list-like values of the keys and values in the shelf. Since these methods return list-like values instead of true lists, you should pass them to the `list()` function to get them in list form.

```python
# Access all keys and values in shelf
with shelve.open('mydata') as shelf_file:
    print(list(shelf_file.keys()))
    print(list(shelf_file.values()))
```

```output
['wife']
[['Pretty', 'Lovely', 'Nice']]
```

## Relevant links

- <router-link to="/cheatsheet/reading-and-writing-files">Cheatsheet: Reading and Writing Files</router-link>
- <router-link to="/cheatsheet/dictionaries">Cheatsheet: Dictionaries</router-link>
- <router-link to="/cheatsheet/context-manager">Cheatsheet: Context Managers</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
