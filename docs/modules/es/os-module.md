---
title: 'Módulo OS de Python - Hoja de Trucos de Python'
description: 'Este módulo proporciona una forma portátil de utilizar la funcionalidad dependiente del sistema operativo.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo OS de Python
</base-title>

Este módulo proporciona una forma portable de utilizar la funcionalidad dependiente del sistema operativo.

<base-disclaimer>
  <base-disclaimer-title>
    Pathlib vs Módulo OS
  </base-disclaimer-title>
  <base-disclaimer-content>
    El módulo <router-link to="/modules/pathlib-module">pathlib</router-link> proporciona mucha más funcionalidad que la que se enumera aquí, como obtener el nombre del archivo, obtener la extensión del archivo, leer/escribir un archivo sin abrirlo manualmente, etc. Consulte la <a target="_blank" href="https://docs.python.org/3/library/pathlib.html">documentación oficial</a> si tiene la intención de saber más.
    <br>
    Para una mirada más profunda a ambos, consulte la página <router-link to="/cheatsheet/file-directory-path">Rutas de Archivos y Directorios</router-link>.
  </base-disclaimer-content>
</base-disclaimer>

## Rutas de Linux y Windows

En Windows, las rutas se escriben usando barras invertidas (`\`) como separador entre los nombres de las carpetas. En sistemas operativos basados en Unix como macOS, Linux y BSDs, se utiliza la barra inclinada (`/`) como separador de ruta. Unir rutas puede ser un dolor de cabeza si su código necesita funcionar en diferentes plataformas.

Afortunadamente, Python nos proporciona `os.path.join` para manejar esto.

```python
import os

# Unir componentes de ruta usando el separador correcto para el SO
os.path.join('usr', 'bin', 'spam')
```

```output
usr\bin\spam
```

Unir rutas es útil si necesita crear diferentes rutas de archivo bajo el mismo directorio.

```python
my_files = ['accounts.txt', 'details.csv', 'invite.docx']

# Unir cada nombre de archivo con el directorio base
for filename in my_files:
    print(os.path.join('/home/labex/project', filename))
```

```output
/home/labex/project/accounts.txt
/home/labex/project/details.csv
/home/labex/project/invite.docx
```

## El directorio de trabajo actual

```python
import os

# Obtener el directorio de trabajo actual
os.getcwd()
```

```output
/home/labex/project
```

```python
# Cambiar el directorio de trabajo actual
os.chdir('/usr/bin')

# Verificar el cambio
os.getcwd()
```

```output
/usr/bin
```

## Creación de nuevas carpetas

```python
import os
# Crear directorios recursivamente (crea todos los directorios padre si es necesario)
os.makedirs('/tmp/delicious/walnut/waffles')
```

## Rutas Absolutas vs. Relativas

Hay dos formas de especificar una ruta de archivo.

- Una **ruta absoluta**, que siempre comienza con la carpeta raíz
- Una **ruta relativa**, que es relativa al directorio de trabajo actual del programa

También están las carpetas punto (`.`) y punto-punto (`..`). Estas no son carpetas reales, sino nombres especiales que se pueden usar en una ruta. Un solo punto (“dot”) para un nombre de carpeta es una abreviatura de “este directorio”. Dos puntos (“dot-dot”) significa “la carpeta padre”.

### Manejo de rutas absolutas

Para ver si una ruta es una ruta absoluta:

```python
import os
# Comprobar si la ruta es absoluta (comienza con la raíz)
os.path.isabs('/')
```

```output
True
```

```python
# Las rutas relativas devuelven False
os.path.isabs('..')
```

```output
False
```

También puede extraer una ruta absoluta:

```python
import os
# Obtener el directorio actual primero
os.getcwd()
```

```output
/home/labex/project
```

```python
# Convertir ruta relativa a ruta absoluta
os.path.abspath('..')
```

```output
/home
```

### Manejo de rutas relativas

Puede obtener una ruta relativa desde una ruta de inicio hasta otra ruta.

```python
import os
# Obtener ruta relativa desde la ruta de inicio hasta la ruta de destino
os.path.relpath('/etc/passwd', '/')
```

```output
etc/passwd
```

## Validez de la Ruta y el Archivo

### Comprobación de si existe un archivo/directorio

```python
import os

# Comprobar si la ruta existe (archivo o directorio)
os.path.exists('.')
```

```output
True
```

```python
os.path.exists('setup.py')
```

```output
True
```

```python
os.path.exists('/etc')
```

```output
True
```

```python
os.path.exists('nonexistentfile')
```

```output
False
```

### Comprobación de si una ruta es un archivo

```python
import os

# Comprobar si la ruta es un archivo
os.path.isfile('setup.py')
```

```output
True
```

```python
os.path.isfile('/home')
```

```output
False
```

```python
os.path.isfile('nonexistentfile')
```

```output
False
```

### Comprobación de si una ruta es un directorio

```python
import os

# Comprobar si la ruta es un directorio
os.path.isdir('/')
```

```output
True
```

```python
os.path.isdir('setup.py')
```

```output
False
```

```python
os.path.isdir('/spam')
```

```output
False
```

## Obtener el tamaño de un archivo en bytes

```python
import os

# Obtener tamaño del archivo en bytes
os.path.getsize('/usr/bin/python3')
```

```output
776192
```

## Listado de directorios

```python
import os

# Listar todos los archivos y directorios en la ruta especificada
os.listdir('/usr/bin')
```

```output
['0409', '12520437.cpx', '12520850.cpx', '5U877.ax', 'aaclient.dll',
--snip--
'xwtpdui.dll', 'xwtpw32.dll', 'zh-CN', 'zh-HK', 'zh-TW', 'zipfldr.dll']
```

## Tamaños de archivos de directorio

<base-warning>
  <base-warning-title>
    ADVERTENCIA
  </base-warning-title>
  <base-warning-content>
    ¡Los directorios en sí también tienen un tamaño! Por lo tanto, es posible que desee comprobar si una ruta es un archivo o un directorio utilizando los métodos discutidos en la sección anterior.
  </base-warning-content>
</base-warning>

```python
import os
total_size = 0

# Calcular el tamaño total de todos los archivos en el directorio
for filename in os.listdir('/usr/bin'):
    # Unir la ruta del directorio con el nombre del archivo y obtener el tamaño
    total_size = total_size + os.path.getsize(os.path.join('/usr/bin', filename))
print(total_size)
```

```output
1117846456
```

## Eliminación de archivos y carpetas

- Llamar a `os.unlink(path)` eliminará el archivo en la ruta.

- Llamar a `os.rmdir(path)` eliminará la carpeta en la ruta. Esta carpeta debe estar vacía de cualquier archivo o carpeta.

## Recorrer un Árbol de Directorios

```python
import os

# Recorrer el árbol de directorios recursivamente
for folder_name, subfolders, filenames in os.walk('/tmp/delicious'):
    print(f'La carpeta actual es {folder_name}')
    # Iterar a través de subdirectorios
    for subfolder in subfolders:
        print(f'SUBCARPETA DE {folder_name}: {subfolder}')
    # Iterar a través de archivos
    for filename in filenames:
        print(f'ARCHIVO DENTRO DE {folder_name}: filename{filename}')
    print('')
```

```output
La carpeta actual es /tmp/delicious
SUBCARPETA DE /tmp/delicious: cats
SUBCARPETA DE /tmp/delicious: walnut
ARCHIVO DENTRO DE /tmp/delicious: spam.txt

La carpeta actual es /tmp/delicious/cats
ARCHIVO DENTRO DE /tmp/delicious/cats: catnames.txt
ARCHIVO DENTRO DE /tmp/delicious/cats: zophie.jpg

La carpeta actual es /tmp/delicious/walnut
SUBCARPETA DE /tmp/delicious/walnut: waffles

La carpeta actual es /tmp/delicious/walnut/waffles
ARCHIVO DENTRO DE /tmp/delicious/walnut/waffles: butter.txt
```

## Enlaces relevantes

- <router-link to="/cheatsheet/file-directory-path">Hoja de trucos: Ruta de Archivo y Directorio</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Hoja de trucos: Lectura y Escritura de Archivos</router-link>
- <router-link to="/blog/python-pathlib-essentials">Blog: Fundamentos de Pathlib</router-link>
- <router-link to="/modules/pathlib-module">Módulo: pathlib</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/str">str()</router-link>
