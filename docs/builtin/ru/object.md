---
title: 'Встроенная функция Python object() - Шпаргалка по Python'
description: 'Возвращает новый объект без каких-либо особенностей. object является базовым классом для всех классов. Он содержит методы, общие для всех экземпляров классов Python. Эта функция не принимает аргументов.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python object()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#object">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Возвращает новый объект без каких-либо признаков. object является базовым классом для всех классов. Он содержит методы, общие для всех экземпляров классов Python. Эта функция не принимает аргументов.
  </base-disclaimer-content>
</base-disclaimer>

## Введение

Функция `object()` возвращает новый, пустой, не имеющий признаков объект. Этот объект является базовым для всех классов в Python. Он не имеет никаких специальных атрибутов или методов.

Хотя вы можете создавать экземпляры `object`, это не то, что вы будете делать часто в повседневном программировании. Это скорее фундаментальный строительный блок объектной модели Python.

### Пример

```python
# Create a new object
o = object()

# See its type
print(type(o))
```

```output
<class 'object'>
```

Примечание: У него нет атрибутов, которые можно было бы установить. `o.name = "test"` вызовет AttributeError.

## Связанные ссылки

- <router-link to="/cheatsheet/oop-basics">Шпаргалка: Основы ООП</router-link>
- <router-link to="/blog/python-data-types">Блог: Типы данных Python</router-link>
- <router-link to="/builtin/isinstance">isinstance()</router-link>
- <router-link to="/builtin/issubclass">issubclass()</router-link>
- <router-link to="/builtin/dir">dir()</router-link>
- <router-link to="/builtin/hasattr">hasattr()</router-link>
- <router-link to="/builtin/getattr">getattr()</router-link>
- <router-link to="/builtin/delattr">delattr()</router-link>
