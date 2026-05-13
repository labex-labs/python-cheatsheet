---
title: Python Statistics モジュール - Python チートシート
description: `statistics` モジュールは、平均値、中央値、その他の記述統計を計算するための簡単なツールを提供します。
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Statistics モジュール
</base-title>

`statistics` モジュールは、平均値、中央値、その他の記述統計を計算するための簡単なツールを提供します。

このモジュールは Python 3.4 で追加されました。

```python
import statistics
```

少数の数値に対してよくある計算をしたいときに `statistics` を使います。高度なデータ分析には NumPy や pandas のほうが強力ですが、標準ライブラリには含まれていません。

## mean()

```python
import statistics

scores = [80, 90, 95, 100]
print(statistics.mean(scores))
```

```output
91.25
```

`fmean` は浮動小数点の平均を返し、数値データではより高速なことが多いです。

```python
import statistics

print(statistics.fmean([1, 2, 3]))
```

```output
2.0
```

## median()

```python
import statistics

values = [1, 3, 5, 100]
print(statistics.median(values))
```

```output
4.0
```

## mode()

`mode` は最頻値を返します。

```python
import statistics

print(statistics.mode(['python', 'python', 'rust']))
```

```output
python
```

最頻値が複数ある場合は、`multimode` がそれらをすべて返します。

```python
import statistics

print(statistics.multimode(['red', 'blue', 'red', 'blue']))
```

```output
['red', 'blue']
```

## stdev()

`stdev` は標本標準偏差を計算します。

```python
import statistics

print(round(statistics.stdev([2, 4, 4, 4, 5, 5, 7, 9]), 2))
```

```output
2.14
```

## 空のデータを扱う

ほとんどの関数は、空の入力に対して `StatisticsError` を送出します。

```python
import statistics

try:
    statistics.mean([])
except statistics.StatisticsError as error:
    print(type(error).__name__)
```

```output
StatisticsError
```

## 関連リンク

- <router-link to="/modules/math-module">モジュール: math</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">チートシート: リストとタプル</router-link>
- <router-link to="/builtin/round">round()</router-link>
