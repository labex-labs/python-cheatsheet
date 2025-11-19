---
title: 'Python 組み込み関数 ascii() - Python チートシート'
description: "repr() と同様に、オブジェクトの印刷可能な表現を含む文字列を返しますが、repr() によって返された文字列内の非 ASCII 文字を\\x、\\u、または\\Uエスケープシーケンスを使用してエスケープします。"
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python ascii() ビルトイン関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#ascii">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
    <code>repr()</code>と同様に、オブジェクトの印刷可能な表現を含む文字列を返しますが、<code>repr()</code>が返す文字列内の非 ASCII 文字を<code>\x</code>、<code>\u</code>、または<code>\U</code>エスケープシーケンスを使用してエスケープします。
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Python の`ascii()`関数はビルトイン関数であり、`repr()`と似ていますが、非 ASCII 文字を`\x`、`\u`、または`\U`エスケープシーケンスでエスケープする、オブジェクトの印刷可能な表現を含む文字列を返します。これは、文字列が ASCII のみの環境で使用されることを保証する場合に役立ちます。

## Examples

```python
# ASCII 文字の場合、repr() と同じです
ascii('A')

# 非 ASCII 文字の場合、エスケープされます
ascii('ë')

# 比較のために、repr() はエスケープしません
repr('ë')

# イテラブルに対しても機能します
ascii(['A', 'ë'])
```

```output
'A'
'\\xeb'
'ë'
['A', '\\xeb']
```

## Relevant links

- <router-link to="/cheatsheet/manipulating-strings">チートシート：文字列の操作</router-link>
- <router-link to="/blog/python-data-types">ブログ：Python のデータ型</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
- <router-link to="/builtin/chr">chr()</router-link>
- <router-link to="/builtin/ord">ord()</router-link>
