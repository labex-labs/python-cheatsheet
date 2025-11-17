---
title: 'Python divmod() 내장 함수 - 파이썬 치트 시트'
description: '두 개의 (복소수가 아닌) 숫자를 인수로 받아 정수 나눗셈 시 몫과 나머지를 쌍으로 반환합니다. 피연산자 유형이 혼합된 경우 이항 산술 연산자의 규칙이 적용됩니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python divmod() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#divmod">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   두 개의 (복소수가 아닌) 숫자를 인수로 받아 정수 나눗셈 시 몫과 나머지를 포함하는 한 쌍의 숫자를 반환합니다. 피연산자 유형이 혼합된 경우 이항 산술 연산자에 대한 규칙이 적용됩니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

`divmod()` 함수는 두 개의 숫자를 인수로 받아 정수 나눗셈의 몫과 나머지를 포함하는 튜플을 반환합니다. 이는 단일 호출로 두 결과를 모두 얻을 수 있는 편리한 방법입니다.

### 예시

```python
# 몫과 나머지 가져오기
quotient, remainder = divmod(10, 3)
print(quotient)
print(remainder)
print(divmod(2, 2))
print(divmod(10, 2))
print(divmod(7, 2))
```

출력:

```plaintext
3
1
(1, 0)
(5, 0)
(3, 1)
```

## 관련 링크

- <router-link :to="'/cheatsheet/lists-and-tuples'">리스트와 튜플</router-link>
- <router-link :to="'/blog/python-data-types'">Python 데이터 유형</router-link>
- <router-link :to="'/builtin/int'">`int()`</router-link>
- <router-link :to="'/builtin/float'">`float()`</router-link>
- <router-link :to="'/builtin/tuple'">`tuple()`</router-link>
