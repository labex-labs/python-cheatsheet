---
title: '파이썬 Datetime 모듈 - 파이썬 치트 시트'
description: 'Datetime 모듈은 date, time, datetime 세 가지 데이터 타입을 제공하여 날짜 및 시간 작업을 가능하게 합니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Datetime 모듈
</base-title>

Datetime 모듈을 사용하면 날짜 및 시간 객체를 다룰 수 있습니다. 이 모듈은 `date`, `time`, `datetime`이라는 세 가지 추가 데이터 유형을 제공합니다.

```python
import datetime
```

## date()

```python
datetime.date(year: int, month: int, day: int)
```

date 메서드는 `year`, `month`, `day` 속성을 가진 date 객체를 반환합니다:

```python
from datetime import date
# date 객체 생성
obj = date(2022, 12, 1)
# year 속성에 접근
obj.year
```

출력:

```plaintext
2022
```

```python
obj.month
```

출력:

```plaintext
12
```

```python
obj.day
```

출력:

```plaintext
1
```

## time()

```python
datetime.time(hour: int, minute: int, second: int)
```

time 메서드는 `hour`, `minute`, `second`, `microsecond`, `tzinfo` 속성을 가진 time 객체를 반환합니다:

```python
from datetime import time
# time 객체 생성
obj = time(10, 20, 33)
# hour 속성에 접근
obj.hour
```

출력:

```plaintext
10
```

```python
obj.second
```

출력:

```plaintext
33
```

```python
obj.microsecond
```

출력:

```plaintext
0
```

## datetime()

```python
datetime.datetime(year, month, day, hour, minute, second)
```

`datetime`은 `date` 및 `time` 객체의 속성을 모두 가진 객체를 반환합니다:

```python
from datetime import datetime
# 날짜와 시간을 가진 datetime 객체 생성
obj = datetime(2024, 12, 1, 15, 35, 59)
# year 속성에 접근
obj.year
```

출력:

```plaintext
2024
```

```python
obj.month
```

출력:

```plaintext
12
```

```python
obj.day
```

출력:

```plaintext
1
```

```python
obj.hour
```

출력:

```plaintext
15
```

```python
obj.second
```

출력:

```plaintext
59
```

## now() 및 today()

`now` 및 `today` 메서드는 시스템의 정확한 날짜와 시간을 가진 `datetime` 객체를 반환합니다:

```python
from datetime import datetime
# 현재 날짜와 시간 가져오기
now = datetime.now()
now
```

출력:

```plaintext
datetime.datetime(2022, 7, 23, 19, 56, 49, 589806)
```

반환되는 객체가 `datetime`이므로 `date` 및 `time` 속성에 모두 접근할 수 있습니다:

```python
now.date()
```

출력:

```plaintext
datetime.date(2022, 7, 23)
```

```python
now.time()
```

출력:

```plaintext
datetime.time(19, 56, 49, 589806)
```

```python
now.year
```

출력:

```plaintext
2022
```

```python
now.month
```

출력:

```plaintext
7
```

```python
now.day
```

출력:

```plaintext
23
```

```python
now.hour
```

출력:

```plaintext
19
```

```python
now.minute
```

출력:

```plaintext
56
```

```python
now.second
```

출력:

```plaintext
49
```

```python
now.microsecond
```

출력:

```plaintext
589806
```

추가적으로, `now`는 선택적 매개변수로 [timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) 객체를 취할 수 있습니다:

```python
from datetime import datetime, timezone
# 현재 UTC 시간 가져오기
datetime.now(timezone.utc)
```

출력:

```plaintext
datetime.datetime(2022, 7, 24, 0, 20, 8, 265634, tzinfo=datetime.timezone.utc)
```

_timezone_ 매개변수가 지정되지 않으면 `now`는 시스템 시간대로 기본 설정됩니다.

## strftime() 및 strptime()

`strftime` 및 `strptime` 메서드를 사용하여 문자열과 datetime 객체 간에 쉽게 변환할 수 있습니다.

### strftime()

