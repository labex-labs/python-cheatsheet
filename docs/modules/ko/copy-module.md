---
title: '파이썬 복사 모듈 - 파이썬 치트 시트'
description: '복사 모듈은 리스트, 객체, 배열 등의 다양한 요소를 복사하는 기능들의 집합입니다. 얕은 복사 (shallow copy) 와 깊은 복사 (deep copy) 모두 생성하는 데 사용될 수 있습니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 복사 모듈
</base-title>

Copy 모듈은 리스트, 객체, 배열 등의 다양한 요소를 복사하는 것과 관련된 함수들의 집합입니다. 얕은 복사 (shallow copies) 와 깊은 복사 (deep copies) 모두를 만드는 데 사용될 수 있습니다.

<base-disclaimer>
  <base-disclaimer-title>
    Python 3 <a target="_blank" href="https://docs.python.org/3/library/copy.html">문서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
    Python 의 할당문은 객체를 복사하지 않고, 대상과 객체 사이에 바인딩을 생성합니다. 변경 가능한 항목을 포함하거나 변경 가능한 항목으로 구성된 컬렉션의 경우, 한 복사본을 변경할 때 다른 복사본에 영향을 주지 않으려면 때때로 복사가 필요합니다. 이 모듈은 일반적인 <b>얕은 (shallow)</b> 및 <b>깊은 (deep)</b> 복사 작업을 제공합니다.
  </base-disclaimer-content>
</base-disclaimer>

## 얕은 복사 작업 (Shallow copy operations)

얕은 복사는 새로운 복합 객체를 구성한 다음 (가능한 범위 내에서) 원본에 있는 객체에 대한 참조를 그 안에 삽입합니다.

copy.copy(x)
x 의 얕은 복사본을 반환합니다.

```python
import copy
a = [[1],[2],[3]]
# 얕은 복사본 생성 (중첩된 리스트는 여전히 참조됨)
b = copy.copy(a)

a
```

출력:

```plaintext
[[1], [2], [3]]
```

```python
b
```

출력:

```plaintext
[[1], [2], [3]]
```

### copy 모듈을 가져오지 않으면 사용할 수 없습니다

출력:

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'copy' is not defined
```

## 깊은 복사 작업 (Deep copy operations)

깊은 복사는 새로운 복합 객체를 구성한 다음, 재귀적으로 원본에서 발견된 객체의 복사본을 그 안에 삽입합니다.

copy.deepcopy(x[, memo])
x 의 깊은 복사본을 반환합니다.

```python
import copy
a = [[1],[2],[3]]
# 깊은 복사본 생성 (완전히 독립적인 복사본)
b = copy.deepcopy(a)

# 원본 수정
a[0][0] = 0
a[1] = None

a
```

출력:

```plaintext
[[0], None, [3]]
```

```python
b
```

출력:

```plaintext
[[1], [2], [3]]
```

## 관련 링크 (Relevant links)

- <router-link to="/cheatsheet/oop-basics">치트시트: OOP 기본</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">치트시트: 리스트와 튜플</router-link>
- <router-link to="/cheatsheet/dictionaries">치트시트: 딕셔너리</router-link>
- <router-link to="/blog/python-data-types">블로그: Python 데이터 타입</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/slice">slice()</router-link>
