---
title: 'Python list() 내장 함수 - Python 치트 시트'
description: 'list 는 함수라기보다는 리스트 및 시퀀스 유형 (list, tuple, range) 에 설명된 대로 변경 가능한 시퀀스 유형입니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python list() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#list">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   list 는 함수라기보다는 변경 가능한 시퀀스 타입입니다. 이는 Lists and Sequence Types — <router-link to="/builtin/list">list</router-link>, <router-link to="/builtin/tuple">tuple</router-link>, <router-link to="/builtin/range">range</router-link>에서 설명하는 내용입니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

Python 에서 `list`는 함수가 아니라 내장된 변경 가능한 시퀀스 타입입니다. 이는 항목들의 순서가 있는 모음을 담을 수 있고 내용을 변경할 수 있는 데이터 구조를 의미합니다. 리스트는 대괄호 `[]` 또는 `list()` 생성자를 사용하여 생성할 수 있습니다.

## 예시

```python
l = list()
print(l)
l.append(1)
l.append(2)
print(l)
```

```output
[]
[1, 2]
```

## 관련 링크

- <router-link to="/cheatsheet/lists-and-tuples">치트 시트: 리스트와 튜플</router-link>
- <router-link to="/cheatsheet/comprehensions">치트 시트: 컴프리헨션</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">블로그: Python 컴프리헨션 단계별 가이드</router-link>
- <router-link to="/blog/python-data-types">블로그: Python 데이터 타입</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/len">len()</router-link>
