---
title: 'Poetry 와 VSCode 를 활용한 Python 프로젝트 (1 부) - Python 치트 시트'
description: 'Poetry 를 사용하여 간단한 프로젝트를 시작하고, 의존성을 관리하며 PyPI 에 게시하는 방법을 알아봅니다. 또한 가상 환경에서 Pytest, Black, Flake8 를 VSCode 에 직접 통합하는 방법을 다룹니다.'
date: 'April 12, 2019'
updated: 'July 3, 2022'
tags: 'python, intermediate, vscode, packaging'
socialImage: '/blog/poetry-1.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Poetry 와 VSCode 를 활용한 Python 프로젝트 (1 부) - Python 치트 시트"
    description: "Poetry 를 사용하여 간단한 프로젝트를 시작하고, 의존성을 관리하며 PyPI 에 게시하는 방법을 알아봅니다. 또한 가상 환경에서 Pytest, Black, Flake8 를 VSCode 에 직접 통합하는 방법을 다룹니다."
    date: "April 12, 2019"
    updated: "July 3, 2022"
    tags: "python, intermediate, vscode, packaging"
    socialImage: "/blog/poetry-1.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="Poetry와 VSCode를 활용한 Python 프로젝트 (1부) - Python 치트 시트" />

가상 환경 (Virtual Environment) 은 특정 프로젝트에만 사용할 라이브러리로 기본 설치 환경을 채우는 것을 방지하기 위해 설계된 격리된 Python 설치입니다. 또한 이를 통해 여러 프로젝트에서 동일한 패키지의 여러 버전을 관리할 수 있습니다. 예를 들어, 하나는 Django 4.1 을, 다른 하나는 1.9 를 필요로 할 수 있습니다.

<base-disclaimer>
  <base-disclaimer-title>
    Python Poetry
  </base-disclaimer-title>
  <base-disclaimer-content>
    Poetry 는 종속성 설치뿐만 아니라 Python 패키지의 빌드 및 패키징을 처리하는 도구입니다. 이 모든 작업을 수행하는 데 단 하나의 파일만 필요합니다. 바로 새롭고 <a target="_blank" href="https://www.python.org/dev/peps/pep-0518/">표준화된</a> <code>pyproject.toml</code> 파일입니다. 즉, poetry 는 <code>pyproject.toml</code>을 사용하여 <code>setup.py</code>, <code>requirements.txt</code>, <code>setup.cfg</code>, <code>MANIFEST.in</code> 및 새로 추가된 <code>Pipfile</code>을 대체합니다.
  </base-disclaimer-content>
</base-disclaimer>

