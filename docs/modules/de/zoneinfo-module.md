---
title: "Python Zoneinfo Modul - Python Spickzettel"
description: "Das `zoneinfo`-Modul bietet IANA-Zeitzonenunterstützung für `datetime`-Objekte."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Zoneinfo Modul
</base-title>

Das `zoneinfo`-Modul bietet IANA-Zeitzonenunterstützung für `datetime`-Objekte.

Das Modul wurde in Python 3.9 hinzugefügt.

```python
from datetime import datetime
from zoneinfo import ZoneInfo
```

Verwende `zoneinfo`, wenn du reale Zeitzonen wie `Asia/Shanghai`, `Europe/London` oder `America/New_York` brauchst.

## Zeitzonenbewusste Datetimes erstellen

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

Der `tzinfo`-Wert macht das `datetime` zeitzonenbewusst. Das ist sicherer als mit einem naiven `datetime` zu arbeiten, wenn sich Nutzer in verschiedenen Ländern befinden.

## Zwischen Zeitzonen konvertieren

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

Das Datum hat sich geändert, weil 1:00 UTC am 13. Mai 2025 in New York noch der Abend des 12. Mai war.

## Den Zeitzonenschlüssel anzeigen

Das Attribut `key` speichert den IANA-Zeitzonennamen.

```python
from zoneinfo import ZoneInfo

zone = ZoneInfo('Asia/Shanghai')
print(zone.key)
```

```output
Asia/Shanghai
```

## Relevante Links

- <router-link to="/modules/datetime-module">Modul: datetime</router-link>
- <router-link to="/cheatsheet/basics">Spickzettel: Grundlagen</router-link>
