---
title: 'Débogage Python - Fiche de Référence Python'
description: 'En programmation informatique, le débogage est le processus de recherche et de résolution des bogues (défauts ou problèmes empêchant un fonctionnement correct) dans les programmes, logiciels ou systèmes informatiques.'
labUrl: 'https://labex.io/fr/labs/python-python-debugging-633653?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Débogage Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://en.wikipedia.org/wiki/Debugging">Trouver et résoudre les bogues</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    En programmation informatique et en développement logiciel, le débogage est le processus de recherche et de résolution des bogues (défauts ou problèmes empêchant un fonctionnement correct) dans les programmes informatiques, les logiciels ou les systèmes.
  </base-disclaimer-content>
</base-disclaimer>

## Lever des exceptions

Les exceptions sont levées avec une instruction `raise`. Dans le code, une instruction `raise` se compose des éléments suivants :

- Le mot-clé `raise`
- Un appel à la fonction `Exception()`
- Une chaîne de caractères avec un message d'erreur utile passée à la fonction `Exception()`

```python
# instruction raise : lever manuellement une exception avec un message personnalisé
raise Exception('This is the error message.')
```

```output
Traceback (most recent call last):
  File "<pyshell#191>", line 1, in <module>
    raise Exception('This is the error message.')
Exception: This is the error message.
```

Généralement, c'est le code qui appelle la fonction, et non la fonction elle-même, qui sait comment gérer une exception. Ainsi, vous verrez couramment une instruction `raise` à l'intérieur d'une fonction et les instructions `try` et `except` dans le code appelant la fonction.

```python
# Lever des exceptions dans la fonction, les gérer dans le code appelant
def box_print(symbol, width, height):
    if len(symbol) != 1:
      raise Exception('Symbol must be a single character string.')
    if width <= 2:
      raise Exception('Width must be greater than 2.')
    if height <= 2:
      raise Exception('Height must be greater than 2.')
    print(symbol * width)
    for i in range(height - 2):
        print(symbol + (' ' * (width - 2)) + symbol)
    print(symbol * width)

# Gérer les exceptions lors de l'appel de la fonction
for sym, w, h in (('*', 4, 4), ('O', 20, 5), ('x', 1, 3), ('ZZ', 3, 3)):
    try:
        box_print(sym, w, h)
    except Exception as err:  # Capturer l'exception et afficher le message d'erreur
        print('An exception happened: ' + str(err))
```

```output
****
*  *
*  *
****
OOOOOOOOOOOOOOOOOOOO
O                  O
O                  O
O                  O
OOOOOOOOOOOOOOOOOOOO
An exception happened: Width must be greater than 2.
An exception happened: Symbol must be a single character string.
```

En savoir plus sur la [Gestion des exceptions](/cheatsheet/exception-handling).

## Obtenir la trace de pile sous forme de chaîne

La `traceback` (trace de pile) est affichée par Python chaque fois qu'une exception levée n'est pas gérée. Mais on peut aussi l'obtenir sous forme de chaîne en appelant `traceback.format_exc()`. Cette fonction est utile si vous souhaitez les informations de la trace de pile d'une exception tout en voulant qu'une instruction `except` gère gracieusement l'exception. Vous devrez importer le module `traceback` de Python avant d'appeler cette fonction.

```python
# traceback.format_exc(): obtenir la trace de pile sous forme de chaîne pour la journalisation/le débogage
import traceback

try:
    raise Exception('This is the error message.')
except:
    with open('errorInfo.txt', 'w') as error_file:
        error_file.write(traceback.format_exc())  # Écrire la trace de pile dans le fichier
    print('The traceback info was written to errorInfo.txt.')
```

```output
116
The traceback info was written to errorInfo.txt.
```

Le 116 est la valeur de retour de la méthode `write()`, car 116 caractères ont été écrits dans le fichier. Le texte de la `traceback` a été écrit dans errorInfo.txt.

    Traceback (most recent call last):
      File "<pyshell#28>", line 2, in <module>
    Exception: This is the error message.

## Assertions

Une assertion est une vérification de cohérence pour s'assurer que votre code ne fait rien de manifestement faux. Ces vérifications de cohérence sont effectuées par des instructions `assert`. Si la vérification de cohérence échoue, une exception `AssertionError` est levée. Dans le code, une instruction `assert` se compose des éléments suivants :

- Le mot-clé `assert`
- Une condition (c'est-à-dire une expression qui s'évalue à `True` ou `False`)
- Une virgule
- Une `string` à afficher lorsque la condition est `False`

```python
# instruction assert : vérifier la condition, lever AssertionError si Faux
pod_bay_door_status = 'open'
assert pod_bay_door_status == 'open', 'The pod bay doors need to be "open".'  # Passe

pod_bay_door_status = 'I\'m sorry, Dave. I\'m afraid I can\'t do that.'
assert pod_bay_door_status == 'open', 'The pod bay doors need to be "open".'  # Lève AssertionError
```

```output
Traceback (most recent call last):
  File "<pyshell#10>", line 1, in <module>
    assert pod_bay_door_status == 'open', 'The pod bay doors need to be "open".'
AssertionError: The pod bay doors need to be "open".
```

