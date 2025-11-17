---
title: '파이썬 디버깅 - 파이썬 치트 시트'
description: '컴퓨터 프로그래밍 및 소프트웨어 개발에서 디버깅은 컴퓨터 프로그램, 소프트웨어 또는 시스템 내의 버그 (결함 또는 올바른 작동을 방해하는 문제) 를 찾고 해결하는 프로세스입니다.'
labUrl: 'https://labex.io/ko/labs/python-python-debugging-633653?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 디버깅
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://en.wikipedia.org/wiki/Debugging">버그 찾기 및 해결</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    컴퓨터 프로그래밍 및 소프트웨어 개발에서 디버깅은 컴퓨터 프로그램, 소프트웨어 또는 시스템 내의 버그 (결함 또는 올바른 작동을 방해하는 문제) 를 찾고 해결하는 프로세스입니다.
  </base-disclaimer-content>
</base-disclaimer>

## 예외 발생시키기

예외는 `raise` 문을 사용하여 발생시킵니다. 코드에서 `raise` 문은 다음으로 구성됩니다.

- `raise` 키워드
- `Exception()` 함수 호출
- `Exception()` 함수에 전달되는 유용한 오류 메시지가 포함된 문자열

```python
# raise 문: 사용자 지정 메시지로 예외를 수동으로 발생시킵니다.
raise Exception('This is the error message.')
```

출력:

```plaintext
Traceback (most recent call last):
  File "<pyshell#191>", line 1, in <module>
    raise Exception('This is the error message.')
Exception: This is the error message.
```

일반적으로 함수 자체보다는 함수를 호출하는 코드가 예외를 처리하는 방법을 알고 있습니다. 따라서 함수 내부에서 `raise` 문을, 함수를 호출하는 코드에서 `try` 및 `except` 문을 흔히 볼 수 있습니다.

```python
# 함수에서 예외 발생, 호출 코드에서 처리
def box_print(symbol, width, height):
    if len(symbol) != 1:
      raise Exception('Symbol must be a single character string.')
    if width <= 2:
      raise Exception('Width must be greater than 2.')
    if height <= 2:
      raise Exception('Height must be greater than 2.')
    print(symbol * width)
    for i in range(height - 2):
        print(symbol + (' ' * (width - 2)) + symbol)
    print(symbol * width)

# 함수 호출 시 예외 처리
for sym, w, h in (('*', 4, 4), ('O', 20, 5), ('x', 1, 3), ('ZZ', 3, 3)):
    try:
        box_print(sym, w, h)
    except Exception as err:  # 예외를 잡고 오류 메시지 출력
        print('An exception happened: ' + str(err))
```

출력:

```plaintext
****
*  *
*  *
****
OOOOOOOOOOOOOOOOOOOO
O                  O
O                  O
O                  O
OOOOOOOOOOOOOOOOOOOO
An exception happened: Width must be greater than 2.
An exception happened: Symbol must be a single character string.
```

[Exception Handling](/cheatsheet/exception-handling)에 대해 자세히 읽어보세요.

## 트레이스백을 문자열로 얻기

예외가 처리되지 않고 발생하면 Python 은 `traceback`을 표시합니다. 하지만 `traceback.format_exc()`를 호출하여 이를 문자열로 얻을 수도 있습니다. 이 함수는 예외의 트레이스백 정보를 원하지만 `except` 문으로 예외를 우아하게 처리하고 싶을 때 유용합니다. 이 함수를 호출하기 전에 Python 의 `traceback` 모듈을 가져와야 합니다.

```python
# traceback.format_exc(): 로깅/디버깅을 위해 트레이스백을 문자열로 가져오기
import traceback

try:
    raise Exception('This is the error message.')
except:
    with open('errorInfo.txt', 'w') as error_file:
        error_file.write(traceback.format_exc())  # 트레이스백을 파일에 쓰기
    print('The traceback info was written to errorInfo.txt.')
```

출력:

```plaintext
116
The traceback info was written to errorInfo.txt.
```

116 은 `write()` 메서드의 반환 값으로, 116 자가 파일에 기록되었음을 의미합니다. `traceback` 텍스트는 errorInfo.txt 에 기록되었습니다.

    Traceback (most recent call last):
      File "<pyshell#28>", line 2, in <module>
    Exception: This is the error message.

## 단언 (Assertions)

단언은 코드가 명백히 잘못된 작업을 수행하고 있지 않은지 확인하기 위한 건전성 검사입니다. 이러한 건전성 검사는 `assert` 문을 통해 수행됩니다. 건전성 검사가 실패하면 `AssertionError` 예외가 발생합니다. 코드에서 `assert` 문은 다음으로 구성됩니다.

- `assert` 키워드
- 조건 (즉, `True` 또는 `False`로 평가되는 표현식)
- 쉼표
- 조건이 `False`일 때 표시할 `string`

```python
# assert 문: 조건 확인, False 이면 AssertionError 발생
pod_bay_door_status = 'open'
assert pod_bay_door_status == 'open', 'The pod bay doors need to be "open".'  # 통과

pod_bay_door_status = 'I\'m sorry, Dave. I\'m afraid I can\'t do that.'
assert pod_bay_door_status == 'open', 'The pod bay doors need to be "open".'  # AssertionError 발생
```

출력:

```plaintext
Traceback (most recent call last):
  File "<pyshell#10>", line 1, in <module>
    assert pod_bay_door_status == 'open', 'The pod bay doors need to be "open".'
AssertionError: The pod bay doors need to be "open".
```

