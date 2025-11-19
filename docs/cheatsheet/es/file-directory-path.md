---
title: 'Rutas de Archivos y Directorios - Hoja de Trucos de Python'
description: 'Python tiene dos módulos principales para la manipulación de rutas: os.path y pathlib.'
labUrl: 'https://labex.io/es/labs/python-python-file-and-directory-path-manipulation-633657?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Manejo de Rutas de Archivos y Directorios
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Para una inmersión profunda en las operaciones prácticas del sistema de archivos, consulte nuestra publicación de blog: <router-link to="/blog/python-pathlib-essentials">10 Operaciones Esenciales del Sistema de Archivos que Todo Desarrollador Debe Conocer</router-link>.

Hay dos módulos principales en Python que se ocupan de la manipulación de rutas.
Uno es el módulo <router-link to="/modules/os-module">os.path</router-link> y el otro es el módulo <router-link to="/modules/pathlib-module">pathlib</router-link>.

<base-disclaimer>
  <base-disclaimer-title>
    Pathlib vs Módulo OS
  </base-disclaimer-title>
  <base-disclaimer-content>
    <code>pathlib</code> proporciona mucha más funcionalidad que las enumeradas anteriormente, como obtener el nombre del archivo, obtener la extensión del archivo, leer/escribir un archivo sin abrirlo manualmente, etc. Consulte la <a target="_blank" href="https://docs.python.org/3/library/pathlib.html">documentación oficial</a> si tiene la intención de saber más.
  </base-disclaimer-content>
</base-disclaimer>

## Rutas de Linux y Windows

En Windows, las rutas se escriben usando barras invertidas (`\`) como separador entre
nombres de carpetas. En sistemas operativos basados en Unix como macOS, Linux y BSDs,
se utiliza la barra inclinada hacia adelante (`/`) como separador de ruta. Unir rutas puede ser
un dolor de cabeza si su código necesita funcionar en diferentes plataformas.

Afortunadamente, el módulo `pathlib` de Python proporciona una forma fácil de manejar esto.

Usando `pathlib` en \*nix:

```python
# pathlib.Path: manejo de rutas multiplataforma
from pathlib import Path

print(Path('usr').joinpath('bin').joinpath('spam'))  # Unir componentes de ruta
```

```output
usr/bin/spam
```

`pathlib` también proporciona un atajo para unir rutas usando el operador `/`:

```python
# Operador Path (/): forma conveniente de unir rutas (multiplataforma)
from pathlib import Path

print(Path('usr') / 'bin' / 'spam')  # Usar el operador / en lugar de joinpath()
```

```output
usr/bin/spam
```

Observe que el separador de ruta es diferente entre Windows y los sistemas operativos basados en Unix, por eso querrá usar `pathlib` en lugar de
concatenar cadenas para unir rutas.

Unir rutas es útil si necesita crear diferentes rutas de archivo bajo el mismo directorio.

Usando `pathlib` en \*nix:

```python
# Path.home(): obtener el directorio de inicio del usuario, combinar con nombres de archivo
my_files = ['accounts.txt', 'details.csv', 'invite.docx']
home = Path.home()  # Obtener la ruta del directorio de inicio
for filename in my_files:
    print(home / filename)  # Combinar la ruta de inicio con cada nombre de archivo
```

```output
/home/labex/project/accounts.txt
/home/labex/project/details.csv
/home/labex/project/invite.docx
```

## El directorio de trabajo actual

Puede obtener el directorio de trabajo actual usando `pathlib`:

```python
# Path.cwd(): obtener el directorio de trabajo actual
from pathlib import Path

print(Path.cwd())  # Devuelve el directorio de trabajo actual como objeto Path
```

```output
/home/labex/project
```

## Creación de nuevas carpetas

Usando `pathlib` en \*nix:

```python
from pathlib import Path
cwd = Path.cwd()
(cwd / 'delicious' / 'walnut' / 'waffles').mkdir()
```

```output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "/usr/lib/python3.6/pathlib.py", line 1226, in mkdir
    self._accessor.mkdir(self, mode)
  File "/usr/lib/python3.6/pathlib.py", line 387, in wrapped
    return strfunc(str(pathobj), *args)
FileNotFoundError: [Errno 2] No such file or directory: '/home/labex/project/delicious/walnut/waffles'
```

¡Oh no, obtuvimos un error molesto! La razón es que el directorio 'delicious' no existe, por lo que no podemos crear los directorios 'walnut' y 'waffles' debajo de él. Para solucionar esto, haga lo siguiente:

```python
# mkdir(parents=True): crear directorio y todos los directorios padre si es necesario
from pathlib import Path
cwd = Path.cwd()
(cwd / 'delicious' / 'walnut' / 'waffles').mkdir(parents=True)  # Crear directorios anidados
```

Y todo está bien :)

## Rutas Absolutas vs. Relativas

Hay dos formas
