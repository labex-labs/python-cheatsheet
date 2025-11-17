---
title: 'Expressions Régulières Python - Aide-Mémoire Python'
description: 'Une expression régulière (regex) est une séquence de caractères qui spécifie un modèle de recherche dans un texte et est utilisée par les algorithmes de recherche de chaînes.'
labUrl: 'https://labex.io/fr/labs/python-python-regular-expressions-633664?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Expressions Régulières
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://en.wikipedia.org/wiki/Regular_expression">Expressions régulières</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Une expression régulière (raccourcie en regex [...]) est une séquence de caractères qui spécifie un modèle de recherche dans un texte. [...] utilisée par les algorithmes de recherche de chaînes pour des opérations de "trouver" ou de "trouver et remplacer" sur des chaînes, ou pour la validation des entrées.
  </base-disclaimer-content>
</base-disclaimer>

1. Importez le module regex avec `import re`.
2. Créez un objet Regex avec la fonction `re.compile()`. (N'oubliez pas d'utiliser une chaîne brute (raw string).)
3. Passez la chaîne que vous souhaitez rechercher à la méthode `search()` de l'objet Regex. Cela renvoie un objet `Match`.
4. Appelez la méthode `group()` de l'objet Match pour renvoyer une chaîne du texte réellement correspondant.

Toutes les fonctions regex en Python se trouvent dans le module re :

```python
# Importez le module re pour les opérations d'expressions régulières
import re
```

## Symboles Regex

| Symbole                  | Correspond à                                                     |
| ------------------------ | ---------------------------------------------------------------- |
| `?`                      | zéro ou une fois du groupe précédent.                            |
| `*`                      | zéro ou plusieurs fois du groupe précédent.                      |
| `+`                      | une ou plusieurs fois du groupe précédent.                       |
| `{n}`                    | exactement n fois du groupe précédent.                           |
| `{n,}`                   | n fois ou plus du groupe précédent.                              |
| `{,m}`                   | 0 à m fois du groupe précédent.                                  |
| `{n,m}`                  | au moins n et au plus m fois du groupe précédent.                |
| `{n,m}?` ou `*?` ou `+?` | effectue une correspondance non gourmande du groupe précédent.   |
| `^spam`                  | signifie que la chaîne doit commencer par spam.                  |
| `spam$`                  | signifie que la chaîne doit se terminer par spam.                |
| `.`                      | n'importe quel caractère, sauf les caractères de nouvelle ligne. |
| `\d`, `\w`, et `\s`      | respectivement un chiffre, un mot, ou un caractère d'espace.     |
| `\D`, `\W`, et `\S`      | respectivement tout sauf un chiffre, un mot, ou un espace.       |
| `[abc]`                  | n'importe quel caractère entre les crochets (comme a, b, ).      |
| `[^abc]`                 | n'importe quel caractère qui n'est pas entre les crochets.       |

## Objets de correspondance Regex

```python
# re.compile(): créer un objet de motif regex (utiliser une chaîne brute r'' pour éviter l'échappement)
phone_num_regex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d')  # Motif : 3 chiffres-3 chiffres-4 chiffres

mo = phone_num_regex.search('My number is 415-555-4242.')  # Rechercher le motif

print(f'Phone number found: {mo.group()}')  # group() renvoie le texte correspondant
```

Sortie :

```plaintext
Phone number found: 415-555-4242
```

## Groupement avec parenthèses

```python
# Les parenthèses créent des groupes : group(1) renvoie le premier groupe, group(2) renvoie le second
phone_num_regex = re.compile(r'(\d\d\d)-(\d\d\d-\d\d\d\d)')  # Deux groupes entre parenthèses
mo = phone_num_regex.search('My number is 415-555-4242.')

mo.group(1)  # Renvoie le premier groupe : '415'
```

Sortie :

```plaintext
'415'
```

```python
mo.group(2)
```

Sortie :

```plaintext
'555-4242'
```

```python
mo.group(0)
```

Sortie :

```plaintext
'415-555-4242'
```

```python
mo.group()
```

Sortie :

```plaintext
'415-555-4242'
```

Pour récupérer tous les groupes à la fois, utilisez la méthode `groups()` :

```python
# groups(): renvoie un tuple de tous les groupes
mo.groups()  # Renvoie ('415', '555-4242')
```

Sortie :

```plaintext
('415', '555-4242')
```

