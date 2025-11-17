---
title: 'Poetry 및 VSCode 를 활용한 Python 프로젝트 3 부: Python 치트시트'
description: '마침내, 이 세 번째 파트에서는 샘플 라이브러리를 작성하고, Poetry 를 이용해 프로젝트를 빌드한 후, Pypi 에 배포하는 과정을 다룹니다.'
date: 'May 21, 2019'
updated: 'July 3, 2022'
tags: 'python, intermediate, vscode, packaging'
socialImage: '/blog/poetry-3.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Poetry 및 VSCode 를 활용한 Python 프로젝트 3 부: Python 치트시트"
    description: "마침내, 이 세 번째 파트에서는 샘플 라이브러리를 작성하고, Poetry 를 이용해 프로젝트를 빌드한 후, Pypi 에 배포하는 과정을 다룹니다."
    date: "May 21, 2019"
    updated: "July 3, 2022"
    tags: "python, intermediate, vscode, packaging"
    socialImage: "/blog/poetry-3.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="Poetry 및 VSCode를 활용한 Python 프로젝트 3부: Python 치트시트" />

<router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">첫 번째 기사</router-link>에서는 새 프로젝트를 시작하고 가상 환경을 만들고 종속성을 관리했습니다. <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">두 번째 부분</router-link>에서는 가상 환경을 [VSCode](https://code.visualstudio.com/)에 추가하고 개발 종속성을 통합했습니다.

그리고 마지막으로, 이 세 번째이자 마지막 부분에서는 다음을 수행합니다.

- 샘플 라이브러리 작성.
- *Poetry*를 사용하여 프로젝트 빌드.
- *PyPI*에 게시.

## Poetry 명령어

다음은 이 시리즈에서 사용된 명령어와 그 설명이 포함된 표입니다. 전체 목록은 [Poetry 문서](https://poetry.eustace.io/docs/cli/)를 참조하십시오.

| 명령어                            | 설명                                            |
| --------------------------------- | ----------------------------------------------- |
| `poetry new [package-name]`       | 새 Python 프로젝트를 시작합니다.                |
| `poetry init`                     | 대화형으로 _pyproject.toml_ 파일을 생성합니다.  |
| `poetry install`                  | _pyproject.toml_ 파일 내의 패키지를 설치합니다. |
| `poetry add [package-name]`       | 가상 환경에 패키지를 추가합니다.                |
| `poetry add -D [package-name]`    | 가상 환경에 개발 패키지를 추가합니다.           |
| `poetry remove [package-name]`    | 가상 환경에서 패키지를 제거합니다.              |
| `poetry remove -D [package-name]` | 가상 환경에서 개발 패키지를 제거합니다.         |
| `poetry update`                   | 종속성의 최신 버전을 가져옵니다.                |
| `poetry shell`                    | 가상 환경 내에서 셸을 생성합니다.               |
| `poetry build`                    | 소스 및 휠 아카이브를 빌드합니다.               |
| `poetry publish`                  | 패키지를 Pypi 에 게시합니다.                    |
| `poetry publish --build`          | 패키지를 빌드하고 게시합니다.                   |
| `poetry self:update`              | Poetry 를 최신 안정 버전으로 업데이트합니다.    |

## 프로젝트

원하시면 [GitHub](https://github.com/wilfredinni/how-long)에서 소스 코드를 다운로드할 수 있지만, 앞서 언급했듯이 이것은 함수가 실행되는 데 걸리는 시간을 콘솔에 출력하는 간단한 데코레이터가 될 것입니다.

다음과 같이 작동합니다.

```python
from how_long import timer

@timer
def test_function():
    [i for i in range(10000)]

test_function()
# Execution Time: 955 ms.
```

그리고 프로젝트 디렉토리는 다음과 같습니다.

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

시작하기 전에 `poetry update` 명령어로 패키지 업데이트를 확인하십시오.

![poetry update](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/May/poetry_vscode_p3/img/poetry_update.png)

`README.rst`에 프로젝트에 대한 간략한 설명을 추가합니다.

```
how_long
========

함수 실행 시간을 측정하는 간단한 데코레이터입니다.

예시
_______

.. code-block:: python

    from how_long import timer


    @timer
    def some_function():
        return [x for x in range(10_000_000)]
```

`how_long/how_long.py`로 이동합니다.

```python
# how_long.py
from functools import wraps

import pendulum


def timer(function):
    """
    함수 실행 시간을 측정하는 간단한 데코레이터입니다.
    """

    @wraps(function)
    def function_wrapper():
        start = pendulum.now()
        function()
        elapsed_time = pendulum.now() - start
        print(f"Execution Time: {elapsed_time.microseconds} ms.")

    return function_wrapper
```

`how_long/__init__.py`에서:

```python
from .how_long import timer

__version__ = "0.1.1"
```

그리고 마지막으로, `tests/test_how_long.py` 파일:

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

이제 터미널에서 `poetry install`을 사용하여 패키지를 로컬에 설치하고 테스트할 수 있습니다. 가상 환경을 활성화하지 않았다면 활성화하고 Python 대화형 셸에서:

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

[테스트를 실행](https://www.pythoncheatsheet.org/blog/python-projects-with-poetry-and-vscode-part-2#Pytest)하고 모든 것이 괜찮다면 다음으로 넘어갑니다.

## 빌드 및 게시

마침내 이 프로젝트를 세상에 공개할 때가 왔습니다! [PyPI](https://pypi.org)에 계정이 있는지 확인하십시오. 패키지 이름은 고유해야 합니다. 확실하지 않은 경우 [검색](https://pypi.org/search/?q=)을 사용하여 확인하십시오.

### 빌드

`poetry build` 명령어는 나중에 프로젝트의 소스로 업로드될 소스 및 [휠](https://pythonwheels.com/) 아카이브를 빌드합니다.

![poetry build](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/May/poetry_vscode_p3/img/poetry_build.png)

_how_long.egg-info_ 디렉토리가 생성됩니다.

### 게시

이 명령어는 패키지를 *PyPI*에 게시하고, 처음 제출하는 경우 업로드하기 전에 자동으로 등록합니다.

![poetry publish](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/May/poetry_vscode_p3/img/poetry_publish.png)

> `$ poetry publish --build`를 사용하여 프로젝트를 빌드하고 게시할 수도 있습니다.

자격 증명을 입력하고 모든 것이 괜찮다면 프로젝트를 [탐색](https://pypi.org/project/how-long/)하면 다음과 같은 화면이 나타납니다.

![pipy how-long](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/May/poetry_vscode_p3/img/pypi.png)

이제 다른 사람들에게 어디서든 어떤 컴퓨터에서든 `pip install how-long`을 할 수 있다는 것을 알릴 수 있습니다!

## 결론

처음 패키지를 게시하려고 했을 때 악몽 같았던 기억이 납니다. 저는 Python 을 막 시작했을 때였고, `setup.py` 파일이 무엇이며 어떻게 사용해야 하는지 이해하려고 "몇 시간"을 보내야 했습니다. 결국 저는 `Makefile`, `MANIFEST.in`, `requirements.txt`, `test_requirements.txt`와 같은 여러 파일로 끝났습니다. 그래서 [Poetry](https://github.com/sdispater/poetry)의 창시자인 [Sébastien Eustace](https://github.com/sdispater)의 말이 저에게 큰 의미로 다가왔습니다.

> Python 의 패키징 및 종속성 관리는 초보자에게는 다소 복잡하고 이해하기 어렵습니다. 숙련된 개발자에게도 Python 프로젝트에 필요한 모든 파일 (`setup.py`, `requirements.txt`, `setup.cfg`, `MANIFEST.in`, 그리고 새로 추가된 `Pipfile`) 을 만드는 것이 때로는 번거로울 수 있습니다.
>
> 그래서 저는 종속성 관리, 패키징 및 게시를 수행하기 위해 모든 것을 단일 구성 파일로 제한하는 도구를 원했습니다.
>
> 이는 `composer` (PHP) 또는 `cargo` (Rust) 와 같이 다른 언어에 존재하는 도구에서 영감을 받았습니다.
>
> 그리고 마지막으로, Python 에는 종속성을 제대로 해결할 수 있는 신뢰할 수 있는 도구가 없으므로, 저는 Python 커뮤니티에 철저한 종속성 해결사를 제공하기 위해 `poetry`를 시작했습니다.

Poetry 는 [결코 완벽하지 않지만](https://frostming.com/2019/01-04/pipenv-poetry#what-about-poetry), 다른 도구와 달리 약속한 바를 실제로 수행합니다.
