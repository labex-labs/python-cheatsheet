---
title: 'Встроенная функция Python round() - Шпаргалка по Python'
description: 'Возвращает число, округленное до указанного количества знаков после запятой (ndigits). Если ndigits не указан или равен None, возвращает ближайшее целое число.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python round()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#round">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Возвращает число, округленное до ndigits знаков после десятичной точки. Если ndigits не указан или равен None, возвращает ближайшее целое число.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Функция `round()` округляет число до указанного количества знаков после запятой. Если количество знаков после запятой не указано, она округляет до ближайшего целого числа.

Обратите внимание, что `round()` использует правило "округление до ближайшего четного числа" для чисел, оканчивающихся на .5, что означает округление до ближайшего четного целого числа.

### Examples

```python
# Round to the nearest integer
print(round(3.14))
print(round(3.8))

# Round to a specified number of decimal places
print(round(3.14159, 2))

# "Round half to even"
print(round(2.5))
print(round(3.5))
```

Output:

```plaintext
3
4
3.14
2
4
```

## Relevant links

- <router-link to="/blog/python-data-types">Blog: Типы данных Python</router-link>
- <router-link to="/cheatsheet/string-formatting">Cheatsheet: Форматирование строк</router-link>
- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/abs">abs()</router-link>
- <router-link to="/builtin/float">float()</router-link>
- <router-link to="/builtin/int">int()</router-link>
