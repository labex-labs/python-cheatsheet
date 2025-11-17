---
title: 'Python OS モジュール - Python チートシート'
description: 'OS 依存の機能を利用するためのポータブルな方法を提供するモジュールです。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python OS モジュール
</base-title>

このモジュールは、オペレーティングシステムに依存する機能を使用するための移植可能な方法を提供します。

<base-disclaimer>
  <base-disclaimer-title>
    Pathlib と OS モジュール
  </base-disclaimer-title>
  <base-disclaimer-content>
    <router-link to="/modules/pathlib-module">pathlib</router-link>モジュールは、ファイル名を取得する、ファイル拡張子を取得する、手動で開かずにファイルを読み書きするなど、ここにリストされているものよりもはるかに多くの機能を提供します。詳細については、<a target="_blank" href="https://docs.python.org/3/library/pathlib.html">公式ドキュメント</a>を参照してください。
    <br>
    両者をより深く掘り下げるには、<router-link to="/cheatsheet/file-directory-path">ファイルとディレクトリのパス</router-link>のページを参照してください。
  </base-disclaimer-content>
</base-disclaimer>

## Linux と Windows のパス

Windows では、パスはフォルダー名の区切り文字としてバックスラッシュ (`\`) を使用して記述されます。macOS、Linux、BSD などの Unix ベースのオペレーティングシステムでは、パスの区切り文字としてフォワードスラッシュ (`/`) が使用されます。コードが異なるプラットフォームで動作する必要がある場合、パスの結合は頭痛の種になることがあります。

幸いなことに、Python はこれに対処するための`os.path.join`を提供しています。

```python
import os

# OS に適した区切り文字を使用してパスコンポーネントを結合
os.path.join('usr', 'bin', 'spam')
```

出力：

```plaintext
usr\bin\spam
```

同じディレクトリの下に異なるファイルパスを作成する必要がある場合、パスの結合は役立ちます。

```python
my_files = ['accounts.txt', 'details.csv', 'invite.docx']

# 各ファイル名を基本ディレクトリと結合
for filename in my_files:
    print(os.path.join('/home/labex/project', filename))
```

出力：

```plaintext
/home/labex/project/accounts.txt
/home/labex/project/details.csv
/home/labex/project/invite.docx
```

## 現在の作業ディレクトリ

```python
import os

# 現在の作業ディレクトリを取得
os.getcwd()
```

出力：

```plaintext
/home/labex/project
```

```python
# 現在の作業ディレクトリを変更
os.chdir('/usr/bin')

# 変更を確認
os.getcwd()
```

出力：

```plaintext
/usr/bin
```

## 新しいフォルダーの作成

```python
import os
# ディレクトリを再帰的に作成（必要に応じてすべての親ディレクトリを作成）
os.makedirs('/tmp/delicious/walnut/waffles')
```

## 絶対パスと相対パス

ファイルパスを指定するには 2 つの方法があります。

- **絶対パス**：常にルートフォルダーから始まるパス
- **相対パス**：プログラムの現在の作業ディレクトリに対するパス

また、ドット (`.`) とドットドット (`..`) のフォルダーもあります。これらは実際のフォルダーではなく、パスで使用できる特別な名前です。フォルダー名での単一のピリオド（「ドット」）は「このディレクトリ」の短縮形です。2 つのピリオド（「ドットドット」）は「親フォルダー」を意味します。

### 絶対パスの処理

パスが絶対パスであるかどうかを確認するには：

```python
import os
# パスが絶対パスであるかを確認（ルートから始まる）
os.path.isabs('/')
```

出力：

```plaintext
True
```

```python
# 相対パスは False を返す
os.path.isabs('..')
```

出力：

```plaintext
False
```

絶対パスを抽出することもできます。

```python
import os
# まず現在のディレクトリを取得
os.getcwd()
```

出力：

```plaintext
/home/labex/project
```

```python
# 相対パスを絶対パスに変換
os.path.abspath('..')
```

出力：

```plaintext
/home
```

### 相対パスの処理

開始パスから別のパスへの相対パスを取得できます。

```python
import os
# 開始パスからターゲットパスへの相対パスを取得
os.path.relpath('/etc/passwd', '/')
```

出力：

```plaintext
etc/passwd
```

## パスとファイルの妥当性確認

### ファイル/ディレクトリの存在確認

```python
import os

# パスが存在するかどうかを確認（ファイルまたはディレクトリ）
os.path.exists('.')
```

出力：

```plaintext
True
```

```python
os.path.exists('setup.py')
```

出力：

```plaintext
True
```

```python
os.path.exists('/etc')
```

出力：

```plaintext
True
```

```python
os.path.exists('nonexistentfile')
```

出力：

```plaintext
False
```

### パスがファイルであるかどうかの確認

```python
import os

# パスがファイルであるかを確認
os.path.isfile('setup.py')
```

出力：

```plaintext
True
```

```python
os.path.isfile('/home')
```

出力：

```plaintext
False
```

```python
os.path.isfile('nonexistentfile')
```

出力：

```plaintext
False
```

### パスがディレクトリであるかどうかの確認

```python
import os

# パスがディレクトリであるかを確認
os.path.isdir('/')
```

出力：

```plaintext
True
```

```python
os.path.isdir('setup.py')
```

出力：

```plaintext
False
```

```python
os.path.isdir('/spam')
```

出力：

```plaintext
False
```

## ファイルサイズをバイト単位で取得する

```python
import os

# ファイルサイズをバイト単位で取得
os.path.getsize('/usr/bin/python3')
```

出力：

```plaintext
776192
```

## ディレクトリのリスト表示

```python
import os

# 指定されたパス内のすべてのファイルとディレクトリをリスト表示
os.listdir('/usr/bin')
```

出力：

```plaintext
['0409', '12520437.cpx', '12520850.cpx', '5U877.ax', 'aaclient.dll',
--snip--
'xwtpdui.dll', 'xwtpw32.dll', 'zh-CN', 'zh-HK', 'zh-TW', 'zipfldr.dll']
```

## ディレクトリのファイルサイズ

<base-warning>
  <base-warning-title>
    警告
  </base-warning-title>
  <base-warning-content>
    ディレクトリ自体にもサイズがあります！したがって、上記のセクションで説明したメソッドを使用して、パスがファイルかディレクトリかをチェックすることをお勧めします。
  </base-warning-content>
</base-warning>

```python
import os
total_size = 0

# ディレクトリ内のすべてのファイルの合計サイズを計算
for filename in os.listdir('/usr/bin'):
    # ディレクトリパスとファイル名を結合し、サイズを取得
    total_size = total_size + os.path.getsize(os.path.join('/usr/bin', filename))
print(total_size)
```

出力：

```plaintext
1117846456
```

## ファイルとフォルダーの削除

- `os.unlink(path)`を呼び出すと、パス上のファイルが削除されます。

- `os.rmdir(path)`を呼び出すと、パス上のフォルダーが削除されます。このフォルダーには、ファイルやフォルダーが含まれていてはなりません。

## ディレクトリツリーのウォーク

```python
import os

# ディレクトリツリーを再帰的にウォーク
for folder_name, subfolders, filenames in os.walk('/tmp/delicious'):
    print(f'現在のフォルダーは {folder_name} です')
    # サブディレクトリを反復処理
    for subfolder in subfolders:
        print(f'{folder_name} のサブフォルダー: {subfolder}')
    # ファイルを反復処理
    for filename in filenames:
        print(f'{folder_name} のファイル内：filename{filename}')
    print('')
```

出力：

```plaintext
現在のフォルダーは /tmp/delicious です
/tmp/delicious のサブフォルダー: cats
/tmp/delicious のサブフォルダー: walnut
/tmp/delicious のファイル内: filename spam.txt

現在のフォルダーは /tmp/delicious/cats です
/tmp/delicious/cats のファイル内: filename catnames.txt
/tmp/delicious/cats のファイル内: filename zophie.jpg

現在のフォルダーは /tmp/delicious/walnut です
/tmp/delicious/walnut のサブフォルダー: waffles

現在のフォルダーは /tmp/delicious/walnut/waffles です
/tmp/delicious/walnut/waffles のファイル内: filename butter.txt
```

## 関連リンク

- <router-link to="/cheatsheet/file-directory-path">チートシート：ファイルとディレクトリのパス</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">チートシート：ファイルの読み書き</router-link>
- <router-link to="/blog/python-pathlib-essentials">ブログ：Pathlib の基本</router-link>
- <router-link to="/modules/pathlib-module">モジュール：pathlib</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/str">str()</router-link>
