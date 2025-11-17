---
title: 'Python OOP の基礎 - Python チートシート'
description: 'オブジェクト指向プログラミング（OOP）は、クラスのインスタンスであるオブジェクトを中心としたプログラミングパラダイムです。OOP の原則は、オブジェクト指向的な方法でソフトウェアの設計と開発を導く基本的な概念です。Python では、クラスとオブジェクトの使用によって OOP がサポートされています。以下に Python における基本的な OOP の原則を示します。'
labUrl: 'https://labex.io/ja/labs/python-python-oop-basics-633662?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python OOP の基本
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a href="https://en.wikipedia.org/wiki/Object-oriented_programming">オブジェクト指向プログラミング</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    オブジェクト指向プログラミング（OOP）は、「オブジェクト」の概念に基づいたプログラミングパラダイムであり、オブジェクトはデータとコードを含むことができます。データはフィールド（属性やプロパティとも呼ばれる）の形で、コードはプロシージャ（メソッドとも呼ばれる）の形をとります。
  </base-disclaimer-content>
</base-disclaimer>

## カプセル化 (Encapsulation)

カプセル化は、オブジェクト指向プログラミングの基本概念の 1 つであり、オブジェクトのデータとメソッドを不正なアクセスや変更から保護するのに役立ちます。これはデータ抽象化を達成する方法であり、オブジェクトの実装詳細は外部から隠され、本質的な情報のみが公開されることを意味します。

Python では、カプセル化はアクセス修飾子を使用することで実現できます。アクセス修飾子は、クラス内の属性とメソッドのアクセシビリティを定義するキーワードです。Python で利用可能な 3 つのアクセス修飾子は、public、private、protected です。しかし、Python には Java や C++ などの他のプログラミング言語のようにアクセス修飾子を明示的に定義する方法はありません。代わりに、アクセスレベルを示すためにアンダースコアのプレフィックスを使用する慣習を採用しています。

提供されたコード例では、MyClass というクラスには、`_protected_var`と`__private_var`という 2 つの属性があります。`_protected_var`は単一のアンダースコアプレフィックスを使用して protected としてマークされています。これは、その属性がクラス内およびそのサブクラス内でアクセス可能であることを意味しますが、クラス外からはアクセスできません。`__private_var`は 2 つのアンダースコアプレフィックスを使用して private としてマークされています。これは、その属性がクラス内でのみアクセス可能であり、サブクラスであってもクラス外からはアクセスできないことを意味します。

MyClass クラスのオブジェクトを作成すると、オブジェクト名に単一のアンダースコアプレフィックスを付けて`_protected_var`属性にアクセスできます。しかし、`__private_var`属性は外部から隠されているため、オブジェクト名を使用してアクセスすることはできません。`__private_var`属性にアクセスしようとすると、コードに示されているように`AttributeError`が発生します。

要約すると、カプセル化はオブジェクト指向プログラミングにおいて重要な概念であり、オブジェクトの実装詳細を保護するのに役立ちます。Python では、アクセス修飾子を使用し、アンダースコアプレフィックスを使用してアクセスレベルを示すことでカプセル化を実現できます。

```python
# MyClass という名前のクラスを定義
class MyClass:

    # クラスオブジェクトを初期化するコンストラクタメソッド
    def __init__(self):

        # 初期値 10 を持つ protected 変数を定義
        # 変数名は単一のアンダースコアで始まるため、protected アクセスを示す
        self._protected_var = 10

        # 初期値 20 を持つ private 変数を定義
        # 変数名は 2 つのアンダースコアで始まるため、private アクセスを示す
        self.__private_var = 20

# MyClass クラスのオブジェクトを作成
obj = MyClass()

# オブジェクト名と単一のアンダースコアプレフィックスを使用して protected 変数にアクセスし、その値を出力
# protected 変数はクラス外からアクセス可能ですが、
# クラス内またはそのサブクラス内での使用を意図しています
print(obj._protected_var)   # 出力：10

# オブジェクト名を使用して private 変数にアクセスし、その値を出力しようと試みる
# private 変数はサブクラスであってもクラス外からアクセスできないため、
# クラス外からアクセスすることはできません。
# 変数がクラス外からアクセスできないため、AttributeError が発生します
print(obj.__private_var)    # AttributeError: 'MyClass' object has no attribute '__private_var'

```

## 継承 (Inheritance)

