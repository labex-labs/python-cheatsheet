---
title: 'Python OOP Grundlagen - Python Spickzettel'
description: 'Die objektorientierte Programmierung (OOP) ist ein Paradigma, das sich um Objekte dreht, welche Instanzen von Klassen sind. OOP-Prinzipien sind grundlegende Konzepte für das objektorientierte Software-Design. Python unterstützt OOP durch Klassen und Objekte. Hier sind die grundlegenden OOP-Prinzipien in Python.'
labUrl: 'https://labex.io/de/labs/python-python-oop-basics-633662?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python OOP Grundlagen
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a href="https://en.wikipedia.org/wiki/Object-oriented_programming">Objektorientierte Programmierung</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Objektorientierte Programmierung (OOP) ist ein Programmierparadigma, das auf dem Konzept der „Objekte“ basiert, welche Daten und Code enthalten können. Die Daten liegen in Form von Feldern (oft als Attribute oder Eigenschaften bezeichnet) vor, und der Code liegt in Form von Prozeduren (oft als Methoden bezeichnet) vor.
  </base-disclaimer-content>
</base-disclaimer>

## Kapselung (Encapsulation)

Kapselung ist eines der fundamentalen Konzepte der objektorientierten Programmierung, das hilft, die Daten und Methoden eines Objekts vor unbefugtem Zugriff und Modifikation zu schützen. Es ist eine Methode, um Datenabstraktion zu erreichen, was bedeutet, dass die Implementierungsdetails eines Objekts vor der Außenwelt verborgen bleiben und nur die wesentlichen Informationen offengelegt werden.

In Python wird Kapselung durch die Verwendung von Zugriffsmodifikatoren erreicht. Zugriffsmodifikatoren sind Schlüsselwörter, die die Zugänglichkeit von Attributen und Methoden in einer Klasse definieren. Die drei in Python verfügbaren Zugriffsmodifikatoren sind öffentlich (public), privat (private) und geschützt (protected). Python verfügt jedoch nicht über eine explizite Möglichkeit, Zugriffsmodifikatoren wie einige andere Programmiersprachen wie Java und C++ zu definieren. Stattdessen verwendet es die Konvention, Unterstrichpräfixe zu verwenden, um das Zugriffsniveau anzuzeigen.

Im gegebenen Codebeispiel hat die Klasse `MyClass` zwei Attribute, `_protected_var` und `__private_var`. `_protected_var` ist durch die Verwendung eines einzelnen Unterstrichpräfixes als geschützt gekennzeichnet. Dies bedeutet, dass auf das Attribut innerhalb der Klasse und ihrer Unterklassen zugegriffen werden kann, jedoch nicht außerhalb der Klasse. `__private_var` ist durch die Verwendung von zwei Unterstrichpräfixen als privat gekennzeichnet. Dies bedeutet, dass auf das Attribut nur innerhalb der Klasse und nicht außerhalb der Klasse zugegriffen werden kann, nicht einmal in ihren Unterklassen.

Wenn wir ein Objekt der Klasse `MyClass` erstellen, können wir auf das Attribut `_protected_var` über den Objektnamen mit einem einzelnen Unterstrichpräfix zugreifen. Wir können jedoch nicht auf das Attribut `__private_var` über den Objektnamen zugreifen, da es vor der Außenwelt verborgen ist. Wenn wir versuchen, auf das Attribut `__private_var` zuzugreifen, erhalten wir einen `AttributeError`, wie im Code gezeigt.

Zusammenfassend lässt sich sagen, dass Kapselung ein wichtiges Konzept in der objektorientierten Programmierung ist, das hilft, die Implementierungsdetails eines Objekts zu schützen. In Python können wir Kapselung durch die Verwendung von Zugriffsmodifikatoren und Unterstrichpräfixen zur Angabe des Zugriffsniveaus erreichen.

