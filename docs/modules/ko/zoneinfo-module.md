---
title: Python Zoneinfo 모듈 - Python 치트시트
description: `zoneinfo` 모듈은 `datetime` 객체에 IANA 시간대 지원을 제공합니다.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Zoneinfo 모듈
</base-title>

`zoneinfo` 모듈은 `datetime` 객체에 IANA 시간대 지원을 제공합니다.

이 모듈은 Python 3.9에서 추가되었습니다.

```python
from datetime import datetime
from zoneinfo import ZoneInfo
```

`Asia/Shanghai`, `Europe/London`, `America/New_York` 같은 실제 시간대가 필요할 때 `zoneinfo`를 사용합니다.

## 시간대가 있는 datetime 만들기

```python
from datetime import datetime
from zoneinfo import ZoneInfo

meeting = datetime(2025, 5, 13, 9, 0, tzinfo=ZoneInfo('Asia/Shanghai'))
print(meeting.tzname())
print(meeting.utcoffset())
```

```output
CST
8:00:00
```

`tzinfo` 값은 datetime을 시간대 인식 객체로 만듭니다. 사용자가 여러 나라에 있을 때, 시간대 없는 datetime보다 더 안전합니다.

## 시간대 간 변환하기

```python
from datetime import datetime
from zoneinfo import ZoneInfo

utc_time = datetime(2025, 5, 13, 1, 0, tzinfo=ZoneInfo('UTC'))
local_time = utc_time.astimezone(ZoneInfo('America/New_York'))
print(local_time.tzname())
print(local_time.hour)
```

```output
EDT
21
```

2025년 5월 13일 1:00 UTC는 뉴욕 기준으로 아직 5월 12일 저녁이었기 때문에 날짜가 바뀌었습니다.

## 시간대 키 보기

`key` 속성에는 IANA 시간대 이름이 저장됩니다.

```python
from zoneinfo import ZoneInfo

zone = ZoneInfo('Asia/Shanghai')
print(zone.key)
```

```output
Asia/Shanghai
```

## 관련 링크

- <router-link to="/modules/datetime-module">모듈: datetime</router-link>
- <router-link to="/cheatsheet/basics">치트시트: 기초</router-link>