継承はコードの再利用を促進し、共通の属性とメソッドを共有するクラスの階層を作成できるようにします。関連する機能を一箇所にまとめ、モジュール性を促進することで、クリーンで整理されたコードの作成に役立ちます。新しいクラスが派生する基底クラスは親クラスとも呼ばれ、新しいクラスは子クラスまたはサブクラスとして知られています。

コードでは、名前属性でクラスオブジェクトを初期化するコンストラクタメソッドと、`speak`というメソッドを持つ Animal という名前のクラスを定義します。`speak`メソッドは Animal クラスで定義されていますが、本体はありません。

次に、Animal クラスから継承する Dog と Cat という 2 つのサブクラスを定義します。これらのサブクラスは、Animal クラスの`speak`メソッドをオーバーライドします。

名前属性を「Rover」とする Dog オブジェクトと、名前属性を「Whiskers」とする Cat オブジェクトを作成します。`dog.speak()`を使用して Dog オブジェクトの`speak`メソッドを呼び出すと、「Woof!」と出力されます。これは、Dog クラスの`speak`メソッドが Animal クラスの`speak`メソッドをオーバーライドしているためです。同様に、`cat.speak()`を使用して Cat オブジェクトの`speak`メソッドを呼び出すと、「Meow!」と出力されます。これは、Cat クラスの`speak`メソッドが Animal クラスの`speak`メソッドをオーバーライドしているためです。

```python
# Animal という名前のクラスを定義
class Animal:

    # 名前属性でクラスオブジェクトを初期化するコンストラクタメソッド
    def __init__(self, name):
        self.name = name

    # Animal クラスで定義されているが、本体を持たないメソッド
    # このメソッドは Animal のサブクラスでオーバーライドされることを意図しています
    def speak(self):
        print("")

# Animal クラスから継承する Dog という名前のサブクラスを定義
class Dog(Animal):

    # Animal クラスの speak メソッドをオーバーライド
    def speak(self):
        print("Woof!")

# Animal クラスから継承する Cat という名前のサブクラスを定義
class Cat(Animal):

    # Animal クラスの speak メソッドをオーバーライド
    def speak(self):
        print("Meow!")

# 名前属性 "Rover" を持つ Dog オブジェクトを作成
dog = Dog("Rover")

# 名前属性 "Whiskers" を持つ Cat オブジェクトを作成
cat = Cat("Whiskers")

# Dog クラスの speak メソッドを呼び出し、出力を印刷
# Dog クラスの speak メソッドは Animal クラスの speak メソッドをオーバーライドします
# したがって、Dog オブジェクトの speak メソッドを呼び出すと "Woof!" が出力されます
dog.speak()   # 出力：Woof!

# Cat クラスの speak メソッドを呼び出し、出力を印刷
# Cat クラスの speak メソッドは Animal クラスの speak メソッドをオーバーライドします
# したがって、Cat オブジェクトの speak メソッドを呼び出すと "Meow!" が出力されます
cat.speak()   # 出力：Meow!

```

## 多態性 (Polymorphism)

多態性（ポリモーフィズム）は、オブジェクト指向プログラミングにおける重要な概念であり、異なるクラスのオブジェクトに対して統一された方法で動作するコードを書くことを可能にします。Python では、多態性はメソッドのオーバーライドまたはメソッドのオーバーロードを使用することで実現されます。

メソッドのオーバーライドとは、サブクラスが親クラスですでに定義されているメソッドに対して独自のメソッド実装を提供することです。これにより、メソッドの名前やシグネチャを変更することなく、サブクラスがメソッドの動作を変更できるようになります。

メソッドのオーバーロードとは、複数のメソッドが同じ名前を持ちながら異なるパラメータを持つことです。Python はメソッドのオーバーロードを直接サポートしていませんが、デフォルト引数や可変長引数を使用することで実現できます。

多態性は、柔軟で再利用可能なコードを記述することを容易にします。これにより、特定の型を知る必要なく、さまざまなオブジェクトで動作するコードを書くことができます。