`strftime`을 사용하면 Python datetime 객체에서 사람이 읽을 수 있는 형식의 문자열을 만들 수 있습니다:

```python
from datetime import datetime
# 포맷팅 예시를 위해 현재 datetime 가져오기
now = datetime.now()
now
```

출력:

```plaintext
datetime.datetime(2022, 7, 23, 20, 31, 19, 751479)
```

```python
# datetime 을 일 - 월 (약어)-년 형식으로 포맷팅
now.strftime("%d-%b-%Y")
```

출력:

```plaintext
'23-Jul-2022'
```

```python
# datetime 을 일 - 월 (숫자)-년 형식으로 포맷팅
now.strftime("%d-%m-%Y")
```

출력:

```plaintext
'23-07-2022'
```

```python
# datetime 을 월/일/년 형식으로 포맷팅
now.strftime("%m/%d/%Y")
```

출력:

```plaintext
'07/23/2022'
```

```python
# 날짜와 시간을 포함하여 포맷팅
now.strftime("%b/%d/%Y - %H:%M:%S")
```

출력:

```plaintext
'Jul/23/2022 - 20:31:19'
```

`strftime`에 전달되는 문자열이 약간 이상해 보일 수 있지만, 그 의미를 이해하는 것은 꽤 쉽습니다. 예를 들어, `%m/%d/%Y`는 월, 일, 년을 `/`로 구분하여 반환합니다 (07/23/2022).

### strptime()

`strptime` 메서드는 문자열로부터 `datetime` 객체를 생성합니다.

이 메서드는 두 개의 매개변수를 받습니다:

```python
obj.strptime(datetime_string, format)
```

- datetime 객체를 나타내는 문자열.
- 해당 문자열에 해당하는 python 포맷 코드.

```python
from datetime import datetime

# 문자열을 datetime 객체로 파싱
datetime_str = '12-Jul-2023'
datetime.strptime(datetime_str, '%d-%b-%Y')
```

출력:

```plaintext
datetime.datetime(2023, 7, 12, 0, 0)
```

```python
# 날짜와 시간을 포함하는 문자열 파싱
datetime_str = 'Jul/12/2023 - 14:38:37'
datetime.strptime(datetime_str, "%b/%d/%Y - %H:%M:%S")
```

출력:

```plaintext
datetime.datetime(2023, 7, 12, 14, 38, 37)
```

### 포맷 코드

