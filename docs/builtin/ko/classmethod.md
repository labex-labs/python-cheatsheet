---
title: 'Python classmethod() 내장 함수 - Python 치트 시트'
description: '메서드를 클래스 메서드로 변환합니다. 클래스 메서드는 인스턴스 메서드가 인스턴스를 암묵적인 첫 번째 인수로 받는 것과 같이 클래스를 암묵적인 첫 번째 인수로 받습니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python classmethod() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#classmethod">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   메서드를 클래스 메서드로 변환합니다. 클래스 메서드는 인스턴스 메서드가 인스턴스를 암시적인 첫 번째 인수로 받는 것과 마찬가지로 클래스 자체를 암시적인 첫 번째 인수로 받습니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

`classmethod`는 클래스에 바인딩되며 클래스의 인스턴스에는 바인딩되지 않는 메서드입니다. 이 메서드는 관례적으로 `cls`라고 명명되는 클래스 자체를 첫 번째 인수로 받습니다. 이는 인스턴스를 첫 번째 인수로 (`self`) 받는 일반적인 인스턴스 메서드와 대조됩니다.

이 메서드는 특정 방식으로 클래스의 인스턴스를 생성하는 팩토리 메서드로 자주 사용됩니다.

## 예시

다음은 딕셔너리와 같은 다른 데이터 형식에서 클래스를 인스턴스화할 수 있는 팩토리 메서드를 만드는 일반적인 사용 사례입니다.

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    @classmethod
    def from_dict(cls, data):
        # 이것은 딕셔너리로부터 Person 인스턴스를 생성하는 팩토리 메서드입니다
        return cls(data['name'], data['age'])

    def display(self):
        print(f"Name: {self.name}, Age: {self.age}")

# 새 사람을 위한 데이터
person_data = {'name': 'John', 'age': 30}

# 클래스 메서드를 사용하여 Person 인스턴스 생성
p = Person.from_dict(person_data)

p.display()
```

출력:

```plaintext
Name: John, Age: 30
```

## 관련 링크

- <router-link to="/cheatsheet/oop-basics">치트 시트: OOP 기본 사항</router-link>
- <router-link to="/cheatsheet/decorators">치트 시트: 데코레이터</router-link>
- <router-link to="/cheatsheet/functions">치트 시트: 함수</router-link>
- <router-link to="/builtin/staticmethod">staticmethod()</router-link>
- <router-link to="/builtin/property">property()</router-link>
- <router-link to="/builtin/object">object()</router-link>
