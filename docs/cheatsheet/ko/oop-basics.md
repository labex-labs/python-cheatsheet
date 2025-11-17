---
title: '파이썬 OOP 기초 - 파이썬 치트 시트'
description: '객체 지향 프로그래밍 (OOP) 은 클래스의 인스턴스인 객체 개념을 중심으로 하는 프로그래밍 패러다임입니다. OOP 원칙은 객체 지향 방식으로 소프트웨어의 설계 및 개발을 안내하는 기본 개념입니다. 파이썬은 클래스와 객체를 사용하여 OOP 를 지원합니다. 다음은 파이썬의 기본적인 OOP 원칙들입니다.'
labUrl: 'https://labex.io/ko/labs/python-python-oop-basics-633662?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python OOP 기본
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a href="https://en.wikipedia.org/wiki/Object-oriented_programming">객체 지향 프로그래밍</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    객체 지향 프로그래밍 (OOP) 은 "객체"라는 개념에 기반한 프로그래밍 패러다임으로, 객체는 데이터와 코드를 포함할 수 있습니다. 데이터는 필드 (종종 속성 또는 프로퍼티라고 함) 형태이며, 코드는 프로시저 (종종 메서드라고 함) 형태입니다.
  </base-disclaimer-content>
</base-disclaimer>

## 캡슐화 (Encapsulation)

캡슐화는 객체 지향 프로그래밍의 기본 개념 중 하나로, 객체의 데이터와 메서드를 무단 접근 및 수정으로부터 보호하는 데 도움이 됩니다. 이는 데이터 추상화를 달성하는 방법으로, 객체의 구현 세부 사항이 외부 세계로부터 숨겨지고 필수 정보만 노출됨을 의미합니다.

Python 에서 캡슐화는 접근 지정자 (access modifiers) 를 사용하여 달성할 수 있습니다. 접근 지정자는 클래스 내 속성과 메서드의 접근성을 정의하는 키워드입니다. Python 에서 사용할 수 있는 세 가지 접근 지정자는 public, private, protected 입니다. 하지만 Python 은 Java 나 C++ 와 같은 다른 프로그래밍 언어처럼 접근 지정자를 명시적으로 정의하는 방법은 없습니다. 대신, 접근 수준을 나타내기 위해 밑줄 접두사 (underscore prefixes) 를 사용하는 관례를 사용합니다.

제공된 코드 예시에서 MyClass 클래스는 \_protected_var 와 \_\_private_var 라는 두 가지 속성을 가집니다. \_protected_var 는 단일 밑줄 접두사를 사용하여 protected 로 표시됩니다. 이는 해당 속성이 클래스 및 그 서브클래스 내에서 접근할 수 있지만 클래스 외부에서는 접근할 수 없음을 의미합니다. \_\_private_var 는 두 개의 밑줄 접두사를 사용하여 private 으로 표시됩니다. 이는 해당 속성이 클래스 내부에서만 접근할 수 있고, 서브클래스에서도 클래스 외부에서는 접근할 수 없음을 의미합니다.

MyClass 클래스의 객체를 생성할 때, 객체 이름과 단일 밑줄 접두사를 사용하여 \_protected_var 속성에 접근할 수 있습니다. 그러나 \_\_private_var 속성은 외부 세계로부터 숨겨져 있으므로 객체 이름을 사용하여 접근할 수 없습니다. \_\_private_var 속성에 접근하려고 하면 코드에 표시된 것처럼 AttributeError 가 발생합니다.

요약하자면, 캡슐화는 객체의 구현 세부 사항을 보호하는 데 도움이 되는 객체 지향 프로그래밍의 중요한 개념입니다. Python 에서는 접근 지정자를 사용하고 밑줄 접두사를 사용하여 접근 수준을 나타냄으로써 캡슐화를 달성할 수 있습니다.

```python
# MyClass 라는 클래스 정의
class MyClass:

    # 클래스 객체를 초기화하는 생성자 메서드
    def __init__(self):

        # 초기값이 10 인 보호된 변수 정의
        # 변수 이름은 단일 밑줄로 시작하며, 보호된 접근을 나타냅니다
        self._protected_var = 10

        # 초기값이 20 인 private 변수 정의
        # 변수 이름은 두 개의 밑줄로 시작하며, private 접근을 나타냅니다
        self.__private_var = 20

# MyClass 클래스의 객체 생성
obj = MyClass()

# 객체 이름과 단일 밑줄 접두사를 사용하여 보호된 변수에 접근하고 값 출력
# 보호된 변수는 클래스 외부에서 접근할 수 있지만,
# 클래스 또는 그 서브클래스 내에서 사용하도록 의도됩니다
print(obj._protected_var)   # 출력: 10

# 객체 이름과 두 개의 밑줄 접두사를 사용하여 private 변수에 접근하고 값 출력 시도
# private 변수는 서브클래스에서도 클래스 외부에서는 접근할 수 없습니다
# 클래스 외부에서 변수에 접근할 수 없으므로 AttributeError 가 발생합니다
print(obj.__private_var)    # AttributeError: 'MyClass' object has no attribute '__private_var'

```

