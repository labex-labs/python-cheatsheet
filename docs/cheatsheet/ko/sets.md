---
title: '파이썬 세트 - 파이썬 치트 시트'
description: '파이썬은 데이터를 구성하는 데 도움이 되는 여러 내장 데이터 유형 (리스트, 딕셔너리, 튜플, 세트 포함) 을 갖추고 있습니다.'
labUrl: 'https://labex.io/ko/labs/python-python-sets-633665?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 집합 (Sets)
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Python 은 데이터를 구성하는 데 도움이 되는 여러 내장 데이터 유형을 갖추고 있습니다. 이러한 구조에는 리스트, 딕셔너리, 튜플 및 **집합 (sets)**이 포함됩니다.

<base-disclaimer>
  <base-disclaimer-title>
    Python 3 <a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#sets">문서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
    집합은 중복 요소가 없는 순서가 없는 컬렉션입니다. 기본 용도는 멤버십 테스트 및 중복 항목 제거입니다.
  </base-disclaimer-content>
</base-disclaimer>

더 깊이 있는 참조를 위해 <router-link to="/blog/python-sets-what-why-how">Python 집합: 무엇을, 왜, 어떻게</router-link>를 읽어보세요.

## 집합 초기화

집합을 생성하는 두 가지 방법이 있습니다: 중괄호 `{}` 사용과 내장 함수 `set()` 사용

<base-warning>
  <base-warning-title>
    빈 집합
  </base-warning-title>
  <base-warning-content>
    집합을 생성할 때 빈 중괄호 <code>{}</code>를 사용하지 않도록 주의하세요. 그렇지 않으면 대신 빈 딕셔너리가 생성됩니다.
  </base-warning-content>
</base-warning>

```python
# 중괄호 또는 set() 함수를 사용하여 집합 생성
s = {1, 2, 3}  # 중괄호 사용
s = set([1, 2, 3])  # set() 생성자 사용

# 경고: 빈 {}는 집합이 아닌 딕셔너리를 생성합니다
s = {}  # 이것은 집합 대신 딕셔너리를 생성합니다
type(s)  # <class 'dict'> 반환
```

출력:

```plaintext
<class 'dict'>
```

## 고유 요소의 순서 없는 컬렉션

집합은 모든 중복 값을 자동으로 제거합니다.

```python
# 집합은 중복을 자동으로 제거합니다
s = {1, 2, 3, 2, 3, 4}  # 중복 항목 제거됨
s  # {1, 2, 3, 4} 반환
```

출력:

```plaintext
{1, 2, 3, 4}
```

그리고 순서가 없는 데이터 유형이므로 인덱싱할 수 없습니다.

```python
s = {1, 2, 3}
s[0]
```

출력:

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'set' object does not support indexing
```

## 집합 add 및 update

`add()` 메서드를 사용하여 집합에 단일 요소를 추가할 수 있습니다.

```python
# add() 메서드: 집합에 단일 요소 추가
s = {1, 2, 3}
s.add(4)  # 요소 4 추가
s
```

출력:

```plaintext
{1, 2, 3, 4}
```

그리고 `update()`를 사용하면 여러 요소를 추가할 수 있습니다:

```python
# update() 메서드: 반복 가능한 (iterable) 객체에서 여러 요소 추가
s = {1, 2, 3}
s.update([2, 3, 4, 5, 6])  # 여러 요소 추가 (중복은 무시됨)
s
```

출력:

```plaintext
{1, 2, 3, 4, 5, 6}
```

## 집합 remove 및 discard

두 메서드 모두 집합에서 요소를 제거하지만, `remove()`는 해당 값이 존재하지 않으면 `key error`를 발생시킵니다.

```python
# remove() 메서드: 요소 제거, 찾을 수 없으면 KeyError 발생
s = {1, 2, 3}
s.remove(3)  # 요소 3 제거
s
```

출력:

```plaintext
{1, 2}
```

```python
s.remove(3)
```

출력:

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 3
```

`discard()`는 오류를 발생시키지 않습니다.

```python
# discard() 메서드: 요소 제거, 없어도 오류 없음
s = {1, 2, 3}
s.discard(3)  # 요소 3 제거 (안전함, 없어도 오류 없음)
s
```

출력:

```plaintext
{1, 2}
```

```python
s.discard(3)
```

## 집합 union (합집합)

`union()` 또는 `|`는 제공된 집합들의 모든 요소를 포함하는 새 집합을 생성합니다.

```python
# union(): 여러 집합의 모든 요소 결합 (중복 없음)
s1 = {1, 2, 3}
s2 = {3, 4, 5}
s1.union(s2)  # 또는 's1 | s2' - {1, 2, 3, 4, 5} 반환
```

출력:

```plaintext
{1, 2, 3, 4, 5}
```

## 집합 intersection (교집합)

`intersection()` 또는 `&`는 모든 집합에 공통된 요소만 포함하는 집합을 반환합니다.

```python
# intersection(): 모든 집합에 공통된 요소 반환
s1 = {1, 2, 3}
s2 = {2, 3, 4}
s3 = {3, 4, 5}
s1.intersection(s2, s3)  # 또는 's1 & s2 & s3' - {3} 반환
```

출력:

```plaintext
{3}
```

## 집합 difference (차집합)

`difference()` 또는 `-`는 첫 번째 집합 (호출된 집합) 에만 고유한 요소만 반환합니다.

```python
# difference(): 첫 번째 집합에는 있지만 다른 집합에는 없는 요소 반환
s1 = {1, 2, 3}
s2 = {2, 3, 4}

s1.difference(s2)  # 또는 's1 - s2' - {1} 반환
```

출력:

```plaintext
{1}
```

```python
s2.difference(s1) # 또는 's2 - s1'
```

출력:

```plaintext
{4}
```

## 집합 symmetric_difference (대칭 차집합)

`symmetric_difference()` 또는 `^`는 두 집합 중 하나에는 있지만 둘 다에는 없는 모든 요소를 반환합니다.

```python
# symmetric_difference(): 두 집합 중 하나에만 있는 요소 반환, 둘 다에는 없는 요소
s1 = {1, 2, 3}
s2 = {2, 3, 4}
s1.symmetric_difference(s2)  # 또는 's1 ^ s2' - {1, 4} 반환
```

출력:

```plaintext
{1, 4}
```

## 관련 링크

- <router-link to="/blog/python-data-types">Python 데이터 유형 블로그 게시물</router-link>
- <router-link to="/blog/python-sets-what-why-how">Python 집합: 무엇을, 왜, 어떻게</router-link>
- <router-link to="/cheatsheet/dictionaries">Python 딕셔너리</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Python 리스트 및 튜플</router-link>
