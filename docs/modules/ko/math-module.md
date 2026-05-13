---
title: "Python Math 모듈 - Python 치트시트"
description: "`math` 모듈은 `sqrt`, `ceil`, `floor`, `pi`, `isclose` 같은 수학 함수를 제공합니다."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Math 모듈
</base-title>

`math` 모듈은 `sqrt`, `ceil`, `floor`, `pi`, `isclose` 같은 수학 함수를 제공합니다.

```python
import math
```

`math`의 함수는 일반 숫자를 다루며 `int`나 `float` 값을 반환합니다. 숫자 목록은 <router-link to="/modules/statistics-module">statistics</router-link> 모듈을 보세요.

## 기본 함수

```python
import math

print(math.sqrt(81))
print(math.ceil(3.2))
print(math.floor(3.8))
```

```output
9.0
4
3
```

## 상수

이 모듈은 유용한 수학 상수도 제공합니다.

```python
import math

print(math.pi)
print(math.e)
```

```output
3.141592653589793
2.718281828459045
```

## 부동소수점 수 비교하기

부동소수점을 `==`로 비교하는 것보다 `isclose`가 더 안전합니다.

```python
import math

result = 0.1 + 0.2
print(result == 0.3)
print(math.isclose(result, 0.3))
```

```output
False
True
```

## 삼각함수

각도는 라디안으로 측정합니다. 도 단위 값이 있으면 `radians()`를 사용하세요.

```python
import math

angle = math.radians(90)
print(math.sin(angle))
```

```output
1.0
```

## 최대공약수

`gcd`는 비율을 단순화할 때 유용합니다.

```python
import math

print(math.gcd(12, 18))
```

```output
6
```

## 관련 링크

- <router-link to="/modules/statistics-module">모듈: statistics</router-link>
- <router-link to="/cheatsheet/basics">치트시트: 기초</router-link>
- <router-link to="/builtin/round">round()</router-link>
