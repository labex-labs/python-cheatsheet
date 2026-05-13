---
title: "Модуль Collections Python - Шпаргалка Python"
description: "Модуль `collections` предоставляет специализированные типы контейнеров, такие как `Counter`, `defaultdict` и `deque`."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Модуль Collections Python
</base-title>

Модуль `collections` предоставляет специализированные типы контейнеров, такие как `Counter`, `defaultdict` и `deque`.

```python
from collections import Counter, defaultdict, deque
```

Используйте эти классы, когда обычные `list` и `dict` работают, но делают код неудобным или медленнее.

## Counter

`Counter` считает хешируемые объекты.

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

Можно также получить самые частые значения:

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

`defaultdict` автоматически создает отсутствующие ключи.

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

Это полезно при группировке данных:

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

`deque` эффективно добавляет и удаляет элементы с обоих концов.

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

`deque` также может хранить только самые новые значения с `maxlen`:

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

## Ссылки по теме

- <router-link to="/cheatsheet/lists-and-tuples">Шпаргалка: списки и кортежи</router-link>
- <router-link to="/cheatsheet/dictionaries">Шпаргалка: словари</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
