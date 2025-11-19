---
title: 'Python super() 내장 함수 - Python 치트 시트'
description: '타입의 부모 또는 형제 클래스에 메서드 호출을 위임하는 프록시 객체를 반환합니다. 이는 클래스에서 재정의된 상속된 메서드에 접근할 때 유용합니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python super() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#super">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
    유형의 부모 또는 형제 클래스로 메서드 호출을 위임하는 프록시 객체를 반환합니다. 이는 재정의된 상속된 메서드에 액세스하는 데 유용합니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

`super()` 함수는 부모 클래스의 메서드를 호출하는 데 사용됩니다. 이는 상속에서 부모의 메서드를 완전히 재정의하지 않고 기능을 확장하려는 경우 특히 유용합니다.

### 예시

```python
class Parent:
    def greet(self):
        print("Hello from Parent")

class Child(Parent):
    def greet(self):
        # Call the parent's greet method
        super().greet()
        print("Hello from Child")

c = Child()
c.greet()
```

```output
Hello from Parent
Hello from Child
```

## 관련 링크

- <router-link to="/cheatsheet/oop-basics">치트시트: OOP 기본 사항</router-link>
- <router-link to="/cheatsheet/decorators">치트시트: 데코레이터</router-link>
- <router-link to="/cheatsheet/functions">치트시트: 함수</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/isinstance">isinstance()</router-link>
- <router-link to="/builtin/issubclass">issubclass()</router-link>
- <router-link to="/builtin/classmethod">classmethod()</router-link>
- <router-link to="/builtin/staticmethod">staticmethod()</router-link>
- <router-link to="/builtin/property">property()</router-link>
