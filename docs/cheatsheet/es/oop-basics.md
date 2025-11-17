---
title: 'Conceptos Básicos de POO en Python - Hoja de Trucos'
description: 'La Programación Orientada a Objetos (POO) es un paradigma centrado en objetos, instancias de clases. Los principios de POO son fundamentales para el diseño de software orientado a objetos. Python soporta POO mediante clases y objetos. Aquí se presentan los principios básicos de POO en Python.'
labUrl: 'https://labex.io/es/labs/python-python-oop-basics-633662?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fundamentos de OOP en Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a href="https://en.wikipedia.org/wiki/Object-oriented_programming">Programación Orientada a Objetos</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    La programación orientada a objetos (OOP) es un paradigma de programación basado en el concepto de "objetos", que pueden contener datos y código. Los datos tienen la forma de campos (a menudo conocidos como atributos o propiedades), y el código tiene la forma de procedimientos (a menudo conocidos como métodos).
  </base-disclaimer-content>
</base-disclaimer>

## Encapsulación

La encapsulación es uno de los conceptos fundamentales de la programación orientada a objetos, que ayuda a proteger los datos y métodos de un objeto del acceso y modificación no autorizados. Es una forma de lograr la abstracción de datos, lo que significa que los detalles de implementación de un objeto se ocultan del mundo exterior, y solo se expone la información esencial.

En Python, la encapsulación se puede lograr mediante el uso de modificadores de acceso. Los modificadores de acceso son palabras clave que definen la accesibilidad de los atributos y métodos en una clase. Los tres modificadores de acceso disponibles en Python son público, privado y protegido. Sin embargo, Python no tiene una forma explícita de definir modificadores de acceso como otros lenguajes de programación como Java y C++. En su lugar, utiliza una convención de usar prefijos de guion bajo para indicar el nivel de acceso.

En el ejemplo de código proporcionado, la clase `MyClass` tiene dos atributos, `_protected_var` y `__private_var`. El `_protected_var` está marcado como protegido al usar un prefijo de un solo guion bajo. Esto significa que el atributo puede ser accedido dentro de la clase y sus subclases, pero no fuera de la clase. El `__private_var` está marcado como privado al usar un prefijo de dos guiones bajos. Esto significa que el atributo solo puede ser accedido dentro de la clase y no fuera de la clase, ni siquiera en sus subclases.

Cuando creamos un objeto de la clase `MyClass`, podemos acceder al atributo `_protected_var` usando el nombre del objeto con un prefijo de un solo guion bajo. Sin embargo, no podemos acceder al atributo `__private_var` usando el nombre del objeto, ya que está oculto del mundo exterior. Si intentamos acceder al atributo `__private_var`, obtendremos un `AttributeError` como se muestra en el código.

En resumen, la encapsulación es un concepto importante en la programación orientada a objetos que ayuda a proteger los detalles de implementación de un objeto. En Python, podemos lograr la encapsulación utilizando modificadores de acceso y usando prefijos de guion bajo para indicar el nivel de acceso.

```python
# Definir una clase llamada MyClass
class MyClass:

    # Método constructor que inicializa el objeto de la clase
    def __init__(self):

        # Definir una variable protegida con un valor inicial de 10
        # El nombre de la variable comienza con un solo guion bajo, lo que indica acceso protegido
        self._protected_var = 10

        # Definir una variable privada con un valor inicial de 20
        # El nombre de la variable comienza con dos guiones bajos, lo que indica acceso privado
        self.__private_var = 20

# Crear un objeto de la clase MyClass
obj = MyClass()

# Acceder a la variable protegida usando el nombre del objeto y el prefijo de guion bajo
# La variable protegida se puede acceder fuera de la clase, pero
# está destinada a ser utilizada dentro de la clase o sus subclases
print(obj._protected_var)   # output: 10

# Intentar acceder a la variable privada usando el nombre del objeto e imprimir su valor
# La variable privada no se puede acceder fuera de la clase, ni siquiera por sus subclases
# Esto generará un AttributeError porque la variable no es accesible fuera de la clase
print(obj.__private_var)    # AttributeError: 'MyClass' object has no attribute '__private_var'

```

