---
title: 'Python 내장 함수 object() - Python 치트 시트'
description: '새로운 특징 없는 객체를 반환합니다. object 는 모든 클래스의 기본입니다. 모든 Python 클래스 인스턴스에 공통적인 메서드를 가집니다. 이 함수는 인수를 받지 않습니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python object() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#object">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   새로운 특징 없는 객체를 반환합니다. object 는 모든 클래스의 기본입니다. 이 객체는 Python 클래스의 모든 인스턴스에 공통적인 메서드를 가집니다. 이 함수는 인수를 받지 않습니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

`object()` 함수는 새롭고 비어 있으며 특징이 없는 객체를 반환합니다. 이 객체는 Python 의 모든 클래스의 기본이 됩니다. 특별한 속성이나 메서드가 없습니다.

`object` 인스턴스를 생성할 수는 있지만, 일상적인 프로그래밍에서 자주 사용하지는 않을 것입니다. 이는 Python 의 객체 모델의 더 근본적인 구성 요소입니다.

### 예시

```python
# 새 객체 생성
o = object()

# 타입 확인
print(type(o))
```

출력:

```plaintext
<class 'object'>
```

참고: 설정할 수 있는 속성이 없습니다. `o.name = "test"`는 AttributeError 를 발생시킵니다.

## 관련 링크

- <router-link to="/cheatsheet/oop-basics">치트 시트: OOP 기본 사항</router-link>
- <router-link to="/blog/python-data-types">블로그: Python 데이터 유형</router-link>
- <router-link to="/builtin/isinstance">isinstance()</router-link>
- <router-link to="/builtin/issubclass">issubclass()</router-link>
- <router-link to="/builtin/dir">dir()</router-link>
- <router-link to="/builtin/hasattr">hasattr()</router-link>
- <router-link to="/builtin/getattr">getattr()</router-link>
- <router-link to="/builtin/delattr">delattr()</router-link>
