---
title: 'Python 내장 함수 min() - Python 치트 시트'
description: '반복 가능한 객체 내의 가장 작은 항목 또는 두 개 이상의 인자 중 가장 작은 값을 반환합니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python min() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#min">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   반복 가능한 객체 내의 가장 작은 항목 또는 두 개 이상의 인자 중 가장 작은 것을 반환합니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

`min()` 함수는 <router-link to="/builtin/max">max()</router-link>의 대응 함수입니다. 두 가지 방식으로 사용할 수 있습니다.

1. 반복 가능한 객체 (예: <router-link to="/builtin/list">리스트</router-link> 또는 <router-link to="/builtin/tuple">튜플</router-link>) 와 함께 사용하면 가장 작은 항목을 반환합니다.
2. 두 개 이상의 인자와 함께 사용하면 그중 가장 작은 것을 반환합니다.

### 예시

**반복 가능한 객체에서 최솟값 찾기:**

```python
numbers = [10, 2, 1, 40, 5]
print(min(numbers))

letters = ('z', 'b', 'a')
print(min(letters))
```

출력:

```plaintext
1
a
```

**여러 인자 중 최솟값 찾기:**

```python
print(min(10, 20, 5))
```

출력:

```plaintext
5
```

## 관련 링크

- <router-link to="/cheatsheet/lists-and-tuples">치트 시트: 리스트 및 튜플</router-link>
- <router-link to="/builtin/max">max()</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/sum">sum()</router-link>
