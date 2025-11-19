---
title: '문자열 조작 - Python 치트 시트'
description: "이스케이프 문자는 백슬래시 (\\) 뒤에 삽입하려는 문자를 입력하여 생성됩니다."
labUrl: 'https://labex.io/ko/labs/python-python-string-manipulation-633668?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
문자열 조작
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

## 이스케이프 문자

이스케이프 문자는 백슬래시 `\` 다음에 삽입하려는 문자를 입력하여 만듭니다.

| 이스케이프 문자 | 출력 결과       |
| :-------------- | :-------------- |
| `\'`            | 작은따옴표      |
| `\"`            | 큰따옴표        |
| `\t`            | 탭              |
| `\n`            | 줄 바꿈 (새 줄) |
| `\\`            | 백슬래시        |
| `\b`            | 백스페이스      |
| `\ooo`          | 8 진수 값       |
| `\r`            | 캐리지 리턴     |

```python
# 이스케이프 문자: 백슬래시를 사용하여 특수 문자 삽입
# \n = 줄 바꿈, \' = 작은따옴표
print("Hello there!\nHow are you?\nI\'m doing fine.")
```

```output
Hello there!
How are you?
I'm doing fine.
```

## 원시 문자열 (Raw strings)

원시 문자열은 모든 이스케이프 문자를 완전히 무시하고 문자열에 나타나는 모든 백슬래시를 그대로 출력합니다.

```python
# 원시 문자열 (r 접두사): 백슬래시를 리터럴 문자로 취급
print(r"Hello there!\nHow are you?\nI\'m doing fine.")  # \n이 그대로 출력됨
```

```output
Hello there!\nHow are you?\nI\'m doing fine.
```

원시 문자열은 주로 <router-link to="/cheatsheet/regular-expressions">정규 표현식</router-link> 정의에 사용됩니다.

## 여러 줄 문자열

```python
print(
"""Dear Alice,

Eve's cat has been arrested for catnapping,
cat burglary, and extortion.

Sincerely,
Bob"""
)
```

```output
Dear Alice,

Eve's cat has been arrested for catnapping,
cat burglary, and extortion.

Sincerely,
Bob
```

## 문자열 인덱싱 및 슬라이싱

    H   e   l   l   o       w   o   r   l   d    !
    0   1   2   3   4   5   6   7   8   9   10   11

### 인덱싱

```python
# 문자열 인덱싱: 위치 (0 부터 시작) 로 문자에 접근
spam = 'Hello world!'

spam[0]  # 첫 번째 문자 반환: 'H'
```

```output
'H'
```

```python
spam[4]
```

```output
'o'
```

```python
spam[-1]
```

```output
'!'
```

### 슬라이싱

```python
# 문자열 슬라이싱: [start:end] 구문을 사용하여 부분 문자열 추출
spam = 'Hello world!'

spam[0:5]  # 인덱스 0 부터 4 까지의 문자 반환: 'Hello'
```

```output
'Hello'
```

```python
spam[:5]
```

```output
'Hello'
```

```python
spam[6:]
```

```output
'world!'
```

```python
spam[6:-1]
```

```output
'world'
```

```python
spam[:-1]
```

```output
'Hello world'
```

```python
spam[::-1]
```

```output
'!dlrow olleH'
```

```python
fizz = spam[0:5]
fizz
```

```output
'Hello'
```

## in 및 not in 연산자

```python
'Hello' in 'Hello World'
```

```output
True
```

```python
'Hello' in 'Hello'
```

```output
True
```

```python
'HELLO' in 'Hello World'
```

```output
False
```

```python
'' in 'spam'
```

```output
True
```

```python
'cats' not in 'cats and dogs'
```

```output
False
```

## upper(), lower() 및 title()

문자열을 대문자, 소문자 및 제목 케이스로 변환합니다:

```python
greet = 'Hello world!'
greet.upper()
```

```output
'HELLO WORLD!'
```

```python
greet.lower()
```

```output
'hello world!'
```

```python
greet.title()
```

```output
'Hello World!'
```

## isupper() 및 islower() 메서드

문자열이 대문자인지 또는 소문자인지 평가한 후 `True` 또는 `False`를 반환합니다:

```python
spam = 'Hello world!'
spam.islower()
```

```output
False
```

```python
spam.isupper()
```

```output
False
```

```python
'HELLO'.isupper()
```

```output
True
```

```python
'abc12345'.islower()
```

```output
True
```

```python
'12345'.islower()
```

```output
False
```

```python
'12345'.isupper()
```

```output
False
```

## isX 문자열 메서드

| 메서드      | 설명                                                                                           |
| :---------- | :--------------------------------------------------------------------------------------------- |
| isalpha()   | 문자열이 오직 문자로만 구성되어 있으면 `True`를 반환합니다.                                    |
| isalnum()   | 문자열이 오직 문자와 숫자로만 구성되어 있으면 `True`를 반환합니다.                             |
| isdecimal() | 문자열이 오직 숫자로만 구성되어 있으면 `True`를 반환합니다.                                    |
| isspace()   | 문자열이 오직 공백, 탭, 줄 바꿈으로만 구성되어 있으면 `True`를 반환합니다.                     |
| istitle()   | 문자열이 대문자로 시작하고 그 뒤에 소문자만 오는 단어로만 구성되어 있으면 `True`를 반환합니다. |

