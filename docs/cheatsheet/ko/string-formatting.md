---
title: '파이썬 문자열 포매팅 - 파이썬 치트 시트'
description: '파이썬 3.6 이상을 사용한다면, 문자열 f-문자열이 문자열을 포매팅하는 권장 방식입니다.'
labUrl: 'https://labex.io/ko/labs/python-python-string-formatting-633667?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 문자열 포매팅
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a href="https://docs.python.org/3/library/stdtypes.html?highlight=sprintf#printf-style-string-formatting">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
    여기에 설명된 포매팅 작업 (<b>% 연산자</b>) 은 일반적인 오류를 유발하는 다양한 특이점을 보입니다 [...]. 더 새로운 <a href="#formatted-string-literals-or-f-strings">포맷된 문자열 리터럴</a> [...]을 사용하면 이러한 오류를 피할 수 있습니다. 이러한 대안은 텍스트 포매팅에 대해 더 강력하고 유연하며 확장 가능한 접근 방식을 제공합니다.
  </base-disclaimer-content>
</base-disclaimer>

## % operator

<base-warning>
  <base-warning-title>
    문자열 리터럴 선호
  </base-warning-title>
  <base-warning-content>
    새로운 코드의 경우, <code>%</code> 연산자 대신 <a href="#strformat">str.format</a> 또는 <a href="#formatted-string-literals-or-f-strings">포맷된 문자열 리터럴</a>(Python 3.6 이상) 을 사용하는 것이 강력히 권장됩니다.
  </base-warning-content>
</base-warning>

```python
# % operator: 구식 문자열 포매팅 (새로운 코드에는 권장되지 않음)
name = 'Pete'
'Hello %s' % name  # %s = 문자열 자리 표시자
```

Output:

```plaintext
"Hello Pete"
```

`%d` 포맷 지정자를 사용하여 int 값을 문자열로 변환할 수 있습니다.

```python
num = 5
'I have %d apples' % num
```

Output:

```plaintext
"I have 5 apples"
```

## str.format

Python 3 는 문자열 포매팅을 위한 새로운 방식을 도입했으며, 이는 나중에 Python 2.7 로 역이식되었습니다. 이로 인해 문자열 포매팅 구문이 더 규칙적으로 변합니다.

```python
# str.format() 메서드: 최신 문자열 포매팅 (Python 2.7 이상)
name = 'John'
age = 20

"Hello I'm {}, my age is {}".format(name, age)  # {} = 자리 표시자
```

Output:

```plaintext
"Hello I'm John, my age is 20"
```

```python
"Hello I'm {0}, my age is {1}".format(name, age)
```

Output:

```plaintext
"Hello I'm John, my age is 20"
```

## Formatted String Literals or f-Strings

Python 3.6 이상을 사용 중이라면, 문자열 `f-String`이 문자열을 포매팅하는 권장 방식입니다.

<base-disclaimer>
  <base-disclaimer-title>
    <a href="https://docs.python.org/3/reference/lexical_analysis.html#f-strings">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
    포맷된 문자열 리터럴 또는 f-문자열은 <code>f</code> 또는 <code>F</code>로 접두사가 붙은 문자열 리터럴입니다. 이러한 문자열에는 중괄호 {}로 구분된 표현식인 대체 필드가 포함될 수 있습니다. 다른 문자열 리터럴은 항상 상수 값을 갖는 반면, 포맷된 문자열은 런타임에 평가되는 실제 표현식입니다.
  </base-disclaimer-content>
</base-disclaimer>

```python
# f-string: 문자열 포매팅의 권장 방식 (Python 3.6 이상)
name = 'Elizabeth'
f'Hello {name}!'  # f 접두사는 {} 내의 표현식을 허용합니다
```

Output:

```plaintext
'Hello Elizabeth!'
```

인라인 연산을 수행하는 것도 가능합니다.

```python
# f-strings 는 표현식을 지원합니다: {} 내에 계산을 포함할 수 있습니다
a = 5
b = 10
f'Five plus ten is {a + b} and not {2 * (a + b)}.'  # 표현식을 평가합니다
```

