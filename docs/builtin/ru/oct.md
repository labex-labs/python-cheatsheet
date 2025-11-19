---
title: 'Встроенная функция Python oct() - Шпаргалка по Python'
description: 'Преобразует целое число в восьмеричную строку с префиксом «0o». Результат является допустимым выражением Python. Если x не является объектом int Python, он должен определить метод __index__(), возвращающий целое число.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python oct()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#oct">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Преобразует целое число в восьмеричную строку с префиксом «0o». Результат является допустимым выражением Python. Если x не является объектом <router-link to="/builtin/int">int</router-link> Python, он должен определить метод __index__(), который возвращает целое число.
  </base-disclaimer-content>
</base-disclaimer>

## Введение

Функция `oct()` преобразует целое число в его восьмеричное представление. Результирующая строка имеет префикс "0o", чтобы указать, что это восьмеричное число.

### Примеры

Вот несколько примеров использования `oct()`:

```python
# Convert integers to octal
print(oct(8))
print(oct(10))
print(oct(100))
print(oct(1))
print(oct(1000))
```

```output
0o10
0o12
0o144
0o1
0o1750
```

## Связанные ссылки

- <router-link to="/blog/python-data-types">Блог: Типы данных Python</router-link>
- <router-link to="/cheatsheet/string-formatting">Шпаргалка: Форматирование строк</router-link>
- <router-link to="/builtin/bin">bin()</router-link>
- <router-link to="/builtin/hex">hex()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/format">format()</router-link>
