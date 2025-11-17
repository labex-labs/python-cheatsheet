---
title: 'Python hasattr() 내장 함수 - Python 치트 시트'
description: '인수는 객체와 문자열입니다. 문자열이 객체의 속성 이름이면 True 를 반환하고, 그렇지 않으면 False 를 반환합니다. (이는 getattr(object, name) 을 호출하고 AttributeError 가 발생하는지 확인하여 구현됩니다.)'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python hasattr() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#hasattr">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   인수는 객체와 문자열입니다. 문자열이 객체의 속성 이름이면 결과는 True 이고, 그렇지 않으면 False 입니다. (이는 <router-link to="/builtin/getattr">getattr(object, name)</router-link>를 호출하고 AttributeError 가 발생하는지 여부를 확인하여 구현됩니다.)
  </base-disclaimer-content>
</base-disclaimer>

## 소개

`hasattr()` 함수는 객체가 주어진 속성을 가지고 있는지 확인합니다. 객체와 속성 이름 (문자열 형태) 을 인수로 받아 속성이 존재하면 `True`를 반환하고, 그렇지 않으면 `False`를 반환합니다.

### 예시

```python
class Person:
    name = "John"
    age = 30

p = Person()

print(hasattr(p, 'name'))
print(hasattr(p, 'age'))
print(hasattr(p, 'email'))
```

출력:

```plaintext
True
True
False
```

## 관련 링크

- <router-link :to="'/builtin/getattr'">`getattr()`</router-link>
- <router-link :to="'/builtin/setattr'">`setattr()`</router-link>
- <router-link :to="'/builtin/delattr'">`delattr()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP 기본 사항</router-link>
- <router-link :to="'/builtin/dir'">`dir()`</router-link>
