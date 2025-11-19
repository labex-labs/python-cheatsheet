---
title: 'Встроенная функция Python input() - Шпаргалка по Python'
description: 'Если аргумент prompt присутствует, он выводится в стандартный вывод без завершающего символа новой строки. Затем функция считывает строку из ввода, преобразует ее в строку (удаляя завершающий символ новой строки) и возвращает ее. При достижении EOF вызывается исключение EOFError.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python input()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#input">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Если аргумент `prompt` присутствует, он записывается в стандартный вывод без завершающего символа новой строки. Затем функция считывает строку из ввода, преобразует ее в строку (удаляя завершающий символ новой строки) и возвращает ее. При чтении EOF вызывается EOFError.
  </base-disclaimer-content>
</base-disclaimer>

## Введение

Функция `input()` в Python — это встроенная функция, которая позволяет программе считывать строку текста с клавиатуры пользователя. Это важный инструмент для создания интерактивных приложений, поскольку она приостанавливает выполнение программы и ожидает ввода от пользователя. Функция также может отображать приглашение, чтобы направить пользователя о том, что вводить.

## Примеры

Эта функция принимает ввод от пользователя и преобразует его в строку:

```python
# ask for their name
print('What is your name?')
my_name = input()
print('Hi, {}'.format(my_name))
```

```output
What is your name?
Martha
Hi, Martha
```

`input()` также может установить сообщение по умолчанию без использования `print()`:

```python
# default message
my_name = input('What is your name? ')
print('Hi, {}'.format(my_name))
```

```output
What is your name? Martha
Hi, Martha
```

## Связанные ссылки

- <router-link :to="'/builtin/print'">print()</router-link>
- <router-link :to="'/builtin/str'">str()</router-link>
- <router-link :to="'/builtin/int'">int()</router-link>
- <router-link :to="'/builtin/float'">float()</router-link>
- <router-link :to="'/cheatsheet/string-formatting'">Форматирование строк</router-link>
- <router-link :to="'/cheatsheet/manipulating-strings'">Манипулирование строками</router-link>
