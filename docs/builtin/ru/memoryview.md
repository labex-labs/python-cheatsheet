---
title: 'Встроенная функция Python memoryview() - Шпаргалка по Python'
description: 'Возвращает объект «представления памяти», созданный из заданного аргумента. Подробнее см. в разделе Представления памяти.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Встроенная функция Python memoryview()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Из <a target="_blank" href="https://docs.python.org/3/library/functions.html#memoryview">документации Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Возвращает объект «представление памяти» (memory view), созданный из заданного аргумента. См. Представления памяти для получения дополнительной информации.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Функция `memoryview()` создает объект представления памяти из заданного аргумента. Представление памяти позволяет вам получать доступ к памяти другого объекта, такого как `<router-link to="/builtin/bytes">bytes</router-link>` или `<router-link to="/builtin/bytearray">bytearray</router-link>`, без создания копии. Это очень эффективно для больших объемов данных, поскольку позволяет избежать дублирования памяти.

### Examples

Вот как можно использовать `memoryview()`:

```python
# Create a bytearray
data = bytearray(b'hello world')

# Create a memory view of the data
view = memoryview(data)

# Access the data through the view
print(view[0])  # ASCII for 'h'
print(view[6:11])  # a slice of the memory
print(view[6:11].tobytes())

# You can also modify the underlying data through the view
view[0] = 72  # ASCII for 'H'
print(data)
```

```output
104
<memory at 0x...>
b'world'
bytearray(b'Hello world')
```

## Relevant links

- <router-link to="/blog/python-data-types">Blog: Python Data Types</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
- <router-link to="/builtin/bytearray">bytearray()</router-link>
