---
title: "Módulo Logging do Python - Folha de Referência Python"
description: "O módulo `logging` permite registrar mensagens de debug, info, warning, error e exception de forma consistente."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Logging do Python
</base-title>

O módulo `logging` permite registrar mensagens de debug, info, warning, error e exception de forma consistente.

```python
import logging
```

Use `logging` em vez de `print()` quando as mensagens tiverem níveis de importância diferentes ou quando você puder enviá-las para um arquivo depois.

## Configuração básica

`basicConfig` configura o logger padrão.

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

Mensagens abaixo do nível configurado são ignoradas.

```python
import logging

logging.basicConfig(level=logging.WARNING)
logging.info('Hidden message')
logging.warning('Visible message')
```

```output
WARNING:root:Visible message
```

## Criando um logger nomeado

Loggers nomeados são úteis em aplicações maiores.

```python
import logging

logger = logging.getLogger('app.users')
logger.setLevel(logging.INFO)
print(logger.name)
```

```output
app.users
```

## Formatando mensagens

Você pode personalizar o formato de saída.

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

## Registrando exceções

`logger.exception` registra automaticamente o traceback dentro de um bloco `except`.

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

## Links relacionados

- <router-link to="/cheatsheet/debugging">Folha de Referência: Depuração</router-link>
- <router-link to="/cheatsheet/exception-handling">Folha de Referência: Tratamento de exceções</router-link>
- <router-link to="/modules/sys-module">Módulo: sys</router-link>
