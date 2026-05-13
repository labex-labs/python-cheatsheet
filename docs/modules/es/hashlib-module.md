---
title: "Módulo Hashlib de Python - Hoja de trucos de Python"
description: "El módulo `hashlib` proporciona funciones hash seguras como SHA-256 y MD5."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Hashlib de Python
</base-title>

El módulo `hashlib` proporciona funciones hash seguras como SHA-256 y MD5.

```python
import hashlib
```

Las funciones hash convierten los datos en un resumen de longitud fija. Un pequeño cambio en la entrada produce un resumen muy diferente.

## Crear un hash

Normalmente empiezas eligiendo un algoritmo y pasando bytes.

```python
import hashlib

digest = hashlib.sha256(b'hello world')
print(digest.hexdigest())
```

```output
b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
```

Las cadenas deben codificarse primero a bytes:

```python
import hashlib

message = 'hello world'
digest = hashlib.sha256(message.encode('utf-8')).hexdigest()
print(digest)
```

```output
b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
```

## Actualización incremental

Los hashes se pueden actualizar por partes.

```python
hasher = hashlib.sha256()
hasher.update(b'hello ')
hasher.update(b'world')
print(hasher.hexdigest())
```

```output
b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
```

## Comparar algoritmos

Los distintos algoritmos producen resúmenes de distinto tamaño.

```python
print(hashlib.md5(b'abc').hexdigest())
print(hashlib.sha1(b'abc').hexdigest())
print(hashlib.sha256(b'abc').hexdigest())
```

```output
900150983cd24fb0d6963f7d28e17f72
a9993e364706816aba3e25717850c26c9cd0d89d
ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad
```

## Calcular el hash de un archivo

Lee los archivos por bloques para no tener que cargar archivos grandes completos en memoria.

```python
import hashlib
from pathlib import Path

path = Path('example.txt')
path.write_text('hello world')

hasher = hashlib.sha256()
with path.open('rb') as file:
    for chunk in iter(lambda: file.read(8192), b''):
        hasher.update(chunk)

print(hasher.hexdigest())
path.unlink()
```

```output
b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
```

<base-warning>
  <base-warning-title>
    WARNING
  </base-warning-title>
  <base-warning-content>
    Para código nuevo, prefiere algoritmos modernos como SHA-256 o SHA-512. MD5 y SHA-1 siguen siendo útiles para sumas de comprobación, pero no son adecuados para usos sensibles a la seguridad.
  </base-warning-content>
</base-warning>

## Enlaces relacionados

- <router-link to="/modules/pathlib-module">Module: pathlib</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Hoja de trucos: Leer y escribir archivos</router-link>
- <router-link to="/builtin/open">open()</router-link>
