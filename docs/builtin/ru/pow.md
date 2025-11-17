---
title: 'Встроенная функция pow() в Python - Шпаргалка по Python'
description: 'Функция pow() возвращает степень числа.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python pow()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#pow">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
      Функция pow() возвращает степень числа. Она принимает два или три аргумента:
      pow(base, exp): Возвращает base в степени exp (base ** exp).
      pow(base, exp, mod): Возвращает (base ** exp) % mod (для модульной арифметики).
      Результат вычисляется более эффективно, чем base ** exp % mod, если аргумент mod присутствует.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Функция `pow()` используется для возведения в степень. Она может принимать два или три аргумента.

- `pow(base, exp)`: Это эквивалентно `base ** exp`.
- `pow(base, exp, mod)`: Это эквивалентно `(base ** exp) % mod`, но более эффективно. Это полезно для модульной арифметики.

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

Output:

```plaintext
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
