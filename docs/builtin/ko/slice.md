---
title: 'Python slice() 내장 함수 - 파이썬 치트 시트'
description: 'range(start, stop, step) 으로 지정된 인덱스 집합을 나타내는 슬라이스 객체를 반환합니다. start 및 step 인수는 기본적으로 None 입니다. 슬라이스 객체는 읽기 전용 데이터 속성인 start, stop, step 을 가지며, 이는 단순히 인자 값 (또는 기본값) 을 반환합니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python slice() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#slice">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   range(start, stop, step) 으로 지정된 인덱스 집합을 나타내는 slice 객체를 반환합니다. start 및 step 인수는 기본적으로 None 입니다. Slice 객체에는 start, stop, step 이라는 읽기 전용 데이터 속성이 있으며, 이는 단순히 인수를 (또는 기본값을) 반환합니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

Python 의 `slice()` 함수는 리스트, 튜플 또는 문자열과 같은 시퀀스를 슬라이싱하는 데 사용할 수 있는 슬라이스 객체를 반환합니다. 슬라이스 객체는 `start`, `stop`, `step`으로 지정된 인덱스 집합을 나타냅니다.

## 예시

```python
furniture = ['table', 'chair', 'rack', 'shelf']

print(furniture[0:4])
print(furniture[1:3])
print(furniture[0:-1])
print(furniture[:2])
print(furniture[1:])
print(furniture[:])
```

출력:

```plaintext
['table', 'chair', 'rack', 'shelf']
['chair', 'rack']
['table', 'chair', 'rack']
['table', 'chair']
['chair', 'rack', 'shelf']
['table', 'chair', 'rack', 'shelf']
```

전체 리스트를 슬라이싱하면 복사가 수행됩니다:

```python
spam = ['cat', 'bat', 'rat', 'elephant']
spam2 = spam[:]
print(spam2)

spam.append('dog')
print(spam)
print(spam2)
```

출력:

```plaintext
['cat', 'bat', 'rat', 'elephant']
['cat', 'bat', 'rat', 'elephant', 'dog']
['cat', 'bat', 'rat', 'elephant']
```

## 관련 링크

- <router-link to="/cheatsheet/lists-and-tuples">치트시트: 리스트 및 튜플</router-link>
- <router-link to="/cheatsheet/manipulating-strings">치트시트: 문자열 조작</router-link>
- <router-link to="/cheatsheet/comprehensions">치트시트: 컴프리헨션</router-link>
- <router-link to="/modules/itertools-module">모듈: itertools (islice)</router-link>
- <router-link to="/builtin/range">range()</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/reversed">reversed()</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/enumerate">enumerate()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/map">map()</router-link>
- <router-link to="/builtin/filter">filter()</router-link>
