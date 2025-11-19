---
title: 'Python 내장 함수 globals() - 파이썬 치트 시트'
description: '현재 모듈 네임스페이스를 구현하는 딕셔너리를 반환합니다. 함수 내 코드의 경우, 함수가 정의될 때 설정되며 호출 위치에 관계없이 동일하게 유지됩니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python globals() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#globals">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   현재 모듈 네임스페이스를 구현하는 딕셔너리를 반환합니다. 함수 내 코드의 경우, 이 딕셔너리는 함수가 정의될 때 설정되며 함수가 호출되는 위치에 관계없이 동일하게 유지됩니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

Python 의 `globals()` 함수는 현재 전역 심볼 테이블을 나타내는 딕셔너리를 반환합니다. 여기에는 현재 범위 내의 모든 전역 변수, 함수 및 기타 객체가 포함됩니다.

이는 전역 네임스페이스를 검사하거나 문자열 이름으로 전역 변수에 동적으로 액세스할 때 유용할 수 있습니다.

### 예시

```python
# 전역 변수 정의
global_var = "I am global"

def my_function():
    # globals() 를 사용하여 전역 변수 액세스
    global_dict = globals()
    print(global_dict["global_var"])

    # 전역 변수 수정
    global_dict["global_var"] = "Modified global"

my_function()
print(global_var)
```

```output
I am global
Modified global
```

또한 함수 내에서 `globals()`를 사용하여 새 전역 변수를 만들 수도 있습니다.

```python
def create_global():
    globals()["new_global"] = "This was created dynamically"

create_global()
print(new_global)
```

```output
This was created dynamically
```

## 관련 링크

- <router-link :to="'/builtin/locals'">`locals()`</router-link>
- <router-link :to="'/builtin/dir'">`dir()`</router-link>
- <router-link :to="'/builtin/exec'">`exec()`</router-link>
- <router-link :to="'/builtin/eval'">`eval()`</router-link>
- <router-link :to="'/cheatsheet/functions'">함수</router-link>
