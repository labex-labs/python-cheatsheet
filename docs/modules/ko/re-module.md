---
title: "Python re 모듈 - Python 치트시트"
description: "`re` 모듈은 정규 표현식을 사용해 텍스트를 검색, 일치, 분할, 교체할 수 있게 해줍니다."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python re 모듈
</base-title>

`re` 모듈은 정규 표현식을 사용해 텍스트를 검색, 일치, 분할, 교체할 수 있게 해줍니다.

```python
import re
```

정규 표현식은 텍스트의 패턴입니다. `r'\d+'` 같은 raw string을 사용하면 백슬래시가 정규 표현식 엔진에 올바르게 전달됩니다.

## search()

`search`는 문자열의 어디에서든 첫 번째 일치를 찾습니다.

```python
import re

match = re.search(r'\d+', 'Order #12345 shipped')
print(match.group())
```

```output
12345
```

## findall()

`findall`은 겹치지 않는 모든 일치를 반환합니다.

```python
import re

emails = re.findall(r'[\w.-]+@[\w.-]+', 'a@example.com b@example.com')
print(emails)
```

```output
['a@example.com', 'b@example.com']
```

## sub()

`sub`는 일치하는 텍스트를 바꿉니다.

```python
import re

message = re.sub(r'\s+', ' ', 'too    many   spaces')
print(message)
```

```output
too many spaces
```

## 패턴 컴파일하기

같은 표현식을 반복해서 사용할 때 컴파일된 패턴이 유용합니다.

```python
import re

pattern = re.compile(r'^python', re.IGNORECASE)
print(bool(pattern.match('Python Cheatsheet')))
```

```output
True
```

## 캡처 그룹

괄호는 일치의 일부를 캡처합니다.

```python
import re

match = re.search(r'(\w+)=(\d+)', 'count=42')
print(match.group(1))
print(match.group(2))
```

```output
count
42
```

## 일치가 없을 때 처리하기

`group()`을 호출하기 전에 항상 일치가 있는지 확인하세요.

```python
import re

match = re.search(r'\d+', 'no number here')
if match:
    print(match.group())
else:
    print('No match')
```

```output
No match
```

## 관련 링크

- <router-link to="/cheatsheet/regular-expressions">치트시트: 정규 표현식</router-link>
- <router-link to="/cheatsheet/manipulating-strings">치트시트: 문자열 다루기</router-link>
- <router-link to="/builtin/str">str()</router-link>
