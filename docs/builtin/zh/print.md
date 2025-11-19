---
title: 'Python print() 内置函数 - Python 速查表'
description: '将对象打印到文本流文件，对象间用 sep 分隔，末尾跟 end。如果存在，sep、end、file 和 flush 必须作为关键字参数提供。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python print() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#print">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   将对象打印到文本流文件，对象间用 sep 分隔，末尾跟 end。sep、end、file 和 flush（如果存在）必须作为关键字参数给出。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

`print()` 函数会写入它所接收的参数的值。[...] 它处理多个参数、浮点数和字符串。字符串在打印时没有引号，并且项之间会插入一个空格，因此您可以很好地格式化内容：

```python
print('Hello world!')
```

```output
Hello world!
```

```python
a = 1
print('Hello world!', a)
```

```output
Hello world! 1
```

## end 关键字

可以使用关键字参数 `end` 来避免输出后的换行符，或者用不同的字符串结束输出：

```python
phrase = ['printed', 'with', 'a', 'dash', 'in', 'between']
for word in phrase:
    print(word, end='-')
```

```output
printed-with-a-dash-in-between-
```

## sep 关键字

如果存在多个对象，关键字 `sep` 指定如何分隔这些对象：

```python
print('cats', 'dogs', 'mice', sep=',')
```

```output
cats,dogs,mice
```

## 相关链接

- <router-link to="/cheatsheet/string-formatting">备忘单：字符串格式化</router-link>
- <router-link to="/cheatsheet/manipulating-strings">备忘单：操作字符串</router-link>
- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/input">input()</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
