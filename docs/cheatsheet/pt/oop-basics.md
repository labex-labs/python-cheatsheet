---
title: 'Básicos de POO em Python - Guia Rápido Python'
description: 'Programação Orientada a Objetos (POO) é um paradigma que gira em torno do conceito de objetos, que são instâncias de classes. Os princípios de POO são conceitos fundamentais que orientam o design e desenvolvimento de software de forma orientada a objetos. Em Python, a POO é suportada pelo uso de classes e objetos. Aqui estão alguns dos princípios básicos de POO em Python.'
labUrl: 'https://labex.io/pt/labs/python-python-oop-basics-633662?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Básicos de OOP em Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a href="https://en.wikipedia.org/wiki/Object-oriented_programming">Programação Orientada a Objetos</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Programação Orientada a Objetos (OOP) é um paradigma de programação baseado no conceito de "objetos", que podem conter dados e código. Os dados estão na forma de campos (frequentemente conhecidos como atributos ou propriedades), e o código está na forma de procedimentos (frequentemente conhecidos como métodos).
  </base-disclaimer-content>
</base-disclaimer>

## Encapsulamento

Encapsulamento é um dos conceitos fundamentais da programação orientada a objetos, que ajuda a proteger os dados e métodos de um objeto contra acesso e modificação não autorizados. É uma forma de alcançar a abstração de dados, o que significa que os detalhes de implementação de um objeto são ocultos do mundo exterior, e apenas as informações essenciais são expostas.

Em Python, o encapsulamento pode ser alcançado usando modificadores de acesso. Modificadores de acesso são palavras-chave que definem a acessibilidade de atributos e métodos em uma classe. Os três modificadores de acesso disponíveis em Python são público, privado e protegido. No entanto, Python não possui uma forma explícita de definir modificadores de acesso como algumas outras linguagens de programação, como Java e C++. Em vez disso, ele usa uma convenção de usar prefixos de sublinhado para indicar o nível de acesso.

No exemplo de código fornecido, a classe `MyClass` possui dois atributos, `_protected_var` e `__private_var`. O `_protected_var` é marcado como protegido usando um prefixo de sublinhado único. Isso significa que o atributo pode ser acessado dentro da classe e suas subclasses, mas não fora da classe. O `__private_var` é marcado como privado usando um prefixo de dois sublinhados. Isso significa que o atributo só pode ser acessado dentro da classe e não fora dela, nem mesmo em suas subclasses.

Quando criamos um objeto da classe `MyClass`, podemos acessar o atributo `_protected_var` usando o nome do objeto com um prefixo de sublinhado único. No entanto, não podemos acessar o atributo `__private_var` usando o nome do objeto, pois ele está oculto do mundo exterior. Se tentarmos acessar o atributo `__private_var`, receberemos um `AttributeError`, como mostrado no código.

Em resumo, o encapsulamento é um conceito importante na programação orientada a objetos que ajuda a proteger os detalhes de implementação de um objeto. Em Python, podemos alcançar o encapsulamento usando modificadores de acesso e prefixos de sublinhado para indicar o nível de acesso.

```python
# Define uma classe chamada MyClass
class MyClass:

    # Método construtor que inicializa o objeto da classe
    def __init__(self):

        # Define uma variável protegida com um valor inicial de 10
        # O nome da variável começa com um único sublinhado, o que indica acesso protegido
        self._protected_var = 10

        # Define uma variável privada com um valor inicial de 20
        # O nome da variável começa com dois sublinhados, o que indica acesso privado
        self.__private_var = 20

# Cria um objeto da classe MyClass
obj = MyClass()

# Acessa a variável protegida usando o nome do objeto e imprime seu valor
# A variável protegida pode ser acessada fora da classe, mas
# destina-se a ser usada dentro da classe ou suas subclasses
print(obj._protected_var)   # output: 10

# Tenta acessar a variável privada usando o nome do objeto e imprime seu valor
# A variável privada não pode ser acessada fora da classe, nem mesmo por suas subclasses
# Isso levantará um AttributeError porque a variável não é acessível fora da classe
print(obj.__private_var)    # AttributeError: 'MyClass' object has no attribute '__private_var'

```

