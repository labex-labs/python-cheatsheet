---
title: 'Python Args 및 Kwargs - Python 치트 시트'
description: 'args 와 kwargs 는 어려워 보일 수 있지만, 사실 이해하기 어렵지 않으며 함수에 유연성과 가독성을 부여하는 강력한 기능입니다.'
labUrl: 'https://labex.io/ko/labs/python-python-args-and-kwargs-633646?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Args 및 Kwargs
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a href="https://docs.python.org/3/tutorial/index.html">Python args and kwargs Made Easy</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    <code>*args</code>와 <code>**kwargs</code>는 무섭게 보일 수 있지만, 사실 이해하기 어렵지 않으며 함수에 많은 유연성을 부여할 수 있는 힘을 가지고 있습니다.
  </base-disclaimer-content>
</base-disclaimer>

더 깊은 소개를 원하시면 <router-link to="/blog/python-easy-args-kwargs">Python \*args 및 \*\*kwargs 쉽게 사용하기</router-link> 문서를 읽어보세요.

## Args 및 Kwargs

`*args`와 `**kwargs`를 사용하면 함수를 호출할 때 정의되지 않은 수의 인자 (arguments) 와 키워드 인자 (keywords) 를 전달할 수 있습니다.

```python
# 임의의 수의 위치 인수 및 키워드 인수를 허용하는 함수 정의
def some_function(*args, **kwargs):
    pass

# 임의의 수의 위치 인수로 호출
some_function(arg1, arg2, arg3)

# 임의의 수의 키워드 인수로 호출
some_function(key1=arg1, key2=arg2, key3=arg3)

# 위치 인수와 키워드 인수를 모두 사용하여 호출
some_function(arg, key1=arg1)

# 또는 인자 없이 호출
some_function()
```

<base-warning>
  <base-warning-title>
    Python 관례
  </base-warning-title>
  <base-warning-content>
    <code>*args</code>와 <code>**kwargs</code>라는 단어는 관례입니다. 인터프리터에 의해 강제되는 것은 아니지만, Python 커뮤니티에서는 좋은 습관으로 간주됩니다.
  </base-warning-content>
</base-warning>

## args

`args` 변수를 통해 *인수 (arguments)*에 접근할 수 있습니다.

```python
# *args 는 위치 인수를 튜플로 수집합니다
def some_function(*args):
    print(f'Arguments passed: {args} as {type(args)}')

# 여러 인수를 전달하면 args 튜플로 수집됩니다
some_function('arg1', 'arg2', 'arg3')
```

출력:

```plaintext
Arguments passed: ('arg1', 'arg2', 'arg3') as <class 'tuple'>
```

## kwargs

키워드는 `kwargs` 변수를 통해 접근할 수 있습니다.

```python
# **kwargs 는 키워드 인수를 딕셔너리로 수집합니다
def some_function(**kwargs):
    print(f'keywords: {kwargs} as {type(kwargs)}')

# 키워드 인수를 전달하면 kwargs 딕셔너리로 수집됩니다
some_function(key1='arg1', key2='arg2')
```

출력:

```plaintext
keywords: {'key1': 'arg1', 'key2': 'arg2'} as <class 'dict'>
```

## 관련 링크

- <router-link to="/cheatsheet/functions">함수 (Functions)</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">리스트와 튜플 (Lists and Tuples)</router-link>
- <router-link to="/cheatsheet/dictionaries">Python 딕셔너리 (Python Dictionaries)</router-link>
- <router-link to="/blog/python-easy-args-kwargs">Python \*args 및 \*\*kwargs 쉽게 사용하기</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
