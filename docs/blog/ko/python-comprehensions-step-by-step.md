---
title: '파이썬 컴프리헨션: 단계별 소개 - 파이썬 치트 시트'
description: '이 짧은 글에서는 for 루프를 작성하고 단계별로 컴프리헨션으로 다시 작성하는 방법을 알아봅니다.'
date: 'March 22, 2019'
updated: 'July 3, 2022'
tags: 'python, basics'
socialImage: '/blog/python-comprehensions.png'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "파이썬 컴프리헨션: 단계별 소개 - 파이썬 치트 시트"
    description: "이 짧은 글에서는 for 루프를 작성하고 단계별로 컴프리헨션으로 다시 작성하는 방법을 알아봅니다."
    date: "March 22, 2019"
    updated: "July 3, 2022"
    tags: "python, basics"
    socialImage: "/blog/python-comprehensions.png"
</route>

<blog-title-header :frontmatter="frontmatter" title="파이썬 컴프리헨션: 단계별 소개 - 파이썬 치트 시트" />

*List Comprehensions*는 다른 리스트로부터 리스트를 생성할 수 있게 해주는 특별한 종류의 구문입니다 ([Wikipedia](https://en.wikipedia.org/wiki/List_comprehension), [The Python Tutorial](https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions)). 이는 숫자를 다룰 때와 한두 단계의 중첩된 *for loops*를 다룰 때 매우 유용하지만, 그 이상이 되면 읽기가 다소 어려워질 수 있습니다.

이 글에서는 몇 가지 *For Loops*를 만들고 이를 단계별로 *Comprehensions*로 다시 작성해 보겠습니다.

## Basics

사실 *List Comprehensions*는 그다지 복잡하지 않지만, 처음에는 약간 이상하게 보이기 때문에 이해하기가 조금 어렵습니다. 왜 그럴까요? *List Comprehension*이 작성되는 순서가 우리가 *For Loop*에서 일반적으로 보는 순서와 **_반대_**이기 때문입니다.

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> for n in names:
...     print(n)
# Charles
# Susan
# Patrick
# George
# Carol
```

*List Comprehension*으로 동일한 작업을 수행하려면, *loop*의 가장 끝 부분부터 시작합니다.

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> [print(n) for n in names]
# Charles
# Susan
# Patrick
# George
# Carol
```

순서가 어떻게 뒤바뀌었는지 확인해 보세요.

- 첫째, 루프의 출력 결과가 무엇인지 `[print(n) ...]`가 옵니다.
- 다음으로, 작업할 `List`, `Set` 또는 `Dictionary`를 가리키며 각 항목을 저장할 변수를 정의합니다 `[... for n in names]`.

## Creating a new List with a Comprehension

> 이는 *List Comprehension*의 주요 용도입니다. 다른 용도는 본인과 다른 사람들에게 읽기 어려운 코드를 초래할 수 있습니다.

기존 컬렉션에서 *For Loop*를 사용하여 새 리스트를 만드는 방법은 다음과 같습니다.

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']

>>> new_list = []
>>> for n in names:
...     new_list.append(n)

>>> print(new_list)
# ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
```

그리고 *List Comprehension*으로 동일한 작업을 수행하는 방법은 다음과 같습니다.

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> new_list = [n for n in names]
>>> print(new_list)
# ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
```

이렇게 할 수 있는 이유는 *List Comprehension*의 기본 동작이 리스트를 반환하기 때문입니다.

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> [n for n in names]
# ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
```

## Adding Conditionals

만약 `new_list`에 'C'로 시작하는 이름만 포함하고 싶다면 어떻게 해야 할까요? *For Loop*를 사용하면 다음과 같이 할 수 있습니다.

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']

>>> new_list = []
>>> for n in names:
...     if n.startswith('C'):
...         new_list.append(n)

>>> print(new_list)
# ['Charles', 'Carol']
```

*List Comprehension*에서는 if 문을 끝에 추가합니다.

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> new_list = [n for n in names if n.startswith('C')]
>>> print(new_list)
# ['Charles', 'Carol']
```

훨씬 더 읽기 쉽습니다.

## Formatting long List Comprehensions

이번에는 `new_list`에 'C'로 시작하는 이름뿐만 아니라 'e'로 끝나거나 'k'를 포함하는 이름도 포함하고 싶습니다.

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']
>>> new_list = [n for n in names if n.startswith('C') or n.endswith('e') or 'k' in n]
>>> print(new_list)
# ['Charles', 'Patrick', 'George', 'Carol']
```

이것은 꽤 지저분합니다. 다행히도 *Comprehensions*를 여러 줄로 나눌 수 있습니다.

```python
new_list = [
    n
    for n in names
    if n.startswith("C")
    or n.endswith("e")
    or "k" in n
]
```

## Set and Dict Comprehensions

*List Comprehensions*의 기본 사항을 익히셨다면... 축하합니다! <router-link to="/cheatsheet/sets">Sets</router-link>와 <router-link to="/cheatsheet/dictionaries">Dictionaries</router-link>에 대해서도 방금 배운 것입니다.

### Set comprehension

```python
>>> my_set = {"abc", "def"}

>>> # 여기서는 for 루프를 사용하여 대문자 요소를 가진 새 집합을 생성합니다
>>> new_set = set()
>>> for s in my_set:
...    new_set.add(s.upper())
>>> print(new_set)
# {'DEF', 'ABC'}

>>> # 동일하지만, set comprehension 을 사용합니다
>>> new_set = {s.upper() for s in my_set}
>>> print(new_set)
# {'DEF', 'ABC'}
```

### Dict comprehension

```python
>>> my_dict = {'name': 'Christine', 'age': 98}

>>> # for 루프를 사용하여 기존 딕셔너리에서 새 딕셔너리 생성
>>> new_dict = {}
>>> for key, value in my_dict.items():
...     new_dict[key] = value
>>> print(new_dict)
# {'name': 'Christine', 'age': 98}

# dict comprehension 사용
>>> new_dict = {key: value for key, value in my_dict.items()}  # ":"에 유의하세요
>>> print(new_dict)
# {'name': 'Christine', 'age': 98}
```

> 추천 기사: [Python Sets: What, Why and How ](https://www.pythoncheatsheet.org/blog/python-sets-what-why-how).

## Conclusion

새로운 것을 배울 때마다 즉시 사용하고 싶은 충동이 생깁니다. 그럴 때 저는 잠시 멈추고 생각해 보려고 노력합니다... 이 크고, 중첩되어 있고, 이미 지저분해 보이는 *For Loop*를 *List Comprehension*으로 바꿔야 할까요? 아마 아닐 것입니다.

> 가독성이 중요합니다. [The Zen of Python](https://www.python.org/dev/peps/pep-0020/).
