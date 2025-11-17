---
title: '파이썬 세트: 정의, 필요성 및 사용법 - 파이썬 치트 시트'
description: '코드를 작성할 때 여러 가지 방법이 있습니다. 어떤 방법은 나쁘다고 여겨지고, 어떤 방법은 명확하고 간결하며 유지보수가 용이합니다. 즉, 파이썬다운 방식입니다. 이 글에서는 파이썬 세트가 코드 가독성을 높이는 것뿐만 아니라 프로그램 실행 속도를 높이는 데 어떻게 도움이 되는지 살펴보겠습니다.'
date: 'July 27, 2018'
updated: 'July 3, 2022'
tags: 'python, basics'
socialImage: '/blog/sets.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "파이썬 세트: 정의, 필요성 및 사용법 - 파이썬 치트 시트"
    description: "코드를 작성할 때 여러 가지 방법이 있습니다. 어떤 방법은 나쁘다고 여겨지고, 어떤 방법은 명확하고 간결하며 유지보수가 용이합니다. 즉, 파이썬다운 방식입니다. 이 글에서는 파이썬 세트가 코드 가독성을 높이는 것뿐만 아니라 프로그램 실행 속도를 높이는 데 어떻게 도움이 되는지 살펴보겠습니다."
    date: "July 27, 2018"
    updated: "July 3, 2022"
    tags: "python, basics"
    socialImage: "/blog/sets.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="파이썬 세트: 정의, 필요성 및 사용법 - 파이썬 치트 시트" />

Python 은 데이터를 구성하는 데 도움이 되는 여러 내장 데이터 유형을 갖추고 있습니다. 이러한 구조에는 `lists`, `dictionaries`, `tuples` 및 `sets`가 포함됩니다.

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#sets">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
    <code>set</code>은 <b>중복 요소</b>가 없는 <b>순서가 없는 컬렉션</b>입니다. 기본 용도는 <b>멤버십 테스트</b> 및 <b>중복 항목 제거</b>입니다. 집합 객체는 <b>합집합</b>, <b>교집합</b>, <b>차집합</b> 및 <b>대칭 차집합</b>과 같은 수학적 연산도 지원합니다.
  </base-disclaimer-content>
</base-disclaimer>

이 글에서는 위 정의에 나열된 모든 요소를 검토할 것입니다. 바로 시작하여 생성 방법을 살펴보겠습니다.

## 집합 초기화

집합을 생성하는 두 가지 방법이 있습니다. 하나는 내장 함수 `set()`을 사용하여 요소의 `list`를 전달하는 것이고, 다른 하나는 중괄호 `{}`를 사용하는 것입니다.

### `set()` 내장 함수를 사용하여 집합 초기화

```python
>>> s1 = set([1, 2, 3])
>>> s1
{1, 2, 3}
>>> type(s1)
<class 'set'>
```

### 중괄호 `{}`를 사용하여 집합 초기화

```python
>>> s2 = {3, 4, 5}
>>> s2
{3, 4, 5}
>>> type(s2)
<class 'set'>
>>>
```

<base-warning>
  <base-warning-title>
    빈 집합
  </base-warning-title>
  <base-warning-content>
    집합을 생성할 때 빈 중괄호 <code>{}</code>를 사용하지 않도록 주의하십시오. 그렇지 않으면 빈 딕셔너리가 생성됩니다.
  </base-warning-content>
</base-warning>

```python
>>> s = {}
>>> type(s)
<class 'dict'>
```

