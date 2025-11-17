---
title: 'Python Setup.py - Python チートシート'
description: 'セットアップスクリプトは、Distutils を使用したモジュールのビルド、配布、インストールのすべての活動の中心です。セットアップスクリプトの主な目的は、モジュール配布を Distutils に記述し、モジュールに対して動作するさまざまなコマンドが正しく機能するようにすることです。'
labUrl: 'https://labex.io/ja/labs/python-python-setup-py-633666?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python setup.py
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-warning>
  <base-warning-title>
    物議を醸す意見
  </base-warning-title>
  <base-warning-content>
    `setup.py` を使用して Python パッケージのビルドと配布を行うことは、時として非常に困難になることがあります。<a target="_blank" href="https://python-poetry.org/">Poetry</a> や <a target="_blank" href="https://docs.astral.sh/uv/">UV</a> のような最新のツールは、パッケージングを**ずっと簡単に**するだけでなく、依存関係を非常に便利に管理するのにも役立ちます。特に UV は、従来のツールよりも 10～100 倍高速である点で注目に値します。
  </base-warning-content>
</base-warning>

Poetry に関する詳細情報が必要な場合は、次の記事をお読みください。

- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Poetry と VSCode を使用した Python プロジェクト。パート 1</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">Poetry と VSCode を使用した Python プロジェクト。パート 2</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">Poetry と VSCode を使用した Python プロジェクト。パート 3</router-link>

超高速 Python パッケージマネージャーである UV の包括的なガイドについては、<router-link to="/blog/python-uv-package-manager">UV: 超高速 Python パッケージマネージャー</router-link> をお読みください。

## 導入

セットアップスクリプトは、Distutils を使用したモジュールのビルド、配布、インストールのすべての活動の中心となります。セットアップスクリプトの主な目的は、Distutils に対してモジュール配布を記述し、それによってモジュールに対して動作するさまざまなコマンドが適切な処理を実行できるようにすることです。

プロジェクト構造の管理に不可欠な、ファイルおよびディレクトリパスの処理に関する包括的なガイドについては、<router-link to="/cheatsheet/file-directory-path">ファイルとディレクトリのパス</router-link> ページを参照してください。

`setup.py` ファイルは Python プロジェクトの核となります。これはプロジェクトに関するすべてのメタデータを記述します。プロジェクトにリッチなメタデータセットを与えるために追加できるフィールドはかなりありますが、必須のフィールドは name、version、packages の 3 つだけです。name フィールドは、パッケージを Python Package Index (PyPI) で公開したい場合、一意である必要があります。version フィールドは、プロジェクトの異なるリリースを追跡します。package のフィールドは、プロジェクト内のどこに Python ソースコードを配置したかを記述します。

これにより、Python パッケージを簡単にインストールできます。多くの場合、次のように記述するだけで十分です。

```bash
python setup.py install
```

そしてモジュールは自己インストールされます。

## 例

最初の setup.py は、ライセンスに関する情報も含め、`long_description` フィールドに README.txt ファイルを再利用します。これは次のようになります。

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

詳細については、[公式ドキュメント](http://docs.python.org/3.11/install/index.html)をご覧ください。

## 関連リンク

- <router-link to="/cheatsheet/virtual-environments">仮想環境</router-link>
- <router-link to="/cheatsheet/file-directory-path">ファイルとディレクトリのパス</router-link>
- <router-link to="/blog/python-uv-package-manager">UV: 超高速 Python パッケージマネージャー</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Poetry と VSCode を使用した Python プロジェクト。パート 1</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">Poetry と VSCode を使用した Python プロジェクト。パート 2</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">Poetry と VSCode を使用した Python プロジェクト。パート 3</router-link>
- <router-link to="/builtin/import">import()</router-link>
