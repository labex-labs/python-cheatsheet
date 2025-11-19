---
title: 'Python datetime モジュール - Python チートシート'
description: 'datetime モジュールは、date、time、datetime の 3 つのデータ型を提供し、日付と時刻の操作を可能にします。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Datetime モジュール
</base-title>

Datetime モジュールを使用すると、日付と時刻のオブジェクトを扱うことができます。これは、`date`、`time`、`datetime` の 3 つの追加データ型を提供します。

```python
import datetime
```

## date()

```python
datetime.date(year: int, month: int, day: int)
```

`date` メソッドは、`year`、`month`、`day` 属性を持つ date オブジェクトを返します。

```python
from datetime import date
# date オブジェクトを作成
obj = date(2022, 12, 1)
# year 属性にアクセス
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

`time` メソッドは、`hour`、`minute`、`second`、`microsecond`、`tzinfo` 属性を持つ time オブジェクトを返します。

```python
from datetime import time
# time オブジェクトを作成
obj = time(10, 20, 33)
# hour 属性にアクセス
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

`datetime` は、`date` オブジェクトと `time` オブジェクトの両方の属性を持つオブジェクトを返します。

```python
from datetime import datetime
# 日付と時刻を持つ datetime オブジェクトを作成
obj = datetime(2024, 12, 1, 15, 35, 59)
# year 属性にアクセス
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

## now() および today()

`now` および `today` メソッドは、システムの正確な日時を持つ `datetime` オブジェクトを返します。

```python
from datetime import datetime
# 現在の日付と時刻を取得
now = datetime.now()
now
```

```output
datetime.datetime(2022, 7, 23, 19, 56, 49, 589806)
```

返されるオブジェクトは `datetime` であるため、`date` 属性と `time` 属性の両方にアクセスできます。

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

さらに、`now` はオプションのパラメーターとして [タイムゾーン](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) オブジェクトを受け取ることができます。

```python
from datetime import datetime, timezone
# 現在の UTC 時刻を取得
datetime.now(timezone.utc)
```

```output
datetime.datetime(2022, 7, 24, 0, 20, 8, 265634, tzinfo=datetime.timezone.utc)
```

_timezone_ パラメーターが指定されていない場合、`now` はシステムのタイムゾーンをデフォルトとします。

## strftime() および strptime()

`strftime` メソッドと `strptime` メソッドを使用すると、文字列と datetime オブジェクトの間を簡単に変換できます。

### strftime()

`strftime` を使用すると、Python の datetime オブジェクトから人間が読みやすい形式の文字列を作成できます。

```python
from datetime import datetime
# フォーマットの例のために現在の datetime を取得
now = datetime.now()
now
```

```output
datetime.datetime(2022, 7, 23, 20, 31, 19, 751479)
```

```python
# datetime を日 - 月 (省略形)-年 の形式にフォーマット
now.strftime("%d-%b-%Y")
```

```output
'23-Jul-2022'
```

```python
# datetime を日 - 月 (数値)-年 の形式にフォーマット
now.strftime("%d-%m-%Y")
```

```output
'23-07-2022'
```

```python
# datetime を月/日/年の形式にフォーマット
now.strftime("%m/%d/%Y")
```

```output
'07/23/2022'
```

```python
# datetime を月/日/年 - 時：分：秒 の形式にフォーマット
now.strftime("%b/%d/%Y - %H:%M:%S")
```

```output
'Jul/23/2022 - 20:31:19'
```

`strftime` に渡される文字列は少し奇妙に見えるかもしれませんが、その意味を理解するのは非常に簡単です。例えば、`%m/%d/%Y` は月、日、年を `/` で区切って返します (`07/23/2022`)。

### strptime()

`strptime` メソッドは、文字列から `datetime` オブジェクトを作成します。

このメソッドは 2 つのパラメーターを受け取ります。

```python
obj.strptime(datetime_string, format)
```

- datetime オブジェクトを表す文字列。
- その文字列に対応する Python のフォーマットコード。

```python
from datetime import datetime

