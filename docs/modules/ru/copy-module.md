---
title: 'Модуль Python Copy - Шпаргалка по Python'
description: 'Модуль Copy представляет собой набор функций для копирования различных элементов списков, объектов, массивов и т.д. Он используется для создания как мелких (поверхностных), так и глубоких копий.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Модуль Copy Python
</base-title>

Модуль Copy представляет собой набор функций, связанных с копированием различных элементов списка, объектов, массивов и т. д. Его можно использовать для создания как неглубоких (shallow), так и глубоких (deep) копий.

<base-disclaimer>
  <base-disclaimer-title>
    Из документации Python 3 <a target="_blank" href="https://docs.python.org/3/library/copy.html">здесь</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Операторы присваивания в Python не копируют объекты, они создают привязки между целью и объектом. Для изменяемых коллекций или коллекций, содержащих изменяемые элементы, иногда требуется копия, чтобы можно было изменять одну копию, не изменяя другую. Этот модуль предоставляет общие операции <b>неглубокого</b> (shallow) и <b>глубокого</b> (deep) копирования.
  </base-disclaimer-content>
</base-disclaimer>

## Операции неглубокого копирования (Shallow copy operations)

Неглубокое копирование создает новый составной объект, а затем (насколько это возможно) вставляет в него ссылки на объекты, найденные в оригинале.

copy.copy(x)
Возвращает неглубокую копию x.

```python
import copy
a = [[1],[2],[3]]
# Создаем неглубокую копию (вложенные списки все еще ссылаются)
b = copy.copy(a)

a
```

```output
[[1], [2], [3]]
```

```python
b
```

```output
[[1], [2], [3]]
```

### Без импорта модуля copy вы не сможете его использовать

```output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'copy' is not defined
```

## Операции глубокого копирования (Deep copy operations)

Глубокое копирование создает новый составной объект, а затем рекурсивно вставляет в него копии объектов, найденных в оригинале.

copy.deepcopy(x[, memo])
Возвращает глубокую копию x.

```python
import copy
a = [[1],[2],[3]]
# Создаем глубокую копию (полностью независимая копия)
b = copy.deepcopy(a)

# Изменяем оригинал
a[0][0] = 0
a[1] = None

a
```

```output
[[0], None, [3]]
```

```python
b
```

```output
[[1], [2], [3]]
```

## Соответствующие ссылки

- <router-link to="/cheatsheet/oop-basics">Шпаргалка: Основы ООП</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Шпаргалка: Списки и Кортежи</router-link>
- <router-link to="/cheatsheet/dictionaries">Шпаргалка: Словари</router-link>
- <router-link to="/blog/python-data-types">Блог: Типы данных Python</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/slice">slice()</router-link>
