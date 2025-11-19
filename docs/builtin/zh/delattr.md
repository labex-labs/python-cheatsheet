---
title: 'Python delattr() 内置函数 - Python 速查表'
description: "这是 setattr() 的相关函数。参数为一个对象和一个字符串，字符串必须是对象某个属性的名称。如果对象允许，该函数将删除指定的属性。例如，delattr(x, 'foobar') 等同于 del x.foobar。"
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python delattr() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#delattr">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   它是 `setattr()` 的对应函数。参数是一个对象和一个字符串。该字符串必须是对象的一个属性的名称。如果对象允许，该函数将删除指定的属性。例如，`delattr(x, 'foobar')` 等同于 `del x.foobar`。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

Python 中的 `delattr()` 函数用于从对象中删除一个属性。它是 `setattr()` 和 <router-link to="/builtin/getattr">`getattr()`</router-link> 的对应函数。

## 语法

```python
delattr(object, name)
```

- **object**: 要从中删除属性的对象。
- **name**: 要删除的属性的名称，以字符串形式给出。

## 示例

### 从对象中删除属性

```python
class Person:
    name = "John"
    age = 30

person = Person()
print(person.__dict__)
delattr(person, "age")
print(person.__dict__)
```

```output
{'name': 'John', 'age': 30}
{'name': 'John'}
```

### 删除不存在的属性

```python
class Person:
    name = "John"

person = Person()
try:
    delattr(person, "age")
except AttributeError as e:
    print(f"Error: {e}")
```

```output
Error: age
```

## 相关链接

- <router-link :to="'/builtin/setattr'">`setattr()`</router-link>
- <router-link :to="'/builtin/getattr'">`getattr()`</router-link>
- <router-link :to="'/builtin/hasattr'">`hasattr()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP 基础</router-link>
