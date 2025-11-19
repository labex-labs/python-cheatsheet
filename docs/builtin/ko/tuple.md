---
title: 'Python tuple() 내장 함수 - Python 치트 시트'
description: 'tuple 은 함수라기보다는 튜플 및 시퀀스 유형 (list, tuple, range) 에 문서화된 변경 불가능한 시퀀스 유형입니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python tuple() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#tuple">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
    tuple 은 함수라기보다는 튜플 및 시퀀스 유형 — list, tuple, range 에 설명된 대로 실제로 불변 (immutable) 시퀀스 유형입니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

`tuple`은 기술적으로 타입이지만, 튜플을 생성하기 위해 함수처럼 사용될 수 있습니다. 튜플은 불변 시퀀스이므로 생성된 후에는 변경할 수 없습니다.

`tuple()` 생성자는 빈 튜플을 생성하거나 반복 가능한 객체 (예: 리스트) 를 튜플로 변환하는 데 사용될 수 있습니다.

### 예시

**빈 튜플 생성:**

```python
empty_tuple = tuple()
print(empty_tuple)
```

```output
()
```

**리스트로부터 튜플 생성:**

```python
my_list = [1, 2, 3]
my_tuple = tuple(my_list)
print(my_tuple)
```

```output
(1, 2, 3)
```

## 관련 링크

- <router-link to="/cheatsheet/lists-and-tuples">치트 시트: 리스트와 튜플</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">치트 시트: \*args 및 \*\*kwargs</router-link>
- <router-link to="/blog/python-data-types">블로그: Python 데이터 타입</router-link>
- <router-link to="/blog/python-easy-args-kwargs">블로그: \*args 및 \*\*kwargs 설명</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/reversed">reversed()</router-link>
- <router-link to="/builtin/enumerate">enumerate()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
