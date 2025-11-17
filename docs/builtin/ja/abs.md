---
title: 'Python 組み込み関数 abs() - Python チートシート'
description: '数値の絶対値を返します。引数は整数、浮動小数点数、または__abs__() を実装するオブジェクトにできます。引数が複素数の場合、その大きさが返されます。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python abs() 組み込み関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#abs">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
    数値の絶対値を返します。引数は整数、浮動小数点数、または <code>__abs__()</code> を実装するオブジェクトにすることができます。引数が複素数の場合、そのマグニチュード（大きさ）が返されます。
  </base-disclaimer-content>
</base-disclaimer>

## 導入

Python の `abs()` 関数は、数値の絶対値を返す組み込み関数です。整数、浮動小数点数、さらには複素数（そのマグニチュードを返す）も処理できます。この関数は、元の符号に関係なく値が正であることを保証したい場合に役立ちます。

### 例

```python
# 整数用
abs(-1)
abs(0)

# 浮動小数点数用
abs(-3.14)

# 複素数用 (マグニチュードを返す)
abs(3 + 4j)

# その他の数値システム用
abs(0x10)  # 16 進数
abs(0b10)  # 2 進数
abs(0o20)  # 8 進数
```

出力：

```plaintext
1
0
3.14
5.0
16
2
16
```

## 関連リンク

- <router-link to="/blog/python-data-types">ブログ：Python データ型</router-link>
- <router-link to="/builtin/pow">pow()</router-link>
- <router-link to="/builtin/round">round()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
- <router-link to="/builtin/complex">complex()</router-link>
