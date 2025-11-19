---
title: 'Python enumerate() 내장 함수 - Python 치트 시트'
description: 'enumerate 객체를 반환합니다. iterable 은 시퀀스, 이터레이터 또는 반복을 지원하는 다른 객체여야 합니다. enumerate() 가 반환하는 이터레이터의 __next__() 메서드는 (기본값 0 인 start 부터의) 카운트와 iterable 을 반복하여 얻은 값을 포함하는 튜플을 반환합니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python enumerate() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#enumerate">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   enumerate 객체를 반환합니다. iterable 은 시퀀스, 이터레이터 또는 반복을 지원하는 다른 객체여야 합니다. enumerate() 가 반환하는 이터레이터의 __next__() 메서드는 (기본값은 0 인) count 와 iterable 을 반복하여 얻은 값을 포함하는 튜플을 반환합니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

Python 의 `enumerate()` 함수는 반복 가능한 객체에 카운터를 추가하는 내장 함수입니다. 이 함수는 열거 객체를 반환하며, 이 객체는 카운트 (시작 인덱스에서 시작하며 기본값은 0) 와 해당 반복 가능한 객체의 값으로 구성된 쌍을 산출합니다. 이는 시퀀스를 반복하는 동안 인덱스와 항목 모두가 필요할 때 특히 유용합니다.

## 예시

```python
l = enumerate([1, 2, 3, 4, 5])
print(l)
print(l.__next__())
print(l.__next__())
print(l.__next__())
print(l.__next__())
print(l.__next__())
```

```output
<enumerate object at 0x7fcac409cc40>
(0, 1)
(1, 2)
(2, 3)
(3, 4)
(4, 5)
```

`enumerate`는 일반적으로 `for` 루프에서 항목의 인덱스를 얻는 데 사용됩니다.

```python
for i, item in enumerate([1, 2, 3, 4, 5]):
    print(f"Index: {i}, Item: {item}")
```

```output
Index: 0, Item: 1
Index: 1, Item: 2
Index: 2, Item: 3
Index: 3, Item: 4
Index: 4, Item: 5
```

## 관련 링크

- <router-link :to="'/cheatsheet/control-flow'">제어 흐름</router-link>
- <router-link :to="'/builtin/iter'">iter()</router-link>
- <router-link :to="'/builtin/next'">next()</router-link>
- <router-link :to="'/cheatsheet/lists-and-tuples'">리스트와 튜플</router-link>
- <router-link :to="'/builtin/zip'">zip()</router-link>
- <router-link :to="'/builtin/range'">range()</router-link>
