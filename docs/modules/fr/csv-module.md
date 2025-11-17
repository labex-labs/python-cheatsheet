---
title: 'Module CSV Python - Aide-mémoire Python'
description: "Python dispose d'un module csv, permettant de travailler facilement avec les fichiers CSV."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Module CSV Python
</base-title>

Le module `csv` fournit des outils pour lire et écrire dans des fichiers CSV, couramment utilisés pour l'échange de données.

<base-disclaimer>
  <base-disclaimer-title>
    Module csv vs Lecture-Écriture Manuelle de Fichiers
  </base-disclaimer-title>
  <base-disclaimer-content>
    Bien que vous puissiez lire et écrire des fichiers CSV en utilisant des opérations de fichier de base et des méthodes de chaîne (comme <code>open()</code> avec <code>read</code> ou <code>write</code> et <code>split()</code>), le module <code>csv</code> est conçu pour gérer les cas limites tels que les champs entre guillemets, les délimiteurs intégrés et les différentes fins de ligne. Il assure la compatibilité avec les fichiers CSV générés par d'autres programmes (comme Excel) et réduit le risque d'erreurs d'analyse. Pour la plupart des tâches CSV, préférez le module <code>csv</code> à l'analyse manuelle.
    <br>
    Pour en savoir plus sur les bases de la gestion des fichiers, consultez la page <router-link to="/cheatsheet/file-directory-path">Fichiers et Chemins de Répertoire</router-link>.
  </base-disclaimer-content>
</base-disclaimer>

Pour commencer, importez le module :

```python
import csv
```

## csv.reader()

Cette fonction reçoit un fichier qui doit être un [itérable de chaînes de caractères](https://docs.python.org/3/library/csv.html#id4:~:text=A%20csvfile%20must%20be%20an%20iterable%20of%20strings%2C%20each%20in%20the%20reader%E2%80%99s%20defined%20csv%20format). En d'autres termes, il doit s'agir du fichier ouvert comme suit :

```python
import csv

file_path = 'file.csv'

# Lire le fichier CSV
with open(file_path, 'r', newline='') as csvfile:
  reader = csv.reader(csvfile)

  # Itérer sur chaque ligne
  for line in reader:
    print(line)
```

Cette fonction retourne un objet lecteur qui peut être facilement parcouru pour obtenir chaque ligne. Chaque colonne des lignes correspondantes peut être accédée par son index, sans avoir besoin d'utiliser la fonction intégrée [`split()`](https://www.pythoncheatsheet.org/cheatsheet/manipulating-strings#split).

## csv.writer()

Cette fonction reçoit le fichier à écrire en tant que fichier csv, similaire à la fonction lecteur, elle doit être invoquée comme ceci :

```python
import csv

file_path = 'file.csv'

# Ouvrir le fichier pour écrire le CSV
with open(file_path, 'w', newline='') as csvfile:
  writer = csv.writer(csvfile)

  # faire quelque chose
```

Le bloc "faire quelque chose" pourrait être remplacé par l'utilisation des fonctions suivantes :

### writer.writerow()

Écrit une seule ligne dans le fichier CSV.

```python
# Écrire la ligne d'en-tête
writer.writerow(['name', 'age', 'city'])
# Écrire la ligne de données
writer.writerow(['Alice', 30, 'London'])
```

### writer.writerows()

Écrit plusieurs lignes à la fois.

```python
# Préparer plusieurs lignes
rows = [
    ['name', 'age', 'city'],
    ['Bob', 25, 'Paris'],
    ['Carol', 28, 'Berlin']
]
# Écrire toutes les lignes en une seule fois
writer.writerows(rows)
```

## csv.DictReader

Permet de lire des fichiers CSV et d'accéder à chaque ligne comme un dictionnaire, en utilisant la première ligne du fichier comme clés (en-têtes de colonne) par défaut.

```python
import csv

# Lire le CSV comme un dictionnaire (la première ligne devient les clés)
with open('people.csv', 'r', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    # Accéder aux colonnes par nom au lieu de l'index
    for row in reader:
        print(row['name'], row['age'])
```

- Chaque `row` est un `OrderedDict` (ou un `dict` standard dans Python 3.8+).
- Si votre CSV n'a pas d'en-têtes, vous pouvez les fournir avec le paramètre `fieldnames` :

  ```python
  reader = csv.DictReader(csvfile, fieldnames=['name', 'age', 'city'])
  ```

## csv.DictWriter

Permet d'écrire des dictionnaires comme des lignes dans un fichier CSV. Vous devez spécifier les noms de champs (`fieldnames`, en-têtes de colonne) lors de la création de l'écrivain.

```python
import csv

fieldnames = ['name', 'age', 'city']
rows = [
    {'name': 'Alice', 'age': 30, 'city': 'London'},
    {'name': 'Bob', 'age': 25, 'city': 'Paris'}
]

# Écrire des dictionnaires dans un fichier CSV
with open('people_dict.csv', 'w', newline='') as csvfile:
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()  # écrit la ligne d'en-tête
    writer.writerows(rows)
```

- Utilisez `writer.writeheader()` pour écrire les en-têtes de colonne comme première ligne.
- Chaque dictionnaire dans `writer.writerows()` doit avoir des clés correspondant aux `fieldnames` spécifiés lors de la création de l'écrivain.

## Paramètres supplémentaires pour csv.reader() et csv.writer()

### delimiter

Doit être le caractère utilisé pour séparer les champs. Comme le type de fichier l'indique, la valeur par défaut est la virgule ','. Selon la locale, Excel peut générer des fichiers csv avec le point-virgule comme délimiteur.

```python
import csv

# Lire le CSV avec un délimiteur point-virgule
with open('data_semicolon.csv', newline='') as csvfile:
    reader = csv.reader(csvfile, delimiter=';')
    for row in reader:
        print(row)
```

### lineterminator

Caractère ou séquence de caractères pour terminer une ligne. Le plus courant est "\r\n" mais cela pourrait être "\n".

### quotechar

Caractère utilisé pour mettre entre guillemets les champs contenant des caractères spéciaux (par défaut est `"`).

```python
# Utiliser l'apostrophe comme caractère de citation
reader = csv.reader(csvfile, quotechar="'")
```

Pour plus de détails, consultez la <a href="https://docs.python.org/3/library/csv.html" target="_blank" rel="noopener">documentation officielle du module csv de Python</a>.
