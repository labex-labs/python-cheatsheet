---
title: 'Bases de la POO en Python - Fiche de référence Python'
description: 'La Programmation Orientée Objet (POO) est un paradigme centré sur les objets, instances de classes. Les principes de la POO sont fondamentaux pour la conception logicielle. Python supporte la POO via les classes et les objets. Voici les principes de base de la POO en Python.'
labUrl: 'https://labex.io/fr/labs/python-python-oop-basics-633662?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Bases de la POO en Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a href="https://en.wikipedia.org/wiki/Object-oriented_programming">Programmation Orientée Objet</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    La programmation orientée objet (POO) est un paradigme de programmation basé sur le concept d'« objets », qui peuvent contenir des données et du code. Les données se présentent sous forme de champs (souvent appelés attributs ou propriétés), et le code sous forme de procédures (souvent appelées méthodes).
  </base-disclaimer-content>
</base-disclaimer>

## Encapsulation

L'encapsulation est l'un des concepts fondamentaux de la programmation orientée objet, qui aide à protéger les données et les méthodes d'un objet contre tout accès et modification non autorisés. C'est une manière d'atteindre l'abstraction des données, ce qui signifie que les détails d'implémentation d'un objet sont cachés du monde extérieur, et seule l'information essentielle est exposée.

En Python, l'encapsulation peut être réalisée en utilisant des modificateurs d'accès. Les modificateurs d'accès sont des mots-clés qui définissent l'accessibilité des attributs et des méthodes dans une classe. Les trois modificateurs d'accès disponibles en Python sont public, private et protected. Cependant, Python n'a pas de manière explicite de définir des modificateurs d'accès comme certains autres langages de programmation tels que Java et C++. Au lieu de cela, il utilise une convention consistant à utiliser des préfixes de soulignement pour indiquer le niveau d'accès.

Dans l'exemple de code donné, la classe `MyClass` possède deux attributs, `_protected_var` et `__private_var`. Le `_protected_var` est marqué comme protégé en utilisant un préfixe de soulignement simple. Cela signifie que l'attribut peut être accédé au sein de la classe et de ses sous-classes, mais pas à l'extérieur de la classe. Le `__private_var` est marqué comme privé en utilisant deux préfixes de soulignement. Cela signifie que l'attribut ne peut être accédé qu'à l'intérieur de la classe et non à l'extérieur de la classe, pas même dans ses sous-classes.

Lorsque nous créons un objet de la classe `MyClass`, nous pouvons accéder à l'attribut `_protected_var` en utilisant le nom de l'objet avec un préfixe de soulignement simple. Cependant, nous ne pouvons pas accéder à l'attribut `__private_var` en utilisant le nom de l'objet, car il est caché du monde extérieur. Si nous essayons d'accéder à l'attribut `__private_var`, nous obtiendrons une `AttributeError` comme indiqué dans le code.

En résumé, l'encapsulation est un concept important en programmation orientée objet qui aide à protéger les détails d'implémentation d'un objet. En Python, nous pouvons réaliser l'encapsulation en utilisant des modificateurs d'accès et en utilisant des préfixes de soulignement pour indiquer le niveau d'accès.

```python
# Définir une classe nommée MyClass
class MyClass:

    # Méthode constructeur qui initialise l'objet de la classe
    def __init__(self):

        # Définir une variable protégée avec une valeur initiale de 10
        # Le nom de la variable commence par un seul trait de soulignement, ce qui indique un accès protégé
        self._protected_var = 10

        # Définir une variable privée avec une valeur initiale de 20
        # Le nom de la variable commence par deux traits de soulignement, ce qui indique un accès privé
        self.__private_var = 20

# Créer un objet de la classe MyClass
obj = MyClass()

# Accéder à la variable protégée en utilisant le nom de l'objet et afficher sa valeur
# La variable protégée peut être accédée à l'extérieur de la classe mais
# elle est destinée à être utilisée à l'intérieur de la classe ou de ses sous-classes
print(obj._protected_var)   # sortie : 10

# Essayer d'accéder à la variable privée en utilisant le nom de l'objet et afficher sa valeur
# La variable privée ne peut pas être accédée à l'extérieur de la classe, même par ses sous-classes
# Cela lèvera une AttributeError car la variable n'est pas accessible à l'extérieur de la classe
print(obj.__private_var)    # AttributeError: 'MyClass' object has no attribute '__private_var'

```

## Héritage

