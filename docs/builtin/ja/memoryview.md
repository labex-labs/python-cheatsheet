---
title: 'Python 組み込み関数 memoryview() - Python チートシート'
description: '指定された引数から「メモリアレイ（memory view）」オブジェクトを作成します。詳細についてはメモリアレイを参照してください。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 組み込み関数 memoryview()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#memoryview">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   指定された引数から「メモリアレイ」オブジェクトを作成します。詳細については、メモリアレイを参照してください。
  </base-disclaimer-content>
</base-disclaimer>

## 導入

`memoryview()`関数は、指定された引数からメモリアレイオブジェクトを作成します。メモリアレイを使用すると、`<router-link to="/builtin/bytes">bytes</router-link>`オブジェクトや`<router-link to="/builtin/bytearray">bytearray</router-link>`オブジェクトなどの別のオブジェクトのメモリに、コピーを作成せずにアクセスできます。これはメモリの複製を避けるため、大きなデータに対して非常に効率的です。

### 例

`memoryview()`の使用方法は次のとおりです。

```python
# bytearray を作成
data = bytearray(b'hello world')

# データのメモリアレイを作成
view = memoryview(data)

# ビューを介してデータにアクセス
print(view[0])  # 'h'の ASCII 値
print(view[6:11])  # メモリのスライス
print(view[6:11].tobytes())

# ビューを介して基になるデータを変更することもできます
view[0] = 72  # 'H'の ASCII 値
print(data)
```

```output
104
<memory at 0x...>
b'world'
bytearray(b'Hello world')
```

## 関連リンク

- <router-link to="/blog/python-data-types">ブログ：Python データ型</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
- <router-link to="/builtin/bytearray">bytearray()</router-link>
