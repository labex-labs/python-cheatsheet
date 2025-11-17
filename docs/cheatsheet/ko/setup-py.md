---
title: 'Python Setup.py - Python 치트 시트'
description: '설정 스크립트는 Distutils 를 사용하여 모듈을 빌드, 배포 및 설치하는 모든 활동의 중심입니다. 설정 스크립트의 주요 목적은 Distutils 에 모듈 배포를 설명하여 모듈에 작동하는 다양한 명령이 올바르게 수행되도록 하는 것입니다.'
labUrl: 'https://labex.io/ko/labs/python-python-setup-py-633666?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python setup.py
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-warning>
  <base-warning-title>
    '논란의 여지가 있는' 의견
  </base-warning-title>
  <base-warning-content>
    `setup.py`를 사용하여 Python 패키지를 패키징하고 배포하는 것은 때때로 매우 까다로울 수 있습니다. <a target="_blank" href="https://python-poetry.org/">Poetry</a> 및 <a target="_blank" href="https://docs.astral.sh/uv/">UV</a>와 같은 최신 도구는 패키징을 훨씬 더 쉽게 만들 뿐만 아니라 종속성을 매우 편리하게 관리할 수 있도록 도와줍니다. 특히 UV 는 기존 도구보다 10~100 배 빠르다는 점이 주목할 만합니다.
  </base-warning-content>
</base-warning>

Poetry 에 대한 자세한 정보를 원하시면 다음 문서를 읽어보실 수 있습니다.

- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Poetry 및 VSCode 를 사용한 Python 프로젝트. 파트 1</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">Poetry 및 VSCode 를 사용한 Python 프로젝트. 파트 2</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">Poetry 및 VSCode 를 사용한 Python 프로젝트. 파트 3</router-link>

매우 빠른 Python 패키지 관리자인 UV 에 대한 포괄적인 가이드는 다음을 참조하십시오: <router-link to="/blog/python-uv-package-manager">UV: 초고속 Python 패키지 관리자</router-link>.

## 소개

setup 스크립트는 Distutils 를 사용하여 모듈을 빌드, 배포 및 설치하는 모든 활동의 중심입니다. setup 스크립트의 주요 목적은 Distutils 에 모듈 배포를 설명하여 모듈에 대해 작동하는 다양한 명령이 올바르게 작동하도록 하는 것입니다.

프로젝트 구조 관리에 필수적인 파일 및 디렉터리 경로 처리 방법에 대한 포괄적인 가이드는 <router-link to="/cheatsheet/file-directory-path">파일 및 디렉터리 경로</router-link> 페이지를 참조하십시오.

`setup.py` 파일은 Python 프로젝트의 핵심입니다. 프로젝트에 대한 모든 메타데이터를 설명합니다. 프로젝트에 풍부한 메타데이터 세트를 제공하기 위해 추가할 수 있는 필드가 꽤 많습니다. 하지만 필수 필드는 name, version, packages 세 가지뿐입니다. name 필드는 Python 패키지 인덱스 (PyPI) 에 패키지를 게시하려는 경우 고유해야 합니다. version 필드는 프로젝트의 다른 릴리스를 추적합니다. package 필드는 프로젝트 내에서 Python 소스 코드를 어디에 두었는지 설명합니다.

이를 통해 Python 패키지를 쉽게 설치할 수 있습니다. 종종 다음을 작성하는 것만으로 충분합니다.

```bash
python setup.py install
```

그러면 모듈이 자체적으로 설치됩니다.

## 예시

초기 setup.py 는 라이선스에 대한 정보도 포함하며, long_description 필드에 README.txt 파일을 재사용할 것입니다. 이것은 다음과 같이 보일 것입니다.

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

더 많은 정보를 원하시면 [공식 문서](http://docs.python.org/3.11/install/index.html)를 방문하십시오.

## 관련 링크

- <router-link to="/cheatsheet/virtual-environments">가상 환경</router-link>
- <router-link to="/cheatsheet/file-directory-path">파일 및 디렉터리 경로</router-link>
- <router-link to="/blog/python-uv-package-manager">UV: 초고속 Python 패키지 관리자</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Poetry 및 VSCode 를 사용한 Python 프로젝트. 파트 1</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">Poetry 및 VSCode 를 사용한 Python 프로젝트. 파트 2</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">Poetry 및 VSCode 를 사용한 Python 프로젝트. 파트 3</router-link>
- <router-link to="/builtin/import">import()</router-link>
