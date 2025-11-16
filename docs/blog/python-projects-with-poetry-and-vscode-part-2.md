---
title: 'Python projects with Poetry and VSCode Part 2 - Python Cheatsheet'
description: In this second part, we'll add our virtual Environment to VSCode, update our dependencies and integrate Flake8, Black and Pytest with the editor.
date: April 23, 2019
updated: July 3, 2022
tags: python, intermediate, vscode, packaging
socialImage: /blog/poetry-2.jpg
---

<route lang="yaml">
meta:
    layout: article
    title: 'Python projects with Poetry and VSCode Part 2'
    description: In this second part, we'll add our virtual Environment to VSCode, update our dependencies and integrate Flake8, Black and Pytest with the editor.
    date: April 23, 2019
    updated: July 3, 2022
    tags: python, intermediate, vscode, packaging
    socialImage: /blog/poetry-2.jpg
</route>

<blog-title-header :frontmatter="frontmatter" title="Python projects with Poetry and VSCode Part 2" />

In the <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">first article</router-link> we learned what the `pyproject.toml` file is and how to work with it, used [Poetry](https://poetry.eustace.io/) to start a new project, create a Virtual Environment and to add and remove dependencies. All of that with the following commands:

| Command                           | Description                                            |
| --------------------------------- | ------------------------------------------------------ |
| `poetry new [package-name]`       | Start a new Python Project.                            |
| `poetry init`                     | Create a _pyproject.toml_ file interactively.          |
| `poetry install`                  | Install the packages inside the _pyproject.toml_ file. |
| `poetry add [package-name]`       | Add a package to a Virtual Environment.                |
| `poetry add -D [package-name]`    | Add a dev package to a Virtual Environment.            |
| `poetry remove [package-name]`    | Remove a package from a Virtual Environment.           |
| `poetry remove -D [package-name]` | Remove a dev package from a Virtual Environment.       |

In this second part, we'll:

