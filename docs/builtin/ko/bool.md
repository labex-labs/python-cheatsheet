---
title: 'Python bool() 내장 함수 - Python 치트 시트'
description: '불리언 값 (True 또는 False) 을 반환합니다. x 는 표준 진리 테스트 절차를 사용하여 변환됩니다. x 가 거짓이거나 생략되면 False 를 반환하고, 그렇지 않으면 True 를 반환합니다. bool 클래스는 int 의 하위 클래스이며 더 이상 하위 클래스화할 수 없습니다. 유일한 인스턴스는 False 와 True 입니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python bool() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#bool">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
    Boolean 값인 True 또는 False 를 반환합니다. x 는 표준 진실성 테스트 절차를 사용하여 변환됩니다. x 가 거짓이거나 생략되면 False 를 반환하고, 그렇지 않으면 True 를 반환합니다. bool 클래스는 int 의 하위 클래스입니다. 더 이상 하위 클래스로 만들 수 없습니다. 유일한 인스턴스는 False 와 True 입니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

Python 의 `bool()` 함수는 값을 부울 (`True` 또는 `False`) 로 변환하는 내장 함수입니다. 이 함수는 표준 진실성 테스트 절차를 따르며, 여기서 `0`, `None`, 빈 컬렉션과 같은 값은 `False`로 간주되고 대부분의 다른 값은 `True`로 간주됩니다. 이는 조건문으로 프로그램 흐름을 제어하는 데 기본이 됩니다.

## 예시

### Falsy 값 (거짓으로 평가되는 값)

다음 값들은 `False`로 간주됩니다:

```python
bool(False)
bool(None)
bool(0)
bool(0.0)
bool('')      # 빈 문자열
bool([])      # 빈 리스트
bool({})      # 빈 딕셔너리
bool(set())   # 빈 세트
```

출력:

```plaintext
False
False
False
False
False
False
False
False
```

### Truthy 값 (참으로 평가되는 값)

대부분의 다른 값들은 `True`로 간주됩니다:

```python
bool(True)
bool(1)
bool(-1)
bool('hello')
bool([1, 2])
bool({'a': 1})
```

출력:

```plaintext
True
True
True
True
True
True
```

## 관련 링크

- <router-link to="/cheatsheet/control-flow">치트 시트: 제어 흐름</router-link>
- <router-link to="/blog/python-data-types">블로그: Python 데이터 타입</router-link>
- <router-link to="/builtin/all">all()</router-link>
- <router-link to="/builtin/any">any()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/str">str()</router-link>
