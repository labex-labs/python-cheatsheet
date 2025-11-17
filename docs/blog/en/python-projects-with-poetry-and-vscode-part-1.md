---
title: 'Python projects with Poetry and VSCode Part 1 - Python Cheatsheet'
description: We'll use Poetry to start a simple project, manage dependencies and publish it on PyPI. We'll also integrate Pytest, Black, and Flake8 into VSCode directly from a Virtual Environment.
date: April 12, 2019
updated: July 3, 2022
tags: python, intermediate, vscode, packaging
socialImage: /blog/poetry-1.jpg
---

<route lang="yaml">
meta:
    layout: article
    title: 'Python projects with Poetry and VSCode Part 1'
    description: We'll use Poetry to start a simple project, manage dependencies and publish it on PyPI. We'll also integrate Pytest, Black, and Flake8 into VSCode directly from a Virtual Environment.
    date: April 12, 2019
    updated: July 3, 2022
    tags: python, intermediate, vscode, packaging
    socialImage: /blog/poetry-1.jpg
</route>

<blog-title-header :frontmatter="frontmatter" title="Python projects with Poetry and VSCode Part 1" />

A Virtual Environment is an isolated Python installation designed to avoid filling our base one with libraries we might use for only one project. It also allows us to manage multiple versions of the same package in different projects. We could, for example, need Django 4.1 for one and 1.9 for the other.

<base-disclaimer>
  <base-disclaimer-title>
    Python Poetry
  </base-disclaimer-title>
  <base-disclaimer-content>
    Poetry is a tool to handle dependency installation as well as building and packaging of Python packages. It only needs one file to do all of that: the new, <a target="_blank" href="https://www.python.org/dev/peps/pep-0518/">standardized</a> <code>pyproject.toml</code>`. In other words, poetry uses <code>pyproject.toml</code> to replace <code>setup.py</code>, <code>requirements.txt</code>, <code>setup.cfg</code>, <code>MANIFEST.in</code> and the newly added <code>Pipfile</code>.
  </base-disclaimer-content>
</base-disclaimer>

In this series of articles, we'll use [Poetry](https://poetry.eustace.io/) to manage our dependencies, build a simple project and, with a single command, publish it on [PyPI](https://pypi.org/).

In this first part, we will:

- Start a new project.
- Create a Virtual Environment.
- Manage dependencies.

In the <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">second article</router-link>, we'll:

- Add our virtual Environment to [VSCode](https://code.visualstudio.com/).
- Integrate our dev dependencies:
  - _Flake8_
  - _Black_
  - _Pytest_

And finally, in a <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">third article</router-link> we'll:

- Write a sample library.
- Build our project with _Poetry_.
- Publish it on _PyPI_.

## Installing Poetry

The easiest way is to use _pip_:

```bash
pip install poetry
```

But we will use Poetry own installer to isolate it from the rest of the system by vendorizing its dependencies. This is the recommended way of installing poetry:

```bash
curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python -
```

This way, we will later be able to update poetry to the latest stable version with the `poetry self update` command.

## Starting a new project

We can now start a new Python project by using the `poetry new [project_name]` command. I will call it **_how-long_** and will be a simple library to measure the execution time of a function:

```bash
poetry new how-long
```

> Note: For existing projects, you can use the `poetry init` command and interactively create a _pyproject.toml_.

The directory _how-long_ is created and inside is a basic project structure:

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

For a comprehensive guide on handling file and directory paths, which is essential for managing project structures, see the <router-link to="/cheatsheet/file-directory-path">File and directory Paths</router-link> page.

> Note: To be able to publish your project, you need an available name. Use the [PyPI](https://pypi.org/) search for this.

### The pyproject.toml file

The **pyproject.toml** file will manage the details and dependencies of the project:

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

The details. Adding a [license](https://poetry.eustace.io/docs/pyproject/#license) and a [README](https://poetry.eustace.io/docs/pyproject/#readme) might be a good idea:

```
[tool.poetry]
...
license = "MIT"
readme = "README.rst"
```

#### [tool.poetry.dependencies]

First is the Python version. Basically, this project will be compatible with Python 3.7 and up. Furthermore, from now on, every package we install that is meant to be used in production will be listed here.

#### [tool.poetry.dev-dependencies]

These packages are only for development and will not be included when we publish our project. By default, Poetry includes [Pytest](https://docs.pytest.org/en/latest/), so we will use it to test our project later on.

## Creating a Virtual Environment

To create a Virtual Environment and install _Pytest_, we will use the `poetry install` command:

```bash
poetry install
```

![poetry-install-command](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p1/poetry-install.png)

After is done, a new file, `poetry.lock` will be created.

> When Poetry has finished installing, it writes all the packages and the exact versions of them that it downloaded to the poetry.lock file, locking the project to those specific versions. You should commit the poetry.lock file to your project repo so that all people working on the project are locked to the same versions of dependencies.

## Dependency management

One way to add or remove dependencies is to directly edit _pyproject.toml_ and then run `poetry install` to apply the changes. We will instead use the `add` and `remove` commands to avoid manual modifications.

### Adding dependencies

Let's add two packages to the project, _pendulum_, and _coo_:

```bash
poetry add pendulum coo
```

![poetry-add-command](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p1/poetry-add.png)

Open _pyproject.toml_ and _poetry.lock_ and see how they have updated.

### Adding Dev dependencies

These dependencies will be available only during development, Poetry will not include them when building and publishing the project.

We already installed _Pytest_, but we will also use [flake8](http://flake8.pycqa.org/en/latest/) for linting and [mypy](http://mypy-lang.org/) for static typing:

```bash
poetry add -D flake8 mypy
```

Now that I think about it, I forgot to add a formatter. We'll go with [black](https://black.readthedocs.io/en/stable/):

```bash
poetry add -D black
[ValueError]
Could not find a matching version of package black

