---
title: Python pow() built-in function - Python Cheatsheet
description: The pow() function returns the power of a number.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python pow() built-in function
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    From the <a target="_blank" href="https://docs.python.org/3/library/functions.html#pow">Python 3 documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
      The pow() function returns the power of a number.It takes two or three arguments:
      pow(base, exp): Returns base raised to the power of exp (base ** exp).
      pow(base, exp, mod): Returns (base ** exp) % mod (for modular arithmetic).
      Result is computed more efficiently than base ** exp % mod, if mod arg is present.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

The `pow()` function is used for exponentiation. It can take two or three arguments.

- `pow(base, exp)`: This is equivalent to `base ** exp`.
- `pow(base, exp, mod)`: This is equivalent to `(base ** exp) % mod`, but is more efficient. This is useful for modular arithmetic.

### Examples

```python
# Using two arguments (base ** exp)
print(pow(2, 3))
print(pow(3, 2))
print(pow(2, -3))  # equivalent to 1 / (2**3)

# Using three arguments ((base ** exp) % mod)
print(pow(3, 2, 4))  # since 3**2 is 9, and 9 % 4 is 1
print(pow(2, 3, 5))  # since 2**3 is 8, and 8 % 5 is 3
```

```output
8
9
0.125
1
3
```

## Relevant links

- <router-link to="/blog/python-data-types">Blog: Python Data Types</router-link>
- <router-link to="/builtin/divmod">divmod()</router-link>
- <router-link to="/builtin/abs">abs()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
