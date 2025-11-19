---
title: '파이썬 기초 - 파이썬 치트 시트'
description: '파이썬의 기본 사항. 모두가 시작할 곳이 필요합니다. 바로 여기서 시작해 보세요.'
labUrl: 'https://labex.io/ko/labs/python-python-basics-633647?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 기초
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

우리 모두 어딘가에서 시작해야 하므로, 여기서 시작하는 것은 어떨까요.

<base-disclaimer>
  <base-disclaimer-title>
    <a href="https://docs.python.org/3/tutorial/index.html">Python 3 튜토리얼</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
    Python 은 배우기 쉽고 강력한 프로그래밍 언어입니다 [...] Python 의 우아한 구문과 동적 타이핑은 인터프리터 방식과 더불어 스크립팅 및 신속한 애플리케이션 개발에 이상적인 언어로 만듭니다.
  </base-disclaimer-content>
</base-disclaimer>

## 수학 연산자

**가장 높은** 우선순위부터 **가장 낮은** 우선순위까지:

| 연산자 | 연산             | 예시            |
| ------ | ---------------- | --------------- |
| \*\*   | 거듭제곱         | `2 ** 3 = 8`    |
| %      | 나머지 (Modulus) | `22 % 8 = 6`    |
| //     | 정수 나눗셈      | `22 // 8 = 2`   |
| /      | 나눗셈           | `22 / 8 = 2.75` |
| \*     | 곱셈             | `3 * 3 = 9`     |
| -      | 뺄셈             | `5 - 2 = 3`     |
| +      | 덧셈             | `2 + 2 = 4`     |

표현식 예시:

```python
# 곱셈은 덧셈보다 우선순위가 높습니다
# 따라서 이것은 다음과 같이 계산됩니다: 2 + (3 * 6) = 2 + 18 = 20
2 + 3 * 6
```

```output
20
```

```python
# 괄호는 연산자 우선순위를 재정의합니다
# 이것은 다음과 같이 계산됩니다: 5 * 6 = 30
(2 + 3) * 6
```

```output
30
```

```python
2 ** 8
```

```output
256
```

```python
23 // 7
```

```output
3
```

```python
23 % 7
```

```output
2
```

```python
(5 - 1) * ((7 + 1) / (3 - 1))
```

```output
16.0
```

## 증감 대입 연산자 (Augmented Assignment Operators)

| 연산자      | 동등한 표현      |
| ----------- | ---------------- |
| `var += 1`  | `var = var + 1`  |
| `var -= 1`  | `var = var - 1`  |
| `var *= 1`  | `var = var * 1`  |
| `var /= 1`  | `var = var / 1`  |
| `var //= 1` | `var = var // 1` |
| `var %= 1`  | `var = var % 1`  |
| `var **= 1` | `var = var ** 1` |

예시:

```python
# 증감 대입: greeting = greeting + ' world!' 와 동일
greeting = 'Hello'
greeting += ' world!'
greeting
```

```output
'Hello world!'
```

```python
# 숫자를 1 만큼 증가
number = 1
number += 1
number
```

```output
2
```

```python
# 리스트 요소 복제: my_list = my_list * 3 와 동일
my_list = ['item']
my_list *= 3
my_list
```

```output
['item', 'item', 'item']
```

## 월러스 연산자 (Walrus Operator)

월러스 연산자는 변수에 값을 할당하는 동시에 해당 표현식의 값을 반환할 수 있게 해줍니다.

예시:

```python
# 월러스 연산자는 하나의 표현식 내에서 값을 할당하고 반환합니다
# my_var 에 "Hello World!"가 할당된 후 출력됩니다
print(my_var:="Hello World!")
```

```output
Hello World!
```

```python
my_var="Yes"
print(my_var)
```

```output
Yes
```

```python
print(my_var:="Hello")
```

```output
Hello
```

