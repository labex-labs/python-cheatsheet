---
title: 'Fonction intégrée Python memoryview() - Aide-mémoire Python'
description: "Retourne un objet « vue mémoire » créé à partir de l'argument donné. Voir Vues Mémoire pour plus d'informations."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
La fonction intégrée Python memoryview()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#memoryview">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retourne un objet « memory view » créé à partir de l'argument donné. Voir Memory Views pour plus d'informations.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `memoryview()` crée un objet memory view à partir d'un argument donné. Une memory view vous permet d'accéder à la mémoire d'un autre objet, comme un objet `<router-link to="/builtin/bytes">bytes</router-link>` ou `<router-link to="/builtin/bytearray">bytearray</router-link>`, sans faire de copie. Ceci est très efficace pour les grandes quantités de données, car cela évite la duplication de mémoire.

### Exemples

Voici comment vous pouvez utiliser `memoryview()` :

```python
# Créer un bytearray
data = bytearray(b'hello world')

# Créer une memory view des données
view = memoryview(data)

# Accéder aux données via la vue
print(view[0])  # ASCII pour 'h'
print(view[6:11])  # une tranche de la mémoire
print(view[6:11].tobytes())

# Vous pouvez également modifier les données sous-jacentes via la vue
view[0] = 72  # ASCII pour 'H'
print(data)
```

Sortie :

```plaintext
104
<memory at 0x...>
b'world'
bytearray(b'Hello world')
```

## Liens pertinents

- <router-link to="/blog/python-data-types">Blog : Types de données Python</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
- <router-link to="/builtin/bytearray">bytearray()</router-link>
