---
title: Python complex() built-in function - Python Cheatsheet
description: Return a complex number with the value real + imag*1j or convert a string or number to a complex number. [...] Each argument may be any numeric type (including complex). If imag is omitted, it defaults to zero and the constructor serves as a numeric conversion like int and float. If both arguments are omitted, returns 0j.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python complex() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#complex">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Return a complex number with the value real + imag*1j or convert a string or number to a complex number. [...] Each argument may be any numeric type (including complex). If imag is omitted, it defaults to zero and the constructor serves as a numeric conversion like <router-link to="/builtin/int">`int()`</router-link> and <router-link to="/builtin/float">`float()`</router-link>. If both arguments are omitted, returns 0j.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `complex()` function creates a complex number. It can take a real and an imaginary part as arguments. If only one argument is provided, it's considered the real part, and the imaginary part is zero.

## Examples

```python
# Create a complex number with real and imaginary parts
print(complex(3, 4))

# Create a complex number with only a real part
print(complex(5))

# Create a complex number from a string
print(complex("2+3j"))
```

```output
(3+4j)
(5+0j)
(2+3j)
```

## Relevant links

- <router-link to="/blog/python-data-types">Blog: Python Data Types</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
- <router-link to="/builtin/abs">abs()</router-link>
- <router-link to="/builtin/pow">pow()</router-link>
