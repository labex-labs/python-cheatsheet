---
title: 'Fonctions Python - Aide-mémoire Python'
description: 'En Python, une fonction est un bloc de code organisé utilisé pour effectuer une tâche unique.'
labUrl: 'https://labex.io/fr/labs/python-python-functions-633658?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonctions Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://en.wikiversity.org/wiki/Programming_Fundamentals/Functions">Fonctions de Programmation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Une fonction est un bloc de code organisé utilisé pour effectuer une tâche unique. Elles offrent une meilleure modularité pour votre application et une réutilisabilité.
  </base-disclaimer-content>
</base-disclaimer>

## Arguments de Fonction

Une fonction peut prendre des `arguments` et `retourner des valeurs` :

Dans l'exemple suivant, la fonction **say_hello** reçoit l'argument "name" et affiche une salutation :

```python
# Définir une fonction qui prend un argument
def say_hello(name):
   print(f'Hello {name}')

# Appeler la fonction avec un argument de type chaîne
say_hello('Carlos')
```

```output
Hello Carlos
```

```python
say_hello('Wanda')
```

```output
Hello Wanda
```

```python
say_hello('Rose')
```

```output
Hello Rose
```

## Arguments Nommés (Keyword Arguments)

Pour améliorer la lisibilité du code, nous devons être aussi explicites que possible. Nous pouvons y parvenir dans nos fonctions en utilisant des `Arguments Nommés` (`Keyword Arguments`) :

```python
# Fonction avec plusieurs paramètres
def say_hi(name, greeting):
   print(f"{greeting} {name}")

# Arguments positionnels : l'ordre compte
say_hi('John', 'Hello')
```

```output
Hello John
```

```python
# Arguments nommés : l'ordre n'a pas d'importance, plus lisible
say_hi(name='Anna', greeting='Hi')
```

```output
Hi Anna
```

## Valeurs de Retour

Lors de la création d'une fonction à l'aide de l'instruction `def`, vous pouvez spécifier quelle doit être la valeur de retour avec une instruction `return`. Une instruction de retour se compose des éléments suivants :

- Le mot-clé `return`.

- La valeur ou l'expression que la fonction doit retourner.

```python
# Fonction qui retourne une valeur en utilisant l'instruction return
def sum_two_numbers(number_1, number_2):
   return number_1 + number_2

# Appeler la fonction et stocker la valeur retournée
result = sum_two_numbers(7, 8)
print(result)
```

```output
15
```

## Portée Locale et Globale (Scope)

- Le code dans la portée globale ne peut utiliser aucune variable locale.

- Cependant, une portée locale peut accéder aux variables globales.

- Le code dans la portée locale d'une fonction ne peut pas utiliser de variables dans toute autre portée locale.

- Vous pouvez utiliser le même nom pour différentes variables si elles se trouvent dans des portées différentes. C'est-à-dire qu'il peut y avoir une variable locale nommée `spam` et une variable globale également nommée `spam`.

```python
# Variable globale : accessible partout
global_variable = 'I am available everywhere'

def some_function():
    print(global_variable)  # Peut accéder à la variable globale
    # Variable locale : n'existe qu'à l'intérieur de cette fonction
    local_variable = "only available within this function"
    print(local_variable)

# Ceci lèvera NameError : local_variable n'existe pas dans la portée globale
print(local_variable)
```

```output
Traceback (most recent call last):
  File "<stdin>", line 10, in <module>
NameError: name 'local_variable' is not defined
```

## L'instruction global

Si vous devez modifier une variable globale depuis l'intérieur d'une fonction, utilisez l'instruction `global` :

```python
# Utiliser le mot-clé 'global' pour modifier une variable globale depuis l'intérieur de la fonction
def spam():
    global eggs  # Déclarer que nous modifions la variable globale
    eggs = 'spam'  # Ceci change la variable globale

eggs = 'global'
spam()  # La fonction modifie la variable globale
print(eggs)  # Affiche 'spam', pas 'global'
```

```output
spam
```

Il y a quatre règles pour déterminer si une variable est dans une portée locale ou globale :

1. Si une variable est utilisée dans la portée globale (c'est-à-dire en dehors de toutes les fonctions), alors c'est toujours une variable globale.

1. S'il existe une instruction `global` pour cette variable dans une fonction, c'est une variable globale.

1. Sinon, si la variable est utilisée dans une instruction d'affectation dans la fonction, c'est une variable locale.

1. Mais si la variable n'est pas utilisée dans une instruction d'affectation, c'est une variable globale.

## Fonctions Lambda

En Python, une fonction lambda est une fonction anonyme sur une seule ligne, qui peut avoir n'importe quel nombre d'arguments, mais elle ne peut avoir qu'une seule expression.

<base-disclaimer>
  <base-disclaimer-title>
    Depuis le <a target="_blank" href="https://docs.python.org/3/library/ast.html?highlight=lambda#function-and-class-definitions">Tutoriel Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    lambda est une définition de fonction minimale qui peut être utilisée à l'intérieur d'une expression. Contrairement à FunctionDef, body contient un seul nœud.
  </base-disclaimer-content>
</base-disclaimer>

<base-warning>
  <base-warning-title>
    Expression sur une seule ligne
  </base-warning-title>
  <base-warning-content>
    Les fonctions Lambda ne peuvent évaluer qu'une expression, comme une seule ligne de code.
  </base-warning-content>
</base-warning>

Cette fonction :

```python
# Définition de fonction régulière
def add(x, y):
    return x + y

add(5, 3)
```

```output
8
```

Est équivalente à la fonction _lambda_ :

```python
# Fonction Lambda : fonction anonyme définie en une seule ligne
# Syntaxe : lambda arguments: expression
add = lambda x, y: x + y
add(5, 3)
```

```output
8
```

Comme les fonctions imbriquées régulières, les lambdas fonctionnent également comme des fermetures lexicales :

```python
# Fermeture Lambda : fonction lambda qui capture une variable de la portée extérieure
def make_adder(n):
    return lambda x: x + n  # Lambda capture 'n' de la fonction extérieure

# Créer des fonctions qui ajoutent différents montants
plus_3 = make_adder(3)  # Retourne lambda qui ajoute 3
plus_5 = make_adder(5)  # Retourne lambda qui ajoute 5

plus_3(4)  # Retourne 4 + 3 = 7
```

```output
7
```

```python
plus_5(4)
```

```output
9
```

## Liens pertinents

- <router-link to="/blog/python-easy-args-kwargs">Explication de \*args et \*\*kwargs</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">Args et Kwargs</router-link>
- <router-link to="/cheatsheet/decorators">Décorateurs</router-link>
- <router-link to="/cheatsheet/control-flow">Flux de Contrôle</router-link>
- <router-link to="/cheatsheet/basics">Bases</router-link>
- <router-link to="/builtin">Fonctions Intégrées</router-link>
