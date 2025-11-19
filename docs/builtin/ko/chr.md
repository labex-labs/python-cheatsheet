---
title: 'Python chr() 내장 함수 - Python 치트 시트'
description: "정수 i 에 해당하는 유니코드 코드 포인트의 문자열을 반환합니다. 예를 들어, chr(97) 은 문자 'a'를 반환하고, chr(8364) 는 '€'를 반환합니다. ord() 함수의 역함수입니다."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python chr() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#chr">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   정수 i 에 해당하는 문자를 나타내는 문자열을 반환합니다. 예를 들어, chr(97) 은 문자열 'a'를 반환하고 chr(8364) 는 문자열 '€'를 반환합니다. 이는 ord() 의 역함수입니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

Python 의 `chr()` 함수는 정수를 인수로 받아 해당 유니코드 문자를 나타내는 문자열을 반환하는 내장 함수입니다.

`chr()` 함수에 전달되는 정수는 유효한 유니코드 문자의 범위인 0 에서 65535 사이여야 합니다.

```python
print(chr(97))
print(chr(65))
print(chr(120))
```

```output
a
A
x
```

`chr()` 함수는 단일 문자를 인수로 받아 해당 정수를 반환하는 `ord()` 함수의 역함수입니다.

```python
print(ord('a'))
print(ord('A'))
print(ord('x'))
```

```output
97
65
120
```

`chr()` 함수는 텍스트 및 문자 데이터를 다룰 때, 특히 유니코드 문자를 다룰 때 유용할 수 있습니다. 예를 들어, 유니코드 코드 포인트를 나타내는 정수를 해당 문자로 변환하거나 정수 범위를 사용하여 문자열을 생성하는 데 사용할 수 있습니다.

## 관련 링크

- <router-link :to="'/builtin/ord'">ord()</router-link>
- <router-link :to="'/builtin/ascii'">ascii()</router-link>
- <router-link :to="'/cheatsheet/manipulating-strings'">문자열 조작</router-link>
- <router-link :to="'/blog/python-data-types'">Python 데이터 유형</router-link>
