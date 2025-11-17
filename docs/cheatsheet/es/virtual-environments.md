---
title: 'Entornos Virtuales de Python - Hoja de Trucos de Python'
description: 'El uso de un Entorno Virtual es para probar código Python en entornos encapsulados y para evitar llenar la instalación base de Python con librerías que podríamos usar para un solo proyecto.'
labUrl: 'https://labex.io/es/labs/python-python-virtual-environments-633669?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Entorno Virtual
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

El uso de un Entorno Virtual es para probar código python en entornos encapsulados, y también para evitar llenar la instalación base de Python con librerías que podríamos usar solo para un proyecto.

## virtualenv

1. Instalar virtualenv

```bash
pip install virtualenv
```

1. Instalar virtualenvwrapper-win (Windows)

```bash
pip install virtualenvwrapper-win
```

Uso:

1. Crear un Entorno Virtual llamado `HelloWorld`

```bash
mkvirtualenv HelloWorld
```

    Cualquier cosa que instalemos ahora será específica para este proyecto. Y estará disponible para los proyectos que conectemos a este entorno.

1. Establecer Directorio del Proyecto

   Para vincular nuestro virtualenv con nuestro directorio de trabajo actual, simplemente ingresamos:

```bash
setprojectdir .
```

1. Desactivar

   Para pasar a otra cosa en la línea de comandos, escriba `deactivate` para desactivar su entorno.

```bash
deactivate
```

    Observe cómo desaparecen los paréntesis.

1. Workon

   Abra el símbolo del sistema y escriba `workon HelloWorld` para activar el entorno y moverse a la carpeta raíz de su proyecto

```bash
workon HelloWorld
```

## Poetry

<base-disclaimer>
  <base-disclaimer-title>
    Desde <a href="https://python-poetry.org/">sitio web de Poetry</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Poetry es una herramienta para la gestión de dependencias y el empaquetado en Python. Le permite declarar las librerías de las que depende su proyecto y él las gestionará (instalará/actualizará) por usted.
  </base-disclaimer-content>
</base-disclaimer>

1. Instalar Poetry

```bash
pip install --user poetry
```

2. Crear un nuevo proyecto

```bash
poetry new my-project
```

    Esto creará un directorio my-project:

```plaintext
my-project
├── pyproject.toml
├── README.rst
├── poetry_demo
│   └── __init__.py
└── tests
    ├── __init__.py
    └── test_poetry_demo.py
```

    El archivo pyproject.toml orquestará su proyecto y sus dependencias:

```toml
[tool.poetry]
name = "my-project"
version = "0.1.0"
description = ""
authors = ["your name <your@mail.com>"]

[tool.poetry.dependencies]
python = "*"

[tool.poetry.dev-dependencies]
pytest = "^3.4"
```

3. Paquetes

   Para agregar dependencias a su proyecto, puede especificarlas en la sección tool.poetry.dependencies:

```toml
[tool.poetry.dependencies]
pendulum = "^1.4"
```

    Además, en lugar de modificar el archivo pyproject.toml manualmente, puede usar el comando add y encontrará automáticamente una restricción de versión adecuada.

```bash
poetry add pendulum
```

    Para instalar las dependencias listadas en pyproject.toml:

```bash
poetry install
```

    Para eliminar dependencias:

```bash
poetry remove pendulum
```

Para más información, consulte la [documentación](https://poetry.eustace.io/docs/) o lea aquí:

- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Proyectos de Python con Poetry y VSCode. Parte 1</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">Proyectos de Python con Poetry y VSCode. Parte 2</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">Proyectos de Python con Poetry y VSCode. Parte 3</router-link>

## Pipenv

<base-disclaimer>
  <base-disclaimer-title>
    Desde <a target="_blank" href="https://pipenv.pypa.io/en/latest/">sitio web de Pipenv</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Pipenv es una herramienta que tiene como objetivo llevar lo mejor de todos los mundos de empaquetado (bundler, composer, npm, cargo, yarn, etc.) al mundo de Python. Windows es un ciudadano de primera clase, en nuestro mundo.
  </base-disclaimer-content>
</base-disclaimer>

1. Instalar pipenv

```bash
pip install pipenv
```

2. Ingrese al directorio de su Proyecto e instale los Paquetes para su proyecto

```bash
cd my_project
pipenv install <package>
```

    Pipenv instalará su paquete y creará un Pipfile para usted en el directorio de su proyecto. El Pipfile se utiliza para rastrear qué dependencias necesita su proyecto en caso de que necesite reinstalarlas.

3. Desinstalar Paquetes

```bash
pipenv uninstall <package>
```

4. Activar el Entorno Virtual asociado con su proyecto Python

```bash
pipenv shell
```

5. Salir del Entorno Virtual

```bash
exit
```

Encuentre más información y un video en [docs.pipenv.org](https://docs.pipenv.org/).

## Anaconda

<base-disclaimer>
  <base-disclaimer-title>
    <a target="k" href="https://anaconda.com/">Anaconda</a> es otra herramienta popular para gestionar paquetes de python.
  </base-disclaimer-title>
  <base-disclaimer-content>
    Donde se comparten paquetes, notebooks, proyectos y entornos. Su lugar para alojamiento público gratuito de paquetes conda.
  </base-disclaimer-content>
</base-disclaimer>

Uso:

1. Crear un Entorno Virtual

```bash
conda create -n HelloWorld
```

2. Para usar el Entorno Virtual, actívelo mediante:

```bash
conda activate HelloWorld
```

    Cualquier cosa instalada ahora será específica para el proyecto HelloWorld

3. Salir del Entorno Virtual

```bash
conda deactivate
```

## UV

<base-disclaimer>
  <base-disclaimer-title>
    Desde <a target="_blank" href="https://docs.astral.sh/uv/">Documentación de UV</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    UV es un instalador y resolvedor de paquetes de Python extremadamente rápido, diseñado como un reemplazo directo para los flujos de trabajo de pip y pip-tools. UV es entre 10 y 100 veces más rápido que pip y proporciona gestión unificada de paquetes, creación de entornos virtuales y gestión de versiones de Python.
  </base-disclaimer-content>
</base-disclaimer>

1. Instalar UV

```bash
# Usando curl (Linux/macOS)
curl -LsSf https://astral.sh/uv/install.sh | sh

# Usando pip o pipx
pip install uv
```

2. Crear un nuevo proyecto con entorno virtual

```bash
uv init my-project
cd my-project
```

3. Agregar dependencias

```bash
uv add requests
```

4. Ejecutar comandos en el entorno del proyecto

```bash
uv run python script.py
```

5. Activar el entorno virtual manualmente (opcional)

```bash
source .venv/bin/activate  # Linux/macOS
.venv\Scripts\activate     # Windows
```

UV gestiona automáticamente entornos virtuales, versiones de Python y dependencias con una velocidad y conveniencia excepcionales.

## Enlaces relevantes

- <router-link to="/cheatsheet/setup-py">setup.py</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Proyectos de Python con Poetry y VSCode. Parte 1</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">Proyectos de Python con Poetry y VSCode. Parte 2</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">Proyectos de Python con Poetry y VSCode. Parte 3</router-link>
- <router-link to="/blog/python-uv-package-manager">UV: El Gestor de Paquetes de Python Ultrarrápido</router-link>
- <router-link to="/builtin/import">import()</router-link>