이 일련의 기사에서는 [Poetry](https://poetry.eustace.io/)를 사용하여 종속성을 관리하고, 간단한 프로젝트를 빌드하고, 단일 명령으로 [PyPI](https://pypi.org/)에 게시할 것입니다.

이 첫 번째 부분에서는 다음을 수행합니다.

- 새 프로젝트 시작.
- 가상 환경 생성.
- 종속성 관리.

<router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">두 번째 기사</router-link>에서는 다음을 수행합니다.

- 가상 환경을 [VSCode](https://code.visualstudio.com/)에 추가.
- 개발 종속성 통합:
  - _Flake8_
  - _Black_
  - _Pytest_

마지막으로, <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">세 번째 기사</router-link>에서는 다음을 수행합니다.

- 샘플 라이브러리 작성.
- *Poetry*로 프로젝트 빌드.
- *PyPI*에 게시.

## Poetry 설치

가장 쉬운 방법은 *pip*을 사용하는 것입니다.

```bash
pip install poetry
```

하지만 우리는 시스템의 나머지 부분과 격리하기 위해 Poetry 자체 설치 프로그램을 사용하여 종속성을 벤더링할 것입니다. 이것이 poetry 를 설치하는 권장 방법입니다.

```bash
curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python -
```

이렇게 하면 나중에 `poetry self update` 명령으로 poetry 를 최신 안정 버전으로 업데이트할 수 있습니다.

## 새 프로젝트 시작

이제 `poetry new [project_name]` 명령을 사용하여 새 Python 프로젝트를 시작할 수 있습니다. 저는 이 프로젝트를 **_how-long_**이라고 부를 것이며, 함수의 실행 시간을 측정하는 간단한 라이브러리가 될 것입니다.

```bash
poetry new how-long
```

> 참고: 기존 프로젝트의 경우 `poetry init` 명령을 사용하여 대화형으로 *pyproject.toml*을 생성할 수 있습니다.

_how-long_ 디렉토리가 생성되며 그 안에는 기본 프로젝트 구조가 있습니다.

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

프로젝트 구조 관리의 필수 요소인 파일 및 디렉터리 경로 처리 방법에 대한 포괄적인 가이드는 <router-link to="/cheatsheet/file-directory-path">파일 및 디렉터리 경로</router-link> 페이지를 참조하십시오.

> 참고: 프로젝트를 게시하려면 사용 가능한 이름이 필요합니다. 이를 위해 [PyPI](https://pypi.org/) 검색을 사용하십시오.

### pyproject.toml 파일

**pyproject.toml** 파일은 프로젝트의 세부 정보와 종속성을 관리합니다.

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

세부 정보입니다. [라이선스](https://poetry.eustace.io/docs/pyproject/#license)와 [README](https://poetry.eustace.io/docs/pyproject/#readme)를 추가하는 것이 좋을 수 있습니다.

```
[tool.poetry]
...
license = "MIT"
readme = "README.rst"
```

#### [tool.poetry.dependencies]

첫 번째는 Python 버전입니다. 기본적으로 이 프로젝트는 Python 3.7 이상과 호환됩니다. 또한 지금부터 프로덕션에서 사용될 모든 패키지는 여기에 나열됩니다.

#### [tool.poetry.dev-dependencies]

이 패키지들은 개발용이며 프로젝트를 빌드하고 게시할 때 포함되지 않습니다. 기본적으로 Poetry 는 [Pytest](https://docs.pytest.org/en/latest/)를 포함하므로 나중에 프로젝트 테스트에 사용할 것입니다.

## 가상 환경 생성

가상 환경을 생성하고 *Pytest*를 설치하려면 `poetry install` 명령을 사용합니다.

```bash
poetry install
```

![poetry-install-command](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p1/poetry-install.png)

완료되면 새 파일인 `poetry.lock`이 생성됩니다.

> Poetry 가 설치를 완료하면 다운로드한 모든 패키지와 정확한 버전을 poetry.lock 파일에 기록하여 프로젝트를 해당 특정 버전에 고정합니다. 프로젝트에서 작업하는 모든 사람이 종속성의 동일한 버전에 고정되도록 poetry.lock 파일을 프로젝트 리포지토리에 커밋해야 합니다.

## 종속성 관리

종속성을 추가하거나 제거하는 한 가지 방법은 *pyproject.toml*을 직접 편집한 다음 `poetry install`을 실행하여 변경 사항을 적용하는 것입니다. 대신 수동 수정을 피하기 위해 `add` 및 `remove` 명령을 사용할 것입니다.

### 종속성 추가

프로젝트에 *pendulum*과 _coo_ 두 패키지를 추가해 보겠습니다.

```bash
poetry add pendulum coo
```

![poetry-add-command](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p1/poetry-add.png)

_pyproject.toml_ 및 *poetry.lock*을 열어 어떻게 업데이트되었는지 확인하십시오.

### 개발 종속성 추가

이러한 종속성은 개발 중에만 사용할 수 있으며, Poetry 는 프로젝트를 빌드하고 게시할 때 포함하지 않습니다.

우리는 이미 *Pytest*를 설치했지만, 린팅을 위해 [flake8](http://flake8.pycqa.org/en/latest/)과 정적 타이핑을 위해 [mypy](http://mypy-lang.org/)도 사용할 것입니다.

```bash
poetry add -D flake8 mypy
```

곰곰이 생각해 보니 포매터를 추가하는 것을 잊었습니다. [black](https://black.readthedocs.io/en/stable/)을 사용하겠습니다.

```bash
poetry add -D black
[ValueError]
Could not find a matching version of package black

add [-D|--dev] [--git GIT] [--path PATH] [-E|--extras EXTRAS] [--optional] [--python PYTHON] [--platform PLATFORM] [--allow-prereleases] [--dry-run] [--] <name> (<name>)...
```

이 오류는 *black*이 프리릴리스 상태이기 때문에 Poetry 가 안정적인 버전을 찾을 수 없어서 발생합니다. 하지만 정말 원하므로 `--allow-prereleases` 플래그를 사용하여 설치하겠습니다.

```bash
poetry add -D black --allow-prereleases
```

![poetry-add-dev-command](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p1/poetry-add-dev.png)

### 종속성 제거

있잖아요, 마음이 바뀌었어요. 이 프로젝트는 *coo*와 *mypy*를 모두 사용하지 않을 것입니다. 먼저 프로젝트의 일반 종속성인 *coo*를 제거하는 것부터 시작하겠습니다.

```bash
poetry remove coo
```

이제 개발 종속성인 *mypy*를 제거합니다.

```bash
poetry remove -D mypy
```

## 결론

첫 번째 부분에서는 새 프로젝트를 시작하고, 가상 환경을 생성하고, 다음 명령을 사용하여 종속성을 추가하고 제거했습니다.

| Command                           | 설명                                     |
| :-------------------------------- | :--------------------------------------- |
| `poetry new [package-name]`       | 새 Python 프로젝트 시작.                 |
| `poetry init`                     | _pyproject.toml_ 파일을 대화형으로 생성. |
| `poetry install`                  | _pyproject.toml_ 파일 내의 패키지 설치.  |
| `poetry add [package-name]`       | 패키지를 가상 환경에 추가.               |
| `poetry add -D [package-name]`    | 개발 패키지를 가상 환경에 추가.          |
| `poetry remove [package-name]`    | 패키지를 가상 환경에서 제거.             |
| `poetry remove -D [package-name]` | 개발 패키지를 가상 환경에서 제거.        |
| `poetry self:update`              | poetry 를 최신 안정 버전으로 업데이트.   |

<router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">두 번째 기사</router-link>에서는 _Poetry_ 명령을 더 살펴보고, 가상 환경을 *VSCode*에 추가하고, 설치한 개발 패키지를 사용하여 편집기 내에서 코드를 린트 (Flake8), 포맷 (Black) 및 테스트 (Pytest) 할 것입니다. 마지막으로 세 번째 기사에서는 샘플 라이브러리를 작성하여 *PyPI*에 게시할 것입니다.

질문이나 제안 사항이 있으신가요? 댓글을 남겨주세요.