En langage clair, une instruction `assert` signifie : « J'affirme que cette condition est vraie, et sinon, il y a un bogue quelque part dans le programme. » Contrairement aux exceptions, votre code ne doit pas gérer les instructions `assert` avec `try` et `except` ; si une assertion échoue, votre programme doit planter. En échouant rapidement de cette manière, vous réduisez le temps écoulé entre la cause initiale du bogue et la première fois que vous le remarquez. Cela réduira la quantité de code que vous devrez vérifier avant de trouver le code qui cause le bogue.

### Désactiver les assertions

Les assertions peuvent être désactivées en passant l'option `-O` lors de l'exécution de Python.

## Logging

Pour permettre au module `logging` d'afficher les messages de journalisation sur votre écran pendant l'exécution de votre programme, copiez ce qui suit en haut de votre programme :

```python
import logging
logging.basicConfig(level=logging.DEBUG, format=' %(asctime)s - %(levelname)s- %(message)s')
```

Supposons que vous ayez écrit une fonction pour calculer la factorielle d'un nombre. En mathématiques, la factorielle de 4 est 1 × 2 × 3 × 4, soit 24. La factorielle de 7 est 1 × 2 × 3 × 4 × 5 × 6 × 7, soit 5 040. Ouvrez une nouvelle fenêtre d'éditeur de fichiers et entrez le code suivant. Il contient un bogue, mais vous allez également entrer plusieurs messages de journalisation pour vous aider à comprendre ce qui ne va pas. Enregistrez le programme sous le nom factorialLog.py.

```python
import logging
logging.basicConfig(level=logging.DEBUG, format=' %(asctime)s - %(levelname)s- %(message)s')
logging.debug('Start of program')

def factorial(n):
    logging.debug('Start of factorial(%s)' % (n))
    total = 1
    for i in range(1, n + 1):
        total *= i
        logging.debug('i is ' + str(i) + ', total is ' + str(total))
    logging.debug('End of factorial(%s)' % (n))
    return total

print(factorial(5))
logging.debug('End of program')
```

```output
2015-05-23 16:20:12,664 - DEBUG - Start of program
2015-05-23 16:20:12,664 - DEBUG - Start of factorial(5)
2015-05-23 16:20:12,665 - DEBUG - i is 0, total is 0
2015-05-23 16:20:12,668 - DEBUG - i is 1, total is 0
2015-05-23 16:20:12,670 - DEBUG - i is 2, total is 0
2015-05-23 16:20:12,673 - DEBUG - i is 3, total is 0
2015-05-23 16:20:12,675 - DEBUG - i is 4, total is 0
2015-05-23 16:20:12,678 - DEBUG - i is 5, total is 0
2015-05-23 16:20:12,680 - DEBUG - End of factorial(5)
0
2015-05-23 16:20:12,684 - DEBUG - End of program
```

## Niveaux de journalisation

Les niveaux de journalisation offrent un moyen de catégoriser vos messages de journalisation par importance. Il existe cinq niveaux de journalisation, décrits dans le Tableau 10-1, du moins au plus important. Les messages peuvent être enregistrés à chaque niveau en utilisant une fonction de journalisation différente.

| Niveau     | Fonction de journalisation | Description                                                                                                                                                              |
| ---------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `DEBUG`    | `logging.debug()`          | Le niveau le plus bas. Utilisé pour les petits détails. Habituellement, vous ne vous souciez de ces messages que lors du diagnostic de problèmes.                        |
| `INFO`     | `logging.info()`           | Utilisé pour enregistrer des informations sur des événements généraux dans votre programme ou pour confirmer que les choses fonctionnent à leur point dans le programme. |
| `WARNING`  | `logging.warning()`        | Utilisé pour indiquer un problème potentiel qui n'empêche pas le programme de fonctionner mais pourrait le faire à l'avenir.                                             |
| `ERROR`    | `logging.error()`          | Utilisé pour enregistrer une erreur qui a empêché le programme d'accomplir quelque chose.                                                                                |
| `CRITICAL` | `logging.critical()`       | Le niveau le plus élevé. Utilisé pour indiquer une erreur fatale qui a provoqué ou est sur le point de provoquer l'arrêt complet du programme.                           |

## Désactiver la journalisation

Après avoir débogué votre programme, vous ne voulez probablement pas que tous ces messages de journalisation encombrent l'écran. La fonction `logging.disable()` les désactive afin que vous n'ayez pas à modifier votre programme pour supprimer manuellement tous les appels de journalisation.

```python
import logging

logging.basicConfig(level=logging.INFO, format=' %(asctime)s -%(levelname)s - %(message)s')
logging.critical('Critical error! Critical error!')
```

```output
2015-05-22 11:10:48,054 - CRITICAL - Critical error! Critical error!
```

```python
logging.disable(logging.CRITICAL)
logging.critical('Critical error! Critical error!')
logging.error('Error! Error!')
```

## Journalisation vers un fichier

Au lieu d'afficher les messages de journalisation à l'écran, vous pouvez les écrire dans un fichier texte. La fonction `logging.basicConfig()` accepte un argument mot-clé `filename`, comme ceci :

```python
import logging
logging.basicConfig(filename='myProgramLog.txt', level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')
```

## Liens pertinents

- <router-link to="/cheatsheet/exception-handling">Gestion des exceptions</router-link>
- <router-link to="/builtin/breakpoint">breakpoint()</router-link>
