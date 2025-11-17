---
title: 'Poetry 와 VSCode 를 활용한 Python 프로젝트 2 부 - Python 치트 시트'
description: '2 부에서는 가상 환경을 VSCode 에 추가하고, 종속성을 업데이트하며, Flake8, Black, Pytest 를 편집기에 통합하는 방법을 다룹니다.'
date: 'April 23, 2019'
updated: 'July 3, 2022'
tags: 'python, intermediate, vscode, packaging'
socialImage: '/blog/poetry-2.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Poetry 와 VSCode 를 활용한 Python 프로젝트 2 부 - Python 치트 시트"
    description: "2 부에서는 가상 환경을 VSCode 에 추가하고, 종속성을 업데이트하며, Flake8, Black, Pytest 를 편집기에 통합하는 방법을 다룹니다."
    date: "April 23, 2019"
    updated: "July 3, 2022"
    tags: "python, intermediate, vscode, packaging"
    socialImage: "/blog/poetry-2.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="Poetry와 VSCode를 활용한 Python 프로젝트 2부 - Python 치트 시트" />

<router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">첫 번째 글</router-link>에서 우리는 `pyproject.toml` 파일이 무엇인지, 어떻게 다루는지 배웠고, [Poetry](https://poetry.eustace.io/)를 사용하여 새 프로젝트를 시작하고, 가상 환경을 생성하고, 종속성을 추가하고 제거하는 방법을 배웠습니다. 이 모든 것은 다음 명령어로 수행되었습니다.

| Command                           | Description                              |
| --------------------------------- | ---------------------------------------- |
| `poetry new [package-name]`       | 새 Python 프로젝트 시작.                 |
| `poetry init`                     | _pyproject.toml_ 파일을 대화형으로 생성. |
| `poetry install`                  | _pyproject.toml_ 파일 내의 패키지 설치.  |
| `poetry add [package-name]`       | 가상 환경에 패키지 추가.                 |
| `poetry add -D [package-name]`    | 개발용 패키지를 가상 환경에 추가.        |
| `poetry remove [package-name]`    | 가상 환경에서 패키지 제거.               |
| `poetry remove -D [package-name]` | 개발용 패키지를 가상 환경에서 제거.      |

이 두 번째 파트에서는 다음을 수행할 것입니다.

