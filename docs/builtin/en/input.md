---
title: Python input() built-in function - Python Cheatsheet
description: If the prompt argument is present, it is written to standard output without a trailing newline. The function then reads a line from input, converts it to a string (stripping a trailing newline), and returns that. When EOF is read, EOFError is raised.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python input() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#input">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   If the prompt argument is present, it is written to standard output without a trailing newline. The function then reads a line from input, converts it to a string (stripping a trailing newline), and returns that. When EOF is read, EOFError is raised.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `input()` function in Python is a built-in function that allows a program to read a line of text from the user's keyboard. It is an essential tool for creating interactive applications, as it pauses the program's execution and waits for the user to provide input. The function can also display a prompt to guide the user on what to enter.

## Examples

This function takes the input from the user and converts it into a string:

```python
# ask for their name
print('What is your name?')
my_name = input()
print('Hi, {}'.format(my_name))
```

```output
What is your name?
Martha
Hi, Martha
```

`input()` can also set a default message without using `print()`:

```python
# default message
my_name = input('What is your name? ')
print('Hi, {}'.format(my_name))
```

```output
What is your name? Martha
Hi, Martha
```

## Relevant links

- <router-link :to="'/builtin/print'">print()</router-link>
- <router-link :to="'/builtin/str'">str()</router-link>
- <router-link :to="'/builtin/int'">int()</router-link>
- <router-link :to="'/builtin/float'">float()</router-link>
- <router-link :to="'/cheatsheet/string-formatting'">String Formatting</router-link>
- <router-link :to="'/cheatsheet/manipulating-strings'">Manipulating Strings</router-link>
