---
title: Python re Module - Python Cheatsheet
description: The re module lets you search, match, split, and replace text using regular expressions.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python re Module
</base-title>

The `re` module lets you search, match, split, and replace text using regular expressions.

```python
import re
```

Regular expressions are patterns for text. Use raw strings, such as `r'\d+'`, so backslashes are passed to the regular expression engine correctly.

## search()

`search` finds the first match anywhere in the string.

```python
import re

match = re.search(r'\d+', 'Order #12345 shipped')
print(match.group())
```

```output
12345
```

## findall()

`findall` returns all non-overlapping matches.

```python
import re

emails = re.findall(r'[\w.-]+@[\w.-]+', 'a@example.com b@example.com')
print(emails)
```

```output
['a@example.com', 'b@example.com']
```

## sub()

`sub` replaces matching text.

```python
import re

message = re.sub(r'\s+', ' ', 'too    many   spaces')
print(message)
```

```output
too many spaces
```

## Compiling patterns

Compiled patterns are useful when you reuse the same expression.

```python
import re

pattern = re.compile(r'^python', re.IGNORECASE)
print(bool(pattern.match('Python Cheatsheet')))
```

```output
True
```

## Capturing groups

Parentheses capture part of a match.

```python
import re

match = re.search(r'(\w+)=(\d+)', 'count=42')
print(match.group(1))
print(match.group(2))
```

```output
count
42
```

## Handling no match

Always check whether a match exists before calling `group()`.

```python
import re

match = re.search(r'\d+', 'no number here')
if match:
    print(match.group())
else:
    print('No match')
```

```output
No match
```

## Relevant links

- <router-link to="/cheatsheet/regular-expressions">Cheatsheet: Regular Expressions</router-link>
- <router-link to="/cheatsheet/manipulating-strings">Cheatsheet: Manipulating Strings</router-link>
- <router-link to="/builtin/str">str()</router-link>
