---
title: 'Встроенная функция Python locals() - Шпаргалка по Python'
description: 'Обновляет и возвращает словарь, представляющий текущую локальную таблицу символов. Локальная функция locals() возвращает свободные переменные при вызове в блоках функций, но не в блоках классов. Обратите внимание: на уровне модуля locals() и globals() — это один и тот же словарь.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python locals()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#locals">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Обновляет и возвращает словарь, представляющий текущую локальную таблицу символов. Свободные переменные возвращаются функцией locals() при вызове в блоках функций, но не в блоках классов. Обратите внимание, что на уровне модуля locals() и <router-link to="/builtin/globals">globals()</router-link> — это один и тот же словарь.
  </base-disclaimer-content>
</base-disclaimer>

## Введение

Функция `locals()` возвращает словарь, представляющий текущую локальную таблицу символов. Он включает все локальные переменные, аргументы и другие объекты в текущей области видимости.

Это полезный инструмент для проверки локального пространства имен.

### Пример

```python
def my_function(arg1, arg2):
    local_var = "I am local"
    print(locals())

my_function("hello", "world")
```

```output
{'arg1': 'hello', 'arg2': 'world', 'local_var': 'I am local'}
```

## Связанные ссылки

- <router-link to="/cheatsheet/debugging">Шпаргалка: Отладка</router-link>
- <router-link to="/cheatsheet/functions">Шпаргалка: Функции</router-link>
- <router-link to="/cheatsheet/dictionaries">Шпаргалка: Словари</router-link>
- <router-link to="/builtin/globals">globals()</router-link>
- <router-link to="/builtin/dir">dir()</router-link>
