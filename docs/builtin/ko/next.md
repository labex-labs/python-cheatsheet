---
title: 'Python next() 내장 함수 - Python 치트 시트'
description: '이터레이터의 __next__() 메서드를 호출하여 다음 항목을 검색합니다. 기본값이 제공되면 이터레이터가 소진될 때 반환되며, 그렇지 않으면 StopIteration 이 발생합니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python next() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#next">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   iterator 의 __next__() 메서드를 호출하여 다음 항목을 검색합니다. default 가 제공되면 iterator 가 소진되었을 때 반환되며, 그렇지 않으면 StopIteration 이 발생합니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

`next()` 함수는 iterator 에서 다음 항목을 검색합니다. iterator 가 소진되면 `StopIteration` 예외가 발생합니다.

iterator 가 소진되었을 때 반환될 기본값을 제공할 수도 있으며, 이렇게 하면 `StopIteration` 예외가 발생하지 않습니다.

### 예제

**iterator 와 함께 `next()` 사용:**

```python
my_list = [1, 2]
my_iter = iter(my_list)

print(next(my_iter))
print(next(my_iter))

try:
    print(next(my_iter))
except StopIteration:
    print("Iterator is exhausted")
```

출력:

```plaintext
1
2
Iterator is exhausted
```

**기본값과 함께 `next()` 사용:**

```python
my_iter = iter([1])
print(next(my_iter, "default"))
print(next(my_iter, "default"))
```

출력:

```plaintext
1
default
```

추가 예제:

```python
i = iter([1, 2, 3])
print(next(i))
print(next(i))
print(next(i))
```

출력:

```plaintext
1
2
3
```

## 관련 링크

- <router-link to="/cheatsheet/control-flow">치트 시트: 제어 흐름 (for 루프)</router-link>
- <router-link to="/modules/itertools-module">모듈: itertools</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
- <router-link to="/builtin/map">map()</router-link>
- <router-link to="/builtin/filter">filter()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
