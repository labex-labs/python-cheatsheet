---
title: 'Встроенная функция Python bytearray() - Шпаргалка по Python'
description: 'Возвращает новый массив байтов. Класс bytearray представляет собой изменяемую последовательность целых чисел в диапазоне [...]. Он имеет большинство обычных методов изменяемых последовательностей, описанных в Mutable Sequence Types, а также большинство методов, присущих типу bytes [...]'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python bytearray()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#bytearray">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Возвращает новый массив байтов. Класс bytearray представляет собой изменяемую последовательность целых чисел в диапазоне [...]. Он имеет большинство обычных методов изменяемых последовательностей, описанных в Mutable Sequence Types, а также большинство методов, которые есть у типа bytes [...].
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Функция `bytearray()` возвращает новый массив байтов. Этот объект представляет собой изменяемую последовательность целых чисел в диапазоне $0 \le x < 256$. По сути, это изменяемая версия объекта `bytes`, что означает, что вы можете изменять его содержимое после создания. Это полезно для работы с двоичными данными, которые необходимо изменять на месте.

## Examples

```python
# Create a bytearray from a string with a specific encoding
ba1 = bytearray("hello", "utf-8")
print(ba1)
```

Output:

```plaintext
bytearray(b'hello')
```

```python
# Create a bytearray from a list of integers
ba2 = bytearray([72, 101, 108, 108, 111])
print(ba2)
```

Output:

```plaintext
bytearray(b'Hello')
```

```python
# Modify a bytearray (it's mutable)
ba2[0] = 104  # ASCII for 'h'
ba2.append(33)  # ASCII for '!'
print(ba2)
```

Output:

```plaintext
bytearray(b'hello!')
```

## Relevant links

- <router-link to="/cheatsheet/reading-and-writing-files">Cheatsheet: Чтение и запись файлов</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Списки и кортежи</router-link>
- <router-link to="/blog/python-data-types">Blog: Типы данных Python</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/memoryview">memoryview()</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/int">int()</router-link>
