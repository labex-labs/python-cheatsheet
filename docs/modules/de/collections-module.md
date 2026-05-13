---
title: "Python Collections Modul - Python Spickzettel"
description: "Das `collections`-Modul bietet spezialisierte Container-Datentypen wie `Counter`, `defaultdict` und `deque`."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Collections Modul
</base-title>

Das `collections`-Modul bietet spezialisierte Container-Datentypen wie `Counter`, `defaultdict` und `deque`.

```python
from collections import Counter, defaultdict, deque
```

Verwende diese Klassen, wenn normale `list`- und `dict`-Objekte zwar funktionieren, den Code aber umständlich oder langsamer machen.

## Counter

`Counter` zählt hashbare Objekte.

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

Du kannst dir auch die häufigsten Werte anzeigen lassen:

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

`defaultdict` erstellt fehlende Schlüssel automatisch.

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

Das ist hilfreich beim Gruppieren von Daten:

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

`deque` ist effizient beim Anhängen und Entfernen an beiden Enden.

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

`deque` kann mit `maxlen` auch nur die neuesten Werte behalten:

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

## Relevante Links

- <router-link to="/cheatsheet/lists-and-tuples">Spickzettel: Listen und Tupel</router-link>
- <router-link to="/cheatsheet/dictionaries">Spickzettel: Dictionaries</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
