---
title: 'Python format() 내장 함수 - Python 치트 시트'
description: "format_spec 에 의해 제어되는 대로 값을 '형식화된' 표현으로 변환합니다. format_spec 의 해석은 value 인수의 유형에 따라 달라집니다. [...]"
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python format() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#format">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   format_spec 에 의해 제어되는 대로 값을 "형식화된" 표현으로 변환합니다. format_spec 의 해석은 value 인수의 유형에 따라 달라집니다. [...].
  </base-disclaimer-content>
</base-disclaimer>

## 소개

Python 의 `format()` 함수는 형식이 지정된 문자열을 생성할 수 있는 다용도 내장 함수입니다. 이를 통해 값을 문자열에 삽입하고, 정렬을 제어하며, 소수점 자릿수나 채우기 등 표현 방식을 지정할 수 있습니다.

<router-link to="/builtin/format">format()</router-link> 함수는 지정된 값을 지정된 형식으로 포맷합니다.

## 예시

```python
name = 'Micheal'
company = 'Dunder Mifflin'

print("My name is {0} and I work for {1}.".format(name, company))

# Formatting string (faster and easier)
print(f"My name is {name} and I work for {company}.")
```

출력:

```plaintext
My name is Micheal and I work for Dunder Mifflin.
My name is Micheal and I work for Dunder Mifflin.
```

## 관련 링크

- <router-link :to="'/builtin/str/'">str()</router-link>
- <router-link :to="'/cheatsheet/string-formatting'">문자열 포매팅</router-link>
- <router-link :to="'/cheatsheet/manipulating-strings'">문자열 조작</router-link>
- <router-link :to="'/builtin/print'">print()</router-link>
