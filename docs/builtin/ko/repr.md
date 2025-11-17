---
title: 'Python 내장 함수 repr() - Python 치트 시트'
description: '객체의 출력 가능한 표현을 포함하는 문자열을 반환합니다. 많은 유형의 경우, 이 함수는 eval() 에 전달될 때 동일한 값을 가진 객체를 생성하는 문자열을 반환하려고 시도합니다. 그렇지 않은 경우, 표현은 객체 유형의 이름과 종종 객체의 이름 및 주소를 포함하는 추가 정보를 포함하는 꺾쇠 괄호로 묶인 문자열입니다. 클래스는 __repr__() 메서드를 정의하여 인스턴스에 대해 이 함수가 반환하는 것을 제어할 수 있습니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python repr() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#repr">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   객체의 출력 가능한 표현을 포함하는 문자열을 반환합니다. 많은 유형의 경우, 이 함수는 eval() 에 전달될 때 동일한 값을 가진 객체를 생성하는 문자열을 반환하려고 시도합니다. 그렇지 않으면 표현은 객체 유형의 이름과 종종 객체의 이름 및 주소를 포함하는 추가 정보를 포함하는 꺾쇠 괄호로 묶인 문자열입니다. 클래스는 __repr__() 메서드를 정의하여 인스턴스에 대해 이 함수가 반환하는 것을 제어할 수 있습니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

`repr()` 함수는 객체의 출력 가능한 표현을 포함하는 문자열을 반환합니다. `repr()`의 목표는 모호하지 않은 것입니다. 많은 유형의 경우, `repr()`은 <router-link to="/builtin/eval">eval()</router-link>에 의해 실행되어 동일한 객체를 생성할 수 있는 문자열을 반환합니다.

이는 사람이 읽을 수 있도록 의도된 <router-link to="/builtin/str">str()</router-link>과는 다릅니다.

### 예시

```python
import datetime

# 문자열의 경우, repr() 은 따옴표를 추가합니다
print(repr("hello"))

# datetime 객체의 경우, 모호하지 않습니다
now = datetime.datetime.now()
print(repr(now))

# 자신의 클래스에 대해 __repr__을 정의할 수 있습니다
class Person:
    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return f"Person(name='{self.name}')"

p = Person("John")
print(repr(p))
```

출력:

```plaintext
'hello'
datetime.datetime(2023, 10, 27, 10, 0, 0, 123456)
Person(name='John')
```

## 관련 링크

- <router-link to="/cheatsheet/oop-basics">치트 시트: OOP 기본 사항</router-link>
- <router-link to="/cheatsheet/debugging">치트 시트: 디버깅</router-link>
- <router-link to="/cheatsheet/string-formatting">치트 시트: 문자열 포매팅</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/ascii">ascii()</router-link>
- <router-link to="/builtin/eval">eval()</router-link>
- <router-link to="/builtin/format">format()</router-link>
