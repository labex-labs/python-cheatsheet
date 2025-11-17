---
title: 'Python ascii() 내장 함수 - Python 치트 시트'
description: "repr() 과 마찬가지로 객체의 출력 가능한 표현을 담은 문자열을 반환하지만, repr() 이 반환한 문자열 내의 비 ASCII 문자를 \\x, \\u 또는 \\U 이스케이프를 사용하여 이스케이프 처리합니다."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python ascii() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#ascii">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
    <code>repr()</code>과 마찬가지로 객체의 출력 가능한 표현을 포함하는 문자열을 반환하지만, <code>repr()</code>이 반환하는 문자열 내의 비-ASCII 문자는 <code>\x</code>, <code>\u</code> 또는 <code>\U</code> 이스케이프를 사용하여 이스케이프 처리합니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

Python 의 `ascii()` 함수는 `repr()`과 유사하게 객체의 출력 가능한 표현을 포함하는 문자열을 반환하는 내장 함수입니다. 하지만 `ascii()`는 비-ASCII 문자를 `\x`, `\u` 또는 `\U` 이스케이프 시퀀스로 이스케이프 처리합니다. 이는 문자열이 ASCII 전용 환경에서 안전하게 사용되도록 보장할 때 유용합니다.

## 예시

```python
# ASCII 문자의 경우, repr() 와 동일합니다
ascii('A')

# 비-ASCII 문자의 경우, 이스케이프 처리됩니다
ascii('ë')

# 비교를 위해, repr() 는 이스케이프 처리하지 않습니다
repr('ë')

# 반복 가능한 객체에도 작동합니다
ascii(['A', 'ë'])
```

출력:

```plaintext
'A'
'\\xeb'
'ë'
['A', '\\xeb']
```

## 관련 링크

- <router-link to="/cheatsheet/manipulating-strings">치트 시트: 문자열 조작</router-link>
- <router-link to="/blog/python-data-types">블로그: Python 데이터 유형</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
- <router-link to="/builtin/chr">chr()</router-link>
- <router-link to="/builtin/ord">ord()</router-link>
