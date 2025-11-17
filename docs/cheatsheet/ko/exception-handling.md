---
title: '파이썬 예외 처리 - 파이썬 치트 시트'
description: '파이썬에서 예외 처리는 예외 발생에 대응하는 프로세스입니다.'
labUrl: 'https://labex.io/ko/labs/python-python-exception-handling-633656?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 예외 처리
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://en.wikipedia.org/wiki/Exception_handling">예외 처리</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    컴퓨팅 및 컴퓨터 프로그래밍에서 예외 처리는 특별한 처리가 필요한 비정상적이거나 예외적인 조건인 예외의 발생에 대응하는 프로세스입니다.
  </base-disclaimer-content>
</base-disclaimer>

Python 에는 프로그램이 오류에 직면했을 때 발생하는 많은 [내장 예외](https://docs.python.org/3/library/exceptions.html)가 있으며, 인기 있는 [Requests](https://requests.readthedocs.io/en/latest)와 같은 대부분의 외부 라이브러리에는 우리가 처리해야 할 고유한 [사용자 정의 예외](https://requests.readthedocs.io/en/latest/user/quickstart/#errors-and-exceptions)가 포함되어 있습니다.

## 기본 예외 처리

0 으로 나눌 수 없다는 것은 수학적 사실이며, Python 에서 시도하면 인터프리터는 내장 예외인 [ZeroDivisionError](https://docs.python.org/3/library/exceptions.html#ZeroDivisionError)를 발생시킵니다.

```python
def divide(dividend , divisor):
    print(dividend / divisor)

divide(dividend=10, divisor=5)
```

출력:

```plaintext
2
```

```python
divide(dividend=10, divisor=0)
```

출력:

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ZeroDivisionError: division by zero
```

프로그램이 실행을 멈추거나 사용자가 이해하지 못할 출력을 표시하지 않도록 하고 싶다고 가정해 봅시다. 유용하고 명확한 메시지를 인쇄하고 싶다면, `try` 및 `except` 키워드를 사용하여 예외를 **_처리_**해야 합니다.

```python
# try-except: 예외를 우아하게 처리
def divide(dividend , divisor):
    try:  # 이 코드를 실행해 보세요
        print(dividend / divisor)
    except ZeroDivisionError:  # 특정 예외 유형을 포착
        print('0 으로 나눌 수 없습니다')

divide(dividend=10, divisor=5)
```

출력:

```plaintext
2
```

```python
divide(dividend=10, divisor=0)
```

출력:

```plaintext
0으로 나눌 수 없습니다
```

## 하나의 예외 블록을 사용한 여러 예외 처리

여러 예외 블록을 만들 필요 없이 다음과 같이 한 줄에서 여러 예외를 처리할 수도 있습니다.

```python
# 하나의 except 블록에서 여러 예외 처리
def divide(dividend , divisor):
    try:
        if (dividend == 10):
          var = 'str' + 1  # 이것은 TypeError 를 발생시킵니다
        else:
          print(dividend / divisor)
    except (ZeroDivisionError, TypeError) as error:  # 여러 예외 유형 포착
        print(error)  # 오류 메시지 출력

divide(dividend=20, divisor=5)
```

출력:

```plaintext
4
```

```python
divide(dividend=10, divisor=5)
```

출력:

```plaintext
can only concatenate str (not "int") to str
```

```python
divide(dividend=10, divisor=0)
```

출력:

```plaintext
division by zero
```

## 예외 처리의 Finally 코드

`finally` 섹션 내부의 코드는 예외가 발생했는지 여부에 관계없이 항상 실행됩니다.

```python
# finally 블록: 예외 발생 여부와 관계없이 항상 실행
def divide(dividend , divisor):
    try:
        print(dividend / divisor)
    except ZeroDivisionError:
        print('0 으로 나눌 수 없습니다')
    finally:  # 예외가 발생하더라도 항상 실행됩니다
        print('실행 완료')

divide(dividend=10, divisor=5)
```

출력:

```plaintext
2.0
실행 완료
```

```python
divide(dividend=10, divisor=0)
```

출력:

```plaintext
0으로 나눌 수 없습니다
실행 완료
```

## 사용자 정의 예외

사용자 정의 예외는 Python 의 기본 `Exception` 클래스를 상속하는 `class`를 생성하여 초기화되며, `raise` 키워드를 사용하여 발생시킵니다.

```python
# 사용자 정의 예외: Exception 클래스 상속으로 생성
class MyCustomException(Exception):
    pass

raise MyCustomException  # 사용자 정의 예외 발생
```

출력:

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
__main__.MyCustomException
```

사용자 정의 예외 메시지를 선언하려면 매개변수로 전달할 수 있습니다.

```python
class MyCustomException(Exception):
    pass

raise MyCustomException('내 사용자 정의 예외에 대한 사용자 정의 메시지')
```

출력:

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
__main__.MyCustomException: 내 사용자 정의 예외에 대한 사용자 정의 메시지
```

사용자 정의 예외를 처리하는 것은 다른 예외와 동일합니다.

```python
try:
    raise MyCustomException('내 사용자 정의 예외에 대한 사용자 정의 메시지')
except MyCustomException:
    print('내 사용자 정의 예외가 발생했습니다')
```

출력:

```plaintext
내 사용자 정의 예외가 발생했습니다
```

## 관련 링크

- <router-link to="/cheatsheet/control-flow">제어 흐름</router-link>
- <router-link to="/builtin/breakpoint">breakpoint()</router-link>
- <router-link to="/builtin/isinstance">isinstance()</router-link>
- <router-link to="/builtin/issubclass">issubclass()</router-link>
