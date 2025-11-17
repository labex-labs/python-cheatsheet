---
title: 'Python setattr() 내장 함수 - Python 치트 시트'
description: "getattr() 의 대응 함수입니다. 인수는 객체, 문자열, 임의의 값입니다. 문자열은 기존 속성 또는 새 속성의 이름을 지정할 수 있습니다. 객체가 허용하는 경우 해당 값으로 속성을 할당합니다. 예를 들어, setattr(x, 'foobar', 123) 은 x.foobar = 123 과 동일합니다."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python setattr() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#setattr">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   이것은 <router-link to="/builtin/getattr">getattr()</router-link>의 대응 함수입니다. 인수는 객체, 문자열, 임의의 값입니다. 문자열은 기존 속성의 이름이거나 새 속성의 이름일 수 있습니다. 객체가 허용하는 경우 함수는 해당 속성에 값을 할당합니다. 예를 들어, setattr(x, 'foobar', 123) 은 x.foobar = 123 과 동일합니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

`setattr()` 함수는 객체의 속성 값을 설정할 수 있게 해주는 파이썬 내장 함수입니다. 이 함수는 세 가지 인수를 받습니다: 객체, 속성의 이름 (문자열 형태), 그리고 해당 속성에 할당하려는 값입니다.

이는 런타임에 속성 이름이 동적으로 결정될 때 특히 유용합니다. 속성 이름을 미리 알아야 하는 점 표기법 (`object.attribute = value`) 대신, `setattr()`을 사용하면 변수를 활용할 수 있습니다.

### 예시

`setattr()`을 사용하여 속성을 추가하거나 수정하는 방법은 다음과 같습니다:

```python
class Person:
    name = "John"

p = Person()

# 'age' 속성을 30 으로 설정
setattr(p, 'age', 30)

print(p.age)

# 'name' 속성 변경
setattr(p, 'name', 'Jane')
print(p.name)
```

출력:

```plaintext
30
Jane
```

## 관련 링크

- <router-link to="/cheatsheet/oop-basics">치트 시트: OOP 기본</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/dir">dir()</router-link>
- <router-link to="/builtin/getattr">getattr()</router-link>
- <router-link to="/builtin/hasattr">hasattr()</router-link>
- <router-link to="/builtin/delattr">delattr()</router-link>
