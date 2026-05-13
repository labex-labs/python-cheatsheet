---
title: Python urllib.request 模块 - Python 速查表
description: `urllib.request` 模块可以让你使用 Python 标准库从 URL 获取数据。
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python urllib.request 模块
</base-title>

`urllib.request` 模块可以让你使用 Python 标准库从 URL 获取数据。

```python
from urllib import request
```

对于很多项目来说，Requests 这类第三方库更方便。如果你希望只使用标准库，就可以选择 `urllib.request`。

## 打开 URL

`urlopen` 会返回一个响应对象。

```python
from urllib import request

response = request.urlopen('data:text/plain,Hello%20Python')
print(response.headers.get_content_type())
```

```output
text/plain
```

## 读取响应数据

响应正文会以字节形式返回。

```python
from urllib import request

response = request.urlopen('data:text/plain,Hello%20Python')
content = response.read()
print(type(content).__name__)
print(content.decode('utf-8'))
```

```output
bytes
Hello Python
```

## 添加超时

在打开真实网络 URL 时，请设置超时，这样程序就不会无限等待。

```python
from urllib import request

response = request.urlopen('data:text/plain,ok', timeout=5)
print(response.read().decode('utf-8'))
```

```output
ok
```

<base-warning>
  <base-warning-title>
    WARNING
  </base-warning-title>
  <base-warning-content>
    网络请求可能因为很多原因失败。请处理 <code>urllib.error.URLError</code> 之类的异常，并且在获取不可信 URL 时要格外小心。
  </base-warning-content>
</base-warning>

## 相关链接

- <router-link to="/modules/json-module">模块：json</router-link>
- <router-link to="/cheatsheet/exception-handling">速查表：异常处理</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">速查表：读写文件</router-link>
