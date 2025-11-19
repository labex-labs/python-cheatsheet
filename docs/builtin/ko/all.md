---
title: 'Python all() 내장 함수 - 파이썬 치트 시트'
description: '반복 가능한 모든 요소가 참이거나 (반복 가능 객체가 비어 있을 때) 참을 반환합니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python all() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#all">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
    반복 가능한 (iterable) 객체의 모든 요소가 참 (True) 이거나, 반복 가능한 객체가 비어 있는 경우 True 를 반환합니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

Python 의 `all()` 함수는 내장 함수로, 반복 가능한 객체 내의 모든 요소가 `True`인지 확인합니다. 모든 요소가 참으로 평가되거나 반복 가능한 객체가 비어 있는 경우 `True`를 반환합니다. 이는 목록의 모든 숫자가 양수인지 확인하거나 양식의 모든 필수 필드가 채워졌는지 확인하는 등 컬렉션 항목 전반에 걸쳐 조건을 검증할 때 유용합니다.

## 예시

```python
# 모든 값이 truthy 임
all([1, 2, 3])

# falsy 값 (0) 포함
all([1, 0, 3])

# falsy 값 (빈 문자열) 포함
all(['a', '', 'c'])

# 빈 반복 가능한 객체는 True 로 간주됨
all([])
```

```output
True
False
False
True
```

## 관련 링크

- <router-link to="/cheatsheet/control-flow">치트 시트: 제어 흐름</router-link>
- <router-link to="/cheatsheet/comprehensions">치트 시트: 컴프리헨션</router-link>
- <router-link to="/blog/python-data-types">블로그: Python 데이터 타입</router-link>
- <router-link to="/builtin/any">any()</router-link>
- <router-link to="/builtin/bool">bool()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
