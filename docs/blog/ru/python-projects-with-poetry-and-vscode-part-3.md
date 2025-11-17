---
title: 'Проекты на Python с Poetry и VSCode Часть 3 - Справочник по Python'
description: 'Наконец, в этой третьей части мы напишем пример библиотеки, создадим наш проект с помощью *Poetry* и опубликуем его на PyPI.'
date: 'May 21, 2019'
updated: 'July 3, 2022'
tags: 'python, intermediate, vscode, packaging'
socialImage: '/blog/poetry-3.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Проекты на Python с Poetry и VSCode Часть 3 - Справочник по Python"
    description: "Наконец, в этой третьей части мы напишем пример библиотеки, создадим наш проект с помощью *Poetry* и опубликуем его на PyPI."
    date: "May 21, 2019"
    updated: "July 3, 2022"
    tags: "python, intermediate, vscode, packaging"
    socialImage: "/blog/poetry-3.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="Проекты на Python с Poetry и VSCode Часть 3 - Справочник по Python" />

В <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">первой статье</router-link> мы начали новый проект, создали виртуальное окружение и управляли зависимостями. Во <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">второй части</router-link> мы добавили наше виртуальное окружение в [VSCode](https://code.visualstudio.com/) и интегрировали зависимости для разработки.

И, наконец, в этой третьей и последней части мы:

- Напишем пример библиотеки.
- Скомпилируем наш проект с помощью _Poetry_.
- Опубликуем его на _PyPI_.

## Команды Poetry

Вот таблица с командами, использованными в этой серии, а также их описаниями. Полный список можно найти в [Документации Poetry](https://poetry.eustace.io/docs/cli/).

| Команда                           | Описание                                          |
| --------------------------------- | ------------------------------------------------- |
| `poetry new [package-name]`       | Начать новый Python Проект.                       |
| `poetry init`                     | Интерактивно создать файл _pyproject.toml_.       |
| `poetry install`                  | Установить пакеты из файла _pyproject.toml_.      |
| `poetry add [package-name]`       | Добавить пакет в Виртуальное окружение.           |
| `poetry add -D [package-name]`    | Добавить dev-пакет в Виртуальное окружение.       |
| `poetry remove [package-name]`    | Удалить пакет из Виртуального окружения.          |
| `poetry remove -D [package-name]` | Удалить dev-пакет из Виртуального окружения.      |
| `poetry update`                   | Получить последние версии зависимостей            |
| `poetry shell`                    | Запускает оболочку внутри виртуального окружения. |
| `poetry build`                    | Компилирует исходный код и архивы wheels.         |
| `poetry publish`                  | Публикует пакет на Pypi.                          |
| `poetry publish --build`          | Скомпилировать и опубликовать пакет.              |
| `poetry self:update`              | Обновить poetry до последней стабильной версии.   |

## Проект

Вы можете загрузить исходный код с [GitHub](https://github.com/wilfredinni/how-long), если хотите, но, как упоминалось ранее, это будет простой декоратор, который выводит в консоль, сколько времени занимает выполнение функции.

Он будет работать так:

```python
from how_long import timer

@timer
def test_function():
    [i for i in range(10000)]

test_function()
# Execution Time: 955 ms.
```

И структура каталогов проекта будет следующей:

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

Прежде чем начать, проверьте наличие обновлений пакетов с помощью команды `poetry update`:

![poetry update](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/May/poetry_vscode_p3/img/poetry_update.png)

Добавьте краткое описание проекта в `README.rst`:

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

Перейдите в `how_long/how_long.py`:

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

В `how_long/__init__.py`:

```python
from .how_long import timer

__version__ = "0.1.1"
```

И, наконец, файл `tests/test_how_long.py`:

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

Теперь вы можете использовать `poetry install` в терминале, чтобы установить и проверить ваш пакет локально. Активируйте ваше виртуальное окружение, если вы этого еще не сделали, и в интерактивной оболочке Python:

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

[Запустите тесты](https://www.pythoncheatsheet.org/blog/python-projects-with-poetry-and-vscode-part-2#Pytest), и если все в порядке, двигайтесь дальше.

## Сборка и Публикация

Наконец, пришло время сделать этот проект доступным для мира! Убедитесь, что у вас есть учетная запись на [PyPI](https://pypi.org). Помните, что имя пакета должно быть уникальным; если вы не уверены, воспользуйтесь [поиском](https://pypi.org/search/?q=), чтобы проверить это.

### Сборка

Команда `poetry build` собирает исходный код и архивы [wheels](https://pythonwheels.com/), которые позже будут загружены как источник проекта:

![poetry build](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/May/poetry_vscode_p3/img/poetry_build.png)

Будет создана директория _how_long.egg-info_.

### Публикация

Эта команда публикует пакет на _PyPI_ и автоматически регистрирует его перед загрузкой, если он отправляется впервые:

![poetry publish](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/May/poetry_vscode_p3/img/poetry_publish.png)

> Вы также можете скомпилировать и опубликовать свой проект с помощью `$ poetry publish --build`.

Введите свои учетные данные, и если все в порядке, [посмотрите](https://pypi.org/project/how-long/) свой проект, и вы увидите нечто подобное:

![pipy how-long](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/May/poetry_vscode_p3/img/pypi.png)

Теперь мы можем сообщить другим, что они могут выполнить `pip install how-long` с любой машины, где угодно!

## Заключение

Я помню, как впервые попытался опубликовать пакет, и это был кошмар. Я только начинал изучать Python, и мне пришлось потратить «несколько часов», пытаясь понять, что такое файл `setup.py` и как его использовать. В конце концов, у меня оказалось несколько файлов: `Makefile`, `MANIFEST.in`, `requirements.txt` и `test_requirements.txt`. Вот почему слова [Sébastien Eustace](https://github.com/sdispater), создателя [Poetry](https://github.com/sdispater/poetry), имели для меня большой смысл:

> Packaging and dependency management in Python are rather convoluted and hard to understand for newcomers. Even for seasoned developers it might be cumbersome at times to create all files needed in a Python project: `setup.py`, `requirements.txt`, `setup.cfg`, `MANIFEST.in` and the newly added `Pipfile`.
>
> So I wanted a tool that would limit everything to a single configuration file to do: dependency management, packaging and publishing.
>
> It takes inspiration in tools that exist in other languages, like `composer` (PHP) or `cargo` (Rust).
>
> And, finally, there is no reliable tool to properly resolve dependencies in Python, so I started `poetry` to bring an exhaustive dependency resolver to the Python community.

Poetry [отнюдь не идеален](https://frostming.com/2019/01-04/pipenv-poetry#what-about-poetry), но, в отличие от других инструментов, он действительно делает то, что обещает.
