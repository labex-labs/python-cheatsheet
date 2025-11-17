---
title: '파이썬 제어 흐름 - 파이썬 치트 시트'
description: '제어 흐름은 개별 문장, 명령어 또는 함수 호출이 실행되거나 평가되는 순서입니다. 파이썬 프로그램의 제어 흐름은 조건문, 반복문 및 함수 호출에 의해 규제됩니다.'
labUrl: 'https://labex.io/ko/labs/python-python-control-flow-633651?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 제어 흐름
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    Python 제어 흐름
  </base-disclaimer-title>
  <base-disclaimer-content>
  제어 흐름은 개별 명령문, 지침 또는 함수 호출이 실행되거나 평가되는 순서입니다. Python 프로그램의 제어 흐름은 조건문, 루프 및 함수 호출에 의해 규제됩니다.
  </base-disclaimer-content>
</base-disclaimer>

## 비교 연산자

| 연산자 | 의미        |
| ------ | ----------- |
| `==`   | 같다        |
| `!=`   | 같지 않다   |
| `<`    | 보다 작다   |
| `>`    | 보다 크다   |
| `<=`   | 작거나 같다 |
| `>=`   | 크거나 같다 |

이 연산자들은 주어진 값에 따라 True 또는 False 를 평가합니다.

예시:

```python
42 == 42
```

출력:

```plaintext
True
```

```python
40 == 42
```

출력:

```plaintext
False
```

```python
'hello' == 'hello'
```

출력:

```plaintext
True
```

```python
'hello' == 'Hello'
```

출력:

```plaintext
False
```

```python
'dog' != 'cat'
```

출력:

```plaintext
True
```

```python
42 == 42.0
```

출력:

```plaintext
True
```

```python
42 == '42'
```

출력:

```plaintext
False
```

## 불리언 연산자

세 가지 불리언 연산자가 있습니다: `and`, `or`, `not`.
우선순위는 높음에서 낮음 순으로 `not`, `and`, `or` 입니다.

`and` 연산자의 _진리표_:

| 표현식            | 평가 결과 |
| ----------------- | --------- |
| `True and True`   | `True`    |
| `True and False`  | `False`   |
| `False and True`  | `False`   |
| `False and False` | `False`   |

`or` 연산자의 _진리표_:

| 표현식           | 평가 결과 |
| ---------------- | --------- |
| `True or True`   | `True`    |
| `True or False`  | `True`    |
| `False or True`  | `True`    |
| `False or False` | `False`   |

`not` 연산자의 _진리표_:

| 표현식      | 평가 결과 |
| ----------- | --------- |
| `not True`  | `False`   |
| `not False` | `True`    |

## 연산자 혼합 사용

불리언 연산자와 비교 연산자를 혼합할 수 있습니다:

```python
(4 < 5) and (5 < 6)
```

출력:

```plaintext
True
```

```python
(4 < 5) and (9 < 6)
```

출력:

```plaintext
False
```

```python
(1 == 2) or (2 == 2)
```

출력:

```plaintext
True
```

또한, 비교 연산자와 함께 여러 불리언 연산자를 표현식에 사용할 수 있습니다:

```python
2 + 2 == 4 and not 2 + 2 == 5 and 2 * 2 == 2 + 2
```

출력:

```plaintext
True
```

```python
# 아래 문장에서 3 < 4 and 5 > 5 가 먼저 실행되어 False 를 반환합니다.
# 그 다음 5 > 4 는 True 를 반환하므로 True or False 의 결과는 True 가 됩니다.
5 > 4 or 3 < 4 and 5 > 5
```

출력:

```plaintext
True
```

```python
# 이제 괄호 안의 문장이 먼저 실행되어 True and False 는 False 를 반환합니다.
(5 > 4 or 3 < 4) and 5 > 5
```

출력:

```plaintext
False
```

## if 문

`if` 문은 표현식을 평가하며, 그 표현식이 `True`이면 뒤따르는 들여쓰기된 코드를 실행합니다:

```python
# if 문: 조건이 True 일 때 코드 블록 실행
name = 'Debora'

if name == 'Debora':  # 이름이 'Debora'와 같은지 확인
   print('Hi, Debora')  # 조건이 True 이면 이 줄이 실행됩니다
```

출력:

```plaintext
Hi, Debora
```

```python
if name != 'George':
   print('You are not George')
```

출력:

```plaintext
You are not George
```

`else` 문은 `if`와 모든 `elif` 표현식의 평가가 `False`일 때만 실행됩니다:

```python
# if-else: 조건에 따라 다른 코드 실행
name = 'Debora'

if name == 'George':
   print('Hi, George.')
else:  # if 조건이 False 일 때 실행
   print('You are not George')
```

출력:

```plaintext
You are not George
```

`if` 표현식이 `False`인 경우에만 `elif` 문이 평가되고 실행됩니다:

