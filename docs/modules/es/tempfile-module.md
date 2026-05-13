---
title: "Módulo Tempfile de Python - Hoja de trucos de Python"
description: "El módulo `tempfile` crea archivos y directorios temporales de forma segura."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Tempfile de Python
</base-title>

El módulo `tempfile` crea archivos y directorios temporales de forma segura.

```python
import tempfile
```

Usa `tempfile` para datos que solo deban existir mientras se ejecuta tu programa, como resultados de pruebas, descargas o archivos intermedios.

## TemporaryFile()

`TemporaryFile` crea un objeto de archivo que se limpia automáticamente.

```python
import tempfile

with tempfile.TemporaryFile(mode='w+t') as temp:
    temp.write('hello')
    temp.seek(0)
    print(temp.read())
```

```output
hello
```

El archivo se elimina automáticamente cuando termina el bloque `with`.

## NamedTemporaryFile()

`NamedTemporaryFile` te da una ruta en disco.

```python
import tempfile

with tempfile.NamedTemporaryFile(mode='w+t') as temp:
    print(bool(temp.name))
```

```output
True
```

Esto es útil cuando otra API necesita un nombre de archivo en lugar de un objeto de archivo.

## TemporaryDirectory()

Los directorios temporales son útiles para pruebas y espacios de trabajo de corta duración.

```python
import tempfile
from pathlib import Path

with tempfile.TemporaryDirectory() as directory:
    file_path = Path(directory) / 'notes.txt'
    file_path.write_text('draft')
    print(file_path.exists())
```

```output
True
```

Los archivos dentro del directorio se eliminan junto con él cuando sale el bloque.

## Elegir una ubicación temporal

`gettempdir()` muestra el directorio que usa Python de forma predeterminada.

```python
import tempfile

print(bool(tempfile.gettempdir()))
```

```output
True
```

## Enlaces relacionados

- <router-link to="/modules/pathlib-module">Módulo: pathlib</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Hoja de trucos: Leer y escribir archivos</router-link>
- <router-link to="/builtin/open">open()</router-link>
