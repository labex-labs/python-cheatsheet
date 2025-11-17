---
title: 'Встроенная функция Python hash() - Шпаргалка по Python'
description: 'Возвращает хеш-значение объекта (если оно существует). Хеш-значения — это целые числа. Они используются для быстрого сравнения ключей словаря при поиске в словаре. Равные по значению числовые значения имеют одинаковое хеш-значение (даже если они разных типов, как в случае с 1 и 1.0).'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python hash()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#hash">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Возвращает хеш-значение объекта (если оно у него есть). Хеш-значения являются целыми числами. Они используются для быстрого сравнения ключей словаря во время поиска в словаре. Числовые значения, которые сравниваются как равные, имеют одинаковое хеш-значение (даже если они разных типов, как в случае с 1 и 1.0).
  </base-disclaimer-content>
</base-disclaimer>

## Введение

Функция `hash()` возвращает целое число, представляющее хеш-значение объекта. Это в первую очередь используется словарями для быстрого поиска ключей.

В `hash()` можно передавать только "хешируемые" объекты. Объект является хешируемым, если его хеш-значение никогда не меняется в течение его жизненного цикла. Все встроенные неизменяемые типы Python (такие как строки, числа и кортежи) являются хешируемыми, в то время как изменяемые контейнеры (такие как списки и словари) — нет.

### Примеры

```python
# Hash of an integer is the integer itself
print(hash(1))
print(hash(1.0))  # 1 and 1.0 are equal

# Hash of a string (output varies)
print(hash('hello'))

# Hash of a tuple (output varies)
print(hash((1, 2, 3)))

# Trying to hash a list will raise a TypeError
try:
    hash([1, 2, 3])
except TypeError as e:
    print(e)
```

Вывод:

```plaintext
1
1
-1182655621190490452
529344067295497451
unhashable type: 'list'
```

## Связанные ссылки

- <router-link :to="'/cheatsheet/dictionaries'">Словари</router-link>
- <router-link :to="'/builtin/id'">id()</router-link>
- <router-link :to="'/cheatsheet/sets'">Множества</router-link>
- <router-link :to="'/blog/python-sets-what-why-how'">Множества Python: Что, Зачем и Как</router-link>
- <router-link :to="'/builtin/frozenset'">frozenset()</router-link>
- <router-link :to="'/builtin/object'">object()</router-link>
