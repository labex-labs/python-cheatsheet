---
title: 'Python デバッグ - Python チートシート'
description: 'コンピュータープログラミングおよびソフトウェア開発において、デバッグとは、プログラム、ソフトウェア、またはシステム内のバグ（誤りや誤動作の原因となる欠陥）を見つけ、修正するプロセスです。'
labUrl: 'https://labex.io/ja/labs/python-python-debugging-633653?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python デバッグ
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://en.wikipedia.org/wiki/Debugging">バグの発見と修正</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    コンピュータープログラミングおよびソフトウェア開発において、デバッグとは、コンピュータープログラム、ソフトウェア、またはシステム内のバグ（欠陥または動作を妨げる問題）を見つけ、解決するプロセスです。
  </base-disclaimer-content>
</base-disclaimer>

## 例外を発生させる (Raising Exceptions)

例外は `raise` ステートメントを使用して発生させます。コード内では、`raise` ステートメントは以下の要素で構成されます。

- `raise` キーワード
- `Exception()` 関数の呼び出し
- `Exception()` 関数に渡される、役立つエラーメッセージを含む文字列

```python
# raise ステートメント：カスタムメッセージで例外を手動で発生させる
raise Exception('This is the error message.')
```

```output
Traceback (most recent call last):
  File "<pyshell#191>", line 1, in <module>
    raise Exception('This is the error message.')
Exception: This is the error message.
```

通常、例外を処理する方法を知っているのは、関数自体ではなく、その関数を呼び出すコードです。そのため、関数内で `raise` ステートメントを見かけ、関数を呼び出すコードで `try` および `except` ステートメントを見かけることが一般的です。

```python
# 関数内で例外を発生させ、呼び出し元のコードで処理する
def box_print(symbol, width, height):
    if len(symbol) != 1:
      raise Exception('Symbol must be a single character string.')
    if width <= 2:
      raise Exception('Width must be greater than 2.')
    if height <= 2:
      raise Exception('Height must be greater than 2.')
    print(symbol * width)
    for i in range(height - 2):
        print(symbol + (' ' * (width - 2)) + symbol)
    print(symbol * width)

# 関数呼び出し時に例外を処理する
for sym, w, h in (('*', 4, 4), ('O', 20, 5), ('x', 1, 3), ('ZZ', 3, 3)):
    try:
        box_print(sym, w, h)
    except Exception as err:  # 例外をキャッチし、エラーメッセージを出力する
        print('An exception happened: ' + str(err))
```

```output
****
*  *
*  *
****
OOOOOOOOOOOOOOOOOOOO
O                  O
O                  O
O                  O
OOOOOOOOOOOOOOOOOOOO
An exception happened: Width must be greater than 2.
An exception happened: Symbol must be a single character string.
```

[Exception Handling](/cheatsheet/exception-handling) についてさらに読む。

## トレースバックを文字列として取得する

`traceback` は、発生した例外が未処理のままである場合に Python によって表示されます。しかし、`traceback.format_exc()` を呼び出すことによって、トレースバックを文字列として取得することもできます。この関数は、例外のトレースバックからの情報が必要だが、`except` ステートメントで例外を優雅に処理したい場合に役立ちます。この関数を呼び出す前に、Python の `traceback` モジュールをインポートする必要があります。

```python
# traceback.format_exc(): ロギング/デバッグのためにトレースバックを文字列として取得する
import traceback

try:
    raise Exception('This is the error message.')
except:
    with open('errorInfo.txt', 'w') as error_file:
        error_file.write(traceback.format_exc())  # トレースバックをファイルに書き込む
    print('The traceback info was written to errorInfo.txt.')
```

```output
116
The traceback info was written to errorInfo.txt.
```

116 は `write()` メソッドの戻り値です。これは、ファイルに 116 文字が書き込まれたためです。`traceback` テキストは errorInfo.txt に書き込まれました。

    Traceback (most recent call last):
      File "<pyshell#28>", line 2, in <module>
    Exception: This is the error message.

## アサーション (Assertions)

アサーションは、コードが明らかに間違ったことをしていないことを確認するための健全性チェックです。これらの健全性チェックは `assert` ステートメントによって実行されます。健全性チェックが失敗すると、`AssertionError` 例外が発生します。コード内では、`assert` ステートメントは以下の要素で構成されます。

- `assert` キーワード
- 条件（つまり、`True` または `False` に評価される式）
- コンマ
- 条件が `False` の場合に表示する `string`

```python
# assert ステートメント：条件をチェックし、False の場合は AssertionError を発生させる
pod_bay_door_status = 'open'
assert pod_bay_door_status == 'open', 'The pod bay doors need to be "open".'  # パスする

pod_bay_door_status = 'I\'m sorry, Dave. I\'m afraid I can\'t do that.'
assert pod_bay_door_status == 'open', 'The pod bay doors need to be "open".'  # AssertionError を発生させる
```

```output
Traceback (most recent call last):
  File "<pyshell#10>", line 1, in <module>
    assert pod_bay_door_status == 'open', 'The pod bay doors need to be "open".'
AssertionError: The pod bay doors need to be "open".
```

