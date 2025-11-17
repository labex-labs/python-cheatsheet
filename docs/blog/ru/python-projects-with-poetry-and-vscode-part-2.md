---
title: 'Проекты на Python с Poetry и VSCode Часть 2 - Шпаргалка по Python'
description: 'Во второй части мы добавим нашу виртуальную среду в VSCode, обновим зависимости и интегрируем Flake8, Black и Pytest с редактором.'
date: 'April 23, 2019'
updated: 'July 3, 2022'
tags: 'python, intermediate, vscode, packaging'
socialImage: '/blog/poetry-2.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Проекты на Python с Poetry и VSCode Часть 2 - Шпаргалка по Python"
    description: "Во второй части мы добавим нашу виртуальную среду в VSCode, обновим зависимости и интегрируем Flake8, Black и Pytest с редактором."
    date: "April 23, 2019"
    updated: "July 3, 2022"
    tags: "python, intermediate, vscode, packaging"
    socialImage: "/blog/poetry-2.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="Проекты на Python с Poetry и VSCode Часть 2 - Шпаргалка по Python" />

В <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">первой статье</router-link> мы узнали, что такое файл `pyproject.toml` и как с ним работать, использовали [Poetry](https://poetry.eustace.io/) для запуска нового проекта, создания виртуального окружения, а также для добавления и удаления зависимостей. Все это с помощью следующих команд:

| Command                           | Description                                               |
| --------------------------------- | --------------------------------------------------------- |
| `poetry new [package-name]`       | Запуск нового Python проекта.                             |
| `poetry init`                     | Интерактивное создание файла _pyproject.toml_.            |
| `poetry install`                  | Установка пакетов из файла _pyproject.toml_.              |
| `poetry add [package-name]`       | Добавление пакета в виртуальное окружение.                |
| `poetry add -D [package-name]`    | Добавление пакета для разработки в виртуальное окружение. |
| `poetry remove [package-name]`    | Удаление пакета из виртуального окружения.                |
| `poetry remove -D [package-name]` | Удаление пакета для разработки из виртуального окружения. |

Во второй части мы:

