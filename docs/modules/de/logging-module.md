---
title: "Python Logging Modul - Python Spickzettel"
description: "Das `logging`-Modul ermöglicht es dir, debug-, info-, warning-, error- und exception-Meldungen konsistent aufzuzeichnen."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Logging Modul
</base-title>

Das `logging`-Modul ermöglicht es dir, debug-, info-, warning-, error- und exception-Meldungen konsistent aufzuzeichnen.

```python
import logging
```

Verwende `logging` statt `print()`, wenn Meldungen unterschiedliche Wichtigkeitsstufen haben oder später in eine Datei geschrieben werden sollen.

## Grundkonfiguration

`basicConfig` konfiguriert den Standard-Logger.

```python
import logging

logging.basicConfig(level=logging.INFO)
logging.info('Application started')
logging.warning('Low disk space')
```

```output
INFO:root:Application started
WARNING:root:Low disk space
```

Meldungen unterhalb des konfigurierten Levels werden ignoriert:

```python
import logging

logging.basicConfig(level=logging.WARNING)
logging.info('Hidden message')
logging.warning('Visible message')
```

```output
WARNING:root:Visible message
```

## Einen benannten Logger erstellen

Benannte Logger sind in größeren Anwendungen nützlich.

```python
import logging

logger = logging.getLogger('app.users')
logger.setLevel(logging.INFO)
print(logger.name)
```

```output
app.users
```

## Meldungen formatieren

Du kannst das Ausgabeformat anpassen.

```python
import logging

logging.basicConfig(
    level=logging.INFO,
    format='%(levelname)s:%(name)s:%(message)s',
)

logger = logging.getLogger('app')
logger.info('Ready')
```

```output
INFO:app:Ready
```

## Ausnahmen protokollieren

`logger.exception` zeichnet innerhalb eines `except`-Blocks automatisch den Traceback auf.

```python
import logging

logging.basicConfig(level=logging.ERROR)
logger = logging.getLogger(__name__)

try:
    1 / 0
except ZeroDivisionError:
    logger.exception('Calculation failed')
```

```output
ERROR:__main__:Calculation failed
Traceback (most recent call last):
...
ZeroDivisionError: division by zero
```

## Relevante Links

- <router-link to="/cheatsheet/debugging">Spickzettel: Debugging</router-link>
- <router-link to="/cheatsheet/exception-handling">Spickzettel: Fehlerbehandlung</router-link>
- <router-link to="/modules/sys-module">Modul: sys</router-link>
