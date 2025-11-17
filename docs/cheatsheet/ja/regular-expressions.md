---
title: 'Python 正規表現 - Python チートシート'
description: '正規表現（Regex）は、テキスト内の検索パターンを指定する一連の文字であり、文字列検索アルゴリズムで使用されます。'
labUrl: 'https://labex.io/ja/labs/python-python-regular-expressions-633664?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
正規表現
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://en.wikipedia.org/wiki/Regular_expression">正規表現</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    正規表現（regex と略される）は、テキスト内の検索パターンを指定する一連の文字です。[...] 文字列に対する「検索」または「検索と置換」操作、あるいは入力検証のための文字列検索アルゴリズムによって使用されます。
  </base-disclaimer-content>
</base-disclaimer>

1. `import re` で regex モジュールをインポートします。
2. `re.compile()` 関数で Regex オブジェクトを作成します。（raw string を使用することを忘れないでください。）
3. 検索したい文字列を Regex オブジェクトの `search()` メソッドに渡します。これにより `Match` オブジェクトが返されます。
4. Match オブジェクトの `group()` メソッドを呼び出して、実際に一致したテキストの文字列を取得します。

Python のすべての regex 関数は re モジュール内にあります。

```python
# 正規表現操作のために re モジュールをインポート
import re
```

## Regex シンボル

| シンボル                         | 一致するもの                                       |
| :------------------------------- | :------------------------------------------------- |
| `?`                              | 直前のグループの 0 回または 1 回。                 |
| `*`                              | 直前のグループの 0 回以上。                        |
| `+`                              | 直前のグループの 1 回以上。                        |
| `{n}`                            | 直前のグループのちょうど n 回。                    |
| `{n,}`                           | 直前のグループの n 回以上。                        |
| `{,m}`                           | 直前のグループの 0 回から m 回。                   |
| `{n,m}`                          | 直前のグループの少なくとも n 回、最大 m 回。       |
| `{n,m}?` または `*?` または `+?` | 直前のパターンの非貪欲マッチを実行します。         |
| `^spam`                          | 文字列が spam で始まる必要があることを意味します。 |
| `spam$`                          | 文字列が spam で終わる必要があることを意味します。 |
| `.`                              | 改行文字を除く任意の 1 文字。                      |
| `\d`, `\w`, `\s`                 | それぞれ、数字、単語、またはスペース文字。         |
| `\D`, `\W`, `\S`                 | それぞれ、数字、単語、またはスペース以外のすべて。 |
| `[abc]`                          | ブラケット間にある任意の文字（a、b、など）。       |
| `[^abc]`                         | ブラケット間にない任意の文字。                     |

## Regex オブジェクトのマッチング

```python
# re.compile(): regex パターンオブジェクトを作成（エスケープを避けるために raw string r'' を使用）
phone_num_regex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d')  # パターン：3 桁 -3 桁 -4 桁

mo = phone_num_regex.search('My number is 415-555-4242.')  # パターンを検索

print(f'Phone number found: {mo.group()}')  # group() は一致したテキストを返す
```

出力：

```plaintext
Phone number found: 415-555-4242
```

## 丸括弧によるグループ化

```python
# 丸括弧はグループを作成します：group(1) は最初のグループを返し、group(2) は 2 番目のグループを返します
phone_num_regex = re.compile(r'(\d\d\d)-(\d\d\d-\d\d\d\d)')  # 丸括弧で 2 つのグループ
mo = phone_num_regex.search('My number is 415-555-4242.')

mo.group(1)  # 最初のグループを返す：'415'
```

出力：

```plaintext
'415'
```

```python
mo.group(2)
```

出力：

```plaintext
'555-4242'
```

```python
mo.group(0)
```

出力：

```plaintext
'415-555-4242'
```

```python
mo.group()
```

出力：

```plaintext
'415-555-4242'
```

すべてのグループを一度に取得するには、`groups()` メソッドを使用します。

```python
# groups(): すべてのグループのタプルを返す
mo.groups()  # ('415', '555-4242') を返す
```

出力：

```plaintext
('415', '555-4242')
```

