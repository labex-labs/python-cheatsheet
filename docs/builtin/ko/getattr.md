---
title: 'Python getattr() 내장 함수 - Python 치트 시트'
description: '객체의 명명된 속성 값을 반환합니다. name 은 문자열이어야 합니다. 문자열이 객체의 속성 이름인 경우 결과는 해당 속성의 값입니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python getattr() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#getattr">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   객체의 이름이 지정된 속성 값을 반환합니다. name 은 문자열이어야 합니다. 문자열이 객체의 속성 중 하나의 이름인 경우 결과는 해당 속성의 값입니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

Python 의 `getattr()` 함수는 문자열로 제공되는 이름을 통해 객체의 속성에 접근할 수 있게 해주는 내장 함수입니다. 이는 런타임까지 이름을 알 수 없는 속성을 검색할 수 있게 해주므로 동적 프로그래밍에 강력한 기능입니다. 또한 속성이 존재하지 않을 경우 반환할 기본값을 제공할 수 있어 오류를 방지하는 데 도움이 됩니다.

## 구문

```python
getattr(object, name)
```

또는

```python
getattr(object, name, default)
```

-`object`: 속성에 접근하려는 객체입니다.

-`name`: 검색하려는 속성의 이름입니다.

-`default`: (선택 사항) 속성을 찾을 수 없을 때 반환될 값입니다. 제공되지 않으면 `None`이 반환됩니다.

## 예시

```python
class Example:
    attribute = "Hello, World!"

# 클래스 인스턴스 생성
obj = Example()

# getattr 을 사용하여 속성에 접근
value = getattr(obj, 'attribute', 'Nothing found')

print(value)
```

```output
Hello, World!
```

참고: 'attribute'가 존재하지 않으면 'Nothing found'가 출력됩니다.

## 관련 링크

- <router-link :to="'/builtin/hasattr'">`hasattr()`</router-link>
- <router-link :to="'/builtin/delattr'">`delattr()`</router-link>
- <router-link :to="'/builtin/setattr'">`setattr()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP 기본 사항</router-link>
- <router-link :to="'/builtin/dir'">`dir()`</router-link>
