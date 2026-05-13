---
title: Python Threading モジュール - Python チートシート
description: `threading` モジュールを使うと、同じプロセス内で複数のスレッドを実行し、ロックで調整できます。
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Threading モジュール
</base-title>

`threading` モジュールを使うと、同じプロセス内で複数のスレッドを実行し、ロックで調整できます。

```python
import threading
```

スレッドは、ネットワークリクエストやファイル操作のような I/O 待ちに役立ちます。CPU を多く使う Python コードを速くする方法としては、通常あまり向いていません。

## スレッドを開始する

```python
import threading

def worker():
    print('working')

thread = threading.Thread(target=worker)
thread.start()
thread.join()
```

```output
working
```

`start()` でスレッドを開始します。`join()` は終わるまで待ってから、メインプログラムを進めます。

## 引数を渡す

```python
import threading

def greet(name):
    print(f'hello {name}')

thread = threading.Thread(target=greet, args=('Ada',))
thread.start()
thread.join()
```

```output
hello Ada
```

`args` は位置引数、`kwargs` はキーワード引数に使います。

## ロックを使う

ロックは共有状態を保護するのに役立ちます。

```python
import threading

counter = 0
lock = threading.Lock()

with lock:
    counter += 1

print(counter)
```

```output
1
```

## 複数のスレッドを実行する

```python
import threading

results = []
lock = threading.Lock()

def worker(number):
    with lock:
        results.append(f'worker {number}')

threads = []
for number in range(3):
    thread = threading.Thread(target=worker, args=(number,))
    threads.append(thread)
    thread.start()

for thread in threads:
    thread.join()

print(sorted(results))
```

```output
['worker 0', 'worker 1', 'worker 2']
```

スレッドは並行して動くため、実際の完了順は変わることがあります。そのため、この例では出力前に結果を並べ替えています。

## 関連リンク

- <router-link to="/modules/subprocess-module">モジュール: subprocess</router-link>
- <router-link to="/cheatsheet/functions">チートシート: 関数</router-link>
- <router-link to="/cheatsheet/context-manager">チートシート: コンテキストマネージャー</router-link>
