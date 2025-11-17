---
title: 'Fonction intégrée Python aiter() - Aide-mémoire Python'
description: 'Retourne un itérateur asynchrone pour un itérable asynchrone. Équivalent à appeler x.__aiter__().'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
La fonction intégrée Python aiter()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#aiter">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Retourne un itérateur asynchrone pour un objet itérable asynchrone. Équivalent à appeler x.__aiter__(). aiter() est l'équivalent asynchrone de iter()
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `aiter()` retourne un itérateur asynchrone à partir d'un objet itérable asynchrone. C'est l'équivalent asynchrone de la fonction `iter()`.

Vous utiliserez généralement `aiter()` implicitement lorsque vous utilisez une boucle `async for`, mais vous pouvez l'appeler directement si vous avez besoin de travailler manuellement avec l'itérateur, souvent en conjonction avec `anext()`.

## Exemple

Voici un exemple d'itérable asynchrone. La boucle `async for` appelle automatiquement `aiter()` sur l'objet `AsyncCounter` pour obtenir un itérateur.

```python
import asyncio

class AsyncCounter:
    def __init__(self, stop):
        self.stop = stop
        self.current = 0

    def __aiter__(self):
        return self

    async def __anext__(self):
        if self.current < self.stop:
            await asyncio.sleep(0.1)
            value = self.current
            self.current += 1
            return value
        else:
            raise StopAsyncIteration

async def main():
    async for number in AsyncCounter(3):
        print(number)

# Pour exécuter ceci dans un environnement réel :
# asyncio.run(main())
```

Sortie :

```plaintext
0
1
2
```

## Liens pertinents

- <router-link to="/cheatsheet/control-flow">Cheatsheet : Flux de contrôle (async for)</router-link>
- <router-link to="/cheatsheet/functions">Cheatsheet : Fonctions (async def)</router-link>
- <router-link to="/modules/itertools-module">Module : itertools</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
- <router-link to="/builtin/next">next()</router-link>
