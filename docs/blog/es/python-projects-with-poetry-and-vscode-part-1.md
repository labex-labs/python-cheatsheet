---
title: 'Proyectos Python con Poetry y VSCode Parte 1 - Hoja de Trucos Python'
description: 'Iniciaremos un proyecto simple con Poetry, gestionaremos dependencias y lo publicaremos en PyPI. Integraremos Pytest, Black y Flake8 en VSCode directamente desde un Entorno Virtual.'
date: 'April 12, 2019'
updated: 'July 3, 2022'
tags: 'python, intermediate, vscode, packaging'
socialImage: '/blog/poetry-1.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Proyectos Python con Poetry y VSCode Parte 1 - Hoja de Trucos Python"
    description: "Iniciaremos un proyecto simple con Poetry, gestionaremos dependencias y lo publicaremos en PyPI. Integraremos Pytest, Black y Flake8 en VSCode directamente desde un Entorno Virtual."
    date: "April 12, 2019"
    updated: "July 3, 2022"
    tags: "python, intermediate, vscode, packaging"
    socialImage: "/blog/poetry-1.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="Proyectos Python con Poetry y VSCode Parte 1 - Hoja de Trucos Python" />

Un Entorno Virtual es una instalación de Python aislada diseñada para evitar llenar nuestra instalación base con librerías que podríamos usar solo para un proyecto. También nos permite gestionar múltiples versiones de la misma librería en diferentes proyectos. Podríamos, por ejemplo, necesitar Django 4.1 para uno y 1.9 para el otro.

<base-disclaimer>
  <base-disclaimer-title>
    Python Poetry
  </base-disclaimer-title>
  <base-disclaimer-content>
    Poetry es una herramienta para manejar la instalación de dependencias, así como la construcción y empaquetado de paquetes de Python. Solo necesita un archivo para hacer todo eso: el nuevo <code>pyproject.toml</code>, <a target="_blank" href="https://www.python.org/dev/peps/pep-0518/">estandarizado</a>. En otras palabras, poetry usa <code>pyproject.toml</code> para reemplazar <code>setup.py</code>, <code>requirements.txt</code>, <code>setup.cfg</code>, <code>MANIFEST.in</code> y el recién añadido <code>Pipfile</code>.
  </base-disclaimer-content>
</base-disclaimer>

