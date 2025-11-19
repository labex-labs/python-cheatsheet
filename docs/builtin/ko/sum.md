---
title: 'Python sum() 내장 함수 - 파이썬 치트 시트'
description: '왼쪽에서 오른쪽으로 합계 시작 값과 반복 가능한 항목들을 더하여 총합을 반환합니다. 반복 가능한 항목은 일반적으로 숫자여야 하며, 시작 값으로는 문자열을 사용할 수 없습니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python sum() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#func-sum">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
    합계는 start 값과 반복 가능한 (iterable) 항목들을 왼쪽에서 오른쪽으로 더하여 총합을 반환합니다. 반복 가능한 항목들은 보통 숫자이며, start 값으로는 문자열을 사용할 수 없습니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

`sum()` 함수는 반복 가능한 객체 (리스트 또는 튜플 등) 의 모든 항목들의 합계를 계산합니다. 선택적으로 `start` 값을 제공할 수 있으며, 이 값은 총합에 더해집니다.

### 예시

**숫자 리스트 합산:**

```python
numbers = [1, 2, 3, 4, 5]
print(sum(numbers))
```

```output
15
```

**시작 값과 함께 합산:**

```python
numbers = [1, 2, 3]
print(sum(numbers, 10))  # 10 + 1 + 2 + 3
```

```output
16
```

## 관련 링크

- <router-link to="/cheatsheet/lists-and-tuples">치트시트: 리스트와 튜플</router-link>
- <router-link to="/cheatsheet/comprehensions">치트시트: 컴프리헨션</router-link>
- <router-link to="/blog/python-data-types">블로그: Python 데이터 타입</router-link>
- <router-link to="/modules/itertools-module">모듈: itertools</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/min">min()</router-link>
- <router-link to="/builtin/max">max()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