```python
area_code, main_number = mo.groups()

print(area_code)
```

Sortie :

```plaintext
415
```

```python
print(main_number)
```

Sortie :

```plaintext
555-4242
```

## Groupement multiple avec Pipe

Vous pouvez utiliser le caractère `|` partout où vous souhaitez faire correspondre une de plusieurs expressions.

```python
hero_regex = re.compile (r'Batman|Tina Fey')

mo1 = hero_regex.search('Batman and Tina Fey.')
mo1.group()
```

Sortie :

```plaintext
'Batman'
```

```python
mo2 = hero_regex.search('Tina Fey and Batman.')
mo2.group()
```

Sortie :

```plaintext
'Tina Fey'
```

Vous pouvez également utiliser le pipe pour faire correspondre un de plusieurs motifs dans le cadre de votre regex :

```python
bat_regex = re.compile(r'Bat(man|mobile|copter|bat)')
mo = bat_regex.search('Batmobile lost a wheel')

mo.group()
```

Sortie :

```plaintext
'Batmobile'
```

```python
mo.group(1)
```

Sortie :

```plaintext
'mobile'
```

## Correspondance optionnelle avec le Point d'Interrogation

Le caractère `?` marque le groupe qui le précède comme étant une partie optionnelle du motif.

```python
bat_regex = re.compile(r'Bat(wo)?man')

mo1 = bat_regex.search('The Adventures of Batman')
mo1.group()
```

Sortie :

```plaintext
'Batman'
```

```python
mo2 = bat_regex.search('The Adventures of Batwoman')
mo2.group()
```

Sortie :

```plaintext
'Batwoman'
```

## Correspondance de zéro ou plus avec l'Étoile

Le `*` (étoile ou astérisque) signifie "faire correspondre zéro ou plusieurs fois". Le groupe précédant une étoile peut apparaître n'importe quel nombre de fois dans le texte.

```python
bat_regex = re.compile(r'Bat(wo)*man')
mo1 = bat_regex.search('The Adventures of Batman')
mo1.group()
```

Sortie :

```plaintext
'Batman'
```

```python
mo2 = bat_regex.search('The Adventures of Batwoman')
mo2.group()
```

Sortie :

```plaintext
'Batwoman'
```

```python
mo3 = bat_regex.search('The Adventures of Batwowowowoman')
mo3.group()
```

Sortie :

```plaintext
'Batwowowowoman'
```

## Correspondance d'une ou plusieurs fois avec le Plus

Le `+` (ou plus) signifie _faire correspondre une ou plusieurs fois_. Le groupe précédant un plus doit apparaître au moins une fois :

```python
bat_regex = re.compile(r'Bat(wo)+man')

mo1 = bat_regex.search('The Adventures of Batwoman')
mo1.group()
```

Sortie :

```plaintext
'Batwoman'
```

```python
mo2 = bat_regex.search('The Adventures of Batwowowowoman')
mo2.group()
```

Sortie :

```plaintext
'Batwowowowoman'
```

```python
mo3 = bat_regex.search('The Adventures of Batman')
mo3 is None
```

Sortie :

```plaintext
True
```

## Correspondance de répétitions spécifiques avec les Accolades

Si vous avez un groupe que vous souhaitez répéter un nombre spécifique de fois, suivez le groupe dans votre regex avec un nombre entre accolades :

```python
ha_regex = re.compile(r'(Ha){3}')

mo1 = ha_regex.search('HaHaHa')
mo1.group()
```

Sortie :

```plaintext
'HaHaHa'
```

```python
mo2 = ha_regex.search('Ha')
mo2 is None
```

Sortie :

```plaintext
True
```

Au lieu d'un seul nombre, vous pouvez spécifier une plage avec un minimum et un maximum entre les accolades. Par exemple, la regex (Ha){3,5} correspondra à 'HaHaHa', 'HaHaHaHa', et 'HaHaHaHaHa'.

```python
ha_regex = re.compile(r'(Ha){2,3}')
mo1 = ha_regex.search('HaHaHaHa')
mo1.group()
```

Sortie :

```plaintext
'HaHaHa'
```

## Correspondance gourmande et non gourmande

Les expressions régulières de Python sont gourmandes par défaut : dans les situations ambiguës, elles correspondent à la chaîne la plus longue possible. La version non gourmande des accolades, qui correspond à la chaîne la plus courte possible, a l'accolade fermante suivie d'un point d'interrogation.

