---
title: 'Python ord() 내장 함수 - Python 치트 시트'
description: '단일 유니코드 문자를 나타내는 문자열이 주어지면 해당 문자의 유니코드 코드 포인트를 나타내는 정수를 반환합니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python ord() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#ord">Python 3 문서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   하나의 유니코드 문자를 나타내는 문자열이 주어지면 해당 문자의 유니코드 코드 포인트를 나타내는 정수를 반환합니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

`ord()` 함수는 <router-link to="/builtin/chr">chr()</router-link>의 역함수입니다. 단일 문자열을 인수로 받아 해당 유니코드 코드 포인트 (정수) 를 반환합니다.

### 예시

```python
# 문자의 유니코드 코드 포인트 가져오기
print(ord('A'))
print(ord('€'))
print(ord('1'))
print(ord('a'))
```

출력:

```plaintext
65
8364
49
97
```

## 관련 링크

- <router-link to="/cheatsheet/manipulating-strings">치트 시트: 문자열 조작</router-link>
- <router-link to="/blog/python-data-types">블로그: Python 데이터 유형</router-link>
- <router-link to="/builtin/chr">chr()</router-link>
- <router-link to="/builtin/ascii">ascii()</router-link>
