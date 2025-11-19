---
title: 'ファイルとディレクトリのパス - Python チートシート'
description: 'Python にはパス操作を扱う主要なモジュールが 2 つあります。1 つは os.path モジュール、もう 1 つは pathlib モジュールです。'
labUrl: 'https://labex.io/ja/labs/python-python-file-and-directory-path-manipulation-633657?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
ファイルとディレクトリのパスの処理
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

実践的なファイルシステム操作の詳細については、ブログ記事をご覧ください：<router-link to="/blog/python-pathlib-essentials">開発者が知っておくべき 10 の必須ファイルシステム操作</router-link>。

Python でパス操作を扱う主要なモジュールは 2 つあります。
1 つは <router-link to="/modules/os-module">os.path</router-link> モジュール、もう 1 つは <router-link to="/modules/pathlib-module">pathlib</router-link> モジュールです。

<base-disclaimer>
  <base-disclaimer-title>
    Pathlib と OS モジュール
  </base-disclaimer-title>
  <base-disclaimer-content>
    <code>pathlib</code>は、ファイル名の取得、ファイル拡張子の取得、ファイルの読み書き（手動で開くことなく）など、上記にリストされているものよりもはるかに多くの機能を提供します。さらに詳しく知りたい場合は、<a target="_blank" href="https://docs.python.org/3/library/pathlib.html">公式ドキュメント</a>を参照してください。
  </base-disclaimer-content>
</base-disclaimer>

## Linux と Windows のパス

