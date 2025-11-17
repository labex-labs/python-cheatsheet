---
title: 'Python 組み込み関数 format() - Python チートシート'
description: 'format_spec によって制御される「整形された」表現に値を変換します。format_spec の解釈は、value 引数の型によって異なります。[...]'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python format() 組み込み関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#format">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   format_spec によって制御される、「フォーマットされた」表現に値を変換します。format_spec の解釈は、value 引数の型に依存します。[...].
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

Python の `format()` 関数は、書式設定された文字列を作成できる多用途な組み込み関数です。値を変数に埋め込み、その配置を制御し、小数点以下の桁数やパディングなどの表示を指定する方法を提供します。

<router-link to="/builtin/format">format()</router-link> 関数は、指定された値を指定された形式にフォーマットします。

## Examples

```python
name = 'Micheal'
company = 'Dunder Mifflin'

print("My name is {0} and I work for {1}.".format(name, company))

# Formatting string (faster and easier)
print(f"My name is {name} and I work for {company}.")
```

Output:

```plaintext
My name is Micheal and I work for Dunder Mifflin.
My name is Micheal and I work for Dunder Mifflin.
```

## Relevant links

- <router-link :to="'/builtin/str/'">str()</router-link>
- <router-link :to="'/cheatsheet/string-formatting'">文字列のフォーマット</router-link>
- <router-link :to="'/cheatsheet/manipulating-strings'">文字列の操作</router-link>
- <router-link :to="'/builtin/print'">print()</router-link>
