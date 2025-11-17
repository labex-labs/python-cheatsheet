---
title: 'Проекты на Python с Poetry и VSCode. Часть 1: Шпаргалка по Python.'
description: 'Использование Poetry для создания проекта, управления зависимостями и публикации на PyPI. Интеграция Pytest, Black и Flake8 в VSCode непосредственно из виртуального окружения.'
date: 'April 12, 2019'
updated: 'July 3, 2022'
tags: 'python, intermediate, vscode, packaging'
socialImage: '/blog/poetry-1.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Проекты на Python с Poetry и VSCode. Часть 1: Шпаргалка по Python."
    description: "Использование Poetry для создания проекта, управления зависимостями и публикации на PyPI. Интеграция Pytest, Black и Flake8 в VSCode непосредственно из виртуального окружения."
    date: "April 12, 2019"
    updated: "July 3, 2022"
    tags: "python, intermediate, vscode, packaging"
    socialImage: "/blog/poetry-1.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="Проекты на Python с Poetry и VSCode. Часть 1: Шпаргалка по Python." />

Виртуальное окружение — это изолированная установка Python, предназначенная для того, чтобы избежать заполнения нашей базовой установки библиотеками, которые мы можем использовать только для одного проекта. Оно также позволяет нам управлять несколькими версиями одного и того же пакета в разных проектах. Например, нам может понадобиться Django 4.1 для одного проекта и 1.9 для другого.

<base-disclaimer>
  <base-disclaimer-title>
    Python Poetry
  </base-disclaimer-title>
  <base-disclaimer-content>
    Poetry — это инструмент для обработки установки зависимостей, а также для сборки и упаковки пакетов Python. Для всего этого ему нужен только один файл: новый, <a target="_blank" href="https://www.python.org/dev/peps/pep-0518/">стандартизированный</a> <code>pyproject.toml</code>. Другими словами, poetry использует <code>pyproject.toml</code> для замены <code>setup.py</code>, <code>requirements.txt</code>, <code>setup.cfg</code>, <code>MANIFEST.in</code> и недавно добавленного <code>Pipfile</code>.
  </base-disclaimer-content>
</base-disclaimer>

