---
title: 'Python 내장 함수 id() - 파이썬 치트 시트'
description: "객체의 '식별자 (identity)'를 반환합니다. 이는 객체의 수명 주기 동안 고유하고 일정한 정수입니다. 수명이 겹치지 않는 두 객체는 동일한 id() 값을 가질 수 있습니다."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python id() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#id">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   객체의 "식별자 (identity)"를 반환합니다. 이는 객체의 수명 동안 고유하며 불변인 정수입니다. 수명이 겹치지 않는 두 객체는 동일한 id() 값을 가질 수 있습니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

`id()` 함수는 메모리에서 객체를 식별하는 고유한 정수를 반환합니다. 이 ID 는 객체의 수명 동안 고유함이 보장됩니다. 이는 본질적으로 객체의 메모리 주소입니다.

### 예시

```python
x = 10
y = 10
z = 20

print(id(x))
print(id(y))  # Python 이 작은 정수를 캐시하므로 id(x) 와 동일
print(id(z))
print(id(1))
print(id('1'))
print(id([1, 2]))
```

```output
4331368528
4331368528
4331368560
4331368496
4331368560
4331368560
```

## 관련 링크

- <router-link :to="'/builtin/hash'">hash()</router-link>
- <router-link :to="'/builtin/object'">object()</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP 기본 사항</router-link>
- <router-link :to="'/blog/python-data-types'">Python 데이터 유형</router-link>
- <router-link :to="'/builtin/type'">type()</router-link>
