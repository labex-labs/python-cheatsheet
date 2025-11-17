---
title: '파이썬 데코레이터 - 코드를 향상시키는 간단한 패턴 - 파이썬 치트 시트'
description: '함수를 작성할 수 있다면 데코레이터도 작성할 수 있습니다. 타이머 및 로거와 같은 기능을 코드를 추가하는 방법을 이 쉽고 초보자 친화적인 패턴으로 배우세요.'
date: 'Aug 16, 2025'
updated: 'Aug 16, 2025'
tags: 'python, intermediate, decorators'
socialImage: '/blog/python-decorators.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "파이썬 데코레이터 - 코드를 향상시키는 간단한 패턴 - 파이썬 치트 시트"
    description: "함수를 작성할 수 있다면 데코레이터도 작성할 수 있습니다. 타이머 및 로거와 같은 기능을 코드를 추가하는 방법을 이 쉽고 초보자 친화적인 패턴으로 배우세요."
    date: "Aug 16, 2025"
    updated: "Aug 16, 2025"
    tags: "python, intermediate, decorators"
    socialImage: "/blog/python-decorators.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="파이썬 데코레이터 - 코드를 향상시키는 간단한 패턴 - 파이썬 치트 시트" />

함수 위에 `@something`을 볼 때 어떤 마법이 일어나고 있는지 궁금했던 적이 있나요? 저도 그랬습니다. 데코레이터는 처음에는 위협적으로 보일 수 있지만, 기본 사항을 이해하면 Python 의 가장 우아한 기능 중 하나입니다. 간결한 참조는 <router-link to="/cheatsheet/decorators">데코레이터 (치트 시트)</router-link>를 참조하세요.

데코레이터를 함수의 선물 포장이라고 생각하세요. 안의 함수는 그대로이지만, 데코레이터가 위에 멋진 리본을 추가해 줍니다. 즉, 원본 코드를 변경하지 않고 추가 기능을 제공하는 것입니다.

## 가장 간단한 데코레이터

무슨 일이 일어나고 있는지 이해하기 위해 가장 기본적인 예제부터 시작하겠습니다.

```python
def my_decorator(func):
    def wrapper():
        print("Something happens before!")
        func()
        print("Something happens after!")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
# Something happens before!
# Hello!
# Something happens after!
```

이것이 전부입니다! 데코레이터는 단순히 다른 함수를 받아 추가 동작으로 래핑하는 함수일 뿐입니다. `@my_decorator` 구문은 `say_hello = my_decorator(say_hello)`를 작성하는 더 깔끔한 방법일 뿐입니다.

## 첫 번째 유용한 데코레이터: 타이머

다음은 실제로 사용하고 싶을 데코레이터입니다. 함수가 실행되는 데 걸리는 시간을 알려줍니다.

```python
import time
import functools

def timer(func):
    @functools.wraps(func)  # 원본 함수의 이름과 문서를 보존합니다
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start:.4f} seconds")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(1)
    return "Done!"

result = slow_function()
# slow_function took 1.0041 seconds
print(result)  # Done!
```

추가 데코레이터 템플릿 및 일반적인 패턴은 <router-link to="/cheatsheet/decorators">데코레이터 (치트 시트)</router-link>를 참조하세요.

`*args`와 `**kwargs`( <router-link to="/cheatsheet/args-and-kwargs">인수 & 키워드 인수</router-link> 참조) 를 사용하는 것을 확인하세요. 이렇게 하면 데코레이터가 함수가 몇 개의 인수를 받는지에 관계없이 모든 함수에서 작동하도록 만들 수 있습니다.

## 코드 디버깅: 로거 데코레이터

무엇이 잘못되고 있는지 파악하려고 할 때 이 데코레이터는 매우 유용합니다. 보완적인 팁과 기술은 <router-link to="/cheatsheet/debugging">디버깅 (치트 시트)</router-link>도 확인하세요.

```python
def debug(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        args_str = ', '.join(repr(arg) for arg in args)
        kwargs_str = ', '.join(f"{k}={v!r}" for k, v in kwargs.items())
        all_args = ', '.join(filter(None, [args_str, kwargs_str]))
        print(f"Calling {func.__name__}({all_args})")

        result = func(*args, **kwargs)
        print(f"{func.__name__} returned {result!r}")
        return result
    return wrapper

@debug
def add_numbers(a, b, multiply_by=1):
    return (a + b) * multiply_by

result = add_numbers(5, 3, multiply_by=2)
# Calling add_numbers(5, 3, multiply_by=2)
# add_numbers returned 16
```

