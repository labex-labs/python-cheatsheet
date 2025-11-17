---
title: 'Python zip() 내장 함수 - 파이썬 치트 시트'
description: '여러 이터러블을 병렬로 반복하며, 각 이터러블에서 항목을 가져와 튜플로 생성합니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python zip() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#zip">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
    여러 이터러블 (iterable) 을 병렬로 반복하여 각 이터러블에서 하나의 항목을 가져와 튜플을 생성합니다.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Python 의 `zip()` 함수는 두 개 이상의 이터러블 (리스트, 튜플 또는 문자열 등) 을 인수로 받아 단일 튜플 이터레이터로 묶어주는 내장 함수입니다. 각 튜플에는 모든 입력 이터러블에서 동일한 위치의 요소가 포함됩니다.

## Examples

```python
furniture = ['table', 'chair', 'rack', 'shelf']
price = [100, 50, 80, 40]

for item, amount in zip(furniture, price):
    print(f'The {item} costs ${amount}')
```

Output:

```plaintext
The table costs $100
The chair costs $50
The rack costs $80
The shelf costs $40
```

## Other Use Cases

Python 의 zip 함수는 여러 이터러블을 튜플로 병합합니다.

```python
# 세 리스트 결합
list1 = [1, 2, 3]
list2 = ['a', 'b', 'c']
list3 = [True, False, True]

zipped = zip(list1, list2, list3)
print(list(zipped))
```

Output:

```plaintext
[(1, 'a', True), (2, 'b', False), (3, 'c', True)]
```

### Unzipping

```python
# 묶인 (zipped) 객체 풀기 (Unzipping)
zipped = [(1, 'a'), (2, 'b'), (3, 'c')]
list1, list2 = zip(*zipped)
print(list1)
print(list2)
```

Output:

```plaintext
(1, 2, 3)
('a', 'b', 'c')
```

## More Examples

### 길이가 다른 이터러블로 zip 사용하기

zip 은 가장 짧은 이터러블이 소진되면 튜플 생성을 중단합니다.

```python
numbers = [1, 2, 3]
letters = ['a', 'b']

for num, letter in zip(numbers, letters):
    print(f'{num} -> {letter}')
```

Output:

```plaintext
1 -> a
2 -> b
```

### 딕셔너리와 함께 zip 사용하기

두 리스트의 키와 값을 결합하여 딕셔너리를 만드는 데 zip 을 사용할 수 있습니다.

```python
keys = ['name', 'age', 'city']
values = ['Alice', 25, 'New York']

my_dict = dict(zip(keys, values))
print(my_dict)
```

Output:

```plaintext
{'name': 'Alice', 'age': 25, 'city': 'New York'}
```

### 리스트 컴프리헨션과 함께 zip 사용하기

더 간결한 코드를 위해 리스트 컴프리헨션에서 zip 을 사용할 수 있습니다.

```python
list1 = [1, 2, 3]
list2 = [4, 5, 6]

summed = [x + y for x, y in zip(list1, list2)]
print(summed)
```

Output:

```plaintext
[5, 7, 9]
```

## Relevant links

- <router-link to="/cheatsheet/lists-and-tuples/">리스트와 튜플</router-link>
- <router-link to="/cheatsheet/comprehensions/">컴프리헨션</router-link>
- <router-link to="/builtin/slice/">slice()</router-link>
- <router-link to="/builtin/sorted/">sorted()</router-link>
- <router-link to="/builtin/sum/">sum()</router-link>
- <router-link to="/builtin/map/">map()</router-link>
- <router-link to="/builtin/filter/">filter()</router-link>
- <router-link to="/builtin/enumerate/">enumerate()</router-link>
- <router-link to="/modules/itertools-module/">Itertools 모듈</router-link>
