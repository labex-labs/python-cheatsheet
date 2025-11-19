---
title: '파이썬 함수 - 파이썬 치트 시트'
description: '파이썬에서 함수는 단일 작업을 수행하기 위해 구성된 코드 블록입니다.'
labUrl: 'https://labex.io/ko/labs/python-python-functions-633658?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 함수
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://en.wikiversity.org/wiki/Programming_Fundamentals/Functions">프로그래밍 함수</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    함수는 단일 작업을 수행하는 데 사용되는 구성된 코드 블록입니다. 이는 애플리케이션에 더 나은 모듈성과 재사용성을 제공합니다.
  </base-disclaimer-content>
</base-disclaimer>

## 함수 인수 (Function Arguments)

함수는 `인수(arguments)`를 받고 `반환 값(return values)`을 가질 수 있습니다.

다음 예제에서 **say_hello** 함수는 "name" 인수를 받아 인사말을 출력합니다.

```python
# 하나의 인수를 받는 함수 정의
def say_hello(name):
   print(f'Hello {name}')

# 문자열 인수로 함수 호출
say_hello('Carlos')
```

```output
Hello Carlos
```

```python
say_hello('Wanda')
```

```output
Hello Wanda
```

```python
say_hello('Rose')
```

```output
Hello Rose
```

## 키워드 인수 (Keyword Arguments)

코드 가독성을 높이기 위해 가능한 한 명시적이어야 합니다. `키워드 인수(Keyword Arguments)`를 사용하여 함수에서 이를 달성할 수 있습니다.

```python
# 여러 매개변수를 가진 함수
def say_hi(name, greeting):
   print(f"{greeting} {name}")

# 위치 인수: 순서가 중요함
say_hi('John', 'Hello')
```

```output
Hello John
```

```python
# 키워드 인수: 순서는 중요하지 않으며, 가독성이 높음
say_hi(name='Anna', greeting='Hi')
```

```output
Hi Anna
```

## 반환 값 (Return Values)

`def` 문을 사용하여 함수를 만들 때, `return` 문으로 반환 값을 지정할 수 있습니다. 반환 문은 다음으로 구성됩니다.

- `return` 키워드.

- 함수가 반환해야 하는 값 또는 표현식.

```python
# return 문을 사용하여 값을 반환하는 함수
def sum_two_numbers(number_1, number_2):
   return number_1 + number_2

# 함수를 호출하고 반환된 값을 저장
result = sum_two_numbers(7, 8)
print(result)
```

```output
15
```

## 지역 및 전역 범위 (Local and Global Scope)

- 전역 범위의 코드는 지역 변수를 사용할 수 없습니다.

- 그러나 지역 범위는 전역 변수에 접근할 수 있습니다.

- 함수의 지역 범위 내 코드는 다른 지역 범위의 변수를 사용할 수 없습니다.

- 서로 다른 범위에 있다면 서로 다른 변수에 대해 동일한 이름을 사용할 수 있습니다. 즉, spam 이라는 지역 변수와 spam 이라는 전역 변수가 모두 존재할 수 있습니다.

```python
# 전역 변수: 어디서든 접근 가능
global_variable = 'I am available everywhere'

def some_function():
    print(global_variable)  # 전역 변수에 접근 가능
    # 지역 변수: 이 함수 내에서만 존재함
    local_variable = "only available within this function"
    print(local_variable)

# NameError 발생: local_variable 는 전역 범위에 존재하지 않음
print(local_variable)
```

```output
Traceback (most recent call last):
  File "<stdin>", line 10, in <module>
NameError: name 'local_variable' is not defined
```

## global 문 (The global Statement)

함수 내에서 전역 변수를 수정해야 하는 경우, global 문을 사용합니다.

```python
# 함수 내부에서 전역 변수를 수정하기 위해 'global' 키워드 사용
def spam():
    global eggs  # 전역 변수를 수정하고 있음을 선언
    eggs = 'spam'  # 이것은 전역 변수를 변경함

eggs = 'global'
spam()  # 함수가 전역 변수를 수정함
print(eggs)  # 'spam'을 출력함, 'global'이 아님
```

```output
spam
```

변수가 지역 범위에 있는지 전역 범위에 있는지 판단하는 네 가지 규칙이 있습니다.

1. 변수가 전역 범위 (즉, 모든 함수 외부) 에서 사용되는 경우, 항상 전역 변수입니다.

1. 함수 내에 해당 변수에 대한 global 문이 있는 경우, 전역 변수입니다.

1. 그렇지 않고, 함수 내에서 할당문 (assignment statement) 에서 변수가 사용되는 경우, 지역 변수입니다.

1. 하지만 변수가 할당문에서 사용되지 않는 경우, 전역 변수입니다.

## 람다 함수 (Lambda Functions)

Python 에서 람다 함수는 단일 표현식만 가질 수 있지만 여러 개의 인수를 가질 수 있는 한 줄짜리 익명 함수입니다.

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/ast.html?highlight=lambda#function-and-class-definitions">Python 3 튜토리얼</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
    lambda 는 표현식 내에서 사용할 수 있는 최소한의 함수 정의입니다. FunctionDef 와 달리 body 는 단일 노드를 포함합니다.
  </base-disclaimer-content>
</base-disclaimer>

<base-warning>
  <base-warning-title>
    단일 표현식
  </base-warning-title>
  <base-warning-content>
    람다 함수는 단일 코드 줄과 같은 표현식만 평가할 수 있습니다.
  </base-warning-content>
</base-warning>

이 함수:

```python
# 일반 함수 정의
def add(x, y):
    return x + y

add(5, 3)
```

```output
8
```

다음 _람다_ 함수와 동일합니다.

```python
# 람다 함수: 한 줄로 정의된 익명 함수
# 구문: lambda 인수: 표현식
add = lambda x, y: x + y
add(5, 3)
```

```output
8
```

일반 중첩 함수와 마찬가지로 람다도 렉시컬 클로저 (lexical closures) 로 작동합니다.

```python
# 람다 클로저: 외부 범위에서 변수를 캡처하는 람다 함수
def make_adder(n):
    return lambda x: x + n  # 람다가 외부 함수에서 'n'을 캡처함

# 다른 양을 더하는 함수 생성
plus_3 = make_adder(3)  # 3 을 더하는 람다를 반환
plus_5 = make_adder(5)  # 5 를 더하는 람다를 반환

plus_3(4)  # 4 + 3 = 7 반환
```

```output
7
```

```python
plus_5(4)
```

```output
9
```

## 관련 링크

- <router-link to="/blog/python-easy-args-kwargs">\*args 및 \*\*kwargs 설명</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">Args 및 Kwargs</router-link>
- <router-link to="/cheatsheet/decorators">데코레이터</router-link>
- <router-link to="/cheatsheet/control-flow">제어 흐름</router-link>
- <router-link to="/cheatsheet/basics">기본 사항</router-link>
- <router-link to="/builtin">내장 함수</router-link>
