---
title: 'Python __import__() 내장 함수 - Python 치트 시트'
description: '이 함수는 import 문에 의해 호출됩니다. import 문의 의미를 변경하기 위해 [...]로 대체될 수 있지만, import 훅을 사용하는 것이 더 간단하므로 권장되지 않습니다. 또한 importlib.import_module() 대신 __import__() 를 직접 사용하는 것도 권장되지 않습니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python `__import__` 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#import__">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
    이 함수는 import 문에 의해 호출됩니다. import 문의 의미를 변경하기 위해 [...] 대체될 수 있지만, import 훅을 사용하는 것이 일반적으로 더 간단하므로 그렇게 하는 것은 강력히 권장되지 않습니다 [...]. 직접 __import__() 를 사용하는 것 또한 importlib.import_module() 을 사용하는 것이 권장되므로 지양됩니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

`__import__()` 함수는 `import` 문에 의해 호출되는 근본적인 함수입니다. 직접 사용하는 것이 가능하지만, 일반적으로 권장되지 않습니다. 동적으로 모듈을 가져오려면 `importlib.import_module()` 함수를 사용하는 것이 권장되는 접근 방식입니다.

### 예시

`__import__()`를 사용하여 `math` 모듈을 동적으로 가져오는 방법은 다음과 같습니다.

```python
# 'math' 모듈을 동적으로 가져오기
math_module = __import__('math')

# 이제 일반적인 import 처럼 사용할 수 있습니다
print(math_module.sqrt(4))
```

```output
2.0
```

하지만, `importlib`를 사용한 권장 방식은 다음과 같습니다.

```python
import importlib

math_module = importlib.import_module('math')
print(math_module.sqrt(4))
```

```output
2.0
```

## 관련 링크

- <router-link :to="'/modules/importlib'">importlib 모듈</router-link>
- <router-link :to="'/cheatsheet/setup-py'">setup.py</router-link>
- <router-link :to="'/blog/python-projects-with-poetry-and-vscode-part-1'">Poetry 와 VS Code 를 사용한 Python 프로젝트 (파트 1)</router-link>
- <router-link :to="'/builtin/globals'">globals()</router-link>
- <router-link :to="'/builtin/locals'">locals()</router-link>
