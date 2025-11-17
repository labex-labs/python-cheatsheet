---
title: 'Módulo Pathlib de Python - Hoja de Trucos de Python'
description: 'El módulo pathlib, introducido en Python 3.4, ofrece una forma orientada a objetos para gestionar rutas del sistema de archivos.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Python Pathlib
</base-title>

Para una inmersión profunda en operaciones prácticas del sistema de archivos, consulte nuestra publicación de blog: <router-link to="/blog/python-pathlib-essentials">10 Operaciones Esenciales del Sistema de Archivos que Todo Desarrollador Debe Conocer</router-link>.

El módulo `pathlib` se agregó en Python 3.4, ofreciendo una forma orientada a objetos para manejar rutas del sistema de archivos.

<base-disclaimer>
  <base-disclaimer-title>
    Pathlib frente al Módulo OS
  </base-disclaimer-title>
  <base-disclaimer-content>
    <code>pathlib</code> proporciona mucha más funcionalidad que las del módulo <code>os</code> y las enumeradas aquí, como obtener el nombre del archivo, obtener la extensión del archivo, leer/escribir un archivo sin abrirlo manualmente, etc. Consulte la <a target="_blank" href="https://docs.python.org/3/library/pathlib.html">documentación oficial</a> si tiene la intención de saber más.
    <br>
    Para una mirada más profunda a ambos, consulte la página <router-link to="/cheatsheet/file-directory-path">Rutas de Archivos y Directorios</router-link>.
  </base-disclaimer-content>
</base-disclaimer>

## Rutas de Linux y Windows

En Windows, las rutas se escriben usando barras invertidas (`\`) como separador entre los nombres de las carpetas. En sistemas operativos basados en Unix como macOS, Linux y BSD, se utiliza la barra inclinada (`/`) como separador de ruta. Unir rutas puede ser un dolor de cabeza si su código necesita funcionar en diferentes plataformas.

Afortunadamente, Python nos proporciona `pathlib.Path.joinpath` para manejar esto fácilmente.

```python
from pathlib import Path

# Unir componentes de ruta
print(Path('usr').joinpath('bin').joinpath('spam'))
```

Salida:

```plaintext
usr/bin/spam
```

`pathlib` también proporciona un atajo para `joinpath` usando el operador `/`:

```python
from pathlib import Path

# Usar el operador / para unir rutas
print(Path('usr') / 'bin' / 'spam')
```

Salida:

```plaintext
usr/bin/spam
```

Unir rutas es útil si necesita crear diferentes rutas de archivo bajo el mismo directorio.

```python
my_files = ['accounts.txt', 'details.csv', 'invite.docx']
# Obtener el directorio de inicio del usuario
home = Path.home()
# Unir cada nombre de archivo con el directorio de inicio
for filename in my_files:
    print(home / filename)
```

Salida:

```plaintext
/home/labex/project/accounts.txt
/home/labex/project/details.csv
/home/labex/project/invite.docx
```

## El directorio de trabajo actual

```python
from pathlib import Path
from os import chdir

# Obtener el directorio de trabajo actual
print(Path.cwd())
```

Salida:

```plaintext
/home/labex/project
```

```python
# Cambiar directorio usando el módulo os
chdir('/usr/lib/python3.10')
# Verificar directorio actual
print(Path.cwd())
```

Salida:

```plaintext
/usr/lib/python3.10
```

## Creación de nuevas carpetas

```python
from pathlib import Path
cwd = Path.cwd()
# Crear directorio (fallará si los directorios padre no existen)
(cwd / 'delicious' / 'walnut' / 'waffles').mkdir()
```

Salida:

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "/usr/lib/python3.10/pathlib.py", line 1226, in mkdir
    self._accessor.mkdir(self, mode)
  File "/usr/lib/python3.10/pathlib.py", line 387, in wrapped
    return strfunc(str(pathobj), *args)
FileNotFoundError: [Errno 2] No such file or directory: '/home/labex/project/delicious/walnut/waffles'
```

La razón de este error es que el directorio 'delicious' no existe, por lo que no podemos crear los directorios 'walnut' y 'waffles' debajo de él. Para solucionar esto, haga lo siguiente:

```python
from pathlib import Path
cwd = Path.cwd()
# Crear directorio con todos los directorios padre
(cwd / 'delicious' / 'walnut' / 'waffles').mkdir(parents=True)
```

## Rutas absolutas vs. relativas

Hay dos formas de especificar una ruta de archivo.

- Una **ruta absoluta**,
