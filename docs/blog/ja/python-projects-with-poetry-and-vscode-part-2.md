---
title: 'Poetry と VSCode を使った Python プロジェクト 第 2 部 - Python チートシート'
description: 'パート 2 では、VSCode に仮想環境を追加し、依存関係を更新し、Flake8、Black、Pytest をエディタに統合します。'
date: 'April 23, 2019'
updated: 'July 3, 2022'
tags: 'python, intermediate, vscode, packaging'
socialImage: '/blog/poetry-2.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Poetry と VSCode を使った Python プロジェクト 第 2 部 - Python チートシート"
    description: "パート 2 では、VSCode に仮想環境を追加し、依存関係を更新し、Flake8、Black、Pytest をエディタに統合します。"
    date: "April 23, 2019"
    updated: "July 3, 2022"
    tags: "python, intermediate, vscode, packaging"
    socialImage: "/blog/poetry-2.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="PoetryとVSCodeを使ったPythonプロジェクト 第2部 - Pythonチートシート" />

<router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">最初の記事</router-link>では、`pyproject.toml`ファイルとは何か、それとの連携方法、[Poetry](https://poetry.eustace.io/)を使用して新しいプロジェクトを開始する方法、仮想環境の作成方法、依存関係の追加と削除について学習しました。これらはすべて次のコマンドで行いました。

| Command                           | Description                                                   |
| :-------------------------------- | :------------------------------------------------------------ |
| `poetry new [package-name]`       | 新しい Python プロジェクトを開始します。                      |
| `poetry init`                     | _pyproject.toml_ ファイルを対話形式で作成します。             |
| `poetry install`                  | _pyproject.toml_ ファイル内のパッケージをインストールします。 |
| `poetry add [package-name]`       | パッケージを仮想環境に追加します。                            |
| `poetry add -D [package-name]`    | 開発パッケージを仮想環境に追加します。                        |
| `poetry remove [package-name]`    | パッケージを仮想環境から削除します。                          |
| `poetry remove -D [package-name]` | 開発パッケージを仮想環境から削除します。                      |

この 2 番目のパートでは、次のことを行います。

