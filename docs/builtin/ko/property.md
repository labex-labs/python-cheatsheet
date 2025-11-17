---
title: 'Python 내장 함수 property() - Python 치트 시트'
description: '속성 (property) 속성을 반환합니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python property() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#property">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   속성 (property) 속성을 반환합니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

`property()` 함수는 속성 (property) 속성을 만드는 데 사용됩니다. 속성 속성은 getter, setter 및 delete 메서드를 갖는 특별한 종류의 속성입니다. 이를 통해 속성 값의 가져오기, 설정 또는 삭제에 로직을 추가할 수 있습니다.

`property()`를 사용하는 더 편리한 방법인 `@property` 데코레이터를 사용하는 것이 더 일반적입니다.

### 예시

다음은 `property()`를 사용하여 읽기 전용 속성을 만드는 예시입니다.

```python
class Person:
    def __init__(self, name):
        self._name = name

    def get_name(self):
        print("Getting name")
        return self._name

    # 속성 생성
    name = property(get_name)

p = Person("John")
print(p.name)  # 이것은 get_name() 을 호출합니다
```

출력:

```plaintext
Getting name
John
```

참고: `p.name = "Jane"`은 setter 가 없으므로 AttributeError 가 발생합니다.

다음은 `@property` 데코레이터를 사용하여 이 작업을 수행하는 더 일반적인 방법입니다.

```python
class Person:
    def __init__(self, name):
        self._name = name

    @property
    def name(self):
        print("Getting name")
        return self._name

p = Person("John")
print(p.name)
```

출력:

```plaintext
Getting name
John
```

## 관련 링크

- <router-link to="/cheatsheet/oop-basics">치트시트: OOP 기본 사항</router-link>
- <router-link to="/cheatsheet/decorators">치트시트: 데코레이터</router-link>
- <router-link to="/cheatsheet/dataclasses">치트시트: 데이터클래스</router-link>
- <router-link to="/builtin/getattr">getattr()</router-link>
- <router-link to="/builtin/setattr">setattr()</router-link>
- <router-link to="/builtin/delattr">delattr()</router-link>
