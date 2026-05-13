---
title: "Python Statistics 모듈 - Python 치트시트"
description: "`statistics` 모듈은 평균, 중앙값, 기타 기술 통계를 계산하는 간단한 도구를 제공합니다."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Statistics 모듈
</base-title>

`statistics` 모듈은 평균, 중앙값, 기타 기술 통계를 계산하는 간단한 도구를 제공합니다.

이 모듈은 Python 3.4에서 추가되었습니다.

```python
import statistics
```

숫자 몇 개에 대해 흔한 계산이 필요할 때 `statistics`를 사용합니다. 고급 데이터 분석에는 NumPy나 pandas가 더 강력하지만, 표준 라이브러리는 아닙니다.

## mean()

```python
import statistics

scores = [80, 90, 95, 100]
print(statistics.mean(scores))
```

```output
91.25
```

`fmean`은 부동소수점 평균을 반환하며, 숫자 데이터에서는 더 빠른 경우가 많습니다.

```python
import statistics

print(statistics.fmean([1, 2, 3]))
```

```output
2.0
```

## median()

```python
import statistics

values = [1, 3, 5, 100]
print(statistics.median(values))
```

```output
4.0
```

## mode()

`mode`는 가장 자주 나온 값을 반환합니다.

```python
import statistics

print(statistics.mode(['python', 'python', 'rust']))
```

```output
python
```

가장 자주 나온 값이 여러 개면 `multimode`가 모두 반환합니다.

```python
import statistics

print(statistics.multimode(['red', 'blue', 'red', 'blue']))
```

```output
['red', 'blue']
```

## stdev()

`stdev`는 표본 표준편차를 계산합니다.

```python
import statistics

print(round(statistics.stdev([2, 4, 4, 4, 5, 5, 7, 9]), 2))
```

```output
2.14
```

## 빈 데이터 처리하기

대부분의 함수는 빈 입력에 대해 `StatisticsError`를 발생시킵니다.

```python
import statistics

try:
    statistics.mean([])
except statistics.StatisticsError as error:
    print(type(error).__name__)
```

```output
StatisticsError
```

## 관련 링크

- <router-link to="/modules/math-module">모듈: math</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">치트시트: 리스트와 튜플</router-link>
- <router-link to="/builtin/round">round()</router-link>