```python
area_code, main_number = mo.groups()

print(area_code)
```

出力：

```plaintext
415
```

```python
print(main_number)
```

出力：

```plaintext
555-4242
```

## パイプによる複数グループ

`|` 文字を使用して、一致させたい複数の式のいずれかを指定できます。

```python
hero_regex = re.compile (r'Batman|Tina Fey')

mo1 = hero_regex.search('Batman and Tina Fey.')
mo1.group()
```

出力：

```plaintext
'Batman'
```

```python
mo2 = hero_regex.search('Tina Fey and Batman.')
mo2.group()
```

出力：

```plaintext
'Tina Fey'
```

パイプを使用して、正規表現の一部として複数のパターンのいずれかに一致させることもできます。

```python
bat_regex = re.compile(r'Bat(man|mobile|copter|bat)')
mo = bat_regex.search('Batmobile lost a wheel')

mo.group()
```

出力：

```plaintext
'Batmobile'
```

```python
mo.group(1)
```

出力：

```plaintext
'mobile'
```

## 疑問符によるオプションのマッチング

`?` 文字は、直前のグループをパターンのオプション部分としてフラグ付けします。

```python
bat_regex = re.compile(r'Bat(wo)?man')

mo1 = bat_regex.search('The Adventures of Batman')
mo1.group()
```

出力：

```plaintext
'Batman'
```

```python
mo2 = bat_regex.search('The Adventures of Batwoman')
mo2.group()
```

出力：

```plaintext
'Batwoman'
```

## スターによる 0 回以上のマッチング

`*`（スターまたはアスタリスク）は「0 回以上一致」を意味します。スターの直前のグループは、テキスト内で何回出現しても構いません。

```python
bat_regex = re.compile(r'Bat(wo)*man')
mo1 = bat_regex.search('The Adventures of Batman')
mo1.group()
```

出力：

```plaintext
'Batman'
```

```python
mo2 = bat_regex.search('The Adventures of Batwoman')
mo2.group()
```

出力：

```plaintext
'Batwoman'
```

```python
mo3 = bat_regex.search('The Adventures of Batwowowowoman')
mo3.group()
```

出力：

```plaintext
'Batwowowowoman'
```

## プラスによる 1 回以上のマッチング

`+`（またはプラス）は「1 回以上一致」を意味します。プラスの直前のグループは、少なくとも 1 回出現する必要があります。

```python
bat_regex = re.compile(r'Bat(wo)+man')

mo1 = bat_regex.search('The Adventures of Batwoman')
mo1.group()
```

出力：

```plaintext
'Batwoman'
```

```python
mo2 = bat_regex.search('The Adventures of Batwowowowoman')
mo2.group()
```

出力：

```plaintext
'Batwowowowoman'
```

```python
mo3 = bat_regex.search('The Adventures of Batman')
mo3 is None
```

出力：

```plaintext
True
```

## 波括弧による特定回数のマッチング

グループを指定された回数だけ繰り返したい場合は、正規表現内のグループの直後に波括弧で囲んだ数値を続けます。

```python
ha_regex = re.compile(r'(Ha){3}')

mo1 = ha_regex.search('HaHaHa')
mo1.group()
```

出力：

```plaintext
'HaHaHa'
```

```python
mo2 = ha_regex.search('Ha')
mo2 is None
```

出力：

```plaintext
True
```

1 つの数値の代わりに、波括弧の間に最小値と最大値を指定して範囲を指定できます。たとえば、正規表現 `(Ha){3,5}` は 'HaHaHa'、'HaHaHaHa'、および 'HaHaHaHaHa' に一致します。

```python
ha_regex = re.compile(r'(Ha){2,3}')
mo1 = ha_regex.search('HaHaHaHa')
mo1.group()
```

出力：

```plaintext
'HaHaHa'
```

## 貪欲マッチと非貪欲マッチ

Python の正規表現はデフォルトで貪欲です。曖昧な状況では、可能な限り長い文字列に一致させようとします。波括弧の非貪欲バージョン（可能な限り短い文字列に一致）は、閉じ波括弧の後に疑問符を付けます。

