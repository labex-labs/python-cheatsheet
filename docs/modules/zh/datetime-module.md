---
title: 'Python Datetime 模块 - Python 速查表'
description: 'Datetime 模块通过提供 date、time 和 datetime 三种额外的数据类型，使我们能够处理日期和时间。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Datetime 模块
</base-title>

Datetime 模块允许我们处理日期和时间对象。它提供了三种额外的数据类型：`date`、`time` 和 `datetime`。

```python
import datetime
```

## date()

```python
datetime.date(year: int, month: int, day: int)
```

`date` 方法返回一个具有 `year`、`month` 和 `day` 属性的日期对象：

```python
from datetime import date
# 创建一个日期对象
obj = date(2022, 12, 1)
# 访问 year 属性
obj.year
```

```output
2022
```

```python
obj.month
```

```output
12
```

```python
obj.day
```

```output
1
```

## time()

```python
datetime.time(hour: int, minute: int, second: int)
```

`time` 方法返回一个具有 `hour`、`minute`、`second`、`microsecond` 和 `tzinfo` 属性的时间对象：

```python
from datetime import time
# 创建一个时间对象
obj = time(10, 20, 33)
# 访问 hour 属性
obj.hour
```

```output
10
```

```python
obj.second
```

```output
33
```

```python
obj.microsecond
```

```output
0
```

## datetime()

```python
datetime.datetime(year, month, day, hour, minute, second)
```

`datetime` 返回一个同时包含 `date` 和 `time` 对象属性的对象：

```python
from datetime import datetime
# 使用日期和时间创建一个 datetime 对象
obj = datetime(2024, 12, 1, 15, 35, 59)
# 访问 year 属性
obj.year
```

```output
2024
```

```python
obj.month
```

```output
12
```

```python
obj.day
```

```output
1
```

```python
obj.hour
```

```output
15
```

```python
obj.second
```

```output
59
```

## now() 和 today()

`now` 和 `today` 方法返回一个具有系统确切日期和时间的 `datetime` 对象：

```python
from datetime import datetime
# 获取当前日期和时间
now = datetime.now()
now
```

```output
datetime.datetime(2022, 7, 23, 19, 56, 49, 589806)
```

因为返回的对象是 `datetime`，我们可以同时访问 `date` 和 `time` 属性：

```python
now.date()
```

```output
datetime.date(2022, 7, 23)
```

```python
now.time()
```

```output
datetime.time(19, 56, 49, 589806)
```

```python
now.year
```

```output
2022
```

```python
now.month
```

```output
7
```

```python
now.day
```

```output
23
```

```python
now.hour
```

```output
19
```

```python
now.minute
```

```output
56
```

```python
now.second
```

```output
49
```

```python
now.microsecond
```

```output
589806
```

此外，`now` 可以接受一个 [timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) 对象作为可选参数：

```python
from datetime import datetime, timezone
# 获取当前 UTC 时间
datetime.now(timezone.utc)
```

```output
datetime.datetime(2022, 7, 24, 0, 20, 8, 265634, tzinfo=datetime.timezone.utc)
```

如果未指定 _timezone_ 参数，`now` 将默认为系统时区。

## strftime() 和 strptime()

您可以使用 `strftime` 和 `strptime` 方法轻松地在字符串和 datetime 对象之间进行转换。

### strftime()

`strftime` 允许我们从 Python datetime 对象创建人类可读的格式化字符串：

```python
from datetime import datetime
# 获取当前 datetime 以进行格式化示例
now = datetime.now()
now
```

```output
datetime.datetime(2022, 7, 23, 20, 31, 19, 751479)
```

```python
# 将 datetime 格式化为 日 - 月 (缩写)-年
now.strftime("%d-%b-%Y")
```

```output
'23-Jul-2022'
```

```python
# 将 datetime 格式化为 日 - 月 (数字)-年
now.strftime("%d-%m-%Y")
```

```output
'23-07-2022'
```

```python
# 将 datetime 格式化为 月/日/年
now.strftime("%m/%d/%Y")
```

```output
'07/23/2022'
```

```python
# 将 datetime 格式化为 月/日/年 - 时：分：秒
now.strftime("%b/%d/%Y - %H:%M:%S")
```

```output
'Jul/23/2022 - 20:31:19'
```

传递给 `strftime` 的字符串可能看起来有点奇怪，但很容易理解其含义。例如，`%m/%d/%Y` 将返回用 `/` 分隔的月、日和年 (07/23/2022)。

### strptime()

`strptime` 方法从字符串创建 `datetime` 对象。

此方法接受两个参数：

```python
obj.strptime(datetime_string, format)
```

- 一个代表 datetime 对象的字符串。
- 与该字符串等效的 Python 格式代码。

```python
from datetime import datetime

# 将字符串解析为 datetime 对象
datetime_str = '12-Jul-2023'
datetime.strptime(datetime_str, '%d-%b-%Y')
```

```output
datetime.datetime(2023, 7, 12, 0, 0)
```

