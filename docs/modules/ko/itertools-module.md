---
title: 'Python itertools 모듈 - 파이썬 치트 시트'
description: 'itertools 모듈은 반복자 (리스트, 딕셔너리 등) 를 효율적으로 처리하기 위한 빠르고 메모리 절약적인 도구 모음입니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Itertools 모듈
</base-title>

_itertools_ 모듈은 반복자 (예: <router-link to="/cheatsheet/lists-and-tuples">리스트</router-link> 또는 <router-link to="/cheatsheet/dictionaries">딕셔너리</router-link>) 를 처리할 때 빠르고 메모리 효율적으로 작동하도록 설계된 도구 모음입니다.

<base-disclaimer>
  <base-disclaimer-title>
    <a href="https://docs.python.org/3/library/itertools.html">Python 3 문서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
    이 모듈은 그 자체로 또는 조합하여 유용한 빠르고 메모리 효율적인 도구들의 핵심 세트를 표준화합니다.
    이 도구들은 함께 "반복자 대수 (iterator algebra)"를 구성하여 순수 Python 에서 특수화된 도구를 간결하고 효율적으로 만들 수 있게 합니다.
  </base-disclaimer-content>
</base-disclaimer>

_itertools_ 모듈은 표준 라이브러리에 포함되어 있으므로 가져와야 합니다. 일부 예제에서는 `operator` 모듈도 사용합니다.

```python
import itertools
import operator
```

## accumulate()

함수의 결과를 반환하는 반복자를 만듭니다.

```python
itertools.accumulate(iterable[, func])
```

예시:

```python
data = [1, 2, 3, 4, 5]
# 곱셈 함수로 누적 계산
result = itertools.accumulate(data, operator.mul)
for each in result:
    print(each)
```

출력:

```plaintext
1
2
6
24
120
```

operator.mul 은 두 숫자를 받아 곱합니다:

```python
operator.mul(1, 2)
# 2

operator.mul(2, 3)
# 6

operator.mul(6, 4)
# 24

operator.mul(24, 5)
# 120
```

함수를 전달하는 것은 선택 사항입니다:

```python
data = [5, 2, 6, 4, 5, 9, 1]
# 함수 없이 누적 계산은 덧셈이 기본값입니다
result = itertools.accumulate(data)
for each in result:
    print(each)
```

출력:

```plaintext
5
7
13
17
22
31
32
```

함수가 지정되지 않으면 항목들이 합산됩니다:

```python
5
5 + 2 = 7
7 + 6 = 13
13 + 4 = 17
17 + 5 = 22
22 + 9 = 31
31 + 1 = 32
```

## combinations()

반복 가능한 객체와 정수를 받습니다. 이는 r 개의 요소를 가진 모든 고유한 조합을 생성합니다.

```python
itertools.combinations(iterable, r)
```

예시:

```python
shapes = ['circle', 'triangle', 'square',]
# 2 개 요소의 모든 조합 생성
result = itertools.combinations(shapes, 2)
for each in result:
    print(each)
```

출력:

```plaintext
('circle', 'triangle')
('circle', 'square')
('triangle', 'square')
```

## combinations_with_replacement()

combinations() 와 동일하지만, 개별 요소가 한 번 이상 반복되는 것을 허용합니다.

```python
itertools.combinations_with_replacement(iterable, r)
```

예시:

```python
shapes = ['circle', 'triangle', 'square']
# 반복을 허용하는 조합 생성
result = itertools.combinations_with_replacement(shapes, 2)
for each in result:
    print(each)
```

출력:

```plaintext
('circle', 'circle')
('circle', 'triangle')
('circle', 'square')
('triangle', 'triangle')
('triangle', 'square')
('square', 'square')
```

## count()

숫자 start 부터 시작하여 균등한 간격의 값을 반환하는 반복자를 만듭니다.

```python
itertools.count(start=0, step=1)
```

예시:

```python
# 10 부터 시작하여 3 씩 증가하며 카운트
for i in itertools.count(10,3):
    print(i)
    if i > 20:
        break
```

출력:

```plaintext
10
13
16
19
22
```

## cycle()

이 함수는 반복 가능한 객체를 끝없이 순환합니다.

