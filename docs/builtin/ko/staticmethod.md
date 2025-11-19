---
title: 'Python staticmethod() 내장 함수 - Python 치트 시트'
description: '메서드를 정적 메서드로 변환합니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python staticmethod() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#staticmethod">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
    메서드를 정적 메서드로 변환합니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

`@staticmethod` 데코레이터는 메서드를 클래스에 속하도록 변환하지만, 클래스나 인스턴스를 첫 번째 인수로 받지 않도록 합니다. 이는 클래스와 논리적 연관성은 있지만 클래스 또는 인스턴스 상태에 의존하지 않는 유틸리티 함수를 만드는 데 유용합니다.

정적 메서드는 클래스 자체에서 또는 인스턴스에서 호출될 수 있습니다.

### 예시

정적 메서드를 정의하고 호출하는 방법은 다음과 같습니다.

```python
class MathHelper:
    @staticmethod
    def add(x, y):
        return x + y

# 클래스에서 호출
result1 = MathHelper.add(5, 3)
print(result1)

# 인스턴스에서 호출
helper = MathHelper()
result2 = helper.add(10, 20)
print(result2)
```

```output
8
30
```

정적 메서드는 클래스 (`cls`) 나 인스턴스 (`self`) 에 접근할 수 없습니다. 본질적으로 클래스 내에 네임스페이스가 지정된 일반 함수입니다.

## 관련 링크

- <router-link to="/cheatsheet/oop-basics">치트 시트: OOP 기본 사항</router-link>
- <router-link to="/cheatsheet/decorators">치트 시트: 데코레이터</router-link>
- <router-link to="/cheatsheet/functions">치트 시트: 함수</router-link>
- <router-link to="/builtin/classmethod">classmethod()</router-link>
- <router-link to="/builtin/property">property()</router-link>
