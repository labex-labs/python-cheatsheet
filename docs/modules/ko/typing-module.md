---
title: Python Typing 모듈 - Python 치트시트
description: `typing` 모듈은 함수 인자, 반환값, 데이터 구조에 대한 타입 힌트를 제공합니다.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Typing 모듈
</base-title>

`typing` 모듈은 함수 인자, 반환값, 데이터 구조에 대한 타입 힌트를 제공합니다.

```python
from typing import TypedDict
```

타입 힌트는 Python이 프로그램을 실행하는 방식을 바꾸지 않습니다. 대신 에디터, 린터, 독자가 코드가 어떤 값을 기대하는지 이해하는 데 도움을 줍니다.

## 함수 시그니처에 주석 달기

```python
def greet(name: str) -> str:
    return f'Hello {name}'

print(greet('Ada'))
```

```output
Hello Ada
```

`name: str` 주석은 함수가 문자열을 기대한다는 뜻입니다. `-> str` 주석은 문자열을 반환해야 한다는 뜻입니다.

## 자주 쓰는 컬렉션 타입

타입 힌트로 데이터의 형태를 설명할 수 있습니다.

```python
def average(values: list[float]) -> float:
    return sum(values) / len(values)

print(average([1.0, 2.0, 3.0]))
```

```output
2.0
```

`list[str]` 형식의 주석은 Python 3.9 이상이 필요합니다.

## 선택적 값

값이 없을 수도 있을 때는 `| None`을 사용합니다.

```python
def find_user(user_id: int) -> str | None:
    if user_id == 1:
        return 'Ada'
    return None

print(find_user(1))
print(find_user(2))
```

```output
Ada
None
```

`X | Y` 유니온 문법은 Python 3.10 이상이 필요합니다.

## TypedDict

`TypedDict`는 고정된 키를 가진 딕셔너리 같은 객체를 설명합니다.

```python
from typing import TypedDict

class User(TypedDict):
    name: str
    active: bool

user: User = {'name': 'Ada', 'active': True}
print(user['name'])
```

```output
Ada
```

## 타입 별칭

타입 별칭은 더 복잡한 타입에 읽기 쉬운 이름을 붙입니다.

```python
Coordinates = tuple[float, float]

def show_location(point: Coordinates) -> str:
    return f'{point[0]}, {point[1]}'

print(show_location((12.5, 35.8)))
```

```output
12.5, 35.8
```

## 관련 링크

- <router-link to="/cheatsheet/functions">치트시트: 함수</router-link>
- <router-link to="/cheatsheet/dictionaries">치트시트: 딕셔너리</router-link>
- <router-link to="/cheatsheet/dataclasses">치트시트: 데이터 클래스</router-link>
