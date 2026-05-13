---
title: Python Collections 모듈 - Python 치트시트
description: `collections` 모듈은 `Counter`, `defaultdict`, `deque` 같은 특화된 컨테이너 자료형을 제공합니다.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Collections 모듈
</base-title>

`collections` 모듈은 `Counter`, `defaultdict`, `deque` 같은 특화된 컨테이너 자료형을 제공합니다.

```python
from collections import Counter, defaultdict, deque
```

일반 `list`와 `dict`로도 되지만 코드가 어색해지거나 느려질 때 이 클래스들을 사용합니다.

## Counter

`Counter`는 해시 가능한 객체의 개수를 셉니다.

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

가장 많이 나온 값도 확인할 수 있습니다.

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

`defaultdict`는 없는 키를 자동으로 만듭니다.

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

데이터를 그룹화할 때 유용합니다.

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

`deque`는 양쪽 끝에서 추가하고 빼는 작업에 효율적입니다.

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

`deque`는 `maxlen`을 사용해 최신 값만 유지할 수도 있습니다.

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

## 관련 링크

- <router-link to="/cheatsheet/lists-and-tuples">치트시트: 리스트와 튜플</router-link>
- <router-link to="/cheatsheet/dictionaries">치트시트: 딕셔너리</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
