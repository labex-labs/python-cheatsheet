---
title: 'Python pow() 내장 함수 - Python 치트 시트'
description: 'pow() 함수는 숫자의 거듭제곱을 반환합니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python pow() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#pow">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
      pow() 함수는 숫자의 거듭제곱을 반환합니다. 두 개 또는 세 개의 인수를 취할 수 있습니다:
      pow(base, exp): base 를 exp 의 거듭제곱으로 반환합니다 (base ** exp).
      pow(base, exp, mod): (base ** exp) % mod 를 반환합니다 (모듈러 산술의 경우).
      mod 인수가 있는 경우 결과는 base ** exp % mod 보다 더 효율적으로 계산됩니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

`pow()` 함수는 거듭제곱 계산에 사용됩니다. 두 개 또는 세 개의 인수를 가질 수 있습니다.

- `pow(base, exp)`: 이는 `base ** exp`와 동일합니다.
- `pow(base, exp, mod)`: 이는 `(base ** exp) % mod`와 동일하지만 더 효율적입니다. 이는 모듈러 산술에 유용합니다.

### 예시

```python
# 두 개의 인수를 사용하는 경우 (base ** exp)
print(pow(2, 3))
print(pow(3, 2))
print(pow(2, -3))  # 1 / (2**3) 와 동일

# 세 개의 인수를 사용하는 경우 ((base ** exp) % mod)
print(pow(3, 2, 4))  # 3**2 는 9 이고, 9 % 4 는 1 이므로
print(pow(2, 3, 5))  # 2**3 은 8 이고, 8 % 5 는 3 이므로
```

출력:

```plaintext
8
9
0.125
1
3
```

## 관련 링크

- <router-link to="/blog/python-data-types">블로그: Python 데이터 유형</router-link>
- <router-link to="/builtin/divmod">divmod()</router-link>
- <router-link to="/builtin/abs">abs()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
