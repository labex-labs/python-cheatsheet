---
title: "Python Logging モジュール - Python チートシート"
description: "`logging` モジュールを使うと、debug、info、warning、error、exception のメッセージを一貫した方法で記録できます。"
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Logging モジュール
</base-title>

`logging` モジュールを使うと、debug、info、warning、error、exception のメッセージを一貫した方法で記録できます。

```python
import logging
```

メッセージに異なる重要度がある場合や、あとでファイルに出力する可能性がある場合は、`print()` ではなく `logging` を使います。

## 基本設定

`basicConfig` はデフォルトのロガーを設定します。

```python
import logging

logging.basicConfig(level=logging.INFO)
logging.info('Application started')
logging.warning('Low disk space')
```

```output
INFO:root:Application started
WARNING:root:Low disk space
```

設定したレベルより下のメッセージは無視されます。

```python
import logging

logging.basicConfig(level=logging.WARNING)
logging.info('Hidden message')
logging.warning('Visible message')
```

```output
WARNING:root:Visible message
```

## 名前付きロガーを作成する

名前付きロガーは大きなアプリケーションで役立ちます。

```python
import logging

logger = logging.getLogger('app.users')
logger.setLevel(logging.INFO)
print(logger.name)
```

```output
app.users
```

## メッセージを書式設定する

出力形式はカスタマイズできます。

```python
import logging

logging.basicConfig(
    level=logging.INFO,
    format='%(levelname)s:%(name)s:%(message)s',
)

logger = logging.getLogger('app')
logger.info('Ready')
```

```output
INFO:app:Ready
```

## 例外を記録する

`logger.exception` は `except` ブロック内で traceback を自動的に記録します。

```python
import logging

logging.basicConfig(level=logging.ERROR)
logger = logging.getLogger(__name__)

try:
    1 / 0
except ZeroDivisionError:
    logger.exception('Calculation failed')
```

```output
ERROR:__main__:Calculation failed
Traceback (most recent call last):
...
ZeroDivisionError: division by zero
```

## 関連リンク

- <router-link to="/cheatsheet/debugging">チートシート: デバッグ</router-link>
- <router-link to="/cheatsheet/exception-handling">チートシート: 例外処理</router-link>
- <router-link to="/modules/sys-module">モジュール: sys</router-link>
