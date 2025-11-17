---
title: 'Python hex() 내장 함수 - Python 치트 시트'
description: "정수를 '0x' 접두사가 붙은 소문자 16 진수 문자열로 변환합니다. x 가 Python int 객체가 아닌 경우, 정수를 반환하는 __index__() 메서드를 정의해야 합니다."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python hex() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#hex">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   정수 (integer) 를 "0x" 접두사가 붙은 소문자 16 진수 문자열로 변환합니다. x 가 Python int 객체가 아닌 경우, 정수를 반환하는 __index__() 메서드를 정의해야 합니다.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Python 의 `hex()` 함수는 정수를 해당 16 진수 표현으로 변환하는 내장 함수입니다. 결과 문자열에는 16 진수 값임을 나타내기 위해 "0x"가 접두사로 붙습니다. 이 함수는 메모리 주소나 색상 코드와 같이 저수준 프로그래밍에서 흔히 사용되는 16 진수 숫자를 다룰 때 유용합니다.

## Examples

```python
hex(1)
hex(10)
hex(100)
hex(1000)
```

Output:

```plaintext
'0x1'
'0xa'
'0x64'
'0x3e8'
```

## Relevant links

- <router-link :to="'/builtin/bin'">bin()</router-link>
- <router-link :to="'/builtin/int'">int()</router-link>
- <router-link :to="'/builtin/oct'">oct()</router-link>
- <router-link :to="'/cheatsheet/string-formatting'">문자열 포매팅</router-link>
- <router-link :to="'/blog/python-data-types'">Python 데이터 타입</router-link>
- <router-link :to="'/builtin/format'">format()</router-link>