## 상속 (Inheritance)

상속은 코드 재사용을 촉진하고 공통 속성과 메서드를 공유하는 클래스 계층 구조를 생성할 수 있도록 합니다. 관련 기능을 한 곳에 유지하고 모듈성 개념을 촉진하여 깔끔하고 체계적인 코드를 작성하는 데 도움이 됩니다. 새로운 클래스가 파생되는 기본 클래스는 부모 클래스라고도 하며, 새로운 클래스는 자식 클래스 또는 서브클래스라고도 합니다.

코드에서 Animal 이라는 클래스를 정의하며, 클래스 객체를 name 속성으로 초기화하는 생성자 메서드와 speak 라는 메서드를 가집니다. speak 메서드는 Animal 클래스에 정의되어 있지만 본문은 없습니다.

그런 다음 Animal 클래스에서 상속받는 Dog 와 Cat 이라는 두 개의 서브클래스를 정의합니다. 이 서브클래스들은 Animal 클래스의 speak 메서드를 재정의합니다.

name 속성이 "Rover"인 Dog 객체와 name 속성이 "Whiskers"인 Cat 객체를 생성합니다. dog.speak() 를 사용하여 Dog 객체의 speak 메서드를 호출하면, Dog 클래스의 speak 메서드가 Animal 클래스의 speak 메서드를 재정의하므로 "Woof!"가 출력됩니다. 마찬가지로 cat.speak() 를 사용하여 Cat 객체의 speak 메서드를 호출하면, Cat 클래스의 speak 메서드가 Animal 클래스의 speak 메서드를 재정의하므로 "Meow!"가 출력됩니다.

```python
# Animal 이라는 클래스 정의
class Animal:

    # name 속성으로 클래스 객체를 초기화하는 생성자 메서드
    def __init__(self, name):
        self.name = name

    # Animal 클래스에 정의되어 있지만 본문이 없는 메서드
    # 이 메서드는 Animal 의 서브클래스에서 재정의될 예정입니다
    def speak(self):
        print("")

# Animal 클래스에서 상속받는 Dog 라는 서브클래스 정의
class Dog(Animal):

    # Animal 클래스의 speak 메서드 재정의
    def speak(self):
        print("Woof!")

# Animal 클래스에서 상속받는 Cat 이라는 서브클래스 정의
class Cat(Animal):

    # Animal 클래스의 speak 메서드 재정의
    def speak(self):
        print("Meow!")

# name 속성이 "Rover"인 Dog 객체 생성
dog = Dog("Rover")

# name 속성이 "Whiskers"인 Cat 객체 생성
cat = Cat("Whiskers")

# Dog 클래스의 speak 메서드 호출 및 출력
# Dog 클래스의 speak 메서드가 Animal 클래스의 speak 메서드를 재정의하므로
# Dog 객체의 speak 메서드를 호출하면 "Woof!"가 출력됩니다
dog.speak()   # 출력: Woof!

# Cat 클래스의 speak 메서드 호출 및 출력
# Cat 클래스의 speak 메서드가 Animal 클래스의 speak 메서드를 재정의하므로
# Cat 객체의 speak 메서드를 호출하면 "Meow!"가 출력됩니다
cat.speak()   # 출력: Meow!

```

## 다형성 (Polymorphism)

다형성은 객체 지향 프로그래밍의 중요한 개념으로, 서로 다른 클래스의 객체에 대해 균일한 방식으로 작동하는 코드를 작성할 수 있게 해줍니다. Python 에서 다형성은 메서드 재정의 (method overriding) 또는 메서드 오버로딩 (method overloading) 을 사용하여 달성됩니다.

메서드 재정의는 서브클래스가 부모 클래스에 이미 정의된 메서드에 대한 자체 구현을 제공하는 것입니다. 이를 통해 메서드의 이름이나 시그니처를 변경하지 않고도 서브클래스가 메서드의 동작을 수정할 수 있습니다.

메서드 오버로딩은 여러 메서드가 동일한 이름을 가지지만 매개변수가 다른 경우를 말합니다. Python 은 메서드 오버로딩을 직접 지원하지 않지만, 기본 인수 (default arguments) 또는 가변 길이 인수 (variable-length arguments) 를 사용하여 달성할 수 있습니다.

다형성은 더 유연하고 재사용 가능한 코드를 작성하는 것을 더 쉽게 만듭니다. 이는 객체의 특정 유형을 알 필요 없이 다양한 객체와 함께 작동할 수 있는 코드를 작성할 수 있도록 합니다.