## Herencia

La herencia promueve la reutilización de código y le permite crear una jerarquía de clases que comparten atributos y métodos comunes. Ayuda a crear código limpio y organizado al mantener la funcionalidad relacionada en un solo lugar y promover el concepto de modularidad. La clase base de la cual se deriva una nueva clase también se conoce como clase padre, y la nueva clase se conoce como clase hija o subclase.

En el código, definimos una clase llamada `Animal` que tiene un método constructor que inicializa el objeto de la clase con un atributo `name` y un método llamado `speak`. El método `speak` se define en la clase `Animal` pero no tiene cuerpo.

Luego definimos dos subclases llamadas `Dog` y `Cat` que heredan de la clase `Animal`. Estas subclases anulan el método `speak` de la clase `Animal`.

Creamos un objeto `Dog` con un atributo `name` "Rover" y un objeto `Cat` con un atributo `name` "Whiskers". Llamamos al método `speak` del objeto `Dog` usando `dog.speak()`, e imprime "Woof!" porque el método `speak` de la clase `Dog` anula el método `speak` de la clase `Animal`. De manera similar, llamamos al método `speak` del objeto `Cat` usando `cat.speak()`, e imprime "Meow!" porque el método `speak` de la clase `Cat` anula el método `speak` de la clase `Animal`.

```python
# Definir una clase llamada Animal
class Animal:

    # Método constructor que inicializa el objeto de la clase con un atributo name
    def __init__(self, name):
        self.name = name

    # Método que se define en la clase Animal pero no tiene cuerpo
    # Este método será anulado en las subclases de Animal
    def speak(self):
        print("")

# Definir una subclase llamada Dog que hereda de la clase Animal
class Dog(Animal):

    # Anular el método speak de la clase Animal
    def speak(self):
        print("Woof!")

# Definir una subclase llamada Cat que hereda de la clase Animal
class Cat(Animal):

    # Anular el método speak de la clase Animal
    def speak(self):
        print("Meow!")

# Crear un objeto Dog con un atributo name "Rover"
dog = Dog("Rover")

# Crear un objeto Cat con un atributo name "Whiskers"
cat = Cat("Whiskers")

# Llamar al método speak de la clase Dog e imprimir la salida
# El método speak de la clase Dog anula el método speak de la clase Animal
# Por lo tanto, cuando llamamos al método speak del objeto Dog, imprimirá "Woof!"
dog.speak()   # output: Woof!

# Llamar al método speak de la clase Cat e imprimir la salida
# El método speak de la clase Cat anula el método speak de la clase Animal
# Por lo tanto, cuando llamamos al método speak del objeto Cat, imprimirá "Meow!"
cat.speak()   # output: Meow!

```

## Polimorfismo

El polimorfismo es un concepto importante en la programación orientada a objetos que le permite escribir código que puede funcionar con objetos de diferentes clases de manera uniforme. En Python, el polimorfismo se logra mediante la anulación de métodos o la sobrecarga de métodos.

La anulación de métodos es cuando una subclase proporciona su propia implementación de un método que ya está definido en su clase padre. Esto permite que la subclase modifique el comportamiento del método sin cambiar su nombre o firma.

La sobrecarga de métodos es cuando múltiples métodos tienen el mismo nombre pero diferentes parámetros. Python no admite la sobrecarga de métodos directamente, pero se puede lograr utilizando argumentos predeterminados o argumentos de longitud variable.

El polimorfismo facilita la escritura de código flexible y reutilizable. Le permite escribir código que puede funcionar con diferentes objetos sin necesidad de conocer sus tipos específicos.

