---
title: 'Python reversed() 내장 함수 - Python 치트 시트'
description: '__reversed__() 메서드를 갖거나 시퀀스 프로토콜을 지원하는 객체 (len() 및 정수 인수로 시작하는 getitem() 메서드) 에 대한 역방향 반복자를 반환합니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python reversed() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#reversed">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   역순 반복자 (reverse iterator) 를 반환합니다. seq 는 __reversed__() 메서드를 가지거나 시퀀스 프로토콜 (__len__() 메서드와 0 부터 시작하는 정수 인수를 사용하는 __getitem__() 메서드) 을 지원하는 객체여야 합니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

`reversed()` 함수는 역순 반복자를 반환합니다. 이는 시퀀스 (예: <router-link to="/builtin/list">리스트</router-link>, <router-link to="/builtin/tuple">튜플</router-link> 또는 <router-link to="/builtin/str">문자열</router-link>) 를 역순으로 반복하는 데 사용할 수 있음을 의미합니다. 원본 시퀀스를 수정하지 않고 대신 끝에서 시작까지 항목을 생성하는 새 반복자를 제공합니다.

### 예시

역순 리스트를 얻으려면 반복자를 리스트로 변환할 수 있습니다.

```python
my_list = [1, 2, 3, 4, 5]
reversed_list = list(reversed(my_list))
print(reversed_list)
```

출력:

```plaintext
[5, 4, 3, 2, 1]
```

`for` 루프에서 직접 반복할 수도 있습니다.

```python
for char in reversed("hello"):
    print(char)
```

출력:

```plaintext
o
l
l
e
h
```

다음은 반복자 동작을 보여주는 또 다른 예시입니다.

```python
i = reversed([1, 2, 3])
print(next(i))
print(next(i))
print(next(i))
```

출력:

```plaintext
3
2
1
```

## 관련 링크

- <router-link to="/cheatsheet/control-flow">치트 시트: 제어 흐름 (for 루프)</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">치트 시트: 리스트 및 튜플</router-link>
- <router-link to="/builtin/sorted">sorted()</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/next">next()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
