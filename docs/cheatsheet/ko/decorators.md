---
title: '파이썬 데코레이터 - 파이썬 치트 시트'
description: '파이썬 데코레이터는 함수나 클래스를 확장하는 간결하고 재사용 가능한 구문입니다.'
labUrl: 'https://labex.io/ko/labs/python-python-decorators-633654?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 데코레이터
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Python 데코레이터는 함수나 클래스를 확장하는 간결하고 재사용 가능한 방법을 제공합니다. 실용적인 예제와 패턴은 관련 아티클 <router-link to="/blog/python-decorators-for-beginners">Python 데코레이터: 코드를 향상시키는 간단한 패턴</router-link>을 참조하십시오.

## 기본 데코레이터

가장 간단한 형태의 데코레이터는 다른 함수를 인수로 받아 래퍼 (wrapper) 를 반환하는 함수입니다. 다음 예제는 데코레이터 생성 및 사용법을 보여줍니다.

```python
# 데코레이터: 다른 함수를 인수로 받아 래퍼를 반환하는 함수
def your_decorator(func):
  def wrapper():
    # func 이전에 수행할 작업...
    print("Before func!")
    func()  # 원본 함수 호출
    # func 이후에 수행할 작업...
    print("After func!")
  return wrapper  # 래퍼 함수 반환

# @your_decorator 는 your_decorator(foo) 를 위한 구문 설탕입니다
@your_decorator
def foo():
  print("Hello World!")

foo()  # 래퍼를 호출하며, 래퍼는 추가 동작과 함께 foo 를 호출합니다
```

출력:

```plaintext
Before func!
Hello World!
After func!
```

## 매개변수가 있는 함수를 위한 데코레이터

```python
# 매개변수가 있는 함수와 함께 작동하는 데코레이터
def your_decorator(func):
  def wrapper(*args,**kwargs):  # 모든 인수를 수락
    # func 이전에 수행할 작업...
    print("Before func!")
    func(*args,**kwargs)  # 인수를 원본 함수에 전달
    # func 이후에 수행할 작업...
    print("After func!")
  return wrapper

@your_decorator
def foo(bar):
  print("My name is " + bar)

foo("Jack")  # 인수가 래퍼를 통해 전달됩니다
```

출력:

```plaintext
Before func!
My name is Jack
After func!
```

## 기본 데코레이터 템플릿

이 템플릿은 대부분의 데코레이터 사용 사례에 유용합니다. 매개변수 유무와 반환 값 유무에 관계없이 모든 함수에 대해 유효합니다.

```python
import functools

# 모범 사례 데코레이터 템플릿: 함수 메타데이터 및 반환 값 보존
def your_decorator(func):
  @functools.wraps(func)  # 함수 이름, docstring 등을 보존
  def wrapper(*args,**kwargs):
    # func 이전에 수행할 작업...
    result = func(*args,**kwargs)  # 함수를 호출하고 반환 값을 캡처
    # func 이후에 수행할 작업..
    return result  # 원본 함수의 반환 값을 반환
  return wrapper
```

## 매개변수가 있는 데코레이터

데코레이터에 사용할 매개변수를 정의할 수도 있습니다.

```python
import functools

# 데코레이터 팩토리: 매개변수를 기반으로 데코레이터를 반환
def your_decorator(arg):
  def decorator(func):
    @functools.wraps(func)  # 함수 메타데이터 보존
    def wrapper(*args,**kwargs):
      # func 이전에 수행할 작업 (arg 를 사용할 수 있음)...
      result = func(*args,**kwargs)
      # func 이후에 수행할 작업 (arg 를 사용할 수 있음)...
      return result
    return wrapper
  return decorator  # 실제 데코레이터 함수 반환
```

이 데코레이터를 사용하려면:

