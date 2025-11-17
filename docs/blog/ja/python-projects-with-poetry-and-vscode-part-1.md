---
title: 'Poetry と VSCode による Python プロジェクト入門 パート 1 - Python チートシート'
description: 'Poetry を使用して簡単なプロジェクトを開始し、依存関係を管理し、PyPI で公開する方法を解説します。また、仮想環境から直接 Pytest、Black、Flake8 を VSCode に統合します。'
date: 'April 12, 2019'
updated: 'July 3, 2022'
tags: 'python, intermediate, vscode, packaging'
socialImage: '/blog/poetry-1.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Poetry と VSCode による Python プロジェクト入門 パート 1 - Python チートシート"
    description: "Poetry を使用して簡単なプロジェクトを開始し、依存関係を管理し、PyPI で公開する方法を解説します。また、仮想環境から直接 Pytest、Black、Flake8 を VSCode に統合します。"
    date: "April 12, 2019"
    updated: "July 3, 2022"
    tags: "python, intermediate, vscode, packaging"
    socialImage: "/blog/poetry-1.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="PoetryとVSCodeによるPythonプロジェクト入門 パート1 - Pythonチートシート" />

仮想環境は、単一のプロジェクトでのみ使用する可能性のあるライブラリでベースの環境を埋め尽くすのを避けるために設計された、分離された Python インストールです。また、異なるプロジェクトで同じパッケージの複数のバージョンを管理することもできます。例えば、一方では Django 4.1 が、もう一方では 1.9 が必要になるかもしれません。

<base-disclaimer>
  <base-disclaimer-title>
    Python Poetry
  </base-disclaimer-title>
  <base-disclaimer-content>
    Poetry は、依存関係のインストール、Python パッケージのビルドとパッケージングを処理するためのツールです。これらすべてを行うには、新しい標準化された <code>pyproject.toml</code> ファイルが 1 つあれば十分です。言い換えれば、Poetry は <code>pyproject.toml</code> を使用して <code>setup.py</code>、<code>requirements.txt</code>、<code>setup.cfg</code>、<code>MANIFEST.in</code>、および新しく追加された <code>Pipfile</code> を置き換えます。
  </base-disclaimer-content>
</base-disclaimer>

