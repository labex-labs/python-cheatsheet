---
title: "Модуль Zoneinfo Python - Шпаргалка Python"
description: "Модуль `zoneinfo` предоставляет поддержку часовых поясов IANA для объектов `datetime`."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Модуль Zoneinfo Python
</base-title>

Модуль `zoneinfo` предоставляет поддержку часовых поясов IANA для объектов `datetime`.

Модуль был добавлен в Python 3.9.

```python
from datetime import datetime
from zoneinfo import ZoneInfo
```

Используйте `zoneinfo`, когда нужны реальные часовые пояса, такие как `Asia/Shanghai`, `Europe/London` или `America/New_York`.

## Создание datetime с учетом часового пояса

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

Значение `tzinfo` делает datetime учитывающим часовой пояс. Это безопаснее, чем работать с наивным datetime, когда пользователи находятся в разных странах.

## Преобразование между часовыми поясами

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

Дата изменилась, потому что 1:00 UTC 13 мая 2025 года в Нью-Йорке все еще соответствовало вечеру 12 мая.

## Просмотр ключа часового пояса

Атрибут `key` хранит имя часового пояса IANA.

```python
from zoneinfo import ZoneInfo

zone = ZoneInfo('Asia/Shanghai')
print(zone.key)
```

```output
Asia/Shanghai
```

## Ссылки по теме

- <router-link to="/modules/datetime-module">Модуль: datetime</router-link>
- <router-link to="/cheatsheet/basics">Шпаргалка: основы</router-link>
