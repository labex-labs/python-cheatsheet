---
title: 'Flux de Contrôle Python - Fiche Récapitulative Python'
description: "Le flux de contrôle est l'ordre d'exécution des instructions, commandes ou appels de fonction. Il est régulé par les instructions conditionnelles, les boucles et les appels de fonction en Python."
labUrl: 'https://labex.io/fr/labs/python-python-control-flow-633651?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Flux de Contrôle Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    Flux de contrôle Python
  </base-disclaimer-title>
  <base-disclaimer-content>
  Le flux de contrôle est l'ordre dans lequel les instructions individuelles, les commandes ou les appels de fonction sont exécutés ou évalués. Le flux de contrôle d'un programme Python est régi par des instructions conditionnelles, des boucles et des appels de fonction.
  </base-disclaimer-content>
</base-disclaimer>

## Opérateurs de Comparaison

| Opérateur | Signification       |
| --------- | ------------------- |
| `==`      | Égal à              |
| `!=`      | Différent de        |
| `<`       | Inférieur à         |
| `>`       | Supérieur à         |
| `<=`      | Inférieur ou égal à |
| `>=`      | Supérieur ou égal à |

Ces opérateurs s'évaluent à True ou False en fonction des valeurs qui leur sont données.

Exemples :

```python
42 == 42
```

Sortie :

```plaintext
True
```

```python
40 == 42
```

Sortie :

```plaintext
False
```

```python
'hello' == 'hello'
```

Sortie :

```plaintext
True
```

```python
'hello' == 'Hello'
```

Sortie :

```plaintext
False
```

```python
'dog' != 'cat'
```

Sortie :

```plaintext
True
```

```python
42 == 42.0
```

Sortie :

```plaintext
True
```

```python
42 == '42'
```

Sortie :

```plaintext
False
```

## Opérateurs Booléens

Il existe trois opérateurs booléens : `and`, `or`, et `not`.
Dans l'ordre de précédence, du plus élevé au plus bas, ils sont `not`, `and` et `or`.

Table de vérité de l'opérateur `and` :

| Expression        | Évaluation |
| ----------------- | ---------- |
| `True and True`   | `True`     |
| `True and False`  | `False`    |
| `False and True`  | `False`    |
| `False and False` | `False`    |

Table de vérité de l'opérateur `or` :

| Expression       | Évaluation |
| ---------------- | ---------- |
| `True or True`   | `True`     |
| `True or False`  | `True`     |
| `False or True`  | `True`     |
| `False or False` | `False`    |

Table de vérité de l'opérateur `not` :

| Expression  | Évaluation |
| ----------- | ---------- |
| `not True`  | `False`    |
| `not False` | `True`     |

## Mélange d'Opérateurs

Vous pouvez mélanger des opérateurs booléens et de comparaison :

```python
(4 < 5) and (5 < 6)
```

Sortie :

```plaintext
True
```

```python
(4 < 5) and (9 < 6)
```

Sortie :

```plaintext
False
```

```python
(1 == 2) or (2 == 2)
```

Sortie :

```plaintext
True
```

Vous pouvez également utiliser plusieurs opérateurs booléens dans une expression, ainsi que les opérateurs de comparaison :

```python
2 + 2 == 4 and not 2 + 2 == 5 and 2 * 2 == 2 + 2
```

Sortie :

```plaintext
True
```

```python
# Dans l'instruction ci-dessous, 3 < 4 and 5 > 5 est exécuté en premier, s'évaluant à False
# Ensuite, 5 > 4 retourne True, donc le résultat après True or False est True
5 > 4 or 3 < 4 and 5 > 5
```

Sortie :

```plaintext
True
```

```python
# Maintenant, l'expression entre parenthèses est exécutée en premier, donc True and False retourne False.
(5 > 4 or 3 < 4) and 5 > 5
```

Sortie :

```plaintext
False
```

## Instructions if

L'instruction `if` évalue une expression, et si cette expression est `True`, elle exécute ensuite le code indenté suivant :

```python
# instruction if : exécute un bloc de code lorsque la condition est Vraie
name = 'Debora'

if name == 'Debora':  # Vérifie si name est égal à 'Debora'
   print('Hi, Debora')  # Cette ligne s'exécute si la condition est Vraie
```

Sortie :

```plaintext
Hi, Debora
```

```python
if name != 'George':
   print('You are not George')
```

Sortie :

```plaintext
You are not George
```

L'instruction `else` s'exécute uniquement si l'évaluation de l'expression `if` et de toutes les expressions `elif` sont `False` :

```python
# if-else : exécute un code différent en fonction de la condition
name = 'Debora'

if name == 'George':
   print('Hi, George.')
else:  # S'exécute si la condition if est Fausse
   print('You are not George')
```

Sortie :

```plaintext
You are not George
```

Ce n'est qu'après que l'expression de l'instruction `if` soit `False` que l'instruction `elif` est évaluée et exécutée :

