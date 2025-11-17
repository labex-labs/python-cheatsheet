---
title: 'Fonction intégrée Python open() - Aide-mémoire Python'
description: "Ouvre un fichier et retourne un objet fichier correspondant. Si le fichier ne peut être ouvert, une OSError est levée. Consultez Lecture et écriture de fichiers pour plus d'exemples d'utilisation de cette fonction."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python open()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Extrait de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#open">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Ouvre un fichier et retourne un objet fichier correspondant. Si le fichier ne peut pas être ouvert, une OSError est levée. Consultez <router-link to="/cheatsheet/file-directory-path">Lecture et écriture de fichiers</router-link> pour plus d'exemples sur l'utilisation de cette fonction.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `open()` en Python est utilisée pour ouvrir un fichier et retourne un objet fichier. C'est la manière standard d'interagir avec les fichiers sur votre système. Vous pouvez spécifier le mode d'ouverture du fichier, tel que lecture, écriture ou ajout.

## Exemples

```python
# Ouvre un tout nouveau fichier (le mode 'x' lèvera une erreur s'il existe déjà)
spam = open('spam.txt', mode='x')
spam.write('Ma première ligne\n\n')
spam.close()
```

```python
# Ajoute au fichier et le ferme automatiquement après
with open('spam.txt', mode='a') as spam:
    spam.write('Ma deuxième ligne')
```

```python
with open('spam.txt') as spam:
    content = spam.read()
    print(content)
```

Sortie :

```plaintext
Ma première ligne

Ma deuxième ligne
```

## Liens pertinents

- <router-link to="/cheatsheet/reading-and-writing-files">Cheatsheet : Lecture et écriture de fichiers</router-link>
- <router-link to="/cheatsheet/file-directory-path">Cheatsheet : Chemin de fichier et de répertoire</router-link>
- <router-link to="/cheatsheet/context-manager">Cheatsheet : Gestionnaires de contexte (instruction with)</router-link>
- <router-link to="/blog/python-pathlib-essentials">Blog : Essentiels de Pathlib</router-link>
- <router-link to="/modules/os-module">Module : os</router-link>
- <router-link to="/modules/pathlib-module">Module : pathlib</router-link>
