---
title: 'Python 仮想環境 - Python チートシート'
description: '仮想環境の使用は、Python コードをカプセル化された環境でテストするため、また特定のプロジェクトでのみ使用するライブラリで基本の Python インストールを過剰にしないために行われます。'
labUrl: 'https://labex.io/ja/labs/python-python-virtual-environments-633669?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
仮想環境
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

仮想環境を使用する目的は、カプセル化された環境で Python コードをテストすること、および単一のプロジェクトでのみ使用する可能性のあるライブラリでベースの Python インストールを埋め尽くすことを避けることです。

## virtualenv

1. virtualenv のインストール

```bash
pip install virtualenv
```

1. virtualenvwrapper-win のインストール (Windows)

```bash
pip install virtualenvwrapper-win
```

使用方法：

1. `HelloWorld` という名前の仮想環境の作成

```bash
mkvirtualenv HelloWorld
```

    ここでインストールするものはすべて、このプロジェクト固有のものになります。そして、この環境に接続するプロジェクトで利用可能になります。

1. プロジェクトディレクトリの設定

   現在の作業ディレクトリに virtualenv をバインドするには、次のように入力するだけです。

```bash
setprojectdir .
```

1. 非アクティブ化

   コマンドラインで別の作業に移るには、`deactivate` と入力して環境を非アクティブ化します。

```bash
deactivate
```

    括弧が消えることに注意してください。

1. 作業の再開 (Workon)

   コマンドプロンプトを開き、`workon HelloWorld` と入力して環境をアクティブ化し、プロジェクトのルートフォルダーに移動します。

```bash
workon HelloWorld
```

## Poetry

<base-disclaimer>
  <base-disclaimer-title>
    <a href="https://python-poetry.org/">Poetry ウェブサイト</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
    Poetry は、Python における依存関係管理とパッケージングのためのツールです。プロジェクトが依存するライブラリを宣言でき、Poetry がそれらを管理（インストール/更新）してくれます。
  </base-disclaimer-content>
</base-disclaimer>

1. Poetry のインストール

```bash
pip install --user poetry
```

2. 新しいプロジェクトの作成

```bash
poetry new my-project
```

    これにより、`my-project` ディレクトリが作成されます。

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

    `pyproject.toml` ファイルがプロジェクトとその依存関係を調整します。

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

3. パッケージ

   プロジェクトに依存関係を追加するには、`tool.poetry.dependencies` セクションで指定できます。

```toml
[tool.poetry.dependencies]
pendulum = "^1.4"
```

    また、`pyproject.toml` ファイルを手動で変更する代わりに、`add` コマンドを使用すると、適切なバージョン制約が自動的に見つかります。

```bash
poetry add pendulum
```

    `pyproject.toml` にリストされている依存関係をインストールするには:

```bash
poetry install
```

    依存関係を削除するには:

```bash
poetry remove pendulum
```

詳細については、[ドキュメント](https://poetry.eustace.io/docs/)を確認するか、こちらをお読みください。

- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Poetry と VSCode を使用した Python プロジェクト。パート 1</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">Poetry と VSCode を使用した Python プロジェクト。パート 2</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">Poetry と VSCode を使用した Python プロジェクト。パート 3</router-link>

## Pipenv

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://pipenv.pypa.io/en/latest/">Pipenv ウェブサイト</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
    Pipenv は、すべてのパッケージングの世界（bundler、composer、npm、cargo、yarn など）の最高のもの を Python の世界にもたらすことを目指したツールです。Windows は、私たちの世界では一流の市民です。
  </base-disclaimer-content>
</base-disclaimer>

1. pipenv のインストール

```bash
pip install pipenv
```

2. プロジェクトディレクトリに入り、プロジェクトのパッケージをインストールします

```bash
cd my_project
pipenv install <package>
```

    Pipenv はパッケージをインストールし、プロジェクトのディレクトリに Pipfile を作成します。Pipfile は、依存関係を再インストールする必要がある場合に備えて、プロジェクトが必要とする依存関係を追跡するために使用されます。

3. パッケージのアンインストール

```bash
pipenv uninstall <package>
```

4. Python プロジェクトに関連付けられた仮想環境のアクティブ化

```bash
pipenv shell
```

5. 仮想環境からの終了

```bash
exit
```

詳細情報とビデオは [docs.pipenv.org](https://docs.pipenv.org/) で確認してください。

## Anaconda

<base-disclaimer>
  <base-disclaimer-title>
    <a target="k" href="https://anaconda.com/">Anaconda</a> は、Python パッケージを管理するためのもう 1 つの人気のあるツールです。
  </base-disclaimer-title>
  <base-disclaimer-content>
    パッケージ、ノートブック、プロジェクト、環境が共有される場所。無料のパブリック conda パッケージホスティングのためのあなたの場所。
  </base-disclaimer-content>
</base-disclaimer>

使用方法：

1. 仮想環境の作成

```bash
conda create -n HelloWorld
```

2. 仮想環境を使用するには、次のようにアクティブ化します。

```bash
conda activate HelloWorld
```

    ここでインストールされるものはすべて、プロジェクト HelloWorld 専用になります。

3. 仮想環境の終了

```bash
conda deactivate
```

## UV

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.astral.sh/uv/">UV ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
    UV は、極めて高速な Python パッケージインストーラーおよびリゾルバーであり、pip および pip-tools ワークフローのドロップイン代替として設計されています。UV は pip よりも 10〜100 倍高速で、統合されたパッケージ管理、仮想環境の作成、Python バージョンの管理を提供します。
  </base-disclaimer-content>
</base-disclaimer>

1. UV のインストール

```bash
# curl を使用 (Linux/macOS)
curl -LsSf https://astral.sh/uv/install.sh | sh

# pip または pipx を使用
pip install uv
```

2. 仮想環境を持つ新しいプロジェクトの作成

```bash
uv init my-project
cd my-project
```

3. 依存関係の追加

```bash
uv add requests
```

4. プロジェクト環境内でのコマンドの実行

```bash
uv run python script.py
```

5. 仮想環境を手動でアクティブ化 (オプション)

```bash
source .venv/bin/activate  # Linux/macOS
.venv\Scripts\activate     # Windows
```

UV は、卓越した速度と利便性で、仮想環境、Python バージョン、および依存関係を自動的に管理します。

## 関連リンク

- <router-link to="/cheatsheet/setup-py">setup.py</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Poetry と VSCode を使用した Python プロジェクト。パート 1</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">Poetry と VSCode を使用した Python プロジェクト。パート 2</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">Poetry と VSCode を使用した Python プロジェクト。パート 3</router-link>
- <router-link to="/blog/python-uv-package-manager">UV: 超高速 Python パッケージマネージャー</router-link>
- <router-link to="/builtin/import">import()</router-link>
