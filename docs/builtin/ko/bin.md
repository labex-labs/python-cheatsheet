---
title: 'Python bin() 내장 함수 - Python 치트 시트'
description: "'0b' 접두사가 붙은 이진 문자열로 정수를 변환합니다. 결과는 유효한 Python 표현식입니다. x 가 Python int 객체가 아닌 경우 __index__() 메서드를 정의하여 정수를 반환해야 합니다."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python bin() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#bin">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
    정수 (integer) 를 "0b" 접두사가 붙은 이진 문자열로 변환합니다. 결과는 유효한 Python 표현식입니다. x 가 Python int 객체가 아닌 경우, 정수를 반환하는 <code>__index__()</code> 메서드를 정의해야 합니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

`bin()` 함수는 정수를 이진 표현으로 변환합니다. 결과 문자열에는 이진수임을 나타내는 "0b" 접두사가 붙습니다.

### 예시

`bin()` 사용 예시는 다음과 같습니다.

```python
# 정수를 이진수로 변환
print(bin(2))
print(bin(7))
print(bin(1))
print(bin(10))
print(bin(100))
print(bin(1000))
```

```output
0b10
0b111
0b1
0b1010
0b1100100
0b1111101000
```

## 관련 링크

- <router-link to="/blog/python-data-types">블로그: Python 데이터 타입</router-link>
- <router-link to="/cheatsheet/string-formatting">치트 시트: 문자열 포매팅</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/hex">hex()</router-link>
- <router-link to="/builtin/oct">oct()</router-link>
- <router-link to="/builtin/format">format()</router-link>
