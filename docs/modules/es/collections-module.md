---
title: "Módulo Collections de Python - Hoja de trucos de Python"
description: "El módulo `collections` proporciona tipos de contenedor especializados como `Counter`, `defaultdict` y `deque`."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Collections de Python
</base-title>

El módulo `collections` proporciona tipos de contenedor especializados como `Counter`, `defaultdict` y `deque`.

```python
from collections import Counter, defaultdict, deque
```

Usa estas clases cuando `list` y `dict` normales funcionan, pero hacen que el código quede incómodo o sea más lento.

## Counter

`Counter` cuenta objetos hashables.

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

También puedes pedir los valores más comunes:

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

`defaultdict` crea automáticamente las claves que faltan.

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

Esto es útil al agrupar datos:

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

`deque` es eficiente para añadir y quitar elementos por ambos extremos.

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

`deque` también puede conservar solo los valores más recientes con `maxlen`:

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

## Enlaces relacionados

- <router-link to="/cheatsheet/lists-and-tuples">Hoja de trucos: Listas y tuplas</router-link>
- <router-link to="/cheatsheet/dictionaries">Hoja de trucos: Diccionarios</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
