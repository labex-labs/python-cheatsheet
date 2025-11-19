---
title: 'Gestion des Exceptions Python - Fiche Récapitulative Python'
description: "En Python, la gestion des exceptions est le processus de réponse à l'occurrence d'exceptions."
labUrl: 'https://labex.io/fr/labs/python-python-exception-handling-633656?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Gestion des Exceptions Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://en.wikipedia.org/wiki/Exception_handling">Gestion des exceptions</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    En informatique et en programmation informatique, la gestion des exceptions est le processus de réponse à l'occurrence d'exceptions – des conditions anormales ou exceptionnelles nécessitant un traitement spécial.
  </base-disclaimer-content>
</base-disclaimer>

Python possède de nombreuses [exceptions intégrées](https://docs.python.org/3/library/exceptions.html) qui sont levées lorsqu'un programme rencontre une erreur, et la plupart des bibliothèques externes, comme la populaire [Requests](https://requests.readthedocs.io/en/latest), incluent ses propres [exceptions personnalisées](https://requests.readthedocs.io/en/latest/user/quickstart/#errors-and-exceptions) que nous devrons gérer.

## Gestion des exceptions de base

Vous ne pouvez pas diviser par zéro, c'est une vérité mathématique, et si vous essayez de le faire en Python, l'interpréteur lèvera l'exception intégrée [ZeroDivisionError](https://docs.python.org/3/library/exceptions.html#ZeroDivisionError) :

```python
def divide(dividend , divisor):
    print(dividend / divisor)

divide(dividend=10, divisor=5)
```

```output
2
```

```python
divide(dividend=10, divisor=0)
```

```output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ZeroDivisionError: division by zero
```

Supposons que nous ne voulions pas que notre programme arrête son exécution ou affiche à l'utilisateur une sortie qu'il ne comprendra pas. Disons que nous voulons imprimer un message utile et clair, alors nous devons **_gérer_** l'exception avec les mots-clés `try` et `except` :

```python
# try-except: gérer les exceptions avec élégance
def divide(dividend , divisor):
    try:  # Essayer d'exécuter ce code
        print(dividend / divisor)
    except ZeroDivisionError:  # Capturer le type d'exception spécifique
        print('Vous ne pouvez pas diviser par 0')

divide(dividend=10, divisor=5)
```

```output
2
```

```python
divide(dividend=10, divisor=0)
```

```output
Vous ne pouvez pas diviser par 0
```

## Gestion de multiples exceptions à l'aide d'un seul bloc d'exception

Vous pouvez également gérer plusieurs exceptions sur une seule ligne comme suit sans avoir besoin de créer plusieurs blocs d'exception.

```python
# Gérer plusieurs exceptions dans un seul bloc except
def divide(dividend , divisor):
    try:
        if (dividend == 10):
          var = 'str' + 1  # Ceci lèvera TypeError
        else:
          print(dividend / divisor)
    except (ZeroDivisionError, TypeError) as error:  # Capturer plusieurs types d'exceptions
        print(error)  # Afficher le message d'erreur

divide(dividend=20, divisor=5)
```

```output
4
```

```python
divide(dividend=10, divisor=5)
```

```output
can only concatenate str (not "int") to str
```

```python
divide(dividend=10, divisor=0)
```

```output
division by zero
```

## Code Finally dans la gestion des exceptions

Le code à l'intérieur de la section `finally` est toujours exécuté, qu'une exception ait été levée ou non :

```python
# Bloc finally : s'exécute toujours, quelles que soient les exceptions
def divide(dividend , divisor):
    try:
        print(dividend / divisor)
    except ZeroDivisionError:
        print('Vous ne pouvez pas diviser par 0')
    finally:  # S'exécute toujours, même si une exception se produit
        print('Exécution terminée')

divide(dividend=10, divisor=5)
```

```output
2.0
Exécution terminée
```

```python
divide(dividend=10, divisor=0)
```

```output
Vous ne pouvez pas diviser par 0
Exécution terminée
```

## Exceptions personnalisées

Les exceptions personnalisées s'initialisent en créant une `class` qui hérite de la classe de base `Exception` de Python, et sont levées à l'aide du mot-clé `raise` :

```python
# Exception personnalisée : créée en héritant de la classe Exception
class MyCustomException(Exception):
    pass

raise MyCustomException  # Lever l'exception personnalisée
```

```output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
__main__.MyCustomException
```

Pour déclarer un message d'exception personnalisé, vous pouvez le passer comme paramètre :

```python
class MyCustomException(Exception):
    pass

raise MyCustomException('Un message personnalisé pour mon exception personnalisée')
```

```output
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
__main__.MyCustomException: Un message personnalisé pour mon exception personnalisée
```

La gestion d'une exception personnalisée est la même que pour toute autre :

```python
try:
    raise MyCustomException('Un message personnalisé pour mon exception personnalisée')
except MyCustomException:
    print('Mon exception personnalisée a été levée')
```

```output
Mon exception personnalisée a été levée
```

## Liens pertinents

- <router-link to="/cheatsheet/control-flow">Flux de contrôle</router-link>
- <router-link to="/builtin/breakpoint">breakpoint()</router-link>
- <router-link to="/builtin/isinstance">isinstance()</router-link>
- <router-link to="/builtin/issubclass">issubclass()</router-link>
