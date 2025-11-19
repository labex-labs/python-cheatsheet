---
title: 'Python 랜덤 모듈 - 파이썬 치트 시트'
description: '랜덤 모듈은 무작위 요소를 생성할 수 있게 해주는 내장 모듈입니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Random 모듈
</base-title>

[random](https://docs.python.org/3/library/random.html) 모듈은 무작위 요소를 생성할 수 있게 해주는 내장 모듈입니다.

```python
import random
```

## seed()

`seed` 메서드는 난수 생성기를 초기화하는 데 사용됩니다.

```python
# 재현 가능한 난수를 위한 시드 설정
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

시드를 숫자로 설정하면 항상 동일한 난수가 반환됩니다:

```python
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

```python
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

```python
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

```python
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

```python
random.seed(1)
random.random()
```

```output
0.13436424411240122
```

`seed` 메서드의 기본값은 *현재 시스템 시간*이므로 항상 다른 숫자가 나옵니다:

```python
# 시드 설정 없이 난수 생성 (시스템 시간 사용)
random.random()
```

```output
0.8474337369372327
```

```python
random.random()
```

```output
0.763774618976614
```

```python
random.random()
```

```output
0.2550690257394217
```

## randint()

```python
random.randint(start: int, stop: int)
```

이 메서드는 주어진 시작 및 중지 매개변수 사이의 난수를 반환합니다:

```python
random.randint(1, 5)
```

```output
3
```

```python
random.randint(1, 5)
```

```output
2
```

```python
random.randint(1, 5)
```

```output
5
```

```python
random.randint(1, 5)
```

```output
1
```

```python
random.randint(1, 5)
```

```output
3
```

```python
random.randint(1, 5)
```

```output
1
```

## choice()

`choice` 메서드는 `list`, `set` 또는 `str`과 같은 반복 가능한 객체에서 무작위로 선택된 요소를 반환합니다:

```python
random.choice([1, 2, 3, 4])
```

```output
1
```

```python
random.choice([1, 2, 3, 4])
```

```output
2
```

```python
random.choice([1, 2, 3, 4])
```

```output
4
```

```python
random.choice([1, 2, 3, 4])
```

```output
4
```

## shuffle()

`shuffle` 메서드는 반복 가능한 객체를 받아 섞습니다:

```python
my_list = [1, 2, 3, 4]

# 리스트를 제자리에서 섞기
random.shuffle(my_list)
my_list
```

```output
[1, 4, 3, 2]
```

```python
random.shuffle(my_list)
my_list
```

```output
[2, 4, 3, 1]
```

```python
random.shuffle(my_list)
my_list
```

```output
[4, 2, 3, 1]
```

## sample()

```python
random.sample(iterable, k: int)
```

`sample`은 반복 가능한 객체에서 무작위로 선택된 요소들로 구성된 리스트를 반환합니다. 반환되는 요소의 수는 `k` 매개변수와 같습니다:

```python
# 리스트에서 k 개의 요소를 무작위로 샘플링
random.sample([1, 2, 3, 4], 1)
```

```output
[3]
```

```python
random.sample([1, 2, 3, 4], 2)
```

```output
[3, 4]
```

```python
random.sample([1, 2, 3, 4], 3)
```

```output
[4, 3, 2]
```

```python
random.sample([1, 2, 3, 4], 4)
```

```output
[1, 2, 4, 3]
```

## random()

`random` 메서드는 0.0 과 1.0 사이의 무작위 부동 소수점 숫자를 반환합니다:

```python
random.random()
```

```output
0.4143139993007743
```

```python
random.random()
```

```output
0.17300740157905092
```

```python
random.random()
```

```output
0.548798761388153
```

```python
random.random()
```

```output
0.7030407620656315
```

## uniform()

`uniform` 메서드는 `randint`와 유사하지만 부동 소수점 숫자를 반환합니다:

```python
random.uniform(1, 5)
```

```output
3.697943322009309
```

```python
random.uniform(1, 5)
```

```output
2.498812082006561
```

```python
random.uniform(1, 5)
```

```output
2.7558465201782525
```

```python
random.uniform(1, 5)
```

```output
3.0337059529999273
```

## 관련 링크

- <router-link to="/cheatsheet/lists-and-tuples">치트 시트: 리스트와 튜플</router-link>
- <router-link to="/blog/python-data-types">블로그: Python 데이터 유형</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/set">set()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
