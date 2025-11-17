---
title: 'Python complex() 내장 함수 - Python 치트 시트'
description: '복소수 값 real + imag*1j 를 반환하거나 문자열 또는 숫자를 복소수로 변환합니다. [...] 각 인수는 모든 숫자 유형 (복소수 포함) 일 수 있습니다. imag 가 생략되면 기본값은 0 이며 생성자는 int 및 float 와 같은 숫자 변환 역할을 합니다. 두 인수가 모두 생략되면 0j 를 반환합니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python complex() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#complex">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   복소수 real + imag*1j 를 반환하거나 문자열 또는 숫자를 복소수로 변환합니다. [...] 각 인수는 모든 숫자 유형 (복소수 포함) 일 수 있습니다. imag 가 생략되면 기본값은 0 이며 생성자는 <router-link to="/builtin/int">`int()`</router-link> 및 <router-link to="/builtin/float">`float()`</router-link>와 같은 숫자 변환 역할을 합니다. 두 인수가 모두 생략되면 0j 를 반환합니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

`complex()` 함수는 복소수를 생성합니다. 실수부와 허수부를 인수로 받을 수 있습니다. 인수가 하나만 제공되면 실수부로 간주되며 허수부는 0 입니다.

## 예시

```python
# 실수부와 허수부를 가진 복소수 생성
print(complex(3, 4))

# 실수부만 가진 복소수 생성
print(complex(5))

# 문자열로부터 복소수 생성
print(complex("2+3j"))
```

출력:

```plaintext
(3+4j)
(5+0j)
(2+3j)
```

## 관련 링크

- <router-link to="/blog/python-data-types">블로그: Python 데이터 유형</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
- <router-link to="/builtin/abs">abs()</router-link>
- <router-link to="/builtin/pow">pow()</router-link>
