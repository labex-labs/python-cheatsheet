---
title: Python Virtual environments - Python Cheatsheet
description: The use of a Virtual Environment is to test python code in encapsulated environments and to also avoid filling the base Python installation with libraries we might use for only one project.
labUrl: https://labex.io/labs/python-python-virtual-environments-633669?course=python-cheatsheet
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Virtual Environment
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

The use of a Virtual Environment is to test python code in encapsulated environments, and to also avoid filling the base Python installation with libraries we might use for only one project.

## virtualenv

1. Install virtualenv

```bash
pip install virtualenv
```

1. Install virtualenvwrapper-win (Windows)

```bash
pip install virtualenvwrapper-win
```

Usage:

1. Make a Virtual Environment named `HelloWorld`

```bash
mkvirtualenv HelloWorld
```

    Anything we install now will be specific to this project. And available to the projects we connect to this environment.

1. Set Project Directory

   To bind our virtualenv with our current working directory we simply enter:

```bash
setprojectdir .
```

1. Deactivate

   To move onto something else in the command line type `deactivate` to deactivate your environment.

```bash
deactivate
```

    Notice how the parenthesis disappear.

1. Workon

   Open up the command prompt and type `workon HelloWorld` to activate the environment and move into your root project folder

```bash
workon HelloWorld
```

## Poetry

<base-disclaimer>
  <base-disclaimer-title>
    From <a href="https://python-poetry.org/">Poetry website</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Poetry is a tool for dependency management and packaging in Python. It allows you to declare the libraries your project depends on and it will manage (install/update) them for you.
  </base-disclaimer-content>
</base-disclaimer>

1. Install Poetry

```bash
pip install --user poetry
```

2. Create a new project

```bash
poetry new my-project
```

    This will create a my-project directory:

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

    The pyproject.toml file will orchestrate your project and its dependencies:

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

3. Packages

   To add dependencies to your project, you can specify them in the tool.poetry.dependencies section:

```toml
[tool.poetry.dependencies]
pendulum = "^1.4"
```

    Also, instead of modifying the pyproject.toml file by hand, you can use the add command and it will automatically find a suitable version constraint.

```bash
poetry add pendulum
```

    To install the dependencies listed in the pyproject.toml:

```bash
poetry install
```

    To remove dependencies:

```bash
poetry remove pendulum
```

For more information, check the [documentation](https://poetry.eustace.io/docs/) or read here:

- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Python projects with Poetry and VSCode. Part 1</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">Python projects with Poetry and VSCode. Part 2</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">Python projects with Poetry and VSCode. Part 3</router-link>

## Pipenv

<base-disclaimer>
  <base-disclaimer-title>
    From <a target="_blank" href="https://pipenv.pypa.io/en/latest/">Pipenv website</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Pipenv is a tool that aims to bring the best of all packaging worlds (bundler, composer, npm, cargo, yarn, etc.) to the Python world. Windows is a first-class citizen, in our world.
  </base-disclaimer-content>
</base-disclaimer>

1. Install pipenv

```bash
pip install pipenv
```

2. Enter your Project directory and install the Packages for your project

```bash
cd my_project
pipenv install <package>
```

    Pipenv will install your package and create a Pipfile for you in your project's directory. The Pipfile is used to track which dependencies your project needs in case you need to re-install them.

3.  Uninstall Packages

```bash
pipenv uninstall <package>
```

4. Activate the Virtual Environment associated with your Python project

```bash
pipenv shell
```

5. Exit the Virtual Environment

```bash
exit
```

Find more information and a video in [docs.pipenv.org](https://docs.pipenv.org/).

## Anaconda

<base-disclaimer>
  <base-disclaimer-title>
    <a target="k" href="https://anaconda.com/">Anaconda</a> is another popular tool to manage python packages.
  </base-disclaimer-title>
  <base-disclaimer-content>
    Where packages, notebooks, projects and environments are shared. Your place for free public conda package hosting.
  </base-disclaimer-content>
</base-disclaimer>

Usage:

1. Make a Virtual Environment

```bash
conda create -n HelloWorld
```

2. To use the Virtual Environment, activate it by:

```bash
conda activate HelloWorld
```

    Anything installed now will be specific to the project HelloWorld

3.  Exit the Virtual Environment

```bash
conda deactivate
```

## UV

<base-disclaimer>
  <base-disclaimer-title>
    From <a target="_blank" href="https://docs.astral.sh/uv/">UV Documentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    UV is an extremely fast Python package installer and resolver, designed as a drop-in replacement for pip and pip-tools workflows. UV is 10-100x faster than pip and provides unified package management, virtual environment creation, and Python version management.
  </base-disclaimer-content>
</base-disclaimer>

1. Install UV

```bash
# Using curl (Linux/macOS)
curl -LsSf https://astral.sh/uv/install.sh | sh

# Using pip or pipx
pip install uv
```

2. Create a new project with virtual environment

```bash
uv init my-project
cd my-project
```

3. Add dependencies

```bash
uv add requests
```

4. Run commands in project environment

```bash
uv run python script.py
```

5. Activate the virtual environment manually (optional)

```bash
source .venv/bin/activate  # Linux/macOS
.venv\Scripts\activate     # Windows
```

UV automatically manages virtual environments, Python versions, and dependencies with exceptional speed and convenience.

## Relevant links

- <router-link to="/cheatsheet/setup-py">setup.py</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Python projects with Poetry and VSCode. Part 1</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">Python projects with Poetry and VSCode. Part 2</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">Python projects with Poetry and VSCode. Part 3</router-link>
- <router-link to="/blog/python-uv-package-manager">UV: The Lightning-Fast Python Package Manager</router-link>
- <router-link to="/builtin/import">import()</router-link>