Output:

```plaintext
'Five plus ten is 15 and not 30.'
```

### 다중 행 f-Strings

```python
name = 'Robert'
messages = 12
(
f'Hi, {name}. '
f'You have {messages} unread messages'
)
```

Output:

```plaintext
'Hi, Robert. You have 12 unread messages'
```

### = 지정자

이것은 표현식과 그 값을 출력합니다.

```python
# = 지정자: 변수 이름과 값 모두 출력 (Python 3.8 이상)
from datetime import datetime
now = datetime.now().strftime("%b/%d/%Y - %H:%M:%S")
f'date and time: {now=}'  # "now='Nov/14/2022 - 20:50:01'"을 출력합니다
```

Output:

```plaintext
"date and time: now='Nov/14/2022 - 20:50:01'"
```

### 공백 또는 문자 추가

```python
name = 'Robert'
f"{name.upper() = :-^20}"
```

Output:

```plaintext
'name.upper() = -------ROBERT-------'
```

```python
f"{name.upper() = :^20}"
```

Output:

```plaintext
'name.upper() =        ROBERT       '
```

```python
f"{name.upper() = :20}"
```

Output:

```plaintext
'name.upper() = ROBERT              '
```

## 자릿수 포매팅

천 단위 구분 기호 추가

```python
a = 10000000
f"{a:,}"
```

Output:

```plaintext
'10,000,000'
```

반올림

```python
a = 3.1415926
f"{a:.2f}"
```

Output:

```plaintext
'3.14'
```

백분율로 표시

```python
a = 0.816562
f"{a:.2%}"
```

Output:

```plaintext
'81.66%'
```

### 숫자 포매팅 표

| 숫자       | 포맷    | 출력      | 설명                                       |
| ---------- | ------- | --------- | ------------------------------------------ |
| 3.1415926  | {:.2f}  | 3.14      | 소수점 이하 2 자리로 실수 포맷             |
| 3.1415926  | {:+.2f} | +3.14     | 부호와 함께 소수점 이하 2 자리로 실수 포맷 |
| -1         | {:+.2f} | -1.00     | 부호와 함께 소수점 이하 2 자리로 실수 포맷 |
| 2.71828    | {:.0f}  | 3         | 소수점 없이 실수 포맷                      |
| 4          | {:0>2d} | 04        | 0 으로 채우기 (왼쪽 채우기, 너비 2)        |
| 4          | {:x<4d} | 4xxx      | x 로 채우기 (오른쪽 채우기, 너비 4)        |
| 10         | {:x<4d} | 10xx      | x 로 채우기 (오른쪽 채우기, 너비 4)        |
| 1000000    | {:,}    | 1,000,000 | 쉼표 구분 기호가 있는 숫자 포맷            |
| 0.35       | {:.2%}  | 35.00%    | 백분율 포맷                                |
| 1000000000 | {:.2e}  | 1.00e+09  | 지수 표기법                                |
| 11         | {:11d}  | 11        | 오른쪽 정렬 (기본값, 너비 10)              |
| 11         | {:<11d} | 11        | 왼쪽 정렬 (너비 10)                        |
| 11         | {:^11d} | 11        | 가운데 정렬 (너비 10)                      |

## Template Strings

템플릿 문자열은 덜 강력하지만 더 단순한 메커니즘이며, 사용자로부터 생성된 문자열을 처리할 때 권장됩니다. 복잡성이 감소하여 템플릿 문자열이 더 안전한 선택이 됩니다.

```python
from string import Template
name = 'Elizabeth'
t = Template('Hey $name!')
t.substitute(name=name)
```

Output:

```plaintext
'Hey Elizabeth!'
```

## 관련 링크

- <router-link to="/cheatsheet/manipulating-strings">문자열 조작</router-link>
- <router-link to="/blog/python-data-types">Python 데이터 유형 블로그 게시물</router-link>
- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/print">print()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
- <router-link to="/builtin/ascii">ascii()</router-link>