이 시점에서 이 문서에 제공된 모든 예제는 단일 자릿수 정수를 사용하지만, 집합은 Python 이 지원하는 모든 [해시 가능 (hashable)](https://docs.python.org/3/glossary.html#term-hashable) 데이터 유형을 포함할 수 있음을 언급하는 것이 좋습니다. 즉, 정수, 문자열 및 튜플은 가능하지만 *리스트*나 *딕셔너리*와 같은 _가변_ 항목은 불가능합니다.

```python
>>> s = {1, 'coffee', [4, 'python']}
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: unhashable type: 'list'
```

집합을 생성하는 방법과 포함할 수 있는 요소 유형을 알았으니, 왜 항상 무기고에 집합을 두어야 하는지 계속해서 살펴보겠습니다.

## 집합을 사용해야 하는 이유

코드를 한 가지 이상의 방식으로 작성할 수 있습니다. 일부는 꽤 나쁘다고 간주되고, 다른 일부는 _명확하고, 간결하며 유지 관리가 용이합니다_. 또는 "[_파이썬다운 (pythonic)_](http://docs.python-guide.org/en/latest/writing/style/)" 방식입니다.

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="http://docs.python-guide.org/en/latest/">The Hitchhiker’s Guide to Python</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
    숙련된 Python 개발자 (Pythonista) 가 코드의 일부를 "파이썬답지 않다"고 말할 때, 그들은 일반적으로 해당 코드 줄이 일반적인 지침을 따르지 않으며 의도를 가장 좋은 (즉, 가장 읽기 쉬운) 방식으로 표현하지 못한다는 의미입니다.
  </base-disclaimer-content>
</base-disclaimer>

가독성뿐만 아니라 프로그램의 실행 시간 측면에서도 Python 집합이 어떻게 도움이 될 수 있는지 탐색해 보겠습니다.

## 요소의 순서가 없는 컬렉션

가장 먼저: `set` 객체에 인덱스를 사용하여 액세스할 수 없습니다.

```python
>>> s = {1, 2, 3}
>>> s[0]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'set' object does not support indexing
```

슬라이스로 수정할 수도 없습니다.

```python
>>> s[0:2]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'set' object is not subscriptable
```

하지만 중복을 제거하거나 리스트 결합 (합집합) 과 같은 수학적 연산을 수행해야 하는 경우, 집합을 사용해야 하며 _항상_ 사용해야 합니다.

반복할 때는 리스트가 집합보다 성능이 우수하므로 필요한 경우 리스트를 선호해야 한다고 언급해야 합니다. 왜 그럴까요? 이 글은 집합의 내부 작동 방식을 설명하려는 것이 아니지만, 이에 대해 읽을 수 있는 몇 가지 링크가 있습니다.

- [시간 복잡도 (Time Complexity)](https://wiki.python.org/moin/TimeComplexity)
- [set() 은 어떻게 구현되나요? (How is set() implemented?)](https://stackoverflow.com/questions/3949310/how-is-set-implemented)
- [Python 집합 대 리스트 (Python Sets vs Lists)](https://stackoverflow.com/questions/2831212/python-sets-vs-lists)
- [고유 항목 리스트를 보장하기 위해 리스트 컴프리헨션보다 집합을 사용하는 것의 장점이나 단점이 있습니까? (Is there any advantage or disadvantage to using sets over list comps to ensure a list of unique entries?)](https://mail.python.org/pipermail/python-list/2011-June/606738.html)

## 중복 항목 없음

이 글을 쓰는 동안, 리스트에서 중복 요소를 확인하고 제거하기 위해 _for_ 루프와 _if_ 문을 사용했던 모든 순간이 생각납니다. 저는 한 번 이상 다음과 같이 작성했던 것을 기억하며 얼굴이 붉어집니다.

```python
>>> my_list = [1, 2, 3, 2, 3, 4]
>>> no_duplicate_list = []
>>> for item in my_list:
...     if item not in no_duplicate_list:
...             no_duplicate_list.append(item)
...
>>> no_duplicate_list
[1, 2, 3, 4]
```

또는 리스트 컴프리헨션을 사용했습니다.

```python
>>> my_list = [1, 2, 3, 2, 3, 4]
>>> no_duplicate_list = []
>>> [no_duplicate_list.append(item) for item in my_list if item not in no_duplicate_list]
[None, None, None, None]
>>> no_duplicate_list
[1, 2, 3, 4]
```

하지만 괜찮습니다. 이제 집합이 있으므로 이 모든 것은 더 이상 중요하지 않습니다.

```python
>>> my_list = [1, 2, 3, 2, 3, 4]
>>> no_duplicate_list = list(set(my_list))
>>> no_duplicate_list
[1, 2, 3, 4]
```

## 집합 성능

이제 _timeit_ 모듈을 사용하여 중복을 제거할 때 리스트와 집합의 실행 시간을 확인해 보겠습니다.

```python
>>> from timeit import timeit
>>> def no_duplicates(list):
...     no_duplicate_list = []
...     [no_duplicate_list.append(item) for item in list if item not in no_duplicate_list]
...     return no_duplicate_list
...
>>> # 먼저, 리스트의 성능을 확인해 봅시다:
>>> print(timeit('no_duplicates([1, 2, 3, 1, 7])', globals=globals(), number=1000))
0.0018683355819786227
```

```python
>>> from timeit import timeit
>>> # 그리고 집합:
>>> print(timeit('list(set([1, 2, 3, 1, 2, 3, 4]))', number=1000))
0.0010220493243764395
>>> # 더 빠르고 깔끔합니다 =)
```

집합을 사용하면 리스트 컴프리헨션보다 _작성하는 코드가 적을_ 뿐만 아니라 _더 읽기 쉽고_ _성능이 더 좋은_ 코드를 얻을 수 있습니다.

<base-warning>
  <base-warning-title>
    집합은 순서가 없다는 것을 기억하세요
  </base-warning-title>
  <base-warning-content>
    다시 리스트로 변환할 때 요소의 순서가 유지된다는 보장은 없습니다.
  </base-warning-content>
</base-warning>

[Zen of Python](https://www.python.org/dev/peps/pep-0020/)에서 발췌:

> 아름다운 것이 추한 것보다 낫다. <br>
> 명시적인 것이 암시적인 것보다 낫다.<br>
> 단순한 것이 복잡한 것보다 낫다.<br>
> 평면적인 것이 중첩된 것보다 낫다.

집합은 아름답고, 명시적이며, 단순하고, 평면적이지 않습니까?

## 멤버십 테스트

예를 들어 리스트에 요소가 있는지 확인하기 위해 _if_ 문을 사용할 때마다 멤버십 테스트를 수행하는 것입니다.

```python
my_list = [1, 2, 3]
>>> if 2 in my_list:
...     print('Yes, this is a membership test!')
...
# Yes, this is a membership test!
```

그리고 멤버십 테스트를 수행할 때 집합이 리스트보다 성능이 더 좋습니다.

```python
>>> from timeit import timeit
>>> def in_test(iterable):
...     for i in range(1000):
...             if i in iterable:
...                     pass
...
>>> timeit('in_test(iterable)', setup="from __main__ import in_test; iterable = list(range(1000))", number=1000)
# 12.459663048726043
```

```python
>>> from timeit import timeit
>>> def in_test(iterable):
...     for i in range(1000):
...             if i in iterable:
...                     pass
...
>>> timeit('in_test(iterable)', setup="from __main__ import in_test; iterable = set(range(1000))", number=1000)
# 0.12354438152988223
```

위 테스트는 이 [Stack Overflow 스레드](https://stackoverflow.com/questions/2831212/python-sets-vs-lists)에서 가져온 것입니다.

따라서 대규모 리스트에서 이와 같은 비교를 수행하는 경우 해당 리스트를 집합으로 변환하면 상당한 속도 향상을 얻을 수 있습니다.

## 요소 추가

추가할 요소 수에 따라 `add()`와 `update()` 메서드 중에서 선택해야 합니다.

`add()`는 단일 요소를 추가합니다.

```python
>>> s = {1, 2, 3}
>>> s.add(4)
>>> s
{1, 2, 3, 4}
```

그리고 `update()`는 여러 요소를 추가합니다.

```python
>>> s = {1, 2, 3}
>>> s.update([2, 3, 4, 5, 6])
>>> s
{1, 2, 3, 4, 5, 6}
```

집합은 중복을 제거한다는 것을 기억하십시오.

## 요소 제거

코드에서 집합에 없는 요소를 제거하려고 할 때 알림을 받고 싶다면 `remove()`를 사용하십시오. 그렇지 않으면 `discard()`가 적절한 대안을 제공합니다.

```python
>>> s = {1, 2, 3}
>>> s.remove(3)
>>> s
{1, 2}
>>> s.remove(3)
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# KeyError: 3
```

`discard()`는 오류를 발생시키지 않습니다.

```python
>>> s = {1, 2, 3}
>>> s.discard(3)
>>> s
{1, 2}
>>> s.discard(3)
>>> # 아무 일도 일어나지 않습니다!
```

임의의 요소를 제거하기 위해 `pop()`을 사용할 수도 있습니다.

```python
>>> s = {1, 2, 3, 4, 5}
>>> s.pop()  # 임의의 요소 제거
1
>>> s
{2, 3, 4, 5}
```

또는 `clear()`를 사용하여 집합의 모든 값을 제거할 수 있습니다.

```python
>>> s = {1, 2, 3, 4, 5}
>>> s.clear()  # 모든 항목 제거
>>> s
set()
```

## union() 메서드

`union()` 또는 `|`는 제공하는 집합의 모든 요소를 포함하는 새 집합을 생성합니다.

```python
>>> s1 = {1, 2, 3}
>>> s2 = {3, 4, 5}
>>> s1.union(s2)  # 또는 's1 | s2'
{1, 2, 3, 4, 5}
```

## intersection() 메서드

`intersection` 또는 `&`는 모든 집합에 공통된 요소만 포함하는 집합을 반환합니다.

```python
>>> s1 = {1, 2, 3}
>>> s2 = {2, 3, 4}
>>> s3 = {3, 4, 5}
>>> s1.intersection(s2, s3)  # 또는 's1 & s2 & s3'
{3}
```

## difference() 메서드

차집합은 "s1"에는 있지만 "s2"에는 없는 값을 가진 새 집합을 생성합니다.

```python
>>> s1 = {1, 2, 3}
>>> s2 = {2, 3, 4}
>>> s1.difference(s2)  # 또는 's1 - s2'
{1}
```

## symmetric_difference()

`symmetric_difference` 또는 `^`는 집합 간에 공통되지 않은 모든 값을 반환합니다.

```python
>>> s1 = {1, 2, 3}
>>> s2 = {2, 3, 4}
>>> s1.symmetric_difference(s2)  # 또는 's1 ^ s2'
{1, 4}
```

## 결론

이 글을 읽고 난 후 집합이 무엇인지, 요소들을 어떻게 조작하는지, 그리고 수행할 수 있는 연산이 무엇인지 알게 되었기를 바랍니다. 언제 집합을 사용해야 하는지 아는 것은 코드를 더 깔끔하게 작성하고 프로그램 속도를 높이는 데 확실히 도움이 될 것입니다.
