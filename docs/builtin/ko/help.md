---
title: 'Python 내장 함수 help() - Python 치트 시트'
description: '내장 도움말 시스템을 호출합니다. (이 함수는 대화형 사용을 위해 설계되었습니다.) 인수가 제공되지 않으면 인터프리터 콘솔에서 대화형 도움말 시스템이 시작됩니다. 인수가 문자열인 경우, 해당 문자열은 모듈, 함수, 클래스, 메서드, 키워드 또는 문서 주제의 이름으로 조회되어 콘솔에 도움말 페이지가 인쇄됩니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python help() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#help">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   내장 도움말 시스템을 호출합니다. (이 함수는 대화형 사용을 위해 고안되었습니다.) 인수가 제공되지 않으면 인터프리터 콘솔에서 대화형 도움말 시스템이 시작됩니다. 인수가 문자열인 경우, 해당 문자열은 모듈, 함수, 클래스, 메서드, 키워드 또는 문서 주제의 이름으로 조회되며 도움말 페이지가 콘솔에 인쇄됩니다.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Python 의 `help()` 함수는 Python 의 광범위한 도움말 시스템에 접근할 수 있게 해주는 내장 유틸리티입니다. 이는 대화형 탐색 및 학습에 특히 유용하며, Python 인터프리터 내에서 모듈, 함수, 클래스 및 키워드에 대한 문서를 직접 얻을 수 있게 해줍니다. 인자 없이 호출되면 대화형 도움말 세션을 시작하고, 그렇지 않으면 주어진 객체에 대한 도움말을 출력합니다.

## Examples

```python
help(type)
```

Output:

```plaintext
Help on class type in module builtins:

class type(object)
 |  type(object_or_name, bases, dict)
 |  type(object) -> the object's type
 |  type(name, bases, dict) -> a new type
 |
 |  Methods defined here:
 |
 |  __call__(self, /, *args, **kwargs)
 |      Call self as a function.
 |
 |  __delattr__(self, name, /)
 |      Implement delattr(self, name).
 |
 |  __dir__(self, /)
 |      Specialized __dir__ implementation for types.
 |
 |  __getattribute__(self, name, /)
 :
```

```python
help(str)
```

Output:

```plaintext
Help on class str in module builtins:

class str(object)
 |  str(object='') -> str
 |  str(bytes_or_buffer[, encoding[, errors]]) -> str
 |
 |  Create a new string object from the given object. If encoding or
 |  errors is specified, then the object must expose a data buffer
 |  that will be decoded using the given encoding and error handler.
 |  Otherwise, returns the result of object.__str__() (if defined)
 |  or repr(object).
 |  encoding defaults to sys.getdefaultencoding().
 |  errors defaults to 'strict'.
 |
 |  Methods defined here:
 :
```

```python
help(help)
```

Output:

```plaintext
Help on _Helper in module _sitebuiltins object:

class _Helper(builtins.object)
 |  Define the builtin 'help'.
 |
 |  This is a wrapper around pydoc.help that provides a helpful message
 |  when 'help' is typed at the Python interactive prompt.
 |
 |  Calling help() at the Python prompt starts an interactive help session.
 |  Calling help(thing) prints help for the python object 'thing'.
 |
 |  Methods defined here:
 |
 |  __call__(self, *args, **kwds)
 |      Call self as a function.
 :
```

## Relevant links

- <router-link :to="'/builtin/dir'">dir()</router-link>
- <router-link :to="'/builtin/globals'">globals()</router-link>
- <router-link :to="'/builtin/locals'">locals()</router-link>
- <router-link :to="'/builtin/type'">type()</router-link>
- <router-link :to="'/builtin/vars'">vars()</router-link>
- <router-link :to="'/cheatsheet/debugging'">Debugging</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP Basics</router-link>
