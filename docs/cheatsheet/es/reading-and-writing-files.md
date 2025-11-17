---
title: 'Lectura y Escritura de Archivos - Hoja de Trucos de Python'
description: "Para leer/escribir en un archivo en Python, use la declaración 'with', que cerrará el archivo automáticamente, gestionando los recursos por usted."
labUrl: 'https://labex.io/es/labs/python-python-reading-and-writing-files-633663?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Lectura y Escritura de Archivos
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Para una mirada más profunda a la manipulación de rutas de archivos y directorios, consulte la página <router-link to="/cheatsheet/file-directory-path">Rutas de Archivos y Directorios</router-link>.

## El proceso de Lectura/Escritura de archivos

Para leer/escribir en un archivo en Python, querrá usar la declaración `with`, que cerrará el archivo por usted una vez que haya terminado, gestionando los recursos disponibles.

## Abrir y leer archivos

La función `open` abre un archivo y devuelve un objeto de archivo correspondiente.

```python
# Leer archivo usando la declaración 'with': cierra automáticamente el archivo al finalizar
with open('/home/labex/project/hi.txt') as hello_file:
    hello_content = hello_file.read()  # Leer todo el contenido del archivo

hello_content
```

Salida:

```plaintext
'Hello World!'
```

Alternativamente, puede usar el método _readlines()_ para obtener una lista de valores de cadena del archivo, una cadena por cada línea de texto:

```python
# Método readlines(): devuelve una lista de cadenas, una por línea
with open('sonnet29.txt') as sonnet_file:
    sonnet_file.readlines()  # Devuelve una lista con cada línea como una cadena
```

Salida:

```plaintext
['When, in disgrace with fortune and men's eyes,\n',
 ' I all alone beweep my  outcast state,\n',
 "And trouble deaf heaven with my bootless cries,\n",
 "And look upon myself and curse my fate,']
```

También puede iterar a través del archivo línea por línea:

```python
# Iterar a través del archivo línea por línea (eficiente en memoria para archivos grandes)
with open('sonnet29.txt') as sonnet_file:
    for line in sonnet_file:  # El objeto de archivo es iterable
        print(line, end='')  # Imprimir sin nueva línea extra
```

Salida:

```plaintext
When, in disgrace with fortune and men's eyes,
I all alone beweep my outcast state,
And trouble deaf heaven with my bootless cries,
And look upon myself and curse my fate,
```

## Escribir en archivos

```python
# Escribir en archivo: el modo 'w' sobrescribe el archivo existente
with open('bacon.txt', 'w') as bacon_file:  # 'w' = modo escritura
    bacon_file.write('Hello world!\n')  # Devuelve el número de caracteres escritos
```

Salida:

```plaintext
13
```

```python
# Añadir a archivo: el modo 'a' añade al archivo existente
with open('bacon.txt', 'a') as bacon_file:  # 'a' = modo añadir
    bacon_file.write('Bacon is not a vegetable.')
```

Salida:

```plaintext
25
```

```python
with open('bacon.txt') as bacon_file:
    content = bacon_file.read()

print(content)
```

Salida:

```plaintext
Hello world!
Bacon is not a vegetable.
```

## Enlaces relevantes

- <router-link to="/cheatsheet/file-directory-path">Rutas de Archivos y Directorios</router-link>
- <router-link to="/cheatsheet/json-yaml">JSON y YAML</router-link>
- <router-link to="/blog/python-pathlib-essentials">10 Operaciones Esenciales del Sistema de Archivos que Todo Desarrollador Debe Conocer</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/print">print()</router-link>
