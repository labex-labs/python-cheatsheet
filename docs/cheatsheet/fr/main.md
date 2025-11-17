---
title: 'Fonction Principale Python - Fiche Mémo Python'
description: "Nom du scope où le code de haut niveau s'exécute. Le nom d'un module est défini sur main lors de la lecture depuis l'entrée standard, un script ou une invite interactive."
labUrl: 'https://labex.io/fr/labs/python-python-main-function-633661?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Environnement de script principal de haut niveau
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

## Qu'est-ce que c'est

`__main__` est le nom de la portée dans laquelle le code de haut niveau s'exécute.
Le **nom** d'un module est défini comme égal à `__main__` lorsqu'il est lu depuis l'entrée standard, un script ou une invite interactive.

Un module peut découvrir s'il s'exécute dans la portée principale en vérifiant son propre `__name__`, ce qui permet une idiome courante pour exécuter conditionnellement du code dans un module. Lorsqu'il est exécuté comme un script ou avec `python -m` mais pas lorsqu'il est importé :

```python
# __name__ == "__main__": vérifier si le script est exécuté directement (non importé)
if __name__ == "__main__":  # Vrai lorsque exécuté comme script, Faux lorsque importé
    # exécuter seulement si exécuté comme script
    main()
```

Pour un paquet, le même effet peut être obtenu en incluant un module **main.py**, dont le contenu sera exécuté lorsque le module est exécuté avec -m.

Par exemple, si nous développons un script conçu pour être utilisé comme module, nous devrions faire :

```python
# Exemple : la fonction peut être importée, mais le code de test ne s'exécute que lorsqu'il est exécuté directement
def add(a, b):
    return a+b

if __name__ == "__main__":  # Ne s'exécute que lorsque le fichier est exécuté, pas lorsqu'il est importé
    add(3, 5)
```

## Avantages

1. Chaque module Python a son `__name__` défini et si celui-ci est `__main__`, cela implique que le module est exécuté de manière autonome par l'utilisateur, et nous pouvons effectuer les actions appropriées correspondantes.
2. Si vous importez ce script comme un module dans un autre script, le **nom** est défini sur le nom du script/module.
3. Les fichiers Python peuvent agir soit comme des modules réutilisables, soit comme des programmes autonomes.
4. `if __name__ == "__main__":` est utilisé pour exécuter du code uniquement si le fichier est exécuté directement et n'est pas importé.

## Liens pertinents

- <router-link to="/cheatsheet/functions">Fonctions</router-link>
- <router-link to="/cheatsheet/setup-py">setup.py</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Projets Python avec Poetry et VSCode. Partie 1</router-link>
- <router-link to="/builtin/import">import()</router-link>
