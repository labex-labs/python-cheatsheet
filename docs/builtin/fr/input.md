---
title: 'Fonction intégrée Python input() - Aide-mémoire Python'
description: "Si l'argument 'prompt' est présent, il est écrit sur la sortie standard sans retour à la ligne final. La fonction lit ensuite une ligne depuis l'entrée, la convertit en chaîne de caractères (en supprimant le retour à la ligne final) et la retourne. Lorsque la fin de fichier (EOF) est lue, une EOFError est levée."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python input()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    À partir de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#input">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Si l'argument `prompt` est présent, il est écrit sur la sortie standard sans saut de ligne final. La fonction lit ensuite une ligne depuis l'entrée, la convertit en une chaîne de caractères (en supprimant un saut de ligne final), et la retourne. Lorsque la fin de fichier (EOF) est lue, `EOFError` est levée.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `input()` en Python est une fonction intégrée qui permet à un programme de lire une ligne de texte depuis le clavier de l'utilisateur. C'est un outil essentiel pour créer des applications interactives, car elle interrompt l'exécution du programme et attend que l'utilisateur fournisse une entrée. La fonction peut également afficher une invite pour guider l'utilisateur sur ce qu'il doit saisir.

## Exemples

Cette fonction prend l'entrée de l'utilisateur et la convertit en une chaîne de caractères :

```python
# demander son nom
print('What is your name?')
my_name = input()
print('Hi, {}'.format(my_name))
```

Sortie :

```plaintext
What is your name?
Martha
Hi, Martha
```

`input()` peut également définir un message par défaut sans utiliser `print()` :

```python
# message par défaut
my_name = input('What is your name? ')
print('Hi, {}'.format(my_name))
```

Sortie :

```plaintext
What is your name? Martha
Hi, Martha
```

## Liens pertinents

- <router-link :to="'/builtin/print'">print()</router-link>
- <router-link :to="'/builtin/str'">str()</router-link>
- <router-link :to="'/builtin/int'">int()</router-link>
- <router-link :to="'/builtin/float'">float()</router-link>
- <router-link :to="'/cheatsheet/string-formatting'">Formatage de chaînes</router-link>
- <router-link :to="'/cheatsheet/manipulating-strings'">Manipulation de chaînes</router-link>
