---
title: 'Python サブプロセスモジュール - Python チートシート'
description: 'subprocess モジュールは、システムプロセスを開始および管理できるようにします。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Subprocess モジュール
</base-title>

[Subprocess](https://docs.python.org/3/library/subprocess.html) は、新しいシステムプロセスを生成し、それらの入力/出力/エラー ストリームに接続し、リターンコードを取得できるようにする組み込みモジュールです。

```python
import subprocess
```

## システムコマンドの実行

`run` 関数は、システムコマンドを実行するために使用されます。

```python
subprocess.run(['echo', 'Hello World!'])
```

```output
Hello World!
```

コマンドをリストではなく単一の文字列として実行したい場合は、以下を使用します。

```python
subprocess.run('echo Hello World!', shell=True)
```

```output
Hello World!
```

どちらの方法でも、出力は自動的にターミナルに表示されます。

<base-warning>
  <base-warning-title>
    警告
  </base-warning-title>
  <base-warning-content>
    信頼できない入力に対しては `shell=True` を避けてください（シェルインジェクションのリスクがあります）。
  </base-warning-content>
</base-warning>

## 出力のキャプチャ

出力をキャプチャするには、`capture_output` を `True` に設定します。

```python
result = subprocess.run(
  ['echo', 'Hello World!'],
  capture_output=True,
  text=True
)

output = result.stdout
error = result.stderr
returncode = result.returncode
```

```output
output = "Hello World!\n"
error = ""
returncode = 0
```

ここで、`text=True` は、出力をバイトではなくテキストとして読み取るように関数に指示します。

`returncode` が 0 の場合、成功を示します。ゼロ以外の値はエラーを示します。

## エラーのチェック

リターンコードを使用して成功を確認できますが、より Pythonic な方法があります。

```python
try:
  result = subprocess.run(
    ['ls', 'my_dir'],
    check=True,
  )
  print('Finished without errors.')
except subprocess.CalledProcessError:
  print('Error: Directory does not exist.')
```

```output
Error: Directory does not exist.
```

`check` が `True` に設定されており、リターンコードが 0 でない場合（操作が失敗した場合）、subprocess は `subprocess.CalledProcessError` を発生させます。これは、通常の `except` ブロックを使用して処理できます。

## タイムアウト付きでのコマンド実行

プロセスにタイムアウトを設定できます。指定された時間を超えて実行された場合、`subprocess.TimeoutExpired` が発生します。

```python
try:
    subprocess.run(['sleep', '10'], timeout=5)
except subprocess.TimeoutExpired:
    print('Process took too long!')
```

```output
Process took too long!
```

## 出力をファイルに書き込む

`stdout` (および必要に応じて `stderr`) をファイルオブジェクトに設定することで、出力をファイルにリダイレクトできます。

```python
with open('output.txt', 'w') as f:
    subprocess.run(['ls', '-l'], stdout=f, stderr=f)
```

ここで、通常の出力とエラーの両方が、生成された順序でファイルに表示されます。

**注意：** `text=True` は、Python で出力を文字列として操作したい場合に役立ちます。出力をファイルに直接リダイレクトする場合は、厳密には必要ありません。

## 関連リンク

- <router-link to="/cheatsheet/reading-and-writing-files">チートシート：ファイルの読み書き</router-link>
- <router-link to="/cheatsheet/file-directory-path">チートシート：ファイルとディレクトリのパス</router-link>
- <router-link to="/cheatsheet/exception-handling">チートシート：例外処理</router-link>
- <router-link to="/modules/os-module">モジュール：os</router-link>
- <router-link to="/builtin/open">open()</router-link>
