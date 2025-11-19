---
title: 'Python 컨텍스트 관리자 - Python 치트 시트'
description: 'Python 컨텍스트 관리자는 널리 사용되지만, 그 사용 목적을 이해하는 사람은 적습니다. 파일 읽기/쓰기에 흔히 사용되는 이 구문은 특정 리소스가 특정 프로세스에서만 사용되도록 보장하여 시스템 메모리 보존 및 리소스 관리를 개선하는 데 도움을 줍니다.'
labUrl: 'https://labex.io/ko/labs/python-python-context-manager-633650?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 컨텍스트 관리자
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Python 의 컨텍스트 관리자는 널리 사용되지만, 그 사용 목적을 이해하는 사람은 많지 않습니다. 파일 읽기 및 쓰기와 함께 흔히 사용되는 이 구문들은 특정 프로세스에 대해서만 특정 리소스가 사용되도록 보장함으로써 애플리케이션이 시스템 메모리를 보존하고 리소스 관리를 개선하도록 돕습니다.

## with 문

컨텍스트 관리자는 컨텍스트 (코드 블록) 가 시작되고 끝날 때 알림을 받는 객체입니다. 일반적으로 `with` 문과 함께 사용됩니다. 이 문이 알림 처리를 담당합니다.

예를 들어, 파일 객체는 컨텍스트 관리자입니다. 컨텍스트가 끝나면 파일 객체는 자동으로 닫힙니다.

```python
# 컨텍스트 관리자: 리소스 정리를 자동으로 처리
# 'with' 블록을 벗어나면 파일이 자동으로 닫힘
with open(filename) as f:  # 'f'는 파일 객체입니다
    file_contents = f.read()

# 오류가 발생하더라도 여기서 파일은 자동으로 닫힙니다
```

블록 실행을 끝내는 모든 것은 컨텍스트 관리자의 종료 메서드를 호출하게 만듭니다. 여기에는 예외도 포함되며, 오류로 인해 열린 파일이나 연결을 조기에 종료해야 할 때 유용할 수 있습니다. 파일을 제대로 닫지 않고 스크립트를 종료하는 것은 데이터 손실이나 기타 문제를 야기할 수 있는 나쁜 습관입니다. 컨텍스트 관리자를 사용하면 이러한 방식으로 손상이나 손실을 방지하기 위한 예방 조치가 항상 취해지도록 보장할 수 있습니다.

## 자신만의 컨텍스트 관리자 작성하기

`contextlib.contextmanager` 데코레이터를 사용하여 제너레이터 구문을 통해 컨텍스트 관리자를 작성하는 것도 가능합니다.

```python
# contextlib 데코레이터를 사용한 함수 기반 컨텍스트 관리자
import contextlib
@contextlib.contextmanager
def context_manager(num):
    print('Enter')  # yield 이전 코드는 __enter__에서 실행됨
    yield num + 1   # yield 된 값이 'cm' 변수가 됨
    print('Exit')    # yield 이후 코드는 __exit__에서 실행됨

with context_manager(2) as cm:  # cm 은 yield 된 값 (3) 을 받음
    print('Right in the middle with cm = {}'.format(cm))
```

```output
Enter
Right in the middle with cm = 3
Exit
```

## 클래스 기반 컨텍스트 관리자

클래스 기반 컨텍스트 관리자를 정의할 수 있습니다. 핵심 메서드는 `__enter__`와 `__exit__`입니다.

```python
# 클래스 기반 컨텍스트 관리자: __enter__ 및 __exit__ 메서드 구현
class ContextManager:
    def __enter__(self, *args, **kwargs):  # 'with' 블록 진입 시 호출됨
        print("--enter--")
        return self  # 'as' 변수로 사용할 객체를 반환할 수 있음

    def __exit__(self, *args):  # 'with' 블록 종료 시 호출됨
        print("--exit--")

with ContextManager():  # __enter__ 호출 후, 완료되면 __exit__ 호출
    print("test")
```

```output
--enter--
test
--exit--
```

## 관련 링크

- <router-link to="/cheatsheet/reading-and-writing-files">파일 읽기 및 쓰기</router-link>
- <router-link to="/cheatsheet/exception-handling">예외 처리</router-link>
- <router-link to="/cheatsheet/decorators">데코레이터</router-link>
- <router-link to="/blog/python-pathlib-essentials">모든 개발자가 알아야 할 10 가지 필수 파일 시스템 작업</router-link>
- <router-link to="/builtin/open">open()</router-link>
