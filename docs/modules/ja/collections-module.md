---
title: "Python Collections モジュール - Python チートシート"
description: "`collections` モジュールは、`Counter`、`defaultdict`、`deque` のような特化したコンテナ型を提供します。"
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Collections モジュール
</base-title>

`collections` モジュールは、`Counter`、`defaultdict`、`deque` のような特化したコンテナ型を提供します。

```python
from collections import Counter, defaultdict, deque
```

普通の `list` や `dict` で足りるが、コードが扱いにくくなったり遅くなったりする場合に使います。

## Counter

`Counter` はハッシュ可能なオブジェクトの出現回数を数えます。

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

よく出る値を取得することもできます。

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

`defaultdict` は存在しないキーを自動で作成します。

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

これはデータのグループ化に便利です。

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

`deque` は両端への追加と削除に効率的です。

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

`deque` は `maxlen` を使って最新の値だけを保持することもできます。

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

## 関連リンク

- <router-link to="/cheatsheet/lists-and-tuples">チートシート: リストとタプル</router-link>
- <router-link to="/cheatsheet/dictionaries">チートシート: 辞書</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