```python
# Shape クラスは、サブクラスによってオーバーライドされることを意図した抽象的な area メソッドで定義されています。
class Shape:
    def area(self):
        pass

class Rectangle(Shape):
    # Rectangle クラスは、width と height のインスタンス変数を初期化する__init__メソッドで定義されています。
    # また、width と height のインスタンス変数を使用して長方形の面積を計算して返す area メソッドも定義されています。
    def __init__(self, width, height):
        self.width = width  # width インスタンス変数を初期化
        self.height = height  # height インスタンス変数を初期化

    def area(self):
        return self.width * self.height  # 長方形の面積を返す


 # Circle クラスは、radius インスタンス変数を初期化する__init__メソッドで定義されています。
 # また、radius インスタンス変数を使用して円の面積を計算して返す area メソッドも定義されています。
class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius  # radius インスタンス変数を初期化

    def area(self):
        return 3.14 * self.radius ** 2  # 円の面積を返す (pi * r^2 を使用)

# shapes リストは、1 つの Rectangle オブジェクトと 1 つの Circle オブジェクトで作成されます。for
# ループはリスト内の各オブジェクトを反復処理し、各オブジェクトの area メソッドを呼び出します
# 出力は長方形の面積 (20) と円の面積 (153.86) になります。
shapes = [Rectangle(4, 5), Circle(7)]  # Shape オブジェクトのリストを作成
for shape in shapes:
    print(shape.area())  # 各 Shape オブジェクトの面積を出力

```

## 抽象化 (Abstraction)

抽象化は、オブジェクト指向プログラミング（OOP）において重要な概念です。なぜなら、現在のコンテキストに関連のない詳細を無視しながら、オブジェクトやシステムの必須機能に集中することを可能にするからです。複雑さを軽減し、不要な詳細を隠すことで、抽象化はコードをよりモジュール化し、読みやすく、保守しやすくすることができます。

Python では、抽象化は抽象クラスまたはインターフェースを使用することで実現できます。抽象クラスは直接インスタンス化できないクラスですが、他のクラスによってサブクラス化されることを意図しています。実装を持たない抽象メソッドを含むことが多く、サブクラスがどのように実装されるべきかのテンプレートを提供します。これにより、プログラマは関連するクラスのグループに対して共通のインターフェースを定義しつつ、各クラスが独自の特定の動作を持つことを許可します。

一方、インターフェースは、クラスが「互換性がある」と見なされるために実装しなければならないメソッドシグネチャの集合です。インターフェースは、複数のクラスが実装できる共通のメソッドセットを定義するためによく使用され、特定のコンテキストでそれらを交換可能に使用できるようにします。

Python は抽象クラスやインターフェースの組み込みサポートを持っていませんが、`abc`（abstract base class）モジュールを使用して実装できます。このモジュールは、`ABC`クラスと`abstractmethod`デコレータを提供し、これらを使用して抽象クラスとメソッドを定義できます。

全体として、抽象化はオブジェクト指向プログラミングにおける複雑さを管理し、コード品質を向上させるための強力なツールであり、Python はコード内で抽象化を達成するためのさまざまな選択肢を提供します。

```python
# abc モジュールをインポートして抽象クラスと抽象メソッドを定義
from abc import ABC, abstractmethod

# area という抽象メソッドを持つ Shape という名前の抽象クラスを定義
class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

# Shape から継承する Rectangle という名前のクラスを定義
class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    # Rectangle の area メソッドを実装
    def area(self):
        return self.width * self.height

# Shape から継承する Circle という名前のクラスも定義
class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    # Circle の area メソッドを実装
    def area(self):
        return 3.14 * self.radius ** 2

# Rectangle と Circle の両方を含む形状のリストを作成
shapes = [Rectangle(4, 5), Circle(7)]

# リスト内の各形状をループし、その面積を出力
for shape in shapes:
    print(shape.area())

```

これらは Python における基本的な OOP の原則の一部です。このページは現在作成中で、より詳細な例と説明が間もなく公開されます。

## 関連リンク

- <router-link to="/cheatsheet/functions">関数 (Functions)</router-link>
- <router-link to="/cheatsheet/decorators">デコレータ (Decorators)</router-link>
- <router-link to="/cheatsheet/exception-handling">例外処理 (Exception Handling)</router-link>
- <router-link to="/cheatsheet/dataclasses">データクラス (Dataclasses)</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/classmethod">classmethod()</router-link>
- <router-link to="/builtin/staticmethod">staticmethod()</router-link>
- <router-link to="/builtin/property">property()</router-link>
- <router-link to="/builtin/isinstance">isinstance()</router-link>
- <router-link to="/builtin/issubclass">issubclass()</router-link>
- <router-link to="/builtin/super">super()</router-link>
