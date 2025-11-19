---
title: 'Fonction intégrée Python exec() - Fiche mémo Python'
description: "Cette fonction permet l'exécution dynamique de code Python. L'objet doit être une chaîne de caractères ou un objet code. S'il s'agit d'une chaîne, elle est analysée comme une suite d'instructions Python qui est ensuite exécutée (sauf erreur de syntaxe) [...]."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
La fonction intégrée Python exec()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    À partir de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#exec">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Cette fonction prend en charge l'exécution dynamique de code Python. L'objet doit être soit une chaîne de caractères, soit un objet code. S'il s'agit d'une chaîne, celle-ci est analysée comme une suite d'instructions Python qui est ensuite exécutée (sauf en cas d'erreur de syntaxe) [...].
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `exec()` en Python est une fonction intégrée qui permet d'exécuter dynamiquement du code Python stocké dans une chaîne de caractères. Cela peut être très puissant pour les scénarios où vous souhaitez exécuter du code fourni par les utilisateurs, générer et exécuter du code à l'exécution, ou même construire des mini-interpréteurs ou des environnements de script au sein de votre application. Cependant, elle doit être utilisée avec prudence car elle peut potentiellement introduire des risques de sécurité si elle n'est pas gérée correctement.

## Syntaxe

```python
exec(object[, globals[, locals]])
```

- `object`: La chaîne contenant le code Python à exécuter.
- `globals` (optionnel): Un dictionnaire représentant l'espace de noms global. S'il n'est pas fourni, il utilise l'espace de noms global actuel.
- `locals` (optionnel): Un dictionnaire représentant l'espace de noms local. S'il n'est pas fourni, il utilise l'espace de noms local actuel.

## Utilisation de Base

```python
code_to_execute = "print('Hello, exec()!')"
exec(code_to_execute)
```

```output
Hello, exec()!
```

La fonction `exec()` peut également être utilisée avec la fonction <router-link to="/builtin/print">print()</router-link> pour afficher la sortie dans la console.

## Exécution de Multiples Instructions

```python
code = """
for i in range(5):
    print(i)
"""
exec(code)
```

```output
0
1
2
3
4
```

Dans cet exemple, la fonction `exec()` est utilisée pour exécuter une boucle `for` qui itère sur une <router-link to="/builtin/range">plage</router-link> de nombres et <router-link to="/builtin/print">imprime</router-link> chaque nombre dans la console.

## Modification des Variables

```python
x = 10
code = "x += 5"
exec(code)
print(x)
```

```output
15
```

## Utilisation de `globals` et `locals`

```python
x = 5
code = "x = x * 2"
globals_dict = {"x": 10}
locals_dict = {"x": 20}
exec(code, globals_dict, locals_dict)
print(x)
print(globals_dict)
print(locals_dict)
```

```output
5
{'x': 10}
{'x': 40}
```

## Création de Fonction Dynamique

```python
def create_dynamic_function(name, args):
    code = f"def {name}({', '.join(args)}): return sum({args})"
    exec(code)

create_dynamic_function("add_numbers", ["a", "b", "c"])
result = add_numbers(2, 3, 5)
print(result)
```

```output
10
```

Dans cet exemple, la fonction `exec()` est utilisée pour créer une fonction dynamique qui prend une liste d'arguments et retourne leur <router-link to="/builtin/sum">somme</router-link>.

## Gestion des Erreurs

```python
code = """
try:
    print(undefined_variable)
except NameError as e:
    print(f"Error: {e}")
"""
exec(code)
```

```output
Error: name 'undefined_variable' is not defined
```

## Note de Sécurité

```python
user_input = input("Enter code to execute: ")
exec(user_input)  # Caution: This can be a security risk if not properly sanitized.
```

## Liens Pertinents

- <router-link :to="'/builtin/compile'">`compile()`</router-link>
- <router-link :to="'/builtin/eval'">`eval()`</router-link>
- <router-link :to="'/builtin/globals'">`globals()`</router-link>
- <router-link :to="'/builtin/locals'">`locals()`</router-link>
- <router-link :to="'/cheatsheet/exception-handling'">Gestion des Exceptions</router-link>
- <router-link :to="'/cheatsheet/debugging'">Débogage</router-link>
