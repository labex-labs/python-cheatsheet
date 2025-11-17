---
title: 'Python OOP 基础 - Python 速查表'
description: '面向对象编程 (OOP) 是一种围绕对象（类实例）概念的编程范式。OOP 原则是指导软件以面向对象方式设计和开发的基本概念。在 Python 中，通过使用类和对象来支持 OOP。以下是 Python 中一些基本的 OOP 原则'
labUrl: 'https://labex.io/zh/labs/python-python-oop-basics-633662?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python OOP 基础 - Python 速查表
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a href="https://en.wikipedia.org/wiki/Object-oriented_programming">面向对象编程</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    面向对象编程（OOP）是一种基于“对象”概念的编程范例，对象可以包含数据和代码。数据以字段（通常称为属性或特性）的形式存在，代码以过程（通常称为方法）的形式存在。
  </base-disclaimer-content>
</base-disclaimer>

## 封装 (Encapsulation)

封装是面向对象编程的基本概念之一，它有助于保护对象的**数据和方法**免受未经授权的访问和修改。这是一种实现**数据抽象**的方式，意味着对象的实现细节对外部世界是隐藏的，只暴露必要的信息。

在 Python 中，可以通过使用**访问修饰符**来实现封装。访问修饰符是定义类中属性和方法可访问性的关键字。Python 中有三种可用的访问修饰符：**公有 (public)**、**私有 (private)** 和**保护 (protected)**。然而，与 Java 和 C++ 等其他编程语言不同，Python 没有明确定义访问修饰符的方式。相反，它使用**下划线前缀**的约定来指示访问级别。

在给定的代码示例中，`MyClass` 类有两个属性：`_protected_var` 和 `__private_var`。`_protected_var` 通过使用**单个下划线前缀**标记为**保护**。这意味着该属性可以在类及其子类中访问，但不能在类外部访问。`__private_var` 通过使用**双下划线前缀**标记为**私有**。这意味着该属性只能在类内部访问，不能在类外部访问，甚至不能在子类中访问。

当我们创建 `MyClass` 类的一个对象时，我们可以使用带有**单个下划线前缀**的对象名称来访问 `_protected_var` 属性。但是，我们不能使用对象名称访问 `__private_var` 属性，因为它对外部世界是隐藏的。如果我们尝试访问 `__private_var` 属性，我们将收到一个 `AttributeError`，如代码所示。

总之，封装是面向对象编程中的一个重要概念，有助于保护对象的实现细节。在 Python 中，我们可以通过使用访问修饰符和使用下划线前缀来指示访问级别来实现封装。

```python
# 定义一个名为 MyClass 的类
class MyClass:

    # 构造函数，用于初始化类对象
    def __init__(self):

        # 定义一个初始值为 10 的保护变量
        # 变量名以单个下划线开头，表示保护访问
        self._protected_var = 10

        # 定义一个初始值为 20 的私有变量
        # 变量名以双下划线开头，表示私有访问
        self.__private_var = 20

# 创建 MyClass 类的一个对象
obj = MyClass()

# 使用对象名称和单个下划线前缀访问保护变量并打印其值
# 保护变量可以在类外部访问，但它旨在在类或其子类内部使用
print(obj._protected_var)   # 输出：10

# 尝试使用对象名称访问私有变量并打印其值
# 私有变量不能在类外部访问，即使是子类也不能
# 这将引发 AttributeError，因为该变量在类外部不可访问
print(obj.__private_var)    # AttributeError: 'MyClass' object has no attribute '__private_var'

```

## 继承 (Inheritance)

继承**促进代码重用**，并允许您创建共享常见属性和方法的**类层次结构**。它通过将相关功能集中在一个地方并**促进模块化**的概念，有助于创建清晰、有组织的 कोड。从新类派生的基类也称为**父类**，新类称为**子类**或**派生类**。

在代码中，我们定义了一个名为 `Animal` 的类，它有一个构造函数方法，用 `name` 属性初始化类对象，以及一个名为 `speak` 的方法。`speak` 方法在 `Animal` 类中定义，但**没有主体**。

然后，我们定义了两个继承自 `Animal` 类的子类：`Dog` 和 `Cat`。这些子类**覆盖**了 `Animal` 类的 `speak` 方法。

我们创建了一个 `name` 属性为 "Rover" 的 `Dog` 对象和一个 `name` 属性为 "Whiskers" 的 `Cat` 对象。我们使用 `dog.speak()` 调用 `Dog` 对象的 `speak` 方法，它打印 "Woof!"，因为 `Dog` 类的 `speak` 方法覆盖了 `Animal` 类的 `speak` 方法。类似地，我们使用 `cat.speak()` 调用 `Cat` 对象的 `speak` 方法，它打印 "Meow!"，因为 `Cat` 类的 `speak` 方法覆盖了 `Animal` 类的 `speak` 方法。

```python
# 定义一个名为 Animal 的类
class Animal:

    # 构造函数，用 name 属性初始化类对象
    def __init__(self, name):
        self.name = name

    # 在 Animal 类中定义但没有主体的方
    # 此方法将在 Animal 的子类中被覆盖
    def speak(self):
        print("")

# 定义一个继承自 Animal 类的子类 Dog
class Dog(Animal):

    # 覆盖 Animal 类的 speak 方法
    def speak(self):
        print("Woof!")

# 定义一个继承自 Animal 类的子类 Cat
class Cat(Animal):

    # 覆盖 Animal 类的 speak 方法
    def speak(self):
        print("Meow!")

# 创建一个 name 属性为 "Rover" 的 Dog 对象
dog = Dog("Rover")

# 创建一个 name 属性为 "Whiskers" 的 Cat 对象
cat = Cat("Whiskers")

# 调用 Dog 类的 speak 方法并打印输出
# Dog 类的 speak 方法覆盖了 Animal 类的 speak 方法
# 因此，当我们调用 Dog 对象的 speak 方法时，它将打印 "Woof!"
dog.speak()   # 输出：Woof!

# 调用 Cat 类的 speak 方法并打印输出
# Cat 类的 speak 方法覆盖了 Animal 类的 speak 方法
# 因此，当我们调用 Cat 对象的 speak 方法时，它将打印 "Meow!"
cat.speak()   # 输出：Meow!

```

