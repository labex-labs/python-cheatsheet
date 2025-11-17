---
title: 'Python 내장 함수 iter() - Python 치트 시트'
description: '반복자 객체를 반환합니다. 첫 번째 인수는 두 번째 인수의 유무에 따라 매우 다르게 해석됩니다. 두 번째 인수가 없으면, object 는 반복 가능 프로토콜을 지원하는 컬렉션 객체이거나 시퀀스 프로토콜을 지원해야 합니다. 둘 중 어느 것도 지원하지 않으면 TypeError 가 발생합니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python iter() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#iter">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   반복자 (iterator) 객체를 반환합니다. 첫 번째 인수는 두 번째 인수의 존재 여부에 따라 매우 다르게 해석됩니다. 두 번째 인수가 없으면, object 는 반복 가능한 프로토콜을 지원하는 컬렉션 객체이거나 시퀀스 프로토콜을 지원해야 합니다. 둘 중 하나의 프로토콜도 지원하지 않으면 TypeError 가 발생합니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

`iter()` 함수는 반복자 객체를 반환합니다. 반복자는 반복 (루프) 할 수 있는 객체입니다. 이는 Python 에서 `for` 루프를 구동하는 요소입니다.

`iter()`를 사용하여 리스트, 튜플 또는 문자열과 같은 모든 반복 가능한 객체에서 반복자를 가져올 수 있습니다.

### 예시

**리스트에서 반복자 가져오기:**

```python
my_list = [1, 2, 3]
my_iter = iter(my_list)

print(next(my_iter))
print(next(my_iter))
print(next(my_iter))
```

출력:

```plaintext
1
2
3
```

```python
i = iter([1, 2, 3])
print(i)
print(i.__next__())
print(i.__next__())
print(i.__next__())
```

출력:

```plaintext
<list_iterator object at 0x7f93158badc0>
1
2
3
```

## 관련 링크

- <router-link :to="'/builtin/next'">`next()`</router-link>
- <router-link :to="'/cheatsheet/control-flow'">제어 흐름</router-link>
- <router-link :to="'/cheatsheet/lists-and-tuples'">리스트와 튜플</router-link>
- <router-link :to="'/builtin/enumerate'">`enumerate()`</router-link>
- <router-link :to="'/builtin/zip'">`zip()`</router-link>
- <router-link :to="'/builtin/map'">`map()`</router-link>
- <router-link :to="'/builtin/filter'">`filter()`</router-link>