## 액세스 제어: 인증 데코레이터

특정 사용자만 함수를 실행하도록 해야 합니까? 방법은 다음과 같습니다.

```python
def requires_auth(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        # 실제 앱에서는 실제 인증을 확인하게 됩니다
        user_logged_in = True  # 이는 인증 시스템에서 가져옵니다

        if not user_logged_in:
            return "Access denied! Please log in."

        return func(*args, **kwargs)
    return wrapper

@requires_auth
def delete_everything():
    return "💥 Everything deleted! (just kidding)"

result = delete_everything()
print(result)  # 💥 Everything deleted! (just kidding)
```

## 속도 향상: 캐시 데코레이터

동일한 입력으로 비용이 많이 드는 계산을 수행하는 함수가 있는 경우 결과를 캐시합니다.

```python
def cache(func):
    cached_results = {}

    @functools.wraps(func)
    def wrapper(*args):
        if args in cached_results:
            print(f"Cache hit for {func.__name__}{args}")
            return cached_results[args]

        print(f"Computing {func.__name__}{args}")
        result = func(*args)
        cached_results[args] = result
        return result

    return wrapper

@cache
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(10))
# Computing fibonacci(10)
# Computing fibonacci(9)
# Computing fibonacci(8)
# ... (lots of computation)
# Cache hit for fibonacci(2)
# Cache hit for fibonacci(3)
# ... (cache hits)
# 55
```

## 실패한 작업 재시도

때때로 함수는 네트워크 문제나 일시적인 문제로 인해 실패합니다. 이 데코레이터는 자동으로 재시도합니다.

```python
import random

def retry(max_attempts=3):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            for attempt in range(max_attempts):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    print(f"Attempt {attempt + 1} failed: {e}")
                    if attempt == max_attempts - 1:
                        print("All attempts failed!")
                        raise
        return wrapper
    return decorator

@retry(max_attempts=3)
def unreliable_api_call():
    if random.random() < 0.7:  # 70% 실패 확률
        raise Exception("Network error")
    return "Success!"

# 이것은 실패할 경우 최대 3 번까지 재시도합니다
result = unreliable_api_call()
```

## 속도 제한: 코드 속도 늦추기

때로는 API 나 데이터베이스에 대해 신중해야 할 때가 있습니다.

```python
import time
import functools

def rate_limit(seconds):
    """
    함수가 호출되는 빈도를 제한하는 데코레이터입니다.
    """
    def decorator(func):
        # 마지막 호출 시간을 저장하기 위해 가변 float 값을 가진 리스트를 사용합니다.
        # 이를 통해 내부 wrapper 함수가 값을 수정할 수 있습니다.
        last_called_at = [0.0]

        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            # 마지막 호출 이후 경과된 시간 계산
            elapsed = time.time() - last_called_at[0]
            wait_time = seconds - elapsed

            # 충분한 시간이 지나지 않았다면 나머지 시간만큼 대기합니다
            if wait_time > 0:
                time.sleep(wait_time)

            # 마지막 호출 시간을 업데이트하고 함수를 실행합니다
            last_called_at[0] = time.time()
            return func(*args, **kwargs)

        return wrapper
    return decorator

@rate_limit(1)  # 초당 최대 한 번의 호출 허용
def call_api():
    print(f"API called at {time.time():.2f}")

# 이 호출들은 각각 약 1 초 간격으로 이루어집니다
call_api()
call_api()
call_api()

# 예상 출력:
# API called at 1723823038.50
# API called at 1723823039.50
# API called at 1723823040.50
```

## 입력 유효성 검사

함수가 올바른 유형의 데이터를 받는지 확인하세요.