```python
greedy_ha_regex = re.compile(r'(Ha){3,5}')

mo1 = greedy_ha_regex.search('HaHaHaHaHa')
mo1.group()
```

Sortie :

```plaintext
'HaHaHaHaHa'
```

```python
non_greedy_ha_regex = re.compile(r'(Ha){3,5}?')
mo2 = non_greedy_ha_regex.search('HaHaHaHaHa')
mo2.group()
```

Sortie :

```plaintext
'HaHaHa'
```

## La méthode findall()

La méthode `findall()` renverra les chaînes de chaque correspondance dans la chaîne recherchée.

```python
phone_num_regex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d') # n'a pas de groupes

phone_num_regex.findall('Cell: 415-555-9999 Work: 212-555-0000')
```

Sortie :

```plaintext
['415-555-9999', '212-555-0000']
```

## Créer vos propres classes de caractères

Vous pouvez définir votre propre classe de caractères en utilisant des crochets. Par exemple, la classe de caractères _[aeiouAEIOU]_ correspondra à n'importe quelle voyelle, minuscule et majuscule.

```python
vowel_regex = re.compile(r'[aeiouAEIOU]')
vowel_regex.findall('Robocop eats baby food. BABY FOOD.')
```

Sortie :

```plaintext
['o', 'o', 'o', 'e', 'a', 'a', 'o', 'o', 'A', 'O', 'O']
```

Vous pouvez également inclure des plages de lettres ou de chiffres en utilisant un trait d'union. Par exemple, la classe de caractères _[a-zA-Z0-9]_ correspondra à toutes les lettres minuscules, majuscules et aux chiffres.

En plaçant un accent circonflexe (`^`) juste après le crochet ouvrant de la classe de caractères, vous pouvez créer une classe de caractères négative qui correspondra à tous les caractères qui ne sont pas dans la classe de caractères :

```python
consonant_regex = re.compile(r'[^aeiouAEIOU]')
consonant_regex.findall('Robocop eats baby food. BABY FOOD.')
```

Sortie :

```plaintext
['R', 'b', 'c', 'p', ' ', 't', 's', ' ', 'b', 'b', 'y', ' ', 'f', 'd', '.', ' ', 'B', 'B', 'Y', ' ', 'F', 'D', '.']
```

## Les caractères Caret et Dollar sign

- Vous pouvez également utiliser le symbole caret `^` au début d'une regex pour indiquer qu'une correspondance doit se produire au début du texte recherché.

- De même, vous pouvez placer un signe dollar `$` à la fin de la regex pour indiquer que la chaîne doit se terminer par ce motif regex.

- Et vous pouvez utiliser le `^` et le `$` ensemble pour indiquer que toute la chaîne doit correspondre à la regex.

La chaîne d'expression régulière `r'^Hello'` correspond aux chaînes qui commencent par 'Hello' :

```python
begins_with_hello = re.compile(r'^Hello')
begins_with_hello.search('Hello world!')
```

Sortie :

```plaintext
<_sre.SRE_Match object; span=(0, 5), match='Hello'>
```

```python
begins_with_hello.search('He said hello.') is None
```

Sortie :

```plaintext
True
```

La chaîne d'expression régulière `r'\d\$'` correspond aux chaînes qui se terminent par un caractère numérique de 0 à 9 :

```python
whole_string_is_num = re.compile(r'^\d+$')

whole_string_is_num.search('1234567890')
```

Sortie :

```plaintext
<_sre.SRE_Match object; span=(0, 10), match='1234567890'>
```

```python
whole_string_is_num.search('12345xyz67890') is None
```

Sortie :

```plaintext
True
```

```python
whole_string_is_num.search('12 34567890') is None
```

Sortie :

```plaintext
True
```

## Le caractère Joker (Wildcard)

Le caractère `.` (ou point) dans une expression régulière correspondra à n'importe quel caractère sauf une nouvelle ligne :

```python
at_regex = re.compile(r'.at')

at_regex.findall('The cat in the hat sat on the flat mat.')
```

Sortie :

```plaintext
['cat', 'hat', 'sat', 'lat', 'mat']
```

## Correspondance de tout avec Dot-Star

```python
name_regex = re.compile(r'First Name: (.*) Last Name: (.*)')

mo = name_regex.search('First Name: Al Last Name: Sweigart')
mo.group(1)
```

Sortie :

```plaintext
'Al'
```

