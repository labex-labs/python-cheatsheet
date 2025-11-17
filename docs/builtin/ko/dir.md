---
title: 'Python dir() 내장 함수 - Python 치트 시트'
description: '인수 없이 호출하면 현재 로컬 범위의 이름 목록을 반환합니다. 인수가 있으면 해당 객체의 유효한 속성 목록을 반환하려고 시도합니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python dir() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#dir">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   인수 없이 호출하면 현재 로컬 범위의 이름 목록을 반환합니다. 인수가 있으면 해당 객체에 대한 유효한 속성 목록을 반환하려고 시도합니다.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Python 의 `dir()` 함수는 현재 네임스페이스의 이름 목록이나 주어진 객체의 속성을 반환하는 강력한 내장 함수입니다. 일반적으로 객체, 모듈 및 클래스를 검사하고 탐색하는 데 사용되며, 작업할 수 있는 사용 가능한 메서드, 속성 및 이름을 찾는 데 도움이 됩니다.

## Syntax

```python
dir([object])
```

- `object` (선택 사항): 속성을 탐색하려는 객체입니다. 제공되지 않으면 현재 네임스페이스의 이름을 반환합니다.

## 현재 네임스페이스의 이름 탐색

```python
a = 10
b = "Hello"
def my_function():
    pass

print(dir())
```

Output:

```plaintext
['__annotations__', '__builtins__', '__doc__', '__loader__', '__name__', '__package__', '__spec__', 'a', 'b', 'my_function']
```

## 모듈 속성 탐색

```python
import math
print(dir(math))
```

Output:

```plaintext
['__doc__', '__loader__', '__name__', '__package__', '__spec__', 'acos', 'acosh', 'asin', ... ]
```

## 객체 속성 탐색

```python
class MyClass:
    def __init__(self):
        self.x = 5
        self.y = "Hello"

obj = MyClass()
print(dir(obj))
```

Output:

```plaintext
['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', ... 'x', 'y']
```

## 내장 유형과 함께 `dir()` 사용하기

```python
my_list = [1, 2, 3]
print(dir(my_list))
```

Output:

```plaintext
[..., 'append', 'clear', 'copy', 'count', 'extend', 'index', 'insert', 'pop', 'remove', 'reverse', 'sort']
```

## `dir()` 출력 필터링

```python
import math
print([name for name in dir(math) if not name.startswith("__")])
```

Output:

```plaintext
['acos', 'acosh', 'asin', 'asinh', 'atan', 'atan2', ... ]
```

## 관련 링크

- <router-link :to="'/builtin/globals'">`globals()`</router-link>
- <router-link :to="'/builtin/locals'">`locals()`</router-link>
- <router-link :to="'/builtin/hasattr'">`hasattr()`</router-link>
- <router-link :to="'/builtin/getattr'">`getattr()`</router-link>
- <router-link :to="'/cheatsheet/debugging'">디버깅</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP 기본 사항</router-link>
