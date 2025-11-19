---
title: 'Python 내장 함수 input() - 파이썬 치트 시트'
description: '프롬프트 인수가 있으면 후행 줄 바꿈 없이 표준 출력에 작성됩니다. 그런 다음 함수는 입력에서 한 줄을 읽고 문자열로 변환한 후 (후행 줄 바꿈 제거) 반환합니다. EOF 가 읽히면 EOFError 가 발생합니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python input() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#input">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   프롬프트 인수가 있는 경우, 이는 줄 바꿈 없이 표준 출력에 기록됩니다. 그런 다음 함수는 입력에서 한 줄을 읽고, 이를 문자열로 변환하고 (끝의 줄 바꿈을 제거함), 해당 문자열을 반환합니다. EOF 가 읽히면 EOFError 가 발생합니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

Python 의 `input()` 함수는 프로그램이 사용자의 키보드로부터 한 줄의 텍스트를 읽을 수 있도록 하는 내장 함수입니다. 이는 프로그램 실행을 일시 중지하고 사용자가 입력을 제공할 때까지 기다리므로 대화형 애플리케이션을 만드는 데 필수적인 도구입니다. 이 함수는 사용자에게 무엇을 입력해야 하는지 안내하기 위해 프롬프트를 표시할 수도 있습니다.

## 예시

이 함수는 사용자로부터 입력을 받아 문자열로 변환합니다:

```python
# 이름을 묻기
print('What is your name?')
my_name = input()
print('Hi, {}'.format(my_name))
```

```output
What is your name?
Martha
Hi, Martha
```

`input()`은 `print()`를 사용하지 않고도 기본 메시지를 설정할 수 있습니다:

```python
# 기본 메시지
my_name = input('What is your name? ')
print('Hi, {}'.format(my_name))
```

```output
What is your name? Martha
Hi, Martha
```

## 관련 링크

- <router-link :to="'/builtin/print'">print()</router-link>
- <router-link :to="'/builtin/str'">str()</router-link>
- <router-link :to="'/builtin/int'">int()</router-link>
- <router-link :to="'/builtin/float'">float()</router-link>
- <router-link :to="'/cheatsheet/string-formatting'">문자열 포매팅</router-link>
- <router-link :to="'/cheatsheet/manipulating-strings'">문자열 조작</router-link>
