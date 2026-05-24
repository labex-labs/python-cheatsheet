---
title: '파이썬 딕셔너리 - 파이썬 치트 시트'
description: '파이썬에서 딕셔너리는 키 - 값 쌍의 삽입 순서가 유지되는 (파이썬 3.7 이상) 컬렉션입니다.'
labUrl: 'https://labex.io/ko/labs/python-python-dictionaries-633655?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 딕셔너리
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Python 에서 딕셔너리는 _순서가 있는_ (Python > 3.7 부터) `key`: `value` 쌍의 모음입니다.

<base-disclaimer>
  <base-disclaimer-title>
    Python 3 <a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#dictionaries">문서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
    딕셔너리의 주요 작업은 특정 키로 값을 저장하고 키를 주어 값을 추출하는 것입니다. 또한 <code>del</code>을 사용하여 키:값 쌍을 삭제하는 것도 가능합니다.
  </base-disclaimer-content>
</base-disclaimer>

예시 딕셔너리:

```python
# 딕셔너리: 키 - 값 쌍의 모음
my_cat = {
    'size': 'fat',          # key: 'size', value: 'fat'
    'color': 'gray',         # key: 'color', value: 'gray'
    'disposition': 'loud'    # key: 'disposition', value: 'loud'
}
```

## 대괄호 연산자 `[]`를 사용한 키, 값 설정

```python
# 대괄호 연산자를 사용하여 딕셔너리 항목 추가 또는 업데이트
my_cat = {
 'size': 'fat',
 'color': 'gray',
 'disposition': 'loud',
}
my_cat['age_years'] = 2  # 새 키 - 값 쌍 추가
print(my_cat)
```

```output
{'size': 'fat', 'color': 'gray', 'disposition': 'loud', 'age_years': 2}
```

## 대괄호 연산자 `[]`를 사용한 값 가져오기

키가 딕셔너리에 없는 경우 <a target="_blank" href="https://docs.python.org/3/library/exceptions.html#KeyError">`KeyError`</a>가 발생합니다.

```python
my_cat = {
 'size': 'fat',
 'color': 'gray',
 'disposition': 'loud',
}
print(my_cat['size'])
```

```output
fat
```

```python
print(my_cat['eye_color'])
```

```output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 'eye_color'
```

## values()

`values()` 메서드는 딕셔너리의 **값**을 가져옵니다:

```python
# .values() 메서드를 사용하여 딕셔너리 값 반복
pet = {'color': 'red', 'age': 42}
for value in pet.values():  # 모든 값을 순회
    print(value)
```

```output
red
42
```

## keys()

`keys()` 메서드는 딕셔너리의 **키**를 가져옵니다:

```python
# .keys() 메서드를 사용하여 딕셔너리 키 반복
pet = {'color': 'red', 'age': 42}
for key in pet.keys():  # 모든 키를 순회
    print(key)
```

```output
color
age
```

기본적으로 키를 순회하므로 **.keys()**를 사용할 필요가 없습니다:

```python
# 딕셔너리를 직접 순회하면 키를 순회합니다 (기본 동작)
pet = {'color': 'red', 'age': 42}
for key in pet:  # for key in pet.keys() 와 동일
    print(key)
```

```output
color
age
```

## items()

`items()` 메서드는 딕셔너리의 **항목**을 가져와 <router-link to=/cheatsheet/lists-and-tuples#the-tuple-data-type>튜플</router-link>로 반환합니다:

```python
pet = {'color': 'red', 'age': 42}
for item in pet.items():
    print(item)
```

```output
('color', 'red')
('age', 42)
```

`keys()`, `values()`, `items()` 메서드를 사용하면 for 루프를 통해 각각 딕셔너리의 키, 값 또는 키 - 값 쌍을 반복할 수 있습니다.

```python
# .items() 메서드를 사용하여 키 - 값 쌍 반복
pet = {'color': 'red', 'age': 42}
for key, value in pet.items():  # 튜플을 키와 값으로 언패킹
    print(f'Key: {key} Value: {value}')
```

```output
Key: color Value: red
Key: age Value: 42
```

## get()

`get()` 메서드는 주어진 키를 가진 항목의 값을 반환합니다. 키가 존재하지 않으면 `None`을 반환합니다:

```python
# .get() 메서드: 안전하게 값 검색, 키가 없으면 None 반환
wife = {'name': 'Rose', 'age': 33}

f'My wife name is {wife.get("name")}'  # 'Rose' 반환
```

```output
'My wife name is Rose'
```

```python
f'She is {wife.get("age")} years old.'
```

```output
'She is 33 years old.'
```

```python
f'She is deeply in love with {wife.get("husband")}'
```

```output
'She is deeply in love with None'
```

기본값인 `None`을 원하는 값으로 변경할 수도 있습니다:

```python
wife = {'name': 'Rose', 'age': 33}

f'She is deeply in love with {wife.get("husband", "lover")}'
```

```output
'She is deeply in love with lover'
```

## setdefault() 를 사용한 항목 추가

이러한 방식으로 딕셔너리에 항목을 추가할 수 있습니다:

```python
wife = {'name': 'Rose', 'age': 33}
if 'has_hair' not in wife:
    wife['has_hair'] = True
```

