---
title: 'Встроенная функция Python ascii() - Шпаргалка по Python'
description: "Как и repr(), возвращает строку, содержащую печатное представление объекта, но экранирует не-ASCII символы в строке, возвращаемой repr(), используя экранирование \\x, \\u или \\U."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python ascii()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#ascii">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Как и <code>repr()</code>, возвращает строку, содержащую печатное представление объекта, но экранирует не-ASCII символы в строке, возвращаемой <code>repr()</code>, используя экранирование <code>\x</code>, <code>\u</code> или <code>\U</code>.
  </base-disclaimer-content>
</base-disclaimer>

## Введение

Функция `ascii()` в Python — это встроенная функция, которая возвращает строку, содержащую печатное представление объекта, аналогично `repr()`. Однако `ascii()` экранирует любые не-ASCII символы с помощью управляющих последовательностей `\x`, `\u` или `\U`. Это полезно для обеспечения того, чтобы строка была безопасна для использования в среде, допускающей только ASCII.

## Примеры

```python
# Для ASCII символа результат совпадает с repr()
ascii('A')

# Для не-ASCII символа он экранируется
ascii('ë')

# Для сравнения, repr() не стал бы его экранировать
repr('ë')

# Работает и с итерируемыми объектами
ascii(['A', 'ë'])
```

Вывод:

```plaintext
'A'
'\\xeb'
'ë'
['A', '\\xeb']
```

## Связанные ссылки

- <router-link to="/cheatsheet/manipulating-strings">Шпаргалка: Манипулирование строками</router-link>
- <router-link to="/blog/python-data-types">Блог: Типы данных Python</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
- <router-link to="/builtin/chr">chr()</router-link>
- <router-link to="/builtin/ord">ord()</router-link>
