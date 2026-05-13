---
title: "Módulo Zoneinfo de Python - Hoja de trucos de Python"
description: "El módulo `zoneinfo` proporciona soporte para zonas horarias IANA en objetos `datetime`."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Zoneinfo de Python
</base-title>

El módulo `zoneinfo` proporciona soporte para zonas horarias IANA en objetos `datetime`.

El módulo se añadió en Python 3.9.

```python
from datetime import datetime
from zoneinfo import ZoneInfo
```

Usa `zoneinfo` cuando necesites zonas horarias reales como `Asia/Shanghai`, `Europe/London` o `America/New_York`.

## Crear datetimes con zona horaria

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

El valor `tzinfo` convierte el `datetime` en un objeto con zona horaria. Esto es más seguro que trabajar con un `datetime` ingenuo cuando los usuarios están en distintos países.

## Convertir entre zonas horarias

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

La fecha cambió porque las 1:00 UTC del 13 de mayo de 2025 todavía eran la noche del 12 de mayo en Nueva York.

## Ver la clave de la zona horaria

El atributo `key` almacena el nombre de la zona horaria IANA.

```python
from zoneinfo import ZoneInfo

zone = ZoneInfo('Asia/Shanghai')
print(zone.key)
```

```output
Asia/Shanghai
```

## Enlaces relacionados

- <router-link to="/modules/datetime-module">Módulo: datetime</router-link>
- <router-link to="/cheatsheet/basics">Hoja de trucos: Conceptos básicos</router-link>
