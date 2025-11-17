---
title: 'Python issubclass() 내장 함수 - Python 치트 시트'
description: '클래스가 classinfo 의 하위 클래스 (직접, 간접 또는 가상) 인지 여부를 True 로 반환합니다. 클래스는 자기 자신의 하위 클래스로 간주됩니다. classinfo 가 클래스 객체의 튜플 (또는 재귀적으로 다른 튜플) 이거나 Union Type 인 경우, class 가 classinfo 의 항목 중 하나라도 하위 클래스이면 True 를 반환합니다. 그 외의 경우에는 TypeError 예외가 발생합니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python issubclass() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#issubclass">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   class 가 classinfo 의 서브클래스 (직접, 간접 또는 가상) 인 경우 True 를 반환합니다. 클래스는 자기 자신의 서브클래스로 간주됩니다. classinfo 는 클래스 객체의 튜플 (또는 재귀적으로 다른 그러한 튜플) 이거나 Union Type 일 수 있으며, 이 경우 class 가 classinfo 의 항목 중 하나라도 서브클래스이면 True 를 반환합니다. 다른 모든 경우에는 TypeError 예외가 발생합니다.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Python 의 `issubclass()` 함수는 주어진 클래스가 다른 클래스 또는 클래스 튜플의 서브클래스인지 확인하는 내장 함수입니다. 첫 번째 인수가 두 번째 인수의 서브클래스이면 `True`를 반환하고, 그렇지 않으면 `False`를 반환합니다. 이 함수는 객체 지향 프로그래밍에서 클래스 관계를 확인하고 상속을 기반으로 다형성 동작을 구현할 수 있게 해주므로 유용합니다.

## Examples

```python
class First:
    pass

class Second(First):
    pass

print(issubclass(Second, First))
print(issubclass(First, Second))
```

Output:

```plaintext
True
False
```

## Relevant links

- <router-link :to="'/builtin/isinstance'">`isinstance()`</router-link>
- <router-link :to="'/builtin/type'">`type()`</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP Basics</router-link>
- <router-link :to="'/builtin/object'">`object()`</router-link>
