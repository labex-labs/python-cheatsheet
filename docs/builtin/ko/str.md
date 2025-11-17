---
title: 'Python str() 내장 함수 - Python 치트 시트'
description: '객체의 문자열 버전을 반환합니다. 객체가 제공되지 않으면 빈 문자열을 반환합니다. 그렇지 않으면 str() 의 동작은 인코딩 또는 오류 인수가 제공되었는지 여부에 따라 달라집니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python str() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#func-str">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
    객체의 문자열 버전을 반환합니다. 객체가 제공되지 않으면 빈 문자열을 반환합니다. 인코딩 또는 errors 가 제공되는지에 따라 str() 의 동작이 달라집니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

Python 의 `str()` 함수는 객체의 문자열 버전을 반환하는 내장 함수입니다. 객체가 제공되지 않으면 빈 문자열을 반환합니다. 다른 데이터 유형을 문자열로 변환하는 다용도 함수입니다.

## 예시

```python
# 정수를 문자열로 변환
from_integer = str(29)
print(from_integer)
print(type(from_integer))
```

출력:

```plaintext
29
<class 'str'>
```

```python
# 부동 소수점을 문자열로 변환
from_float = str(-3.14)
print(from_float)
print(type(from_float))
```

출력:

```plaintext
-3.14
<class 'str'>
```

```python
# 빈 문자열 반환
str()
```

출력:

```plaintext
''
```

## 관련 링크

- <router-link to="/cheatsheet/manipulating-strings">치트 시트: 문자열 조작</router-link>
- <router-link to="/cheatsheet/string-formatting">치트 시트: 문자열 포매팅</router-link>
- <router-link to="/blog/python-data-types">블로그: Python 데이터 유형</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
- <router-link to="/builtin/ascii">ascii()</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/set">set()</router-link>
