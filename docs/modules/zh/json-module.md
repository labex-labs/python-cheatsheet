---
title: 'Python JSON 模块 - Python 速查表'
description: 'Python 内置 json 模块，可用于处理 JSON (JavaScript 对象表示法) 数据。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python JSON 模块
</base-title>

JSON 代表 JavaScript Object Notation，是一种用于存储和传输数据的轻量级格式。当数据从服务器发送到网页时，通常使用 JSON。

Python 具有内置的 `json` 模块，它允许我们处理 JSON 数据。

```python
import json
```

## JSON 数据类型

JSON 对象类似于 Python 字典，但存在以下差异：

- JSON 键始终是字符串。
- 字符串始终用双引号括起来。
- JSON 布尔值以小写字母开头。
- `null` 是 Python `None` 的 JSON 等价物。

JSON 支持的数据类型有：

- 字符串 (String)
- 数字 (Number)
- 布尔值 (boolean)
- null
- 对象 (Object)
- 数组 (Array)

示例：

```json
{
  "name": "Charles",
  "age": 33,
  "has_hair": false,
  "hobbies": ["photography", "running"],
  "appearance": {
    "eyes": "brown",
    "hair_color": null
  }
}
```

## JSON loads() 方法

使用 `json.loads` 方法，您可以解析 JSON 对象并将其转换为 Python 字典：

```python
import json

# 要解析的 JSON 字符串
json_person = '{"name": "Charles", "age": 33, "has_hair": false, "hobbies": ["photography", "running"]}'
# 将 JSON 字符串解析为 Python 字典
python_person = json.loads(json_person)
python_person
```

输出：

```plaintext
{'name': 'Charles', 'age': 33, 'has_hair': False, 'hobbies': ['photography', 'running']}
```

```python
type(python_person)
```

输出：

```plaintext
<class 'dict'>
```

```python
# 使用 get 方法访问字典值
python_person.get("name")
```

输出：

```plaintext
'Charles'
```

## JSON dumps() 方法

反之亦然。`dumps()` 方法将 Python 对象转换为 JSON 字符串：

```python
import json

# 要转换的 Python 字典
python_person = {'name': 'Charles', 'age': 33, 'has_hair': False, 'hobbies': ['photography', 'running']}
# 将 Python 对象转换为 JSON 字符串
json_person = json.dumps(python_person)

json_person
```

输出：

```plaintext
'{"name": "Charles", "age": 33, "has_hair": false, "hobbies": ["photography", "running"]}'
```

```python
type(json_person)
```

输出：

```plaintext
<class 'str'>
```

## 读取和写入 JSON 文件

### 读取 JSON 文件

```python
import json
# 读取 JSON 文件
with open("filename.json", "r") as f:
    json_content = json.loads(f.read())

# 注意：此行似乎是多余的 - json_content 已经被解析
json.loads(json_content)
```

输出：

```plaintext
{'name': 'Charles', 'age': 33, 'has_hair': False}
```

### 写入 JSON 文件

```python
import json

person = {'name': 'Charles', 'age': 33}

# 将 Python 字典写入 JSON 文件
with open("filename.json", "w") as f:
    f.write(json.dumps(person))
```

## 相关链接

- <router-link to="/cheatsheet/json-yaml">备忘单：JSON 和 YAML</router-link>
- <router-link to="/cheatsheet/dictionaries">备忘单：字典</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">备忘单：读取和写入文件</router-link>
- <router-link to="/blog/python-data-types">博客：Python 数据类型</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/open">open()</router-link>