この記事シリーズでは、[Poetry](https://poetry.eustace.io/) を使用して依存関係を管理し、簡単なプロジェクトをビルドし、単一のコマンドで [PyPI](https://pypi.org/) に公開します。

この最初のパートでは、次のことを行います。

- 新しいプロジェクトを開始する。
- 仮想環境を作成する。
- 依存関係を管理する。

<router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">2 番目の記事</router-link>では、次のことを行います。

- 仮想環境を [VSCode](https://code.visualstudio.com/) に追加する。
- 開発依存関係を統合する。
  - _Flake8_
  - _Black_
  - _Pytest_

そして最後に、<router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">3 番目の記事</router-link>で次のことを行います。

- サンプルライブラリを作成する。
- _Poetry_ でプロジェクトをビルドする。
- _PyPI_ に公開する。

## Poetry のインストール

最も簡単な方法は、_pip_ を使用することです。

```bash
pip install poetry
```

しかし、システム上の他のものから Poetry を分離するために、その依存関係をベンダー化する Poetry 独自のインストーラーを使用します。これが Poetry をインストールする推奨される方法です。

```bash
curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python -
```

このようにすると、後で `poetry self update` コマンドを使用して Poetry を最新の安定版に更新できるようになります。

## 新しいプロジェクトの開始

`poetry new [project_name]` コマンドを使用して、新しい Python プロジェクトを開始できます。私はそれを **_how-long_** と呼び、関数の実行時間を測定するための簡単なライブラリにします。

```bash
poetry new how-long
```

> 注：既存のプロジェクトの場合は、`poetry init` コマンドを使用して対話的に _pyproject.toml_ を作成できます。

_how-long_ ディレクトリが作成され、その中に基本的なプロジェクト構造があります。

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

プロジェクト構造の管理に不可欠な、ファイルおよびディレクトリパスの処理に関する包括的なガイドについては、<router-link to="/cheatsheet/file-directory-path">ファイルとディレクトリのパス</router-link> ページを参照してください。

> 注：プロジェクトを公開できるようにするには、利用可能な名前が必要です。[PyPI](https://pypi.org/) の検索を使用してください。

### pyproject.toml ファイル

**pyproject.toml** ファイルがプロジェクトの詳細と依存関係を管理します。

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

詳細情報。[ライセンス](https://poetry.eustace.io/docs/pyproject/#license)と[README](https://poetry.eustace.io/docs/pyproject/#readme)を追加するのは良い考えかもしれません。

```
[tool.poetry]
...
license = "MIT"
readme = "README.rst"
```

#### [tool.poetry.dependencies]

最初に来るのは Python のバージョンです。基本的に、このプロジェクトは Python 3.7 以降と互換性があります。さらに、今後、本番環境で使用されるすべてのパッケージはここにリストされます。

#### [tool.poetry.dev-dependencies]

これらのパッケージは開発専用であり、プロジェクトをビルドおよび公開するときには含まれません。デフォルトでは、Poetry は [Pytest](https://docs.pytest.org/en/latest/) を含めるため、後でプロジェクトのテストに使用します。

## 仮想環境の作成

仮想環境を作成し、_Pytest_ をインストールするには、`poetry install` コマンドを使用します。

```bash
poetry install
```

![poetry-install-command](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p1/poetry-install.png)

完了すると、新しいファイル `poetry.lock` が作成されます。

> Poetry がインストールの完了後、ダウンロードしたすべてのパッケージとその正確なバージョンを poetry.lock ファイルに書き込み、プロジェクトをそれらの特定のバージョンに固定します。プロジェクトに取り組むすべての人が依存関係の同じバージョンに固定されるように、poetry.lock ファイルをプロジェクトリポジトリにコミットする必要があります。

## 依存関係の管理

依存関係を追加または削除する 1 つの方法は、_pyproject.toml_ を直接編集してから `poetry install` を実行して変更を適用することです。代わりに、手動での変更を避けるために `add` および `remove` コマンドを使用します。

### 依存関係の追加

プロジェクトに _pendulum_ と _coo_ の 2 つのパッケージを追加しましょう。

```bash
poetry add pendulum coo
```

![poetry-add-command](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p1/poetry-add.png)

_pyproject.toml_ と _poetry.lock_ を開いて、それらがどのように更新されたかを確認してください。

### 開発依存関係の追加

これらの依存関係は開発中のみ利用可能であり、Poetry はプロジェクトのビルドと公開時には含めません。

_Pytest_ はすでにインストールされていますが、リンティングのために [flake8](http://flake8.pycqa.org/en/latest/) と静的型付けのために [mypy](http://mypy-lang.org/) も使用します。

```bash
poetry add -D flake8 mypy
```

今考えてみると、フォーマッタを追加するのを忘れていました。[black](https://black.readthedocs.io/en/stable/) を使用することにします。

```bash
poetry add -D black
[ValueError]
Could not find a matching version of package black

add [-D|--dev] [--git GIT] [--path PATH] [-E|--extras EXTRAS] [--optional] [--python PYTHON] [--platform PLATFORM] [--allow-prereleases] [--dry-run] [--] <name> (<name>)...
```

このエラーは、_black_ がプレリリース状態にあるため、Poetry が安定版を見つけられないために発生します。しかし、どうしても必要なため、`--allow-prereleases` フラグを使用してインストールします。

```bash
poetry add -D black --allow-prereleases
```

![poetry-add-dev-command](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p1/poetry-add-dev.png)

### 依存関係の削除

わかりました、気が変わりました。このプロジェクトでは _coo_ も _mypy_ も使用しません。まず、プロジェクトの通常の依存関係である _coo_ を削除することから始めます。

```bash
poetry remove coo
```

次に、開発依存関係である _mypy_ を削除します。

```bash
poetry remove -D mypy
```

## 結論

この最初のパートでは、新しいプロジェクトを開始し、仮想環境を作成し、次のコマンドを使用して依存関係を追加および削除しました。

| コマンド                          | 説明                                                          |
| :-------------------------------- | :------------------------------------------------------------ |
| `poetry new [package-name]`       | 新しい Python プロジェクトを開始します。                      |
| `poetry init`                     | _pyproject.toml_ ファイルを対話的に作成します。               |
| `poetry install`                  | _pyproject.toml_ ファイル内のパッケージをインストールします。 |
| `poetry add [package-name]`       | パッケージを仮想環境に追加します。                            |
| `poetry add -D [package-name]`    | 開発パッケージを仮想環境に追加します。                        |
| `poetry remove [package-name]`    | パッケージを仮想環境から削除します。                          |
| `poetry remove -D [package-name]` | 開発パッケージを仮想環境から削除します。                      |
| `poetry self:update`              | Poetry を最新の安定版に更新します。                           |

<router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">2 番目の記事</router-link>では、より多くの _Poetry_ コマンドを確認し、仮想環境を _VSCode_ に追加し、インストールした開発パッケージを使用してエディタ内でコードのリンティング (Flake8)、フォーマット (Black)、およびテスト (Pytest) を行います。最後に、3 番目の記事で、サンプルライブラリを作成し、_PyPI_ に公開します。

ご質問やご提案はありますか？コメントを残してください。
