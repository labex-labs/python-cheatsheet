---
title: 'Python round() 내장 함수 - Python 치트 시트'
description: '소수점 이하 ndigits 자릿수로 반올림된 숫자를 반환합니다. ndigits 를 생략하거나 None 으로 지정하면 입력값에 가장 가까운 정수를 반환합니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python round() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#round">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
   소수점 이하 ndigits 자릿수로 숫자를 반올림합니다. ndigits 가 생략되거나 None 이면 입력값에 가장 가까운 정수를 반환합니다.
  </base-disclaimer-content>
</base-disclaimer>

## 소개

`round()` 함수는 숫자를 지정된 소수 자릿수로 반올림합니다. 소수 자릿수가 지정되지 않으면 가장 가까운 정수로 반올림합니다.

`round()`는 .5 로 끝나는 숫자에 대해 "가장 가까운 짝수로 반올림 (round half to even)" 방식을 사용하므로, 가장 가까운 짝수 정수로 반올림됩니다.

### 예시

```python
# 가장 가까운 정수로 반올림
print(round(3.14))
print(round(3.8))

# 지정된 소수 자릿수로 반올림
print(round(3.14159, 2))

# "가장 가까운 짝수로 반올림"
print(round(2.5))
print(round(3.5))
```

```output
3
4
3.14
2
4
```

## 관련 링크

- <router-link to="/blog/python-data-types">블로그: Python 데이터 타입</router-link>
- <router-link to="/cheatsheet/string-formatting">치트 시트: 문자열 포매팅</router-link>
- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/abs">abs()</router-link>
- <router-link to="/builtin/float">float()</router-link>
- <router-link to="/builtin/int">int()</router-link>
