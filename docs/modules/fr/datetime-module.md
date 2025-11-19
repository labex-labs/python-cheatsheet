---
title: 'Module Datetime Python - Aide-mémoire Python'
description: 'Le module Datetime permet de manipuler les dates et heures grâce à trois types de données supplémentaires : date, time et datetime.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Module Python Datetime
</base-title>

Le module Datetime nous permet de travailler avec des objets date et heure. Il fournit trois types de données supplémentaires : `date`, `time` et `datetime`.

```python
import datetime
```

## date()

```python
datetime.date(year: int, month: int, day: int)
```

La méthode `date` retourne un objet date avec les attributs `year`, `month` et `day` :

```python
from datetime import date
# Créer un objet date
obj = date(2022, 12, 1)
# Accéder à l'attribut year
obj.year
```

```output
2022
```

```python
obj.month
```

```output
12
```

```python
obj.day
```

```output
1
```

## time()

```python
datetime.time(hour: int, minute: int, second: int)
```

La méthode `time` retourne un objet heure avec les attributs `hour`, `minute`, `second`, `microsecond` et `tzinfo` :

```python
from datetime import time
# Créer un objet heure
obj = time(10, 20, 33)
# Accéder à l'attribut hour
obj.hour
```

```output
10
```

```python
obj.second
```

```output
33
```

```python
obj.microsecond
```

```output
0
```

## datetime()

```python
datetime.datetime(year, month, day, hour, minute, second)
```

La méthode `datetime` retourne un objet avec les attributs des objets `date` et `time` :

```python
from datetime import datetime
# Créer un objet datetime avec date et heure
obj = datetime(2024, 12, 1, 15, 35, 59)
# Accéder à l'attribut year
obj.year
```

```output
2024
```

```python
obj.month
```

```output
12
```

```python
obj.day
```

```output
1
```

```python
obj.hour
```

```output
15
```

```python
obj.second
```

```output
59
```

## now() et today()

Les méthodes `now` et `today` retournent un objet `datetime` avec le jour et l'heure exacts du système :

```python
from datetime import datetime
# Obtenir la date et l'heure actuelles
now = datetime.now()
now
```

```output
datetime.datetime(2022, 7, 23, 19, 56, 49, 589806)
```

Puisque l'objet retourné est un `datetime`, nous pouvons accéder aux attributs `date` et `time` :

```python
now.date()
```

```output
datetime.date(2022, 7, 23)
```

```python
now.time()
```

```output
datetime.time(19, 56, 49, 589806)
```

```python
now.year
```

```output
2022
```

```python
now.month
```

```output
7
```

```python
now.day
```

```output
23
```

```python
now.hour
```

```output
19
```

```python
now.minute
```

```output
56
```

```python
now.second
```

```output
49
```

```python
now.microsecond
```

```output
589806
```

De plus, `now` peut prendre un objet [timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) comme paramètre optionnel :

```python
from datetime import datetime, timezone
# Obtenir l'heure UTC actuelle
datetime.now(timezone.utc)
```

```output
datetime.datetime(2022, 7, 24, 0, 20, 8, 265634, tzinfo=datetime.timezone.utc)
```

Si un paramètre _timezone_ n'est pas spécifié, `now` utilisera par défaut le fuseau horaire du système.

## strftime() et strptime()

Vous pouvez facilement transformer des objets datetime en chaînes de caractères et vice-versa avec les méthodes `strftime` et `strptime`.

### strftime()

`strftime` nous permet de créer des chaînes de caractères formatées lisibles à partir d'un objet datetime Python :

```python
from datetime import datetime
# Obtenir la date et l'heure actuelles pour les exemples de formatage
now = datetime.now()
now
```

```output
datetime.datetime(2022, 7, 23, 20, 31, 19, 751479)
```

```python
# Formater datetime en jour-mois-année avec mois abrégé
now.strftime("%d-%b-%Y")
```

```output
'23-Jul-2022'
```

```python
# Formater datetime en jour-mois-année avec mois numérique
now.strftime("%d-%m-%Y")
```

```output
'23-07-2022'
```

```python
# Formater datetime en mois/jour/année
now.strftime("%m/%d/%Y")
```

```output
'07/23/2022'
```

```python
# Formater datetime avec date et heure
now.strftime("%b/%d/%Y - %H:%M:%S")
```

```output
'Jul/23/2022 - 20:31:19'
```

Vous trouverez peut-être les chaînes passées à `strftime` un peu étranges, mais il est assez facile de comprendre leur signification. Par exemple, `%m/%d/%Y` retournera le mois, le jour et l'année séparés par `/` (07/23/2022).

### strptime()

La méthode `strptime` crée un objet `datetime` à partir d'une chaîne de caractères.

Cette méthode accepte deux paramètres :

```python
obj.strptime(datetime_string, format)
```

- Une chaîne représentant un objet datetime.
- Le code de format Python équivalent à cette chaîne.

```python
from datetime import datetime

# Analyser la chaîne en objet datetime
datetime_str = '12-Jul-2023'
datetime.strptime(datetime_str, '%d-%b-%Y')
```

```output
datetime.datetime(2023, 7, 12, 0, 0)
```

```python
# Analyser la chaîne avec date et heure
datetime_str = 'Jul/12/2023 - 14:38:37'
datetime.strptime(datetime_str, "%b/%d/%Y - %H:%M:%S")
```

```output
datetime.datetime(2023, 7, 12, 14, 38, 37)
```

### Codes de Format

