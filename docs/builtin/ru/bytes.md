---
title: 'Встроенная функция Python bytes() - Шпаргалка по Python'
description: 'Возвращает новый объект «bytes», который представляет собой неизменяемую последовательность целых чисел в диапазоне [...]. bytes — это неизменяемая версия bytearray – она имеет те же неизменяющие методы, а также то же поведение при индексации и нарезке.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python bytes()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#bytes">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Возвращает новый объект «bytes», который представляет собой неизменяемую последовательность целых чисел в диапазоне [...]. bytes — это неизменяемая версия bytearray – она имеет те же не изменяющие методы, а также то же поведение при индексации и нарезке.
  </base-disclaimer-content>
</base-disclaimer>

## Введение

В Python тип `bytes` представляет собой неизменяемую последовательность отдельных байтов. Он представляет собой последовательность целых чисел в диапазоне от 0 до 255, которую можно использовать для представления двоичных данных, таких как изображения, аудио или другие типы файлов.

Вы можете создать объект bytes несколькими способами. Один из способов — использовать конструктор `bytes()` и передать ему строку, объект bytearray или объект bytes. Например:

```python
data = "Hello, World!"
bytes_obj = bytes(data, "utf-8")
print(bytes_obj)
```

Вывод:

```plaintext
b'Hello, World!'
```

Другой способ — использовать литеральную нотацию, добавив префикс `b` или `B` к строке:

```python
data = b"Hello, World!"
print(data)
```

Вывод:

```plaintext
b'Hello, World!'
```

## Связанные ссылки

- <router-link :to="'/builtin/bytearray'">bytearray()</router-link>
- <router-link :to="'/builtin/memoryview'">memoryview()</router-link>
- <router-link :to="'/cheatsheet/reading-and-writing-files'">Чтение и запись файлов</router-link>
- <router-link :to="'/blog/python-data-types'">Типы данных Python</router-link>
