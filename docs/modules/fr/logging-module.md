---
title: "Module Logging Python - Aide-mémoire Python"
description: "Le module `logging` vous permet d’enregistrer des messages debug, info, warning, error et exception de manière cohérente."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Module Logging Python
</base-title>

Le module `logging` vous permet d’enregistrer des messages debug, info, warning, error et exception de manière cohérente.

```python
import logging
```

Utilisez `logging` à la place de `print()` lorsque les messages ont des niveaux d’importance différents, ou si vous souhaitez plus tard les envoyer vers un fichier.

## Configuration de base

`basicConfig` configure le logger par défaut.

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

Les messages situés sous le niveau configuré sont ignorés :

```python
import logging

logging.basicConfig(level=logging.WARNING)
logging.info('Hidden message')
logging.warning('Visible message')
```

```output
WARNING:root:Visible message
```

## Créer un logger nommé

Les loggers nommés sont utiles dans les applications plus grandes.

```python
import logging

logger = logging.getLogger('app.users')
logger.setLevel(logging.INFO)
print(logger.name)
```

```output
app.users
```

## Formater les messages

Vous pouvez personnaliser le format de sortie.

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

## Journaliser les exceptions

`logger.exception` enregistre automatiquement la traceback à l’intérieur d’un bloc `except`.

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

## Liens pertinents

- <router-link to="/cheatsheet/debugging">Aide-mémoire : Débogage</router-link>
- <router-link to="/cheatsheet/exception-handling">Aide-mémoire : Gestion des exceptions</router-link>
- <router-link to="/modules/sys-module">Module : sys</router-link>