| Directive | Signification                                                                                                                                                                                                                                         | Exemple                                               |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| `%a`      | Jour de la semaine sous forme de nom abrégé local.                                                                                                                                                                                                    | Sun, Mon, …, Sat (en_US)                              |
| `%A`      | Jour de la semaine sous forme de nom complet local.                                                                                                                                                                                                   | Sunday, Monday, …, Saturday (en_US)                   |
| `%w`      | Jour de la semaine sous forme de nombre décimal, où 0 est dimanche et 6 est samedi.                                                                                                                                                                   | 0, 1, …, 6                                            |
| `%d`      | Jour du mois sous forme de nombre décimal complété par des zéros.                                                                                                                                                                                     | 01, 02, …, 31                                         |
| `%b`      | Mois sous forme de nom abrégé local.                                                                                                                                                                                                                  | Jan, Feb, …, Dec (en_US)                              |
| `%B`      | Mois sous forme de nom complet local.                                                                                                                                                                                                                 | January, February, …, December (en_US)                |
| `%m`      | Mois sous forme de nombre décimal complété par des zéros.                                                                                                                                                                                             | 01, 02, …, 12                                         |
| `%y`      | Année sans siècle sous forme de nombre décimal complété par des zéros.                                                                                                                                                                                | 00, 01, …, 99                                         |
| `%Y`      | Année avec siècle sous forme de nombre décimal.                                                                                                                                                                                                       | 0001, 0002, …, 2013, 2014, …, 9998, 9999              |
| `%H`      | Heure (horloge sur 24 heures) sous forme de nombre décimal complété par des zéros.                                                                                                                                                                    | 00, 01, …, 23                                         |
| `%I`      | Heure (horloge sur 12 heures) sous forme de nombre décimal complété par des zéros.                                                                                                                                                                    | 01, 02, …, 12                                         |
| `%p`      | Équivalent local de AM ou PM.                                                                                                                                                                                                                         | AM, PM (en_US)                                        |
| `%M`      | Minute sous forme de nombre décimal complété par des zéros.                                                                                                                                                                                           | 00, 01, …, 59                                         |
| `%S`      | Seconde sous forme de nombre décimal complété par des zéros.                                                                                                                                                                                          | 00, 01, …, 59                                         |
| `%f`      | Microseconde sous forme de nombre décimal, complétée par des zéros à gauche.                                                                                                                                                                          | 000000, 000001, …, 999999                             |
| `%z`      | Décalage UTC sous la forme `±HHMM[SS[.ffffff]]` (chaîne vide si l'objet est naïf).                                                                                                                                                                    | (empty), +0000, -0400, +1030, +063415, -030712.345216 |
| `%Z`      | Nom du fuseau horaire (chaîne vide si l'objet est naïf).                                                                                                                                                                                              | (empty), UTC, GMT                                     |
| `%j`      | Jour de l'année sous forme de nombre décimal complété par des zéros.                                                                                                                                                                                  | 001, 002, …, 366                                      |
| `%U`      | Numéro de semaine de l'année (dimanche comme premier jour de la semaine) sous forme de nombre décimal complété par des zéros. Tous les jours d'une nouvelle année précédant le premier dimanche sont considérés comme faisant partie de la semaine 0. | 00, 01, …, 53                                         |
| `%W`      | Numéro de semaine de l'année (lundi comme premier jour de la semaine) sous forme de nombre décimal. Tous les jours d'une nouvelle année précédant le premier lundi sont considérés comme faisant partie de la semaine 0.                              | 00, 01, …, 53                                         |
| `%c`      | Représentation de la date et de l'heure appropriée locale.                                                                                                                                                                                            | Tue Aug 16 21:30:00 1988 (en_US)                      |
| `%x`      | Représentation de la date appropriée locale.                                                                                                                                                                                                          | 08/16/88 (None)                                       |
| `%X`      | Représentation de l'heure appropriée locale.                                                                                                                                                                                                          | 21:30:00 (en_US)                                      |
| `%%`      | Un caractère `'%'` littéral.                                                                                                                                                                                                                          | %                                                     |

## timedelta()

L'objet `timedelta` représente la différence entre deux dates ou heures.

```python
from datetime import datetime

# Créer deux objets datetime
date_1 = datetime.strptime('12-Jul-2023', '%d-%b-%Y')
date_2 = datetime.strptime('01-Jan-2024', '%d-%b-%Y')

# Calculer la différence (retourne timedelta)
difference = date_2 - date_1
difference
```

```output
datetime.timedelta(days=173)
```

```python
# Obtenir le nombre de jours à partir de timedelta
difference.days
```

```output
173
```

`timedelta` peut ajouter des `days`, `seconds` et `microseconds` à un objet datetime :

```python
from datetime import datetime, timedelta

# Obtenir la date et l'heure actuelles pour les opérations timedelta
now = datetime.now()
now
```

```output
datetime.datetime(2022, 7, 23, 21, 25, 2, 341081)
```

```python
# Ajouter 10 jours et 15 secondes à la date et l'heure actuelles
now + timedelta(days=10, seconds=15)
```

```output
datetime.datetime(2022, 8, 2, 21, 25, 17, 341081)
```

Et peut soustraire des `days`, `seconds` et `microseconds` à un objet datetime :

```python
from datetime import datetime, timedelta

# Obtenir la date et l'heure actuelles pour l'exemple de soustraction
now = datetime.now()
now
```

```output
datetime.datetime(2022, 7, 23, 21, 25, 2, 341081)
```

```python
# Soustraire 10 jours et 15 secondes de la date et l'heure actuelles
now - timedelta(days=10, seconds=15)
```

```output
datetime.datetime(2022, 7, 13, 21, 59, 41, 100883)
```

## Liens pertinents

- <router-link to="/cheatsheet/string-formatting">Cheatsheet : Formatage de Chaînes</router-link>
- <router-link to="/blog/python-data-types">Blog : Types de Données Python</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/print">print()</router-link>
