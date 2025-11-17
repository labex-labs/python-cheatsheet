---
title: Python built-in functions - Python Cheatsheet
description: The Python interpreter has a number of functions and types built into it that are always available.
labUrl: https://labex.io/labs/python-python-built-in-functions-633648?course=python-cheatsheet
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Built-in Functions
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

The Python interpreter has a number of functions and types built into it that are always available.

## Python built-in Functions

| Function                                                             | Description                                                               |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| <router-link to='/builtin/abs'>abs()</router-link>                   | Return the absolute value of a number.                                    |
| <router-link to='/builtin/aiter'>aiter()</router-link>               | Return an asynchronous iterator for an asynchronous iterable.             |
| <router-link to='/builtin/all'>all()</router-link>                   | Return True if all elements of the iterable are true.                     |
| <router-link to='/builtin/any'>any()</router-link>                   | Return True if any element of the iterable is true.                       |
| <router-link to='/builtin/ascii'>ascii()</router-link>               | Return a string with a printable representation of an object.             |
| <router-link to='/builtin/bin'>bin()</router-link>                   | Convert an integer number to a binary string.                             |
| <router-link to='/builtin/bool'>bool()</router-link>                 | Return a Boolean value.                                                   |
| <router-link to='/builtin/breakpoint'>breakpoint()</router-link>     | Drops you into the debugger at the call site.                             |
| <router-link to='/builtin/bytearray'>bytearray()</router-link>       | Return a new array of bytes.                                              |
| <router-link to='/builtin/bytes'>bytes()</router-link>               | Return a new “bytes” object.                                              |
| <router-link to='/builtin/callable'>callable()</router-link>         | Return True if the object argument is callable, False if not.             |
| <router-link to='/builtin/chr'>chr()</router-link>                   | Return the string representing a character.                               |
| <router-link to='/builtin/classmethod'>classmethod()</router-link>   | Transform a method into a class method.                                   |
| <router-link to='/builtin/compile'>compile()</router-link>           | Compile the source into a code or AST object.                             |
| <router-link to='/builtin/complex'>complex()</router-link>           | Return a complex number with the value real + imag\*1j.                   |
| <router-link to='/builtin/delattr'>delattr()</router-link>           | Deletes the named attribute, provided the object allows it.               |
| <router-link to='/builtin/dict'>dict()</router-link>                 | Create a new dictionary.                                                  |
| <router-link to='/builtin/dir'>dir()</router-link>                   | Return the list of names in the current local scope.                      |
| <router-link to='/builtin/divmod'>divmod()</router-link>             | Return a pair of numbers consisting of their quotient and remainder.      |
| <router-link to='/builtin/enumerate'>enumerate()</router-link>       | Return an enumerate object.                                               |
| <router-link to='/builtin/eval'>eval()</router-link>                 | Evaluates and executes an expression.                                     |
| <router-link to='/builtin/exec'>exec()</router-link>                 | This function supports dynamic execution of Python code.                  |
| <router-link to='/builtin/filter'>filter()</router-link>             | Construct an iterator from an iterable and returns true.                  |
| <router-link to='/builtin/float'>float()</router-link>               | Return a floating point number from a number or string.                   |
| <router-link to='/builtin/format'>format()</router-link>             | Convert a value to a “formatted” representation.                          |
| <router-link to='/builtin/frozenset'>frozenset()</router-link>       | Return a new frozenset object.                                            |
| <router-link to='/builtin/getattr'>getattr()</router-link>           | Return the value of the named attribute of object.                        |
| <router-link to='/builtin/globals'>globals()</router-link>           | Return the dictionary implementing the current module namespace.          |
| <router-link to='/builtin/hasattr'>hasattr()</router-link>           | Return True if the object has the named attribute.                        |
| <router-link to='/builtin/hash'>hash()</router-link>                 | Return the hash value of the object.                                      |
| <router-link to='/builtin/help'>help()</router-link>                 | Invoke the built-in help system.                                          |
| <router-link to='/builtin/hex'>hex()</router-link>                   | Convert an integer number to a lowercase hexadecimal string.              |
| <router-link to='/builtin/id'>id()</router-link>                     | Return the “identity” of an object.                                       |
| <router-link to='/builtin/input'>input()</router-link>               | This function takes an input and converts it into a string.               |
| <router-link to='/builtin/int'>int()</router-link>                   | Return an integer object constructed from a number or string.             |
| <router-link to='/builtin/isinstance'>isinstance()</router-link>     | Return True if the object argument is an instance of an object.           |
| <router-link to='/builtin/issubclass'>issubclass()</router-link>     | Return True if class is a subclass of classinfo.                          |
| <router-link to='/builtin/iter'>iter()</router-link>                 | Return an iterator object.                                                |
| <router-link to='/builtin/len'>len()</router-link>                   | Return the length (the number of items) of an object.                     |
| <router-link to='/builtin/list'>list()</router-link>                 | Rather than being a function, list is a mutable sequence type.            |
| <router-link to='/builtin/locals'>locals()</router-link>             | Update and return a dictionary with the current local symbol table.       |
| <router-link to='/builtin/map'>map()</router-link>                   | Return an iterator that applies function to every item of iterable.       |
| <router-link to='/builtin/max'>max()</router-link>                   | Return the largest item in an iterable.                                   |
| <router-link to='/builtin/min'>min()</router-link>                   | Return the smallest item in an iterable.                                  |
| <router-link to='/builtin/next'>next()</router-link>                 | Retrieve the next item from the iterator.                                 |
| <router-link to='/builtin/object'>object()</router-link>             | Return a new featureless object.                                          |
| <router-link to='/builtin/oct'>oct()</router-link>                   | Convert an integer number to an octal string.                             |
| <router-link to='/builtin/open'>open()</router-link>                 | Open file and return a corresponding file object.                         |
| <router-link to='/builtin/ord'>ord()</router-link>                   | Return an integer representing the Unicode code point of a character.     |
| <router-link to='/builtin/pow'>pow()</router-link>                   | Return base to the power exp.                                             |
| <router-link to='/builtin/print'>print()</router-link>               | Print objects to the text stream file.                                    |
| <router-link to='/builtin/property'>property()</router-link>         | Return a property attribute.                                              |
| <router-link to='/builtin/repr'>repr()</router-link>                 | Return a string containing a printable representation of an object.       |
| <router-link to='/builtin/reversed'>reversed()</router-link>         | Return a reverse iterator.                                                |
| <router-link to='/builtin/round'>round()</router-link>               | Return number rounded to ndigits precision after the decimal point.       |
| <router-link to='/builtin/set'>set()</router-link>                   | Return a new set object.                                                  |
| <router-link to='/builtin/setattr'>setattr()</router-link>           | This is the counterpart of getattr().                                     |
| <router-link to='/builtin/slice'>slice()</router-link>               | Return a sliced object representing a set of indices.                     |
| <router-link to='/builtin/sorted'>sorted()</router-link>             | Return a new sorted list from the items in iterable.                      |
| <router-link to='/builtin/staticmethod'>staticmethod()</router-link> | Transform a method into a static method.                                  |
| <router-link to='/builtin/str'>str()</router-link>                   | Return a str version of object.                                           |
| <router-link to='/builtin/sum'>sum()</router-link>                   | Sums start and the items of an iterable.                                  |
| <router-link to='/builtin/super'>super()</router-link>               | Return a proxy object that delegates method calls to a parent or sibling. |
| <router-link to='/builtin/tuple'>tuple()</router-link>               | Rather than being a function, is actually an immutable sequence type.     |
| <router-link to='/builtin/type'>type()</router-link>                 | Return the type of an object.                                             |
| <router-link to='/builtin/vars'>vars()</router-link>                 | Return the dict attribute for any other object with a dict attribute.     |
| <router-link to='/builtin/zip'>zip()</router-link>                   | Iterate over several iterables in parallel.                               |
| <router-link to='/builtin/import'>**import**()</router-link>         | This function is invoked by the import statement.                         |
