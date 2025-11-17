---
title: 'Python 내장 함수 locals() - Python 치트 시트'
description: '현재 지역 기호 테이블을 나타내는 딕셔너리를 업데이트하고 반환합니다. locals() 는 함수 블록에서 호출될 때 자유 변수를 반환하지만 클래스 블록에서는 반환하지 않습니다. 모듈 수준에서는 locals() 와 globals() 가 동일한 딕셔너리임을 유의하십시오.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python locals() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#locals">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   현재 로컬 심볼 테이블을 나타내는 딕셔너리를 업데이트하고 반환합니다. locals() 는 함수 블록에서 호출될 때 자유 변수를 반환하지만, 클래스 블록에서는 반환하지 않습니다. 모듈 수준에서는 locals() 와 <router-link to="/builtin/globals">globals()</router-link>가 동일한 딕셔너리라는 점에 유의하십시오.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

`locals()` 함수는 현재 로컬 심볼 테이블을 나타내는 딕셔너리를 반환합니다. 여기에는 현재 범위 내의 모든 로컬 변수, 인수 및 기타 객체가 포함됩니다.

이는 로컬 네임스페이스를 검사하는 데 유용한 도구입니다.

### 예시

```python
def my_function(arg1, arg2):
    local_var = "I am local"
    print(locals())

my_function("hello", "world")
```

출력:

```plaintext
{'arg1': 'hello', 'arg2': 'world', 'local_var': 'I am local'}
```

## 관련 링크

- <router-link to="/cheatsheet/debugging">치트 시트: 디버깅</router-link>
- <router-link to="/cheatsheet/functions">치트 시트: 함수</router-link>
- <router-link to="/cheatsheet/dictionaries">치트 시트: 딕셔너리</router-link>
- <router-link to="/builtin/globals">globals()</router-link>
- <router-link to="/builtin/dir">dir()</router-link>