```python
# if-elif: 여러 조건을 순차적으로 확인
name = 'George'

if name == 'Debora':
   print('Hi Debora!')
elif name == 'George':  # 이전 조건이 False 일 때만 확인됨
   print('Hi George!')
```

출력:

```plaintext
Hi George!
```

`elif` 및 `else` 부분은 선택 사항입니다.

```python
name = 'Antony'

if name == 'Debora':
   print('Hi Debora!')
elif name == 'George':
   print('Hi George!')
else:
   print('Who are you?')
```

출력:

```plaintext
Who are you?
```

## 삼항 조건 연산자

많은 프로그래밍 언어에는 조건부 표현식을 정의하는 삼항 연산자가 있습니다. 가장 일반적인 용도는 간결하고 간단한 조건부 할당 문장을 만드는 것입니다. 즉, 조건이 참이면 첫 번째 표현식을 평가하고 그렇지 않으면 두 번째 표현식을 평가하는 한 줄 코드를 제공합니다.

```plaintext
<expression1> if <condition> else <expression2>
```

예시:

```python
age = 15

# 이 if 문:
if age < 18:
   print('kid')
else:
   print('adult')
```

출력:

```plaintext
kid
```

```python
# 삼항 연산자: 한 줄 조건부 표현식
# 구문: value_if_true if condition else value_if_false
print('kid' if age < 18 else 'adult')
```

출력:

```plaintext
kid
```

삼항 연산자는 연결될 수 있습니다:

```python
age = 15

# 이 삼항 연산자:
print('kid' if age < 13 else 'teen' if age < 18 else 'adult')
```

출력:

```plaintext
teen
```

```python
# 다음 if 문과 동일합니다:
if age < 13:
    print('kid')
else:
    if age < 18:
        print('teen')
    else:
        print('adult')
```

출력:

```plaintext
teen
```

## Switch-Case 문

<base-disclaimer>
  <base-disclaimer-title>
    Switch-Case 문
  </base-disclaimer-title>
  <base-disclaimer-content>
  컴퓨터 프로그래밍 언어에서 switch 문은 검색 및 매핑을 통해 프로그램 실행의 제어 흐름을 변경할 수 있도록 하는 선택 제어 메커니즘의 한 유형입니다.
  </base-disclaimer-content>
</base-disclaimer>

