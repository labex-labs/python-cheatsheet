---
title: Python Zoneinfo Module - Python Cheatsheet
description: The zoneinfo module provides IANA time zone support for datetime objects.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Zoneinfo Module
</base-title>

The `zoneinfo` module provides IANA time zone support for `datetime` objects.

The module was added in Python 3.9.

```python
from datetime import datetime
from zoneinfo import ZoneInfo
```

Use `zoneinfo` when you need real-world time zones such as `Asia/Shanghai`, `Europe/London`, or `America/New_York`.

## Creating timezone-aware datetimes

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

The `tzinfo` value makes the datetime timezone-aware. This is safer than working with a naive datetime when users are in different countries.

## Converting between time zones

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

The date changed because 1:00 UTC on May 13, 2025 was still the evening of May 12 in New York.

## Listing the time zone key

The `key` attribute stores the IANA time zone name.

```python
from zoneinfo import ZoneInfo

zone = ZoneInfo('Asia/Shanghai')
print(zone.key)
```

```output
Asia/Shanghai
```

## Relevant links

- <router-link to="/modules/datetime-module">Module: datetime</router-link>
- <router-link to="/cheatsheet/basics">Cheatsheet: Basics</router-link>
