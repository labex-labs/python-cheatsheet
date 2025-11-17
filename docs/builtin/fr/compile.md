---
title: 'Fonction intégrée compile() de Python - Aide-mémoire Python'
description: "Compile la source en un objet code ou AST. Les objets code peuvent être exécutés par exec() ou eval(). La source peut être une chaîne normale, une chaîne d'octets ou un objet AST. Consultez la documentation du module ast pour savoir comment travailler avec les objets AST."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python compile()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#compile">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Compile la source en un objet code ou AST. Les objets code peuvent être exécutés par <router-link to="/builtin/exec">exec()</router-link> ou <router-link to="/builtin/eval">eval()</router-link>. source peut être soit une chaîne normale, une chaîne d'octets, soit un objet AST. Consultez la documentation du module ast pour savoir comment travailler avec les objets AST.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `compile()` en Python est une fonction intégrée utilisée pour convertir une chaîne de caractères ou un objet Abstract Syntax Tree (AST) en un objet code. Cet objet code peut ensuite être exécuté par des fonctions telles que <router-link to="/builtin/exec">exec()</router-link> ou <router-link to="/builtin/eval">eval()</router-link>.

## Exemple

Voici un exemple de base de son fonctionnement :

```python
code_string = """
def hello_world():
    print('Hello, world!')

hello_world()
"""

# Compile la chaîne en un objet code
# Le mode 'exec' est utilisé pour une séquence d'instructions.
# Le mode 'eval' est pour une seule expression.
# Le mode 'single' est pour une seule instruction interactive.
code_object = compile(code_string, '<string>', 'exec')

# Exécute l'objet code
exec(code_object)
```

Sortie :

```plaintext
Hello, world!
```

## Liens pertinents

- <router-link to="/cheatsheet/debugging">Cheatsheet : Débogage</router-link>
- <router-link to="/builtin/exec">exec()</router-link>
- <router-link to="/builtin/eval">eval()</router-link>
- <router-link to="/builtin/breakpoint">breakpoint()</router-link>