```python
itertools.cycle(iterable)
```

예시:

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet']
# 색상을 무한히 순환
for color in itertools.cycle(colors):
    print(color)
```

출력:

```plaintext
red
orange
yellow
green
blue
violet
red
orange
```

반복 가능한 객체의 끝에 도달하면 처음부터 다시 시작합니다.

## chain()

일련의 반복 가능한 객체들을 받아 하나의 긴 반복 가능한 객체로 반환합니다.

```python
itertools.chain(*iterables)
```

예시:

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue']
shapes = ['circle', 'triangle', 'square', 'pentagon']
# 여러 반복 가능한 객체를 하나로 연결
result = itertools.chain(colors, shapes)
for each in result:
    print(each)
```

출력:

```plaintext
red
orange
yellow
green
blue
circle
triangle
square
pentagon
```

## compress()

다른 반복 가능한 객체를 사용하여 하나의 반복 가능한 객체를 필터링합니다.

```python
itertools.compress(data, selectors)
```

예시:

```python
shapes = ['circle', 'triangle', 'square', 'pentagon']
selections = [True, False, True, False]
# 부울 선택에 따라 도형 필터링
result = itertools.compress(shapes, selections)
for each in result:
    print(each)
```

출력:

```plaintext
circle
square
```

## dropwhile()

술어가 참인 동안 반복 가능한 객체에서 요소를 건너뛰고, 그 이후에는 모든 요소를 반환하는 반복자를 만듭니다.

```python
itertools.dropwhile(predicate, iterable)
```

예시:

```python
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]
# 조건이 참인 동안 요소를 건너뛰고 나머지 모두 반환
result = itertools.dropwhile(lambda x: x<5, data)
for each in result:
    print(each)
```

출력:

```plaintext
5
6
7
8
9
10
1
```

## filterfalse()

반복 가능한 객체에서 술어가 거짓인 요소만 필터링하여 반환하는 반복자를 만듭니다.

```python
itertools.filterfalse(predicate, iterable)
```

예시:

```python
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]
# 술어가 거짓인 요소 반환
result = itertools.filterfalse(lambda x: x<5, data)
for each in result:
    print(each)
```

출력:

```plaintext
5
6
7
8
9
10
```

## groupby()

간단히 말해, 이 함수는 항목들을 그룹화합니다.

```python
itertools.groupby(iterable, key=None)
```

예시:

```python
robots = [
    {"name": "blaster", "faction": "autobot"},
    {"name": "galvatron", "faction": "decepticon"},
    {"name": "jazz", "faction": "autobot"},
    {"name": "metroplex", "faction": "autobot"},
    {"name": "megatron", "faction": "decepticon"},
    {"name": "starcream", "faction": "decepticon"},
]
# 진영별로 로봇 그룹화 (올바른 그룹화를 위해 반복 가능한 객체는 정렬되어야 함)
for key, group in itertools.groupby(robots, key=lambda x: x['faction']):
    print(key)
    print(list(group))
```

출력:

```plaintext
autobot
[{'name': 'blaster', 'faction': 'autobot'}]
decepticon
[{'name': 'galvatron', 'faction': 'decepticon'}]
autobot
[{'name': 'jazz', 'faction': 'autobot'}, {'name': 'metroplex', 'faction': 'autobot'}]
decepticon
[{'name': 'megatron', 'faction': 'decepticon'}, {'name': 'starcream', 'faction': 'decepticon'}]
```

## islice()

이 함수는 슬라이스 (slices) 와 매우 유사합니다. 반복 가능한 객체의 일부를 잘라낼 수 있게 해줍니다.

```python
itertools.islice(iterable, start, stop[, step])
```

예시:

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue',]
# 반복 가능한 객체를 슬라이스하여 처음 2 개 요소 가져오기
few_colors = itertools.islice(colors, 2)
for each in few_colors:
    print(each)
```

출력:

```plaintext
red
orange
```

## permutations()

```python
itertools.permutations(iterable, r=None)
```

예시:

```python
alpha_data = ['a', 'b', 'c']
# 요소들의 모든 순열 생성
result = itertools.permutations(alpha_data)
for each in result:
    print(each)
