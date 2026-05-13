---
title: "Module Statistics Python - Aide-mémoire Python"
description: "Le module `statistics` fournit des outils simples pour calculer des moyennes, des médianes et d’autres statistiques descriptives."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Module Statistics Python
</base-title>

Le module `statistics` fournit des outils simples pour calculer des moyennes, des médianes et d’autres statistiques descriptives.

Le module a été ajouté dans Python 3.4.

```python
import statistics
```

Utilisez `statistics` lorsque vous avez besoin de calculs courants sur une petite liste de nombres. Pour l’analyse de données avancée, des bibliothèques comme NumPy et pandas sont plus puissantes, mais elles ne font pas partie de la bibliothèque standard.

## mean()

```python
import statistics

scores = [80, 90, 95, 100]
print(statistics.mean(scores))
```

```output
91.25
```

`fmean` renvoie une moyenne en virgule flottante et est souvent plus rapide pour les données numériques :

```python
import statistics

print(statistics.fmean([1, 2, 3]))
```

```output
2.0
```

## median()

```python
import statistics

values = [1, 3, 5, 100]
print(statistics.median(values))
```

```output
4.0
```

## mode()

`mode` renvoie la valeur la plus fréquente.

```python
import statistics

print(statistics.mode(['python', 'python', 'rust']))
```

```output
python
```

S’il y a plusieurs valeurs les plus fréquentes, `multimode` les renvoie toutes :

```python
import statistics

print(statistics.multimode(['red', 'blue', 'red', 'blue']))
```

```output
['red', 'blue']
```

## stdev()

`stdev` calcule l’écart-type d’échantillon.

```python
import statistics

print(round(statistics.stdev([2, 4, 4, 4, 5, 5, 7, 9]), 2))
```

```output
2.14
```

## Gérer des données vides

La plupart des fonctions lèvent `StatisticsError` pour une entrée vide.

```python
import statistics

try:
    statistics.mean([])
except statistics.StatisticsError as error:
    print(type(error).__name__)
```

```output
StatisticsError
```

## Liens pertinents

- <router-link to="/modules/math-module">Module : math</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Aide-mémoire : Listes et tuples</router-link>
- <router-link to="/builtin/round">round()</router-link>
