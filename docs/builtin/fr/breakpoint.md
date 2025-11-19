---
title: 'Fonction intégrée Python breakpoint() - Aide-mémoire Python'
description: "Cette fonction vous plonge dans le débogueur au point d'appel. Elle appelle spécifiquement sys.breakpointhook(), en transmettant les arguments et mots-clés directement. Par défaut, sys.breakpointhook() appelle pdb.set_trace() sans arguments. C'est une fonction de commodité pour éviter d'importer pdb explicitement. Cependant, sys.breakpointhook() peut être configuré pour appeler le débogueur de votre choix."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python breakpoint()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#breakpoint">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Cette fonction vous fait entrer dans le débogueur Python au point d'appel [...].
    <br/>
    Python breakpoint() appelle le débogueur Python à une ligne donnée
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `breakpoint()`, introduite dans Python 3.7, offre un moyen simple d'entrer dans le débogueur Python (`pdb`) à un point spécifique de votre code. C'est une alternative pratique à l'importation manuelle de `pdb` et à l'appel de `pdb.set_trace()`. Cette fonction simplifie le processus de débogage, vous permettant d'inspecter les variables et de parcourir votre code de manière interactive.

## Exemple

Voici comment vous pouvez utiliser `breakpoint()` pour interrompre l'exécution et inspecter les variables :

```python
def calculate_sum(a, b):
    result = a + b
    # Nous voulons inspecter 'result' avant de retourner
    breakpoint()
    return result

# Lorsque vous exécutez ceci, le débogueur démarrera juste après que 'result' ait été calculé
# Vous pouvez ensuite taper 'result' dans l'invite (Pdb) pour voir sa valeur
# Pour continuer l'exécution, tapez 'c' ou 'continue'
final_sum = calculate_sum(10, 20)
print(final_sum)
```

```output
(Pdb) result
30
(Pdb) c
30
```

## Liens pertinents

- <router-link to="/cheatsheet/debugging">Cheatsheet : Débogage</router-link>
- <router-link to="/cheatsheet/control-flow">Cheatsheet : Flux de contrôle</router-link>
- <router-link to="/builtin/print">print()</router-link>
- <router-link to="/builtin/input">input()</router-link>
- <router-link to="/builtin/eval">eval()</router-link>
- <router-link to="/builtin/exec">exec()</router-link>
- <router-link to="/builtin/globals">globals()</router-link>
- <router-link to="/builtin/locals">locals()</router-link>