En esta serie de artículos, usaremos [Poetry](https://poetry.eustace.io/) para gestionar nuestras dependencias, construir un proyecto simple y, con un solo comando, publicarlo en [PyPI](https://pypi.org/).

En esta primera parte, haremos lo siguiente:

- Iniciar un nuevo proyecto.
- Crear un Entorno Virtual.
- Gestionar dependencias.

En el <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">segundo artículo</router-link>, haremos lo siguiente:

- Añadir nuestro Entorno Virtual a [VSCode](https://code.visualstudio.com/).
- Integrar nuestras dependencias de desarrollo:
  - _Flake8_
  - _Black_
  - _Pytest_

Y finalmente, en un <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">tercer artículo</router-link> haremos lo siguiente:

- Escribir una librería de ejemplo.
- Construir nuestro proyecto con _Poetry_.
- Publicarlo en _PyPI_.

## Instalación de Poetry

La forma más fácil es usar _pip_:

```bash
pip install poetry
```

Pero usaremos el instalador propio de Poetry para aislarlo del resto del sistema al virtualizar sus dependencias. Esta es la forma recomendada de instalar poetry:

```bash
curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python -
```

De esta manera, más tarde podremos actualizar poetry a la última versión estable con el comando `poetry self update`.

## Inicio de un nuevo proyecto

Ahora podemos iniciar un nuevo proyecto de Python usando el comando `poetry new [nombre_del_proyecto]`. Lo llamaré **_how-long_** y será una librería simple para medir el tiempo de ejecución de una función:

```bash
poetry new how-long
```

> Nota: Para proyectos existentes, puedes usar el comando `poetry init` y crear interactivamente un _pyproject.toml_.

Se crea el directorio _how-long_ y dentro hay una estructura de proyecto básica:

```
how-long
├── README.rst
├── how_long
│   └── __init__.py
├── pyproject.toml
└── tests
    ├── __init__.py
    └── test_how_long.py
```

Para una guía completa sobre el manejo de rutas de archivos y directorios, lo cual es esencial para gestionar estructuras de proyectos, consulta la página de <router-link to="/cheatsheet/file-directory-path">Rutas de Archivos y Directorios</router-link>.

> Nota: Para poder publicar tu proyecto, necesitas un nombre disponible. Usa la búsqueda de [PyPI](https://pypi.org/) para esto.

### El archivo pyproject.toml

El archivo **pyproject.toml** gestionará los detalles y dependencias del proyecto:

```
[tool.poetry]
name = "how-long"
version = "0.1.0"
description = "A simple decorator to measure a function execution time."
authors = ["wilfredinni <carlos.w.montecinos@gmail.com>"]

[tool.poetry.dependencies]
python = "^3.7"

[tool.poetry.dev-dependencies]
pytest = "^3.0"

[build-system]
requires = ["poetry>=0.12"]
build-backend = "poetry.masonry.api"
```

#### [tool.poetry]

Los detalles. Añadir una [licencia](https://poetry.eustace.io/docs/pyproject/#license) y un [README](https://poetry.eustace.io/docs/pyproject/#readme) podría ser una buena idea:

```
[tool.poetry]
...
license = "MIT"
readme = "README.rst"
```

#### [tool.poetry.dependencies]

Primero está la versión de Python. Básicamente, este proyecto será compatible con Python 3.7 en adelante. Además, a partir de ahora, cada paquete que instalemos destinado a ser usado en producción se listará aquí.

#### [tool.poetry.dev-dependencies]

Estos paquetes son solo para desarrollo y no se incluirán cuando publiquemos nuestro proyecto. Por defecto, Poetry incluye [Pytest](https://docs.pytest.org/en/latest/), así que lo usaremos para probar nuestro proyecto más adelante.

## Creación de un Entorno Virtual

Para crear un Entorno Virtual e instalar _Pytest_, usaremos el comando `poetry install`:

```bash
poetry install
```

![poetry-install-command](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p1/poetry-install.png)

Después de que termine, se creará un nuevo archivo, `poetry.lock`.

> Cuando Poetry termina de instalar, escribe todos los paquetes y las versiones exactas de ellos que descargó en el archivo poetry.lock, bloqueando el proyecto a esas versiones específicas. Debes incluir el archivo poetry.lock en el repositorio de tu proyecto para que todas las personas que trabajan en el proyecto queden bloqueadas a las mismas versiones de las dependencias.

## Gestión de Dependencias

Una forma de añadir o eliminar dependencias es editar directamente _pyproject.toml_ y luego ejecutar `poetry install` para aplicar los cambios. En su lugar, usaremos los comandos `add` y `remove` para evitar modificaciones manuales.

### Añadir dependencias

Añadamos dos paquetes al proyecto, _pendulum_ y _coo_:

```bash
poetry add pendulum coo
```

![poetry-add-command](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p1/poetry-add.png)

Abre _pyproject.toml_ y _poetry.lock_ y observa cómo se han actualizado.

### Añadir dependencias de desarrollo

Estas dependencias solo estarán disponibles durante el desarrollo; Poetry no las incluirá al construir y publicar el proyecto.

Ya instalamos _Pytest_, pero también usaremos [flake8](http://flake8.pycqa.org/en/latest/) para linting y [mypy](http://mypy-lang.org/) para tipado estático:

```bash
poetry add -D flake8 mypy
```

Ahora que lo pienso, olvidé añadir un formateador. Usaremos [black](https://black.readthedocs.io/en/stable/):

```bash
poetry add -D black
[ValueError]
Could not find a matching version of package black

add [-D|--dev] [--git GIT] [--path PATH] [-E|--extras EXTRAS] [--optional] [--python PYTHON] [--platform PLATFORM] [--allow-prereleases] [--dry-run] [--] <name> (<name>)...
```

Este error ocurre porque _black_ está en estado de prelanzamiento, por lo que Poetry no puede encontrar ninguna versión estable para nosotros. Pero realmente lo quiero, así que lo instalaré de todos modos con el flag `--allow-prereleases`:

```bash
poetry add -D black --allow-prereleases
```

![poetry-add-dev-command](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p1/poetry-add-dev.png)

### Eliminar dependencias

Sabes qué, cambié de opinión, este proyecto no usará ni _coo_ ni _mypy_. Empecemos eliminando _coo_, una dependencia normal de nuestro proyecto:

```bash
poetry remove coo
```

Ahora _mypy_, que es una dependencia de desarrollo:

```bash
poetry remove -D mypy
```

## Conclusión

En esta primera parte, hemos iniciado un nuevo proyecto, creado un Entorno Virtual y añadido y eliminado dependencias usando los siguientes comandos:

| Comando                             | Descripción                                                |
| ----------------------------------- | ---------------------------------------------------------- |
| `poetry new [nombre-paquete]`       | Iniciar un nuevo Proyecto de Python.                       |
| `poetry init`                       | Crear un archivo _pyproject.toml_ interactivamente.        |
| `poetry install`                    | Instalar los paquetes dentro del archivo _pyproject.toml_. |
| `poetry add [nombre-paquete]`       | Añadir un paquete a un Entorno Virtual.                    |
| `poetry add -D [nombre-paquete]`    | Añadir un paquete de desarrollo a un Entorno Virtual.      |
| `poetry remove [nombre-paquete]`    | Eliminar un paquete de un Entorno Virtual.                 |
| `poetry remove -D [nombre-paquete]` | Eliminar un paquete de desarrollo de un Entorno Virtual.   |
| `poetry self:update`                | Actualizar poetry a la última versión estable.             |

En un <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">segundo artículo</router-link>, veremos más comandos de _Poetry_, añadiremos nuestro Entorno Virtual a _VSCode_ y usaremos los paquetes de desarrollo que instalamos para hacer linting (Flake8), formateo (Black) y pruebas (Pytest) de nuestro código dentro del editor. Finalmente, en un tercero, escribiremos y publicaremos una librería de ejemplo en _PyPI_.

¿Alguna duda o sugerencia? Por favor, deja un comentario.
