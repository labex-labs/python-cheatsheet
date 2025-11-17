---
title: 'Python max() 내장 함수 - Python 치트 시트'
description: '반복 가능한 객체 내의 가장 큰 항목 또는 두 개 이상의 인자 중 가장 큰 값을 반환합니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python max() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#max">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   반복 가능한 (iterable) 객체 내의 가장 큰 항목 또는 두 개 이상의 인자 중 가장 큰 것을 반환합니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

`max()` 함수는 두 가지 방식으로 사용될 수 있습니다.

1. 반복 가능한 객체 (예: <router-link to="/builtin/list">리스트</router-link> 또는 <router-link to="/builtin/tuple">튜플</router-link>) 와 함께 사용하면 가장 큰 항목을 반환합니다.
2. 두 개 이상의 인자와 함께 사용하면 그중 가장 큰 것을 반환합니다.

### 예시

**반복 가능한 객체에서 최댓값 찾기:**

```python
numbers = [1, 2, 10, 40, 5]
print(max(numbers))

letters = ('a', 'b', 'z')
print(max(letters))
```

출력:

```plaintext
40
z
```

**여러 인자 중 최댓값 찾기:**

```python
print(max(10, 20, 5))
```

출력:

```plaintext
20
```

## 관련 링크

- <router-link to="/cheatsheet/lists-and-tuples">치트 시트: 리스트와 튜플</router-link>
- <router-link to="/builtin/min">min()</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/sum">sum()</router-link>
