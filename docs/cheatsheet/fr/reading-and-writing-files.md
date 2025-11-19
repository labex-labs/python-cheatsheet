---
title: 'Lecture et écriture de fichiers - Aide-mémoire Python'
description: "Pour lire ou écrire dans un fichier en Python, utilisez l'instruction 'with', qui fermera le fichier automatiquement après usage, gérant ainsi les ressources disponibles."
labUrl: 'https://labex.io/fr/labs/python-python-reading-and-writing-files-633663?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Lecture et Écriture de Fichiers
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Pour un examen plus approfondi de la manipulation des chemins de fichiers et de répertoires, consultez la page <router-link to="/cheatsheet/file-directory-path">Chemins de Fichiers et de Répertoires</router-link>.

## Le processus de lecture/écriture de fichiers

Pour lire/écrire dans un fichier en Python, vous voudrez utiliser l'instruction `with`, qui fermera le fichier pour vous une fois terminé, gérant les ressources disponibles pour vous.

## Ouverture et lecture de fichiers

La fonction `open` ouvre un fichier et retourne un objet fichier correspondant.

```python
# Lire le fichier en utilisant l'instruction 'with': ferme automatiquement le fichier une fois terminé
with open('/home/labex/project/hi.txt') as hello_file:
    hello_content = hello_file.read()  # Lire tout le contenu du fichier

hello_content
```

```output
'Hello World!'
```

Alternativement, vous pouvez utiliser la méthode _readlines()_ pour obtenir une liste de valeurs de chaînes à partir du fichier, une chaîne pour chaque ligne de texte :

```python
# Méthode readlines(): retourne une liste de chaînes, une par ligne
with open('sonnet29.txt') as sonnet_file:
    sonnet_file.readlines()  # Retourne une liste avec chaque ligne comme une chaîne
```

```output
['When, in disgrace with fortune and men's eyes,\n',
 ' I all alone beweep my  outcast state,\n',
 "And trouble deaf heaven with my bootless cries,\n",
 "And look upon myself and curse my fate,']
```

Vous pouvez également itérer sur le fichier ligne par ligne :

```python
# Itérer sur le fichier ligne par ligne (efficace en mémoire pour les grands fichiers)
with open('sonnet29.txt') as sonnet_file:
    for line in sonnet_file:  # L'objet fichier est itérable
        print(line, end='')  # Imprimer sans saut de ligne supplémentaire
```

```output
When, in disgrace with fortune and men's eyes,
I all alone beweep my outcast state,
And trouble deaf heaven with my bootless cries,
And look upon myself and curse my fate,
```

## Écriture dans des fichiers

```python
# Écrire dans un fichier: le mode 'w' écrase le fichier existant
with open('bacon.txt', 'w') as bacon_file:  # 'w' = mode écriture
    bacon_file.write('Hello world!\n')  # Retourne le nombre de caractères écrits
```

```output
13
```

```python
# Ajouter à un fichier: le mode 'a' ajoute au fichier existant
with open('bacon.txt', 'a') as bacon_file:  # 'a' = mode ajout
    bacon_file.write('Bacon is not a vegetable.')
```

```output
25
```

```python
with open('bacon.txt') as bacon_file:
    content = bacon_file.read()

print(content)
```

```output
Hello world!
Bacon is not a vegetable.
```

## Liens pertinents

- <router-link to="/cheatsheet/file-directory-path">Chemins de Fichiers et de Répertoires</router-link>
- <router-link to="/cheatsheet/json-yaml">JSON et YAML</router-link>
- <router-link to="/blog/python-pathlib-essentials">10 Opérations Essentielles du Système de Fichiers Que Tout Développeur Devrait Connaître</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/print">print()</router-link>
