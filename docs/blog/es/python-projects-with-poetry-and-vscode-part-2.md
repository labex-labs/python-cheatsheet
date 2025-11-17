---
title: 'Proyectos Python con Poetry y VSCode Parte 2 - Hoja de Trucos Python'
description: 'En esta segunda parte, añadiremos nuestro entorno virtual a VSCode, actualizaremos dependencias e integraremos Flake8, Black y Pytest con el editor.'
date: 'April 23, 2019'
updated: 'July 3, 2022'
tags: 'python, intermediate, vscode, packaging'
socialImage: '/blog/poetry-2.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Proyectos Python con Poetry y VSCode Parte 2 - Hoja de Trucos Python"
    description: "En esta segunda parte, añadiremos nuestro entorno virtual a VSCode, actualizaremos dependencias e integraremos Flake8, Black y Pytest con el editor."
    date: "April 23, 2019"
    updated: "July 3, 2022"
    tags: "python, intermediate, vscode, packaging"
    socialImage: "/blog/poetry-2.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="Proyectos Python con Poetry y VSCode Parte 2 - Hoja de Trucos Python" />

En el <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">primer artículo</router-link> aprendimos qué es el archivo `pyproject.toml` y cómo trabajar con él, usamos [Poetry](https://poetry.eustace.io/) para iniciar un nuevo proyecto, crear un Entorno Virtual y para añadir y eliminar dependencias. Todo esto con los siguientes comandos:

| Command                           | Description                                                |
| --------------------------------- | ---------------------------------------------------------- |
| `poetry new [package-name]`       | Iniciar un nuevo Proyecto Python.                          |
| `poetry init`                     | Crear un archivo _pyproject.toml_ interactivamente.        |
| `poetry install`                  | Instalar los paquetes dentro del archivo _pyproject.toml_. |
| `poetry add [package-name]`       | Añadir un paquete a un Entorno Virtual.                    |
| `poetry add -D [package-name]`    | Añadir un paquete de desarrollo a un Entorno Virtual.      |
| `poetry remove [package-name]`    | Eliminar un paquete de un Entorno Virtual.                 |
| `poetry remove -D [package-name]` | Eliminar un paquete de desarrollo de un Entorno Virtual.   |

En esta segunda parte, vamos a:

