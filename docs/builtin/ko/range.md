---
title: 'Python range() 내장 함수 - Python 치트 시트'
description: 'range 는 함수가 아닌 불변 시퀀스 타입이며, 범위 및 시퀀스 유형 (list, tuple, range) 문서에 설명되어 있습니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python range() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#range">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   range 는 함수라기보다는 Ranges and Sequence Types — list, tuple, range 에 설명된 대로 실제로 불변 시퀀스 타입입니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

`range` 타입은 특정 횟수만큼 반복하기 위해 `for` 루프에서 흔히 사용됩니다. `range`는 `start`, `stop`, `step`의 세 가지 매개변수를 받습니다. 각 매개변수는 정수여야 합니다 (내장 <router-link to="/builtin/int">int</router-link> 또는 **index**() 특수 메서드를 구현하는 모든 객체).

매개변수가 하나만 있는 경우, 이는 `stop` 매개변수를 나타냅니다. `step` 매개변수가 전혀 생략되면 기본값은 `1`이 됩니다. `start` 매개변수가 생략되면 기본값은 `0`이 됩니다.

범위는 음수 인덱스를 지원하지만, 이는 양수 인덱스로 결정된 시퀀스의 끝에서부터 인덱싱되는 것으로 해석됩니다.

**_범위 타입이 일반 <router-link to="/builtin/list">list</router-link>나 <router-link to="/builtin/tuple">tuple</router-link>보다 갖는 장점은 범위 크기에 관계없이 범위 객체가 항상 동일한 (작은) 양의 메모리를 차지한다는 것입니다_**

## 입력 매개변수

범위는 연결 (concatenation) 및 반복 (repetition) 을 제외한 모든 일반적인 시퀀스 연산을 구현합니다 (범위 객체는 엄격한 패턴을 따르는 시퀀스만 나타낼 수 있으며, 반복 및 연결은 일반적으로 해당 패턴을 위반하기 때문입니다).

`start`:

- 시작 매개변수의 값
- 제공되지 않으면 매개변수는 0 으로 기본 설정됩니다
- 매개변수 값은 *포함*됩니다 (inclusive)

`stop`

- 중지 매개변수의 값
- 유일하게 필수적인 매개변수입니다
- 매개변수 값은 *제외*됩니다 (exclusive)

`step`

- 단계 매개변수의 값
- 제공되지 않으면 매개변수는 1 로 기본 설정됩니다

## 예시

`stop` 매개변수만 지정된 범위

```python
for i in range(5):
    print(i)
```

```output
0
1
2
3
4
```

`start` 및 `stop` 매개변수가 모두 지정된 범위

```python
for i in range(1, 8):
    print(i)
```

```output
1
2
3
4
5
6
7
```

모든 매개변수가 지정된 범위

```python
for i in range(0, 30, 5):
    print(i)
```

```output
0
5
10
15
20
25
```

`stop` 매개변수가 `step` 매개변수로 나누어 떨어지지 않는 모든 매개변수가 지정된 범위

```python
for i in range(0, 10, 3):
    print(i)
```

```output
0
3
6
9
```

`stop` 및 `step` 매개변수가 모두 음수인 모든 매개변수가 지정된 범위

```python
for i in range(0, -6, -1):
    print(i)
```

```output
0
-1
-2
-3
-4
-5
```

`stop` 매개변수가 0 으로 설정된 두 가지 예시

```python
for i in range(0):
    print(i)
```

```output
(출력 없음)
```

```python
for i in range(1, 0):
    print(i)
```

```output
(출력 없음)
```

## 관련 링크

- <router-link to="/cheatsheet/control-flow">치트 시트: 제어 흐름 (for 루프)</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">치트 시트: 리스트 및 튜플</router-link>
- <router-link to="/modules/itertools-module">모듈: itertools</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/reversed">reversed()</router-link>
- <router-link to="/builtin/enumerate">enumerate()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/tuple">tuple()</router-link>
- <router-link to="/builtin/int">int()</router-link>
