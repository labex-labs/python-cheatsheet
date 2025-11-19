---
title: 'Python float() 내장 함수 - 파이썬 치트 시트'
description: '숫자 또는 문자열 x 로 부동 소수점 숫자를 반환합니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python float() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#float">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   숫자 또는 문자열 x 로 부동 소수점 숫자를 반환합니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

Python 의 `float()` 함수는 숫자 또는 숫자를 포함하는 문자열을 부동 소수점 숫자로 변환할 수 있게 해주는 내장 함수입니다. 이는 십진수 정밀도가 필요한 산술 연산을 수행해야 할 때 특히 유용합니다.

<router-link to="/builtin/float">float()</router-link> 함수는 숫자 또는 문자열에서 부동 소수점 숫자를 반환합니다.

## 예시

```python
float('10')
float(10)
```

```output
10.0
10.0
```

## 관련 링크

- <router-link :to="'/builtin/int/'">int()</router-link>
- <router-link :to="'/builtin/complex/'">complex()</router-link>
- <router-link :to="'/blog/python-data-types/'">Python 데이터 유형</router-link>
- <router-link :to="'/builtin/str'">str()</router-link>
- <router-link :to="'/builtin/round'">round()</router-link>
- <router-link :to="'/cheatsheet/string-formatting'">문자열 포매팅</router-link>
