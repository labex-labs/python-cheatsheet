---
title: 'Python frozenset() 내장 함수 - Python 치트 시트'
description: '반복 가능한 요소에서 가져온 요소를 포함하는 새 frozenset 객체를 반환합니다. frozenset 은 내장 클래스입니다. 이 클래스에 대한 문서는 frozenset 및 Set Types — set, frozenset 을 참조하십시오.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python frozenset() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#frozenset">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   새로운 frozenset 객체를 반환하며, 선택적으로 iterable 에서 요소를 가져옵니다. <router-link to="/builtin/frozenset">frozenset</router-link>은 내장 클래스입니다. 이 클래스에 대한 설명서는 <router-link to="/builtin/frozenset">frozenset</router-link> 및 Set Types — <router-link to="/builtin/set">set</router-link>, <router-link to="/builtin/frozenset">frozenset</router-link>을 참조하십시오.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

Python 의 `frozenset()` 함수는 iterable 로부터 불변 (immutable) 이며 해시 가능한 (hashable) 집합을 생성하는 내장 함수입니다. 일반 `set`과 달리 `frozenset`은 생성 후에는 수정할 수 없으므로 요소를 추가하거나 제거할 수 없습니다. 이러한 불변성 덕분에 딕셔너리 키로 사용하거나 다른 집합의 요소로 사용하는 데 적합합니다.

## 예시

```python
frozenset([1, 2, 3])
frozenset({1, 2, 3})
frozenset((1, 2, 3))
```

```output
frozenset({1, 2, 3})
frozenset({1, 2, 3})
frozenset({1, 2, 3})
```

## 관련 링크

- <router-link :to="'/builtin/set'">`set()`</router-link>
- <router-link :to="'/cheatsheet/sets'">집합 (Sets)</router-link>
- <router-link :to="'/blog/python-sets-what-why-how'">Python 집합: 무엇을, 왜, 어떻게</router-link>
- <router-link :to="'/builtin/tuple'">`tuple()`</router-link>
- <router-link :to="'/builtin/hash'">`hash()`</router-link>