```

출력:

```plaintext
('a', 'b', 'c')
('a', 'c', 'b')
('b', 'a', 'c')
('b', 'c', 'a')
('c', 'a', 'b')
('c', 'b', 'a')
```

## product()

일련의 반복 가능한 객체들로부터 카테시안 곱 (Cartesian products) 을 생성합니다.

```python
num_data = [1, 2, 3]
alpha_data = ['a', 'b', 'c']
# 반복 가능한 객체들의 카테시안 곱 생성
result = itertools.product(num_data, alpha_data)
for each in result:
    print(each)
```

출력:

```plaintext
(1, 'a')
(1, 'b')
(1, 'c')
(2, 'a')
(2, 'b')
(2, 'c')
(3, 'a')
(3, 'b')
(3, 'c')
```

## repeat()

이 함수는 객체를 계속해서 반복합니다. 단, times 인수가 지정되면 횟수가 제한됩니다.

```python
itertools.repeat(object[, times])
```

예시:

```python
# 객체를 3 번 반복
for i in itertools.repeat("spam", 3):
    print(i)
```

출력:

```plaintext
spam
spam
spam
```

## starmap()

반복 가능한 객체에서 얻은 인수를 사용하여 함수를 계산하는 반복자를 만듭니다.

```python
itertools.starmap(function, iterable)
```

예시:

```python
data = [(2, 6), (8, 4), (7, 3)]
# 각 튜플의 언패킹된 인수에 함수 적용
result = itertools.starmap(operator.mul, data)
for each in result:
    print(each)
```

출력:

```plaintext
12
32
21
```

## takewhile()

dropwhile() 의 반대입니다. 술어가 참인 동안 반복 가능한 객체에서 요소를 반환하는 반복자를 만듭니다.

```python
itertools.takewhile(predicate, iterable)
```

예시:

```python
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]
# 조건이 참인 동안 요소들을 가져오고, 그 후 중단
result = itertools.takewhile(lambda x: x<5, data)
for each in result:
    print(each)
```

출력:

```plaintext
1
2
3
4
```

## tee()

단일 반복 가능한 객체로부터 n 개의 독립적인 반복자를 반환합니다.

```python
itertools.tee(iterable, n=2)
```

예시:

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue']
# 반복 가능한 객체를 두 개의 독립적인 반복자로 분할
alpha_colors, beta_colors = itertools.tee(colors)
for each in alpha_colors:
    print(each)
```

출력:

```plaintext
red
orange
yellow
green
blue
```

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue']
alpha_colors, beta_colors = itertools.tee(colors)
for each in beta_colors:
    print(each)
```

출력:

```plaintext
red
orange
yellow
green
blue
```

## zip_longest()

각 반복 가능한 객체에서 요소를 집계하는 반복자를 만듭니다. 반복 가능한 객체들의 길이가 다르면, 누락된 값은 `fillvalue`로 채워집니다. 가장 긴 반복 가능한 객체가 소진될 때까지 반복이 계속됩니다.

```python
itertools.zip_longest(*iterables, fillvalue=None)
```

예시:

```python
colors = ['red', 'orange', 'yellow', 'green', 'blue',]
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]
# 반복 가능한 객체들을 묶고, 누락된 값은 None 으로 채움
for each in itertools.zip_longest(colors, data, fillvalue=None):
    print(each)
```

출력:

```plaintext
('red', 1)
('orange', 2)
('yellow', 3)
('green', 4)
('blue', 5)
(None, 6)
(None, 7)
(None, 8)
(None, 9)
(None, 10)
```

## 관련 링크

- <router-link to="/cheatsheet/control-flow">치트시트: 제어 흐름 (for 루프)</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">치트시트: 리스트와 튜플</router-link>
- <router-link to="/cheatsheet/comprehensions">치트시트: 컴프리헨션</router-link>
- <router-link to="/cheatsheet/functions">치트시트: 함수 (제너레이터)</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">블로그: Python 컴프리헨션 단계별 가이드</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
- <router-link to="/builtin/next">next()</router-link>
- <router-link to="/builtin/map">map()</router-link>
- <router-link to="/builtin/filter">filter()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/enumerate">enumerate()</router-link>
- <router-link to="/builtin/range">range()</router-link>
