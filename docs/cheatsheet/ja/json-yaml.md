---
title: 'Python JSON と YAML - Python チートシート'
description: 'JSON（JavaScript Object Notation）は、データの保存と転送のための軽量な形式です。JSON は、データがサーバーから Web ページに送信される際によく使用されます。'
labUrl: 'https://labex.io/ja/labs/python-python-json-and-yaml-633659?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
JSON と YAML
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

## JSON

JSON は JavaScript Object Notation の略で、データの保存と転送のための軽量なフォーマットです。JSON は、サーバーから Web ページにデータが送信される際によく使用されます。

```python
# JSON ファイルを読み込む：json.load() はファイルオブジェクトから JSON を解析する
import json
with open("filename.json", "r") as f:  # ファイルを読み取りモードで開く
    content = json.load(f)  # JSON を解析し、Python の dict/list を返す
```

次の内容で JSON ファイルを書き込む：

```python
# JSON ファイルを書き込む：json.dump() は Python オブジェクトを JSON として書き出す
import json

content = {"name": "Joe", "age": 20}
with open("filename.json", "w") as f:  # ファイルを書き込みモードで開く
    json.dump(content, f, indent=2)  # 2 スペースのインデントで JSON を書き出す
```

## YAML

JSON と比較して、YAML は人間による保守性がはるかに高く、コメントを追加する機能を提供します。人間が編集する必要がある設定ファイルにとって便利な選択肢です。

YAML ファイルにアクセスするための主要なライブラリは 2 つあります。

- [PyYaml](https://pypi.python.org/pypi/PyYAML)
- [Ruamel.yaml](https://pypi.python.org/pypi/ruamel.yaml)

これらを仮想環境で`pip install`を使用してインストールします。

前者は使いやすいですが、後者の Ruamel は YAML 仕様をはるかに良く実装しており、例えばコメントを変更せずに YAML の内容を変更することができます。

次の方法で YAML ファイルを開きます：

```python
# ruamel.yaml ライブラリを使用して YAML ファイルを読み込む
from ruamel.yaml import YAML

with open("filename.yaml") as f:
    yaml=YAML()  # YAML パーサーインスタンスを作成
    yaml.load(f)  # YAML を解析し、Python の dict/list を返す
```

## Anyconfig

[Anyconfig](https://pypi.python.org/pypi/anyconfig) は非常に便利なパッケージで、基盤となる設定ファイル形式を完全に抽象化できます。JSON、YAML、TOML などから Python 辞書をロードできます。

次のようにインストールします：

```bash
pip install anyconfig
```

使用法：

```python
# anyconfig: 様々な形式（JSON、YAML、TOML など）の設定ファイルをロードする
import anyconfig
conf1 = anyconfig.load("/path/to/foo/conf.d/a.yml")  # 形式を自動検出
```

## 関連リンク

- <router-link to="/cheatsheet/reading-and-writing-files">ファイルの読み書き</router-link>
- <router-link to="/cheatsheet/dictionaries">Python 辞書</router-link>
- <router-link to="/modules/json-module">json モジュール</router-link>
- <router-link to="/blog/python-pathlib-essentials">すべての開発者が知っておくべき 10 の必須ファイルシステム操作</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