일반적인 영어로, `assert` 문은 "나는 이 조건이 참이라고 단언하며, 그렇지 않다면 프로그램 어딘가에 버그가 있다"고 말합니다. 예외와 달리, 코드는 `try` 및 `except`로 `assert` 문을 처리해서는 안 됩니다. `assert`가 실패하면 프로그램이 충돌해야 합니다. 이렇게 빨리 실패함으로써 버그의 원래 원인과 버그를 처음 발견한 시점 사이의 시간을 단축할 수 있습니다. 이렇게 하면 버그를 유발하는 코드를 찾기 위해 확인해야 하는 코드의 양이 줄어듭니다.

### 단언 비활성화

Python 을 실행할 때 `-O` 옵션을 전달하여 단언을 비활성화할 수 있습니다.

## 로깅 (Logging)

프로그램이 실행되는 동안 로그 메시지가 화면에 표시되도록 `logging` 모듈을 활성화하려면 프로그램 상단에 다음을 복사합니다.

```python
import logging
logging.basicConfig(level=logging.DEBUG, format=' %(asctime)s - %(levelname)s- %(message)s')
```

어떤 숫자의 팩토리얼을 계산하는 함수를 작성했다고 가정해 봅시다. 수학에서 팩토리얼 4 는 1 × 2 × 3 × 4, 즉 24 입니다. 팩토리얼 7 은 1 × 2 × 3 × 4 × 5 × 6 × 7, 즉 5,040 입니다. 새 파일 편집기 창을 열고 다음 코드를 입력합니다. 이 코드에는 버그가 있지만, 무엇이 잘못되고 있는지 파악하는 데 도움이 되도록 여러 로그 메시지를 입력할 것입니다. 프로그램을 factorialLog.py 로 저장합니다.

```python
import logging
logging.basicConfig(level=logging.DEBUG, format=' %(asctime)s - %(levelname)s- %(message)s')
logging.debug('Start of program')

def factorial(n):
    logging.debug('Start of factorial(%s)' % (n))
    total = 1
    for i in range(1, n + 1):
        total *= i
        logging.debug('i is ' + str(i) + ', total is ' + str(total))
    logging.debug('End of factorial(%s)' % (n))
    return total

print(factorial(5))
logging.debug('End of program')
```

출력:

```plaintext
2015-05-23 16:20:12,664 - DEBUG - Start of program
2015-05-23 16:20:12,664 - DEBUG - Start of factorial(5)
2015-05-23 16:20:12,665 - DEBUG - i is 0, total is 0
2015-05-23 16:20:12,668 - DEBUG - i is 1, total is 0
2015-05-23 16:20:12,670 - DEBUG - i is 2, total is 0
2015-05-23 16:20:12,673 - DEBUG - i is 3, total is 0
2015-05-23 16:20:12,675 - DEBUG - i is 4, total is 0
2015-05-23 16:20:12,678 - DEBUG - i is 5, total is 0
2015-05-23 16:20:12,680 - DEBUG - End of factorial(5)
0
2015-05-23 16:20:12,684 - DEBUG - End of program
```

## 로깅 수준 (Logging Levels)

로깅 수준은 로그 메시지를 중요도에 따라 분류하는 방법을 제공합니다. 중요도가 가장 낮은 것부터 가장 높은 것까지 다섯 가지 로깅 수준이 있으며 표 10-1 에 설명되어 있습니다. 각 수준에서 다른 로깅 함수를 사용하여 메시지를 기록할 수 있습니다.

| 수준       | 로깅 함수            | 설명                                                                                                                           |
| :--------- | :------------------- | :----------------------------------------------------------------------------------------------------------------------------- |
| `DEBUG`    | `logging.debug()`    | 가장 낮은 수준. 작은 세부 사항에 사용됩니다. 일반적으로 문제 진단 시에만 이러한 메시지에 신경 씁니다.                          |
| `INFO`     | `logging.info()`     | 프로그램의 일반적인 이벤트에 대한 정보를 기록하거나 프로그램의 해당 지점에서 작동이 제대로 되고 있는지 확인하는 데 사용됩니다. |
| `WARNING`  | `logging.warning()`  | 프로그램 작동을 막지는 않지만 미래에는 그럴 수 있는 잠재적인 문제를 나타내는 데 사용됩니다.                                    |
| `ERROR`    | `logging.error()`    | 프로그램이 무언가를 수행하는 데 실패하여 기록하는 데 사용됩니다.                                                               |
| `CRITICAL` | `logging.critical()` | 가장 높은 수준. 프로그램이 완전히 실행을 중지하게 만들었거나 만들려고 하는 치명적인 오류를 나타내는 데 사용됩니다.             |

## 로깅 비활성화

프로그램 디버깅을 마친 후에는 모든 로그 메시지가 화면을 어지럽히는 것을 원하지 않을 수 있습니다. `logging.disable()` 함수는 모든 로깅 호출을 수동으로 제거하기 위해 프로그램에 들어갈 필요가 없도록 이를 비활성화합니다.

```python
import logging

logging.basicConfig(level=logging.INFO, format=' %(asctime)s -%(levelname)s - %(message)s')
logging.critical('Critical error! Critical error!')
```

출력:

```plaintext
2015-05-22 11:10:48,054 - CRITICAL - Critical error! Critical error!
```

```python
logging.disable(logging.CRITICAL)
logging.critical('Critical error! Critical error!')
logging.error('Error! Error!')
```

## 파일에 로깅

로그 메시지를 화면에 표시하는 대신 텍스트 파일에 쓸 수 있습니다. `logging.basicConfig()` 함수는 다음과 같이 `filename` 키워드 인수를 사용합니다.

```python
import logging
logging.basicConfig(filename='myProgramLog.txt', level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')
```

## 관련 링크

- <router-link to="/cheatsheet/exception-handling">예외 처리</router-link>
- <router-link to="/builtin/breakpoint">breakpoint()</router-link>