## Herança

A herança promove a reutilização de código e permite criar uma hierarquia de classes que compartilham atributos e métodos comuns. Ajuda a criar um código limpo e organizado, mantendo a funcionalidade relacionada em um só lugar e promovendo o conceito de modularidade. A classe base da qual uma nova classe é derivada também é conhecida como classe pai, e a nova classe é conhecida como classe filha ou subclasse.

No código, definimos uma classe chamada `Animal` que possui um método construtor que inicializa o objeto da classe com um atributo `name` e um método chamado `speak`. O método `speak` é definido na classe `Animal`, mas não tem corpo.

Em seguida, definimos duas subclasses chamadas `Dog` e `Cat` que herdam da classe `Animal`. Essas subclasses sobrescrevem o método `speak` da classe `Animal`.

Criamos um objeto `Dog` com um atributo `name` "Rover" e um objeto `Cat` com um atributo `name` "Whiskers". Chamamos o método `speak` do objeto `Dog` usando `dog.speak()`, e ele imprime "Woof!" porque o método `speak` da classe `Dog` sobrescreve o método `speak` da classe `Animal`. Da mesma forma, chamamos o método `speak` do objeto `Cat` usando `cat.speak()`, e ele imprime "Meow!" porque o método `speak` da classe `Cat` sobrescreve o método `speak` da classe `Animal`.

```python
# Define uma classe chamada Animal
class Animal:

    # Método construtor que inicializa o objeto da classe com um atributo name
    def __init__(self, name):
        self.name = name

    # Método que é definido na classe Animal, mas não tem corpo
    # Este método será sobrescrito nas subclasses de Animal
    def speak(self):
        print("")

# Define uma subclasse chamada Dog que herda da classe Animal
class Dog(Animal):

    # Sobrescreve o método speak da classe Animal
    def speak(self):
        print("Woof!")

# Define uma subclasse chamada Cat que herda da classe Animal
class Cat(Animal):

    # Sobrescreve o método speak da classe Animal
    def speak(self):
        print("Meow!")

# Cria um objeto Dog com um atributo name "Rover"
dog = Dog("Rover")

# Cria um objeto Cat com um atributo name "Whiskers"
cat = Cat("Whiskers")

# Chama o método speak da classe Dog e imprime a saída
# O método speak da classe Dog sobrescreve o método speak da classe Animal
# Portanto, quando chamamos o método speak do objeto Dog, ele imprimirá "Woof!"
dog.speak()   # output: Woof!

# Chama o método speak da classe Cat e imprime a saída
# O método speak da classe Cat sobrescreve o método speak da classe Animal
# Portanto, quando chamamos o método speak do objeto Cat, ele imprimirá "Meow!"
cat.speak()   # output: Meow!

```

## Polimorfismo

Polimorfismo é um conceito importante na programação orientada a objetos que permite escrever código que pode funcionar com objetos de diferentes classes de maneira uniforme. Em Python, o polimorfismo é alcançado usando sobrescrita de método ou sobrecarga de método.

Sobrescrita de método é quando uma subclasse fornece sua própria implementação de um método que já está definido em sua classe pai. Isso permite que a subclasse modifique o comportamento do método sem alterar seu nome ou assinatura.

Sobrecarga de método é quando vários métodos têm o mesmo nome, mas parâmetros diferentes. Python não suporta sobrecarga de método diretamente, mas pode ser alcançada usando argumentos padrão ou argumentos de comprimento variável.

O polimorfismo facilita a escrita de código flexível e reutilizável. Ele permite que você escreva código que pode funcionar com diferentes objetos sem a necessidade de conhecer seus tipos específicos.