```python
def validate_types(**expected_types):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            # 함수 매개변수 이름 가져오기
            import inspect
            sig = inspect.signature(func)
            bound_args = sig.bind(*args, **kwargs)
            bound_args.apply_defaults()

            for param_name, expected_type in expected_types.items():
                if param_name in bound_args.arguments:
                    value = bound_args.arguments[param_name]
                    if not isinstance(value, expected_type):
                        raise TypeError(
                            f"{param_name} must be {expected_type.__name__}, "
                            f"got {type(value).__name__}"
                        )

            return func(*args, **kwargs)
        return wrapper
    return decorator

@validate_types(name=str, age=int)
def create_user(name, age):
    return f"User {name}, age {age}"

# 작동합니다
user1 = create_user("Alice", 25)
print(user1)  # User Alice, age 25

# TypeError 발생
try:
    user2 = create_user("Bob", "twenty-five")
except TypeError as e:
    print(e)  # age must be int, got str
```

## 각 데코레이터 사용 시기

| 데코레이터 유형 | 가장 적합한 용도      | 예시 사용 사례                           |
| :-------------- | :-------------------- | :--------------------------------------- |
| **타이머**      | 성능 모니터링         | 느린 함수 찾기, 최적화                   |
| **디버그/로거** | 개발 및 문제 해결     | 함수 호출 이해, 디버깅                   |
| **인증**        | 보안 및 액세스 제어   | 관리자 함수 보호, 사용자 권한            |
| **캐시**        | 비용이 많이 드는 계산 | 데이터베이스 쿼리, API 호출, 복잡한 계산 |
| **재시도**      | 신뢰할 수 없는 작업   | 네트워크 요청, 파일 작업                 |
| **속도 제한**   | 빈도 제어             | API 호출, 스팸 방지                      |
| **유효성 검사** | 데이터 무결성         | 사용자 입력, API 매개변수                |

## 데코레이터 사용 팁

**항상 `@functools.wraps`를 사용하세요** – 이렇게 하면 원본 함수의 이름과 설명서가 보존되어 디버깅이 쉬워집니다 (예제는 <router-link to="/cheatsheet/decorators">데코레이터 치트 시트</router-link> 참조).

**단순하게 유지하세요** – 데코레이터가 복잡해지고 있다면 클래스나 별도의 함수로 분리해야 하는지 고려해 보세요.

**순서를 생각하세요** – 데코레이터를 쌓을 때 함수에 가장 가까운 것이 먼저 실행됩니다.

```python
@timer
@debug
def my_function():
    pass

# 다음 구문과 동일합니다:
# my_function = timer(debug(my_function))
```

**남용하지 마세요** – 데코레이터는 강력하지만 너무 많으면 코드를 이해하기 어려워질 수 있습니다.

## 주요 요점

데코레이터를 사용하면 함수의 코드를 변경하지 않고도 함수에 기능을 추가할 수 있습니다. 타이밍, 로깅, 인증 및 캐싱과 같은 교차 관심사에 완벽합니다.

여기에 제시된 간단한 패턴부터 시작하세요. 익숙해지면 특정 요구 사항에 맞는 보다 정교한 데코레이터를 만들 수 있습니다. 핵심은 데코레이터가 다른 함수를 래핑하는 함수일 뿐이라는 것을 이해하는 것이며, 그 외의 모든 것은 그 기본 개념의 영리한 응용입니다.

연습하고 싶으신가요? 기존 함수에 `@timer` 데코레이터를 추가하여 예상보다 느린 함수가 있는지 확인해 보세요. 놀라운 사실을 발견할 수도 있습니다!

## 관련 링크

추가적인 읽을 거리를 위해 아래에 관련 내부 문서 링크를 추가합니다.

- <router-link to="/cheatsheet/decorators">데코레이터 (치트 시트)</router-link>
- <router-link to="/cheatsheet/functions">함수 (치트 시트)</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">인수 & 키워드 인수 (치트 시트)</router-link>
- <router-link to="/cheatsheet/debugging">디버깅 (치트 시트)</router-link>
- <router-link to="/cheatsheet/oop-basics">OOP 기본 사항 (치트 시트)</router-link>
- <router-link to="/builtin/callable">callable() (내장 함수)</router-link>
- <router-link to="/builtin/staticmethod">staticmethod (내장 함수)</router-link>
- <router-link to="/blog/python-easy-args-kwargs">Python: 쉬운 인수 & 키워드 인수 (블로그)</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Python 컴프리헨션 (블로그)</router-link>
