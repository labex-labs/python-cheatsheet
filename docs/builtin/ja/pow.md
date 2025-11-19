---
title: 'Python 組み込み関数 pow() - Python チートシート'
description: 'pow() 関数は数値の累乗を返します。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python pow() 組み込み関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#pow">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
      pow() 関数は数値のべき乗を返します。2 つまたは 3 つの引数を取ります：
      pow(base, exp): base の exp 乗を返します (base ** exp)。
      pow(base, exp, mod): (base ** exp) % mod を返します (モジュラ演算の場合)。
      mod 引数が指定されている場合、Result は base ** exp % mod よりも効率的に計算されます。
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

`pow()` 関数はべき乗の計算に使用されます。2 つまたは 3 つの引数を取ることができます。

- `pow(base, exp)`: これは `base ** exp` と同等です。
- `pow(base, exp, mod)`: これは `(base ** exp) % mod` と同等ですが、より効率的です。これはモジュラ演算に役立ちます。

### Examples

```python
# 2 つの引数を使用 (base ** exp)
print(pow(2, 3))
print(pow(3, 2))
print(pow(2, -3))  # 1 / (2**3) と同等

# 3 つの引数を使用 ((base ** exp) % mod)
print(pow(3, 2, 4))  # 3**2 は 9 であり、9 % 4 は 1 です
print(pow(2, 3, 5))  # 2**3 は 8 であり、8 % 5 は 3 です
```

```output
8
9
0.125
1
3
```

## Relevant links

- <router-link to="/blog/python-data-types">ブログ：Python データ型</router-link>
- <router-link to="/builtin/divmod">divmod()</router-link>
- <router-link to="/builtin/abs">abs()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
