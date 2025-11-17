---
title: 'Python 내장 함수 vars() - Python 치트 시트'
description: '모듈, 클래스, 인스턴스 또는 __dict__ 속성을 가진 모든 객체의 __dict__ 속성을 반환합니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python vars() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#vars">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
    모듈, 클래스, 인스턴스 또는 __dict__ 속성을 가진 다른 모든 객체의 __dict__ 속성을 반환합니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

`vars()` 함수는 객체의 `__dict__` 속성을 반환합니다. 이 딕셔너리에는 객체의 쓰기 가능한 속성들이 포함되어 있습니다. 이는 객체의 모든 속성을 한 번에 확인하는 편리한 방법입니다.

인수 없이 호출되면 `vars()`는 `locals()`처럼 작동하여 로컬 심볼 테이블의 딕셔너리를 반환합니다.

### 예시

**객체의 속성 가져오기:**

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

my_person = Person("Dwight", 35)
print(vars(my_person))
```

출력:

```plaintext
{'name': 'Dwight', 'age': 35}
```

**인수 없이 `vars()` 사용하기:**

```python
def my_function():
    x = 10
    print(vars())

my_function()
```

출력:

```plaintext
{'x': 10}
```

## 관련 링크

- <router-link to="/cheatsheet/oop-basics">치트 시트: OOP 기본 사항</router-link>
- <router-link to="/cheatsheet/debugging">치트 시트: 디버깅</router-link>
- <router-link to="/cheatsheet/dictionaries">치트 시트: 딕셔너리</router-link>
- <router-link to="/builtin/dir">dir()</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/globals">globals()</router-link>
- <router-link to="/builtin/locals">locals()</router-link>
