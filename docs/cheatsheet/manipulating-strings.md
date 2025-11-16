---
title: Manipulating strings - Python Cheatsheet
description: An escape character is created by typing a backslash \ followed by the character you want to insert.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Manipulating Strings
</base-title>

## Escape characters

An escape character is created by typing a backslash `\` followed by the character you want to insert.

| Escape character | Prints as            |
| ---------------- | -------------------- |
| `\'`             | Single quote         |
| `\"`             | Double quote         |
| `\t`             | Tab                  |
| `\n`             | Newline (line break) |
| `\\`             | Backslash            |
| `\b`             | Backspace            |
| `\ooo`           | Octal value          |
| `\r`             | Carriage Return      |

```python
# Escape characters: use backslash to insert special characters
# \n = newline, \' = single quote
print("Hello there!\nHow are you?\nI\'m doing fine.")
```

Output:

```
Hello there!
How are you?
I'm doing fine.
```

## Raw strings

A raw string entirely ignores all escape characters and prints any backslash that appears in the string.

```python
# Raw string (r prefix): treats backslashes as literal characters
print(r"Hello there!\nHow are you?\nI\'m doing fine.")  # \n printed literally
```

Output:

```
Hello there!\nHow are you?\nI\'m doing fine.
```

Raw strings are mostly used for <router-link to="/cheatsheet/regular-expressions">regular expression</router-link> definition.

## Multiline Strings

```python
print(
"""Dear Alice,

Eve's cat has been arrested for catnapping,
cat burglary, and extortion.

Sincerely,
Bob"""
)
```

Output:

```
Dear Alice,

Eve's cat has been arrested for catnapping,
cat burglary, and extortion.

Sincerely,
Bob
```

## Indexing and Slicing strings

    H   e   l   l   o       w   o   r   l   d    !
    0   1   2   3   4   5   6   7   8   9   10   11

### Indexing

```python
# String indexing: access characters by position (0-based)
spam = 'Hello world!'

spam[0]  # Returns first character: 'H'
```

Output:

```
'H'
```

```python
spam[4]
```

Output:

```
'o'
```

```python
spam[-1]
```

Output:

```
'!'
```

### Slicing

```python
# String slicing: extract substring using [start:end] syntax
spam = 'Hello world!'

spam[0:5]  # Returns characters from index 0 to 4: 'Hello'
```

Output:

```
'Hello'
```

```python
spam[:5]
```

Output:

```
'Hello'
```

```python
spam[6:]
```

Output:

```
'world!'
```

```python
spam[6:-1]
```

Output:

```
'world'
```

```python
spam[:-1]
```

Output:

```
'Hello world'
```

```python
spam[::-1]
```

Output:

```
'!dlrow olleH'
```

```python
fizz = spam[0:5]
fizz
```

Output:

```
'Hello'
```

## The in and not in operators

```python
'Hello' in 'Hello World'
```

Output:

```
True
```

```python
'Hello' in 'Hello'
```

Output:

```
True
```

```python
'HELLO' in 'Hello World'
```

Output:

```
False
```

```python
'' in 'spam'
```

Output:

```
True
```

```python
'cats' not in 'cats and dogs'
```

Output:

```
False
```

## upper(), lower() and title()

Transforms a string to upper, lower and title case:

```python
greet = 'Hello world!'
greet.upper()
```

Output:

```
'HELLO WORLD!'
```

```python
greet.lower()
```

Output:

```
'hello world!'
```

```python
greet.title()
```

Output:

```
'Hello World!'
```

## isupper() and islower() methods

Returns `True` or `False` after evaluating if a string is in upper or lower case:

```python
spam = 'Hello world!'
spam.islower()
```

Output:

```
False
```

```python
spam.isupper()
```

Output:

```
False
```

```python
'HELLO'.isupper()
```

Output:

```
True
```

```python
'abc12345'.islower()
```

Output:

```
True
```

```python
'12345'.islower()
```

Output:

```
False
```

```python
'12345'.isupper()
```

Output:

```
False
```

## The isX string methods

| Method      | Description                                                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------ |
| isalpha()   | returns `True` if the string consists only of letters.                                                                         |
| isalnum()   | returns `True` if the string consists only of letters and numbers.                                                             |
| isdecimal() | returns `True` if the string consists only of numbers.                                                                         |
| isspace()   | returns `True` if the string consists only of spaces, tabs, and new-lines.                                                     |
| istitle()   | returns `True` if the string consists only of words that begin with an uppercase letter followed by only lowercase characters. |

## startswith() and endswith()

```python
'Hello world!'.startswith('Hello')
```

Output:

```
True
```

```python
'Hello world!'.endswith('world!')
```