В этой серии статей мы будем использовать [Poetry](https://poetry.eustace.io/) для управления нашими зависимостями, создания простого проекта и, с помощью одной команды, публикации его на [PyPI](https://pypi.org/).

В этой первой части мы:

- Начнем новый проект.
- Создадим Виртуальное окружение.
- Управлять зависимостями.

Во <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">второй статье</router-link> мы:

- Добавим наше виртуальное окружение в [VSCode](https://code.visualstudio.com/).
- Интегрируем наши dev-зависимости:
  - _Flake8_
  - _Black_
  - _Pytest_

И, наконец, в <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">третьей статье</router-link> мы:

- Напишем пример библиотеки.
- Соберем наш проект с помощью _Poetry_.
- Опубликуем его на _PyPI_.

## Установка Poetry

Самый простой способ — использовать _pip_:

```bash
pip install poetry
```

Но мы будем использовать собственный установщик Poetry, чтобы изолировать его от остальной системы, используя vendorizing его зависимостей. Это рекомендуемый способ установки poetry:

```bash
curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python -
```

Таким образом, позже мы сможем обновить poetry до последней стабильной версии с помощью команды `poetry self update`.

## Запуск нового проекта

Теперь мы можем начать новый проект Python, используя команду `poetry new [project_name]`. Я назову его **_how-long_**, и это будет простая библиотека для измерения времени выполнения функции:

```bash
poetry new how-long
```

> Примечание: Для существующих проектов вы можете использовать команду `poetry init` и интерактивно создать _pyproject.toml_.

Создается каталог _how-long_, и внутри него находится базовая структура проекта:

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

Для получения исчерпывающего руководства по работе с путями к файлам и каталогам, что важно для управления структурами проектов, см. страницу <router-link to="/cheatsheet/file-directory-path">Пути к файлам и каталогам</router-link>.

> Примечание: Чтобы иметь возможность опубликовать свой проект, вам нужно доступное имя. Используйте для этого поиск [PyPI](https://pypi.org/).

### Файл pyproject.toml

Файл **pyproject.toml** будет управлять деталями и зависимостями проекта:

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

Детали. Добавление [лицензии](https://poetry.eustace.io/docs/pyproject/#license) и [README](https://poetry.eustace.io/docs/pyproject/#readme) может быть хорошей идеей:

```
[tool.poetry]
...
license = "MIT"
readme = "README.rst"
```

#### [tool.poetry.dependencies]

Сначала идет версия Python. В основном, этот проект будет совместим с Python 3.7 и выше. Кроме того, с этого момента каждый пакет, который мы устанавливаем и который предназначен для использования в production, будет перечислен здесь.

#### [tool.poetry.dev-dependencies]

Эти пакеты предназначены только для разработки и не будут включены, когда мы опубликуем наш проект. По умолчанию Poetry включает [Pytest](https://docs.pytest.org/en/latest/), поэтому мы будем использовать его для тестирования нашего проекта позже.

## Создание Виртуального окружения

Чтобы создать Виртуальное окружение и установить _Pytest_, мы будем использовать команду `poetry install`:

```bash
poetry install
```

![poetry-install-command](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p1/poetry-install.png)

После завершения будет создан новый файл `poetry.lock`.

> Когда Poetry завершит установку, он записывает все пакеты и их точные версии, которые он загрузил, в файл poetry.lock, фиксируя проект на этих конкретных версиях. Вы должны зафиксировать файл poetry.lock в репозитории вашего проекта, чтобы все люди, работающие над проектом, были зафиксированы на одних и тех же версиях зависимостей.

## Управление зависимостями

Один из способов добавить или удалить зависимости — это напрямую отредактировать _pyproject.toml_, а затем запустить `poetry install`, чтобы применить изменения. Вместо этого мы будем использовать команды `add` и `remove`, чтобы избежать ручных изменений.

### Добавление зависимостей

Давайте добавим два пакета в проект, _pendulum_ и _coo_:

```bash
poetry add pendulum coo
```

![poetry-add-command](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p1/poetry-add.png)

Откройте _pyproject.toml_ и _poetry.lock_ и посмотрите, как они обновились.

### Добавление Dev-зависимостей

Эти зависимости будут доступны только во время разработки, Poetry не будет включать их при сборке и публикации проекта.

Мы уже установили _Pytest_, но мы также будем использовать [flake8](http://flake8.pycqa.org/en/latest/) для линтинга и [mypy](http://mypy-lang.org/) для статической типизации:

```bash
poetry add -D flake8 mypy
```

Теперь, когда я думаю об этом, я забыл добавить форматер. Мы выберем [black](https://black.readthedocs.io/en/stable/):

```bash
poetry add -D black
[ValueError]
Could not find a matching version of package black

add [-D|--dev] [--git GIT] [--path PATH] [-E|--extras EXTRAS] [--optional] [--python PYTHON] [--platform PLATFORM] [--allow-prereleases] [--dry-run] [--] <name> (<name>)...
```

Эта ошибка возникает потому, что _black_ находится в состоянии предварительного выпуска, поэтому Poetry не может найти для нас стабильную версию. Но я действительно хочу его, поэтому давайте установим его в любом случае с флагом `--allow-prereleases`:

```bash
poetry add -D black --allow-prereleases
```

![poetry-add-dev-command](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p1/poetry-add-dev.png)

### Удаление зависимостей

Знаете что, я передумал, этот проект не будет использовать ни _coo_, ни _mypy_. Начнем с удаления _coo_, обычной зависимости нашего проекта:

```bash
poetry remove coo
```

Теперь _mypy_, которая является dev-зависимостью:

```bash
poetry remove -D mypy
```

## Заключение

В этой первой части мы запустили новый проект, создали Виртуальное окружение, а также добавили и удалили зависимости, используя следующие команды:

| Команда                           | Описание                                         |
| --------------------------------- | ------------------------------------------------ |
| `poetry new [package-name]`       | Запустить новый проект Python.                   |
| `poetry init`                     | Интерактивно создать файл _pyproject.toml_.      |
| `poetry install`                  | Установить пакеты внутри файла _pyproject.toml_. |
| `poetry add [package-name]`       | Добавить пакет в Виртуальное окружение.          |
| `poetry add -D [package-name]`    | Добавить dev-пакет в Виртуальное окружение.      |
| `poetry remove [package-name]`    | Удалить пакет из Виртуального окружения.         |
| `poetry remove -D [package-name]` | Удалить dev-пакет из Виртуального окружения.     |
| `poetry self:update`              | Обновить poetry до последней стабильной версии.  |

Во <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">второй статье</router-link> мы рассмотрим больше команд _Poetry_, добавим наше Виртуальное окружение в _VSCode_ и используем установленные нами dev-пакеты для линтинга (Flake8), форматирования (Black) и тестирования (Pytest) нашего кода внутри редактора. Наконец, в третьей статье мы напишем и опубликуем пример библиотеки на _PyPI_.

Есть сомнения или предложения? Пожалуйста, оставьте комментарий.