## 多态性 (Polymorphism)

多态性是面向对象编程中的一个重要概念，它允许您以**统一的方式**处理不同类的对象。在 Python 中，多态性是通过使用**方法覆盖**或**方法重载**来实现的。

**方法覆盖**是指子类提供了对父类中已定义方法的**自己实现**。这允许子类在不更改方法名称或签名的情况下修改方法的行为。

**方法重载**是指多个方法具有相同的名称但参数不同。Python 不直接支持方法重载，但可以通过使用**默认参数**或**可变参数**来实现。

多态性使编写**灵活且可重用**的代码变得更容易。它允许您编写可以处理不同对象而无需知道其特定类型的代码。

```python
# Shape 类被定义了一个抽象的 area 方法，旨在被子类覆盖。
class Shape:
    def area(self):
        pass

class Rectangle(Shape):
    # Rectangle 类定义了一个 __init__ 方法，用于初始化
    # width 和 height 实例变量。
    # 它还定义了一个 area 方法，用于使用 width 和 height 实例变量计算并返回
    # 矩形的面积。
    def __init__(self, width, height):
        self.width = width  # 初始化 width 实例变量
        self.height = height  # 初始化 height 实例变量

    def area(self):
        return self.width * self.height  # 返回矩形的面积


 # Circle 类定义了一个 __init__ 方法，
 # 用于初始化 radius 实例变量。
 # 它还定义了一个 area 方法，用于使用 radius 实例变量计算并
 # 返回圆的面积。
class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius  # 初始化 radius 实例变量

    def area(self):
        return 3.14 * self.radius ** 2  # 使用 pi * r^2 返回圆的面积

# shapes 列表创建了一个 Rectangle 对象和一个 Circle 对象。for
# 循环遍历列表中的每个对象并调用每个对象的 area 方法
# 输出将是矩形的面积 (20) 和圆的面积 (153.86)。
shapes = [Rectangle(4, 5), Circle(7)]  # 创建一个 Shape 对象列表
for shape in shapes:
    print(shape.area())  # 输出每个 Shape 对象的面积

```

## 抽象 (Abstraction)

抽象是面向对象编程 (OOP) 中的一个重要概念，因为它允许您**专注于对象的本质特征**或系统，同时**忽略与当前上下文不相关的细节**。通过减少复杂性和隐藏不必要的细节，抽象可以使代码更具**模块化**、更易于阅读和维护。

在 Python 中，可以通过使用**抽象类**或**接口**来实现抽象。**抽象类**是不能直接实例化的类，而是供其他类继承的。它通常包含没有实现的**抽象方法**，但为子类应如何实现提供了一个模板。这允许程序员为一组相关的类定义一个**共同的接口**，同时仍然允许每个类具有自己**特定的行为**。

**接口**则是一组**方法签名**的集合，一个类必须实现这些签名才能被认为与该接口“兼容”。接口通常用于定义多个类可以实现的**一组通用方法**，从而允许它们在某些情况下可以**互换使用**。

Python 没有内置对抽象类或接口的支持，但可以使用 `abc`（抽象基类）模块来实现它们。该模块提供了 `ABC` 类和 `abstractmethod` 装饰器，可用于定义抽象类和方法。这使得程序员能够定义一个**通用结构**，子类必须遵循该结构。

总而言之，抽象是管理复杂性和提高面向对象编程中代码质量的有力工具，Python 提供了多种选项来实现代码中的抽象。

```python
# 导入 abc 模块以定义抽象类和方法
from abc import ABC, abstractmethod

# 定义一个名为 Shape 的抽象类，它有一个名为 area 的抽象方法
class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

# 定义一个继承自 Shape 的 Rectangle 类
class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    # 为 Rectangle 实现 area 方法
    def area(self):
        return self.width * self.height

# 定义一个也继承自 Shape 的 Circle 类
class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    # 为 Circle 实现 area 方法
    def area(self):
        return 3.14 * self.radius ** 2

# 创建一个包含 Rectangle 和 Circle 的形状列表
shapes = [Rectangle(4, 5), Circle(7)]

# 遍历列表中的每个形状并打印其面积
for shape in shapes:
    print(shape.area())

```

这些是 Python 中一些基本的 OOP 原则。此页面仍在完善中，更多详细的示例和解释将很快推出。

## 相关链接

- <router-link to="/cheatsheet/functions">函数 (Functions)</router-link>
- <router-link to="/cheatsheet/decorators">装饰器 (Decorators)</router-link>
- <router-link to="/cheatsheet/exception-handling">异常处理 (Exception Handling)</router-link>
- <router-link to="/cheatsheet/dataclasses">数据类 (Dataclasses)</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/classmethod">classmethod()</router-link>
- <router-link to="/builtin/staticmethod">staticmethod()</router-link>
- <router-link to="/builtin/property">property()</router-link>
- <router-link to="/builtin/isinstance">isinstance()</router-link>
- <router-link to="/builtin/issubclass">issubclass()</router-link>
- <router-link to="/builtin/super">super()</router-link>
