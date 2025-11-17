---
title: 'Proyectos Python con Poetry y VSCode Parte 3 - Hoja de Trucos Python'
description: 'Finalmente, en esta tercera parte, escribiremos una librería de ejemplo, construiremos nuestro proyecto con *Poetry* y lo publicaremos en Pypi.'
date: 'May 21, 2019'
updated: 'July 3, 2022'
tags: 'python, intermediate, vscode, packaging'
socialImage: '/blog/poetry-3.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Proyectos Python con Poetry y VSCode Parte 3 - Hoja de Trucos Python"
    description: "Finalmente, en esta tercera parte, escribiremos una librería de ejemplo, construiremos nuestro proyecto con *Poetry* y lo publicaremos en Pypi."
    date: "May 21, 2019"
    updated: "July 3, 2022"
    tags: "python, intermediate, vscode, packaging"
    socialImage: "/blog/poetry-3.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="Proyectos Python con Poetry y VSCode Parte 3 - Hoja de Trucos Python" />

En el <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">primer artículo</router-link> comenzamos un nuevo proyecto, creamos un Entorno Virtual y gestionamos las dependencias. En la <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">segunda parte</router-link>, añadimos nuestro Entorno Virtual a [VSCode](https://code.visualstudio.com/) e integramos nuestras dependencias de desarrollo.

Y finalmente, en esta tercera y última parte haremos lo siguiente:

- Escribir una librería de ejemplo.
- Construir nuestro proyecto con _Poetry_.
- Publicarlo en _PyPI_.

## Comandos de Poetry

Aquí hay una tabla con los comandos utilizados en esta serie, así como sus descripciones. Para una lista completa, lee la [Documentación de Poetry](https://poetry.eustace.io/docs/cli/).

| Comando                           | Descripción                                                |
| --------------------------------- | ---------------------------------------------------------- |
| `poetry new [package-name]`       | Iniciar un nuevo Proyecto Python.                          |
| `poetry init`                     | Crear un archivo _pyproject.toml_ interactivamente.        |
| `poetry install`                  | Instalar los paquetes dentro del archivo _pyproject.toml_. |
| `poetry add [package-name]`       | Añadir un paquete a un Entorno Virtual.                    |
| `poetry add -D [package-name]`    | Añadir un paquete de desarrollo a un Entorno Virtual.      |
| `poetry remove [package-name]`    | Eliminar un paquete de un Entorno Virtual.                 |
| `poetry remove -D [package-name]` | Eliminar un paquete de desarrollo de un Entorno Virtual.   |
| `poetry update`                   | Obtener las últimas versiones de las dependencias          |
| `poetry shell`                    | Genera una shell dentro del entorno virtual.               |
| `poetry build`                    | Construye los archivos de fuente y _wheels_.               |
| `poetry publish`                  | Publicar el paquete en Pypi.                               |
| `poetry publish --build`          | Construir y publicar un paquete.                           |
| `poetry self:update`              | Actualizar poetry a la última versión estable.             |

## El Proyecto

Puedes descargar el código fuente desde [GitHub](https://github.com/wilfredinni/how-long) si lo deseas, pero como se mencionó anteriormente, será un decorador simple que imprimirá en la consola cuánto tarda en ejecutarse una función.

Funcionará de esta manera:

```python
from how_long import timer

@timer
def test_function():
    [i for i in range(10000)]

test_function()
# Execution Time: 955 ms.
```

Y el directorio del proyecto será el siguiente:

```
how-long
├── how_long
│   ├── how_long.py
│   └── __init__.py
├── how_long.egg-info
│   ├── dependency_links.txt
│   ├── PKG-INFO
│   ├── requires.txt
│   ├── SOURCES.txt
│   └── top_level.txt
├── LICENSE
├── poetry.lock
├── pyproject.toml
├── README.rst
└── tests
    ├── __init__.py
    └── test_how_long.py
```

Antes de empezar, comprueba si hay actualizaciones de paquetes con el comando `poetry update`:

![poetry update](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/May/poetry_vscode_p3/img/poetry_update.png)

Añade una breve descripción para el proyecto en el `README.rst`:

```
how_long
========

Simple Decorator to measure a function execution time.

Example
_______

.. code-block:: python

    from how_long import timer


    @timer
    def some_function():
        return [x for x in range(10_000_000)]
```

Navega a `how_long/how_long.py`:

```python
# how_long.py
from functools import wraps

import pendulum


def timer(function):
    """
    Simple Decorator to measure a function execution time.
    """

    @wraps(function)
    def function_wrapper():
        start = pendulum.now()
        function()
        elapsed_time = pendulum.now() - start
        print(f"Execution Time: {elapsed_time.microseconds} ms.")

    return function_wrapper
```

En `how_long/__init__.py`:

```python
from .how_long import timer

__version__ = "0.1.1"
```

Y finalmente, el archivo `tests/test_how_long.py`:

```python
from how_long import __version__
from how_long import timer


def test_version():
    assert __version__ == "0.1.1"


def test_wrap():
    @timer
    def wrapped_function():
        return

    assert wrapped_function.__name__ == "wrapped_function"
```

Ahora puedes usar `poetry install` en tu terminal para instalar y probar tu paquete localmente. Activa tu entorno virtual si no lo has hecho y en el _shell_ interactivo de Python:

```python
>>> from how_long import timer
>>>
>>> @timer
... def test_function():
...     [i for i in range(10000)]
...
>>> test_function()
Execution Time: 705 ms.
```

[Ejecuta las pruebas](https://www.pythoncheatsheet.org/blog/python-projects-with-poetry-and-vscode-part-2#Pytest) y si todo está bien, continúa.

## Construcción y Publicación

¡Finalmente, ha llegado el momento de hacer este proyecto disponible para el mundo! Asegúrate de tener una cuenta en [PyPI](https://pypi.org). Recuerda que el nombre del paquete debe ser único, si no estás seguro, utiliza la [búsqueda](https://pypi.org/search/?q=) para comprobarlo.

### Construir (Build)

El comando `poetry build` construye los archivos de fuente y _wheels_ que luego se subirán como el origen del proyecto:

![poetry build](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/May/poetry_vscode_p3/img/poetry_build.png)

Se creará el directorio _how_long.egg-info_.

### Publicar (Publish)

Este comando publica el paquete en _PyPI_ y lo registra automáticamente antes de subirlo si es la primera vez que se envía:

![poetry publish](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/May/poetry_vscode_p3/img/poetry_publish.png)

> También puedes construir y publicar tu proyecto con `$ poetry publish --build`.

Introduce tus credenciales y si todo está bien, [navega](https://pypi.org/project/how-long/) a tu proyecto, y verás algo como esto:

![pipy how-long](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/May/poetry_vscode_p3/img/pypi.png)

¡Ahora podemos informar a otros que pueden hacer `pip install how-long` desde cualquier máquina, en cualquier lugar!

## Conclusión

Recuerdo la primera vez que intenté publicar un paquete, y fue una pesadilla. Estaba empezando en Python y tuve que pasar "unas horas" tratando de entender qué era el archivo `setup.py` y cómo usarlo. Al final, terminé con varios archivos: un `Makefile`, un `MANIFEST.in`, un `requirements.txt` y un `test_requirements.txt`. Por eso, las palabras de [Sébastien Eustace](https://github.com/sdispater), el creador de [Poetry](https://github.com/sdispater/poetry), tuvieron mucho sentido para mí:

> Packaging and dependency management in Python are rather convoluted and hard to understand for newcomers. Even for seasoned developers it might be cumbersome at times to create all files needed in a Python project: `setup.py`, `requirements.txt`, `setup.cfg`, `MANIFEST.in` and the newly added `Pipfile`.
>
> So I wanted a tool that would limit everything to a single configuration file to do: dependency management, packaging and publishing.
>
> It takes inspiration in tools that exist in other languages, like `composer` (PHP) or `cargo` (Rust).
>
> And, finally, there is no reliable tool to properly resolve dependencies in Python, so I started `poetry` to bring an exhaustive dependency resolver to the Python community.

Poetry no es [perfecto de ninguna manera](https://frostming.com/2019/01-04/pipenv-poetry#what-about-poetry) pero, a diferencia de otras herramientas, realmente cumple lo que promete.