平たく言えば、アサーションステートメントは「この条件が真であることを主張する。そうでない場合は、プログラムのどこかにバグがある」という意味です。例外とは異なり、コードは try や except でアサーションステートメントを処理すべきではありません。アサーションが失敗した場合、プログラムはクラッシュすべきです。このように早く失敗することで、バグの元の原因と、最初にバグに気づくまでの時間を短縮できます。これにより、バグの原因となっているコードを見つける前に確認する必要のあるコードの量を減らすことができます。

### アサーションの無効化

Python を実行する際に `-O` オプションを渡すことで、アサーションを無効にできます。

## ロギング (Logging)

プログラムの実行中にログメッセージが画面に表示されるように `logging` モジュールを有効にするには、プログラムの先頭に以下をコピーします。

```python
import logging
logging.basicConfig(level=logging.DEBUG, format=' %(asctime)s - %(levelname)s- %(message)s')
```

ある数の階乗を計算する関数を作成したとします。数学では、階乗 4 は 1 × 2 × 3 × 4、つまり 24 です。階乗 7 は 1 × 2 × 3 × 4 × 5 × 6 × 7、つまり 5,040 です。新しいファイルエディタウィンドウを開き、以下のコードを入力してください。これにはバグが含まれていますが、何が問題なのかを把握するのに役立つように、いくつかのログメッセージも入力します。プログラムを factorialLog.py として保存します。

```python
import logging
logging.basicConfig(level=logging.DEBUG, format=' %(asctime)s - %(levelname)s- %(message)s')
logging.debug('Start of program')

def factorial(n):
    logging.debug('Start of factorial(%s)' % (n))
    total = 1
    for i in range(1, n + 1):
        total *= i
        logging.debug('i is ' + str(i) + ', total is ' + str(total))
    logging.debug('End of factorial(%s)' % (n))
    return total

print(factorial(5))
logging.debug('End of program')
```

```output
2015-05-23 16:20:12,664 - DEBUG - Start of program
2015-05-23 16:20:12,664 - DEBUG - Start of factorial(5)
2015-05-23 16:20:12,665 - DEBUG - i is 0, total is 0
2015-05-23 16:20:12,668 - DEBUG - i is 1, total is 0
2015-05-23 16:20:12,670 - DEBUG - i is 2, total is 0
2015-05-23 16:20:12,673 - DEBUG - i is 3, total is 0
2015-05-23 16:20:12,675 - DEBUG - i is 4, total is 0
2015-05-23 16:20:12,678 - DEBUG - i is 5, total is 0
2015-05-23 16:20:12,680 - DEBUG - End of factorial(5)
0
2015-05-23 16:20:12,684 - DEBUG - End of program
```

## ロギングレベル (Logging Levels)

ロギングレベルは、ログメッセージを重要度によって分類する方法を提供します。重要度が最も低いものから高いものまで、表 10-1 に説明されている 5 つのロギングレベルがあります。各レベルでメッセージをログに記録するには、異なるロギング関数を使用できます。

| レベル     | ロギング関数         | 説明                                                                                                                                   |
| :--------- | :------------------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| `DEBUG`    | `logging.debug()`    | 最も低いレベル。細かい詳細に使用されます。通常、これらのメッセージは問題の診断時のみに関心があります。                                 |
| `INFO`     | `logging.info()`     | プログラム内の一般的なイベントに関する情報を記録したり、プログラム内のその時点での動作が正しいことを確認したりするために使用されます。 |
| `WARNING`  | `logging.warning()`  | プログラムの動作を妨げないが、将来的に妨げる可能性のある潜在的な問題を示すために使用されます。                                         |
| `ERROR`    | `logging.error()`    | プログラムが何らかの処理に失敗したことを記録するために使用されます。                                                                   |
| `CRITICAL` | `logging.critical()` | 最も高いレベル。プログラムの実行が完全に停止した、または停止しようとしている致命的なエラーを示すために使用されます。                   |

## ロギングの無効化 (Disabling Logging)

プログラムのデバッグが完了した後、画面がすべてのログメッセージで煩雑になることを望まないでしょう。`logging.disable()` 関数は、すべてのロギング呼び出しを手動で削除するためにプログラム内に移動する必要がないように、これらを無効にします。

```python
import logging

logging.basicConfig(level=logging.INFO, format=' %(asctime)s -%(levelname)s - %(message)s')
logging.critical('Critical error! Critical error!')
```

```output
2015-05-22 11:10:48,054 - CRITICAL - Critical error! Critical error!
```

```python
logging.disable(logging.CRITICAL)
logging.critical('Critical error! Critical error!')
logging.error('Error! Error!')
```

## ファイルへのロギング (Logging to a File)

ログメッセージを画面に表示する代わりに、テキストファイルに書き込むことができます。`logging.basicConfig()` 関数は、以下のように `filename` キーワード引数を取ります。

```python
import logging
logging.basicConfig(filename='myProgramLog.txt', level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')
```

## 関連リンク

- <router-link to="/cheatsheet/exception-handling">Exception Handling</router-link>
- <router-link to="/builtin/breakpoint">breakpoint()</router-link>