```python
# if-elif : vérifie plusieurs conditions en séquence
name = 'George'

if name == 'Debora':
   print('Hi Debora!')
elif name == 'George':  # Vérifié uniquement si la condition précédente est Fausse
   print('Hi George!')
```

Sortie :

```plaintext
Hi George!
```

Les parties `elif` et `else` sont facultatives.

```python
name = 'Antony'

if name == 'Debora':
   print('Hi Debora!')
elif name == 'George':
   print('Hi George!')
else:
   print('Who are you?')
```

Sortie :

```plaintext
Who are you?
```

## Opérateur Conditionnel Ternaire

De nombreux langages de programmation possèdent un opérateur ternaire, qui définit une expression conditionnelle. L'utilisation la plus courante est de créer une instruction d'affectation conditionnelle simple et concise. En d'autres termes, il offre un code sur une seule ligne pour évaluer la première expression si la condition est vraie, et sinon, il évalue la seconde expression.

```plaintext
<expression1> if <condition> else <expression2>
```

Exemple :

```python
age = 15

# cette instruction if :
if age < 18:
   print('kid')
else:
   print('adult')
```

Sortie :

```plaintext
kid
```

```python
# Opérateur ternaire : expression conditionnelle sur une seule ligne
# Syntaxe : valeur_si_vrai if condition else valeur_si_faux
print('kid' if age < 18 else 'adult')
```

Sortie :

```plaintext
kid
```

Les opérateurs ternaires peuvent être chaînés :

```python
age = 15

# cet opérateur ternaire :
print('kid' if age < 13 else 'teen' if age < 18 else 'adult')
```

Sortie :

```plaintext
teen
```

```python
# est équivalent à cette instruction if :
if age < 13:
    print('kid')
else:
    if age < 18:
        print('teen')
    else:
        print('adult')
```

Sortie :

```plaintext
teen
```

## Instruction Switch-Case

<base-disclaimer>
  <base-disclaimer-title>
    Instructions Switch-Case
  </base-disclaimer-title>
  <base-disclaimer-content>
  Dans les langages de programmation informatique, une instruction switch est un type de mécanisme de contrôle de sélection utilisé pour permettre à la valeur d'une variable ou d'une expression de modifier le flux de contrôle de l'exécution du programme par recherche et mappage.
  </base-disclaimer-content>
</base-disclaimer>

