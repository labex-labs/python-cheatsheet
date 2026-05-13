---
title: Module Zoneinfo Python - Aide-mémoire Python
description: Le module `zoneinfo` fournit la prise en charge des fuseaux horaires IANA pour les objets `datetime`.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Module Zoneinfo Python
</base-title>

Le module `zoneinfo` fournit la prise en charge des fuseaux horaires IANA pour les objets `datetime`.

Le module a été ajouté dans Python 3.9.

```python
from datetime import datetime
from zoneinfo import ZoneInfo
```

Utilisez `zoneinfo` lorsque vous avez besoin de fuseaux horaires réels comme `Asia/Shanghai`, `Europe/London` ou `America/New_York`.

## Créer des datetime avec fuseau horaire

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

La valeur `tzinfo` rend le `datetime` sensible au fuseau horaire. C’est plus sûr qu’un `datetime` naïf lorsque les utilisateurs se trouvent dans des pays différents.

## Convertir entre fuseaux horaires

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

La date a changé parce que 1:00 UTC le 13 mai 2025 correspondait encore au soir du 12 mai à New York.

## Afficher la clé du fuseau horaire

L’attribut `key` stocke le nom du fuseau horaire IANA.

```python
from zoneinfo import ZoneInfo

zone = ZoneInfo('Asia/Shanghai')
print(zone.key)
```

```output
Asia/Shanghai
```

## Liens pertinents

- <router-link to="/modules/datetime-module">Module : datetime</router-link>
- <router-link to="/cheatsheet/basics">Aide-mémoire : Bases</router-link>