L'héritage favorise la réutilisation du code et vous permet de créer une hiérarchie de classes qui partagent des attributs et des méthodes communs. Il aide à créer un code propre et organisé en gardant les fonctionnalités liées au même endroit et en promouvant le concept de modularité. La classe de base à partir de laquelle une nouvelle classe est dérivée est également connue sous le nom de classe parente, et la nouvelle classe est connue sous le nom de classe enfant ou sous-classe.

Dans le code, nous définissons une classe nommée `Animal` qui possède une méthode constructeur qui initialise l'objet de la classe avec un attribut de nom et une méthode nommée `speak`. La méthode `speak` est définie dans la classe `Animal` mais n'a pas de corps.

Nous définissons ensuite deux sous-classes nommées `Dog` et `Cat` qui héritent de la classe `Animal`. Ces sous-classes remplacent la méthode `speak` de la classe `Animal`.

Nous créons un objet `Dog` avec un attribut de nom "Rover" et un objet `Cat` avec un attribut de nom "Whiskers". Nous appelons la méthode `speak` de l'objet `Dog` en utilisant `dog.speak()`, et elle imprime "Woof!" car la méthode `speak` de la classe `Dog` surcharge la méthode `speak` de la classe `Animal`. De même, nous appelons la méthode `speak` de l'objet `Cat` en utilisant `cat.speak()`, et elle imprime "Meow!" car la méthode `speak` de la classe `Cat` surcharge la méthode `speak` de la classe `Animal`.

```python
# Définir une classe nommée Animal
class Animal:

    # Méthode constructeur qui initialise l'objet de la classe avec un attribut de nom
    def __init__(self, name):
        self.name = name

    # Méthode qui est définie dans la classe Animal mais n'a pas de corps
    # Cette méthode sera remplacée dans les sous-classes d'Animal
    def speak(self):
        print("")

# Définir une sous-classe nommée Dog qui hérite de la classe Animal
class Dog(Animal):

    # Remplacer la méthode speak de la classe Animal
    def speak(self):
        print("Woof!")

# Définir une sous-classe nommée Cat qui hérite de la classe Animal
class Cat(Animal):

    # Remplacer la méthode speak de la classe Animal
    def speak(self):
        print("Meow!")

# Créer un objet Dog avec un attribut de nom "Rover"
dog = Dog("Rover")

# Créer un objet Cat avec un attribut de nom "Whiskers"
cat = Cat("Whiskers")

# Appeler la méthode speak de la classe Dog et afficher la sortie
# La méthode speak de la classe Dog surcharge la méthode speak de la classe Animal
# Par conséquent, lorsque nous appelons la méthode speak de l'objet Dog, elle affichera "Woof!"
dog.speak()   # sortie : Woof!

# Appeler la méthode speak de la classe Cat et afficher la sortie
# La méthode speak de la classe Cat surcharge la méthode speak de la classe Animal
# Par conséquent, lorsque nous appelons la méthode speak de l'objet Cat, elle affichera "Meow!"
cat.speak()   # sortie : Meow!

```

## Polymorphisme

Le polymorphisme est un concept important en programmation orientée objet qui vous permet d'écrire du code pouvant fonctionner avec des objets de différentes classes d'une manière uniforme. En Python, le polymorphisme est réalisé en utilisant la surcharge de méthode (method overriding) ou la surcharge de fonction (method overloading).

La surcharge de méthode est lorsqu'une sous-classe fournit sa propre implémentation d'une méthode déjà définie dans sa classe parente. Cela permet à la sous-classe de modifier le comportement de la méthode sans changer son nom ou sa signature.

La surcharge de fonction est lorsque plusieurs méthodes ont le même nom mais des paramètres différents. Python ne prend pas en charge la surcharge de fonction directement, mais elle peut être réalisée en utilisant des arguments par défaut ou des arguments de longueur variable.

Le polymorphisme facilite l'écriture de code flexible et réutilisable. Il vous permet d'écrire du code qui peut fonctionner avec différents objets sans avoir besoin de connaître leurs types spécifiques.

