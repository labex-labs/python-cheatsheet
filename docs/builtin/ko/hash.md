---
title: 'Python 내장 함수 hash() - Python 치트 시트'
description: '객체의 해시 값 (있는 경우) 을 반환합니다. 해시 값은 정수이며, 딕셔너리 조회 시 키를 빠르게 비교하는 데 사용됩니다. 값이 같은 숫자 (예: 1 과 1.0 처럼 유형이 달라도) 는 동일한 해시 값을 가집니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python hash() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#hash">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   객체의 해시 값 (있는 경우) 을 반환합니다. 해시 값은 정수입니다. 이는 딕셔너리 조회 중 딕셔너리 키를 빠르게 비교하는 데 사용됩니다. 값이 같은 숫자 (서로 다른 유형인 1 과 1.0 의 경우와 같이) 는 동일한 해시 값을 갖습니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

`hash()` 함수는 객체의 해시 값을 나타내는 정수를 반환합니다. 이는 주로 딕셔너리에서 키를 빠르게 조회하는 데 사용됩니다.

"해시 가능 (hashable)"한 객체만 `hash()`에 전달될 수 있습니다. 객체는 수명 주기 동안 해시 값이 변경되지 않는 경우 해시 가능합니다. Python 의 모든 내장 불변 유형 (문자열, 숫자, 튜플 등) 은 해시 가능하지만, 리스트 및 딕셔너리와 같은 가변 컨테이너는 해시 가능하지 않습니다.

### 예시

```python
# 정수의 해시는 정수 자체입니다
print(hash(1))
print(hash(1.0))  # 1 과 1.0 은 같습니다

# 문자열의 해시 (출력은 다를 수 있음)
print(hash('hello'))

# 튜플의 해시 (출력은 다를 수 있음)
print(hash((1, 2, 3)))

# 리스트를 해시하려고 하면 TypeError 가 발생합니다
try:
    hash([1, 2, 3])
except TypeError as e:
    print(e)
```

```output
1
1
-1182655621190490452
529344067295497451
unhashable type: 'list'
```

## 관련 링크

- <router-link :to="'/cheatsheet/dictionaries'">딕셔너리</router-link>
- <router-link :to="'/builtin/id'">id()</router-link>
- <router-link :to="'/cheatsheet/sets'">집합 (Sets)</router-link>
- <router-link :to="'/blog/python-sets-what-why-how'">Python 집합: 무엇을, 왜, 어떻게</router-link>
- <router-link :to="'/builtin/frozenset'">frozenset()</router-link>
- <router-link :to="'/builtin/object'">object()</router-link>