- 仮想環境を[VSCode](https://code.visualstudio.com/)に追加します。
- 依存関係を更新します。
- 開発依存関係をエディタと統合します。
  - _Flake8_
  - _Black_
  - _Pytest_

そして、<router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">3 番目の記事</router-link>では、サンプルライブラリを作成し、*Poetry*でプロジェクトをビルドし、*PyPI*に公開します。

始める前に、[VSCode](https://code.visualstudio.com/)がインストールされており、Python拡張機能が追加されており、このシリーズの<router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">最初の記事</router-link>をフォローし、理解していることを確認してください。

## VSCode での Poetry の設定

最初のパートから数日経過しているため、依存関係の新しいバージョンを確認すると良いでしょう。ターミナルを開き、プロジェクトディレクトリに移動して、`poetry update`コマンドを入力します。

![poetry update](/blog/python-projects-with-poetry-and-vscode-part-2-update-d9f9d44f.png)

現時点では、新しいバージョンは利用できません。

*venv*コマンドで仮想環境を作成すると、*VSCode*は自動的にそれをそのプロジェクトのデフォルトの Python 環境として設定します。*Poetry*を使用する場合、初回はプロジェクトフォルダー内でターミナルに次のように入力する必要があります。

```bash
poetry shell
code .
```

最初のコマンドである`poetry shell`は仮想環境内に私たちを起動し、`code .`は現在のフォルダーを*VSCode*内で開きます。

![vscode](/blog/python-projects-with-poetry-and-vscode-part-2-vscode-3662efa6.png)

左側のパネルを使用して**how-long**フォルダー（またはプロジェクト名が付いたフォルダー）を開き、`__init__.py`の隣に`how-long.py`ファイルを作成します。左下隅に、現在の Python 環境が表示されます。

![python version](/blog/python-projects-with-poetry-and-vscode-part-2-python-code-da02d29d.png)

それをクリックすると、利用可能な環境のリストが表示されます。プロジェクト名が含まれているものを選択します。

![choose python](/blog/python-projects-with-poetry-and-vscode-part-2-choose-environment-3524135a.png)

次に、開発依存関係である*Flake8*、_Black_、および*Pytest*を Visual Studio Code に統合しましょう。

## Flake8

[Flake8](http://flake8.pycqa.org/en/latest/)は、プロジェクトに*リンティング*機能を提供します。つまり、構文エラーやスタイルエラーを警告し、VSCode のおかげで、入力しながらそれらを知ることができます。

デフォルトでは、Python 拡張機能には*Pylint*が有効になっていますが、これは強力ですが設定が複雑です。*Flake8*に切り替えるには、任意の Python ファイルを変更して保存すると、右下隅にポップアップメッセージが表示されます。

![flake8](/blog/python-projects-with-poetry-and-vscode-part-2-select-linter-36950663.png)

**Select Linter**をクリックし、リストから**Flake8**を選択します。これで、*VSCode*は、深刻度に応じて緑または赤で、常に何が間違っているかのわかりやすい説明とともに、*構文*と*スタイル*の問題を教えてくれます。

![linting](/blog/python-projects-with-poetry-and-vscode-part-2-linting-f97be4c6.png)

2 つの問題があるようです。ファイル末尾の空行が不足している（スタイル）ことと、*Hello, World!*文字列の引用符の追加を忘れたこと（構文）です。これらを修正すると、すべての警告が消えるのを確認できます。

## Black

[Black](https://github.com/ambv/black)はコードフォーマッタであり、コードを確認し、[PEP 8](https://www.python.org/dev/peps/pep-0008/)スタイルガイドに準拠するように自動的にフォーマットするツールです。これは、*Flake8*がスタイルのエラーをリンティングするために使用するのと同じ*PEP*です。

`shift + cmd/ctrl + p`を押してコマンドパレットを開き、**Format Document**と入力して Enter キーを押します。新しいポップアップメッセージが表示されます。

![black formatter popup](/blog/python-projects-with-poetry-and-vscode-part-2-format-popup-d4719180.png)

**Use Black**を選択します。次に、この不体裁なコードを Python ファイルにコピーします。

```python
for i in range(5):         # this comment has too many spaces
      print(i)  # this line has 6 space indentation.
```

なんて醜い s\*\*\*...コードでしょう。もう一度フォーマットを試して、*Black*がすべてを修正する方法を確認してください！

もう 1 つできることは、保存するたびに*Black*がコードを自動的にフォーマットするように VSCode を設定することです。`cmd/ctrl + ,`を押して設定を開きます。**Workspace Settings**になっていることを確認し、**Format On Save**を検索してチェックボックスをオンにします。

![format on save](/blog/python-projects-with-poetry-and-vscode-part-2-format-on-save-2a8b785d.png)

最後に、*Black*はデフォルトで 1 行あたり 88 文字ですが、*Flake8*が許可する 80 文字とは異なるため、競合を避けるために、**.vscode**フォルダーを開き、**settings.json**ファイルの末尾に次を追加します。

```json
{
    ...
    "python.linting.flake8Args": [
        "--max-line-length=88"
    ],
}
```

![black-settings](/blog/python-projects-with-poetry-and-vscode-part-2-black-settings-f5d99f02.png)

## Pytest

プログラミングに真剣に取り組んでいるなら、プロジェクトのテスト方法を学ぶことは非常に重要です。これは、出荷後に壊滅的なバグが出現する可能性を減らすことで、自信を持ってプログラムを作成し提供できるようにする、信じられないほど役立つスキルです。

[Pytest](https://docs.pytest.org/en/latest/)は、テストの記述に非常に人気があり、ユーザーフレンドリーなフレームワークです。私たちはすでに[インストールしています](https://labex.io/pythoncheatsheet/ja/blog/python-projects-with-poetry-and-vscode-part-1#Dependency-Management)。そのため、*VSCode*との統合も行います。

**tests**フォルダーを開き、`test_how_long.py`ファイルを選択します。*Poetry*はすでに最初のテストを提供してくれています。

```python
# test_how_long.py
from how_long import __version__

def test_version():
    assert __version__ == '0.1.0'
```

このテストでは、**how_long**フォルダー内にある`__init__.py`ファイルから`__version__`変数をインポートし、現在のバージョンが*0.1.0*であることをアサートします。統合ターミナルを**Terminal > New Terminal**で開き、次のように入力します。

```bash
pytest
```

出力は次のようになります。

![pytest](/blog/python-projects-with-poetry-and-vscode-part-2-pytest-terminal-a11ee125.png)

OK、すべて順調です。`shift + cmd/ctrl + p`でコマンドパレットを開きます。

- **unit**と入力し、**Python: Configure Unit Tests**を選択します。
- **pytest**を選択します。
- テストを保存したディレクトリ（この場合は**tests**）を選択します。

3 つのことが起こりました。

- ステータスバーに新しいボタン**Run Tests**が表示されます。これは、ターミナルで*pytest*と入力するのと同じです。それを押して、**Run All Unit Tests**を選択します。完了すると、合格したテストの数と不合格だったテストの数が通知されます。

  ![test status bar](/blog/poetry-2.jpg)

- 左側のバーに新しいアイコンが表示されます。それをクリックすると、すべてのテストが表示されるパネルが表示されます。ここで、それぞれを個別に実行できます。

  ![test side panel](/blog/python-projects-with-poetry-and-vscode-part-2-test-side-panel-f96007f1.png)

- テストファイル内で、すべてのテスト関数の前に新しいオプションが表示されます。問題がなければチェックアイコンが、そうでなければ*x*が表示されます。これにより、特定のテストを実行することもできます。

  ![test inline](/blog/python-projects-with-poetry-and-vscode-part-2-test-inline-b6ddb648.png)

## 結論

これまでに、次のことを行いました。

- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">新しいプロジェクトを開始</router-link>し、仮想環境を作成し、依存関係を追加、削除、更新しました。
- 仮想環境を[VSCode に](#setting-up-poetry-on-vscode)追加し、コードを*リンティング*するために[*Flake8*を構成](#flake8)し、フォーマッタとして[*Black*を選択](#black)し、テストを視覚的に実行するために[*Pytest*を組み込みました](#pytest)。

最後に、<router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">3 番目にして最後の記事</router-link>では、次のことを行います。

- サンプルライブラリを作成します。
- *Poetry*でプロジェクトをビルドします。
- *PyPI*に公開します。