```python
# Shape 클래스는 area 메서드를 가지도록 정의되며, 이는 서브클래스에 의해 재정의될 예정입니다.
class Shape:
    def area(self):
        pass

class Rectangle(Shape):
    # Rectangle 클래스는 너비와 높이 인스턴스 변수를 초기화하는 __init__ 메서드를 가집니다.
    # 또한 너비와 높이 인스턴스 변수를 사용하여 직사각형의 면적을 계산하고 반환하는 area 메서드를 정의합니다.
    def __init__(self, width, height):
        self.width = width  # 너비 인스턴스 변수 초기화
        self.height = height  # 높이 인스턴스 변수 초기화

    def area(self):
        return self.width * self.height  # 직사각형 면적 반환


 # Circle 클래스는 반지름 인스턴스 변수를 초기화하는 __init__ 메서드를 가집니다.
 # 또한 반지름 인스턴스 변수를 사용하여 원의 면적을 계산하고 반환하는 area 메서드를 정의합니다.
class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius  # 반지름 인스턴스 변수 초기화

    def area(self):
        return 3.14 * self.radius ** 2  # 원의 면적 반환 (pi * r^2 사용)

# shapes 리스트는 하나의 Rectangle 객체와 하나의 Circle 객체로 생성됩니다. for
# 루프는 리스트의 각 객체를 반복하고 각 객체의 area 메서드를 호출합니다.
# 출력은 직사각형의 면적 (20) 과 원의 면적 (153.86) 이 됩니다.
shapes = [Rectangle(4, 5), Circle(7)]  # Shape 객체 리스트 생성
for shape in shapes:
    print(shape.area())  # 각 Shape 객체의 면적 출력

```

## 추상화 (Abstraction)

추상화는 객체 지향 프로그래밍 (OOP) 에서 중요한 개념인데, 현재 컨텍스트와 관련 없는 세부 사항을 무시하면서 객체나 시스템의 필수 기능에 집중할 수 있게 해주기 때문입니다. 복잡성을 줄이고 불필요한 세부 사항을 숨김으로써 추상화는 코드를 더 모듈화하고, 읽기 쉽고, 유지보수하기 쉽게 만들 수 있습니다.

Python 에서 추상화는 추상 클래스 (abstract classes) 또는 인터페이스 (interfaces) 를 사용하여 달성될 수 있습니다. 추상 클래스는 직접 인스턴스화할 수 없고 다른 클래스에 의해 서브클래싱되도록 의도된 클래스입니다. 종종 구현이 없는 추상 메서드를 포함하지만, 서브클래스가 구현되어야 하는 방식에 대한 템플릿을 제공합니다. 이를 통해 프로그래머는 관련 클래스 그룹에 대한 공통 인터페이스를 정의하는 동시에 각 클래스가 자체적인 특정 동작을 갖도록 허용할 수 있습니다.

반면에 인터페이스는 해당 인터페이스와 "호환 가능"한 것으로 간주되려면 클래스가 구현해야 하는 메서드 시그니처의 모음입니다. 인터페이스는 여러 클래스가 구현할 수 있는 공통 메서드 세트를 정의하는 데 자주 사용되어 특정 상황에서 상호 교환적으로 사용될 수 있도록 합니다.

Python 은 추상 클래스나 인터페이스에 대한 내장 지원을 제공하지 않지만, abc(abstract base class) 모듈을 사용하여 구현할 수 있습니다. 이 모듈은 ABC 클래스와 abstractmethod 데코레이터를 제공하며, 이를 사용하여 추상 클래스와 메서드를 정의할 수 있습니다.

전반적으로 추상화는 객체 지향 프로그래밍에서 복잡성을 관리하고 코드 품질을 개선하기 위한 강력한 도구이며, Python 은 코드에서 추상화를 달성하기 위한 다양한 옵션을 제공합니다.

```python
# abc 모듈을 가져와 추상 클래스와 메서드 정의
from abc import ABC, abstractmethod

# area 라는 추상 메서드를 가진 Shape 라는 추상 클래스 정의
class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

# Shape 에서 상속받는 Rectangle 클래스 정의
class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    # Rectangle 에 대한 area 메서드 구현
    def area(self):
        return self.width * self.height

# Shape 에서 상속받는 Circle 클래스도 정의
class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    # Circle 에 대한 area 메서드 구현
    def area(self):
        return 3.14 * self.radius ** 2

# Rectangle 과 Circle 을 모두 포함하는 도형 리스트 생성
shapes = [Rectangle(4, 5), Circle(7)]

# 리스트의 각 도형을 반복하며 면적 출력
for shape in shapes:
    print(shape.area())

```

이것이 Python 의 기본적인 OOP 원칙들입니다. 이 페이지는 현재 작업 중이며 더 자세한 예시와 설명이 곧 제공될 예정입니다.

## 관련 링크

- <router-link to="/cheatsheet/functions">함수 (Functions)</router-link>
- <router-link to="/cheatsheet/decorators">데코레이터 (Decorators)</router-link>
- <router-link to="/cheatsheet/exception-handling">예외 처리 (Exception Handling)</router-link>
- <router-link to="/cheatsheet/dataclasses">데이터 클래스 (Dataclasses)</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/classmethod">classmethod()</router-link>
- <router-link to="/builtin/staticmethod">staticmethod()</router-link>
- <router-link to="/builtin/property">property()</router-link>
- <router-link to="/builtin/isinstance">isinstance()</router-link>
- <router-link to="/builtin/issubclass">issubclass()</router-link>
- <router-link to="/builtin/super">super()</router-link>
