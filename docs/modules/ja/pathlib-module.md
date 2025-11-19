---
title: 'Python Pathlib モジュール - Python チートシート'
description: 'pathlib モジュールは Python 3.4 で導入され、ファイルシステムパスを扱うためのオブジェクト指向的な方法を提供します。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Pathlib モジュール
</base-title>

実用的なファイルシステム操作の詳細については、ブログ記事をご覧ください：<router-link to="/blog/python-pathlib-essentials">すべての開発者が知っておくべき 10 の必須ファイルシステム操作</router-link>。

`pathlib` モジュールは Python 3.4 で追加され、ファイルシステムパスを扱うためのオブジェクト指向的な方法を提供します。

<base-disclaimer>
  <base-disclaimer-title>
    Pathlib 対 OS モジュール
  </base-disclaimer-title>
  <base-disclaimer-content>
    <code>pathlib</code> は、ファイル名やファイル拡張子の取得、ファイルの読み書き（手動で開くことなく）など、<code>os</code> からの機能やここでリストされている機能よりもはるかに多くの機能を提供します。詳細については、<a target="_blank" href="https://docs.python.org/3/library/pathlib.html">公式ドキュメント</a>を参照してください。
    <br>
    両者をより深く掘り下げるには、<router-link to="/cheatsheet/file-directory-path">ファイルとディレクトリのパス</router-link> ページを参照してください。
  </base-disclaimer-content>
</base-disclaimer>

## Linux と Windows のパス

Windows では、パスはフォルダー名の区切り文字としてバックスラッシュ（`\`）を使用して記述されます。macOS、Linux、BSD などの Unix ベースのオペレーティングシステムでは、パス区切り文字としてフォワードスラッシュ（`/`）が使用されます。コードが異なるプラットフォームで動作する必要がある場合、パスの結合は頭痛の種になることがあります。

幸いなことに、Python は `pathlib.Path.joinpath` を提供しており、これを簡単に処理できます。

```python
from pathlib import Path

# パスコンポーネントを結合
print(Path('usr').joinpath('bin').joinpath('spam'))
```

```output
usr/bin/spam
```

`pathlib` は、`/` 演算子を使用して joinpath のショートカットも提供します。

```python
from pathlib import Path

# / 演算子を使用してパスを結合
print(Path('usr') / 'bin' / 'spam')
```

```output
usr/bin/spam
```

同じディレクトリの下で異なるファイルパスを作成する必要がある場合、パスの結合は役立ちます。

```python
my_files = ['accounts.txt', 'details.csv', 'invite.docx']
# ユーザーのホームディレクトリを取得
home = Path.home()
# 各ファイル名をホームディレクトリと結合
for filename in my_files:
    print(home / filename)
```

```output
/home/labex/project/accounts.txt
/home/labex/project/details.csv
/home/labex/project/invite.docx
```

## 現在の作業ディレクトリ

```python
from pathlib import Path
from os import chdir

# 現在の作業ディレクトリを取得
print(Path.cwd())
```

```output
/home/labex/project
```

```python
# os モジュールを使用してディレクトリを変更
chdir('/usr/lib/python3.10')
# 現在のディレクトリを確認
print(Path.cwd())
```

```output
/usr/lib/python3.10
```

## 新しいフォルダーの作成

```python
from pathlib import Path
cwd = Path.cwd()
# ディレクトリを作成（親ディレクトリが存在しない場合は失敗します）
(cwd / 'delicious' / 'walnut' / 'waffles').mkdir()
```

```output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "/usr/lib/python3.10/pathlib.py", line 1226, in mkdir
    self._accessor.mkdir(self, mode)
  File "/usr/lib/python3.10/pathlib.py", line 387, in wrapped
    return strfunc(str(pathobj), *args)
FileNotFoundError: [Errno 2] No such file or directory: '/home/labex/project/delicious/walnut/waffles'
```

このエラーの原因は、「delicious」ディレクトリが存在しないため、「walnut」ディレクトリと「waffles」ディレクトリをその下に作成できないことです。これを修正するには、次のようにします。

```python
from pathlib import Path
cwd = Path.cwd()
# すべての親ディレクトリと共にディレクトリを作成
(cwd / 'delicious' / 'walnut' / 'waffles').mkdir(parents=True)
```

## 絶対パスと相対パス

ファイルパスを指定するには 2 つの方法があります。

- **絶対パス**：常にルートフォルダーから始まるパス
- **相対パス**：プログラムの現在の作業ディレクトリに対して相対的なパス

また、ドット（`.`）とドットドット（`..`）のフォルダーもあります。これらは実際のフォルダーではなく、パスで使用できる特別な名前です。フォルダー名として単一のピリオド（ドット）は、「このディレクトリ」の短縮形です。2 つのピリオド（ドットドット）は、「親フォルダー」を意味します。

### 絶対パスの処理

パスが絶対パスであるかどうかを確認するには：

```python
from pathlib import Path
# パスが絶対パスであるかチェック
Path('/').is_absolute()
```

```output
True
```

```python
# 相対パスは False を返します
Path('..').is_absolute()
```

```output
False
```

絶対パスを抽出することもできます。

```python
from pathlib import Path
# 現在のディレクトリを取得
print(Path.cwd())
```

```output
/home/labex/project
```

```python
# 相対パスを絶対パスに解決
print(Path('..').resolve())
```

```output
/home
```

### 相対パスの処理

開始パスから別のパスへの相対パスを取得できます。

```python
from pathlib import Path
# ベースパスからの相対パスを取得
print(Path('/etc/passwd').relative_to('/'))
```

```output
etc/passwd
```

## パスとファイルの有効性

### ファイル/ディレクトリの存在確認

```python
from pathlib import Path

# パスが存在するかチェック
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

### パスがファイルであるかの確認

```python
from pathlib import Path

# パスがファイルであるかチェック
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

### パスがディレクトリであるかの確認

```python
from pathlib import Path

# パスがディレクトリであるかチェック
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

## ファイルサイズをバイト単位で取得する

```python
from pathlib import Path

# ファイルの統計情報を取得
stat = Path('/bin/python3.10').stat()
print(stat) # stat にはファイルに関する他の情報も含まれます
```

```output
os.stat_result(st_mode=33261, st_ino=141087, st_dev=2051, st_nlink=2, st_uid=0,
--snip--
st_gid=0, st_size=10024, st_atime=1517725562, st_mtime=1515119809, st_ctime=1517261276)
```

```python
# stat オブジェクトからファイルサイズにアクセス
print(stat.st_size) # サイズはバイト単位
```

```output
10024
```

## ディレクトリの内容のリスト表示

```python
from pathlib import Path

# ディレクトリの内容を反復処理
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
    ディレクトリ自体もサイズを持っています！したがって、上記のセクションで説明したメソッドを使用して、パスがファイルかディレクトリかをチェックすることをお勧めします。
  </base-warning-content>
</base-warning>

```python
from pathlib import Path

# ディレクトリ内のすべてのファイルの合計サイズを計算
total_size = 0
for sub_path in Path('/usr/bin').iterdir():
    total_size += sub_path.stat().st_size
print(total_size)
```

```output
1903178911
```

## ファイルとフォルダーの削除

- `Path.unlink()` を呼び出すと、パス上のファイルが削除されます。

- `Path.rmdir()` を呼び出すと、パス上のフォルダーが削除されます。このフォルダーには、ファイルやフォルダーが空である必要があります。

## 関連リンク

- <router-link to="/cheatsheet/reading-and-writing-files">チートシート：ファイルの読み書き</router-link>
- <router-link to="/modules/os-module">モジュール：os</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/str">str()</router-link>
