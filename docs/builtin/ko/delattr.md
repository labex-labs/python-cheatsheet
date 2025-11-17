---
title: 'Python delattr() 내장 함수 - Python 치트 시트'
description: "setattr() 와 관련된 함수입니다. 인수는 객체와 문자열이며, 문자열은 객체의 속성 이름이어야 합니다. 이 함수는 객체가 허용하는 경우 해당 속성을 삭제합니다. 예를 들어, delattr(x, 'foobar') 는 del x.foobar 와 동일합니다."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python delattr() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#delattr">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   이것은 `setattr()`의 상대 함수입니다. 인수는 객체와 문자열입니다. 문자열은 객체의 속성 중 하나의 이름이어야 합니다. 객체가 허용하는 경우 해당 속성을 삭제합니다. 예를 들어, `delattr(x, 'foobar')`는 `del x.foobar`와 동일합니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

Python 의 `delattr()` 함수는 객체에서 속성을 삭제하는 데 사용됩니다. 이는 `setattr()` 및 <router-link to="/builtin/getattr">`getattr()`</router-link>의 대응 함수입니다.

## 구문

```python
delattr(object, name)
```

- **object**: 속성을 삭제해야 하는 객체입니다.
- **name**: 삭제할 속성의 이름이며, 문자열로 제공됩니다.

## 예시

### 객체에서 속성 삭제하기

```python
class Person:
    name = "John"
    age = 30

person = Person()
print(person.__dict__)
delattr(person, "age")
print(person.__dict__)
```

출력:

```plaintext
{'name': 'John', 'age': 30}
{'name': 'John'}
```

### 존재하지 않는 속성 삭제하기

```python
class Person:
    name = "John"

person = Person()
try:
    delattr(person, "age")
except AttributeError as e:
    print(f"Error: {e}")
```

출력:

```plaintext
Error: age
```

## 관련 링크

- <router-link :to="'/builtin/setattr'">`setattr()`</router-link>
- <router-link :to="'/builtin/getattr'">`getattr()`</router-link>
- <router-link :to="'/builtin/hasattr'">`hasattr()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP 기본 사항</router-link>
