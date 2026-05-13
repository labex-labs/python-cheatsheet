---
title: Módulo Zoneinfo do Python - Folha de Referência Python
description: O módulo `zoneinfo` fornece suporte a fuso horário IANA para objetos `datetime`.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Zoneinfo do Python
</base-title>

O módulo `zoneinfo` fornece suporte a fuso horário IANA para objetos `datetime`.

O módulo foi adicionado no Python 3.9.

```python
from datetime import datetime
from zoneinfo import ZoneInfo
```

Use `zoneinfo` quando precisar de fusos horários reais como `Asia/Shanghai`, `Europe/London` ou `America/New_York`.

## Criando datetimes com fuso horário

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

O valor `tzinfo` torna o datetime ciente do fuso horário. Isso é mais seguro do que trabalhar com um datetime ingênuo quando os usuários estão em países diferentes.

## Convertendo entre fusos horários

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

A data mudou porque 1:00 UTC em 13 de maio de 2025 ainda era a noite de 12 de maio em Nova York.

## Exibindo a chave do fuso horário

O atributo `key` armazena o nome do fuso horário IANA.

```python
from zoneinfo import ZoneInfo

zone = ZoneInfo('Asia/Shanghai')
print(zone.key)
```

```output
Asia/Shanghai
```

## Links relacionados

- <router-link to="/modules/datetime-module">Módulo: datetime</router-link>
- <router-link to="/cheatsheet/basics">Folha de Referência: Conceitos básicos</router-link>