## startswith() 및 endswith()

```python
'Hello world!'.startswith('Hello')
```

```output
True
```

```python
'Hello world!'.endswith('world!')
```

```output
True
```

```python
'abc123'.startswith('abcdef')
```

```output
False
```

```python
'abc123'.endswith('12')
```

```output
False
```

```python
'Hello world!'.startswith('Hello world!')
```

```output
True
```

```python
'Hello world!'.endswith('Hello world!')
```

```output
True
```

## join() 및 split()

### join()

`join()` 메서드는 <router-link to="/cheatsheet/lists-and-tuples">리스트</router-link>, <router-link to="/cheatsheet/dictionaries">딕셔너리</router-link>, <router-link to="/cheatsheet/lists-and-tuples#the-tuple-data-type">튜플</router-link> 또는 <router-link to="/cheatsheet/sets">집합</router-link>과 같은 반복 가능한 객체의 모든 항목을 가져와 문자열로 결합합니다. 구분자를 지정할 수도 있습니다.

```python
''.join(['My', 'name', 'is', 'Simon'])
```

```output
'MynameisSimon'
```

```python
', '.join(['cats', 'rats', 'bats'])
```

```output
'cats, rats, bats'
```

```python
' '.join(['My', 'name', 'is', 'Simon'])
```

```output
'My name is Simon'
```

```python
'ABC'.join(['My', 'name', 'is', 'Simon'])
```

```output
'MyABCnameABCisABCSimon'
```

### split()

`split()` 메서드는 `string`을 `list`로 분할합니다. 기본적으로 공백을 사용하여 항목을 구분하지만, 원하는 다른 문자를 설정할 수도 있습니다:

```python
'My name is Simon'.split()
```

```output
['My', 'name', 'is', 'Simon']
```

```python
'MyABCnameABCisABCSimon'.split('ABC')
```

```output
['My', 'name', 'is', 'Simon']
```

```python
'My name is Simon'.split('m')
```

```output
['My na', 'e is Si', 'on']
```

```python
' My  name is  Simon'.split()
```

```output
['My', 'name', 'is', 'Simon']
```

```python
' My  name is  Simon'.split(' ')
```

```output
['', 'My', '', 'name', 'is', '', 'Simon']
```

## rjust(), ljust() 및 center() 를 사용한 텍스트 정렬

```python
'Hello'.rjust(10)
```

```output
'     Hello'
```

```python
'Hello'.rjust(20)
```

```output
'               Hello'
```

```python
'Hello World'.rjust(20)
```

```output
'         Hello World'
```

```python
'Hello'.ljust(10)
```

```output
'Hello     '
```

```python
'Hello'.center(20)
```

```output
'       Hello       '
```

`rjust()` 및 `ljust()`의 두 번째 선택적 인수는 공백 문자 외에 채울 문자를 지정합니다:

```python
'Hello'.rjust(20, '*')
```

```output
'***************Hello'
```

```python
'Hello'.ljust(20, '-')
```

```output
'Hello---------------'
```

```python
'Hello'.center(20, '=')
```

```output
'=======Hello========'
```

## strip(), rstrip(), 및 lstrip() 을 사용한 공백 제거

```python
spam = '    Hello World     '
spam.strip()
```

```output
'Hello World'
```

```python
spam.lstrip()
```

```output
'Hello World     '
```

```python
spam.rstrip()
```

```output
'    Hello World'
```

```python
spam = 'SpamSpamBaconSpamEggsSpamSpam'
spam.strip('ampS')
```

```output
'BaconSpamEggs'
```

## Count 메서드

적용된 문자열에서 주어진 문자 또는 부분 문자열의 발생 횟수를 계산합니다. 선택적으로 시작 및 끝 인덱스를 제공할 수 있습니다.

```python
sentence = 'one sheep two sheep three sheep four'
sentence.count('sheep')
```

```output
3
```

```python
sentence.count('e')
```

```output
9
```

```python
# 문자열 시작부터 6 번째 문자 이후의 e 개수 반환 (즉, 6 자 이후)
sentence.count('e', 6)
```

```output
8
```

```python
sentence.count('e', 7)
```

```output
7
```

## Replace 메서드

주어진 부분 문자열의 모든 발생을 다른 부분 문자열로 바꿉니다. 선택적으로 세 번째 인수를 제공하여 교체 횟수를 제한할 수 있습니다. 새 문자열을 반환합니다.

```python
text = "Hello, world!"
text.replace("world", "planet")
```

```output
'Hello, planet!'
```

```python
fruits = "apple, banana, cherry, apple"
fruits.replace("apple", "orange", 1)
```

```output
'orange, banana, cherry, apple'
```

```python
sentence = "I like apples, Apples are my favorite fruit"
sentence.replace("apples", "oranges")
```

```output
'I like oranges, Apples are my favorite fruit'
```

## 관련 링크

- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
- <router-link to="/builtin/input">input()</router-link>
- <router-link to="/cheatsheet/string-formatting">문자열 포매팅</router-link>
- <router-link to="/cheatsheet/regular-expressions">정규 표현식</router-link>
