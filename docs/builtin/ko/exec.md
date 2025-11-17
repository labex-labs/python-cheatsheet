---
title: 'Python exec() 내장 함수 - Python 치트 시트'
description: '이 함수는 Python 코드의 동적 실행을 지원합니다. object 는 문자열 또는 코드 객체여야 합니다. 문자열인 경우, 문자열은 Python 문 모음으로 구문 분석된 후 실행됩니다 (구문 오류가 발생하지 않는 한) [...].'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python exec() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#exec">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   이 함수는 문자열에 저장된 Python 코드를 동적으로 실행할 수 있게 해줍니다. object 는 문자열 또는 코드 객체여야 합니다. 문자열인 경우, 문자열은 Python 문 모음으로 구문 분석된 다음 실행됩니다 (구문 오류가 발생하지 않는 한) [...].
  </base-disclaimer-content>
</base-disclaimer>

## 소개

Python 의 `exec()` 함수는 문자열에 저장된 Python 코드를 동적으로 실행할 수 있게 해주는 내장 함수입니다. 이는 사용자로부터 코드를 제공받거나, 런타임에 코드를 생성하고 실행하거나, 애플리케이션 내에서 미니 인터프리터 또는 스크립팅 환경을 구축하려는 시나리오에서 매우 강력할 수 있습니다. 하지만 적절하게 처리되지 않으면 잠재적인 보안 위험을 초래할 수 있으므로 주의해서 사용해야 합니다.

## 구문

```python
exec(object[, globals[, locals]])
```

- `object`: 실행할 Python 코드가 포함된 문자열입니다.
- `globals` (선택 사항): 전역 네임스페이스를 나타내는 딕셔너리입니다. 제공되지 않으면 현재 전역 네임스페이스를 사용합니다.
- `locals` (선택 사항): 지역 네임스페이스를 나타내는 딕셔너리입니다. 제공되지 않으면 현재 지역 네임스페이스를 사용합니다.

## 기본 사용법

```python
code_to_execute = "print('Hello, exec()!')"
exec(code_to_execute)
```

출력:

```plaintext
Hello, exec()!
```

`exec()` 함수는 <router-link to="/builtin/print">print()</router-link> 함수와 함께 사용하여 콘솔에 출력을 표시할 수도 있습니다.

## 여러 문 실행

```python
code = """
for i in range(5):
    print(i)
"""
exec(code)
```

출력:

```plaintext
0
1
2
3
4
```

이 예제에서 `exec()` 함수는 <router-link to="/builtin/range">range</router-link>를 반복하고 각 숫자를 콘솔에 <router-link to="/builtin/print">출력</router-link>하는 for 루프를 실행하는 데 사용됩니다.

## 변수 수정

```python
x = 10
code = "x += 5"
exec(code)
print(x)
```

출력:

```plaintext
15
```

## `globals` 및 `locals` 사용

```python
x = 5
code = "x = x * 2"
globals_dict = {"x": 10}
locals_dict = {"x": 20}
exec(code, globals_dict, locals_dict)
print(x)
print(globals_dict)
print(locals_dict)
```

출력:

```plaintext
5
{'x': 10}
{'x': 40}
```

## 동적 함수 생성

```python
def create_dynamic_function(name, args):
    code = f"def {name}({', '.join(args)}): return sum({args})"
    exec(code)

create_dynamic_function("add_numbers", ["a", "b", "c"])
result = add_numbers(2, 3, 5)
print(result)
```

출력:

```plaintext
10
```

이 예제에서 `exec()` 함수는 인자 목록을 받아 그 <router-link to="/builtin/sum">합계</router-link>를 반환하는 동적 함수를 생성하는 데 사용됩니다.

## 오류 처리

```python
code = """
try:
    print(undefined_variable)
except NameError as e:
    print(f"Error: {e}")
"""
exec(code)
```

출력:

```plaintext
Error: name 'undefined_variable' is not defined
```

## 보안 참고 사항

```python
user_input = input("Enter code to execute: ")
exec(user_input)  # Caution: This can be a security risk if not properly sanitized.
```

## 관련 링크

- <router-link :to="'/builtin/compile'">`compile()`</router-link>
- <router-link :to="'/builtin/eval'">`eval()`</router-link>
- <router-link :to="'/builtin/globals'">`globals()`</router-link>
- <router-link :to="'/builtin/locals'">`locals()`</router-link>
- <router-link :to="'/cheatsheet/exception-handling'">예외 처리</router-link>
- <router-link :to="'/cheatsheet/debugging'">디버깅</router-link>