```python
greedy_ha_regex = re.compile(r'(Ha){3,5}')

mo1 = greedy_ha_regex.search('HaHaHaHaHa')
mo1.group()
```

出力：

```plaintext
'HaHaHaHaHa'
```

```python
non_greedy_ha_regex = re.compile(r'(Ha){3,5}?')
mo2 = non_greedy_ha_regex.search('HaHaHaHaHa')
mo2.group()
```

出力：

```plaintext
'HaHaHa'
```

## findall() メソッド

`findall()` メソッドは、検索された文字列内のすべての一致の文字列を返します。

```python
phone_num_regex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d') # グループなし
phone_num_regex.findall('Cell: 415-555-9999 Work: 212-555-0000')
```

出力：

```plaintext
['415-555-9999', '212-555-0000']
```

## 独自の文字クラスの作成

角括弧を使用して独自の文字クラスを定義できます。たとえば、文字クラス `[aeiouAEIOU]` は、小文字と大文字の母音のいずれかに一致します。

```python
vowel_regex = re.compile(r'[aeiouAEIOU]')
vowel_regex.findall('Robocop eats baby food. BABY FOOD.')
```

出力：

```plaintext
['o', 'o', 'o', 'e', 'a', 'a', 'o', 'o', 'A', 'O', 'O']
```

ハイフンを使用して文字または数字の範囲を含めることもできます。たとえば、文字クラス `[a-zA-Z0-9]` は、すべて小文字、大文字、および数字に一致します。

文字クラスの開始ブラケットの直後にキャレット文字 (`^`) を配置すると、文字クラスに含まれていないすべての文字に一致する否定文字クラスを作成できます。

```python
consonant_regex = re.compile(r'[^aeiouAEIOU]')
consonant_regex.findall('Robocop eats baby food. BABY FOOD.')
```

出力：

```plaintext
['R', 'b', 'c', 'p', ' ', 't', 's', ' ', 'b', 'b', 'y', ' ', 'f', 'd', '.', ' ', 'B', 'B', 'Y', ' ', 'F', 'D', '.']
```

## キャレットとドル記号の文字

- 正規表現の先頭にキャレットシンボル `^` を使用して、検索テキストの先頭で一致が発生する必要があることを示すことができます。

- 同様に、正規表現の末尾にドル記号 `$` を配置すると、文字列がこの正規表現パターンで終了する必要があることを示します。

- そして、`^` と `$` を一緒に使用して、文字列全体が正規表現に一致する必要があることを示します。

正規表現文字列 `r'^Hello'` は 'Hello' で始まる文字列に一致します。

```python
begins_with_hello = re.compile(r'^Hello')
begins_with_hello.search('Hello world!')
```

出力：

```plaintext
<_sre.SRE_Match object; span=(0, 5), match='Hello'>
```

```python
begins_with_hello.search('He said hello.') is None
```

出力：

```plaintext
True
```

正規表現文字列 `r'\d\$'` は、0 から 9 までの数値で終わる文字列に一致します。

```python
whole_string_is_num = re.compile(r'^\d+$')

whole_string_is_num.search('1234567890')
```

出力：

```plaintext
<_sre.SRE_Match object; span=(0, 10), match='1234567890'>
```

```python
whole_string_is_num.search('12345xyz67890') is None
```

出力：

```plaintext
True
```

```python
whole_string_is_num.search('12 34567890') is None
```

出力：

```plaintext
True
```

## ワイルドカード文字

正規表現の `.`（ドット）文字は、改行を除く任意の文字に一致します。

```python
at_regex = re.compile(r'.at')

at_regex.findall('The cat in the hat sat on the flat mat.')
```

出力：

```plaintext
['cat', 'hat', 'sat', 'lat', 'mat']
```

## ドットスターによるすべての一致

```python
name_regex = re.compile(r'First Name: (.*) Last Name: (.*)')

mo = name_regex.search('First Name: Al Last Name: Sweigart')
mo.group(1)
```

出力：

```plaintext
'Al'
```

```python
mo.group(2)
```

出力：

