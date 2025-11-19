---
title: 'Встроенная функция Python hex() - Шпаргалка по Python'
description: 'Преобразует целое число в шестнадцатеричную строку нижнего регистра с префиксом «0x». Если x не является объектом int Python, он должен определить метод __index__(), возвращающий целое число.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python hex()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#hex">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Преобразует целое число в шестнадцатеричную строку в нижнем регистре с префиксом «0x». Если x не является объектом Python int, он должен определить метод __index__(), который возвращает целое число.
  </base-disclaimer-content>
</base-disclaimer>

## Введение

Функция `hex()` в Python — это встроенная функция, которая преобразует целое число в его соответствующее шестнадцатеричное представление. Результирующая строка имеет префикс "0x", чтобы указать, что это шестнадцатеричное значение. Эта функция полезна, когда вам нужно работать с шестнадцатеричными числами, которые часто встречаются в низкоуровневом программировании, например, при работе с адресами памяти или цветовыми кодами.

## Примеры

```python
hex(1)
hex(10)
hex(100)
hex(1000)
```

```output
'0x1'
'0xa'
'0x64'
'0x3e8'
```

## Связанные ссылки

- <router-link :to="'/builtin/bin'">bin()</router-link>
- <router-link :to="'/builtin/int'">int()</router-link>
- <router-link :to="'/builtin/oct'">oct()</router-link>
- <router-link :to="'/cheatsheet/string-formatting'">Форматирование строк</router-link>
- <router-link :to="'/blog/python-data-types'">Типы данных Python</router-link>
- <router-link :to="'/builtin/format'">format()</router-link>
