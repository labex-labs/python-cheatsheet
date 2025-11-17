---
title: 'Python dict() 내장 함수 - Python 치트 시트'
description: '새로운 딕셔너리를 생성합니다. dict 객체는 딕셔너리 클래스입니다. 이 클래스에 대한 문서는 dict 및 Mapping Types — dict 를 참조하십시오.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python dict() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/stdtypes.html#dict">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
    새로운 딕셔너리를 생성합니다. `dict` 객체는 딕셔너리 클래스입니다.
  </base-disclaimer-content>
</base-disclaimer>

Python 의 `dict()` 생성자는 딕셔너리를 생성하는 다용도 방법입니다.

빈 딕셔너리를 생성하거나, 키워드 인수를 사용하거나, 키 - 값 쌍의 <router-link to="/builtin/iter">반복 가능한 (iterable)</router-link> 객체로부터 딕셔너리를 생성할 수 있습니다.

## 예시

**빈 딕셔너리 생성:**

```python
my_dict = dict()
print(my_dict)
```

출력:

```plaintext
{}
```

**키워드 인수를 사용하여 딕셔너리 생성:**

```python
# 키워드 인수 사용
my_dict = dict(name="John", age=30)
print(my_dict)
```

출력:

```plaintext
{'name': 'John', 'age': 30}
```

**반복 가능한 객체로부터 딕셔너리 생성:**

```python
my_list = [('name', 'Jane'), ('age', 25)]
my_dict = dict(my_list)
print(my_dict)
```

출력:

```plaintext
{'name': 'Jane', 'age': 25}
```

빈 딕셔너리 생성:

```python
a = dict()
type(a)
```

출력:

```plaintext
<class 'dict'>
```

## 관련 링크

- <router-link :to="'/builtin/iter'">`iter()`</router-link>
- <router-link :to="'/cheatsheet/dictionaries'">딕셔너리</router-link>
- <router-link :to="'/blog/python-data-types'">Python 데이터 타입</router-link>
- <router-link :to="'/builtin/len'">`len()`</router-link>
- <router-link :to="'/builtin/list'">`list()`</router-link>
- <router-link :to="'/builtin/tuple'">`tuple()`</router-link>