```python
# 解析包含日期和时间的字符串
datetime_str = 'Jul/12/2023 - 14:38:37'
datetime.strptime(datetime_str, "%b/%d/%Y - %H:%M:%S")
```

```output
datetime.datetime(2023, 7, 12, 14, 38, 37)
```

### 格式代码

| 指令 | 含义                                                                                      | 示例                                                  |
| ---- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| `%a` | 星期几的本地化缩写名称。                                                                  | Sun, Mon, …, Sat (en_US)                              |
| `%A` | 星期几的本地化全称。                                                                      | Sunday, Monday, …, Saturday (en_US)                   |
| `%w` | 星期几的十进制数，0 为星期日，6 为星期六。                                                | 0, 1, …, 6                                            |
| `%d` | 月中的第几天，零填充的十进制数。                                                          | 01, 02, …, 31                                         |
| `%b` | 月份的本地化缩写名称。                                                                    | Jan, Feb, …, Dec (en_US)                              |
| `%B` | 月份的本地化全称。                                                                        | January, February, …, December (en_US)                |
| `%m` | 月份的零填充十进制数。                                                                    | 01, 02, …, 12                                         |
| `%y` | 不带世纪的年份，零填充的十进制数。                                                        | 00, 01, …, 99                                         |
| `%Y` | 带世纪的年份，十进制数。                                                                  | 0001, 0002, …, 2013, 2014, …, 9998, 9999              |
| `%H` | 小时（24 小时制），零填充的十进制数。                                                     | 00, 01, …, 23                                         |
| `%I` | 小时（12 小时制），零填充的十进制数。                                                     | 01, 02, …, 12                                         |
| `%p` | 本地化的 AM 或 PM 等效项。                                                                | AM, PM (en_US)                                        |
| `%M` | 分钟，零填充的十进制数。                                                                  | 00, 01, …, 59                                         |
| `%S` | 秒，零填充的十进制数。                                                                    | 00, 01, …, 59                                         |
| `%f` | 微秒，左侧零填充的十进制数。                                                              | 000000, 000001, …, 999999                             |
| `%z` | UTC 偏移量，格式为 `±HHMM[SS[.ffffff]]`（如果对象是 naive 则为空字符串）。                | (empty), +0000, -0400, +1030, +063415, -030712.345216 |
| `%Z` | 时区名称（如果对象是 naive 则为空字符串）。                                               | (empty), UTC, GMT                                     |
| `%j` | 一年中的第几天，零填充的十进制数。                                                        | 001, 002, …, 366                                      |
| `%U` | 一年中的周数（星期日为一周的第一天），零填充的十进制数。新年前的任何一天都被视为第 0 周。 | 00, 01, …, 53                                         |
| `%W` | 一年中的周数（星期一为一周的第一天），十进制数。新年前的任何一天都被视为第 0 周。         | 00, 01, …, 53                                         |
| `%c` | 本地化合适的日期和时间表示。                                                              | Tue Aug 16 21:30:00 1988 (en_US)                      |
| `%x` | 本地化合适的日期表示。                                                                    | 08/16/88 (None)                                       |
| `%X` | 本地化合适的时间表示。                                                                    | 21:30:00 (en_US)                                      |
| `%%` | 字面上的 `'%'` 字符。                                                                     | %                                                     |

## timedelta()

`timedelta` 对象表示两个日期或时间之间的时间差。

```python
from datetime import datetime

# 创建两个 datetime 对象
date_1 = datetime.strptime('12-Jul-2023', '%d-%b-%Y')
date_2 = datetime.strptime('01-Jan-2024', '%d-%b-%Y')

# 计算差异（返回 timedelta）
difference = date_2 - date_1
difference
```

```output
datetime.timedelta(days=173)
```

```python
# 从 timedelta 获取天数
difference.days
```

```output
173
```

`timedelta` 可以向 datetime 对象添加 `days`、`seconds` 和 `microseconds`：

```python
from datetime import datetime, timedelta

# 获取当前 datetime 以进行 timedelta 操作
now = datetime.now()
now
```

```output
datetime.datetime(2022, 7, 23, 21, 25, 2, 341081)
```

```python
# 向当前 datetime 添加 10 天和 15 秒
now + timedelta(days=10, seconds=15)
```

```output
datetime.datetime(2022, 8, 2, 21, 25, 17, 341081)
```

并且可以从 datetime 对象中减去 `days`、`seconds` 和 `microseconds`：

```python
from datetime import datetime, timedelta

# 获取当前 datetime 以进行减法示例
now = datetime.now()
now
```

```output
datetime.datetime(2022, 7, 23, 21, 25, 2, 341081)
```

```python
# 从当前 datetime 减去 10 天和 15 秒
now - timedelta(days=10, seconds=15)
```

```output
datetime.datetime(2022, 7, 13, 21, 59, 41, 100883)
```

## 相关链接

- <router-link to="/cheatsheet/string-formatting">速查表：字符串格式化</router-link>
- <router-link to="/blog/python-data-types">博客：Python 数据类型</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/print">print()</router-link>
