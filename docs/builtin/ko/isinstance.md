---
title: 'Python isinstance() 내장 함수 - Python 치트 시트'
description: 'object 인수가 classinfo 인수의 클래스이거나 해당 클래스의 (직접, 간접 또는 가상) 하위 클래스인 경우 True 를 반환합니다. object 가 주어진 유형의 객체가 아니면 함수는 항상 False 를 반환합니다. classinfo 가 유형 객체의 튜플이거나 여러 유형의 Union Type 인 경우 object 가 해당 유형 중 하나 인스턴스이면 True 를 반환합니다. classinfo 가 유형 또는 유형 튜플이 아니면 TypeError 예외가 발생합니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python isinstance() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#isinstance">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   object 인수가 classinfo 인수의 인스턴스이거나 해당 (직접, 간접 또는 가상) 서브클래스인 경우 True 를 반환합니다. object 가 주어진 유형의 객체가 아니면 함수는 항상 False 를 반환합니다. classinfo 가 유형 객체의 튜플이거나 (재귀적으로 다른 그러한 튜플) 여러 유형의 Union Type 인 경우 object 가 해당 유형 중 하나의 인스턴스이면 True 를 반환합니다. classinfo 가 유형 또는 유형 튜플 및 그러한 튜플이 아니면 TypeError 예외가 발생합니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

`isinstance()` 함수는 객체가 특정 클래스 또는 해당 서브클래스의 인스턴스인지 확인합니다. 객체가 지정된 유형인 경우 `True`를 반환하고 그렇지 않으면 `False`를 반환합니다.

유형 튜플에 대해서도 확인할 수 있습니다.

### 예시

**객체 유형 확인:**

```python
my_list = [1, 2, 3]
print(isinstance(my_list, list))
print(isinstance(my_list, tuple))
```

출력:

```plaintext
True
False
```

**여러 유형에 대해 확인:**

```python
print(isinstance("hello", (int, str, list)))
```

출력:

```plaintext
True
```

```python
isinstance(1, int)
isinstance(1, str)
```

출력:

```plaintext
True
False
```

## 관련 링크

- <router-link :to="'/builtin/issubclass'">`issubclass()`</router-link>
- <router-link :to="'/builtin/type'">`type()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP 기본 사항</router-link>
- <router-link :to="'/blog/python-data-types'">Python 데이터 유형</router-link>
- <router-link :to="'/builtin/callable'">`callable()`</router-link>