```python
mo.group(2)
```

Sortie :

```plaintext
'Sweigart'
```

Le `.*` utilise le mode gourmand : il essaiera toujours de faire correspondre le plus de texte possible. Pour faire correspondre n'importe quel texte de manière non gourmande, utilisez le point, l'étoile et le point d'interrogation (`.*?`). Le point d'interrogation indique à Python de faire correspondre de manière non gourmande :

```python
non_greedy_regex = re.compile(r'<.*?>')
mo = non_greedy_regex.search('<To serve man> for dinner.>')
mo.group()
```

Sortie :

```plaintext
'<To serve man>'
```

```python
greedy_regex = re.compile(r'<.*>')
mo = greedy_regex.search('<To serve man> for dinner.>')
mo.group()
```

Sortie :

```plaintext
'<To serve man> for dinner.>'
```

## Correspondance des nouvelles lignes avec le caractère Dot

Le dot-star correspond à tout sauf une nouvelle ligne. En passant `re.DOTALL` comme deuxième argument à `re.compile()`, vous pouvez faire en sorte que le caractère point corresponde à tous les caractères, y compris le caractère de nouvelle ligne :

```python
no_newline_regex = re.compile('.*')
no_newline_regex.search('Serve the public trust.\nProtect the innocent.\nUphold the law.').group()
```

Sortie :

```plaintext
'Serve the public trust.'
```

```python
newline_regex = re.compile('.*', re.DOTALL)
newline_regex.search('Serve the public trust.\nProtect the innocent.\nUphold the law.').group()
```

Sortie :

```plaintext
'Serve the public trust.\nProtect the innocent.\nUphold the law.'
```

## Correspondance insensible à la casse

Pour rendre votre regex insensible à la casse, vous pouvez passer `re.IGNORECASE` ou `re.I` comme deuxième argument à `re.compile()` :

```python
robocop = re.compile(r'robocop', re.I)

robocop.search('Robocop is part man, part machine, all cop.').group()
```

Sortie :

```plaintext
'Robocop'
```

```python
robocop.search('ROBOCOP protects the innocent.').group()
```

Sortie :

```plaintext
'ROBOCOP'
```

```python
robocop.search('Al, why does your programming book talk about robocop so much?').group()
```

Sortie :

```plaintext
'robocop'
```

## Substitution de chaînes avec la méthode sub()

La méthode `sub()` pour les objets Regex reçoit deux arguments :

1. Le premier argument est une chaîne pour remplacer toutes les correspondances.
2. Le second est la chaîne pour l'expression régulière.

La méthode `sub()` renvoie une chaîne avec les substitutions appliquées :

```python
names_regex = re.compile(r'Agent \w+')

names_regex.sub('CENSORED', 'Agent Alice gave the secret documents to Agent Bob.')
```

Sortie :

```plaintext
'CENSORED gave the secret documents to CENSORED.'
```

## Gestion des Regex complexes

Pour indiquer à la fonction `re.compile()` d'ignorer les espaces blancs et les commentaires à l'intérieur de la chaîne d'expression régulière, le « mode verbeux » peut être activé en passant la variable `re.VERBOSE` comme deuxième argument à `re.compile()`.

Maintenant, au lieu d'une expression régulière difficile à lire comme celle-ci :

```python
phone_regex = re.compile(r'((\d{3}|\(\d{3}\))?(\s|-|\.)?\d{3}(\s|-|\.)\d{4}(\s*(ext|x|ext.)\s*\d{2,5})?)')
```

vous pouvez répartir l'expression régulière sur plusieurs lignes avec des commentaires comme ceci :

```python
phone_regex = re.compile(r'''(
    (\d{3}|\(\d{3}\))?            # indicatif régional
    (\s|-|\.)?                    # séparateur
    \d{3}                         # premiers 3 chiffres
    (\s|-|\.)                     # séparateur
    \d{4}                         # derniers 4 chiffres
    (\s*(ext|x|ext.)\s*\d{2,5})?  # extension
    )''', re.VERBOSE)
```

## Liens pertinents

- <router-link to="/cheatsheet/manipulating-strings">Manipulation des Chaînes</router-link>
- <router-link to="/cheatsheet/string-formatting">Formatage des Chaînes</router-link>
- <router-link to="/blog/python-data-types">Article de Blog sur les Types de Données Python</router-link>
- <router-link to="/builtin/compile">compile()</router-link>