```python
#La clase Shape se define con un método area abstracto, que está destinado a ser anulado por las subclases.
class Shape:
    def area(self):
        pass

class Rectangle(Shape):
    # La clase Rectangle se define con un método __init__ que inicializa
    # las variables de instancia width y height.
    # También define un método area que calcula y devuelve
    # el área de un rectángulo usando las variables de instancia width y height.
    def __init__(self, width, height):
        self.width = width  # Inicializar la variable de instancia width
        self.height = height  # Inicializar la variable de instancia height

    def area(self):
        return self.width * self.height  # Devolver el área del rectángulo

 # La clase Circle se define con un método __init__
 # que inicializa una variable de instancia radius.
 # También define un método area que calcula y
 # devuelve el área de un círculo usando la variable de instancia radius.
class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius  # Inicializar la variable de instancia radius

    def area(self):
        return 3.14 * self.radius ** 2  # Devolver el área del círculo usando pi * r^2

# La lista shapes se crea con un objeto Rectangle y un objeto Circle. El bucle
# for itera sobre cada objeto en la lista y llama al método area de cada objeto
# La salida será el área del rectángulo (20) y el área del círculo (153.86).
shapes = [Rectangle(4, 5), Circle(7)]  # Crear una lista de objetos Shape
for shape in shapes:
    print(shape.area())  # Imprimir el área de cada objeto Shape

```

## Abstracción

La abstracción es un concepto importante en la programación orientada a objetos (OOP) porque le permite centrarse en las características esenciales de un objeto o sistema mientras ignora los detalles que no son relevantes para el contexto actual. Al reducir la complejidad y ocultar detalles innecesarios, la abstracción puede hacer que el código sea más modular, más fácil de leer y más fácil de mantener.

En Python, la abstracción se puede lograr mediante el uso de clases abstractas o interfaces. Una clase abstracta es una clase que no se puede instanciar directamente, sino que está destinada a ser subclaseada por otras clases. A menudo incluye métodos abstractos que no tienen implementación, pero proporcionan una plantilla sobre cómo se debe implementar la subclase. Esto permite al programador definir una interfaz común para un grupo de clases relacionadas, al tiempo que permite que cada clase tenga su propio comportamiento específico.

Una interfaz, por otro lado, es una colección de firmas de métodos que una clase debe implementar para ser considerada "compatible" con la interfaz. Las interfaces a menudo se utilizan para definir un conjunto común de métodos que varias clases pueden implementar, lo que les permite utilizarse indistintamente en ciertos contextos.

Python no tiene soporte incorporado para clases abstractas o interfaces, pero se pueden implementar utilizando el módulo `abc` (clase base abstracta). Este módulo proporciona la clase `ABC` y el decorador `abstractmethod`, que se pueden utilizar para definir clases y métodos abstractos.

En general, la abstracción es una herramienta poderosa para gestionar la complejidad y mejorar la calidad del código en la programación orientada a objetos, y Python proporciona una variedad de opciones para lograr la abstracción en su código.

```python
# Importar el módulo abc para definir clases y métodos abstractos
from abc import ABC, abstractmethod

# Definir una clase abstracta llamada Shape que tiene un método abstracto llamado area
class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

# Definir una clase Rectangle que hereda de Shape
class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    # Implementar el método area para Rectángulos
    def area(self):
        return self.width * self.height

# Definir una clase Circle que también hereda de Shape
class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    # Implementar el método area para Círculos
    def area(self):
        return 3.14 * self.radius ** 2

# Crear una lista de formas que incluye tanto Rectángulos como Círculos
shapes = [Rectangle(4, 5), Circle(7)]

# Recorrer cada forma en la lista e imprimir su área
for shape in shapes:
    print(shape.area())

```

Estos son algunos de los principios básicos de OOP en Python. Esta página está actualmente en progreso y pronto habrá más ejemplos y explicaciones detalladas.

## Enlaces relevantes

- <router-link to="/cheatsheet/functions">Funciones</router-link>
- <router-link to="/cheatsheet/decorators">Decoradores</router-link>
- <router-link to="/cheatsheet/exception-handling">Manejo de Excepciones</router-link>
- <router-link to="/cheatsheet/dataclasses">Clases de Datos</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/classmethod">classmethod()</router-link>
- <router-link to="/builtin/staticmethod">staticmethod()</router-link>
- <router-link to="/builtin/property">property()</router-link>
- <router-link to="/builtin/isinstance">isinstance()</router-link>
- <router-link to="/builtin/issubclass">issubclass()</router-link>
- <router-link to="/builtin/super">super()</router-link>
