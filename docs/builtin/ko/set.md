---
title: 'Python set() 내장 함수 - Python 치트 시트'
description: '반복 가능한 요소에서 가져온 새 세트 객체를 반환합니다. set 은 내장 클래스입니다. 이 클래스에 대한 문서는 set 및 Set Types — set, frozenset 을 참조하십시오.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python set() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#set">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   새로운 set 객체를 반환합니다. 선택적으로 iterable 에서 요소를 가져올 수 있습니다. set 은 내장 클래스입니다. 이 클래스에 대한 설명서는 <router-link to="/cheatsheet/sets">set</router-link> 및 Set Types — set, frozenset 을 참조하십시오.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

`set()` 생성자는 새 set 을 생성합니다. set 은 고유한 요소들의 순서가 없는 컬렉션입니다. 빈 set 을 생성하거나 iterable 로부터 set 을 생성할 수 있습니다.

### 예시

**빈 set 생성:**

```python
my_set = set()
print(my_set)
```

출력:

```plaintext
set()
```

**리스트로부터 set 생성 (중복 제거):**

```python
my_list = [1, 2, 2, 3, 3, 3]
my_set = set(my_list)
print(my_set)
```

출력:

```plaintext
{1, 2, 3}
```

## 관련 링크

- <router-link to="/cheatsheet/sets">치트시트: Sets</router-link>
- <router-link to="/cheatsheet/comprehensions">치트시트: Comprehensions</router-link>
- <router-link to="/blog/python-sets-what-why-how">블로그: Python Sets - 무엇, 왜, 어떻게</router-link>
- <router-link to="/blog/python-data-types">블로그: Python 데이터 타입</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/frozenset">frozenset()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
