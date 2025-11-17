---
title: 'Décorateurs Python - Aide-mémoire Python'
description: "Un décorateur Python est une syntaxe offrant une manière concise et réutilisable d'étendre une fonction ou une classe."
labUrl: 'https://labex.io/fr/labs/python-python-decorators-633654?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Décorateurs Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Un décorateur Python offre une manière concise et réutilisable d'étendre
une fonction ou une classe. Lisez l'article compagnon <router-link to="/blog/python-decorators-for-beginners">Décorateurs Python : Modèles Simples pour Améliorer Votre Code</router-link> pour des exemples pratiques et des modèles.

## Décorateur de base

Un décorateur dans sa forme la plus simple est une fonction qui prend une autre
fonction comme argument et retourne un enveloppeur (_wrapper_). L'exemple suivant montre la création d'un décorateur et son utilisation.

```python
# Décorateur : une fonction qui prend une autre fonction et retourne un enveloppeur
def your_decorator(func):
  def wrapper():
    # Faire des choses avant func...
    print("Before func!")
    func()  # Appeler la fonction originale
    # Faire des choses après func...
    print("After func!")
  return wrapper  # Retourner la fonction enveloppeuse

# @your_decorator est du sucre syntaxique pour : foo = your_decorator(foo)
@your_decorator
def foo():
  print("Hello World!")

foo()  # Appelle wrapper, qui appelle foo avec un comportement supplémentaire
```

Sortie :

```plaintext
Before func!
Hello World!
After func!
```

## Décorateur pour une fonction avec paramètres

```python
# Décorateur qui fonctionne avec des fonctions ayant des paramètres
def your_decorator(func):
  def wrapper(*args,**kwargs):  # Accepter n'importe quels arguments
    # Faire des choses avant func...
    print("Before func!")
    func(*args,**kwargs)  # Passer les arguments à la fonction originale
    # Faire des choses après func...
    print("After func!")
  return wrapper

@your_decorator
def foo(bar):
  print("My name is " + bar)

foo("Jack")  # Les arguments sont passés via l'enveloppeur
```

Sortie :

```plaintext
Before func!
My name is Jack
After func!
```

## Modèle pour un décorateur de base

Ce modèle est utile pour la plupart des cas d'utilisation de décorateurs. Il est valide pour les fonctions
avec ou sans paramètres, et avec ou sans valeur de retour.

```python
import functools

# Modèle de décorateur de bonne pratique : préserve les métadonnées et la valeur de retour de la fonction
def your_decorator(func):
  @functools.wraps(func)  # Préserve le nom de la fonction, la docstring, etc.
  def wrapper(*args,**kwargs):
    # Faire des choses avant func...
    result = func(*args,**kwargs)  # Appeler la fonction et capturer la valeur de retour
    # Faire des choses après func..
    return result  # Retourner la valeur de retour de la fonction originale
  return wrapper
```

## Décorateur avec paramètres

Vous pouvez également définir des paramètres pour le décorateur à utiliser.

```python
import functools

# Usine à décorateur : retourne un décorateur basé sur les paramètres
def your_decorator(arg):
  def decorator(func):
    @functools.wraps(func)  # Préserver les métadonnées de la fonction
    def wrapper(*args,**kwargs):
      # Faire des choses avant func potentiellement en utilisant arg...
      result = func(*args,**kwargs)
      # Faire des choses après func potentiellement en utilisant arg...
      return result
    return wrapper
  return decorator  # Retourner la fonction de décorateur réelle
```

Pour utiliser ce décorateur :

```python
# Utilisation du décorateur avec paramètres : @your_decorator(arg='x') appelle your_decorator('x')
# qui retourne un décorateur qui est ensuite appliqué à foo
@your_decorator(arg = 'x')
def foo(bar):
  return bar
```

## Décorateurs basés sur des classes

Pour décorer une méthode de classe, vous devez définir le décorateur à l'intérieur de la classe. Lorsque seul l'argument implicite `self` est passé à la méthode, sans aucun argument supplémentaire explicite, vous devez créer un décorateur séparé uniquement pour ces méthodes sans arguments supplémentaires. Un exemple de ceci, montré ci-dessous, est lorsque vous souhaitez intercepter et imprimer les exceptions d'une certaine manière.

```python
# Décorateur de méthode de classe : défini à l'intérieur de la classe
class DecorateMyMethod:

  # Décorateur de méthode statique pour les méthodes avec seulement le paramètre 'self'
  def decorator_for_class_method_with_no_args(method):
    def wrapper_for_class_method(self):  # Ne prend que self
      try:
        return method(self)  # Appeler la méthode originale
      except Exception as e:
        print("\nWARNING: Please make note of the following:\n")
        print(e)
    return wrapper_for_class_method

  def __init__(self,succeed:bool):
    self.succeed = succeed

  @decorator_for_class_method_with_no_args
  def class_action(self):
    if self.succeed:
      print("You succeeded by choice.")
    else:
      raise Exception("Epic fail of your own creation.")

test_succeed = DecorateMyMethod(True)
test_succeed.class_action()
```

Sortie :

```plaintext
You succeeded by choice.
```

```python
test_fail = DecorateMyMethod(False)
test_fail.class_action()
```

Sortie :

```plaintext
Exception: Epic fail of your own creation.
```

Un décorateur peut également être défini comme une classe au lieu d'une méthode. Ceci est utile pour maintenir et mettre à jour un état, comme dans l'exemple suivant, où nous comptons le nombre d'appels effectués à une méthode :

```python
# Décorateur basé sur une classe : maintient l'état entre les appels
class CountCallNumber:

  def __init__(self, func):
    self.func = func  # Stocker la fonction à décorer
    self.call_number = 0  # Initialiser le compteur d'appels

  def __call__(self, *args, **kwargs):  # Rend l'instance appelable
    self.call_number += 1  # Incrémenter le compteur
    print("This is execution number " + str(self.call_number))
    return self.func(*args, **kwargs)  # Appeler la fonction originale

@CountCallNumber  # Crée une instance de CountCallNumber
def say_hi(name):
  print("Hi! My name is " + name)

say_hi("Jack")  # Appelle CountCallNumber.__call__()
```

Sortie :

```plaintext
This is execution number 1
Hi! My name is Jack
```

```python
say_hi("James")
```

Sortie :

```plaintext
This is execution number 2
Hi! My name is James
```

<base-disclaimer>
  <base-disclaimer-title>
    Exemple de Compteur
  </base-disclaimer-title>
  <base-disclaimer-content>
  Cet exemple de compteur est inspiré du <a href="https://youtu.be/HGOBQPFzWKo?si=IUvFzeQbzTmeEgKV" target="_blank">tutoriel YouTube</a> de Patrick Loeber.
  </base-disclaimer-content>
</base-disclaimer>

## Liens pertinents

- <router-link to="/blog/python-decorators-for-beginners">Décorateurs Python : Modèles Simples pour Améliorer Votre Code</router-link>
- <router-link to="/blog/python-easy-args-kwargs">Python \*args et \*\*kwargs Simplifiés</router-link>
- <router-link to="/cheatsheet/functions">Fonctions</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">Args et Kwargs</router-link>
- <router-link to="/builtin/classmethod">classmethod()</router-link>
- <router-link to="/builtin/staticmethod">staticmethod()</router-link>
- <router-link to="/builtin/property">property()</router-link>
- <router-link to="/builtin/callable">callable()</router-link>
