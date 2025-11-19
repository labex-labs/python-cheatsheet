---
title: 'Python memoryview() 内置函数 - Python 速查表'
description: '返回从给定参数创建的“内存视图”对象。有关更多信息，请参阅内存视图。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python memoryview() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#memoryview">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   从给定参数创建“内存视图”对象。有关更多信息，请参阅内存视图 (Memory Views)。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

`memoryview()` 函数从给定参数创建内存视图对象。内存视图允许您访问另一个对象（如 `<router-link to="/builtin/bytes">bytes</router-link>` 或 `<router-link to="/builtin/bytearray">bytearray</router-link>` 对象）的内存，而无需复制。这对于大型数据非常高效，因为它避免了内存复制。

### 示例

以下是使用 `memoryview()` 的方法：

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

## 相关链接

- <router-link to="/blog/python-data-types">博客：Python 数据类型</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
- <router-link to="/builtin/bytearray">bytearray()</router-link>
