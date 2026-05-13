---
title: "Python Collections 模块 - Python 速查表"
description: "`collections` 模块提供了一些专用的容器数据类型，例如 `Counter`、`defaultdict` 和 `deque`。"
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Collections 模块
</base-title>

`collections` 模块提供了 `Counter`、`defaultdict` 和 `deque` 等专用容器数据类型。

```python
from collections import Counter, defaultdict, deque
```

当普通的 `list` 和 `dict` 也能完成任务，但代码会显得别扭或更慢时，就可以使用这些类。

## Counter

`Counter` 用来统计可哈希对象的出现次数。

```python
from collections import Counter

letters = Counter('banana')
print(letters)
print(letters['a'])
```

```output
Counter({'a': 3, 'n': 2, 'b': 1})
3
```

你也可以直接获取最常见的值：

```python
from collections import Counter

words = ['python', 'java', 'python', 'go', 'python', 'go']
counts = Counter(words)
print(counts.most_common(2))
```

```output
[('python', 3), ('go', 2)]
```

## defaultdict

`defaultdict` 会自动创建缺失的键。

```python
from collections import defaultdict

scores = defaultdict(list)
scores['python'].append(10)
scores['python'].append(9)
print(scores['python'])
print(scores['javascript'])
```

```output
[10, 9]
[]
```

这在分组数据时非常有用：

```python
from collections import defaultdict

users = [('Ada', 'admin'), ('Grace', 'editor'), ('Linus', 'admin')]
by_role = defaultdict(list)

for name, role in users:
    by_role[role].append(name)

print(dict(by_role))
```

```output
{'admin': ['Ada', 'Linus'], 'editor': ['Grace']}
```

## deque

`deque` 在两端追加和弹出元素时都很高效。

```python
from collections import deque

tasks = deque(['build', 'test'])
tasks.appendleft('lint')
tasks.append('deploy')
print(tasks.popleft())
print(tasks.pop())
print(tasks)
```

```output
lint
deploy
deque(['build', 'test'])
```

`deque` 还可以通过 `maxlen` 只保留最新的值：

```python
from collections import deque

recent = deque(maxlen=3)
for page in ['home', 'docs', 'blog', 'contact']:
    recent.append(page)

print(recent)
```

```output
deque(['docs', 'blog', 'contact'], maxlen=3)
```

## 相关链接

- <router-link to="/cheatsheet/lists-and-tuples">速查表：列表和元组</router-link>
- <router-link to="/cheatsheet/dictionaries">速查表：字典</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