Les instructions _Switch-Case_, ou **Structural Pattern Matching**, ont été introduites pour la première fois en 2020 via [PEP 622](https://peps.python.org/pep-0622/), puis officiellement publiées avec **Python 3.10** en septembre 2022.

<base-disclaimer>
  <base-disclaimer-title>
    Tutoriel Officiel
  </base-disclaimer-title>
  <base-disclaimer-content>
  Le <a href="https://peps.python.org/pep-0636/" target="_blank">PEP 636</a> fournit un tutoriel officiel pour le Pattern Matching Python ou les instructions Switch-Case.
  </base-disclaimer-content>
</base-disclaimer>

### Correspondance de valeurs uniques

```python
response_code = 201
match response_code:
    case 200:
        print("OK")
    case 201:
        print("Created")
    case 300:
        print("Multiple Choices")
    case 307:
        print("Temporary Redirect")
    case 404:
        print("404 Not Found")
    case 500:
        print("Internal Server Error")
    case 502:
        print("502 Bad Gateway")
```

Sortie :

```plaintext
Created
```

### Correspondance avec le motif or

Dans cet exemple, le caractère pipe (`|` ou `or`) permet à Python de renvoyer la même réponse pour deux cas ou plus.

```python
response_code = 502
match response_code:
    case 200 | 201:
        print("OK")
    case 300 | 307:
        print("Redirect")
    case 400 | 401:
        print("Bad Request")
    case 500 | 502:
        print("Internal Server Error")
```

Sortie :

```plaintext
Internal Server Error
```

### Correspondance par la longueur d'un Itérable

```python
today_responses = [200, 300, 404, 500]
match today_responses:
    case [a]:
            print(f"One response today: {a}")
    case [a, b]:
            print(f"Two responses today: {a} and {b}")
    case [a, b, *rest]:
            print(f"All responses: {a}, {b}, {rest}")
```

Sortie :

```plaintext
All responses: 200, 300, [404, 500]
```

### Valeur par Défaut

Le symbole underscore (`_`) est utilisé pour définir un cas par défaut :

```python
response_code = 800
match response_code:
    case 200 | 201:
        print("OK")
    case 300 | 307:
        print("Redirect")
    case 400 | 401:
        print("Bad Request")
    case 500 | 502:
        print("Internal Server Error")
    case _:
        print("Invalid Code")
```

Sortie :

```plaintext
Invalid Code
```

### Correspondance des Classes Intégrées

```python
response_code = "300"
match response_code:
    case int():
            print('Code is a number')
    case str():
            print('Code is a string')
    case _:
            print('Code is neither a string nor a number')
```

Sortie :

```plaintext
Code is a string
```

### Protection des Instructions Match-Case

```python
response_code = 300
match response_code:
    case int():
            if response_code > 99 and response_code < 500:
                print('Code is a valid number')
    case _:
            print('Code is an invalid number')
```

Sortie :

```plaintext
Code is a valid number
```

## Instructions de Boucle while

L'instruction while est utilisée pour l'exécution répétée tant qu'une expression est `True` :

```python
# boucle while : répéter le code tant que la condition est Vraie
spam = 0
while spam < 5:  # Continuer tant que spam est inférieur à 5
    print('Hello, world.')
    spam = spam + 1  # Incrémenter le compteur pour éviter une boucle infinie
```

Sortie :

```plaintext
Hello, world.
Hello, world.
Hello, world.
Hello, world.
Hello, world.
```

## Instructions break

Si l'exécution atteint une instruction `break`, elle quitte immédiatement la clause de la boucle `while` :

```python
# instruction break : sortir immédiatement de la boucle lorsqu'elle est rencontrée
while True:  # Boucle infinie
    name = input('Please type your name: ')
    if name == 'your name':
        break  # Quitter la boucle immédiatement

print('Thank you!')
```

Sortie :

```plaintext
Please type your name: your name
Thank you!
```

## Instructions continue

Lorsque l'exécution du programme atteint une instruction `continue`, l'exécution du programme saute immédiatement au début de la boucle.

```python
# instruction continue : ignorer le reste de l'itération de la boucle et commencer l'itération suivante
while True:
    name = input('Who are you? ')
    if name != 'Joe':
        continue  # Passer à l'itération suivante, ne pas demander le mot de passe
    password = input('Password? (It is a fish.): ')
    if password == 'swordfish':
        break  # Quitter la boucle lorsque le mot de passe est correct

print('Access granted.')
```

Sortie :

```plaintext
Who are you? Charles
Who are you? Debora
Who are you? Joe
Password? (It is a fish.): swordfish
Access granted.
```

## Boucle For

La boucle `for` itère sur une `list`, `tuple`, `dictionary`, `set` ou `string` :

```python
# boucle for : itérer sur chaque élément d'une séquence
pets = ['Bella', 'Milo', 'Loki']
for pet in pets:  # Boucler sur chaque animal de compagnie dans la liste
    print(pet)  # Afficher chaque nom d'animal de compagnie
```

Sortie :

```plaintext
Bella
Milo
Loki
```

## La fonction range()

La fonction `range()` renvoie une séquence de nombres. Elle commence à 0, s'incrémente de 1 et s'arrête avant un nombre spécifié :

```python
for i in range(5):
    print(f'Will stop at 5! or 4? ({i})')
```

Sortie :

```plaintext
Will stop at 5! or 4? (0)
Will stop at 5! or 4? (1)
Will stop at 5! or 4? (2)
Will stop at 5! or 4? (3)
Will stop at 5! or 4? (4)
```

La fonction `range()` peut également modifier ses 3 arguments par défaut. Les deux premiers seront les valeurs `start` et `stop`, et le troisième sera l'argument `step`. Le pas est le montant par lequel la variable est augmentée après chaque itération.

```python
# range(start, stop, step)
for i in range(0, 10, 2):
   print(i)
```

Sortie :

```plaintext
0
2
4
6
8
```

Vous pouvez même utiliser un nombre négatif pour l'argument step afin que la boucle for compte à rebours au lieu de compter à rebours.

```python
for i in range(5, -1, -1):
    print(i)
```

Sortie :

```plaintext
5
4
3
2
1
0
```

## Instruction For else

Ceci permet de spécifier une instruction à exécuter si la boucle complète a été exécutée. Uniquement utile lorsqu'une condition `break` peut se produire dans la boucle :

```python
for i in [1, 2, 3, 4, 5]:
   if i == 3:
       break
else:
   print("only executed when no item is equal to 3")
```

## Terminer un Programme avec sys.exit()

La fonction `exit()` permet de quitter Python.

```python
import sys

while True:
    feedback = input('Type exit to exit: ')
    if feedback == 'exit':
        print(f'You typed {feedback}.')
        sys.exit()
```

Sortie :

```plaintext
Type exit to exit: open
Type exit to exit: close
Type exit to exit: exit
You typed exit.
```

## Liens pertinents

- <router-link to="/cheatsheet/basics">Bases</router-link>
- <router-link to="/cheatsheet/functions">Fonctions</router-link>
- <router-link to="/cheatsheet/exception-handling">Gestion des Exceptions</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Listes et Tuples</router-link>
- <router-link to="/cheatsheet/sets">Ensembles</router-link>
- <router-link to="/cheatsheet/dictionaries">Dictionnaires</router-link>
- <router-link to="/cheatsheet/comprehensions">Compréhensions</router-link>
