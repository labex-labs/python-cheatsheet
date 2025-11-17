---
title: 'Python len() 내장 함수 - 파이썬 치트 시트'
description: '객체의 길이 (항목 수) 를 반환합니다. 인수는 시퀀스 (문자열, 바이트, 튜플, 리스트, 범위 등) 또는 컬렉션 (딕셔너리, 세트, 프로즌 세트 등) 일 수 있습니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python len() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#len">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   객체의 길이 (항목 수) 를 반환합니다. 인수는 시퀀스 (예: 문자열, 바이트, <router-link to="/builtin/tuple">튜플</router-link>, <router-link to="/builtin/list">리스트</router-link> 또는 <router-link to="/builtin/range">range</router-link>) 이거나 컬렉션 (예: <router-link to="/builtin/dict">딕셔너리</router-link>, <router-link to="/builtin/set">집합</router-link> 또는 <router-link to="/builtin/frozenset">프리즌 셋</router-link>) 일 수 있습니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

Python 의 `len()` 함수는 객체의 항목 수 (길이) 를 반환하는 내장 함수입니다. 이 객체는 시퀀스 (문자열, 리스트, 튜플 등) 또는 컬렉션 (딕셔너리, 집합 등) 일 수 있습니다.

## 예시

객체의 항목 수를 반환합니다:

```python
len('hello')
len(['cat', 3, 'dog'])
```

출력:

```plaintext
5
3
```

## 공백 테스트

<base-warning>
  <base-warning-title>공백 테스트</base-warning-title>
    <base-warning-content>
      문자열, 리스트, 딕셔너리 등의 공백 테스트에는
    <code>len</code>을 사용해서는 안 되며, 직접적인 부울 평가를 선호해야 합니다.
  </base-warning-content>
</base-warning>

```python
a = [1, 2, 3]

# 나쁨
if len(a) > 0:  # True 로 평가됨
    print("the list is not empty!")

# 좋음
if a:  # True 로 평가됨
    print("the list is not empty!")
```

출력:

```plaintext
the list is not empty!
the list is not empty!
```

## 관련 링크

- <router-link to="/cheatsheet/lists-and-tuples">치트 시트: 리스트와 튜플</router-link>
- <router-link to="/cheatsheet/dictionaries">치트 시트: 딕셔너리</router-link>
- <router-link to="/cheatsheet/sets">치트 시트: 집합</router-link>
- <router-link to="/blog/python-data-types">블로그: Python 데이터 타입</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/set">set()</router-link>
