---
title: '파이썬 리스트 및 튜플 - 파이썬 치트 시트'
description: '파이썬에서 리스트는 데이터를 저장하는 4 가지 자료형 중 하나입니다.'
labUrl: 'https://labex.io/ko/labs/python-python-lists-and-tuples-633660?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 리스트
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

리스트는 Python 의 4 가지 데이터 타입 중 하나로, 데이터 모음을 저장하는 데 사용됩니다.

```python
# List: 대괄호로 묶인 항목들의 순서가 있는 모음
['John', 'Peter', 'Debora', 'Charles']
```

## 인덱스를 사용하여 값 가져오기

```python
# 인덱스를 사용하여 리스트 요소에 접근 (0 부터 시작, 첫 번째 요소는 인덱스 0)
furniture = ['table', 'chair', 'rack', 'shelf']

furniture[0]  # 첫 번째 요소 반환: 'table'
```

Output:

```plaintext
'table'
```

```python
furniture[1]
```

Output:

```plaintext
'chair'
```

```python
furniture[2]
```

Output:

```plaintext
'rack'
```

```python
furniture[3]
```

Output:

```plaintext
'shelf'
```

## 음수 인덱스

```python
# 음수 인덱스: 리스트 끝에서부터 요소에 접근
furniture = ['table', 'chair', 'rack', 'shelf']

furniture[-1]  # 마지막 요소 반환: 'shelf'
```

Output:

```plaintext
'shelf'
```

```python
furniture[-3]
```

Output:

```plaintext
'chair'
```

```python
f'The {furniture[-1]} is bigger than the {furniture[-3]}'
```

Output:

```plaintext
'The shelf is bigger than the chair'
```

## 슬라이싱으로 하위 리스트 가져오기

```python
# Slicing: [start:end] 구문을 사용하여 하위 리스트 가져오기 (end 는 미포함)
furniture = ['table', 'chair', 'rack', 'shelf']

furniture[0:4]  # 인덱스 0 부터 3 까지의 요소 반환 (4 는 제외)
```

Output:

```plaintext
['table', 'chair', 'rack', 'shelf']
```

```python
furniture[1:3]
```

Output:

```plaintext
['chair', 'rack']
```

```python
furniture[0:-1]
```

Output:

```plaintext
['table', 'chair', 'rack']
```

```python
# 시작부터 슬라이싱: 시작 인덱스 생략 (기본값은 0)
furniture[:2]  # 처음 두 요소 반환
```

Output:

```plaintext
['table', 'chair']
```

```python
# 끝까지 슬라이싱: 끝 인덱스 생략 (기본값은 리스트의 끝)
furniture[1:]  # 인덱스 1 부터 끝까지의 모든 요소 반환
```

Output:

```plaintext
['chair', 'rack', 'shelf']
```

```python
furniture[:]
```

Output:

```plaintext
['table', 'chair', 'rack', 'shelf']
```

전체 리스트를 슬라이싱하면 복사가 수행됩니다:

```python
# 슬라이싱은 복사본을 생성합니다: [:] 는 리스트의 얕은 복사본을 생성합니다
spam = ['cat', 'bat', 'rat', 'elephant']
spam2 = spam[:]  # 참조가 아닌 복사본 생성
spam2
```

Output:

```plaintext
['cat', 'bat', 'rat', 'elephant']
```

```python
spam.append('dog')
spam
```

Output:

```plaintext
['cat', 'bat', 'rat', 'elephant', 'dog']
```

```python
spam2
```

Output:

```plaintext
['cat', 'bat', 'rat', 'elephant']
```

## len() 으로 리스트 길이 가져오기

```python
# len() 은 리스트의 항목 수를 반환합니다
furniture = ['table', 'chair', 'rack', 'shelf']
len(furniture)  # 4 반환
```

Output:

```plaintext
4
```

## 인덱스를 사용하여 값 변경하기

```python
# 인덱스에 새 값을 할당하여 리스트 요소 수정
furniture = ['table', 'chair', 'rack', 'shelf']

furniture[0] = 'desk'  # 첫 번째 요소 교체
furniture
```

Output:

```plaintext
['desk', 'chair', 'rack', 'shelf']
```

```python
furniture[2] = furniture[1]
furniture
```

Output:

```plaintext
['desk', 'chair', 'chair', 'shelf']
```

```python
furniture[-1] = 'bed'
furniture
```

Output:

