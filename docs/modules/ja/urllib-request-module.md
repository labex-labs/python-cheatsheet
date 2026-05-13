---
title: "Python urllib.request モジュール - Python チートシート"
description: "`urllib.request` モジュールを使うと、Python 標準ライブラリで URL からデータを取得できます。"
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python urllib.request モジュール
</base-title>

`urllib.request` モジュールを使うと、Python 標準ライブラリで URL からデータを取得できます。

```python
from urllib import request
```

多くのプロジェクトでは、Requests のようなサードパーティライブラリのほうが便利です。標準ライブラリだけで済ませたいときに `urllib.request` を使います。

## URL を開く

`urlopen` はレスポンスオブジェクトを返します。

```python
from urllib import request

response = request.urlopen('data:text/plain,Hello%20Python')
print(response.headers.get_content_type())
```

```output
text/plain
```

## レスポンスデータを読む

レスポンス本文は bytes として返されます。

```python
from urllib import request

response = request.urlopen('data:text/plain,Hello%20Python')
content = response.read()
print(type(content).__name__)
print(content.decode('utf-8'))
```

```output
bytes
Hello Python
```

## タイムアウトを追加する

実際のネットワーク URL を開くときは、プログラムが永遠に待たないようにタイムアウトを設定します。

```python
from urllib import request

response = request.urlopen('data:text/plain,ok', timeout=5)
print(response.read().decode('utf-8'))
```

```output
ok
```

<base-warning>
  <base-warning-title>
    WARNING
  </base-warning-title>
  <base-warning-content>
    ネットワーク呼び出しは、さまざまな理由で失敗することがあります。<code>urllib.error.URLError</code> などの例外を処理し、信頼できない URL を取得するときは注意してください。
  </base-warning-content>
</base-warning>

## 関連リンク

- <router-link to="/modules/json-module">モジュール: json</router-link>
- <router-link to="/cheatsheet/exception-handling">チートシート: 例外処理</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">チートシート: ファイルの読み書き</router-link>