```python
# 매개변수가 있는 데코레이터 사용: @your_decorator(arg='x') 는 your_decorator('x') 를 호출하며,
# 이는 foo 에 적용될 데코레이터를 반환합니다
@your_decorator(arg = 'x')
def foo(bar):
  return bar
```

## 클래스 기반 데코레이터

클래스 메서드를 데코레이트하려면 데코레이터를 클래스 내부에 정의해야 합니다. 암시적인 인수인 `self`만 메서드에 전달되고 추가적인 명시적 인수가 없는 경우, 추가 인수가 없는 메서드에 대해서는 별도의 데코레이터를 만들어야 합니다. 아래 예시는 특정 방식으로 예외를 포착하고 출력하려는 경우입니다.

```python
# 클래스 메서드 데코레이터: 클래스 내부에 정의됨
class DecorateMyMethod:

  # 'self' 매개변수만 있는 메서드를 위한 정적 메서드 데코레이터
  def decorator_for_class_method_with_no_args(method):
    def wrapper_for_class_method(self):  # self 만 받음
      try:
        return method(self)  # 원본 메서드 호출
      except Exception as e:
        print("\nWARNING: Please make note of the following:\n")
        print(e)
    return wrapper_for_class_method

  def __init__(self,succeed:bool):
    self.succeed = succeed

  @decorator_for_class_method_with_no_args
  def class_action(self):
    if self.succeed:
      print("You succeeded by choice.")
    else:
      raise Exception("Epic fail of your own creation.")

test_succeed = DecorateMyMethod(True)
test_succeed.class_action()
```

출력:

```plaintext
You succeeded by choice.
```

```python
test_fail = DecorateMyMethod(False)
test_fail.class_action()
```

출력:

```plaintext
WARNING: Please make note of the following:

Epic fail of your own creation.
```

데코레이터는 메서드 대신 클래스로도 정의될 수 있습니다. 이는 호출 횟수를 세는 다음 예시와 같이 상태를 유지하고 업데이트하는 데 유용합니다.

```python
# 클래스 기반 데코레이터: 호출 간 상태 유지
class CountCallNumber:

  def __init__(self, func):
    self.func = func  # 데코레이트할 함수 저장
    self.call_number = 0  # 호출 카운터 초기화

  def __call__(self, *args, **kwargs):  # 인스턴스를 호출 가능하게 만듦
    self.call_number += 1  # 카운터 증가
    print("This is execution number " + str(self.call_number))
    return self.func(*args, **kwargs)  # 원본 함수 호출

@CountCallNumber  # CountCallNumber 인스턴스 생성
def say_hi(name):
  print("Hi! My name is " + name)

say_hi("Jack")  # CountCallNumber.__call__() 호출
```

출력:

```plaintext
This is execution number 1
Hi! My name is Jack
```

```python
say_hi("James")
```

출력:

```plaintext
This is execution number 2
Hi! My name is James
```

<base-disclaimer>
  <base-disclaimer-title>
    카운트 예제
  </base-disclaimer-title>
  <base-disclaimer-content>
  이 카운트 예제는 Patrick Loeber 의 <a href="https://youtu.be/HGOBQPFzWKo?si=IUvFzeQbzTmeEgKV" target="_blank">YouTube 튜토리얼</a>에서 영감을 받았습니다.
  </base-disclaimer-content>
</base-disclaimer>

## 관련 링크

- <router-link to="/blog/python-decorators-for-beginners">Python 데코레이터: 코드를 향상시키는 간단한 패턴</router-link>
- <router-link to="/blog/python-easy-args-kwargs">Python \*args 및 \*\*kwargs 쉽게 이해하기</router-link>
- <router-link to="/cheatsheet/functions">함수</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">Args 및 Kwargs</router-link>
- <router-link to="/builtin/classmethod">classmethod()</router-link>
- <router-link to="/builtin/staticmethod">staticmethod()</router-link>
- <router-link to="/builtin/property">property()</router-link>
- <router-link to="/builtin/callable">callable()</router-link>
