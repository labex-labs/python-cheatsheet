---
title: "Python Functools 모듈 - Python 치트시트"
description: "`functools` 모듈에는 `partial`, `reduce`, `lru_cache` 같은 고차 함수용 도구가 들어 있습니다."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Functools 모듈
</base-title>

`functools` 모듈에는 `partial`, `reduce`, `lru_cache` 같은 고차 함수용 도구가 들어 있습니다.

```python
import functools
```

고차 함수는 다른 함수와 함께 동작하는 함수입니다. 초보자는 보통 일부 인자를 고정한 뒤 함수를 재사용하거나, 비용이 큰 결과를 캐시할 때 `functools`를 사용합니다.

## partial()

`partial`은 일부 인자가 미리 채워진 새로운 callable을 만듭니다.

```python
from functools import partial

def power(base, exponent):
    return base ** exponent

square = partial(power, exponent=2)
print(square(5))
```

```output
25
```

다른 함수가 더 적은 인자의 callable을 기대할 때 유용합니다.

```python
from functools import partial

def greet(greeting, name):
    return f'{greeting}, {name}!'

say_hello = partial(greet, 'Hello')
print(say_hello('Ada'))
```

```output
Hello, Ada!
```

## reduce()

`reduce`는 이터러블을 하나의 값으로 합칩니다.

```python
from functools import reduce

total = reduce(lambda acc, item: acc + item, [1, 2, 3, 4])
print(total)
```

```output
10
```

단순한 합계라면 내장 `sum()`을 쓰는 편이 좋습니다. 결합 연산이 특수할 때는 `reduce`가 더 유용합니다.

```python
from functools import reduce

words = ['Python', 'Cheatsheet']
title = reduce(lambda left, right: f'{left} {right}', words)
print(title)
```

```output
Python Cheatsheet
```

## lru_cache()

`lru_cache`는 함수 결과를 메모이제이션합니다.

```python
from functools import lru_cache

@lru_cache(maxsize=None)
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(10))
```

```output
55
```

캐시 사용 현황도 확인할 수 있습니다.

```python
print(fibonacci.cache_info().hits > 0)
```

```output
True
```

## 관련 링크

- <router-link to="/cheatsheet/functions">치트시트: 함수</router-link>
- <router-link to="/cheatsheet/decorators">치트시트: 데코레이터</router-link>
- <router-link to="/modules/itertools-module">모듈: itertools</router-link>