| 지시자 | 의미                                                                                                              | 예시                                                  |
| ------ | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| `%a`   | 로케일의 약식 요일 이름.                                                                                          | Sun, Mon, …, Sat (en_US)                              |
| `%A`   | 로케일의 전체 요일 이름.                                                                                          | Sunday, Monday, …, Saturday (en_US)                   |
| `%w`   | 요일을 십진수로 나타냄 (0 은 일요일, 6 은 토요일).                                                                | 0, 1, …, 6                                            |
| `%d`   | 월의 일을 0 으로 채운 십진수로 나타냄.                                                                            | 01, 02, …, 31                                         |
| `%b`   | 로케일의 약식 월 이름.                                                                                            | Jan, Feb, …, Dec (en_US)                              |
| `%B`   | 로케일의 전체 월 이름.                                                                                            | January, February, …, December (en_US)                |
| `%m`   | 월을 0 으로 채운 십진수로 나타냄.                                                                                 | 01, 02, …, 12                                         |
| `%y`   | 세기를 제외한 연도를 0 으로 채운 십진수로 나타냄.                                                                 | 00, 01, …, 99                                         |
| `%Y`   | 세기를 포함한 연도를 십진수로 나타냄.                                                                             | 0001, 0002, …, 2013, 2014, …, 9998, 9999              |
| `%H`   | 시 (24 시간제) 를 0 으로 채운 십진수로 나타냄.                                                                    | 00, 01, …, 23                                         |
| `%I`   | 시 (12 시간제) 를 0 으로 채운 십진수로 나타냄.                                                                    | 01, 02, …, 12                                         |
| `%p`   | 로케일에 해당하는 AM 또는 PM.                                                                                     | AM, PM (en_US)                                        |
| `%M`   | 분을 0 으로 채운 십진수로 나타냄.                                                                                 | 00, 01, …, 59                                         |
| `%S`   | 초를 0 으로 채운 십진수로 나타냄.                                                                                 | 00, 01, …, 59                                         |
| `%f`   | 마이크로초를 십진수로 나타냄 (왼쪽을 0 으로 채움).                                                                | 000000, 000001, …, 999999                             |
| `%z`   | `±HHMM[SS[.ffffff]]` 형태의 UTC 오프셋 (객체가 naive 인 경우 빈 문자열).                                          | (empty), +0000, -0400, +1030, +063415, -030712.345216 |
| `%Z`   | 시간대 이름 (객체가 naive 인 경우 빈 문자열).                                                                     | (empty), UTC, GMT                                     |
| `%j`   | 연중 일수를 0 으로 채운 십진수로 나타냄.                                                                          | 001, 002, …, 366                                      |
| `%U`   | 연중 주차 (일요일이 주의 첫날) 를 0 으로 채운 십진수로 나타냄. 새해의 첫 일요일 이전의 모든 날은 0 주차로 간주됨. | 00, 01, …, 53                                         |
| `%W`   | 연중 주차 (월요일이 주의 첫날) 를 십진수로 나타냄. 새해의 첫 월요일 이전의 모든 날은 0 주차로 간주됨.             | 00, 01, …, 53                                         |
| `%c`   | 로케일에 적합한 날짜 및 시간 표현.                                                                                | Tue Aug 16 21:30:00 1988 (en_US)                      |
| `%x`   | 로케일에 적합한 날짜 표현.                                                                                        | 08/16/88 (None)                                       |
| `%X`   | 로케일에 적합한 시간 표현.                                                                                        | 21:30:00 (en_US)                                      |
| `%%`   | 리터럴 `'%'` 문자.                                                                                                | %                                                     |

## timedelta()

`timedelta` 객체는 두 날짜 또는 시간 간의 차이를 나타냅니다.

```python
from datetime import datetime

# 두 datetime 객체 생성
date_1 = datetime.strptime('12-Jul-2023', '%d-%b-%Y')
date_2 = datetime.strptime('01-Jan-2024', '%d-%b-%Y')

# 차이 계산 (timedelta 반환)
difference = date_2 - date_1
difference
```

출력:

```plaintext
datetime.timedelta(days=173)
```

```python
# timedelta 에서 일 수 가져오기
difference.days
```

출력:

```plaintext
173
```

`timedelta`는 `days`, `seconds`, `microseconds`를 datetime 객체에 더할 수 있습니다:

```python
from datetime import datetime, timedelta

# timedelta 연산을 위한 현재 datetime 가져오기
now = datetime.now()
now
```

출력:

```plaintext
datetime.datetime(2022, 7, 23, 21, 25, 2, 341081)
```

```python
# 현재 datetime 에 10 일과 15 초 더하기
now + timedelta(days=10, seconds=15)
```

출력:

```plaintext
datetime.datetime(2022, 8, 2, 21, 25, 17, 341081)
```

그리고 `datetime` 객체에서 `days`, `seconds`, `microseconds`를 뺄 수 있습니다:

```python
from datetime import datetime, timedelta

# 뺄셈 예시를 위한 현재 datetime 가져오기
now = datetime.now()
now
```

출력:

```plaintext
datetime.datetime(2022, 7, 23, 21, 25, 2, 341081)
```

```python
# 현재 datetime 에서 10 일과 15 초 빼기
now - timedelta(days=10, seconds=15)
```

출력:

```plaintext
datetime.datetime(2022, 7, 13, 21, 59, 41, 100883)
```

## 관련 링크

- <router-link to="/cheatsheet/string-formatting">치트시트: 문자열 포맷팅</router-link>
- <router-link to="/blog/python-data-types">블로그: Python 데이터 유형</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/print">print()</router-link>