`setdefault` 메서드를 사용하면 동일한 코드를 더 짧게 만들 수 있습니다:

```python
wife = {'name': 'Rose', 'age': 33}
wife.setdefault('has_hair', True)
wife
```

```output
{'name': 'Rose', 'age': 33, 'has_hair': True}
```

## 항목 제거

### pop()

`pop()` 메서드는 주어진 키를 기반으로 항목을 제거하고 반환합니다.

```python
wife = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
wife.pop('age')
```

```output
33
```

```python
wife
```

```output
{'name': 'Rose', 'hair': 'brown'}
```

<BaseQuiz id="cheatsheet-dictionaries-1" correct="B">
<template #question>
딕셔너리에서 <code>pop()</code>을 호출하면 어떻게 되나요?
</template>

<BaseQuizOption value="A">A. 키 - 값 쌍만 제거합니다</BaseQuizOption>
<BaseQuizOption value="B" correct>B. 지정된 키에 대한 값을 제거하고 반환합니다</BaseQuizOption>
<BaseQuizOption value="C">C. 값을 반환하기만 하고 제거하지는 않습니다</BaseQuizOption>
<BaseQuizOption value="D">D. 딕셔너리의 모든 항목을 제거합니다</BaseQuizOption>
<BaseQuizAnswer><code>pop()</code> 메서드는 지정된 키에 대한 키 - 값 쌍을 제거하고 해당 값을 반환합니다. 키가 존재하지 않으면 (기본값을 제공하지 않는 한) <code>KeyError</code>를 발생시킵니다.</BaseQuizAnswer>
</BaseQuiz>

### popitem()

`popitem()` 메서드는 딕셔너리의 마지막 항목을 제거하고 반환합니다.

```python
wife = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
wife.popitem()
```

```output
('hair', 'brown')
```

```python
wife
```

```output
{'name': 'Rose', 'age': 33}
```

### del

`del` 메서드는 주어진 키를 기반으로 항목을 제거합니다.

```python
wife = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
del wife['age']
wife
```

```output
{'name': 'Rose', 'hair': 'brown'}
```

### clear()

`clear()` 메서드는 딕셔너리의 모든 항목을 제거합니다.

```python
wife = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
wife.clear()
wife
```

```output
{}
```

## 딕셔너리에서 키 확인하기

```python
person = {'name': 'Rose', 'age': 33}

'name' in person.keys()
```

```output
True
```

```python
'height' in person.keys()
```

```output
False
```

```python
'skin' in person # keys() 생략 가능
```

```output
False
```

## 딕셔너리에서 값 확인하기

```python
person = {'name': 'Rose', 'age': 33}

'Rose' in person.values()
```

```output
True
```

```python
33 in person.values()
```

```output
True
```

## 깔끔하게 출력하기 (Pretty Printing)

```python
import pprint

wife = {'name': 'Rose', 'age': 33, 'has_hair': True, 'hair_color': 'brown', 'height': 1.6, 'eye_color': 'brown'}
pprint.pprint(wife)
```

```output
{'age': 33,
 'eye_color': 'brown',
 'hair_color': 'brown',
 'has_hair': True,
 'height': 1.6,
 'name': 'Rose'}
```

## 두 딕셔너리 병합

Python 3.5 이상:

```python
dict_a = {'a': 1, 'b': 2}
dict_b = {'b': 3, 'c': 4}
dict_c = {**dict_b, **dict_a}
dict_c
```

```output
{'b': 2, 'c': 4, 'a': 1}
```

<BaseQuiz id="cheatsheet-dictionaries-2" correct="B">
<template #question>
<code>{**dict_b, **dict_a}</code>를 사용하여 두 딕셔너리를 병합할 때, 두 딕셔너리에 동일한 키가 있으면 어떻게 되나요?
</template>

<BaseQuizOption value="A">A. <code>dict_b</code>의 값이 <code>dict_a</code>의 값을 덮어씁니다</BaseQuizOption>
<BaseQuizOption value="B" correct>B. <code>dict_a</code>의 값이 <code>dict_b</code>의 값을 덮어씁니다</BaseQuizOption>
<BaseQuizOption value="C">C. 두 값이 리스트로 유지됩니다</BaseQuizOption>
<BaseQuizOption value="D">D. 오류가 발생합니다</BaseQuizOption>
<BaseQuizAnswer><code>\*\*</code> 언패킹 연산자를 사용하여 딕셔너리를 병합할 때, 두 딕셔너리에 동일한 키가 있으면 나중에 오는 딕셔너리 (이 경우 <code>dict_a</code>) 의 값이 이전 딕셔너리의 값을 덮어씁니다.</BaseQuizAnswer>
</BaseQuiz>

## 관련 링크

- <router-link to="/blog/python-data-types">Python 데이터 타입 블로그 게시물</router-link>
- <router-link to="/blog/python-easy-args-kwargs">Python \*args 및 \*\*kwargs 쉽게 사용하기</router-link>
- <router-link to="/cheatsheet/comprehensions">컴프리헨션</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">Args 및 Kwargs</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Python 컴프리헨션 단계별 가이드</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
