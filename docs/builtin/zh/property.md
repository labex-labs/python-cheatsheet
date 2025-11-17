---
title: 'Python property() 内置函数 - Python 速查表'
description: '返回一个属性对象。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python property() 内置函数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#property">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   返回一个属性（property）属性。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

`property()` 函数用于创建属性（property）属性。属性是一种特殊的属性，它具有 getter、setter 和 delete 方法。这允许您在获取、设置或删除属性值时添加逻辑。

更常见的方法是使用 `@property` 装饰器，它是使用 `property()` 的更便捷方式。

### 示例

这是一个使用 `property()` 创建只读属性的示例：

```python
class Person:
    def __init__(self, name):
        self._name = name

    def get_name(self):
        print("Getting name")
        return self._name

    # 创建一个属性
    name = property(get_name)

p = Person("John")
print(p.name)  # 这会调用 get_name()
```

输出：

```plaintext
Getting name
John
```

注意：`p.name = "Jane"` 会引发 AttributeError，因为它没有 setter。

这是使用 `@property` 装饰器的更常见做法：

```python
class Person:
    def __init__(self, name):
        self._name = name

    @property
    def name(self):
        print("Getting name")
        return self._name

p = Person("John")
print(p.name)
```

输出：

```plaintext
Getting name
John
```

## 相关链接

- <router-link to="/cheatsheet/oop-basics">备忘单：OOP 基础</router-link>
- <router-link to="/cheatsheet/decorators">备忘单：装饰器</router-link>
- <router-link to="/cheatsheet/dataclasses">备忘单：数据类</router-link>
- <router-link to="/builtin/getattr">getattr()</router-link>
- <router-link to="/builtin/setattr">setattr()</router-link>
- <router-link to="/builtin/delattr">delattr()</router-link>
