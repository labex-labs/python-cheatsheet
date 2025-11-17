---
title: 'Python compile() 내장 함수 - Python 치트 시트'
description: '소스 코드를 코드 또는 AST 객체로 컴파일합니다. 코드 객체는 exec() 또는 eval() 로 실행할 수 있습니다. source 는 일반 문자열, 바이트 문자열 또는 AST 객체일 수 있습니다. AST 객체 작업 방법은 ast 모듈 설명서를 참조하십시오.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python compile() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#compile">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   소스 코드를 코드 객체 또는 AST 객체로 컴파일합니다. 코드 객체는 <router-link to="/builtin/exec">exec()</router-link> 또는 <router-link to="/builtin/eval">eval()</router-link>로 실행될 수 있습니다. source 는 일반 문자열, 바이트 문자열 또는 AST 객체일 수 있습니다. AST 객체 작업 방법에 대한 정보는 ast 모듈 설명서를 참조하십시오.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

Python 의 `compile()` 함수는 문자열 또는 추상 구문 트리 (AST) 객체를 코드 객체로 변환하는 데 사용되는 내장 함수입니다. 이 코드 객체는 <router-link to="/builtin/exec">exec()</router-link> 또는 <router-link to="/builtin/eval">eval()</router-link>와 같은 함수로 실행될 수 있습니다.

## 예시

작동 방식에 대한 기본 예시는 다음과 같습니다.

```python
code_string = """
def hello_world():
    print('Hello, world!')

hello_world()
"""

# 문자열을 코드 객체로 컴파일
# 'exec' 모드는 일련의 문장에 사용됩니다.
# 'eval' 모드는 단일 표현식에 사용됩니다.
# 'single' 모드는 단일 대화형 문장에 사용됩니다.
code_object = compile(code_string, '<string>', 'exec')

# 코드 객체 실행
exec(code_object)
```

출력:

```plaintext
Hello, world!
```

## 관련 링크

- <router-link to="/cheatsheet/debugging">치트 시트: 디버깅</router-link>
- <router-link to="/builtin/exec">exec()</router-link>
- <router-link to="/builtin/eval">eval()</router-link>
- <router-link to="/builtin/breakpoint">breakpoint()</router-link>
