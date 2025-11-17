---
title: 'Python int() 내장 함수 - 파이썬 치트 시트'
description: '숫자 또는 문자열 x 로 구성된 정수 객체를 반환하거나, 인수가 없으면 0 을 반환합니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python int() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#int">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   숫자 또는 문자열 x 로 구성된 정수 객체를 반환하거나, 인수가 제공되지 않으면 0 을 반환합니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

Python 의 `int()` 함수는 값을 정수로 변환할 수 있게 해주는 내장 함수입니다. 인수로 문자열이나 숫자를 받을 수 있으며, 정수와 동등한 값을 반환합니다. 이는 정수가 필요한 수학 연산을 수행해야 하거나 값이 정수 타입임을 보장해야 할 때 특히 유용합니다.

## 예시

```python
# 문자열을 정수로 변환
from_integer = int('29')
print(from_integer)
print(type(from_integer))
```

출력:

```plaintext
29
<class 'int'>
```

```python
# 부동 소수점을 정수로 변환
from_float = int(-3.14)
print(from_float)
print(type(from_float))
```

출력:

```plaintext
-3
<class 'int'>
```

```python
# 인수가 제공되지 않으면 0 반환
int()
```

출력:

```plaintext
0
```

## 관련 링크

- <router-link :to="'/builtin/float'">float()</router-link>
- <router-link :to="'/builtin/str'">str()</router-link>
- <router-link :to="'/builtin/hex'">hex()</router-link>
- <router-link :to="'/builtin/oct'">oct()</router-link>
- <router-link :to="'/builtin/bin'">bin()</router-link>
- <router-link :to="'/blog/python-data-types'">Python 데이터 타입</router-link>
- <router-link :to="'/builtin/bool'">bool()</router-link>
- <router-link :to="'/builtin/complex'">complex()</router-link>
