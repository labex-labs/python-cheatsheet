---
title: Módulo Collections do Python - Folha de Referência Python
description: O módulo `collections` fornece tipos de contêiner especializados como `Counter`, `defaultdict` e `deque`.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Collections do Python
</base-title>

O módulo `collections` fornece tipos de contêiner especializados como `Counter`, `defaultdict` e `deque`.

```python
from collections import Counter, defaultdict, deque
```

Use essas classes quando `list` e `dict` normais funcionam, mas deixam o código desajeitado ou mais lento.

## Counter

`Counter` conta objetos hasháveis.

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

Você também pode ver os valores mais comuns:

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

`defaultdict` cria chaves ausentes automaticamente.

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

Isso é útil ao agrupar dados:

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

`deque` é eficiente para adicionar e remover elementos nas duas extremidades.

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

`deque` também pode manter apenas os valores mais recentes com `maxlen`:

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

## Links relacionados

- <router-link to="/cheatsheet/lists-and-tuples">Folha de Referência: Listas e tuplas</router-link>
- <router-link to="/cheatsheet/dictionaries">Folha de Referência: Dicionários</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