_Switch-Case 문_, 즉 **구조적 패턴 매칭**은 2020 년에 [PEP 622](https://peps.python.org/pep-0622/)를 통해 처음 도입되었으며, 2022 년 9 월 **Python 3.10**과 함께 공식적으로 출시되었습니다.

<base-disclaimer>
  <base-disclaimer-title>
    공식 튜토리얼
  </base-disclaimer-title>
  <base-disclaimer-content>
  <a href="https://peps.python.org/pep-0636/" target="_blank">PEP 636</a>은 Python 패턴 매칭 또는 Switch-Case 문에 대한 공식 튜토리얼을 제공합니다.
  </base-disclaimer-content>
</base-disclaimer>

### 단일 값 매칭

```python
response_code = 201
match response_code:
    case 200:
        print("OK")
    case 201:
        print("Created")
    case 300:
        print("Multiple Choices")
    case 307:
        print("Temporary Redirect")
    case 404:
        print("404 Not Found")
    case 500:
        print("Internal Server Error")
    case 502:
        print("502 Bad Gateway")
```

출력:

```plaintext
Created
```

### or 패턴으로 매칭

이 예시에서 파이프 문자 (`|` 또는 `or`) 는 Python 이 두 개 이상의 케이스에 대해 동일한 응답을 반환하도록 허용합니다.

```python
response_code = 502
match response_code:
    case 200 | 201:
        print("OK")
    case 300 | 307:
        print("Redirect")
    case 400 | 401:
        print("Bad Request")
    case 500 | 502:
        print("Internal Server Error")
```

출력:

```plaintext
Internal Server Error
```

### 이터러블 길이로 매칭

```python
today_responses = [200, 300, 404, 500]
match today_responses:
    case [a]:
            print(f"One response today: {a}")
    case [a, b]:
            print(f"Two responses today: {a} and {b}")
    case [a, b, *rest]:
            print(f"All responses: {a}, {b}, {rest}")
```

출력:

```plaintext
All responses: 200, 300, [404, 500]
```

### 기본값

밑줄 기호 (`_`) 는 기본 케이스를 정의하는 데 사용됩니다:

```python
response_code = 800
match response_code:
    case 200 | 201:
        print("OK")
    case 300 | 307:
        print("Redirect")
    case 400 | 401:
        print("Bad Request")
    case 500 | 502:
        print("Internal Server Error")
    case _:
        print("Invalid Code")
```

출력:

```plaintext
Invalid Code
```

### 내장 클래스 매칭

```python
response_code = "300"
match response_code:
    case int():
            print('Code is a number')
    case str():
            print('Code is a string')
    case _:
            print('Code is neither a string nor a number')
```

출력:

```plaintext
Code is a string
```

### Match-Case 문 가드

```python
response_code = 300
match response_code:
    case int():
            if response_code > 99 and response_code < 500:
                print('Code is a valid number')
    case _:
            print('Code is an invalid number')
```

출력:

```plaintext
Code is a valid number
```

## while 루프 문

while 문은 표현식이 `True`인 동안 반복 실행하는 데 사용됩니다:

```python
# while 루프: 조건이 True 인 동안 코드 반복
spam = 0
while spam < 5:  # spam 이 5 보다 작은 동안 계속
    print('Hello, world.')
    spam = spam + 1  # 무한 루프 방지를 위해 카운터 증가
```

출력:

```plaintext
Hello, world.
Hello, world.
Hello, world.
Hello, world.
Hello, world.
```

## break 문

실행이 `break` 문에 도달하면 즉시 `while` 루프 절을 종료합니다:

```python
# break 문: 발견 즉시 루프 종료
while True:  # 무한 루프
    name = input('Please type your name: ')
    if name == 'your name':
        break  # 즉시 루프 종료

print('Thank you!')
```

출력:

```plaintext
Please type your name: your name
Thank you!
```

## continue 문

프로그램 실행이 `continue` 문에 도달하면 프로그램 실행은 즉시 루프 시작 부분으로 이동합니다.

```python
# continue 문: 루프 반복의 나머지 부분을 건너뛰고 다음 반복 시작
while True:
    name = input('Who are you? ')
    if name != 'Joe':
        continue  # 다음 반복으로 건너뛰기, 비밀번호 요청 안 함
    password = input('Password? (It is a fish.): ')
    if password == 'swordfish':
        break  # 비밀번호가 올바르면 루프 종료

print('Access granted.')
```

출력:

```plaintext
Who are you? Charles
Who are you? Debora
Who are you? Joe
Password? (It is a fish.): swordfish
Access granted.
```

## For 루프

`for` 루프는 `list`, `tuple`, `dictionary`, `set` 또는 `string`을 반복합니다:

```python
# for 루프: 시퀀스의 각 항목 반복
pets = ['Bella', 'Milo', 'Loki']
for pet in pets:  # 리스트의 각 반려동물에 대해 루프 실행
    print(pet)  # 각 반려동물 이름 출력
```

출력:

```plaintext
Bella
Milo
Loki
```

## range() 함수

`range()` 함수는 숫자 시퀀스를 반환합니다. 0 에서 시작하여 1 씩 증가하며 지정된 숫자 직전에서 멈춥니다:

```python
for i in range(5):
    print(f'Will stop at 5! or 4? ({i})')
```

출력:

```plaintext
Will stop at 5! or 4? (0)
Will stop at 5! or 4? (1)
Will stop at 5! or 4? (2)
Will stop at 5! or 4? (3)
Will stop at 5! or 4? (4)
```

`range()` 함수는 3 개의 기본 인수를 수정할 수도 있습니다. 처음 두 개는 `start` 및 `stop` 값이 되고 세 번째는 `step` 인수가 됩니다. 단계는 각 반복 후 변수가 증가하는 양입니다.

```python
# range(start, stop, step)
for i in range(0, 10, 2):
   print(i)
```

출력:

```plaintext
0
2
4
6
8
```

심지어 단계 인수에 음수를 사용하여 for 루프가 위로 세는 대신 아래로 세도록 할 수도 있습니다.

```python
for i in range(5, -1, -1):
    print(i)
```

출력:

```plaintext
5
4
3
2
1
0
```

## For else 문

이는 루프 전체가 실행된 경우에 실행할 명령문을 지정할 수 있게 합니다. 루프 내에서 `break` 조건이 발생할 수 있는 경우에만 유용합니다:

```python
for i in [1, 2, 3, 4, 5]:
   if i == 3:
       break
else:
   print("only executed when no item is equal to 3")
```

## sys.exit() 로 프로그램 종료

`exit()` 함수는 Python 을 종료할 수 있게 합니다.

```python
import sys

while True:
    feedback = input('Type exit to exit: ')
    if feedback == 'exit':
        print(f'You typed {feedback}.')
        sys.exit()
```

출력:

```plaintext
Type exit to exit: open
Type exit to exit: close
Type exit to exit: exit
You typed exit.
```

## 관련 링크

- <router-link to="/cheatsheet/basics">기본</router-link>
- <router-link to="/cheatsheet/functions">함수</router-link>
- <router-link to="/cheatsheet/exception-handling">예외 처리</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">리스트와 튜플</router-link>
- <router-link to="/cheatsheet/sets">집합</router-link>
- <router-link to="/cheatsheet/dictionaries">딕셔너리</router-link>
- <router-link to="/cheatsheet/comprehensions">컴프리헨션</router-link>
