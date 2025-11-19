---
title: '파이썬 컴프리헨션 - 파이썬 치트 시트'
description: '리스트 컴프리헨션은 리스트를 생성하는 간결한 방법입니다'
labUrl: 'https://labex.io/ko/labs/python-python-comprehensions-633649?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Comprehensions
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

리스트 컴프리헨션 (List Comprehensions) 은 다른 리스트로부터 리스트를 생성할 수 있게 해주는 특별한 구문이며, 숫자 및 한두 단계의 중첩된 for 루프를 다룰 때 매우 유용합니다.

<base-disclaimer>
  <base-disclaimer-title>
    Python 3 <a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions">튜토리얼</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
    리스트 컴프리헨션은 리스트를 생성하는 간결한 방법을 제공합니다. [...] 또는 특정 조건을 만족하는 요소의 하위 시퀀스를 생성합니다.
  </base-disclaimer-content>
</base-disclaimer>

더 자세한 소개는 <router-link to="/blog/python-comprehensions-step-by-step">Python Comprehensions: 단계별 소개</router-link>를 읽어보세요.

## 리스트 컴프리헨션 (List comprehension)

기존 컬렉션으로부터 For 루프를 사용하여 새 리스트를 만드는 방법은 다음과 같습니다.

```python
# 전통적인 접근 방식: for 루프를 사용하여 리스트 생성
names = ['Charles', 'Susan', 'Patrick', 'George']

new_list = []
for n in names:
    new_list.append(n)

new_list
```

```output
['Charles', 'Susan', 'Patrick', 'George']
```

그리고 리스트 컴프리헨션을 사용하여 동일한 작업을 수행하는 방법은 다음과 같습니다.

```python
# 리스트 컴프리헨션: 새 리스트를 만드는 간결한 방법
# 구문: [expression for item in iterable]
names = ['Charles', 'Susan', 'Patrick', 'George']

new_list = [n for n in names]  # 모든 이름을 포함하는 리스트 생성
new_list
```

```output
['Charles', 'Susan', 'Patrick', 'George']
```

숫자에 대해서도 동일하게 수행할 수 있습니다.

```python
# 중첩된 리스트 컴프리헨션: 두 개의 범위에서 튜플 생성
# 중첩된 for 루프와 동일
n = [(a, b) for a in range(1, 3) for b in range(1, 3)]
n
```

```output
[(1, 1), (1, 2), (2, 1), (2, 2)]
```

## 조건문 추가하기

`new_list`에 'C'로 시작하는 이름만 포함하고 싶다면, for 루프를 사용할 경우 다음과 같이 할 것입니다.

```python
# 전통적인 접근 방식: if 조건문으로 필터링
names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']

new_list = []
for n in names:
    if n.startswith('C'):  # 'C'로 시작하는 이름 필터링
        new_list.append(n)

print(new_list)
```

```output
['Charles', 'Carol']
```

리스트 컴프리헨션에서는 `if` 문을 끝에 추가합니다.

```python
# 조건문이 있는 리스트 컴프리헨션: 항목 필터링
# 구문: [expression for item in iterable if condition]
new_list = [n for n in names if n.startswith('C')]
print(new_list)
```

```output
['Charles', 'Carol']
```

리스트 컴프리헨션에서 `if-else` 문을 사용하려면 다음과 같이 합니다.

```python
# if-else 가 있는 리스트 컴프리헨션: 조건부 표현식
# 구문: [expression_if_true if condition else expression_if_false for item in iterable]
nums = [1, 2, 3, 4, 5, 6]
new_list = [num*2 if num % 2 == 0 else num for num in nums]  # 짝수는 두 배로 만들기
print(new_list)
```

```output
[1, 4, 3, 8, 5, 12]
```

<base-disclaimer>
  <base-disclaimer-title>
    Set 및 Dict 컴프리헨션
  </base-disclaimer-title>
  <base-disclaimer-content>
    `list` 컴프리헨션의 기본 사항은 <b>set</b>과 <b>dictionary</b>에도 동일하게 적용됩니다.
  </base-disclaimer-content>
</base-disclaimer>

## 셋 컴프리헨션 (Set comprehension)

```python
# 셋 컴프리헨션: 컴프리헨션 구문을 사용하여 셋 생성
# 구문: {expression for item in iterable}
b = {"abc", "def"}
{s.upper() for s in b}  # 모든 문자열을 대문자로 변환
```

```output
{"ABC", "DEF"}
```

## 딕셔너리 컴프리헨션 (Dict comprehension)

```python
# 딕셔너리 컴프리헨션: 키와 값 교환
# 구문: {key_expression: value_expression for item in iterable}
c = {'name': 'Pooka', 'age': 5}
{v: k for k, v in c.items()}  # 키 - 값 쌍 반전
```

```output
{'Pooka': 'name', 5: 'age'}
```

딕셔너리로부터 리스트 컴프리헨션을 생성할 수 있습니다.

```python
# 딕셔너리로부터 리스트 컴프리헨션: 형식화된 문자열 생성
c = {'name': 'Pooka', 'age': 5}
["{}:{}".format(k.upper(), v) for k, v in c.items()]  # "KEY:value" 형식으로 포맷팅
```

```output
['NAME:Pooka', 'AGE:5']
```

## 관련 링크

- <router-link to="/blog/python-comprehensions-step-by-step">Python Comprehensions: 단계별 소개</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Python 리스트와 튜플</router-link>
- <router-link to="/cheatsheet/sets">Python 셋</router-link>
- <router-link to="/cheatsheet/dictionaries">Python 딕셔너리</router-link>
- <router-link to="/blog/python-sets-what-why-how">Python 셋: 무엇을, 왜, 어떻게</router-link>
- <router-link to="/blog/python-data-types">Python 데이터 타입 블로그 게시물</router-link>
