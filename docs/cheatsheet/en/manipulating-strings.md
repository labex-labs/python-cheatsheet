---
title: Manipulating strings - Python Cheatsheet
description: An escape character is created by typing a backslash \ followed by the character you want to insert.
labUrl: https://labex.io/labs/python-python-string-manipulation-633668?course=python-cheatsheet
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Manipulating Strings
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

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

```plaintext
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

```plaintext
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

```plaintext
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

```plaintext
'H'
```

```python
spam[4]
```

Output:

```plaintext
'o'
```

```python
spam[-1]
```

Output:

```plaintext
'!'
```

### Slicing

```python
# String slicing: extract substring using [start:end] syntax
spam = 'Hello world!'

spam[0:5]  # Returns characters from index 0 to 4: 'Hello'
```

Output:

```plaintext
'Hello'
```

```python
spam[:5]
```

Output:

```plaintext
'Hello'
```

```python
spam[6:]
```

Output:

```plaintext
'world!'
```

```python
spam[6:-1]
```

Output:

```plaintext
'world'
```

```python
spam[:-1]
```

Output:

```plaintext
'Hello world'
```

```python
spam[::-1]
```

Output:

```plaintext
'!dlrow olleH'
```

```python
fizz = spam[0:5]
fizz
```

Output:

```plaintext
'Hello'
```

## The in and not in operators

```python
'Hello' in 'Hello World'
```

Output:

```plaintext
True
```

```python
'Hello' in 'Hello'
```

Output:

```plaintext
True
```

```python
'HELLO' in 'Hello World'
```

Output:

```plaintext
False
```

```python
'' in 'spam'
```

Output:

```plaintext
True
```

```python
'cats' not in 'cats and dogs'
```

Output:

```plaintext
False
```

## upper(), lower() and title()

Transforms a string to upper, lower and title case:

```python
greet = 'Hello world!'
greet.upper()
```

Output:

```plaintext
'HELLO WORLD!'
```

```python
greet.lower()
```

Output:

```plaintext
'hello world!'
```

```python
greet.title()
```

Output:

```plaintext
'Hello World!'
```

## isupper() and islower() methods

Returns `True` or `False` after evaluating if a string is in upper or lower case:

```python
spam = 'Hello world!'
spam.islower()
```

Output:

```plaintext
False
```

```python
spam.isupper()
```

Output:

```plaintext
False
```

```python
'HELLO'.isupper()
```

Output:

```plaintext
True
```

```python
'abc12345'.islower()
```

Output:

```plaintext
True
```

```python
'12345'.islower()
```

Output:

```plaintext
False
```

```python
'12345'.isupper()
```

Output:

```plaintext
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

```plaintext
True
```

```python
'Hello world!'.endswith('world!')
```

Output:

```plaintext
True
```

```python
'abc123'.startswith('abcdef')
```

Output:

```plaintext
False
```

```python
'abc123'.endswith('12')
```

Output:

```plaintext
False
```

```python
'Hello world!'.startswith('Hello world!')
```

Output:

```plaintext
True
```

```python
'Hello world!'.endswith('Hello world!')
```

Output:

```plaintext
True
```

## join() and split()

### join()

The `join()` method takes all the items in an iterable, like a <router-link to="/cheatsheet/lists-and-tuples">list</router-link>, <router-link to="/cheatsheet/dictionaries">dictionary</router-link>, <router-link to="/cheatsheet/lists-and-tuples#the-tuple-data-type">tuple</router-link> or <router-link to="/cheatsheet/sets">set</router-link>, and joins them into a string. You can also specify a separator.

```python
''.join(['My', 'name', 'is', 'Simon'])
```

Output:

```plaintext
'MynameisSimon'
```

```python
', '.join(['cats', 'rats', 'bats'])
```

Output:

```plaintext
'cats, rats, bats'
```

```python
' '.join(['My', 'name', 'is', 'Simon'])
```

Output:

```plaintext
'My name is Simon'
```

```python
'ABC'.join(['My', 'name', 'is', 'Simon'])
```

Output:

```plaintext
'MyABCnameABCisABCSimon'
```

### split()

The `split()` method splits a `string` into a `list`. By default, it will use whitespace to separate the items, but you can also set another character of choice:

```python
'My name is Simon'.split()
```

Output:

```plaintext
['My', 'name', 'is', 'Simon']
```

```python
'MyABCnameABCisABCSimon'.split('ABC')
```

Output:

```plaintext
['My', 'name', 'is', 'Simon']
```

```python
'My name is Simon'.split('m')
```

Output:

```plaintext
['My na', 'e is Si', 'on']
```

```python
' My  name is  Simon'.split()
```

Output:

```plaintext
['My', 'name', 'is', 'Simon']
```

```python
' My  name is  Simon'.split(' ')
```

Output:

```plaintext
['', 'My', '', 'name', 'is', '', 'Simon']
```

## Justifying text with rjust(), ljust() and center()

```python
'Hello'.rjust(10)
```

Output:

```plaintext
'     Hello'
```

```python
'Hello'.rjust(20)
```

Output:

```plaintext
'               Hello'
```

```python
'Hello World'.rjust(20)
```

Output:

```plaintext
'         Hello World'
```

```python
'Hello'.ljust(10)
```

Output:

```plaintext
'Hello     '
```

```python
'Hello'.center(20)
```

Output:

```plaintext
'       Hello       '
```

An optional second argument to `rjust()` and `ljust()` will specify a fill character apart from a space character:

```python
'Hello'.rjust(20, '*')
```

Output:

```plaintext
'***************Hello'
```

```python
'Hello'.ljust(20, '-')
```

Output:

```plaintext
'Hello---------------'
```

```python
'Hello'.center(20, '=')
```

Output:

```plaintext
'=======Hello========'
```

## Removing whitespace with strip(), rstrip(), and lstrip()

```python
spam = '    Hello World     '
spam.strip()
```

Output:

```plaintext
'Hello World'
```

```python
spam.lstrip()
```

Output:

```plaintext
'Hello World     '
```

```python
spam.rstrip()
```

Output:

```plaintext
'    Hello World'
```

```python
spam = 'SpamSpamBaconSpamEggsSpamSpam'
spam.strip('ampS')
```

Output:

```plaintext
'BaconSpamEggs'
```

## The Count Method

Counts the number of occurrences of a given character or substring in the string it is applied to. Can be optionally provided start and end index.

```python
sentence = 'one sheep two sheep three sheep four'
sentence.count('sheep')
```

Output:

```plaintext
3
```

```python
sentence.count('e')
```

Output:

```plaintext
9
```

```python
# returns count of e after 'one sh' i.e 6 chars since beginning of string
sentence.count('e', 6)
```

Output:

```plaintext
8
```

```python
sentence.count('e', 7)
```

Output:

```plaintext
7
```

## Replace Method

Replaces all occurences of a given substring with another substring. Can be optionally provided a third argument to limit the number of replacements. Returns a new string.

```python
text = "Hello, world!"
text.replace("world", "planet")
```

Output:

```plaintext
'Hello, planet!'
```

```python
fruits = "apple, banana, cherry, apple"
fruits.replace("apple", "orange", 1)
```

Output:

```plaintext
'orange, banana, cherry, apple'
```

```python
sentence = "I like apples, Apples are my favorite fruit"
sentence.replace("apples", "oranges")
```

Output:

```plaintext
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
