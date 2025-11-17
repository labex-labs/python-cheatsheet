---
title: 'Встроенная функция Python chr() - Справочник по Python'
description: "Возвращает строку, представляющую символ, чей код точки Unicode равен целому числу i. Например, chr(97) возвращает строку 'a', а chr(8364) возвращает '€'. Это обратная функция к ord()."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python chr()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#chr">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Возвращает строку, представляющую символ, порядковый номер Unicode которого равен целому числу i. Например, chr(97) возвращает строку 'a', а chr(8364) возвращает строку '€'. Это обратная операция для ord().
  </base-disclaimer-content>
</base-disclaimer>

## Введение

Функция `chr()` в Python — это встроенная функция, которая принимает целое число в качестве аргумента и возвращает строку, представляющую соответствующий символ Unicode.

Целое число, передаваемое функции `chr()`, должно находиться в диапазоне от 0 до 65535, что соответствует диапазону допустимых символов Unicode.

```python
print(chr(97))
print(chr(65))
print(chr(120))
```

Вывод:

```plaintext
a
A
x
```

Функция `chr()` является обратной к функции `ord()`, которая принимает один символ в качестве аргумента и возвращает соответствующее целое число.

```python
print(ord('a'))
print(ord('A'))
print(ord('x'))
```

Вывод:

```plaintext
97
65
120
```

Функция `chr()` полезна при работе с текстом и данными символов, особенно при работе с символами Unicode. Например, вы можете использовать ее для преобразования целого числа, представляющего порядковый номер Unicode, в соответствующий символ или для генерации строки символов из диапазона целых чисел.

## Связанные ссылки

- <router-link :to="'/builtin/ord'">ord()</router-link>
- <router-link :to="'/builtin/ascii'">ascii()</router-link>
- <router-link :to="'/cheatsheet/manipulating-strings'">Манипулирование строками</router-link>
- <router-link :to="'/blog/python-data-types'">Типы данных Python</router-link>
