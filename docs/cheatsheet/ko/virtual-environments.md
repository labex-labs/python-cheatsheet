---
title: 'Python 가상 환경 - Python 치트 시트'
description: '가상 환경은 Python 코드를 격리된 환경에서 테스트하고, 단일 프로젝트에만 사용할 라이브러리로 기본 Python 설치를 채우는 것을 방지하는 데 사용됩니다.'
labUrl: 'https://labex.io/ko/labs/python-python-virtual-environments-633669?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
가상 환경
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

가상 환경의 사용 목적은 캡슐화된 환경에서 python 코드를 테스트하고, 단 하나의 프로젝트에만 사용할 수 있는 라이브러리로 기본 Python 설치를 채우는 것을 방지하기 위함입니다.

## virtualenv

1. virtualenv 설치

```bash
pip install virtualenv
```

1. virtualenvwrapper-win 설치 (Windows)

```bash
pip install virtualenvwrapper-win
```

사용법:

1. `HelloWorld`라는 가상 환경 생성

```bash
mkvirtualenv HelloWorld
```

    이제 설치하는 모든 것은 이 프로젝트에만 국한되며, 이 환경에 연결하는 프로젝트에서 사용할 수 있습니다.

1. 프로젝트 디렉토리 설정

   가상 환경을 현재 작업 디렉토리와 연결하려면 단순히 다음을 입력합니다.

```bash
setprojectdir .
```

1. 비활성화

   명령줄에서 다른 작업을 수행하려면 `deactivate`를 입력하여 환경을 비활성화합니다.

```bash
deactivate
```

    괄호가 사라지는 것을 확인하세요.

1. 작업하기 (Workon)

   명령 프롬프트를 열고 `workon HelloWorld`를 입력하여 환경을 활성화하고 프로젝트의 루트 폴더로 이동합니다.

```bash
workon HelloWorld
```

## Poetry

<base-disclaimer>
  <base-disclaimer-title>
    <a href="https://python-poetry.org/">Poetry 웹사이트</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
    Poetry 는 Python 에서 종속성 관리 및 패키징을 위한 도구입니다. 프로젝트가 의존하는 라이브러리를 선언할 수 있게 해주며, 이를 관리 (설치/업데이트) 해 줍니다.
  </base-disclaimer-content>
</base-disclaimer>

1. Poetry 설치

```bash
pip install --user poetry
```

2. 새 프로젝트 생성

```bash
poetry new my-project
```

    이것은 my-project 디렉토리를 생성합니다:

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

    pyproject.toml 파일은 프로젝트와 그 종속성을 조정합니다:

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

3. 패키지

   프로젝트에 종속성을 추가하려면 tool.poetry.dependencies 섹션에 지정할 수 있습니다.

```toml
[tool.poetry.dependencies]
pendulum = "^1.4"
```

    또한, pyproject.toml 파일을 수동으로 수정하는 대신 add 명령을 사용하여 적절한 버전 제약 조건을 자동으로 찾을 수 있습니다.

```bash
poetry add pendulum
```

    pyproject.toml에 나열된 종속성을 설치하려면:

```bash
poetry install
```

    종속성을 제거하려면:

```bash
poetry remove pendulum
```

더 자세한 정보는 [문서](https://poetry.eustace.io/docs/)를 확인하거나 다음을 읽어보세요.

- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Poetry 와 VSCode 를 사용한 Python 프로젝트. 파트 1</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">Poetry 와 VSCode 를 사용한 Python 프로젝트. 파트 2</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">Poetry 와 VSCode 를 사용한 Python 프로젝트. 파트 3</router-link>

## Pipenv

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://pipenv.pypa.io/en/latest/">Pipenv 웹사이트</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
    Pipenv 는 모든 패키징 세계 (bundler, composer, npm, cargo, yarn 등) 의 최고를 Python 세계로 가져오는 것을 목표로 하는 도구입니다. Windows 는 우리 세계에서 일급 시민입니다.
  </base-disclaimer-content>
</base-disclaimer>

1. pipenv 설치

```bash
pip install pipenv
```

2. 프로젝트 디렉토리로 이동하여 프로젝트에 필요한 패키지 설치

```bash
cd my_project
pipenv install <package>
```

    Pipenv는 패키지를 설치하고 프로젝트 디렉토리에 Pipfile을 생성합니다. Pipfile은 나중에 다시 설치해야 할 경우 프로젝트에 필요한 종속성을 추적하는 데 사용됩니다.

3. 패키지 제거

```bash
pipenv uninstall <package>
```

4. Python 프로젝트와 연결된 가상 환경 활성화

```bash
pipenv shell
```

5. 가상 환경 종료

```bash
exit
```

더 많은 정보와 비디오는 [docs.pipenv.org](https://docs.pipenv.org/)에서 확인하세요.

## Anaconda

<base-disclaimer>
  <base-disclaimer-title>
    <a target="k" href="https://anaconda.com/">Anaconda</a>는 Python 패키지를 관리하는 또 다른 인기 있는 도구입니다.
  </base-disclaimer-title>
  <base-disclaimer-content>
    패키지, 노트북, 프로젝트 및 환경이 공유되는 곳입니다. 무료 공개 conda 패키지 호스팅을 위한 당신의 공간입니다.
  </base-disclaimer-content>
</base-disclaimer>

사용법:

1. 가상 환경 생성

```bash
conda create -n HelloWorld
```

2. 가상 환경을 사용하려면 다음을 통해 활성화합니다.

```bash
conda activate HelloWorld
```

    이제 설치되는 모든 것은 HelloWorld 프로젝트에만 국한됩니다.

3. 가상 환경 종료

```bash
conda deactivate
```

## UV

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.astral.sh/uv/">UV 문서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
    UV 는 pip 및 pip-tools 워크플로를 위한 드롭인 대체품으로 설계된 매우 빠른 Python 패키지 설치 및 해결 도구입니다. UV 는 pip 보다 10~100 배 빠르며 통합된 패키지 관리, 가상 환경 생성 및 Python 버전 관리를 제공합니다.
  </base-disclaimer-content>
</base-disclaimer>

1. UV 설치

```bash
# curl 사용 (Linux/macOS)
curl -LsSf https://astral.sh/uv/install.sh | sh

# pip 또는 pipx 사용
pip install uv
```

2. 가상 환경을 사용하여 새 프로젝트 생성

```bash
uv init my-project
cd my-project
```

3. 종속성 추가

```bash
uv add requests
```

4. 프로젝트 환경에서 명령 실행

```bash
uv run python script.py
```

5. 가상 환경 수동 활성화 (선택 사항)

```bash
source .venv/bin/activate  # Linux/macOS
.venv\Scripts\activate     # Windows
```

UV 는 탁월한 속도와 편의성으로 가상 환경, Python 버전 및 종속성을 자동으로 관리합니다.

## 관련 링크

- <router-link to="/cheatsheet/setup-py">setup.py</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Poetry 와 VSCode 를 사용한 Python 프로젝트. 파트 1</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">Poetry 와 VSCode 를 사용한 Python 프로젝트. 파트 2</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">Poetry 와 VSCode 를 사용한 Python 프로젝트. 파트 3</router-link>
- <router-link to="/blog/python-uv-package-manager">UV: 번개처럼 빠른 Python 패키지 관리자</router-link>
- <router-link to="/builtin/import">import()</router-link>
