---
title: 'Встроенная функция Python type() - Шпаргалка по Python'
description: 'С одним аргументом возвращает тип объекта. Возвращаемое значение — объект типа, как правило, тот же, что возвращается методом object.__class__.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python type()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#type">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    С одним аргументом возвращает тип объекта. Возвращаемое значение является объектом типа и, как правило, тем же объектом, что возвращается при вызове object.__class__.
  </base-disclaimer-content>
</base-disclaimer>

## Введение

Функция `type()` в Python — это встроенная функция, которая возвращает тип объекта. Это фундаментальный инструмент для понимания типов данных, с которыми вы работаете в Python.

## Примеры

```python
type('span')
type(99)
type(1.1)
type([1, 2])
type((1, 2))
type({1, 2})
type({'a': 1, 'b': 2})
```

```output
<class 'str'>
<class 'int'>
<class 'float'>
<class 'list'>
<class 'tuple'>
<class 'set'>
<class 'dict'>
```

## Связанные ссылки

- <router-link to="/blog/python-data-types/">Типы данных Python</router-link>
- <router-link to="/builtin/isinstance/">isinstance()</router-link>
- <router-link to="/builtin/issubclass/">issubclass()</router-link>
- <router-link to="/builtin/str/">str()</router-link>
- <router-link to="/builtin/int/">int()</router-link>
- <router-link to="/builtin/float/">float()</router-link>
- <router-link to="/builtin/list/">list()</router-link>
- <router-link to="/builtin/tuple/">tuple()</router-link>
- <router-link to="/builtin/dict/">dict()</router-link>
- <router-link to="/builtin/set/">set()</router-link>