# 文字列を datetime オブジェクトに解析
datetime_str = '12-Jul-2023'
datetime.strptime(datetime_str, '%d-%b-%Y')
```

```output
datetime.datetime(2023, 7, 12, 0, 0)
```

```python
# 日付と時刻を含む文字列を解析
datetime_str = 'Jul/12/2023 - 14:38:37'
datetime.strptime(datetime_str, "%b/%d/%Y - %H:%M:%S")
```

```output
datetime.datetime(2023, 7, 12, 14, 38, 37)
```

### フォーマットコード

| ディレクティブ | 意味                                                                                                                                      | 例                                                    |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| `%a`           | ロケールに適した曜日の省略名。                                                                                                            | Sun, Mon, …, Sat (en_US)                              |
| `%A`           | ロケールに適した曜日の完全な名前。                                                                                                        | Sunday, Monday, …, Saturday (en_US)                   |
| `%w`           | 曜日を 10 進数で表したもの（日曜日が 0、土曜日が 6）。                                                                                    | 0, 1, …, 6                                            |
| `%d`           | 月の日をゼロ埋めした 10 進数で表したもの。                                                                                                | 01, 02, …, 31                                         |
| `%b`           | ロケールに適した月の省略名。                                                                                                              | Jan, Feb, …, Dec (en_US)                              |
| `%B`           | ロケールに適した月の完全な名前。                                                                                                          | January, February, …, December (en_US)                |
| `%m`           | 月をゼロ埋めした 10 進数で表したもの。                                                                                                    | 01, 02, …, 12                                         |
| `%y`           | 世紀なしの年をゼロ埋めした 10 進数で表したもの。                                                                                          | 00, 01, …, 99                                         |
| `%Y`           | 世紀を含む年を 10 進数で表したもの。                                                                                                      | 0001, 0002, …, 2013, 2014, …, 9998, 9999              |
| `%H`           | 24 時間表記の時をゼロ埋めした 10 進数で表したもの。                                                                                       | 00, 01, …, 23                                         |
| `%I`           | 12 時間表記の時をゼロ埋めした 10 進数で表したもの。                                                                                       | 01, 02, …, 12                                         |
| `%p`           | ロケールに適した AM または PM の同等表現。                                                                                                | AM, PM (en_US)                                        |
| `%M`           | 分をゼロ埋めした 10 進数で表したもの。                                                                                                    | 00, 01, …, 59                                         |
| `%S`           | 秒をゼロ埋めした 10 進数で表したもの。                                                                                                    | 00, 01, …, 59                                         |
| `%f`           | マイクロ秒を 10 進数で表したもの（左側をゼロ埋め）。                                                                                      | 000000, 000001, …, 999999                             |
| `%z`           | UTC オフセットを `±HHMM[SS[.ffffff]]` 形式で表したもの（オブジェクトが naive な場合は空文字列）。                                         | (empty), +0000, -0400, +1030, +063415, -030712.345216 |
| `%Z`           | タイムゾーン名（オブジェクトが naive な場合は空文字列）。                                                                                 | (empty), UTC, GMT                                     |
| `%j`           | その年の何日目かをゼロ埋めした 10 進数で表したもの。                                                                                      | 001, 002, …, 366                                      |
| `%U`           | その年の週番号（日曜日を週の最初とする）をゼロ埋めした 10 進数で表したもの。新しい年の最初の日曜日の前のすべての日は週 0 と見なされます。 | 00, 01, …, 53                                         |
| `%W`           | その年の週番号（月曜日を週の最初とする）を 10 進数で表したもの。新しい年の最初の月曜日の前のすべての日は週 0 と見なされます。             | 00, 01, …, 53                                         |
| `%c`           | ロケールに適した日付と時刻の表現。                                                                                                        | Tue Aug 16 21:30:00 1988 (en_US)                      |
| `%x`           | ロケールに適した日付の表現。                                                                                                              | 08/16/88 (None)                                       |
| `%X`           | ロケールに適した時刻の表現。                                                                                                              | 21:30:00 (en_US)                                      |
| `%%`           | リテラルの `'%'` 文字。                                                                                                                   | %                                                     |

## timedelta()

`timedelta` オブジェクトは、2 つの日付または時刻の差を表します。

```python
from datetime import datetime

# 2 つの datetime オブジェクトを作成
date_1 = datetime.strptime('12-Jul-2023', '%d-%b-%Y')
date_2 = datetime.strptime('01-Jan-2024', '%d-%b-%Y')

# 差を計算（timedelta を返す）
difference = date_2 - date_1
difference
```

```output
datetime.timedelta(days=173)
```

```python
# timedelta から日数を取得
difference.days
```

```output
173
```

`timedelta` は、`days`、`seconds`、`microseconds` を datetime オブジェクトに加算できます。

```python
from datetime import datetime, timedelta

# timedelta 操作のために現在の datetime を取得
now = datetime.now()
now
```

```output
datetime.datetime(2022, 7, 23, 21, 25, 2, 341081)
```

```python
# 現在の datetime に 10 日と 15 秒を加算
now + timedelta(days=10, seconds=15)
```

```output
datetime.datetime(2022, 8, 2, 21, 25, 17, 341081)
```

また、`days`、`seconds`、`microseconds` を datetime オブジェクトから減算することもできます。

```python
from datetime import datetime, timedelta

# 減算の例のために現在の datetime を取得
now = datetime.now()
now
```

```output
datetime.datetime(2022, 7, 23, 21, 25, 2, 341081)
```

```python
# 現在の datetime から 10 日と 15 秒を減算
now - timedelta(days=10, seconds=15)
```

```output
datetime.datetime(2022, 7, 13, 21, 59, 41, 100883)
```

## 関連リンク

- <router-link to="/cheatsheet/string-formatting">チートシート：文字列フォーマット</router-link>
- <router-link to="/blog/python-data-types">ブログ：Python データ型</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/print">print()</router-link>
