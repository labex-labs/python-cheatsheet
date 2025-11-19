---
title: 'Встроенная функция Python complex() - Шпаргалка по Python'
description: 'Возвращает комплексное число со значением real + imag*1j или преобразует строку или число в комплексное число. [...] Каждый аргумент может быть любым числовым типом (включая комплексные). Если imag опущено, по умолчанию оно равно нулю, и конструктор служит для числового преобразования, как int и float. Если оба аргумента опущены, возвращается 0j.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python complex()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#complex">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Возвращает комплексное число со значением real + imag*1j или преобразует строку или число в комплексное число. [...] Каждый аргумент может быть любого числового типа (включая комплексные числа). Если imag опущен, он по умолчанию равен нулю, и конструктор служит для числового преобразования, как <router-link to="/builtin/int">`int()`</router-link> и <router-link to="/builtin/float">`float()`</router-link>. Если оба аргумента опущены, возвращается 0j.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Функция `complex()` создает комплексное число. Она может принимать в качестве аргументов действительную и мнимую части. Если предоставлен только один аргумент, он считается действительной частью, а мнимая часть равна нулю.

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
