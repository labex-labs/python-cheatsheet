---
title: 'Poetry と VSCode を使った Python プロジェクト 第 3 部 - Python チートシート'
description: '最終回となる第 3 部では、サンプルライブラリを作成し、*Poetry*でプロジェクトをビルドして PyPI に公開します。'
date: 'May 21, 2019'
updated: 'July 3, 2022'
tags: 'python, intermediate, vscode, packaging'
socialImage: '/blog/poetry-3.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Poetry と VSCode を使った Python プロジェクト 第 3 部 - Python チートシート"
    description: "最終回となる第 3 部では、サンプルライブラリを作成し、*Poetry*でプロジェクトをビルドして PyPI に公開します。"
    date: "May 21, 2019"
    updated: "July 3, 2022"
    tags: "python, intermediate, vscode, packaging"
    socialImage: "/blog/poetry-3.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="Poetry と VSCode を使った Python プロジェクト 第 3 部 - Python チートシート" />

<router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">最初の記事</router-link>では、新しいプロジェクトを開始し、Virtual Environment を作成し、依存関係を管理しました。 <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">2 番目の記事</router-link>では、Virtual Environment を[VSCode](https://code.visualstudio.com/)に追加し、開発依存関係を統合しました。

そして最後に、この 3 番目で最後の記事では、以下のことを行います。

- サンプルライブラリを作成する。
- *Poetry*でプロジェクトをビルドする。
- *PyPI*で公開する。

## Poetry コマンド

このシリーズで使用したコマンドとその説明をまとめた表を以下に示します。完全なリストについては、[Poetry Documentation](https://poetry.eustace.io/docs/cli/)をお読みください。

| コマンド                          | 説明                                                          |
| :-------------------------------- | :------------------------------------------------------------ |
| `poetry new [package-name]`       | 新しい Python プロジェクトを開始します。                      |
| `poetry init`                     | _pyproject.toml_ ファイルを対話形式で作成します。             |
| `poetry install`                  | _pyproject.toml_ ファイル内のパッケージをインストールします。 |
| `poetry add [package-name]`       | パッケージを Virtual Environment に追加します。               |
| `poetry add -D [package-name]`    | 開発パッケージを Virtual Environment に追加します。           |
| `poetry remove [package-name]`    | パッケージを Virtual Environment から削除します。             |
| `poetry remove -D [package-name]` | 開発パッケージを Virtual Environment から削除します。         |
| `poetry update`                   | 依存関係の最新バージョンを取得します。                        |
| `poetry shell`                    | 仮想環境内でシェルを起動します。                              |
| `poetry build`                    | ソースおよび wheels アーカイブをビルドします。                |
| `poetry publish`                  | パッケージを Pypi に公開します。                              |
| `poetry publish --build`          | パッケージをビルドして公開します。                            |
| `poetry self:update`              | poetry を最新の安定版に更新します。                           |

## プロジェクト

ご希望であれば、ソースコードを[GitHub](https://github.com/wilfredinni/how-long)からダウンロードできますが、前述のとおり、これは関数の実行にかかる時間をコンソールに出力する簡単なデコレータになります。

動作は次のようになります。

```python
from how_long import timer

@timer
def test_function():
    [i for i in range(10000)]

test_function()
# Execution Time: 955 ms.
```

プロジェクトのディレクトリ構造は次のようになります。

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

始める前に、ターミナルで `poetry update` コマンドを実行してパッケージの更新を確認してください。

![poetry update](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/May/poetry_vscode_p3/img/poetry_update.png)

`README.rst`にプロジェクトの簡単な説明を追加します。

```
how_long
========

Simple Decorator to measure a function execution time.

Example
_______

.. code-block:: python

    from how_long import timer


    @timer
    def some_function():
        return [x for x in range(10_000_000)]
```

`how_long/how_long.py`に移動します。

```python
# how_long.py
from functools import wraps

import pendulum


def timer(function):
    """
    Simple Decorator to measure a function execution time.
    """

    @wraps(function)
    def function_wrapper():
        start = pendulum.now()
        function()
        elapsed_time = pendulum.now() - start
        print(f"Execution Time: {elapsed_time.microseconds} ms.")

    return function_wrapper
```

`how_long/__init__.py`で：

```python
from .how_long import timer

__version__ = "0.1.1"
```

そして最後に、`tests/test_how_long.py`ファイルです。

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

これで、ターミナルで `poetry install` を実行して、パッケージをローカルにインストールして確認できます。まだ仮想環境をアクティブ化していない場合はアクティブ化し、Python インタラクティブシェルで次のように実行します。

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

[テストを実行](https://www.pythoncheatsheet.org/blog/python-projects-with-poetry-and-vscode-part-2#Pytest)し、すべて問題なければ次に進みます。

## ビルドと公開

ついに、このプロジェクトを世界に公開する時が来ました！[PyPI](https://pypi.org)にアカウントを持っていることを確認してください。パッケージ名は一意である必要があるため、不明な場合は[検索](https://pypi.org/search/?q=)を使用して確認してください。

### ビルド

`poetry build` コマンドは、プロジェクトのソースとしてアップロードされるソースおよび[wheels](https://pythonwheels.com/)アーカイブをビルドします。

![poetry build](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/May/poetry_vscode_p3/img/poetry_build.png)

_how_long.egg-info_ ディレクトリが作成されます。

### 公開

このコマンドは、パッケージを*PyPI*に公開し、初めて送信される場合は自動的に登録してからアップロードします。

![poetry publish](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/May/poetry_vscode_p3/img/poetry_publish.png)

> `$ poetry publish --build` を使用して、プロジェクトをビルドして公開することもできます。

認証情報を入力し、すべてが正常であれば、プロジェクトを[閲覧](https://pypi.org/project/how-long/)すると、次のようなものが表示されます。

![pipy how-long](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/May/poetry_vscode_p3/img/pypi.png)

これで、他の人に、どのマシンからでも、どこからでも `pip install how-long` できることを知らせることができます！

## 結論

私が初めてパッケージを公開しようとしたときのことを覚えています。それは悪夢でした。Python を始めたばかりで、`setup.py`ファイルとは何か、どう使うのかを理解するのに「数時間」費やしました。結局、`Makefile`、`MANIFEST.in`、`requirements.txt`、`test_requirements.txt`といった複数のファイルが手元に残りました。だからこそ、[Poetry](https://github.com/sdispater/poetry)の作成者である[Sébastien Eustace](https://github.com/sdispater)の言葉は私にとって非常に理にかなっていました。

> Packaging and dependency management in Python are rather convoluted and hard to understand for newcomers. Even for seasoned developers it might be cumbersome at times to create all files needed in a Python project: `setup.py`, `requirements.txt`, `setup.cfg`, `MANIFEST.in` and the newly added `Pipfile`.
>
> So I wanted a tool that would limit everything to a single configuration file to do: dependency management, packaging and publishing.
>
> It takes inspiration in tools that exist in other languages, like `composer` (PHP) or `cargo` (Rust).
>
> And, finally, there is no reliable tool to properly resolve dependencies in Python, so I started `poetry` to bring an exhaustive dependency resolver to the Python community.

Poetry は[決して完璧ではありません](https://frostming.com/2019/01-04/pipenv-poetry#what-about-poetry)が、他のツールとは異なり、約束したことを本当に実行します。