```python
# Definiere eine Klasse namens MyClass
class MyClass:

    # Konstruktormethode, die das Klassenobjekt initialisiert
    def __init__(self):

        # Definiere eine geschützte Variable mit einem Anfangswert von 10
        # Der Variablenname beginnt mit einem einzelnen Unterstrich, was geschützten Zugriff anzeigt
        self._protected_var = 10

        # Definiere eine private Variable mit einem Anfangswert von 20
        # Der Variablenname beginnt mit zwei Unterstrichen, was privaten Zugriff anzeigt
        self.__private_var = 20

# Erstelle ein Objekt der Klasse MyClass
obj = MyClass()

# Greife auf die geschützte Variable über den Objektnamen zu und gib ihren Wert aus
# Auf die geschützte Variable kann außerhalb der Klasse zugegriffen werden, aber
# sie soll innerhalb der Klasse oder ihrer Unterklassen verwendet werden
print(obj._protected_var)   # Ausgabe: 10

# Versuche, auf die private Variable über den Objektnamen zuzugreifen und ihren Wert auszugeben
# Auf die private Variable kann außerhalb der Klasse nicht zugegriffen werden, nicht einmal von ihren Unterklassen
# Dies löst einen AttributeError aus, da die Variable außerhalb der Klasse nicht zugänglich ist
print(obj.__private_var)    # AttributeError: 'MyClass' object has no attribute '__private_var'

```

## Vererbung (Inheritance)

Vererbung fördert die Wiederverwendung von Code und ermöglicht es Ihnen, eine Hierarchie von Klassen zu erstellen, die gemeinsame Attribute und Methoden teilen. Sie hilft dabei, sauberen und organisierten Code zu erstellen, indem zusammengehörige Funktionalität an einem Ort gehalten und das Konzept der Modularität gefördert wird. Die Basisklasse, von der eine neue Klasse abgeleitet wird, wird auch als Elternklasse bezeichnet, und die neue Klasse wird als Kindklasse oder Unterklasse bezeichnet.

Im Code definieren wir eine Klasse namens `Animal`, die eine Konstruktormethode hat, die das Klassenobjekt mit einem `name`-Attribut und einer Methode namens `speak` initialisiert. Die Methode `speak` ist in der Klasse `Animal` definiert, hat aber keinen Körper.

Anschließend definieren wir zwei Unterklassen namens `Dog` und `Cat`, die von der Klasse `Animal` erben. Diese Unterklassen überschreiben die Methode `speak` der Klasse `Animal`.

Wir erstellen ein `Dog`-Objekt mit dem Attributnamen "Rover" und ein `Cat`-Objekt mit dem Attributnamen "Whiskers". Wir rufen die Methode `speak` des `Dog`-Objekts mit `dog.speak()` auf, und es wird "Woof!" ausgegeben, weil die Methode `speak` der Klasse `Dog` die Methode `speak` der Klasse `Animal` überschreibt. In ähnlicher Weise rufen wir die Methode `speak` des `Cat`-Objekts mit `cat.speak()` auf, und es wird "Meow!" ausgegeben, weil die Methode `speak` der Klasse `Cat` die Methode `speak` der Klasse `Animal` überschreibt.

```python
# Definiere eine Klasse namens Animal
class Animal:

    # Konstruktormethode, die das Klassenobjekt mit einem Namensattribut initialisiert
    def __init__(self, name):
        self.name = name

    # Methode, die in der Animal-Klasse definiert ist, aber keinen Körper hat
    # Diese Methode wird in den Unterklassen von Animal überschrieben
    def speak(self):
        print("")

# Definiere eine Unterklasse namens Dog, die von der Animal-Klasse erbt
class Dog(Animal):

    # Überschreibe die speak-Methode der Animal-Klasse
    def speak(self):
        print("Woof!")

# Definiere eine Unterklasse namens Cat, die von der Animal-Klasse erbt
class Cat(Animal):

    # Überschreibe die speak-Methode der Animal-Klasse
    def speak(self):
        print("Meow!")

# Erstelle ein Dog-Objekt mit einem Namensattribut "Rover"
dog = Dog("Rover")

# Erstelle ein Cat-Objekt mit einem Namensattribut "Whiskers"
cat = Cat("Whiskers")

# Rufe die speak-Methode der Dog-Klasse auf und gib die Ausgabe aus
# Die speak-Methode der Dog-Klasse überschreibt die speak-Methode der Animal-Klasse
# Daher wird beim Aufruf der speak-Methode des Dog-Objekts "Woof!" ausgegeben
dog.speak()   # Ausgabe: Woof!

# Rufe die speak-Methode der Cat-Klasse auf und gib die Ausgabe aus
# Die speak-Methode der Cat-Klasse überschreibt die speak-Methode der Animal-Klasse
# Daher wird beim Aufruf der speak-Methode des Cat-Objekts "Meow!" ausgegeben
cat.speak()   # Ausgabe: Meow!

```

