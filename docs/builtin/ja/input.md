---
title: 'Python 組み込み関数 input() - Python チートシート'
description: 'プロンプト引数が存在する場合、末尾の改行なしで標準出力に書き込まれます。その後、入力から 1 行を読み取り、文字列に変換し（末尾の改行を削除）、それを返します。EOF が読み込まれると、EOFError が送出されます。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python input() ビルトイン関数
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#input">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
   プロンプト引数が存在する場合、それは末尾の改行なしで標準出力に書き込まれます。次に、関数は入力から一行を読み取り、それを文字列に変換し（末尾の改行を削除）、それを返します。EOF が読み込まれると、EOFError が発生します。
  </base-disclaimer-content>
</base-disclaimer>

## 導入

Python の `input()` 関数は、ユーザーのキーボードから一行のテキストを読み取ることを可能にするビルトイン関数です。これは、プログラムの実行を一時停止し、ユーザーからの入力を待つため、対話型アプリケーションを作成するための不可欠なツールです。この関数は、ユーザーに入力を促すためのプロンプトを表示することもできます。

## 例

この関数は、ユーザーからの入力を受け取り、それを文字列に変換します。

```python
# 名前を尋ねる
print('What is your name?')
my_name = input()
print('Hi, {}'.format(my_name))
```

```output
What is your name?
Martha
Hi, Martha
```

`input()` は `print()` を使用せずにデフォルトメッセージを設定することもできます。

```python
# デフォルトメッセージ
my_name = input('What is your name? ')
print('Hi, {}'.format(my_name))
```

```output
What is your name? Martha
Hi, Martha
```

## 関連リンク

- <router-link :to="'/builtin/print'">print()</router-link>
- <router-link :to="'/builtin/str'">str()</router-link>
- <router-link :to="'/builtin/int'">int()</router-link>
- <router-link :to="'/builtin/float'">float()</router-link>
- <router-link :to="'/cheatsheet/string-formatting'">文字列のフォーマット</router-link>
- <router-link :to="'/cheatsheet/manipulating-strings'">文字列の操作</router-link>
