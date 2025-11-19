---
title: 'Python oct() 내장 함수 - Python 치트 시트'
description: "정수를 8 진수 문자열 ('0o' 접두사 포함) 로 변환합니다. 결과는 유효한 Python 표현식입니다. x 가 Python int 객체가 아닌 경우 __index__() 메서드를 정의하여 정수를 반환해야 합니다."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python oct() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#oct">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   정수 (integer) 를 "0o" 접두사가 붙은 8 진수 문자열로 변환합니다. 결과는 유효한 Python 표현식입니다. x 가 Python <router-link to="/builtin/int">int</router-link> 객체가 아닌 경우, 정수를 반환하는 __index__() 메서드를 정의해야 합니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

`oct()` 함수는 정수를 8 진수 표현으로 변환합니다. 결과 문자열에는 8 진수임을 나타내기 위해 "0o"가 접두사로 붙습니다.

### 예시

`oct()` 사용법의 몇 가지 예시는 다음과 같습니다.

```python
# 정수를 8 진수로 변환
print(oct(8))
print(oct(10))
print(oct(100))
print(oct(1))
print(oct(1000))
```

```output
0o10
0o12
0o144
0o1
0o1750
```

## 관련 링크

- <router-link to="/blog/python-data-types">블로그: Python 데이터 유형</router-link>
- <router-link to="/cheatsheet/string-formatting">치트 시트: 문자열 포매팅</router-link>
- <router-link to="/builtin/bin">bin()</router-link>
- <router-link to="/builtin/hex">hex()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/format">format()</router-link>
