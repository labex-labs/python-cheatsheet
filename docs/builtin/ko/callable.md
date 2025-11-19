---
title: 'Python 내장 함수 callable() - 파이썬 치트 시트'
description: '객체 인수가 호출 가능한지 여부를 나타내는 True 를 반환하고, 그렇지 않으면 False 를 반환합니다. True 를 반환하더라도 호출 시 오류가 발생할 수 있지만, False 인 경우 객체 호출은 절대 성공하지 않습니다. 클래스는 호출 가능하며 (클래스 호출은 새 인스턴스를 반환), 인스턴스는 해당 클래스에 __call__() 메서드가 있는 경우 호출 가능합니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python callable() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#callable">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
    object 인수가 호출 가능한지 여부를 True 로 반환하고, 그렇지 않으면 False 를 반환합니다. 이것이 True 를 반환하더라도 호출이 실패할 수 있지만, False 인 경우 object 를 호출하는 것은 절대로 성공하지 않습니다. 클래스는 호출 가능하다는 점에 유의하십시오 (클래스를 호출하면 새 인스턴스가 반환됨). 인스턴스는 클래스에 __call__() 메서드가 있는 경우 호출 가능합니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

Python 에서 `callable()` 함수는 객체가 함수처럼 호출될 수 있는지, 즉 호출 가능한지 여부를 확인하는 데 사용할 수 있는 내장 함수입니다.

이 함수는 전달된 객체가 호출 가능하면 `True`를 반환하고 그렇지 않으면 `False`를 반환합니다. 예를 들어, 함수, 메서드, 클래스, 람다 함수 및 제너레이터는 모두 Python 에서 호출 가능한 객체입니다.

`callable()` 함수를 사용하는 방법의 예는 다음과 같습니다.

```python
def my_function():
    pass

class MyClass:
    def __call__(self):
        pass

x = 5
y = my_function
z = MyClass()
a = lambda: None

print(callable(x))
print(callable(y))
print(callable(z))
print(callable(a))
```

```output
False
True
True
True
```

위 예시에서 `my_function`은 함수이므로 호출 가능하고, `MyClass`는 `__call__` 메서드를 가지고 있으므로 클래스도 호출 가능하며, `z`는 `__call__` 메서드를 가지고 있으므로 `MyClass`의 인스턴스도 호출 가능하고, `a`는 호출 가능한 람다 함수입니다.

`callable()` 함수는 콜백 또는 기타 유형의 함수 포인터와 함께 작업하는 경우와 같이 객체를 함수로 호출할 수 있는지 확인해야 하는 상황에서 유용할 수 있습니다.

## 관련 링크

- <router-link :to="'/builtin/hasattr'">hasattr()</router-link>
- <router-link :to="'/cheatsheet/functions'">함수</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP 기본 사항</router-link>
- <router-link :to="'/builtin/getattr'">getattr()</router-link>
- <router-link :to="'/builtin/isinstance'">isinstance()</router-link>
