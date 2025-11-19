---
title: 'Python 내장 함수 type() - Python 치트 시트'
description: '인수가 하나일 때 객체의 타입을 반환합니다. 반환 값은 타입 객체이며 일반적으로 object.__class__가 반환하는 객체와 동일합니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python type() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#type">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
    인수가 하나일 경우, 객체의 타입을 반환합니다. 반환 값은 타입 객체이며 일반적으로 object.__class__에 의해 반환되는 객체와 동일합니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

Python 의 `type()` 함수는 객체의 타입을 반환하는 내장 함수입니다. 이는 Python 에서 다루는 데이터 유형을 이해하는 데 필수적인 도구입니다.

## 예시

```python
type('span')
type(99)
type(1.1)
type([1, 2])
type((1, 2))
type({1, 2})
type({'a': 1, 'b': 2})
```

```output
<class 'str'>
<class 'int'>
<class 'float'>
<class 'list'>
<class 'tuple'>
<class 'set'>
<class 'dict'>
```

## 관련 링크

- <router-link to="/blog/python-data-types/">Python 데이터 유형</router-link>
- <router-link to="/builtin/isinstance/">isinstance()</router-link>
- <router-link to="/builtin/issubclass/">issubclass()</router-link>
- <router-link to="/builtin/str/">str()</router-link>
- <router-link to="/builtin/int/">int()</router-link>
- <router-link to="/builtin/float/">float()</router-link>
- <router-link to="/builtin/list/">list()</router-link>
- <router-link to="/builtin/tuple/">tuple()</router-link>
- <router-link to="/builtin/dict/">dict()</router-link>
- <router-link to="/builtin/set/">set()</router-link>
