---
title: 'Python Setup.py - Справочник по Python'
description: 'Скрипт setup является центром всей деятельности по созданию, распространению и установке модулей с использованием Distutils. Основная цель скрипта setup — описать ваше распределение модулей для Distutils, чтобы различные команды, работающие с вашими модулями, выполняли нужные действия.'
labUrl: 'https://labex.io/ru/labs/python-python-setup-py-633666?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python setup.py
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-warning>
  <base-warning-title>
    «Спорное» мнение
  </base-warning-title>
  <base-warning-content>
    Использование `setup.py` для упаковки и распространения ваших пакетов Python может быть довольно сложным время от времени. Современные инструменты, такие как <a target="_blank" href="https://python-poetry.org/">Poetry</a> и <a target="_blank" href="https://docs.astral.sh/uv/">UV</a>, не только делают упаковку **намного проще**, но и помогают очень удобно управлять зависимостями. UV особенно примечателен тем, что он в 10-100 раз быстрее традиционных инструментов.
  </base-warning-content>
</base-warning>

Если вы хотите получить больше информации о Poetry, вы можете прочитать следующие статьи:

- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Проекты Python с Poetry и VSCode. Часть 1</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">Проекты Python с Poetry и VSCode. Часть 2</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">Проекты Python с Poetry и VSCode. Часть 3</router-link>

Для получения исчерпывающего руководства по UV, молниеносно быстрому менеджеру пакетов Python, прочтите: <router-link to="/blog/python-uv-package-manager">UV: Молниеносно быстрый менеджер пакетов Python</router-link>.

## Introduction

Скрипт setup является центром всей активности по сборке, распространению и установке модулей с использованием Distutils. Основная цель скрипта setup — описать вашу дистрибуцию модулей для Distutils, чтобы различные команды, работающие с вашими модулями, выполняли правильные действия.

Для получения исчерпывающего руководства по работе с путями к файлам и каталогам, что важно для управления структурой проекта, см. страницу <router-link to="/cheatsheet/file-directory-path">Пути к файлам и каталогам</router-link>.

Файл `setup.py` находится в основе проекта Python. Он описывает все метаданные о вашем проекте. Вы можете добавить в проект довольно много полей, чтобы придать ему богатый набор метаданных, описывающих проект. Однако есть только три обязательных поля: `name`, `version` и `packages`. Поле `name` должно быть уникальным, если вы хотите опубликовать свой пакет в Python Package Index (PyPI). Поле `version` отслеживает различные выпуски проекта. Поле `packages` описывает, где вы разместили исходный код Python в вашем проекте.

Это позволяет легко устанавливать пакеты Python. Часто достаточно написать:

```bash
python setup.py install
```

и модуль установит себя сам.

## Example

Наш первоначальный setup.py также будет включать информацию о лицензии и повторно использовать файл README.txt для поля `long_description`. Это будет выглядеть так:

```python
# setup.py: define package metadata for distribution
from distutils.core import setup
setup(
   name='pythonCheatsheet',  # Package name (must be unique on PyPI)
   version='0.1',  # Version number
   packages=['pipenv',],  # List of packages to include
   license='MIT',  # License type
   long_description=open('README.txt').read(),  # Read description from file
)
```

Больше информации можно найти в [официальной документации](http://docs.python.org/3.11/install/index.html).

## Relevant links

- <router-link to="/cheatsheet/virtual-environments">Виртуальные окружения</router-link>
- <router-link to="/cheatsheet/file-directory-path">Пути к файлам и каталогам</router-link>
- <router-link to="/blog/python-uv-package-manager">UV: Молниеносно быстрый менеджер пакетов Python</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Проекты Python с Poetry и VSCode. Часть 1</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">Проекты Python с Poetry и VSCode. Часть 2</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">Проекты Python с Poetry и VSCode. Часть 3</router-link>
- <router-link to="/builtin/import">import()</router-link>