Windows では、パスはフォルダー名の区切り文字としてバックスラッシュ (`\`) を使用して記述されます。macOS、Linux、BSD などの Unix ベースのオペレーティングシステムでは、パスの区切り文字としてフォワードスラッシュ (`/`) が使用されます。コードが異なるプラットフォームで動作する必要がある場合、パスの結合は頭痛の種になることがあります。

幸いなことに、Python の `pathlib` モジュールはこれを処理する簡単な方法を提供します。

\*nix での `pathlib` の使用：

```python
# pathlib.Path: クロスプラットフォームのパス処理
from pathlib import Path

print(Path('usr').joinpath('bin').joinpath('spam'))  # パスコンポーネントを結合
```

```output
usr/bin/spam
```

`pathlib` は、`/` 演算子を使用して `joinpath` のショートカットも提供します：

```python
# Path 演算子 (/): パスを結合する便利な方法 (クロスプラットフォーム)
from pathlib import Path

print(Path('usr') / 'bin' / 'spam')  # joinpath() の代わりに / 演算子を使用
```

```output
usr/bin/spam
```

パス区切り文字が Windows と Unix ベースのオペレーティングシステムで異なることに注意してください。これが、パスを結合するために文字列を結合する代わりに `pathlib` を使用したい理由です。

パスの結合は、同じディレクトリの下に異なるファイルパスを作成する必要がある場合に役立ちます。

\*nix での `pathlib` の使用：

```python
# Path.home(): ユーザーのホームディレクトリを取得し、ファイル名と結合
my_files = ['accounts.txt', 'details.csv', 'invite.docx']
home = Path.home()  # ホームディレクトリパスを取得
for filename in my_files:
    print(home / filename)  # ホームパスと各ファイル名を結合
```

```output
/home/labex/project/accounts.txt
/home/labex/project/details.csv
/home/labex/project/invite.docx
```

## 現在の作業ディレクトリ

`pathlib` を使用して現在の作業ディレクトリを取得できます：

```python
# Path.cwd(): 現在の作業ディレクトリを取得
from pathlib import Path

print(Path.cwd())  # Path オブジェクトとして現在の作業ディレクトリを返します
```

```output
/home/labex/project
```

## 新しいフォルダーの作成

\*nix での `pathlib` の使用：

```python
from pathlib import Path
cwd = Path.cwd()
(cwd / 'delicious' / 'walnut' / 'waffles').mkdir()
```

```output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "/usr/lib/python3.6/pathlib.py", line 1226, in mkdir
    self._accessor.mkdir(self, mode)
  File "/usr/lib/python3.6/pathlib.py", line 387, in wrapped
    return strfunc(str(pathobj), *args)
FileNotFoundError: [Errno 2] No such file or directory: '/home/labex/project/delicious/walnut/waffles'
```

おっと、厄介なエラーが発生しました！理由は、「delicious」ディレクトリが存在しないため、「walnut」と「waffles」ディレクトリをその下に作成できないためです。これを修正するには、次のようにします：

```python
# mkdir(parents=True): 必要に応じてディレクトリとすべての親ディレクトリを作成
from pathlib import Path
cwd = Path.cwd()
(cwd / 'delicious' / 'walnut' / 'waffles').mkdir(parents=True)  # ネストされたディレクトリを作成
```

これで全てうまくいきました :)

## 絶対パスと相対パス

ファイルパスを指定するには 2 つの方法があります。

- **絶対パス**: 常にルートフォルダーから始まるパス
- **相対パス**: プログラムの現在の作業ディレクトリに対して相対的なパス

また、ドット (`.`) とドットドット (`..`) のフォルダーもあります。これらは実際のフォルダーではなく、パスで使用できる特別な名前です。単一のピリオド（「ドット」）をフォルダー名に使用することは、「このディレクトリ」の短縮形です。2 つのピリオド（「ドットドット」）は「親フォルダー」を意味します。

### 絶対パスの処理

`pathlib` を使用してパスが絶対パスであるかどうかを確認するには：

```python
from pathlib import Path
Path('/').is_absolute()
```

```output
True
```

```python
Path('..').is_absolute()
```

```output
False
```

`pathlib` を使用して絶対パスを抽出できます：

```python
from pathlib import Path
print(Path.cwd())
```

```output
/home/labex/project
```

```python
print(Path('..').resolve())
```

```output
/home
```

### 相対パスの処理

開始パスから別のパスへの相対パスを `pathlib` を使用して取得できます：

```python
from pathlib import Path
print(Path('/etc/passwd').relative_to('/'))
```

```output
etc/passwd
```

## パスとファイルの有効性

### ファイル/ディレクトリの存在確認

\*nix での `pathlib` の使用：

```python
from pathlib import Path

Path('.').exists()
```

```output
True
```

```python
Path('setup.py').exists()
```

```output
True
```

```python
Path('/etc').exists()
```

```output
True
```

```python
Path('nonexistentfile').exists()
```

```output
False
```

### パスがファイルであるかどうかの確認

\*nix での `pathlib` の使用：

```python
from pathlib import Path

Path('setup.py').is_file()
```

```output
True
```

```python
Path('/home').is_file()
```

```output
False
```

```python
Path('nonexistentfile').is_file()
```

```output
False
```

### パスがディレクトリであるかどうかの確認

\*nix での `pathlib` の使用：

```python
from pathlib import Path

Path('/').is_dir()
```

```output
True
```

```python
Path('setup.py').is_dir()
```

```output
False
```

```python
Path('/spam').is_dir()
```

```output
False
```

## ファイルサイズをバイト単位で取得

\*nix での `pathlib` の使用：

```python
from pathlib import Path

stat = Path('/bin/python3.6').stat()
print(stat) # stat にはファイルに関する他の情報も含まれています
```

```output
os.stat_result(st_mode=33261, st_ino=141087, st_dev=2051, st_nlink=2, st_uid=0,
--snip--
st_gid=0, st_size=10024, st_atime=1517725562, st_mtime=1515119809, st_ctime=1517261276)
```

```python
print(stat.st_size) # バイト単位のサイズ
```

```output
10024
```

## ディレクトリのリスト表示

\*nix で `pathlib` を使用してディレクトリの内容をリスト表示：

```python
from pathlib import Path

for f in Path('/usr/bin').iterdir():
    print(f)
```

```output
...
/usr/bin/tiff2rgba
/usr/bin/iconv
/usr/bin/ldd
/usr/bin/cache_restore
/usr/bin/udiskie
/usr/bin/unix2dos
/usr/bin/t1reencode
/usr/bin/epstopdf
/usr/bin/idle3
...
```

## ディレクトリのファイルサイズ

<base-warning>
  <base-warning-title>
    警告
  </base-warning-title>
  <base-warning-content>
    ディレクトリ自体にもサイズがあります！したがって、上記のセクションで説明したメソッドを使用して、パスがファイルかディレクトリかを確認することをお勧めします。
  </base-warning-content>
</base-warning>

\*nix での `pathlib` の使用：

```python
from pathlib import Path

total_size = 0
for sub_path in Path('/usr/bin').iterdir():
    total_size += sub_path.stat().st_size

print(total_size)
```

```output
1903178911
```

## ファイルとフォルダーのコピー

`shutil` モジュールは、ファイルのコピー、およびフォルダー全体のコピーのための関数を提供します。

```python
import shutil

shutil.copy('/tmp/spam.txt', '/tmp/delicious')
```

```output
/tmp/delicious/spam.txt
```

```python
shutil.copy('/tmp/eggs.txt', '/tmp/delicious/eggs2.txt')
```

```output
/tmp/delicious/eggs2.txt
```

`shutil.copy()` は単一のファイルをコピーしますが、`shutil.copytree()` はフォルダー全体とそれに含まれるすべてのフォルダーとファイルをコピーします：

```python
import shutil

shutil.copytree('/tmp/bacon', '/tmp/bacon_backup')
```

```output
/tmp/bacon_backup
```

## 移動と名前の変更

```python
import shutil

shutil.move('/tmp/bacon.txt', '/tmp/eggs')
```

```output
/tmp/eggs/bacon.txt
```

宛先パスでファイル名を指定することもできます。次の例では、ソースファイルが移動され、名前が変更されます：

```python
shutil.move('/tmp/bacon.txt', '/tmp/eggs/new_bacon.txt')
```

```output
/tmp/eggs/new_bacon.txt
```

eggs フォルダーが存在しない場合、`move()` は bacon.txt を eggs という名前のファイルに名前変更します：

```python
shutil.move('/tmp/bacon.txt', '/tmp/eggs')
```

```output
/tmp/eggs
```

## ファイルとフォルダーの削除

- `Path.unlink()` を呼び出すと、パス上のファイルが削除されます。
- `Path.rmdir()` を呼び出すと、パス上のフォルダーが削除されます。このフォルダーには、ファイルやフォルダーが含まれていてはなりません。
- `shutil.rmtree(path)` を呼び出すと、パス上のフォルダーが削除され、含まれるすべてのファイルとフォルダーも削除されます。

## ディレクトリツリーのウォーク

`Path` オブジェクトには、ファイルとディレクトリを再帰的に反復処理するための `rglob()` メソッドがあります。

```python
from pathlib import Path

p = Path('/tmp/delicious')
for i in p.rglob('*'):
    print(i)
```

```output
/tmp/delicious/cats
/tmp/delicious/walnut
/tmp/delicious/spam.txt
/tmp/delicious/cats/catnames.txt
/tmp/delicious/cats/zophie.jpg
/tmp/delicious/walnut/waffles
/tmp/delicious/walnut/waffles/butter.txt
```

## 関連リンク

- <router-link to="/cheatsheet/reading-and-writing-files">ファイルの読み書き</router-link>
- <router-link to="/blog/python-pathlib-essentials">開発者が知っておくべき 10 の必須ファイルシステム操作</router-link>
- <router-link to="/builtin/open">open()</router-link>