- Add our virtual Environment to [VSCode](https://code.visualstudio.com/).
- Update our dependencies.
- Integrate our dev dependencies with the editor:
  - _Flake8_
  - _Black_
  - _Pytest_

And in a <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">third article</router-link> we will write a sample library, build our project with _Poetry_ and publish it on _PyPI_.

Before we start, make sure you have installed [VSCode](https://code.visualstudio.com/), added the [Python](https://marketplace.visualstudio.com/itemdetails?itemName=ms-python.python) extension and that you have followed and understood the <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">first article</router-link> of this series.

## Setting up Poetry on VSCode

A few days have passed since the first part, so it may be a good idea to check for new versions of our dependencies. Open your terminal, navigate inside your project directory and type the `poetry update` command:

![poetry update](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/update.png)

Until now, there are no new versions available.

When you create a Virtual Environment with the _venv_ command, _VSCode_ will automatically set it as the default Python Environment for that project. When working With _Poetry_, the first time we will need to type the following in the terminal and inside the project folder:

```bash
poetry shell
code .
```

The first command, `poetry shell`, will spawn us inside our virtual environment, and `code .` will open the current folder inside _VSCode_.

![vscode](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/vscode.png)

Open the **how-long** folder (or the one with your project name) using the left panel and alongside to `__init__.py`, create a `how-long.py` file. In the bottom-left corner, you'll see the current Python Environment:

![python version](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/python-code.png)

Click it and a list of available Environments will display. Choose the one that has the name of your project in it:

![choose python](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/choose-environment.png)

Now, let's integrate our dev dependencies, _Flake8_, _Black_, and _Pytest_ into Visual Studio Code.

## Flake8

[Flake8](http://flake8.pycqa.org/en/latest/) will provide our projects with _linting_ capabilities. In other words, warning of syntax and style errors, and thanks to VSCode, we will know them as we type.

By default, the Python extension comes with _Pylint_ enabled, which is powerful but complex to configure. To switch to _Flake8_ make a change to any Python file and save it, in the bottom-right corner a popup message will show:

![flake8](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/select-linter.png)

Click on **Select Linter** and choose **Flake8** from the list. Now, _VSCode_ will tell us our _syntax_ and _style_ problems, in green or red depending on its severity, always with a nice description of what is wrong:

![linting](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/linting.png)

Seems like we have two problems: we are missing a blank line at the end of our file (style) and forgot to add quotes to our _Hello, World!_ string (syntax). Fix them and see all warnings disappear.

## Black

[Black](https://github.com/ambv/black) is a code formatter, a tool that will look at our code and automatically format it in compliance with the [PEP 8](https://www.python.org/dev/peps/pep-0008/) style guide, the same _PEP_ that uses _Flake8_ to lint our style errors.

Hold `shift + cmd/ctrl + p` to open the Command Palette, type **Format Document**, and press enter. A new popup message will appear:

![black formatter popup](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/format-popup.png)

Select **Use Black**. Now copy this poorly formatted code into your python file:

```python
for i in range(5):         # this comment has too many spaces
      print(i)  # this line has 6 space indentation.
```

What an ugly piece of s\*\*\*... code. Try formatting it again and see how _Black_ fixes all of them for you!

Another thing we can do is configure VSCode so that every time we save, _Black_ will automatically format our code. Hold `cmd/ctrl + ,` to open the Settings. Make sure you are in the **Workspace Settings**, search for **Format On Save** and activate the checkbox:

![format on save](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/format-on-save.png)

Lastly, _Black_ defaults to 88 characters per line in contrast with the 80 allowed by _Flake8_, so to avoid conflicts, open the **.vscode** folder and add the following at the end of the **settings.json** file:

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

If you are serious about programming, it is crucial for you to learn how to test your projects. It's an incredibly useful skill that allows you to write and deliver programs with confidence by reducing the possibility of catastrophic bugs appearing after shipping.

[Pytest](https://docs.pytest.org/en/latest/) is a very popular and user-friendly framework for writing tests. We [already installed it](https://www.pythoncheatsheet.org/blog/python-projects-with-poetry-and-vscode-part-1#Dependency-Management), so we will also integrate it with _VSCode_.

Open the **tests** folder and select the `test_how_long.py` file. _Poetry_ already gives us our first test:

```python
# test_how_long.py
from how_long import __version__


def test_version():
    assert __version__ == '0.1.0'
```

In this test, we import the `__version__` variable from the `__init__.py` file that is inside the **how_long** folder and asserts that the current version is _0.1.0_. Open the integrated terminal by going to **Terminal > New Terminal** and type:

```bash
pytest
```

The Output will look like this:

![pytest](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/pytest-terminal.png)

Ok, everything is fine. Open your Command Palette with `shift + cmd/ctrl + p`:

- Write **unit** and select **Python: Configure Unit Tests**.
- Select **pytest**.
- Choose the directory in which you saved the tests, **tests** in our case.

Three things happened:

- A new button appeared at the status bar: **Run Tests**. This is the same as typing _pytest_ in the terminal. Press it and select **Run All Unit Tests**. When finished, it will inform you the number of tests that passed and the tests that not:

  ![test status bar](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img.png)

- A new icon at the left bar. If you click on it, a panel displaying all the test will appear. Here, you can run each one individually:

  ![test side panel](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/test-side-panel.png)

- Inside the test file, new options will be displayed before every test function: a check icon will appear if is ok, and an _x_ otherwise. It also allows you to run specific tests:

  ![test inline](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/test-inline.png)

## Conclusion

So far, we have:

- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Started a new project</router-link>, created a Virtual Environment, and added, deleted and updated dependencies.
- Added our [Virtual Environment to VSCode](#setting-up-poetry-on-vscode), [Configured _Flake8_](#flake8) to _lint_ our code as we type, select [_Black_](#black) as the formatter and [included _Pytest_](#pytest) to run our tests visually.

Finally, in the <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">third and last article</router-link>, we will:

- Write a sample library.
- Build our project with _Poetry_.
- Publish it on _PyPI_.
