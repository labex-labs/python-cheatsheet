---
title: "Módulo Logging de Python - Hoja de trucos de Python"
description: "El módulo `logging` te permite registrar mensajes de debug, info, warning, error y exception de forma coherente."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Logging de Python
</base-title>

El módulo `logging` te permite registrar mensajes de debug, info, warning, error y exception de forma coherente.

```python
import logging
```

Usa `logging` en lugar de `print()` cuando los mensajes tengan distintos niveles de importancia o cuando más adelante quieras enviarlos a un archivo.

## Configuración básica

`basicConfig` configura el registrador predeterminado.

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

Los mensajes por debajo del nivel configurado se ignoran:

```python
import logging

logging.basicConfig(level=logging.WARNING)
logging.info('Hidden message')
logging.warning('Visible message')
```

```output
WARNING:root:Visible message
```

## Crear un registrador con nombre

Los registradores con nombre son útiles en aplicaciones grandes.

```python
import logging

logger = logging.getLogger('app.users')
logger.setLevel(logging.INFO)
print(logger.name)
```

```output
app.users
```

## Dar formato a los mensajes

Puedes personalizar el formato de salida.

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

## Registrar excepciones

`logger.exception` registra automáticamente el traceback dentro de un bloque `except`.

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

## Enlaces relacionados

- <router-link to="/cheatsheet/debugging">Hoja de trucos: Depuración</router-link>
- <router-link to="/cheatsheet/exception-handling">Hoja de trucos: Manejo de excepciones</router-link>
- <router-link to="/modules/sys-module">Módulo: sys</router-link>
