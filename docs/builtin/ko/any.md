---
title: 'Python any() 내장 함수 - Python 치트 시트'
description: '반복 가능한 요소 중 하나라도 참이면 True 를 반환합니다. 반복 가능한 객체가 비어 있으면 False 를 반환합니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python any() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#any">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
    반복 가능한 (iterable) 요소 중 하나라도 참 (True) 이면 True 를 반환합니다. 반복 가능한 객체가 비어 있으면 False 를 반환합니다.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Python 의 `any()` 함수는 내장 함수로, 반복 가능한 객체 내의 요소 중 적어도 하나가 `True`인지 확인합니다. 어떤 요소라도 참으로 평가되면 `True`를 반환하고, 반복 가능한 객체가 비어 있거나 모든 요소가 거짓이면 `False`를 반환합니다. 이는 컬렉션의 항목 중 조건이 충족되는 것이 있는지 신속하게 확인하는 데 유용합니다.

## Examples

```python
# 모든 값이 거짓 (falsy) 인 경우
any([0, '', False])

# 참 (truthy) 값 하나 (2) 를 포함하는 경우
any([0, 2, False])

# 빈 반복 가능한 객체는 False 로 간주됨
any([])
```

```output
False
True
False
```

## Relevant links

- <router-link to="/cheatsheet/control-flow">치트 시트: 제어 흐름</router-link>
- <router-link to="/cheatsheet/comprehensions">치트 시트: 컴프리헨션</router-link>
- <router-link to="/blog/python-data-types">블로그: Python 데이터 타입</router-link>
- <router-link to="/builtin/all">all()</router-link>
- <router-link to="/builtin/bool">bool()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