## Polymorphie (Polymorphism)

Polymorphie ist ein wichtiges Konzept in der objektorientierten Programmierung, das es ermöglicht, Code zu schreiben, der mit Objekten verschiedener Klassen auf einheitliche Weise funktioniert. In Python wird Polymorphie durch die Verwendung von Methodenüberschreibung (Method Overriding) oder Methodenüberladung (Method Overloading) erreicht.

Methodenüberschreibung liegt vor, wenn eine Unterklasse ihre eigene Implementierung einer Methode bereitstellt, die bereits in ihrer Elternklasse definiert ist. Dies ermöglicht es der Unterklasse, das Verhalten der Methode zu ändern, ohne ihren Namen oder ihre Signatur zu ändern.

Methodenüberladung liegt vor, wenn mehrere Methoden denselben Namen, aber unterschiedliche Parameter haben. Python unterstützt Methodenüberladung nicht direkt, aber sie kann durch Standardargumente oder Argumente variabler Länge erreicht werden.

Polymorphie erleichtert das Schreiben von flexiblem und wiederverwendbarem Code. Sie ermöglicht es Ihnen, Code zu schreiben, der mit verschiedenen Objekten funktioniert, ohne deren spezifische Typen kennen zu müssen.

```python
#Die Shape-Klasse wird mit einer abstrakten area-Methode definiert, die von Unterklassen überschrieben werden soll.
class Shape:
    def area(self):
        pass

class Rectangle(Shape):
    # Die Rectangle-Klasse wird mit einer __init__-Methode definiert, die
    # die Instanzvariablen width und height initialisiert.
    # Sie definiert auch eine area-Methode, die die Fläche eines Rechtecks berechnet und zurückgibt
    # unter Verwendung der Instanzvariablen width und height.
    def __init__(self, width, height):
        self.width = width  # Initialisiere die Instanzvariable width
        self.height = height  # Initialisiere die Instanzvariable height

    def area(self):
        return self.width * self.height  # Gib die Fläche des Rechtecks zurück


 # Die Circle-Klasse wird mit einer __init__-Methode definiert, die
 # eine Instanzvariable radius initialisiert.
 # Sie definiert auch eine area-Methode, die die Fläche eines Kreises berechnet und zurückgibt
 # unter Verwendung der Instanzvariable radius.
class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius  # Initialisiere die Instanzvariable radius

    def area(self):
        return 3.14 * self.radius ** 2  # Gib die Fläche des Kreises unter Verwendung von pi * r^2 zurück

# Die shapes-Liste wird mit einem Rectangle-Objekt und einem Circle-Objekt erstellt. Die for-
# Schleife iteriert über jedes Objekt in der Liste und ruft die area-Methode jedes Objekts auf.
# Die Ausgabe wird die Fläche des Rechtecks (20) und die Fläche des Kreises (153.86) sein.
shapes = [Rectangle(4, 5), Circle(7)]  # Erstelle eine Liste von Shape-Objekten
for shape in shapes:
    print(shape.area())  # Gib die Fläche jedes Shape-Objekts aus

```

## Abstraktion (Abstraction)

