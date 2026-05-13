---
title: Module Collections Python - Aide-mémoire Python
description: Le module `collections` fournit des types de conteneurs spécialisés comme `Counter`, `defaultdict` et `deque`.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Module Collections Python
</base-title>

Le module `collections` fournit des types de conteneurs spécialisés comme `Counter`, `defaultdict` et `deque`.

```python
from collections import Counter, defaultdict, deque
```

Utilisez ces classes lorsque `list` et `dict` classiques suffisent, mais rendent le code maladroit ou plus lent.

## Counter

`Counter` compte les objets hachables.

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

Vous pouvez aussi obtenir les valeurs les plus fréquentes :

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

`defaultdict` crée automatiquement les clés manquantes.

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

C’est utile pour regrouper des données :

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

`deque` est efficace pour ajouter et retirer des éléments aux deux extrémités.

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

`deque` peut aussi ne conserver que les valeurs les plus récentes avec `maxlen` :

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

## Liens pertinents

- <router-link to="/cheatsheet/lists-and-tuples">Aide-mémoire : Listes et tuples</router-link>
- <router-link to="/cheatsheet/dictionaries">Aide-mémoire : Dictionnaires</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
