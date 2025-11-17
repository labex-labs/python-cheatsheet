---
title: 'Python 組み込み関数 open() - Python チートシート'
description: 'ファイルを開き、対応するファイルオブジェクトを返します。ファイルを開けない場合は OSError が発生します。この関数の使用例については、「ファイルの読み書き」を参照してください。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python open() ビルトイン関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#open">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   ファイルをオープンし、対応するファイルオブジェクトを返します。ファイルを開けない場合は、OSError が発生します。この関数の使用方法の詳細については、<router-link to="/cheatsheet/file-directory-path">ファイルの読み書き</router-link>を参照してください。
  </base-disclaimer-content>
</base-disclaimer>

## 導入

Python の `open()` 関数は、ファイルを開き、ファイルオブジェクトを返すために使用されます。これは、システム上のファイルと対話するための標準的な方法です。読み取り、書き込み、追記など、ファイルを開くモードを指定できます。

## 例

```python
# 新しいファイルを開く ('x' モードでは、ファイルが既に存在する場合にエラーが発生します)
spam = open('spam.txt', mode='x')
spam.write('My first line\n\n')
spam.close()
```

```python
# ファイルに追記し、その後自動的にクローズする
with open('spam.txt', mode='a') as spam:
    spam.write('My second line')
```

```python
with open('spam.txt') as spam:
    content = spam.read()
    print(content)
```

出力：

```plaintext
My first line

My second line
```

## 関連リンク

- <router-link to="/cheatsheet/reading-and-writing-files">チートシート：ファイルの読み書き</router-link>
- <router-link to="/cheatsheet/file-directory-path">チートシート：ファイルとディレクトリのパス</router-link>
- <router-link to="/cheatsheet/context-manager">チートシート：コンテキストマネージャ (with ステートメント)</router-link>
- <router-link to="/blog/python-pathlib-essentials">ブログ：Pathlib のエッセンス</router-link>
- <router-link to="/modules/os-module">モジュール：os</router-link>
- <router-link to="/modules/pathlib-module">モジュール：pathlib</router-link>
