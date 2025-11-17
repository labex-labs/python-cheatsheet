---
title: 'Python *args 및 **kwargs 쉽게 이해하기 - Python 치트 시트'
description: '*args 와 **kwargs 는 어려워 보일 수 있지만, 사실 이해하기 어렵지 않으며 함수에 많은 유연성을 부여할 수 있는 강력한 기능입니다.'
date: 'March 08, 2019'
updated: 'July 1, 2022'
tags: 'python, intermediate'
socialImage: '/blog/kwargs.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Python *args 및 **kwargs 쉽게 이해하기 - Python 치트 시트"
    description: "*args 와 **kwargs 는 어려워 보일 수 있지만, 사실 이해하기 어렵지 않으며 함수에 많은 유연성을 부여할 수 있는 강력한 기능입니다."
    date: "March 08, 2019"
    updated: "July 1, 2022"
    tags: "python, intermediate"
    socialImage: "/blog/kwargs.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="Python \*args 및 \*\*kwargs 쉽게 이해하기 - Python 치트 시트" />

당신은 어떤지 모르겠지만, 저는 `*args`와 `**kwargs`가 매개변수로 있는 함수를 볼 때마다 약간 두려움을 느꼈습니다. 저는 심지어 그게 뭔지도 모르면서 Django 로 백엔드 작업을 할 때 그것들을 "사용"해 본 적도 있습니다. 저처럼 독학으로 개발자가 되셨다면, 당신도 그런 경험이 있을 거라고 생각합니다.

