---
title: 'Модуль Python Shelve - Шпаргалка по Python'
description: 'Полка (shelf) — это постоянный объект, похожий на словарь. В полке могут храниться практически любые объекты Python — все, что может обработать модуль pickle.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Модуль Python Shelve
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/shelve.html">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   «Полка» (shelf) — это постоянный объект, похожий на словарь. Отличие от баз данных «dbm» заключается в том, что значения (а не ключи!) в полке могут быть по существу произвольными объектами Python — всем, что может обработать модуль pickle. Это включает большинство экземпляров классов, рекурсивные типы данных и объекты, содержащие много общих подобъектов. Ключи — обычные строки.
  </base-disclaimer-content>
</base-disclaimer>

## Сохранение переменных

```python
import shelve

wife = ['Pretty', 'Lovely', 'Nice']
# Открыть файл полки и сохранить данные
with shelve.open('mydata') as shelf_file:
    shelf_file['wife'] = wife
```

## Открытие и чтение переменных

```python
# Открыть файл полки и прочитать данные
with shelve.open('mydata') as shelf_file:
    print(type(shelf_file))
    # Доступ к сохраненному значению по ключу
    print(shelf_file['wife'])
```

```output
<class 'shelve.DbfilenameShelf'>
['Pretty', 'Lovely', 'Nice']
```

Подобно словарям, значения `shelf` имеют методы `keys()` и `values()`, которые возвращают значения, похожие на списки, ключей и значений в полке. Поскольку эти методы возвращают значения, похожие на списки, а не настоящие списки, вам следует передать их функции `list()`, чтобы получить их в форме списка.

```python
# Доступ ко всем ключам и значениям в полке
with shelve.open('mydata') as shelf_file:
    print(list(shelf_file.keys()))
    print(list(shelf_file.values()))
```

```output
['wife']
[['Pretty', 'Lovely', 'Nice']]
```

## Связанные ссылки

- <router-link to="/cheatsheet/reading-and-writing-files">Шпаргалка: Чтение и запись файлов</router-link>
- <router-link to="/cheatsheet/dictionaries">Шпаргалка: Словари</router-link>
- <router-link to="/cheatsheet/context-manager">Шпаргалка: Менеджеры контекста</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
