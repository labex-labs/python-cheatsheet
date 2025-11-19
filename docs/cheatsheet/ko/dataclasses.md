---
title: '파이썬 데이터 클래스 - 파이썬 치트 시트'
description: '데이터 클래스는 파이썬 클래스이지만 데이터 객체 저장에 적합합니다. 이 모듈은 사용자 정의 클래스에 __init__() 및 __repr__() 와 같은 생성된 특수 메서드를 자동으로 추가하기 위한 데코레이터와 함수를 제공합니다.'
labUrl: 'https://labex.io/ko/labs/python-python-dataclasses-633652?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Dataclasses
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

`Dataclasses`는 파이썬 클래스이지만 데이터 객체를 저장하는 데 적합합니다.
이 모듈은 사용자 정의 클래스에 `__init__()` 및 `__repr__()`와 같은 자동으로 생성되는 특수 메서드를 추가하기 위한 데코레이터와 함수를 제공합니다.

## 특징

1. 데이터 저장 및 특정 데이터 유형을 나타냅니다. 예: 숫자. ORM 에 익숙한 사람들에게 모델 인스턴스는 데이터 객체입니다. 특정 종류의 엔티티를 나타냅니다. 엔티티를 정의하거나 나타내는 속성을 포함합니다.

2. 동일한 유형의 다른 객체와 비교할 수 있습니다. 예: 숫자는 다른 숫자보다 크거나, 작거나, 같을 수 있습니다.

Python 3.7 은 클래스를 데이터 클래스로 변환하는 데 사용되는 `dataclass` 데코레이터를 제공합니다.

```python
class Number:
    def __init__(self, val):
        self.val = val

obj = Number(2)
obj.val
```

```output
2
```

dataclass 사용 시

```python
# Dataclass: __init__ 및 __repr__ 메서드를 자동으로 생성
from dataclasses import dataclass

@dataclass  # 데코레이터가 클래스를 데이터 클래스로 변환
class Number:
    val: int  # 타입 주석 필수

obj = Number(2)  # __init__ 자동 생성됨
obj.val
```

```output
2
```

## 기본값

데이터 클래스의 필드에 기본값을 쉽게 추가할 수 있습니다.

```python
# 기본값이 있는 데이터 클래스: 기본값이 있는 필드는 필수 필드 뒤에 와야 합니다.
@dataclass
class Product:
    name: str        # 필수 필드
    count: int = 0   # 기본값이 있는 선택적 필드
    price: float = 0.0  # 기본값이 있는 선택적 필드

obj = Product("Python")  # name 만 필수, 나머지는 기본값 사용
obj.name
```

```output
Python
```

```python
obj.count
```

```output
0
```

```python
obj.price
```

```output
0.0
```

## 타입 힌트

데이터 클래스에서 데이터 유형을 정의하는 것이 필수적입니다. 그러나 데이터 유형을 지정하고 싶지 않은 경우 `typing.Any`를 사용합니다.

```python
from dataclasses import dataclass
from typing import Any

@dataclass
class WithoutExplicitTypes:
   name: Any
   value: Any = 42
```

## 관련 링크

- <router-link to="/cheatsheet/oop-basics">OOP Basics</router-link>
- <router-link to="/cheatsheet/decorators">Decorators</router-link>
- <router-link to="/blog/python-data-types">Python Data Types Blog Post</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
- <router-link to="/builtin/type">type()</router-link>