몇 달 전, 저는 게으름을 멈추고 그것에 대해 조사하기로 결정했습니다. 놀랍게도, 인터프리터로 가지고 놀 때는 이해하기 쉬웠지만, 그것들에 대해 읽을 때는 그렇지 않았습니다. 저는 [args 와 kwargs](https://www.pythoncheatsheet.org/#args-and-kwargs)를 누군가가 저에게 설명해 주었으면 했을 방식으로 설명하려고 이 글을 썼습니다.

## 기본 사항 (Basics)

가장 먼저 알아야 할 것은 `*args`와 `**kwargs`를 사용하면 [함수 (function)](https://www.pythoncheatsheet.org/#Functions)를 호출할 때 정의되지 않은 수의 `인수 (arguments)`와 `키워드 (keywords)`를 전달할 수 있다는 것입니다.

```python
def some_function(*args, **kwargs):
    pass

# 임의의 수의 인수로 some_function 호출
some_function(arg1, arg2, arg3)

# 임의의 수의 키워드로 some_function 호출
some_function(key1=arg1, key2=arg2, key3=arg3)

# 인수와 키워드 모두 호출
some_function(arg, key1=arg1)

# 또는 아무것도 없이
some_function()
```

둘째, `args`와 `kwargs`라는 단어는 관례입니다. 이는 인터프리터가 부과하는 것이 아니라 파이썬 커뮤니티 내에서 좋은 관행으로 간주된다는 것을 의미합니다.

```python
# 이 함수는 아무 문제 없이 작동할 것입니다
def some_function(*arguments, **keywords):
    pass
```

<base-warning>
  <base-warning-title>
    관례에 대한 참고 사항
  </base-warning-title>
  <base-warning-content>
    위의 함수가 작동하더라도 그렇게 하지 마십시오. 관례는 당신과 당신의 프로젝트에 관심을 가질 수 있는 다른 사람들을 위해 읽기 쉬운 코드를 작성하도록 돕기 위해 존재합니다.
    다른 관례로는 4 칸 들여쓰기, 주석, 가져오기 (imports) 가 있습니다. <a target="_blank" href="https://www.python.org/dev/peps/pep-0008/">PEP 8 -- 파이썬 코드 스타일 가이드</a>를 읽는 것을 강력히 권장합니다.
  </base-warning-content>
</base-warning>

그렇다면 파이썬은 우리가 함수가 여러 인수와 키워드를 받아들이도록 해야 한다는 것을 어떻게 알까요? 네, 정답은 `*`와 `**` 연산자입니다.

이제 기본 사항을 다루었으니, 그것들을 가지고 작업해 봅시다 👊.

## args

이제 `*args`를 함수 매개변수로 사용하여 여러 인수를 전달하는 방법을 알았지만, 그것들을 어떻게 다룰까요? 쉽습니다. 모든 인수는 `args` 변수 안에 [튜플 (tuple)](https://www.pythoncheatsheet.org/#Tuple-Data-Type) 형태로 들어 있습니다.

```python
def some_function(*args):
    print(f'Arguments passed: {args} as {type(args)}')


some_function('arg1', 'arg2', 'arg3')
# Arguments passed: ('arg1', 'arg2', 'arg3') as <class 'tuple'>
```

반복문을 사용할 수 있습니다.

```python
def some_function(*args):
    for a in args:
        print(a)


some_function('arg1', 'arg2', 'arg3')
# arg1
# arg2
# arg3
```

인덱스로 요소에 접근할 수 있습니다.

```python
def some_function(*args):
    print(args[1])


some_function('arg1', 'arg2', 'arg3')  # arg2
```

슬라이싱:

```python
def some_function(*args):
    print(args[0:2])


some_function('arg1', 'arg2', 'arg3')
# ('arg1', 'arg2')
```

[튜플 (Tuple)](https://www.pythoncheatsheet.org/#Tuple-Data-Type)로 할 수 있는 모든 것을 `args`로 할 수 있습니다.

## kwargs

인수는 args 변수 안에 있는 반면, 키워드는 `kwargs` 안에 있지만, 이번에는 키가 키워드인 [딕셔너리 (dictionary)](https://www.pythoncheatsheet.org/#Dictionaries-and-Structuring-Data) 형태로 들어 있습니다.

```python
def some_function(**kwargs):
    print(f'keywords: {kwargs} as {type(kwargs)}')


some_function(key1='arg1', key2='arg2', key3='arg3')
# keywords: {'key1': 'arg1', 'key2': 'arg2', 'key3': 'arg3'} as <class 'dict'>
```

다시 말하지만, 우리는 `kwargs`로 어떤 [딕셔너리 (dictionary)](https://www.pythoncheatsheet.org/#Dictionaries-and-Structuring-Data)로 할 수 있는 것과 동일한 작업을 수행할 수 있습니다.

반복문 사용:

```python
def some_function(**kwargs):
    for key, value in kwargs.items():
        print(f'{key}: {value}')


some_function(key1='arg1', key2='arg2', key3='arg3')
# key1: arg1
# key2: arg2
# key3: arg3
```

`get()` 메서드 사용:

```python
def some_function(key, **kwargs):
    print(kwargs.get(key))


some_function('key3', key1='arg1', key2='arg2', key3='arg3')
# arg3
```

그리고 훨씬 더 [많습니다](https://www.pythoncheatsheet.org/#Dictionaries-and-Structuring-Data) =).

## 결론 (Conclusion)

`*args`와 `**kwargs`는 무서워 보일 수 있지만, 사실 이해하기가 그렇게 어렵지 않으며 함수에 많은 유연성을 부여하는 힘을 가지고 있습니다. [튜플 (tuples)](https://www.pythoncheatsheet.org/#Tuple-Data-Type)과 [딕셔너리 (dictionaries)](https://www.pythoncheatsheet.org/#Dictionaries-and-Structuring-Data)에 대해 알고 있다면, 바로 시작할 준비가 된 것입니다.

args 와 kwargs 로 가지고 놀고 싶으신가요? [이것](https://mybinder.org/v2/gh/wilfredinni/python-cheatsheet/master?filepath=jupyter_notebooks)은 시도해 볼 수 있는 온라인 Jupyter Notebook 입니다.

일부 예제는 비교적 최신 문자열 포맷팅 방식인 Python 3.6+ 의 f-string 을 사용합니다. [여기](https://www.pythoncheatsheet.org/#Formatted-String-Literals-or-f-strings)에서 이에 대해 더 읽어볼 수 있습니다.
