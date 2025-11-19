---
title: 'Python abs() 내장 함수 - Python 치트 시트'
description: '숫자의 절댓값을 반환합니다. 인수는 정수, 부동 소수점 숫자 또는 __abs__() 를 구현하는 객체일 수 있습니다. 인수가 복소수인 경우, 해당 복소수의 크기 (magnitude) 가 반환됩니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python abs() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#abs">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
    숫자의 절댓값을 반환합니다. 인수는 정수, 부동 소수점 숫자 또는 <code>__abs__()</code>를 구현하는 객체일 수 있습니다. 인수가 복소수인 경우 복소수의 크기 (magnitude) 가 반환됩니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

Python 의 `abs()` 함수는 숫자의 절댓값을 반환하는 내장 함수입니다. 정수, 부동 소수점 숫자, 심지어 복소수 (크기 반환) 까지 처리할 수 있습니다. 이 함수는 원래 부호와 관계없이 값이 양수임을 보장해야 할 때 유용합니다.

### 예시

```python
# 정수의 경우
abs(-1)
abs(0)

# 부동 소수점 숫자의 경우
abs(-3.14)

# 복소수의 경우 (크기 반환)
abs(3 + 4j)

# 다른 숫자 체계의 경우
abs(0x10)  # 16 진수
abs(0b10)  # 2 진수
abs(0o20)  # 8 진수
```

```output
1
0
3.14
5.0
16
2
16
```

## 관련 링크

- <router-link to="/blog/python-data-types">블로그: Python 데이터 유형</router-link>
- <router-link to="/builtin/pow">pow()</router-link>
- <router-link to="/builtin/round">round()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
- <router-link to="/builtin/complex">complex()</router-link>