Abstraktion ist ein wichtiges Konzept in der objektorientierten Programmierung (OOP), da es Ihnen ermöglicht, sich auf die wesentlichen Merkmale eines Objekts oder Systems zu konzentrieren und gleichzeitig Details zu ignorieren, die für den aktuellen Kontext nicht relevant sind. Durch die Reduzierung der Komplexität und das Verbergen unnötiger Details kann Abstraktion dazu beitragen, Code modularer, leichter lesbar und einfacher zu warten zu machen.

In Python kann Abstraktion durch die Verwendung von abstrakten Klassen oder Schnittstellen (Interfaces) erreicht werden. Eine abstrakte Klasse ist eine Klasse, die nicht direkt instanziiert werden kann, sondern von anderen Klassen abgeleitet werden soll. Sie enthält oft abstrakte Methoden, die keine Implementierung haben, aber eine Vorlage dafür bieten, wie die Unterklasse implementiert werden soll. Dies ermöglicht es dem Programmierer, eine gemeinsame Schnittstelle für eine Gruppe verwandter Klassen zu definieren, während jede Klasse weiterhin ihr eigenes spezifisches Verhalten haben kann.

Eine Schnittstelle hingegen ist eine Sammlung von Methodensignaturen, die eine Klasse implementieren muss, um als „kompatibel“ mit der Schnittstelle zu gelten. Schnittstellen werden oft verwendet, um einen gemeinsamen Satz von Methoden zu definieren, den mehrere Klassen implementieren können, wodurch sie in bestimmten Kontexten austauschbar verwendet werden können.

Python verfügt nicht über eingebaute Unterstützung für abstrakte Klassen oder Schnittstellen, aber sie können mithilfe des `abc` (abstract base class) Moduls implementiert werden. Dieses Modul stellt die `ABC`-Klasse und den Dekorator `abstractmethod` bereit, die zur Definition abstrakter Klassen und Methoden verwendet werden können.

Insgesamt ist Abstraktion ein mächtiges Werkzeug zur Verwaltung von Komplexität und zur Verbesserung der Codequalität in der objektorientierten Programmierung, und Python bietet eine Reihe von Optionen zur Erreichung von Abstraktion in Ihrem Code.

```python
# Importiere das abc-Modul zur Definition abstrakter Klassen und Methoden
from abc import ABC, abstractmethod

# Definiere eine abstrakte Klasse namens Shape, die eine abstrakte Methode namens area hat
class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

# Definiere eine Rectangle-Klasse, die von Shape erbt
class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    # Implementiere die area-Methode für Rechtecke
    def area(self):
        return self.width * self.height

# Definiere eine Circle-Klasse, die ebenfalls von Shape erbt
class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    # Implementiere die area-Methode für Kreise
    def area(self):
        return 3.14 * self.radius ** 2

# Erstelle eine Liste von Formen, die sowohl Rechtecke als auch Kreise enthält
shapes = [Rectangle(4, 5), Circle(7)]

# Schleife durch jede Form in der Liste und gib ihre Fläche aus
for shape in shapes:
    print(shape.area())

```

Dies sind einige der grundlegenden OOP-Prinzipien in Python. Diese Seite wird derzeit überarbeitet und detailliertere Beispiele und Erklärungen werden in Kürze folgen.

## Relevante Links

- <router-link to="/cheatsheet/functions">Funktionen</router-link>
- <router-link to="/cheatsheet/decorators">Dekoratoren</router-link>
- <router-link to="/cheatsheet/exception-handling">Fehlerbehandlung</router-link>
- <router-link to="/cheatsheet/dataclasses">Dataclasses</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/classmethod">classmethod()</router-link>
- <router-link to="/builtin/staticmethod">staticmethod()</router-link>
- <router-link to="/builtin/property">property()</router-link>
- <router-link to="/builtin/isinstance">isinstance()</router-link>
- <router-link to="/builtin/issubclass">issubclass()</router-link>
- <router-link to="/builtin/super">super()</router-link>
