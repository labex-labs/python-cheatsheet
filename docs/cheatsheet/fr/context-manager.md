---
title: 'Gestionnaire de Contexte Python - Fiche Récapitulative Python'
description: "Bien qu'utilisés couramment, les gestionnaires de contexte Python sont souvent mal compris. Ces instructions, fréquentes pour la lecture/écriture de fichiers, optimisent la gestion des ressources et la mémoire système en assurant une utilisation limitée des ressources spécifiques aux processus."
labUrl: 'https://labex.io/fr/labs/python-python-context-manager-633650?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Gestionnaire de Contexte Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Bien que les gestionnaires de contexte Python soient largement utilisés, peu de gens comprennent l'objectif de leur utilisation. Ces instructions, couramment utilisées avec la lecture et l'écriture de fichiers, aident l'application à conserver la mémoire système et à améliorer la gestion des ressources en garantissant que des ressources spécifiques ne sont utilisées que pour certains processus.

## L'instruction with

Un gestionnaire de contexte est un objet qui est notifié lorsque le contexte (un bloc de code) commence et se termine. Vous en utilisez couramment un avec l'instruction `with`. C'est elle qui s'occupe de la notification.

Par exemple, les objets fichier sont des gestionnaires de contexte. Lorsqu'un contexte se termine, l'objet fichier est fermé automatiquement :

```python
# Gestionnaire de contexte : gère automatiquement le nettoyage des ressources
# Le fichier est automatiquement fermé lors de la sortie du bloc 'with'
with open(filename) as f:  # 'f' est l'objet fichier
    file_contents = f.read()

# Le fichier est automatiquement fermé ici, même si une erreur s'est produite
```

Tout ce qui met fin à l'exécution du bloc provoque l'appel de la méthode de sortie du gestionnaire de contexte. Cela inclut les exceptions, et peut être utile lorsqu'une erreur vous amène à quitter prématurément un fichier ou une connexion ouverte. Quitter un script sans fermer correctement les fichiers/connexions est une mauvaise pratique, qui peut entraîner une perte de données ou d'autres problèmes. En utilisant un gestionnaire de contexte, vous pouvez vous assurer que des précautions sont toujours prises pour prévenir les dommages ou les pertes de cette manière.

## Écrire votre propre gestionnaire de contexte

Il est également possible d'écrire un gestionnaire de contexte en utilisant la syntaxe de générateur grâce au décorateur `contextlib.contextmanager` :

```python
# Gestionnaire de contexte basé sur une fonction utilisant le décorateur contextlib
import contextlib
@contextlib.contextmanager
def context_manager(num):
    print('Enter')  # Le code avant yield s'exécute lors de __enter__
    yield num + 1   # La valeur générée devient la variable 'cm'
    print('Exit')    # Le code après yield s'exécute lors de __exit__

with context_manager(2) as cm:  # cm reçoit la valeur générée (3)
    print('Right in the middle with cm = {}'.format(cm))
```

```output
Enter
Right in the middle with cm = 3
Exit
```

## Gestionnaire de contexte basé sur une classe

Vous pouvez définir un gestionnaire de contexte basé sur une classe. Les méthodes clés sont `__enter__` et `__exit__`

```python
# Gestionnaire de contexte basé sur une classe : implémenter les méthodes __enter__ et __exit__
class ContextManager:
    def __enter__(self, *args, **kwargs):  # Appelé lors de l'entrée dans le bloc 'with'
        print("--enter--")
        return self  # Peut retourner un objet à utiliser comme variable 'as'

    def __exit__(self, *args):  # Appelé lors de la sortie du bloc 'with'
        print("--exit--")

with ContextManager():  # Appelle __enter__, puis __exit__ lorsque terminé
    print("test")
```

```output
--enter--
test
--exit--
```

## Liens pertinents

- <router-link to="/cheatsheet/reading-and-writing-files">Lecture et Écriture de Fichiers</router-link>
- <router-link to="/cheatsheet/exception-handling">Gestion des Exceptions</router-link>
- <router-link to="/cheatsheet/decorators">Décorateurs</router-link>
- <router-link to="/blog/python-pathlib-essentials">10 Opérations Essentielles sur le Système de Fichiers Que Tout Développeur Devrait Connaître</router-link>
- <router-link to="/builtin/open">open()</router-link>
