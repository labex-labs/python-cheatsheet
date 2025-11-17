---
title: 'Python sorted() 내장 함수 - Python 치트 시트'
description: '반복 가능한 (iterable) 항목에서 새 정렬된 리스트를 반환합니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python sorted() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#sorted">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   반복 가능한 (iterable) 객체의 항목들로 새 정렬된 리스트를 반환합니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

`sorted()` 함수는 반복 가능한 (iterable) 객체의 항목들로 새 정렬된 리스트를 반환합니다. 원본 반복 가능한 객체는 수정하지 않습니다.

`reverse` 매개변수를 사용하여 내림차순으로 정렬할 수도 있습니다.

### 예시

**숫자 리스트 정렬:**

```python
numbers = [3, 1, 4, 1, 5, 9, 2, 6]
sorted_numbers = sorted(numbers)
print(sorted_numbers)
```

출력:

```plaintext
[1, 1, 2, 3, 4, 5, 6, 9]
```

**문자열 리스트 정렬:**

```python
words = ["banana", "apple", "cherry"]
sorted_words = sorted(words)
print(sorted_words)
```

출력:

```plaintext
['apple', 'banana', 'cherry']
```

**역순 정렬:**

```python
numbers = [3, 1, 4, 1, 5, 9, 2, 6]
sorted_numbers_desc = sorted(numbers, reverse=True)
print(sorted_numbers_desc)
```

출력:

```plaintext
[9, 6, 5, 4, 3, 2, 1, 1]
```

## 관련 링크

- <router-link to="/cheatsheet/lists-and-tuples">치트 시트: 리스트와 튜플</router-link>
- <router-link to="/cheatsheet/dictionaries">치트 시트: 딕셔너리</router-link>
- <router-link to="/cheatsheet/functions">치트 시트: 함수 (key 인자 관련)</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/reversed">reversed()</router-link>
- <router-link to="/builtin/min">min()</router-link>
- <router-link to="/builtin/max">max()</router-link>
