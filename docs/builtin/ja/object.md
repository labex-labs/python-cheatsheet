---
title: 'Python 組み込み関数 object() - Python チートシート'
description: '新しい特徴のないオブジェクトを返します。object は全てのクラスの基底クラスです。Python クラスの全インスタンスに共通するメソッドを持ちます。この関数は引数を一切受け付けません。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python object() ビルトイン関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#object">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   新しい特徴のないオブジェクトを返します。object はすべてのクラスの基底クラスです。これには、Python のすべてのクラスのインスタンスに共通するメソッドが含まれています。この関数は引数を一切受け付けません。
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

`object()` 関数は、新しく空の、特徴のないオブジェクトを返します。このオブジェクトは、Python におけるすべてのクラスの基底となります。特別な属性やメソッドは持ちません。

`object` のインスタンスを作成することは可能ですが、日常的なプログラミングで頻繁に行うことはありません。これは、Python のオブジェクトモデルのより基本的な構成要素です。

### Example

```python
# 新しいオブジェクトを作成
o = object()

# その型を確認
print(type(o))
```

Output:

```plaintext
<class 'object'>
```

Note: 設定できる属性はありません。`o.name = "test"` は AttributeError を発生させます。

## Relevant links

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: OOP Basics</router-link>
- <router-link to="/blog/python-data-types">Blog: Python Data Types</router-link>
- <router-link to="/builtin/isinstance">isinstance()</router-link>
- <router-link to="/builtin/issubclass">issubclass()</router-link>
- <router-link to="/builtin/dir">dir()</router-link>
- <router-link to="/builtin/hasattr">hasattr()</router-link>
- <router-link to="/builtin/getattr">getattr()</router-link>
- <router-link to="/builtin/delattr">delattr()</router-link>