- 가상 환경을 [VSCode](https://code.visualstudio.com/)에 추가합니다.
- 종속성 업데이트.
- 개발 종속성을 편집기와 통합합니다.
  - _Flake8_
  - _Black_
  - _Pytest_

그리고 <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">세 번째 글</router-link>에서는 샘플 라이브러리를 작성하고, *Poetry*로 프로젝트를 빌드하고, *PyPI*에 게시할 것입니다.

시작하기 전에 [VSCode](https://code.visualstudio.com/)가 설치되어 있고, [Python](https://marketplace.visualstudio.com/itemdetails?itemName=ms-python.python) 확장 프로그램이 추가되었으며, 이 시리즈의 <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">첫 번째 글</router-link>을 따라 이해했는지 확인하십시오.

## VSCode 에서 Poetry 설정하기

첫 번째 파트 이후 며칠이 지났으므로 종속성의 새 버전을 확인하는 것이 좋을 수 있습니다. 터미널을 열고 프로젝트 디렉토리로 이동한 다음 `poetry update` 명령을 입력하십시오.

![poetry update](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/update.png)

지금까지 사용 가능한 새 버전은 없습니다.

_venv_ 명령으로 가상 환경을 생성하면 *VSCode*는 해당 프로젝트의 기본 Python 환경으로 자동 설정합니다. *Poetry*를 사용할 때, 처음에는 프로젝트 폴더 내에서 터미널에 다음을 입력해야 합니다.

```bash
poetry shell
code .
```

첫 번째 명령인 `poetry shell`은 가상 환경 내부로 진입하게 하고, `code .`은 현재 폴더를 _VSCode_ 내에서 열 것입니다.

![vscode](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/vscode.png)

왼쪽 패널을 사용하여 **how-long** 폴더 (또는 프로젝트 이름이 있는 폴더) 를 열고 `__init__.py` 옆에 `how-long.py` 파일을 생성하십시오. 왼쪽 하단 모서리에서 현재 Python 환경을 볼 수 있습니다.

![python version](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/python-code.png)

그것을 클릭하면 사용 가능한 환경 목록이 표시됩니다. 프로젝트 이름이 포함된 환경을 선택하십시오.

![choose python](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/choose-environment.png)

이제 개발 종속성인 _Flake8_, _Black_, *Pytest*를 Visual Studio Code 에 통합해 보겠습니다.

## Flake8

[Flake8](http://flake8.pycqa.org/en/latest/)은 프로젝트에 _린팅_ 기능을 제공합니다. 즉, 구문 및 스타일 오류에 대해 경고하며, VSCode 덕분에 입력하는 동안 이를 알 수 있습니다.

기본적으로 Python 확장은 *Pylint*가 활성화되어 있는데, 이는 강력하지만 구성하기 복잡합니다. *Flake8*으로 전환하려면 아무 Python 파일이나 변경하고 저장하면 오른쪽 하단 모서리에 팝업 메시지가 표시됩니다.

![flake8](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/select-linter.png)

**Select Linter**를 클릭하고 목록에서 **Flake8**을 선택하십시오. 이제 *VSCode*는 심각도에 따라 녹색 또는 빨간색으로 _구문_ 및 _스타일_ 문제를 알려주며 항상 무엇이 잘못되었는지에 대한 좋은 설명을 제공합니다.

![linting](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/linting.png)

두 가지 문제가 있는 것 같습니다. 파일 끝에 빈 줄이 누락되었고 (스타일), _Hello, World!_ 문자열에 따옴표를 추가하는 것을 잊었습니다 (구문). 이를 수정하고 모든 경고가 사라지는지 확인하십시오.

## Black

[Black](https://github.com/ambv/black)은 코드 포맷터로, 코드를 살펴보고 [PEP 8](https://www.python.org/dev/peps/pep-0008/) 스타일 가이드 ( *Flake8*이 스타일 오류를 린트하는 데 사용하는 것과 동일한 _PEP_) 를 준수하도록 자동으로 포맷하는 도구입니다.

`shift + cmd/ctrl + p`를 눌러 명령 팔레트를 열고 **Format Document**를 입력한 다음 Enter 키를 누르십시오. 새 팝업 메시지가 나타납니다.

![black formatter popup](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/format-popup.png)

**Use Black**을 선택하십시오. 이제 이 잘못 포맷된 코드를 파이썬 파일에 복사하십시오.

```python
for i in range(5):         # this comment has too many spaces
      print(i)  # this line has 6 space indentation.
```

정말 못생긴 코드... 다시 포맷을 시도하고 *Black*이 모든 것을 어떻게 수정하는지 확인하십시오!

또 다른 방법은 VSCode 를 구성하여 저장할 때마다 *Black*이 코드를 자동으로 포맷하도록 하는 것입니다. `cmd/ctrl + ,`를 눌러 설정을 여십시오. **Workspace Settings**에 있는지 확인하고 **Format On Save**를 검색한 다음 확인란을 활성화하십시오.

![format on save](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/format-on-save.png)

마지막으로, *Black*은 기본적으로 한 줄에 88 자이지만 *Flake8*이 허용하는 80 자와 다르므로 충돌을 피하기 위해 **.vscode** 폴더를 열고 **settings.json** 파일 끝에 다음을 추가하십시오.

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

프로그래밍에 진지하다면 프로젝트 테스트 방법을 배우는 것이 중요합니다. 이는 출시 후 치명적인 버그가 나타날 가능성을 줄여 자신감을 가지고 프로그램을 작성하고 제공할 수 있게 해주는 매우 유용한 기술입니다.

[Pytest](https://docs.pytest.org/en/latest/)은 테스트 작성을 위한 매우 인기 있고 사용자 친화적인 프레임워크입니다. 우리는 이미 [설치했습니다](https://www.pythoncheatsheet.org/blog/python-projects-with-poetry-and-vscode-part-1#Dependency-Management). 따라서 *VSCode*와 통합할 것입니다.

**tests** 폴더를 열고 `test_how_long.py` 파일을 선택하십시오. *Poetry*는 이미 첫 번째 테스트를 제공합니다.

```python
# test_how_long.py
from how_long import __version__


def test_version():
    assert __version__ == '0.1.0'
```

이 테스트에서는 **how_long** 폴더 안에 있는 `__init__.py` 파일에서 `__version__` 변수를 가져와 현재 버전이 *0.1.0*임을 단언합니다. **Terminal > New Terminal**로 이동하여 통합 터미널을 열고 다음을 입력하십시오.

```bash
pytest
```

출력은 다음과 같습니다.

![pytest](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/pytest-terminal.png)

좋습니다. 모든 것이 괜찮습니다. `shift + cmd/ctrl + p`로 명령 팔레트를 여십시오.

- **unit**을 입력하고 **Python: Configure Unit Tests**를 선택하십시오.
- **pytest**를 선택하십시오.
- 테스트를 저장한 디렉터리, 이 경우 **tests**를 선택하십시오.

세 가지 일이 발생했습니다.

- 상태 표시줄에 새 버튼 **Run Tests**가 나타났습니다. 이것은 터미널에 *pytest*를 입력하는 것과 같습니다. 그것을 누르고 **Run All Unit Tests**를 선택하십시오. 완료되면 통과한 테스트 수와 실패한 테스트 수를 알려줍니다.

  ![test status bar](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img.png)

- 왼쪽 막대에 새 아이콘이 생겼습니다. 클릭하면 모든 테스트를 표시하는 패널이 나타납니다. 여기서 각 테스트를 개별적으로 실행할 수 있습니다.

  ![test side panel](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/test-side-panel.png)

- 테스트 파일 내부에는 모든 테스트 함수 앞에 새 옵션이 표시됩니다. 괜찮으면 체크 아이콘이 나타나고 그렇지 않으면 *x*가 나타납니다. 또한 특정 테스트를 실행할 수 있습니다.

  ![test inline](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/test-inline.png)

## 결론

지금까지 우리는 다음을 수행했습니다.

- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">새 프로젝트 시작</router-link>, 가상 환경 생성, 종속성 추가, 삭제 및 업데이트.
- 가상 환경을 [VSCode](#setting-up-poetry-on-vscode)에 추가, 코드를 입력하는 동안 코드를 *린트*하도록 [_Flake8_](#flake8) 구성, 포맷터로 [_Black_](#black) 선택 및 *Pytest*를 포함하여 테스트를 시각적으로 실행.

마지막으로, <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">세 번째이자 마지막 글</router-link>에서는 다음을 수행할 것입니다.

- 샘플 라이브러리 작성.
- *Poetry*로 프로젝트 빌드.
- *PyPI*에 게시.
