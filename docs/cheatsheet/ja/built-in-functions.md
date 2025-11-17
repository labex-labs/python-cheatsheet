---
title: 'Python 組み込み関数 - Python チートシート'
description: 'Python インタープリタには、常に利用可能な多数の関数と型が組み込まれています。'
labUrl: 'https://labex.io/ja/labs/python-python-built-in-functions-633648?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python 組み込み関数
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Python インタープリタには、常に利用可能な多数の関数と型が組み込まれています。

## Python 組み込み関数

| 関数                                                                 | 説明                                                                              |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| <router-link to='/builtin/abs'>abs()</router-link>                   | 数値の絶対値を返します。                                                          |
| <router-link to='/builtin/aiter'>aiter()</router-link>               | 非同期イテラブルの非同期イテレータを返します。                                    |
| <router-link to='/builtin/all'>all()</router-link>                   | イテラブルのすべての要素が真であれば True を返します。                            |
| <router-link to='/builtin/any'>any()</router-link>                   | イテラブルのいずれかの要素が真であれば True を返します。                          |
| <router-link to='/builtin/ascii'>ascii()</router-link>               | オブジェクトの印刷可能な表現を持つ文字列を返します。                              |
| <router-link to='/builtin/bin'>bin()</router-link>                   | 整数をバイナリ文字列に変換します。                                                |
| <router-link to='/builtin/bool'>bool()</router-link>                 | ブール値を返します。                                                              |
| <router-link to='/builtin/breakpoint'>breakpoint()</router-link>     | コールサイトでデバッガにドロップします。                                          |
| <router-link to='/builtin/bytearray'>bytearray()</router-link>       | 新しいバイト配列を返します。                                                      |
| <router-link to='/builtin/bytes'>bytes()</router-link>               | 新しい「bytes」オブジェクトを返します。                                           |
| <router-link to='/builtin/callable'>callable()</router-link>         | オブジェクト引数が呼び出し可能であれば True を、そうでなければ False を返します。 |
| <router-link to='/builtin/chr'>chr()</router-link>                   | 文字を表す文字列を返します。                                                      |
| <router-link to='/builtin/classmethod'>classmethod()</router-link>   | メソッドをクラスメソッドに変換します。                                            |
| <router-link to='/builtin/compile'>compile()</router-link>           | ソースをコードオブジェクトまたは AST オブジェクトにコンパイルします。             |
| <router-link to='/builtin/complex'>complex()</router-link>           | 値 real + imag\*1j を持つ複素数を返します。                                       |
| <router-link to='/builtin/delattr'>delattr()</router-link>           | オブジェクトが許可する場合、指定された属性を削除します。                          |
| <router-link to='/builtin/dict'>dict()</router-link>                 | 新しい辞書を作成します。                                                          |
| <router-link to='/builtin/dir'>dir()</router-link>                   | 現在のローカルスコープ内の名前のリストを返します。                                |
| <router-link to='/builtin/divmod'>divmod()</router-link>             | 商と剰余からなるペアの数値を返します。                                            |
| <router-link to='/builtin/enumerate'>enumerate()</router-link>       | 列挙オブジェクトを返します。                                                      |
| <router-link to='/builtin/eval'>eval()</router-link>                 | 式を評価および実行します。                                                        |
| <router-link to='/builtin/exec'>exec()</router-link>                 | この関数は動的な Python コードの実行をサポートします。                            |
| <router-link to='/builtin/filter'>filter()</router-link>             | イテラブルからイテレータを構築し、真のものを返します。                            |
| <router-link to='/builtin/float'>float()</router-link>               | 数値または文字列から浮動小数点数を返します。                                      |
| <router-link to='/builtin/format'>format()</router-link>             | 値を「フォーマットされた」表現に変換します。                                      |
| <router-link to='/builtin/frozenset'>frozenset()</router-link>       | 新しい frozenset オブジェクトを返します。                                         |
| <router-link to='/builtin/getattr'>getattr()</router-link>           | オブジェクトの指定された属性の値を返します。                                      |
| <router-link to='/builtin/globals'>globals()</router-link>           | 現在のモジュール名前空間を実装する辞書を返します。                                |
| <router-link to='/builtin/hasattr'>hasattr()</router-link>           | オブジェクトが指定された属性を持つ場合は True を返します。                        |
| <router-link to='/builtin/hash'>hash()</router-link>                 | オブジェクトのハッシュ値を返します。                                              |
| <router-link to='/builtin/help'>help()</router-link>                 | 組み込みヘルプシステムを呼び出します。                                            |
| <router-link to='/builtin/hex'>hex()</router-link>                   | 整数を小文字の 16 進数文字列に変換します。                                        |
| <router-link to='/builtin/id'>id()</router-link>                     | オブジェクトの「ID」を返します。                                                  |
| <router-link to='/builtin/input'>input()</router-link>               | 入力を受け取り、それを文字列に変換します。                                        |
| <router-link to='/builtin/int'>int()</router-link>                   | 数値または文字列から整数オブジェクトを構築して返します。                          |
| <router-link to='/builtin/isinstance'>isinstance()</router-link>     | オブジェクト引数がオブジェクトのインスタンスである場合は True を返します。        |
| <router-link to='/builtin/issubclass'>issubclass()</router-link>     | classinfo のサブクラスである場合は True を返します。                              |
| <router-link to='/builtin/iter'>iter()</router-link>                 | イテレータオブジェクトを返します。                                                |
| <router-link to='/builtin/len'>len()</router-link>                   | オブジェクトの長さ（アイテム数）を返します。                                      |
| <router-link to='/builtin/list'>list()</router-link>                 | 関数ではなく、ミュータブルなシーケンス型です。                                    |
| <router-link to='/builtin/locals'>locals()</router-link>             | 現在のローカルシンボルテーブルを更新して辞書を返します。                          |
| <router-link to='/builtin/map'>map()</router-link>                   | 関数をイテラブルのすべてのアイテムに適用するイテレータを返します。                |
| <router-link to='/builtin/max'>max()</router-link>                   | イテラブル内の最大アイテムを返します。                                            |
| <router-link to='/builtin/min'>min()</router-link>                   | イテラブル内の最小アイテムを返します。                                            |
| <router-link to='/builtin/next'>next()</router-link>                 | イテレータから次のアイテムを取得します。                                          |
| <router-link to='/builtin/object'>object()</router-link>             | 新しい特徴のないオブジェクトを返します。                                          |
| <router-link to='/builtin/oct'>oct()</router-link>                   | 整数を 8 進数文字列に変換します。                                                 |
| <router-link to='/builtin/open'>open()</router-link>                 | ファイルを開き、対応するファイルオブジェクトを返します。                          |
| <router-link to='/builtin/ord'>ord()</router-link>                   | 文字の Unicode コードポイントを表す整数を返します。                               |
| <router-link to='/builtin/pow'>pow()</router-link>                   | base を exp の累乗で返します。                                                    |
| <router-link to='/builtin/print'>print()</router-link>               | テキストストリームファイルにオブジェクトを出力します。                            |
| <router-link to='/builtin/property'>property()</router-link>         | プロパティ属性を返します。                                                        |
| <router-link to='/builtin/repr'>repr()</router-link>                 | オブジェクトの印刷可能な表現を含む文字列を返します。                              |
| <router-link to='/builtin/reversed'>reversed()</router-link>         | 逆順イテレータを返します。                                                        |
| <router-link to='/builtin/round'>round()</router-link>               | 小数点以下 ndigits の精度に丸められた数値を返します。                             |
| <router-link to='/builtin/set'>set()</router-link>                   | 新しい set オブジェクトを返します。                                               |
| <router-link to='/builtin/setattr'>setattr()</router-link>           | これは getattr() のカウンターパートです。                                         |
| <router-link to='/builtin/slice'>slice()</router-link>               | インデックスのセットを表すスライスオブジェクトを返します。                        |
| <router-link to='/builtin/sorted'>sorted()</router-link>             | イテラブルから新しいソートされたリストを返します。                                |
| <router-link to='/builtin/staticmethod'>staticmethod()</router-link> | メソッドをスタティックメソッドに変換します。                                      |
| <router-link to='/builtin/str'>str()</router-link>                   | オブジェクトの str バージョンを返します。                                         |
| <router-link to='/builtin/sum'>sum()</router-link>                   | start とイテラブルのアイテムを合計します。                                        |
| <router-link to='/builtin/super'>super()</router-link>               | 親または兄弟へのメソッド呼び出しを委任するプロキシオブジェクトを返します。        |
| <router-link to='/builtin/tuple'>tuple()</router-link>               | 関数ではなく、イミュータブルなシーケンス型です。                                  |
| <router-link to='/builtin/type'>type()</router-link>                 | オブジェクトの型を返します。                                                      |
| <router-link to='/builtin/vars'>vars()</router-link>                 | 辞書属性を持つ他のオブジェクトについても辞書属性を返します。                      |
| <router-link to='/builtin/zip'>zip()</router-link>                   | 複数のイテラブルを並行して反復処理します。                                        |
| <router-link to='/builtin/import'>**import**()</router-link>         | この関数は import ステートメントによって呼び出されます。                          |
