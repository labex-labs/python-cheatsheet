---
title: 'Python filter() 내장 함수 - Python 치트 시트'
description: '반복 가능한 (iterable) 요소 중 함수가 참 (True) 을 반환하는 요소로 이터레이터를 구성합니다. 함수가 None 이면 항등 함수가 가정되어, 반복 가능한 요소 중 거짓 (False) 인 모든 요소가 제거됩니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python filter() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#filter">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   함수가 참을 반환하는 iterable 의 요소들로부터 <router-link to="/builtin/iter">이터레이터</router-link>를 구성합니다. iterable 은 시퀀스, 반복을 지원하는 컨테이너 또는 <router-link to="/builtin/iter">이터레이터</router-link>일 수 있습니다. 함수가 None 인 경우, 항등 함수가 가정됩니다. 즉, iterable 의 거짓인 모든 요소가 제거됩니다.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Python 의 `filter()` 함수는 특정 조건을 만족하는 항목들을 추출하기 위해 iterable 을 처리할 수 있게 해주는 내장 함수입니다. 이 함수는 기준을 충족하는 요소들을 가진 <router-link to="/builtin/iter">이터레이터</router-link>를 반환합니다.

## Syntax

```python
filter(function, iterable)
```

- **function**: iterable 의 각 항목에 대해 실행할 함수입니다. 각 항목에 대해 `True` 또는 `False`를 반환해야 합니다.
- **iterable**: 필터링할 iterable (예: 리스트, 튜플 또는 문자열).

## Description

`filter()` 함수는 함수가 `True`를 반환하는 iterable 의 요소들로부터 이터레이터를 구성합니다. 함수가 `None`인 경우, iterable 의 거짓인 모든 요소를 제거합니다.

## Example

```python
def is_even(num):
    return num % 2 == 0

numbers = [1, 2, 3, 4, 5, 6]
even_numbers = list(filter(is_even, numbers))
print(even_numbers)
```

```output
[2, 4, 6]
```

이 예제에서 `is_even` 함수는 숫자가 짝수인지 아닌지를 판별하도록 정의되었습니다. filter 메서드는 `두 개의 인자`를 받습니다: `첫 번째 인자`는 리스트의 각 요소에 적용할 함수이며, `두 번째 인자`는 필터링할 리스트입니다. filter 메서드는 <router-link to="/builtin/iter">이터레이터</router-link>를 반환하며, 이는 리스트로 변환되어 even_numbers 변수에 저장됩니다. 최종 출력은 원본 리스트에서 가져온 짝수들의 리스트입니다.

## Relevant links

- <router-link :to="'/builtin/map'">map()</router-link>: iterable 의 모든 항목에 함수를 적용하고 결과의 이터레이터를 반환합니다.
- <router-link :to="'/builtin/iter'">iter()</router-link>: 이터레이터 객체를 반환합니다.
- <router-link :to="'/blog/python-comprehensions-step-by-step'">List Comprehensions</router-link>: 리스트를 생성하는 간결한 방법으로, 종종 `filter()`의 대안으로 사용됩니다.
- <router-link :to="'/cheatsheet/comprehensions'">Comprehensions</router-link>
- <router-link :to="'/cheatsheet/functions'">Functions</router-link>
- <router-link :to="'/builtin/reduce'">reduce()</router-link>