_월러스 연산자_ 또는 **할당 표현식 연산자 (Assignment Expression Operator)**는 2018 년 [PEP 572](https://peps.python.org/pep-0572/)를 통해 처음 도입되었으며, 2019 년 10 월 **Python 3.8**과 함께 공식적으로 출시되었습니다.

<base-disclaimer>
  <base-disclaimer-title>
    구문 의미론 및 예시
  </base-disclaimer-title>
  <base-disclaimer-content>
  <a href="https://peps.python.org/pep-0572/" target="_blank">PEP 572</a>는 월러스 연산자에 대한 구문, 의미론 및 예시를 제공합니다.
  </base-disclaimer-content>
</base-disclaimer>

## 데이터 타입

Python 에는 거의 모든 것에 필요한 9 가지 핵심 내장 데이터 타입이 있습니다:

| 데이터 타입                                                | 예시                                     | 설명                                      |
| ---------------------------------------------------------- | ---------------------------------------- | ----------------------------------------- |
| **숫자 (Numbers)**                                         |                                          |                                           |
| <router-link to='/builtin/int'>`int`</router-link>         | `-2, -1, 0, 1, 2, 3, 4, 5`               | 정수 (Whole numbers)                      |
| <router-link to='/builtin/float'>`float`</router-link>     | `-1.25, -1.0, -0.5, 0.0, 0.5, 1.0, 1.25` | 소수점이 있는 숫자                        |
| <router-link to='/builtin/complex'>`complex`</router-link> | `2+3j, complex(1, 4)`                    | 실수부와 허수부를 가진 숫자               |
| **텍스트 (Text)**                                          |                                          |                                           |
| <router-link to='/builtin/str'>`str`</router-link>         | `'a', 'Hello!', "Python"`                | 텍스트 및 문자                            |
| **불리언 (Boolean)**                                       |                                          |                                           |
| <router-link to='/builtin/bool'>`bool`</router-link>       | `True, False`                            | 참 또는 거짓 값                           |
| **None**                                                   |                                          |                                           |
| `NoneType`                                                 | `None`                                   | "값이 없음" 또는 "아무것도 아님"을 나타냄 |
| **컬렉션 (Collections)**                                   |                                          |                                           |
| <router-link to='/builtin/list'>`list`</router-link>       | `[1, 2, 3], ['a', 'b', 'c']`             | 순서가 있고 변경 가능한 컬렉션            |
| <router-link to='/builtin/dict'>`dict`</router-link>       | `{'name': 'Alice', 'age': 30}`           | 키 - 값 쌍                                |
| <router-link to='/builtin/tuple'>`tuple`</router-link>     | `(1, 2, 3), ('a', 'b')`                  | 순서가 있고 변경 불가능한 컬렉션          |
| <router-link to='/builtin/set'>`set`</router-link>         | `{1, 2, 3}, {'a', 'b', 'c'}`             | 순서가 없는 고유 항목 컬렉션              |

### 간단한 예시

```python
# 숫자
age = 25                    # int
price = 19.99              # float
coordinate = 2 + 3j        # complex

# 텍스트
name = "Alice"             # str

# 불리언
is_student = True          # bool

# None
result = None              # NoneType

# 컬렉션
scores = [85, 92, 78]      # list
person = {'name': 'Bob', 'age': 30}  # dict
coordinates = (10, 20)     # tuple
unique_ids = {1, 2, 3}     # set
```

각 유형을 언제 사용해야 하는지에 대한 시각적 예시와 자세한 설명은 다음을 참조하십시오: <router-link to="/blog/python-data-types">Python 데이터 타입: 초보자를 위한 시각적 가이드</router-link>.

## 연결 및 복제 (Concatenation and Replication)

문자열 연결:

```python
# 문자열 연결: 인접한 문자열은 자동으로 결합됩니다
'Alice' 'Bob'
```

```output
'AliceBob'
```

문자열 복제:

```python
# 문자열 복제: 문자열을 여러 번 반복
'Alice' * 5
```

```output
'AliceAliceAliceAliceAlice'
```

## 변수 (Variables)

변수 이름은 다음 규칙을 준수하는 한 무엇이든 될 수 있습니다:

1. 한 단어로만 구성되어야 합니다.

```python
# 나쁨
my variable = 'Hello'

# 좋음
var = 'Hello'
```

2. 문자, 숫자 및 밑줄 (`_`) 문자만 사용할 수 있습니다.

```python
# 나쁨
%$@variable = 'Hello'

# 좋음
my_var = 'Hello'

# 좋음
my_var_2 = 'Hello'
```

3. 숫자로 시작할 수 없습니다.

```python
# 작동하지 않음
23_var = 'hello'
```

4. 밑줄 (`_`) 로 시작하는 변수 이름은 "사용되지 않는" 것으로 간주됩니다.

```python
# _spam 은 코드에서 다시 사용되어서는 안 됩니다
_spam = 'Hello'
```

## 주석 (Comments)

인라인 주석:

```python
# 이것은 주석입니다
```

여러 줄 주석:

```python
# 이것은
# 여러 줄 주석입니다
```

주석이 있는 코드:

```python
a = 1  # 초기화
```

주석 앞에 공백 두 칸에 유의하십시오.

함수 독스트링 (Docstring):

```python
def foo():
    """
    이것은 함수 독스트링입니다
    다음도 사용할 수 있습니다:
    ''' 함수 독스트링 '''
    """
```

## print() 함수

`print()` 함수는 전달받은 인수의 값을 출력합니다. [...] 여러 인수를 처리하고, 부동 소수점 수량 및 문자열을 처리합니다. 문자열은 따옴표 없이 인쇄되며, 항목 사이에 공백이 삽입되어 깔끔하게 형식을 지정할 수 있습니다:

```python
print('Hello world!')
```

```output
Hello world!
```

```python
a = 1
print('Hello world!', a)
```

```output
Hello world! 1
```

### end 키워드

`end` 키워드 인수를 사용하여 출력 후 줄 바꿈을 피하거나 출력을 다른 문자열로 끝낼 수 있습니다:

```python
# end 매개변수를 사용하여 각 print 문 뒤에 오는 것을 변경합니다
phrase = ['printed', 'with', 'a', 'dash', 'in', 'between']
for word in phrase:
    print(word, end='-')  # 줄 바꿈 대신 '-' 사용
```

```output
printed-with-a-dash-in-between-
```

### sep 키워드

`sep` 키워드는 여러 인수가 있는 경우 객체를 구분하는 방법을 지정합니다:

```python
# sep 매개변수를 사용하여 여러 인수 사이의 구분자를 지정합니다
print('cats', 'dogs', 'mice', sep=',')  # 쉼표로 구분된 출력
```

```output
cats,dogs,mice
```

## input() 함수

이 함수는 사용자로부터 입력을 받아 문자열로 변환합니다:

```python
# input() 은 사용자 입력을 읽고 문자열로 반환합니다
print('What is your name?')   # 이름을 묻습니다
my_name = input()  # 사용자가 입력하고 Enter 를 누를 때까지 기다립니다
print('Hi, {}'.format(my_name))
```

```output
What is your name?
Martha
Hi, Martha
```

`input()`은 `print()`를 사용하지 않고도 기본 메시지를 설정할 수 있습니다:

```python
my_name = input('What is your name? ')  # 기본 메시지
print('Hi, {}'.format(my_name))
```

```output
What is your name? Martha
Hi, Martha
```

.format 을 사용하지 않기 위해 서식 지정된 문자열을 사용하는 것도 가능합니다:

```python
# input() 은 프롬프트 메시지를 직접 표시할 수 있습니다
my_name = input('What is your name? ')  # 한 번의 호출로 프롬프트 및 읽기
print(f'Hi, {my_name}')  # 문자열 서식 지정을 위한 f-string
```

```output
What is your name? Martha
Hi, Martha
```

## len() 함수

문자열, 리스트, 딕셔너리 등의 문자 수를 정수 값으로 평가합니다:

```python
# len() 은 문자열의 문자 수를 반환합니다
len('hello')  # 5 를 반환합니다
```

```output
5
```

```python
# len() 은 리스트의 항목 수를 반환합니다
len(['cat', 3, 'dog'])  # 3 을 반환합니다 (세 개의 항목)
```

```output
3
```

<base-warning>
  <base-warning-title>비어 있음 테스트</base-warning-title>
  <base-warning-content>
    문자열, 리스트, 딕셔너리 등의 비어 있음 테스트는 <code>len</code>을 사용해서는 안 되며, 직접적인 불리언 평가를 선호해야 합니다.
  </base-warning-content>
</base-warning>

비어 있음 테스트 예시:

```python
a = [1, 2, 3]

# 나쁨: 불필요한 len() 확인
if len(a) > 0:  # True 로 평가됨
    print("the list is not empty!")
```

```output
the list is not empty!
```

```python
# 좋음: 직접적인 불리언 평가 (Pythonic 방식)
if a:  # 리스트가 비어 있지 않으면 True 로 평가됨
    print("the list is not empty!")
```

```output
the list is not empty!
```

## str(), int(), 및 float() 함수

이 함수들은 변수의 타입을 변경할 수 있게 해줍니다. 예를 들어, `integer` 또는 `float`를 `string`으로 변환할 수 있습니다:

```python
# 정수를 문자열로 변환
str(29)  # '29'를 반환합니다
```

```output
'29'
```

```python
str(-3.14)
```

```output
'-3.14'
```

또는 `string`을 `integer` 또는 `float`로 변환할 수 있습니다:

```python
# 문자열을 정수로 변환
int('11')  # 11 을 반환합니다
```

```output
11
```

```python
# 문자열을 float 으로 변환
float('3.14')  # 3.14 를 반환합니다
```

```output
3.14
```

## 관련 링크

- <router-link to="/blog/python-data-types">Python 데이터 타입: 초보자를 위한 시각적 가이드</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Python Comprehensions 단계별 가이드</router-link>
- <router-link to="/cheatsheet/control-flow">제어 흐름</router-link>
- <router-link to="/cheatsheet/functions">함수</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">리스트와 튜플</router-link>
- <router-link to="/cheatsheet/dictionaries">딕셔너리</router-link>
- <router-link to="/cheatsheet/sets">집합 (Sets)</router-link>
- <router-link to="/cheatsheet/string-formatting">문자열 서식 지정</router-link>
