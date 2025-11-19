---
title: 'Python 내장 함수 map() - 파이썬 치트 시트'
description: '반복 가능한 (iterable) 모든 항목에 함수를 적용하여 결과를 반환하는 이터레이터를 반환합니다. 추가 반복 가능 인수가 전달되면 함수는 해당 개수의 인수를 받아 모든 반복 가능 항목에 병렬로 적용됩니다. 여러 반복 가능 항목이 있는 경우, 가장 짧은 반복 가능 항목이 소진되면 이터레이터가 중지됩니다. 함수 입력이 이미 인수 튜플로 구성된 경우에 유용합니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python map() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#map">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   함수를 모든 항목에 적용하여 결과를 생성하는 이터레이터를 반환합니다. 추가적인 이터러블 인수가 전달되면, 함수는 해당 인수의 개수만큼 인수를 받아 모든 이터러블의 항목에 병렬로 적용됩니다. 여러 이터러블이 있는 경우, 이터레이터는 가장 짧은 이터러블이 소진될 때 중지됩니다. 함수의 입력이 이미 <router-link to="/builtin/tuple">튜플</router-link> 형태로 배열된 경우에 사용됩니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

map 함수, *map(function, iterable)*은 하나 이상의 이터러블과 '콜백 함수'(종종 람다) 를 인수로 받아 "Map 객체"를 반환합니다. 맵 객체는 맵 함수가 콜백을 각 이터러블 요소에 적용한 결과를 포함합니다. Map 은 제공된 이터러블 객체들을 동시에 반복합니다. 즉, 맵 함수의 매 단계에서, 각 이터러블의 인덱스 "i"에 해당하는 요소가 해당 시점에 맵 함수에 제공됩니다. 일반적으로 매핑 작업을 마친 후 사용하기 더 편리한 <router-link to="/builtin/list">리스트</router-link>, <router-link to="/builtin/tuple">튜플</router-link> 또는 다른 형태의 객체로 결과 맵 객체를 형 변환하고 싶을 것입니다.

\*\*\*중요 참고 사항: Python 3 출시 이후, map 에 공급된 이터러블의 길이가 다를 경우, 맵은 가장 짧은 이터러블의 길이에 해당하는 단계 수에 도달하면 중지되고 결과를 반환합니다.

## 입력 매개변수

Function: 맵의 현재 단계에 해당하는 인덱스에 있는 항목 (들) 을 받아 그 반환 결과를 Map 객체에 저장할 항목으로 제공합니다. 맵 객체에 저장되는 요소의 타입은 함수에서 반환되는 타입과 동일합니다.

Iterable(s): `<router-link to="/builtin/tuple">튜플</router-link>`, `<router-link to="/builtin/list">리스트</router-link>`, `<router-link to="/builtin/range">range</router-link>`, `<router-link to="/builtin/dict">딕셔너리</router-link>`, `<router-link to="/builtin/set">집합</router-link>`, `<router-link to="/builtin/str">문자열</router-link>`.

## 매우 간단한 예제

```python
def double_map(func, iter):
    my_map = map(func, iter)
    return list(my_map)

def double(element):
    return element * 2

nums = [1, 2, 3, 4]

print(double_map(double, nums))
```

```output
[2, 4, 6, 8]
```

## 덜 간단한 예제

### 이 예제는 람다로 작성된 콜백 함수와

```python
def multi_map(func, *iters):
    my_map = map(func, *iters)
    return list(my_map)

list1 = [1, 2, 3]
list2 = [4, 5, 6]

print(multi_map((lambda item1, item2: item1 * item2), list1, list2))
```

```output
[4, 10, 18]
```

## 맵의 서로 다른 이터러블 길이 처리 방식을 보여주는 예제

```python
def max(a, b):
    if a > b:
        return a
    else:
        return b

list1 = [1, 1, 1]
list2 = [0, 0, 0, 1, 1, 1, 1, 1, 1, 1]

result = list(map(max, list1, list2))

print(result)
```

```output
[1, 1, 1]
```

결과 리스트의 길이가 list1 의 길이와 같다는 점에 유의하십시오.

## 관련 링크

- <router-link to="/cheatsheet/functions">치트 시트: 함수 (람다 포함)</router-link>
- <router-link to="/cheatsheet/comprehensions">치트 시트: 컴프리헨션</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">블로그: Python 컴프리헨션 단계별 가이드</router-link>
- <router-link to="/modules/itertools-module">모듈: itertools</router-link>
- <router-link to="/builtin/filter">filter()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
