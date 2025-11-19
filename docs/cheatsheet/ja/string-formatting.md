---
title: 'Python 文字列フォーマット - Python チートシート'
description: 'Python 3.6 以降を使用している場合、文字列の f-string が文字列をフォーマットするための推奨される方法です。'
labUrl: 'https://labex.io/ja/labs/python-python-string-formatting-633667?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 文字列フォーマット
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a href="https://docs.python.org/3/library/stdtypes.html?highlight=sprintf#printf-style-string-formatting">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
    ここで説明されているフォーマット操作 (<b>% 演算子</b>) は、多くの一般的なエラーを引き起こすさまざまな癖があります [...]。新しい <a href="#formatted-string-literals-or-f-strings">フォーマット済み文字列リテラル</a> [...] を使用すると、これらのエラーを回避できます。これらの代替手段は、テキストのフォーマットに対して、より強力で柔軟性があり、拡張性の高いアプローチも提供します。
  </base-disclaimer-content>
</base-disclaimer>

## % operator

<base-warning>
  <base-warning-title>
    文字列リテラルを優先
  </base-warning-title>
  <base-warning-content>
    新しいコードでは、<code>%</code> 演算子よりも <a href="#strformat">str.format</a> または <a href="#formatted-string-literals-or-f-strings">フォーマット済み文字列リテラル</a> (Python 3.6 以降) の使用が強く推奨されます。
  </base-warning-content>
</base-warning>

```python
# % operator: 旧スタイルの文字列フォーマット (新しいコードでは非推奨)
name = 'Pete'
'Hello %s' % name  # %s = 文字列プレースホルダ
```

```output
"Hello Pete"
```

`%d` フォーマット指定子を使用して int 値を文字列に変換できます。

```python
num = 5
'I have %d apples' % num
```

```output
"I have 5 apples"
```

## str.format

Python 3 では、文字列フォーマットの新しい方法が導入され、後に Python 2.7 にバックポートされました。これにより、文字列フォーマットの構文がより規則的になります。

```python
# str.format() メソッド：モダンな文字列フォーマット (Python 2.7 以降)
name = 'John'
age = 20

"Hello I'm {}, my age is {}".format(name, age)  # {} = プレースホルダ
```

```output
"Hello I'm John, my age is 20"
```

```python
"Hello I'm {0}, my age is {1}".format(name, age)
```

```output
"Hello I'm John, my age is 20"
```

## Formatted String Literals or f-Strings

Python 3.6 以降を使用している場合、文字列の `f-Strings` が文字列をフォーマットするための推奨される方法です。

<base-disclaimer>
  <base-disclaimer-title>
    <a href="https://docs.python.org/3/reference/lexical_analysis.html#f-strings">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
    フォーマット済み文字列リテラル、または f-string は、<code>f</code> または <code>F</code> でプレフィックスが付けられた文字列リテラルです。これらの文字列には、波括弧 {} で区切られた式である置換フィールドを含めることができます。他の文字列リテラルは常に定数値を持つ一方、フォーマット済み文字列は実行時に評価される実際の式です。
  </base-disclaimer-content>
</base-disclaimer>

```python
# f-string: 文字列をフォーマットするための推奨される方法 (Python 3.6 以降)
name = 'Elizabeth'
f'Hello {name}!'  # f プレフィックスにより {} 内に式を含めることができる
```

```output
'Hello Elizabeth!'
```

インライン計算を行うことさえ可能です。

```python
# f-strings は式をサポート：{} 内に計算を含めることができる
a = 5
b = 10
f'Five plus ten is {a + b} and not {2 * (a + b)}.'  # 式を評価する
```

```output
'Five plus ten is 15 and not 30.'
```

### Multiline f-Strings

```python
name = 'Robert'
messages = 12
(
f'Hi, {name}. '
f'You have {messages} unread messages'
)
```

```output
'Hi, Robert. You have 12 unread messages'
```

### The `=` specifier

これは式とその値を出力します。

```python
# = 指定子：変数名とその両方を出力 (Python 3.8 以降)
from datetime import datetime
now = datetime.now().strftime("%b/%d/%Y - %H:%M:%S")
f'date and time: {now=}'  # "now='Nov/14/2022 - 20:50:01'" と出力される
```

```output
"date and time: now='Nov/14/2022 - 20:50:01'"
```

### スペースまたは文字の追加

```python
name = 'Robert'
f"{name.upper() = :-^20}"
```

```output
'name.upper() = -------ROBERT-------'
```

```python
f"{name.upper() = :^20}"
```

```output
'name.upper() =        ROBERT       '
```

```python
f"{name.upper() = :20}"
```

```output
'name.upper() = ROBERT              '
```

## Formatting Digits

桁区切り文字の追加

```python
a = 10000000
f"{a:,}"
```

```output
'10,000,000'
```

丸め処理

```python
a = 3.1415926
f"{a:.2f}"
```

```output
'3.14'
```

パーセンテージとして表示

```python
a = 0.816562
f"{a:.2%}"
```

```output
'81.66%'
```

### 数値フォーマットの表

| 数値       | フォーマット | 出力      | 説明                                                |
| ---------- | ------------ | --------- | --------------------------------------------------- |
| 3.1415926  | {:.2f}       | 3.14      | 浮動小数点数を小数点以下 2 桁でフォーマット         |
| 3.1415926  | {:+.2f}      | +3.14     | 符号付き浮動小数点数を小数点以下 2 桁でフォーマット |
| -1         | {:+.2f}      | -1.00     | 符号付き浮動小数点数を小数点以下 2 桁でフォーマット |
| 2.71828    | {:.0f}       | 3         | 浮動小数点数を小数点以下 0 桁でフォーマット         |
| 4          | {:0>2d}      | 04        | ゼロでパディング (左詰め、幅 2)                     |
| 4          | {:x<4d}      | 4xxx      | x でパディング (右詰め、幅 4)                       |
| 10         | {:x<4d}      | 10xx      | x でパディング (右詰め、幅 4)                       |
| 1000000    | {:,}         | 1,000,000 | カンマ区切りでの数値フォーマット                    |
| 0.35       | {:.2%}       | 35.00%    | パーセンテージのフォーマット                        |
| 1000000000 | {:.2e}       | 1.00e+09  | 指数表記                                            |
| 11         | {:11d}       | 11        | 右寄せ (デフォルト、幅 10)                          |
| 11         | {:<11d}      | 11        | 左寄せ (幅 10)                                      |
| 11         | {:^11d}      | 11        | 中央揃え (幅 10)                                    |

## Template Strings

よりシンプルで機能が少ないメカニズムですが、ユーザーによって生成された文字列を扱う場合には推奨されます。複雑さが低いため、テンプレート文字列はより安全な選択肢となります。

```python
from string import Template
name = 'Elizabeth'
t = Template('Hey $name!')
t.substitute(name=name)
```

```output
'Hey Elizabeth!'
```

## 関連リンク

- <router-link to="/cheatsheet/manipulating-strings">文字列の操作</router-link>
- <router-link to="/blog/python-data-types">Python データ型ブログ投稿</router-link>
- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/print">print()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
- <router-link to="/builtin/ascii">ascii()</router-link>
