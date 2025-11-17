---
title: 'Módulo Zipfile de Python - Hoja de Trucos de Python'
description: 'Este módulo ofrece herramientas para crear, leer, escribir, añadir y listar un archivo ZIP.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Python Zipfile
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/zipfile.html">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Este módulo proporciona herramientas para crear, leer, escribir, añadir y listar un archivo ZIP.
  </base-disclaimer-content>
</base-disclaimer>

## Lectura de archivos ZIP

```python
import zipfile

# Abrir archivo ZIP y leer su contenido
with zipfile.ZipFile('example.zip') as example_zip:
    # Listar todos los archivos y directorios en el ZIP
    print(example_zip.namelist())
    # Obtener metadatos para un archivo específico
    spam_info = example_zip.getinfo('spam.txt')
    # Imprimir tamaño original del archivo
    print(spam_info.file_size)
    # Imprimir tamaño del archivo comprimido
    print(spam_info.compress_size)
    # Calcular la relación de compresión
    print('El archivo comprimido es %sx más pequeño!' % (round(spam_info.file_size / spam_info.compress_size, 2)))
```

Salida:

```plaintext
['spam.txt', 'cats/', 'cats/catnames.txt', 'cats/zophie.jpg']
13908
3828
El archivo comprimido es 3.63x más pequeño!
```

## Extracción de archivos ZIP

El método `extractall()` para objetos ZipFile extrae todos los archivos y carpetas de un archivo ZIP al directorio de trabajo actual.

```python
# Extraer todos los archivos del ZIP al directorio actual
with zipfile.ZipFile('example.zip') as example_zip:
    example_zip.extractall()
```

El método `extract()` para objetos ZipFile extraerá un único archivo del archivo ZIP:

```python
# Extraer un único archivo del ZIP
with zipfile.ZipFile('example.zip') as example_zip:
    # Extraer al directorio actual (devuelve la ruta)
    print(example_zip.extract('spam.txt'))
    # Extraer a un directorio específico
    print(example_zip.extract('spam.txt', '/tmp/some/new/folders'))
```

Salida:

```plaintext
/tmp/spam.txt
/tmp/some/new/folders/spam.txt
```

## Creación y adición a archivos ZIP

```python
import zipfile

# Crear un nuevo archivo ZIP y añadirle un archivo
with zipfile.ZipFile('new.zip', 'w') as new_zip:
    # Añadir archivo con compresión
    new_zip.write('spam.txt', compress_type=zipfile.ZIP_DEFLATED)
```

Este código creará un nuevo archivo ZIP llamado new.zip que contiene el contenido comprimido de spam.txt.

## Lectura de metadatos de archivos ZIP

### Obtener los nombres de archivo con namelist()

```python
import zipfile

# Leer archivo ZIP y listar todos los nombres de archivo
with zipfile.ZipFile('example.zip', 'r') as zf:
    print(zf.namelist())
```

Salida:

```plaintext
['README.txt']
```

### Obtener todos los metadatos con infolist()

```python
import datetime
import zipfile

# Obtener metadatos detallados para todos los archivos en el ZIP
with zipfile.ZipFile('example.zip') as zf:
    for info in zf.infolist():
        # Determinar el sistema operativo (0 = Windows, 3 = Unix)
        system = 'Windows' if info.create_system == 0 else 'Unix'
        # Convertir la tupla date_time a objeto datetime
        modified = datetime.datetime(*info.date_time)
        print(info.filename)
        print(f'Comentario  : {info.comment}')
        print(f'Modificado  : {modified}')
        print(f'Sistema     : {system}')
        print(f'Versión ZIP : {info.create_version}')
        print(f'Comprimido  : {info.compress_size} bytes')
        print(f'Sin comprimir: {info.file_size} bytes')
```

Salida:

```plaintext
README.txt
Comentario  : b''
Modificado  : 2022-11-15 06:48:02
Sistema     : Unix
Versión ZIP : 30
Comprimido  : 65 bytes
Sin comprimir: 76 bytes
```

## Enlaces relevantes

- <router-link to="/cheatsheet/reading-and-writing-files">Cheatsheet: Lectura y Escritura de Archivos</router-link>
- <router-link to="/cheatsheet/file-directory-path">Cheatsheet: Ruta de Archivo y Directorio</router-link>
- <router-link to="/cheatsheet/context-manager">Cheatsheet: Context Managers</router-link>
- <router-link to="/modules/os-module">Módulo: os</router-link>
- <router-link to="/modules/pathlib-module">Módulo: pathlib</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
