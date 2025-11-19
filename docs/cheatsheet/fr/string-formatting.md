---
title: 'Formatage de Chaînes Python - Aide-mémoire Python'
description: 'Si vous utilisez Python 3.6+, les f-strings sont la méthode recommandée pour formater des chaînes.'
labUrl: 'https://labex.io/fr/labs/python-python-string-formatting-633667?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Formatage de Chaînes Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    Extrait de la <a href="https://docs.python.org/3/library/stdtypes.html?highlight=sprintf#printf-style-string-formatting">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Les opérations de formatage décrites ici (<b>opérateur %</b>) présentent diverses particularités qui entraînent un certain nombre d'erreurs courantes [...]. L'utilisation des <a href="#formatted-string-literals-or-f-strings">littéraux de chaîne formatés</a> plus récents [...] aide à éviter ces erreurs. Ces alternatives offrent également des approches plus puissantes, flexibles et extensibles pour formater du texte.
  </base-disclaimer-content>
</base-disclaimer>

## opérateur %

<base-warning>
  <base-warning-title>
    Privilégier les littéraux de chaîne
  </base-warning-title>
  <base-warning-content>
    Pour le nouveau code, il est fortement recommandé d'utiliser <a href="#strformat">str.format</a>, ou les <a href="#formatted-string-literals-or-f-strings">littéraux de chaîne formatés</a> (Python 3.6+) plutôt que l'opérateur <code>%</code>.
  </base-warning-content>
</base-warning>

```python
# opérateur % : formatage de chaîne à l'ancienne (non recommandé pour le nouveau code)
name = 'Pete'
'Hello %s' % name  # %s = espace réservé pour chaîne
```

```output
"Hello Pete"
```

Nous pouvons utiliser le spécificateur de format `%d` pour convertir une valeur entière en chaîne :

```python
num = 5
'I have %d apples' % num
```

```output
"I have 5 apples"
```

## str.format

Python 3 a introduit une nouvelle façon de formater les chaînes, qui a ensuite été rétroportée vers Python 2.7. Cela rend la syntaxe du formatage de chaîne plus régulière.

```python
# méthode str.format() : formatage de chaîne moderne (Python 2.7+)
name = 'John'
age = 20

"Hello I'm {}, my age is {}".format(name, age)  # {} = espace réservé
```

```output
"Hello I'm John, my age is 20"
```

```python
"Hello I'm {0}, my age is {1}".format(name, age)
```

```output
"Hello I'm John, my age is 20"
```

## Littéraux de chaîne formatés ou f-Strings

Si vous utilisez Python 3.6+, les `f-Strings` sont la méthode recommandée pour formater les chaînes.

<base-disclaimer>
  <base-disclaimer-title>
    Extrait de la <a href="https://docs.python.org/3/reference/lexical_analysis.html#f-strings">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Un littéral de chaîne formaté ou f-string est un littéral de chaîne préfixé par `f` ou `F`. Ces chaînes peuvent contenir des champs de remplacement, qui sont des expressions délimitées par des accolades {}. Alors que les autres littéraux de chaîne ont toujours une valeur constante, les chaînes formatées sont de véritables expressions évaluées à l'exécution.
  </base-disclaimer-content>
</base-disclaimer>

```python
# f-string : méthode recommandée pour formater les chaînes (Python 3.6+)
name = 'Elizabeth'
f'Hello {name}!'  # Le préfixe f permet les expressions dans {}
```

```output
'Hello Elizabeth!'
```

Il est même possible d'effectuer des calculs en ligne avec :

```python
# Les f-strings prennent en charge les expressions : peuvent inclure des calculs à l'intérieur de {}
a = 5
b = 10
f'Five plus ten is {a + b} and not {2 * (a + b)}.'  # Évalue les expressions
```

```output
'Five plus ten is 15 and not 30.'
```

### f-Strings multilignes

```python
name = 'Robert'
messages = 12
(
f'Hi, {name}. '
f'You have {messages} unread messages'
)
```

```output
'Hi, Robert. You have 12 unread messages'
```

### Le spécificateur =

Ceci affichera l'expression et sa valeur :

```python
# Spécificateur = : affiche à la fois le nom de la variable et sa valeur (Python 3.8+)
from datetime import datetime
now = datetime.now().strftime("%b/%d/%Y - %H:%M:%S")
f'date and time: {now=}'  # Affiche "now='Nov/14/2022 - 20:50:01'"
```

```output
"date and time: now='Nov/14/2022 - 20:50:01'"
```

### Ajout d'espaces ou de caractères

```python
name = 'Robert'
f"{name.upper() = :-^20}"
```

```output
'name.upper() = -------ROBERT-------'
```

```python
f"{name.upper() = :^20}"
```

```output
'name.upper() =        ROBERT       '
```

```python
f"{name.upper() = :20}"
```

```output
'name.upper() = ROBERT              '
```

## Formatage des chiffres

Ajout du séparateur de milliers

```python
a = 10000000
f"{a:,}"
```

```output
'10,000,000'
```

Arrondissement

```python
a = 3.1415926
f"{a:.2f}"
```

```output
'3.14'
```

Affichage en pourcentage

```python
a = 0.816562
f"{a:.2%}"
```

```output
'81.66%'
```

### Tableau de formatage des nombres

| Nombre     | Format  | Sortie    | Description                                                      |
| ---------- | ------- | --------- | ---------------------------------------------------------------- |
| 3.1415926  | {:.2f}  | 3.14      | Formater le flottant avec 2 décimales                            |
| 3.1415926  | {:+.2f} | +3.14     | Formater le flottant avec 2 décimales et signe                   |
| -1         | {:+.2f} | -1.00     | Formater le flottant avec 2 décimales et signe                   |
| 2.71828    | {:.0f}  | 3         | Formater le flottant sans décimales                              |
| 4          | {:0>2d} | 04        | Remplir le nombre avec des zéros (remplissage gauche, largeur 2) |
| 4          | {:x<4d} | 4xxx      | Remplir le nombre avec des x (remplissage droite, largeur 4)     |
| 10         | {:x<4d} | 10xx      | Remplir le nombre avec des x (remplissage droite, largeur 4)     |
| 1000000    | {:,}    | 1,000,000 | Format de nombre avec séparateur de virgule                      |
| 0.35       | {:.2%}  | 35.00%    | Formater le pourcentage                                          |
| 1000000000 | {:.2e}  | 1.00e+09  | Notation exponentielle                                           |
| 11         | {:11d}  | 11        | Alignement à droite (par défaut, largeur 10)                     |
| 11         | {:<11d} | 11        | Alignement à gauche (largeur 10)                                 |
| 11         | {:^11d} | 11        | Alignement centré (largeur 10)                                   |

## Template Strings

Un mécanisme plus simple et moins puissant, mais il est recommandé lors du traitement de chaînes générées par l'utilisateur. En raison de leur complexité réduite, les chaînes de modèle sont un choix plus sûr.

```python
from string import Template
name = 'Elizabeth'
t = Template('Hey $name!')
t.substitute(name=name)
```

```output
'Hey Elizabeth!'
```

## Liens pertinents

- <router-link to="/cheatsheet/manipulating-strings">Manipulation des Chaînes</router-link>
- <router-link to="/blog/python-data-types">Article de Blog sur les Types de Données Python</router-link>
- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/print">print()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/repr">repr()</router-link>
- <router-link to="/builtin/ascii">ascii()</router-link>