```plaintext
'Sweigart'
```

`.*` は貪欲モードを使用します。常に可能な限り多くのテキストに一致させようとします。あらゆるテキストを非貪欲に一致させるには、ドット、スター、疑問符 (`.*?`) を使用します。疑問符は Python に非貪欲に一致させるように指示します。

```python
non_greedy_regex = re.compile(r'<.*?>')
mo = non_greedy_regex.search('<To serve man> for dinner.>')
mo.group()
```

出力：

```plaintext
'<To serve man>'
```

```python
greedy_regex = re.compile(r'<.*>')
mo = greedy_regex.search('<To serve man> for dinner.>')
mo.group()
```

出力：

```plaintext
'<To serve man> for dinner.>'
```

## ドット文字による改行のマッチング

ドットスターは改行を除くすべてに一致します。`re.compile()` の 2 番目の引数として `re.DOTALL` を渡すことで、ドット文字が改行文字を含むすべての文字に一致するようにできます。

```python
no_newline_regex = re.compile('.*')
no_newline_regex.search('Serve the public trust.\nProtect the innocent.\nUphold the law.').group()
```

出力：

```plaintext
'Serve the public trust.'
```

```python
newline_regex = re.compile('.*', re.DOTALL)
newline_regex.search('Serve the public trust.\nProtect the innocent.\nUphold the law.').group()
```

出力：

```plaintext
'Serve the public trust.\nProtect the innocent.\nUphold the law.'
```

## 大文字と小文字を区別しないマッチング

正規表現を大文字と小文字を区別しないようにするには、`re.compile()` の 2 番目の引数として `re.IGNORECASE` または `re.I` 変数を渡すことができます。

```python
robocop = re.compile(r'robocop', re.I)

robocop.search('Robocop is part man, part machine, all cop.').group()
```

出力：

```plaintext
'Robocop'
```

```python
robocop.search('ROBOCOP protects the innocent.').group()
```

出力：

```plaintext
'ROBOCOP'
```

```python
robocop.search('Al, why does your programming book talk about robocop so much?').group()
```

出力：

```plaintext
'robocop'
```

## sub() メソッドによる文字列の置換

Regex オブジェクトの `sub()` メソッドには 2 つの引数が渡されます。

1. 最初の引数は、一致したものを置き換える文字列です。
2. 2 番目は、正規表現の文字列です。

`sub()` メソッドは、置換が適用された文字列を返します。

```python
names_regex = re.compile(r'Agent \w+')

names_regex.sub('CENSORED', 'Agent Alice gave the secret documents to Agent Bob.')
```

出力：

```plaintext
'CENSORED gave the secret documents to CENSORED.'
```

## 複雑な Regex の管理

`re.compile()` 関数に、正規表現文字列内の空白文字とコメントを無視するように指示するには、「verbose モード」を有効にできます。これは、`re.compile()` の 2 番目の引数として変数 `re.VERBOSE` を渡すことで実行できます。

次のような読みにくい正規表現の代わりに。

```python
phone_regex = re.compile(r'((\d{3}|\(\d{3}\))?(\s|-|\.)?\d{3}(\s|-|\.)\d{4}(\s*(ext|x|ext.)\s*\d{2,5})?)')
```

次のように、コメント付きで正規表現を複数行にわたって記述できます。

```python
phone_regex = re.compile(r'''(
    (\d{3}|\(\d{3}\))?            # 市外局番
    (\s|-|\.)?                    # 区切り文字
    \d{3}                         # 最初の 3 桁
    (\s|-|\.)                     # 区切り文字
    \d{4}                         # 最後の 4 桁
    (\s*(ext|x|ext.)\s*\d{2,5})?  # 内線番号
    )''', re.VERBOSE)
```

## 関連リンク

- <router-link to="/cheatsheet/manipulating-strings">文字列の操作</router-link>
- <router-link to="/cheatsheet/string-formatting">文字列のフォーマット</router-link>
- <router-link to="/blog/python-data-types">Python データ型ブログ投稿</router-link>
- <router-link to="/builtin/compile">compile()</router-link>
