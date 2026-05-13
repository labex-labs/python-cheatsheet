---
title: Python Zoneinfo 模块 - Python 速查表
description: `zoneinfo` 模块为 `datetime` 对象提供 IANA 时区支持。
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Zoneinfo 模块
</base-title>

`zoneinfo` 模块为 `datetime` 对象提供 IANA 时区支持。

该模块从 Python 3.9 开始加入标准库。

```python
from datetime import datetime
from zoneinfo import ZoneInfo
```

当你需要使用真实世界的时区，例如 `Asia/Shanghai`、`Europe/London` 或 `America/New_York` 时，可以使用 `zoneinfo`。

## 创建带时区的 datetime

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

`tzinfo` 会让 `datetime` 带上时区信息。面对不同国家的用户时，这比使用不带时区的 `datetime` 更安全。

## 在时区之间转换

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

日期之所以变化，是因为 2025 年 5 月 13 日 1:00 的 UTC 时间，在纽约仍然是 5 月 12 日的晚上。

## 查看时区键

`key` 属性保存了 IANA 时区名称。

```python
from zoneinfo import ZoneInfo

zone = ZoneInfo('Asia/Shanghai')
print(zone.key)
```

```output
Asia/Shanghai
```

## 相关链接

- <router-link to="/modules/datetime-module">模块：datetime</router-link>
- <router-link to="/cheatsheet/basics">速查表：基础知识</router-link>