```python
# La classe Shape est définie avec une méthode area abstraite, destinée à être remplacée par les sous-classes.
class Shape:
    def area(self):
        pass

class Rectangle(Shape):
    # La classe Rectangle est définie avec une méthode __init__ qui initialise
    # les variables d'instance width et height.
    # Elle définit également une méthode area qui calcule et retourne
    # l'aire d'un rectangle en utilisant les variables d'instance width et height.
    def __init__(self, width, height):
        self.width = width  # Initialiser la variable d'instance width
        self.height = height  # Initialiser la variable d'instance height

    def area(self):
        return self.width * self.height  # Retourner l'aire du rectangle


 # La classe Circle est définie avec une méthode __init__
 # qui initialise une variable d'instance radius.
 # Elle définit également une méthode area qui calcule et
 # retourne l'aire d'un cercle en utilisant la variable d'instance radius.
class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius  # Initialiser la variable d'instance radius

    def area(self):
        return 3.14 * self.radius ** 2  # Retourner l'aire du cercle en utilisant pi * r^2

# La liste shapes est créée avec un objet Rectangle et un objet Circle. La boucle
# for itère sur chaque objet de la liste et appelle la méthode area de chaque objet
# La sortie sera l'aire du rectangle (20) et l'aire du cercle (153.86).
shapes = [Rectangle(4, 5), Circle(7)]  # Créer une liste d'objets Shape
for shape in shapes:
    print(shape.area())  # Afficher l'aire de chaque objet Shape

```

## Abstraction

L'abstraction est un concept important en programmation orientée objet (POO) car elle vous permet de vous concentrer sur les caractéristiques essentielles d'un objet ou d'un système tout en ignorant les détails qui ne sont pas pertinents pour le contexte actuel. En réduisant la complexité et en masquant les détails inutiles, l'abstraction peut rendre le code plus modulaire, plus facile à lire et plus facile à maintenir.

En Python, l'abstraction peut être réalisée en utilisant des classes abstraites ou des interfaces. Une classe abstraite est une classe qui ne peut pas être instanciée directement, mais qui est destinée à être sous-classée par d'autres classes. Elle inclut souvent des méthodes abstraites qui n'ont pas d'implémentation, mais fournissent un modèle sur la manière dont la sous-classe doit être implémentée. Cela permet au programmeur de définir une interface commune pour un groupe de classes connexes, tout en permettant à chaque classe d'avoir son propre comportement spécifique.

Une interface, en revanche, est une collection de signatures de méthodes qu'une classe doit implémenter pour être considérée comme « compatible » avec l'interface. Les interfaces sont souvent utilisées pour définir un ensemble commun de méthodes que plusieurs classes peuvent implémenter, leur permettant d'être utilisées de manière interchangeable dans certains contextes.

Python n'a pas de support intégré pour les classes abstraites ou les interfaces, mais elles peuvent être implémentées en utilisant le module `abc` (abstract base class). Ce module fournit la classe `ABC` et le décorateur `abstractmethod`, qui peuvent être utilisés pour définir des classes et des méthodes abstraites.

Dans l'ensemble, l'abstraction est un outil puissant pour gérer la complexité et améliorer la qualité du code en programmation orientée objet, et Python offre une gamme d'options pour réaliser l'abstraction dans votre code.

```python
# Importer le module abc pour définir des classes et des méthodes abstraites
from abc import ABC, abstractmethod

# Définir une classe abstraite appelée Shape qui possède une méthode abstraite appelée area
class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

# Définir une classe Rectangle qui hérite de Shape
class Rectangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    # Implémenter la méthode area pour les Rectangles
    def area(self):
        return self.width * self.height

# Définir une classe Circle qui hérite également de Shape
class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    # Implémenter la méthode area pour les Cercles
    def area(self):
        return 3.14 * self.radius ** 2

# Créer une liste de formes qui comprend à la fois des Rectangles et des Cercles
shapes = [Rectangle(4, 5), Circle(7)]

# Parcourir chaque forme dans la liste et afficher son aire
for shape in shapes:
    print(shape.area())

```

Ce sont quelques-uns des principes de base de la POO en Python. Cette page est actuellement en cours de rédaction et des exemples et explications plus détaillés seront bientôt disponibles.

## Liens pertinents

- <router-link to="/cheatsheet/functions">Fonctions</router-link>
- <router-link to="/cheatsheet/decorators">Décorateurs</router-link>
- <router-link to="/cheatsheet/exception-handling">Gestion des Exceptions</router-link>
- <router-link to="/cheatsheet/dataclasses">Dataclasses</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/classmethod">classmethod()</router-link>
- <router-link to="/builtin/staticmethod">staticmethod()</router-link>
- <router-link to="/builtin/property">property()</router-link>
- <router-link to="/builtin/isinstance">isinstance()</router-link>
- <router-link to="/builtin/issubclass">issubclass()</router-link>
- <router-link to="/builtin/super">super()</router-link>
