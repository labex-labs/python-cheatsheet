---
title: 'Встроенная функция Python bool() - Шпаргалка по Python'
description: 'Возвращает логическое значение (True или False). x преобразуется с использованием стандартной процедуры проверки истинности. Если x ложно или опущено, возвращается False; в противном случае возвращается True. Класс bool является подклассом int. Его нельзя наследовать далее. Его единственные экземпляры — False и True.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python bool()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#bool">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Возвращает логическое значение True или False. x преобразуется с использованием стандартной процедуры проверки истинности. Если x ложно или опущено, возвращается False; в противном случае возвращается True. Класс bool является подклассом int. Он не может быть далее подклассифицирован. Его единственными экземплярами являются False и True.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Встроенная функция `bool()` в Python — это встроенная функция, которая преобразует значение в логическое (`True` или `False`). Она следует стандартной процедуре проверки истинности, где такие значения, как `0`, `None` и пустые коллекции, считаются `False`, в то время как большинство других значений считаются `True`. Это имеет фундаментальное значение для управления потоком вашей программы с помощью условных операторов.

## Examples

### Falsy Values

Эти значения считаются `False`:

```python
bool(False)
bool(None)
bool(0)
bool(0.0)
bool('')      # пустая строка
bool([])      # пустой список
bool({})      # пустой словарь
bool(set())   # пустое множество
```

Output:

```plaintext
False
False
False
False
False
False
False
False
```

### Truthy Values

Большинство других значений считаются `True`:

```python
bool(True)
bool(1)
bool(-1)
bool('hello')
bool([1, 2])
bool({'a': 1})
```

Output:

```plaintext
True
True
True
True
True
True
```

## Relevant links

- <router-link to="/cheatsheet/control-flow">Шпаргалка: Управление потоком</router-link>
- <router-link to="/blog/python-data-types">Блог: Типы данных Python</router-link>
- <router-link to="/builtin/all">all()</router-link>
- <router-link to="/builtin/any">any()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/str">str()</router-link>
