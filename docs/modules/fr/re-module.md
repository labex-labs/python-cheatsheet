---
title: Module re Python - Aide-mémoire Python
description: Le module `re` vous permet de rechercher, faire correspondre, découper et remplacer du texte à l’aide d’expressions régulières.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Module re Python
</base-title>

Le module `re` vous permet de rechercher, faire correspondre, découper et remplacer du texte à l’aide d’expressions régulières.

```python
import re
```

Les expressions régulières sont des motifs pour le texte. Utilisez des chaînes brutes, comme `r'\d+'`, afin que les antislashs soient correctement transmis au moteur d’expressions régulières.

## search()

`search` trouve la première correspondance n’importe où dans la chaîne.

```python
import re

match = re.search(r'\d+', 'Order #12345 shipped')
print(match.group())
```

```output
12345
```

## findall()

`findall` renvoie toutes les correspondances non chevauchantes.

```python
import re

emails = re.findall(r'[\w.-]+@[\w.-]+', 'a@example.com b@example.com')
print(emails)
```

```output
['a@example.com', 'b@example.com']
```

## sub()

`sub` remplace le texte correspondant.

```python
import re

message = re.sub(r'\s+', ' ', 'too    many   spaces')
print(message)
```

```output
too many spaces
```

## Compiler des motifs

Les motifs compilés sont utiles lorsque vous réutilisez la même expression.

```python
import re

pattern = re.compile(r'^python', re.IGNORECASE)
print(bool(pattern.match('Python Cheatsheet')))
```

```output
True
```

## Groupes capturants

Les parenthèses capturent une partie de la correspondance.

```python
import re

match = re.search(r'(\w+)=(\d+)', 'count=42')
print(match.group(1))
print(match.group(2))
```

```output
count
42
```

## Gérer l’absence de correspondance

Vérifiez toujours qu’une correspondance existe avant d’appeler `group()`.

```python
import re

match = re.search(r'\d+', 'no number here')
if match:
    print(match.group())
else:
    print('No match')
```

```output
No match
```

## Liens pertinents

- <router-link to="/cheatsheet/regular-expressions">Aide-mémoire : Expressions régulières</router-link>
- <router-link to="/cheatsheet/manipulating-strings">Aide-mémoire : Manipulation de chaînes</router-link>
- <router-link to="/builtin/str">str()</router-link>