```python
#A classe Shape é definida com um método area abstrato, que se destina a ser sobrescrito pelas subclasses.
class Shape:
    def area(self):
        pass

class Rectangle(Shape):
    # A classe Rectangle é definida com um método __init__ que inicializa
    # as variáveis de instância width e height.
    # Ela também define um método area que calcula e retorna
    # a área de um retângulo usando as variáveis de instância width e height.
    def __init__(self, width, height):
        self.width = width  # Inicializa a variável de instância width
        self.height = height  # Inicializa a variável de instância height

    def area(self):
        return self.width * self.height  # Retorna a área do retângulo


 # A classe Circle é definida com um método __init__
 # que inicializa uma variável de instância radius.
 # Ela também define um método area que calcula e
 # retorna a área de um círculo usando a variável de instância radius.
class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius  # Inicializa a variável de instância radius

    def area(self):
        return 3.14 * self.radius ** 2  # Retorna a área do círculo usando pi * r^2

# A lista shapes é criada com um objeto Rectangle e um objeto Circle. O loop
# for itera sobre cada objeto na lista e chama o método area de cada objeto
# A saída será a área do retângulo (20) e a área do círculo (153.86).
shapes = [Rectangle(4, 5), Circle(7)]  # Cria uma lista de objetos Shape
for shape in shapes:
    print(shape.area())  # Imprime a área de cada objeto Shape

```

## Abstração

Abstração é um conceito importante na programação orientada a objetos (OOP) porque permite que você se concentre nos recursos essenciais de um objeto ou sistema, ignorando os detalhes que não são relevantes para o contexto atual. Ao reduzir a complexidade e ocultar detalhes desnecessários, a abstração pode tornar o código mais modular, mais fácil de ler e mais fácil de manter.

Em Python, a abstração pode ser alcançada usando classes abstratas ou interfaces. Uma classe abstrata é uma classe que não pode ser instanciada diretamente, mas destina-se a ser herdada por outras classes. Frequentemente, inclui métodos abstratos que não têm implementação, mas fornecem um modelo de como a subclasse deve ser implementada. Isso permite ao programador definir uma interface comum para um grupo de classes relacionadas, ao mesmo tempo que permite que cada classe tenha seu próprio comportamento específico.

Uma interface, por outro lado, é uma coleção de assinaturas de métodos que uma classe deve implementar para ser considerada "compatível" com a interface. Interfaces são frequentemente usadas para definir um conjunto comum de métodos que várias classes podem implementar, permitindo que sejam usadas de forma intercambiável em certos contextos.

Python não tem suporte nativo para classes abstratas ou interfaces, mas elas podem ser implementadas usando o módulo `abc` (abstract base class). Este módulo fornece a classe `ABC` e o decorador `abstractmethod`, que podem ser usados para definir classes e métodos abstratos.

No geral, a abstração é uma ferramenta poderosa para gerenciar a complexidade e melhorar a qualidade do código na programação orientada a objetos, e Python oferece uma variedade de opções para alcançar a abstração em seu código.

```python
# Importa o módulo abc para definir classes e métodos abstratos
from abc import ABC, abstractmethod

# Define uma classe abstrata chamada Shape que tem um método abstrato chamado area
class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

# Define uma classe Rectangle que herda de Shape
class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    # Implementa o método area para Retângulos
    def area(self):
        return self.width * self.height

# Define uma classe Circle que também herda de Shape
class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    # Implementa o método area para Círculos
    def area(self):
        return 3.14 * self.radius ** 2

# Cria uma lista de formas que inclui Retângulos e Círculos
shapes = [Rectangle(4, 5), Circle(7)]

# Percorre cada forma na lista e imprime sua área
for shape in shapes:
    print(shape.area())

```

Estes são alguns dos princípios básicos de OOP em Python. Esta página está atualmente em andamento e mais
exemplos detalhados e explicações estarão disponíveis em breve.

## Links relevantes

- <router-link to="/cheatsheet/functions">Funções</router-link>
- <router-link to="/cheatsheet/decorators">Decoradores</router-link>
- <router-link to="/cheatsheet/exception-handling">Tratamento de Exceções</router-link>
- <router-link to="/cheatsheet/dataclasses">Dataclasses</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/classmethod">classmethod()</router-link>
- <router-link to="/builtin/staticmethod">staticmethod()</router-link>
- <router-link to="/builtin/property">property()</router-link>
- <router-link to="/builtin/isinstance">isinstance()</router-link>
- <router-link to="/builtin/issubclass">issubclass()</router-link>
- <router-link to="/builtin/super">super()</router-link>
