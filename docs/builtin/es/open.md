---
title: 'Función integrada open() de Python - Hoja de trucos de Python'
description: 'Abre un archivo y devuelve un objeto de archivo correspondiente. Si el archivo no se puede abrir, se genera un OSError. Consulte Lectura y escritura de archivos para obtener más ejemplos de cómo usar esta función.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada open() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#open">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Abre un archivo y devuelve un objeto de archivo correspondiente. Si el archivo no se puede abrir, se genera un OSError. Consulte <router-link to="/cheatsheet/file-directory-path">Lectura y Escritura de Archivos</router-link> para obtener más ejemplos de cómo usar esta función.
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `open()` en Python se utiliza para abrir un archivo y devuelve un objeto de archivo. Es la forma estándar de interactuar con archivos en su sistema. Puede especificar el modo para abrir el archivo, como lectura, escritura o anexar.

## Ejemplos

```python
# Abre un archivo completamente nuevo (el modo 'x' generará un error si ya existe)
spam = open('spam.txt', mode='x')
spam.write('Mi primera línea\n\n')
spam.close()
```

```python
# Anexa al archivo y lo cierra automáticamente después
with open('spam.txt', mode='a') as spam:
    spam.write('Mi segunda línea')
```

```python
with open('spam.txt') as spam:
    content = spam.read()
    print(content)
```

```output
Mi primera línea

Mi segunda línea
```

## Enlaces relevantes

- <router-link to="/cheatsheet/reading-and-writing-files">Hoja de trucos: Lectura y Escritura de Archivos</router-link>
- <router-link to="/cheatsheet/file-directory-path">Hoja de trucos: Ruta de Archivo y Directorio</router-link>
- <router-link to="/cheatsheet/context-manager">Hoja de trucos: Gestores de Contexto (declaración with)</router-link>
- <router-link to="/blog/python-pathlib-essentials">Blog: Fundamentos de Pathlib</router-link>
- <router-link to="/modules/os-module">Módulo: os</router-link>
- <router-link to="/modules/pathlib-module">Módulo: pathlib</router-link>