- Añadir nuestro Entorno Virtual a [VSCode](https://code.visualstudio.com/).
- Actualizar nuestras dependencias.
- Integrar nuestras dependencias de desarrollo con el editor:
  - _Flake8_
  - _Black_
  - _Pytest_

Y en un <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">tercer artículo</router-link> escribiremos una librería de ejemplo, construiremos nuestro proyecto con _Poetry_ y lo publicaremos en _PyPI_.

Antes de empezar, asegúrate de haber instalado [VSCode](https://code.visualstudio.com/), añadido la extensión de [Python](https://marketplace.visualstudio.com/itemdetails?itemName=ms-python.python) y de haber seguido y entendido el <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">primer artículo</router-link> de esta serie.

## Configuración de Poetry en VSCode

Han pasado unos días desde la primera parte, por lo que puede ser una buena idea comprobar si hay nuevas versiones de nuestras dependencias. Abre tu terminal, navega dentro del directorio de tu proyecto y escribe el comando `poetry update`:

![poetry update](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/update.png)

Hasta ahora, no hay nuevas versiones disponibles.

Cuando creas un Entorno Virtual con el comando _venv_, _VSCode_ lo establecerá automáticamente como el Entorno Python predeterminado para ese proyecto. Al trabajar con _Poetry_, la primera vez necesitaremos escribir lo siguiente en la terminal y dentro de la carpeta del proyecto:

```bash
poetry shell
code .
```

El primer comando, `poetry shell`, nos introducirá en nuestro entorno virtual, y `code .` abrirá la carpeta actual dentro de _VSCode_.

![vscode](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/vscode.png)

Abre la carpeta **how-long** (o la que tenga el nombre de tu proyecto) usando el panel izquierdo y junto a `__init__.py`, crea un archivo `how-long.py`. En la esquina inferior izquierda, verás el Entorno Python actual:

![python version](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/python-code.png)

Haz clic en él y se mostrará una lista de los Entornos disponibles. Elige el que tenga el nombre de tu proyecto:

![choose python](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/choose-environment.png)

Ahora, vamos a integrar nuestras dependencias de desarrollo, _Flake8_, _Black_ y _Pytest_ en Visual Studio Code.

## Flake8

[Flake8](http://flake8.pycqa.org/en/latest/) proporcionará a nuestros proyectos capacidades de _linting_. En otras palabras, advertirá de errores de sintaxis y estilo, y gracias a VSCode, los conoceremos mientras escribimos.

Por defecto, la extensión de Python viene con _Pylint_ habilitado, que es potente pero complejo de configurar. Para cambiar a _Flake8_, realiza un cambio en cualquier archivo Python y guárdalo; en la esquina inferior derecha aparecerá un mensaje emergente:

![flake8](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/select-linter.png)

Haz clic en **Select Linter** y elige **Flake8** de la lista. Ahora, _VSCode_ nos indicará nuestros problemas de _sintaxis_ y _estilo_, en verde o rojo dependiendo de su gravedad, siempre con una bonita descripción de lo que está mal:

![linting](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/linting.png)

Parece que tenemos dos problemas: nos falta una línea en blanco al final de nuestro archivo (estilo) y olvidamos añadir comillas a nuestra cadena de _Hello, World!_ (sintaxis). Arréglalos y verás cómo desaparecen todas las advertencias.

## Black

[Black](https://github.com/ambv/black) es un formateador de código, una herramienta que mirará nuestro código y lo formateará automáticamente cumpliendo con la guía de estilo [PEP 8](https://www.python.org/dev/peps/pep-0008/), la misma _PEP_ que usa _Flake8_ para revisar nuestros errores de estilo.

Mantén pulsado `shift + cmd/ctrl + p` para abrir la Paleta de Comandos, escribe **Format Document** y pulsa enter. Aparecerá un nuevo mensaje emergente:

![black formatter popup](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/format-popup.png)

Selecciona **Use Black**. Ahora copia este código mal formateado en tu archivo python:

```python
for i in range(5):         # this comment has too many spaces
      print(i)  # this line has 6 space indentation.
```

Qué pedazo de c\*\*\*... código más feo. ¡Intenta formatearlo de nuevo y mira cómo _Black_ los arregla todos por ti!

Otra cosa que podemos hacer es configurar VSCode para que cada vez que guardemos, _Black_ formatee automáticamente nuestro código. Mantén pulsado `cmd/ctrl + ,` para abrir la Configuración. Asegúrate de estar en la **Workspace Settings**, busca **Format On Save** y activa la casilla:

![format on save](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/format-on-save.png)

Por último, _Black_ tiene por defecto 88 caracteres por línea en contraste con los 80 permitidos por _Flake8_, por lo que para evitar conflictos, abre la carpeta **.vscode** y añade lo siguiente al final del archivo **settings.json**:

```json
{
    ...
    "python.linting.flake8Args": [
        "--max-line-length=88"
    ],
}
```

![black-settings](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/black-settings.png)

## Pytest

Si te tomas en serio la programación, es crucial que aprendas a probar tus proyectos. Es una habilidad increíblemente útil que te permite escribir y entregar programas con confianza al reducir la posibilidad de que aparezcan errores catastróficos después del lanzamiento.

[Pytest](https://docs.pytest.org/en/latest/) es un framework muy popular y fácil de usar para escribir pruebas. Ya lo [instalamos](https://www.pythoncheatsheet.org/blog/python-projects-with-poetry-and-vscode-part-1#Dependency-Management), así que también lo integraremos con _VSCode_.

Abre la carpeta **tests** y selecciona el archivo `test_how_long.py`. _Poetry_ ya nos proporciona nuestra primera prueba:

```python
# test_how_long.py
from how_long import __version__


def test_version():
    assert __version__ == '0.1.0'
```

En esta prueba, importamos la variable `__version__` del archivo `__init__.py` que está dentro de la carpeta **how_long** y afirmamos que la versión actual es _0.1.0_. Abre la terminal integrada yendo a **Terminal > New Terminal** y escribe:

```bash
pytest
```

La Salida se verá así:

![pytest](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/pytest-terminal.png)

Ok, todo está bien. Abre tu Paleta de Comandos con `shift + cmd/ctrl + p`:

- Escribe **unit** y selecciona **Python: Configure Unit Tests**.
- Selecciona **pytest**.
- Elige el directorio donde guardaste las pruebas, **tests** en nuestro caso.

Tres cosas sucedieron:

- Apareció un nuevo botón en la barra de estado: **Run Tests**. Esto es lo mismo que escribir _pytest_ en la terminal. Púlsalo y selecciona **Run All Unit Tests**. Cuando termine, te informará del número de pruebas que pasaron y las que no:

  ![test status bar](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img.png)

- Un nuevo icono en la barra lateral izquierda. Si haces clic en él, aparecerá un panel que muestra todas las pruebas. Aquí, puedes ejecutar cada una individualmente:

  ![test side panel](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/test-side-panel.png)

- Dentro del archivo de prueba, aparecerán nuevas opciones antes de cada función de prueba: aparecerá un icono de verificación si está bien, y una _x_ si no lo está. También te permite ejecutar pruebas específicas:

  ![test inline](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/test-inline.png)

## Conclusión

Hasta ahora, hemos:

- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Iniciado un nuevo proyecto</router-link>, creado un Entorno Virtual, y añadido, eliminado y actualizado dependencias.
- Añadido nuestro [Entorno Virtual a VSCode](#setting-up-poetry-on-vscode), [Configurado _Flake8_](#flake8) para _revisar_ nuestro código mientras escribimos, seleccionado [_Black_](#black) como formateador e [incluido _Pytest_](#pytest) para ejecutar nuestras pruebas visualmente.

Finalmente, en el <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">tercer y último artículo</router-link>, vamos a:

- Escribir una librería de ejemplo.
- Construir nuestro proyecto con _Poetry_.
- Publicarlo en _PyPI_.