- Добавим наше виртуальное окружение в [VSCode](https://code.visualstudio.com/).
- Обновим наши зависимости.
- Интегрируем наши зависимости для разработки с редактором:
  - _Flake8_
  - _Black_
  - _Pytest_

А в <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">третьей статье</router-link> мы напишем пример библиотеки, соберем наш проект с помощью _Poetry_ и опубликуем его на _PyPI_.

Прежде чем начать, убедитесь, что у вас установлены [VSCode](https://code.visualstudio.com/), добавлено расширение [Python](https://marketplace.visualstudio.com/itemdetails?itemName=ms-python.python) и что вы следовали инструкциям и поняли <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">первую статью</router-link> этой серии.

## Настройка Poetry в VSCode

Прошло несколько дней с первой части, поэтому не помешает проверить наличие новых версий наших зависимостей. Откройте терминал, перейдите в каталог вашего проекта и введите команду `poetry update`:

![poetry update](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/update.png)

На данный момент новых версий не найдено.

Когда вы создаете виртуальное окружение с помощью команды _venv_, _VSCode_ автоматически устанавливает его в качестве среды Python по умолчанию для этого проекта. При работе с _Poetry_ в первый раз нам нужно будет ввести следующее в терминале, находясь в папке проекта:

```bash
poetry shell
code .
```

Первая команда, `poetry shell`, запустит нас внутри нашего виртуального окружения, а `code .` откроет текущую папку в _VSCode_.

![vscode](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/vscode.png)

Откройте папку **how-long** (или ту, что соответствует имени вашего проекта) с помощью левой панели и рядом с `__init__.py` создайте файл `how-long.py`. В левом нижнем углу вы увидите текущую среду Python:

![python version](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/python-code.png)

Нажмите на нее, и отобразится список доступных сред. Выберите ту, в названии которой есть имя вашего проекта:

![choose python](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/choose-environment.png)

Теперь давайте интегрируем наши зависимости для разработки, _Flake8_, _Black_ и _Pytest_, в Visual Studio Code.

## Flake8

[Flake8](http://flake8.pycqa.org/en/latest/) предоставит нашим проектам возможности _linting_. Другими словами, он будет предупреждать о синтаксических ошибках и ошибках стиля, и благодаря VSCode мы будем видеть их по мере набора текста.

По умолчанию расширение Python поставляется с включенным _Pylint_, который мощный, но сложный в настройке. Чтобы переключиться на _Flake8_, внесите изменение в любой файл Python и сохраните его. В правом нижнем углу появится всплывающее сообщение:

![flake8](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/select-linter.png)

Нажмите **Select Linter** и выберите **Flake8** из списка. Теперь _VSCode_ будет сообщать нам о проблемах с _синтаксисом_ и _стилем_, зеленым или красным цветом в зависимости от серьезности, всегда с хорошим описанием того, что не так:

![linting](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/linting.png)

Похоже, у нас две проблемы: нам не хватает пустой строки в конце файла (стиль) и мы забыли добавить кавычки к нашей строке _Hello, World!_ (синтаксис). Исправьте их и посмотрите, как исчезнут все предупреждения.

## Black

[Black](https://github.com/ambv/black) — это форматер кода, инструмент, который просматривает наш код и автоматически форматирует его в соответствии с руководством по стилю [PEP 8](https://www.python.org/dev/peps/pep-0008/), тем же _PEP_, который _Flake8_ использует для проверки ошибок стиля.

Нажмите `shift + cmd/ctrl + p`, чтобы открыть Command Palette, введите **Format Document** и нажмите Enter. Появится новое всплывающее сообщение:

![black formatter popup](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/format-popup.png)

Выберите **Use Black**. Теперь скопируйте этот плохо отформатированный код в ваш файл Python:

```python
for i in range(5):         # this comment has too many spaces
      print(i)  # this line has 6 space indentation.
```

Какая уродливая с\*\*\*... часть кода. Попробуйте отформатировать его еще раз и посмотрите, как _Black_ исправит все ошибки для вас!

Еще одна вещь, которую мы можем сделать, это настроить VSCode так, чтобы _Black_ автоматически форматировал наш код каждый раз при сохранении. Нажмите `cmd/ctrl + ,`, чтобы открыть Настройки (Settings). Убедитесь, что вы находитесь в **Workspace Settings**, найдите **Format On Save** и активируйте флажок:

![format on save](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/format-on-save.png)

Наконец, _Black_ по умолчанию использует 88 символов на строку, в отличие от 80, разрешенных _Flake8_, поэтому, чтобы избежать конфликтов, откройте папку **.vscode** и добавьте следующее в конец файла **settings.json**:

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

Если вы серьезно относитесь к программированию, крайне важно научиться тестировать свои проекты. Это невероятно полезный навык, который позволяет писать и поставлять программы с уверенностью, уменьшая вероятность появления катастрофических ошибок после выпуска.

[Pytest](https://docs.pytest.org/en/latest/) — очень популярный и удобный фреймворк для написания тестов. Мы [уже установили его](https://www.pythoncheatsheet.org/blog/python-projects-with-poetry-and-vscode-part-1#Dependency-Management), поэтому мы также интегрируем его с _VSCode_.

Откройте папку **tests** и выберите файл `test_how_long.py`. _Poetry_ уже предоставляет нам первый тест:

```python
# test_how_long.py
from how_long import __version__


def test_version():
    assert __version__ == '0.1.0'
```

В этом тесте мы импортируем переменную `__version__` из файла `__init__.py`, который находится внутри папки **how_long**, и утверждаем, что текущая версия — _0.1.0_. Откройте интегрированный терминал, перейдя в **Terminal > New Terminal**, и введите:

```bash
pytest
```

Вывод будет выглядеть так:

![pytest](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/pytest-terminal.png)

Хорошо, все в порядке. Откройте Command Palette с помощью `shift + cmd/ctrl + p`:

- Введите **unit** и выберите **Python: Configure Unit Tests**.
- Выберите **pytest**.
- Выберите каталог, в котором вы сохранили тесты, в нашем случае **tests**.

Произошли три вещи:

- На панели состояния появилась новая кнопка: **Run Tests**. Это то же самое, что ввести _pytest_ в терминале. Нажмите на нее и выберите **Run All Unit Tests**. По завершении она сообщит вам количество пройденных и не пройденных тестов:

  ![test status bar](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img.png)

- Новый значок на левой панели. Если нажать на него, появится панель со всеми тестами. Здесь вы можете запускать каждый из них по отдельности:

  ![test side panel](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/test-side-panel.png)

- Внутри файла теста перед каждой тестовой функцией появятся новые опции: значок галочки, если все в порядке, и _x_, если нет. Это также позволяет запускать определенные тесты:

  ![test inline](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/test-inline.png)

## Заключение

К настоящему моменту мы:

- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Запустили новый проект</router-link>, создали виртуальное окружение, а также добавили, удалили и обновили зависимости.
- Добавили наше [виртуальное окружение в VSCode](#setting-up-poetry-on-vscode), [настроили _Flake8_](#flake8) для _линтования_ нашего кода по мере набора, выбрали [_Black_](#black) в качестве форматера и [включили _Pytest_](#pytest) для визуального запуска наших тестов.

Наконец, в <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">третьей и последней статье</router-link> мы будем:

- Писать пример библиотеки.
- Собирать наш проект с помощью _Poetry_.
- Публиковать его на _PyPI_.
