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
    딕셔너리의 주요 작업은 특정 키로 값을 저장하고 주어진 키로 값을 추출하는 것입니다. 또한 <code>del</code>을 사용하여 키:값 쌍을 삭제하는 것도 가능합니다.
  </base-disclaimer-content>
</base-disclaimer>

예시 딕셔너리:

```python
# 딕셔너리: 키 - 값 쌍의 모음
my_cat = {
    'size': 'fat',          # 키: 'size', 값: 'fat'
    'color': 'gray',         # 키: 'color', 값: 'gray'
    'disposition': 'loud'    # 키: 'disposition', 값: 'loud'
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

출력:

```plaintext
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

출력:

```plaintext
fat
```

```python
print(my_cat['eye_color'])
```

출력:

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 'eye_color'
```

## values()

`values()` 메서드는 딕셔너리의 **값**을 가져옵니다:

```python
# .values() 메서드를 사용하여 딕셔너리 값 반복
pet = {'color': 'red', 'age': 42}
for value in pet.values():  # 모든 값 반복
    print(value)
```

출력:

```plaintext
red
42
```

## keys()

`keys()` 메서드는 딕셔너리의 **키**를 가져옵니다:

```python
# .keys() 메서드를 사용하여 딕셔너리 키 반복
pet = {'color': 'red', 'age': 42}
for key in pet.keys():  # 모든 키 반복
    print(key)
```

출력:

```plaintext
color
age
```

기본적으로 키를 반복하므로 **.keys()**를 사용할 필요가 없습니다:

```python
# 딕셔너리 직접 반복은 키를 반복합니다 (기본 동작)
pet = {'color': 'red', 'age': 42}
for key in pet:  # for key in pet.keys() 와 동일
    print(key)
```

출력:

```plaintext
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

출력:

```plaintext
('color', 'red')
('age', 42)
```

`keys()`, `values()`, `items()` 메서드를 사용하면 for 루프가 각각 키, 값 또는 키 - 값 쌍을 딕셔너리에서 반복할 수 있습니다.

```python
# .items() 메서드를 사용하여 키 - 값 쌍 반복
pet = {'color': 'red', 'age': 42}
for key, value in pet.items():  # 튜플을 키와 값으로 언패킹
    print(f'Key: {key} Value: {value}')
```

출력:

```plaintext
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

출력:

```plaintext
'My wife name is Rose'
```

```python
f'She is {wife.get("age")} years old.'
```

출력:

```plaintext
'She is 33 years old.'
```

```python
f'She is deeply in love with {wife.get("husband")}'
```

출력:

```plaintext
'She is deeply in love with None'
```

기본값인 `None`을 원하는 값으로 변경할 수도 있습니다:

```python
wife = {'name': 'Rose', 'age': 33}

f'She is deeply in love with {wife.get("husband", "lover")}'
```

출력:

```plaintext
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

출력:

```plaintext
{'name': 'Rose', 'age': 33, 'has_hair': True}
```

## 항목 제거

### pop()

`pop()` 메서드는 주어진 키를 기반으로 항목을 제거하고 반환합니다.

```python
wife = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
wife.pop('age')
```

출력:

```plaintext
33
```

```python
wife
```

출력:

```plaintext
{'name': 'Rose', 'hair': 'brown'}
```

### popitem()

`popitem()` 메서드는 딕셔너리의 마지막 항목을 제거하고 반환합니다.

```python
wife = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
wife.popitem()
```

출력:

```plaintext
('hair', 'brown')
```

```python
wife
```

출력:

```plaintext
{'name': 'Rose', 'age': 33}
```

### del()

`del()` 메서드는 주어진 키를 기반으로 항목을 제거합니다.

```python
wife = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
del wife['age']
wife
```

출력:

```plaintext
{'name': 'Rose', 'hair': 'brown'}
```

### clear()

`clear()` 메서드는 딕셔너리의 모든 항목을 제거합니다.

```python
wife = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
wife.clear()
wife
```

출력:

```plaintext
{}
```

## 딕셔너리에서 키 확인

```python
person = {'name': 'Rose', 'age': 33}

'name' in person.keys()
```

출력:

```plaintext
True
```

```python
'height' in person.keys()
```

출력:

```plaintext
False
```

```python
'skin' in person # keys() 생략 가능
```

출력:

```plaintext
False
```

## 딕셔너리에서 값 확인

```python
person = {'name': 'Rose', 'age': 33}

'Rose' in person.values()
```

출력:

```plaintext
True
```

```python
33 in person.values()
```

출력:

```plaintext
True
```

## 깔끔하게 출력하기 (Pretty Printing)

```python
import pprint

wife = {'name': 'Rose', 'age': 33, 'has_hair': True, 'hair_color': 'brown', 'height': 1.6, 'eye_color': 'brown'}
pprint.pprint(wife)
```

출력:

```plaintext
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
dict_c = {**dict_a, **dict_b}
dict_c
```

출력:

```plaintext
{'a': 1, 'b': 3, 'c': 4}
```

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
