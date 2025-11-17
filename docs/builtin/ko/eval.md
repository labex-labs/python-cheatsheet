---
title: 'Python eval() 내장 함수 - Python 치트 시트'
description: '인수는 문자열과 선택적 전역 (globals) 및 지역 (locals) 변수입니다. 제공되는 경우, 전역 변수는 딕셔너리여야 합니다. 제공되는 경우, 지역 변수는 모든 매핑 객체일 수 있습니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python eval() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#eval">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   인수는 문자열과 선택적 globals 및 locals 입니다. 제공되는 경우 globals 는 딕셔너리여야 합니다. 제공되는 경우 locals 는 모든 매핑 객체일 수 있습니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

Python 의 `eval()` 함수는 문자열을 Python 표현식으로 구문 분석하고 평가하는 내장 함수입니다. 문자열에서 임의의 Python 코드를 실행하는 데 사용될 수 있으며, 이는 강력할 수도 있고 위험할 수도 있습니다. 동적으로 생성된 표현식을 평가해야 하는 상황에서 자주 사용되지만, 잠재적인 보안 취약성으로 인해 주의해서 사용해야 합니다.

## 예시

```python
eval('1 + 4')
```

출력:

```plaintext
5
```

```python
eval('print("Hello World!")')
```

출력:

```plaintext
Hello World!
```

```python
x = 10
eval('x == 10')
```

출력:

```plaintext
True
```

`eval()` 함수는 <router-link to="/builtin/print">print()</router-link> 함수와 함께 사용하여 콘솔에 출력을 표시할 수도 있습니다.

## 관련 링크

- <router-link :to="'/builtin/compile'">`compile()`</router-link>
- <router-link :to="'/builtin/exec'">`exec()`</router-link>
- <router-link :to="'/builtin/globals'">`globals()`</router-link>
- <router-link :to="'/builtin/locals'">`locals()`</router-link>
- <router-link :to="'/cheatsheet/debugging'">디버깅</router-link>