```plaintext
['desk', 'chair', 'chair', 'bed']
```

## 연결 및 반복

```python
# 리스트 연결: + 연산자를 사용하여 두 리스트 결합
[1, 2, 3] + ['A', 'B', 'C']  # [1, 2, 3, 'A', 'B', 'C'] 반환
```

Output:

```plaintext
[1, 2, 3, 'A', 'B', 'C']
```

```python
# 리스트 반복: * 연산자를 사용하여 리스트를 여러 번 반복
['X', 'Y', 'Z'] * 3  # ['X', 'Y', 'Z', 'X', 'Y', 'Z', 'X', 'Y', 'Z'] 반환
```

Output:

```plaintext
['X', 'Y', 'Z', 'X', 'Y', 'Z', 'X', 'Y', 'Z']
```

```python
my_list = [1, 2, 3]
my_list = my_list + ['A', 'B', 'C']
my_list
```

Output:

```plaintext
[1, 2, 3, 'A', 'B', 'C']
```

## for 루프와 리스트 사용하기

```python
# for 루프를 사용하여 리스트 요소 반복
furniture = ['table', 'chair', 'rack', 'shelf']

for item in furniture:  # 각 항목을 순회
    print(item)
```

Output:

```plaintext
table
chair
rack
shelf
```

## enumerate() 로 루프에서 인덱스 가져오기

```python
# enumerate() 는 루프에서 인덱스와 값을 모두 반환합니다
furniture = ['table', 'chair', 'rack', 'shelf']

for index, item in enumerate(furniture):  # 인덱스와 항목을 함께 가져옴
    print(f'index: {index} - item: {item}')
```

Output:

```plaintext
index: 0 - item: table
index: 1 - item: chair
index: 2 - item: rack
index: 3 - item: shelf
```

## zip() 으로 여러 리스트 루프 돌기

```python
# zip() 은 여러 리스트의 요소를 요소별로 결합합니다
furniture = ['table', 'chair', 'rack', 'shelf']
price = [100, 50, 80, 40]

for item, amount in zip(furniture, price):  # 두 리스트의 요소를 쌍으로 묶음
    print(f'The {item} costs ${amount}')
```

Output:

```plaintext
The table costs $100
The chair costs $50
The rack costs $80
The shelf costs $40
```

## in 및 not in 연산자

```python
# in 연산자: 항목이 리스트에 있는지 확인
'rack' in ['table', 'chair', 'rack', 'shelf']  # True 반환
```

Output:

```plaintext
True
```

```python
'bed' in ['table', 'chair', 'rack', 'shelf']
```

Output:

```plaintext
False
```

```python
furniture = ['table', 'chair', 'rack', 'shelf']
'bed' not in furniture
```

Output:

```plaintext
True
```

```python
'rack' not in furniture
```

Output:

```plaintext
False
```

## 다중 할당 트릭

다중 할당 트릭은 한 줄의 코드로 리스트의 여러 변수에 값을 할당할 수 있는 바로 가기 방법입니다. 따라서 다음과 같이 하는 대신:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
table = furniture[0]
chair = furniture[1]
rack = furniture[2]
shelf = furniture[3]
```

다음과 같이 코드를 입력할 수 있습니다:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
table, chair, rack, shelf = furniture

table
```

Output:

```plaintext
'table'
```

```python
chair
```

Output:

```plaintext
'chair'
```

```python
rack
```

Output:

```plaintext
'rack'
```

```python
shelf
```

Output:

```plaintext
'shelf'
```

다중 할당 트릭은 두 변수의 값을 교환하는 데에도 사용될 수 있습니다:

```python
a, b = 'table', 'chair'
a, b = b, a
print(a)
```

Output:

```plaintext
chair
```

```python
print(b)
```

Output:

```plaintext
table
```

## index 메서드

`index` 메서드는 값의 이름을 전달하여 해당 값의 인덱스를 찾을 수 있게 해줍니다:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
furniture.index('chair')
```

Output:

```plaintext
1
```

## 값 추가하기

### append()

`append`는 `list`의 끝에 요소를 추가합니다:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
furniture.append('bed')
furniture
```

Output:

```plaintext
['table', 'chair', 'rack', 'shelf', 'bed']
```

### insert()

`insert`는 주어진 위치에 요소를 `list`에 추가합니다:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
furniture.insert(1, 'bed')
furniture
```

Output:

```plaintext
['table', 'bed', 'chair', 'rack', 'shelf']
```

## 값 제거하기

### del()

`del`은 인덱스를 사용하여 항목을 제거합니다:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
del furniture[2]
furniture
```

