---
title: "Python Zoneinfo モジュール - Python チートシート"
description: "`zoneinfo` モジュールは、`datetime` オブジェクトに IANA タイムゾーンのサポートを提供します。"
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Zoneinfo モジュール
</base-title>

`zoneinfo` モジュールは、`datetime` オブジェクトに IANA タイムゾーンのサポートを提供します。

このモジュールは Python 3.9 で追加されました。

```python
from datetime import datetime
from zoneinfo import ZoneInfo
```

`Asia/Shanghai`、`Europe/London`、`America/New_York` のような実在のタイムゾーンが必要なときに `zoneinfo` を使います。

## タイムゾーン対応の datetime を作成する

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

`tzinfo` の値を指定すると、datetime はタイムゾーン対応になります。ユーザーが異なる国にいる場合、タイムゾーンなしの datetime を扱うより安全です。

## タイムゾーン間を変換する

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

2025 年 5 月 13 日 1:00 UTC は、ニューヨークではまだ 5 月 12 日の夜だったため、日付が変わっています。

## タイムゾーンキーを表示する

`key` 属性には IANA タイムゾーン名が入ります。

```python
from zoneinfo import ZoneInfo

zone = ZoneInfo('Asia/Shanghai')
print(zone.key)
```

```output
Asia/Shanghai
```

## 関連リンク

- <router-link to="/modules/datetime-module">モジュール: datetime</router-link>
- <router-link to="/cheatsheet/basics">チートシート: 基礎</router-link>
