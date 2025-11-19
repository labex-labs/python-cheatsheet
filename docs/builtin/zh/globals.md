---
title: 'Python globals() 内置函数 - Python 速查表'
description: '返回实现当前模块命名空间的字典。对于函数内的代码，此字典在函数定义时设置，无论函数在哪里被调用，它都保持不变。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 内置函数 globals()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    来自 <a target="_blank" href="https://docs.python.org/3/library/functions.html#globals">Python 3 文档</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   返回实现当前模块命名空间的字典。对于函数内的代码，它在函数定义时设置，并且无论函数在哪里被调用都保持不变。
  </base-disclaimer-content>
</base-disclaimer>

## 简介

Python 中的 `globals()` 函数返回一个表示当前全局符号表的字典。这包括当前作用域中的所有全局变量、函数和其他对象。

它可用于检查全局命名空间或通过字符串名称动态访问全局变量。

### 示例

```python
# 定义一个全局变量
global_var = "I am global"

def my_function():
    # 使用 globals() 访问全局变量
    global_dict = globals()
    print(global_dict["global_var"])

    # 修改一个全局变量
    global_dict["global_var"] = "Modified global"

my_function()
print(global_var)
```

```output
I am global
Modified global
```

你也可以使用 `globals()` 从函数内部创建新的全局变量：

```python
def create_global():
    globals()["new_global"] = "This was created dynamically"

create_global()
print(new_global)
```

```output
This was created dynamically
```

## 相关链接

- <router-link :to="'/builtin/locals'">`locals()`</router-link>
- <router-link :to="'/builtin/dir'">`dir()`</router-link>
- <router-link :to="'/builtin/exec'">`exec()`</router-link>
- <router-link :to="'/builtin/eval'">`eval()`</router-link>
- <router-link :to="'/cheatsheet/functions'">函数 (Functions)</router-link>