Output:

```
True
```

```python
'abc123'.startswith('abcdef')
```

Output:

```
False
```

```python
'abc123'.endswith('12')
```

Output:

```
False
```

```python
'Hello world!'.startswith('Hello world!')
```

Output:

```
True
```

```python
'Hello world!'.endswith('Hello world!')
```

Output:

```
True
```

## join() and split()

### join()

The `join()` method takes all the items in an iterable, like a <router-link to="/cheatsheet/lists-and-tuples">list</router-link>, <router-link to="/cheatsheet/dictionaries">dictionary</router-link>, <router-link to="/cheatsheet/lists-and-tuples#the-tuple-data-type">tuple</router-link> or <router-link to="/cheatsheet/sets">set</router-link>, and joins them into a string. You can also specify a separator.

```python
''.join(['My', 'name', 'is', 'Simon'])
```

Output:

```
'MynameisSimon'
```

```python
', '.join(['cats', 'rats', 'bats'])
```

Output:

```
'cats, rats, bats'
```

```python
' '.join(['My', 'name', 'is', 'Simon'])
```

Output:

```
'My name is Simon'
```

```python
'ABC'.join(['My', 'name', 'is', 'Simon'])
```

Output:

```
'MyABCnameABCisABCSimon'
```

### split()

The `split()` method splits a `string` into a `list`. By default, it will use whitespace to separate the items, but you can also set another character of choice:

```python
'My name is Simon'.split()
```

Output:

```
['My', 'name', 'is', 'Simon']
```

```python
'MyABCnameABCisABCSimon'.split('ABC')
```

Output:

```
['My', 'name', 'is', 'Simon']
```

```python
'My name is Simon'.split('m')
```

Output:

```
['My na', 'e is Si', 'on']
```

```python
' My  name is  Simon'.split()
```

Output:

```
['My', 'name', 'is', 'Simon']
```

```python
' My  name is  Simon'.split(' ')
```

Output:

```
['', 'My', '', 'name', 'is', '', 'Simon']
```

## Justifying text with rjust(), ljust() and center()

```python
'Hello'.rjust(10)
```

Output:

```
'     Hello'
```

```python
'Hello'.rjust(20)
```

Output:

```
'               Hello'
```

```python
'Hello World'.rjust(20)
```

Output:

```
'         Hello World'
```

```python
'Hello'.ljust(10)
```

Output:

```
'Hello     '
```

```python
'Hello'.center(20)
```

Output:

```
'       Hello       '
```

An optional second argument to `rjust()` and `ljust()` will specify a fill character apart from a space character:

```python
'Hello'.rjust(20, '*')
```

Output:

```
'***************Hello'
```

```python
'Hello'.ljust(20, '-')
```

Output:

```
'Hello---------------'
```

```python
'Hello'.center(20, '=')
```

Output:

```
'=======Hello========'
```

## Removing whitespace with strip(), rstrip(), and lstrip()

```python
spam = '    Hello World     '
spam.strip()
```

Output:

```
'Hello World'
```

```python
spam.lstrip()
```

Output:

```
'Hello World     '
```

```python
spam.rstrip()
```

Output:

```
'    Hello World'
```

```python
spam = 'SpamSpamBaconSpamEggsSpamSpam'
spam.strip('ampS')
```

Output:

```
'BaconSpamEggs'
```

## The Count Method

Counts the number of occurrences of a given character or substring in the string it is applied to. Can be optionally provided start and end index.

```python
sentence = 'one sheep two sheep three sheep four'
sentence.count('sheep')
```

Output:

```
3
```

```python
sentence.count('e')
```

Output:

```
9
```

```python
# returns count of e after 'one sh' i.e 6 chars since beginning of string
sentence.count('e', 6)
```

Output:

```
8
```

```python
sentence.count('e', 7)
```

Output:

```
7
```

## Replace Method

Replaces all occurences of a given substring with another substring. Can be optionally provided a third argument to limit the number of replacements. Returns a new string.

```python
text = "Hello, world!"
text.replace("world", "planet")
```

Output:

```
'Hello, planet!'
```

```python
fruits = "apple, banana, cherry, apple"
fruits.replace("apple", "orange", 1)
```

Output:

```
'orange, banana, cherry, apple'
```

```python
sentence = "I like apples, Apples are my favorite fruit"
sentence.replace("apples", "oranges")
```

Output:

```
'I like oranges, Apples are my favorite fruit'
```

## Relevant links

- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
- <router-link to="/builtin/input">input()</router-link>
- <router-link to="/cheatsheet/string-formatting">String Formatting</router-link>
- <router-link to="/cheatsheet/regular-expressions">Regular Expressions</router-link>