add [-D|--dev] [--git GIT] [--path PATH] [-E|--extras EXTRAS] [--optional] [--python PYTHON] [--platform PLATFORM] [--allow-prereleases] [--dry-run] [--] <name> (<name>)...
```

This error happens because _black_ is in a pre-release state, so Poetry cannot find any stable version for us. But I really want it, so let's install it anyway with the `--allow-prereleases` flag:

```bash
poetry add -D black --allow-prereleases
```

![poetry-add-dev-command](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p1/poetry-add-dev.png)

### Removing dependencies

You know what, I changed my mind, this project will use nor _coo_ nor _mypy_. Start by removing _coo_, a normal dependency of our project:

```bash
poetry remove coo
```

Now _mypy_ which is a dev dependency:

```bash
poetry remove -D mypy
```

## Conclusion

In this first part, we have started a new project, created a Virtual Environment and added and removed dependencies by using the following commands:

| Command                           | Description                                            |
| --------------------------------- | ------------------------------------------------------ |
| `poetry new [package-name]`       | Start a new Python Project.                            |
| `poetry init`                     | Create a _pyproject.toml_ file interactively.          |
| `poetry install`                  | Install the packages inside the _pyproject.toml_ file. |
| `poetry add [package-name]`       | Add a package to a Virtual Environment.                |
| `poetry add -D [package-name]`    | Add a dev package to a Virtual Environment.            |
| `poetry remove [package-name]`    | Remove a package from a Virtual Environment.           |
| `poetry remove -D [package-name]` | Remove a dev package from a Virtual Environment.       |
| `poetry self:update`              | Update poetry to the latest stable version.            |

In a <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">second article</router-link>, we will see more _Poetry_ commands, add our Virtual Environment to _VSCode_ and use the dev packages we installed to lint (Flake8), format (Black) and test (Pytest) our code inside the editor. Finally, in a third one, we will write and publish a sample library to _PyPI_.

Any doubt or suggestion? Please leave a comment.
