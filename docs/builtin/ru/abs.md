---
title: 'Встроенная функция Python abs() - Шпаргалка по Python'
description: 'Возвращает абсолютное значение числа. Аргументом может быть целое число, число с плавающей запятой или объект, реализующий __abs__(). Если аргумент является комплексным числом, возвращается его модуль.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python abs()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#abs">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Возвращает абсолютное значение числа. Аргументом может быть целое число, число с плавающей запятой или объект, реализующий <code>__abs__()</code>. Если аргумент является комплексным числом, возвращается его модуль.
  </base-disclaimer-content>
</base-disclaimer>

## Введение

Функция `abs()` в Python — это встроенная функция, которая возвращает абсолютное значение числа. Она может обрабатывать целые числа, числа с плавающей запятой и даже комплексные числа (возвращая их модуль). Эта функция полезна, когда вам нужно убедиться, что значение положительное, независимо от его исходного знака.

### Примеры

```python
# Для целых чисел
abs(-1)
abs(0)

# Для чисел с плавающей запятой
abs(-3.14)

# Для комплексных чисел (возвращает модуль)
abs(3 + 4j)

# Для других систем счисления
abs(0x10)  # Шестнадцатеричная
abs(0b10)  # Двоичная
abs(0o20)  # Восьмеричная
```

```output
1
0
3.14
5.0
16
2
16
```

## Связанные ссылки

- <router-link to="/blog/python-data-types">Блог: Типы данных Python</router-link>
- <router-link to="/builtin/pow">pow()</router-link>
- <router-link to="/builtin/round">round()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
- <router-link to="/builtin/complex">complex()</router-link>