Output:

```plaintext
['table', 'chair', 'shelf']
```

```python
del furniture[2]
furniture
```

Output:

```plaintext
['table', 'chair']
```

### remove()

`remove`는 실제 값을 사용하여 항목을 제거합니다:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
furniture.remove('chair')
furniture
```

Output:

```plaintext
['table', 'rack', 'shelf']
```

<base-warning>
  <base-warning-title>
    반복되는 항목 제거
  </base-warning-title>
  <base-warning-content>
    값이 리스트에 여러 번 나타나면 해당 값의 첫 번째 인스턴스만 제거됩니다.
  </base-warning-content>
</base-warning>

### pop()

기본적으로 `pop`은 리스트의 마지막 항목을 제거하고 반환합니다. 선택적 매개변수로 제거할 요소의 인덱스를 전달할 수도 있습니다:

```python
animals = ['cat', 'bat', 'rat', 'elephant']

animals.pop()
```

Output:

```plaintext
'elephant'
```

```python
animals
```

Output:

```plaintext
['cat', 'bat', 'rat']
```

```python
animals.pop(0)
```

Output:

```plaintext
'cat'
```

```python
animals
```

Output:

```plaintext
['bat', 'rat']
```

## sort() 로 값 정렬하기

```python
numbers = [2, 5, 3.14, 1, -7]
numbers.sort()
numbers
```

Output:

```plaintext
[-7, 1, 2, 3.14, 5]
```

```python
furniture = ['table', 'chair', 'rack', 'shelf']
furniture.sort()
furniture
```

Output:

```plaintext
['chair', 'rack', 'shelf', 'table']
```

`reverse` 키워드 인수에 `True`를 전달하여 `sort()`가 값을 역순으로 정렬하도록 할 수도 있습니다:

```python
furniture.sort(reverse=True)
furniture
```

Output:

```plaintext
['table', 'shelf', 'rack', 'chair']
```

정규 알파벳 순서로 값을 정렬해야 하는 경우, sort() 메서드 호출에서 key 키워드 인수에 `str.lower`를 전달합니다:

```python
letters = ['a', 'z', 'A', 'Z']
letters.sort(key=str.lower)
letters
```

Output:

```plaintext
['a', 'A', 'z', 'Z']
```

내장 함수 `sorted`를 사용하여 새 리스트를 반환할 수 있습니다:

```python
furniture = ['table', 'chair', 'rack', 'shelf']
sorted(furniture)
```

Output:

```plaintext
['chair', 'rack', 'shelf', 'table']
```

## 튜플 데이터 타입

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://stackoverflow.com/questions/1708510/list-vs-tuple-when-to-use-each">튜플 대 리스트</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    튜플과 리스트의 주요 차이점은 <code>튜플</code>은 <i>불변 (immutable)</i> 객체인 반면 <code>리스트</code>는 <i>가변 (mutable)</i> 객체라는 것입니다. 이는 튜플은 변경할 수 없지만 리스트는 수정할 수 있음을 의미합니다. 튜플은 리스트보다 메모리 효율성이 더 좋습니다.
  </base-disclaimer-content>
</base-disclaimer>

```python
furniture = ('table', 'chair', 'rack', 'shelf')

furniture[0]
```

Output:

```plaintext
'table'
```

```python
furniture[1:3]
```

Output:

```plaintext
('chair', 'rack')
```

```python
len(furniture)
```

Output:

```plaintext
4
```

튜플이 리스트와 다른 주된 방식은 튜플이 문자열처럼 불변이라는 것입니다.

## list() 와 tuple() 간 변환

```python
tuple(['cat', 'dog', 5])
```

Output:

```plaintext
('cat', 'dog', 5)
```

```python
list(('cat', 'dog', 5))
```

Output:

```plaintext
['cat', 'dog', 5]
```

```python
list('hello')
```

Output:

```plaintext
['h', 'e', 'l', 'l', 'o']
```

## 관련 링크

- <router-link to="/blog/python-data-types">Python 데이터 타입: 초보자를 위한 시각적 가이드</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Python Comprehensions 단계별 가이드</router-link>
- <router-link to="/cheatsheet/comprehensions">Python Comprehensions</router-link>
- <router-link to="/modules/itertools-module">itertools 모듈</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/len">len()</router-link>
