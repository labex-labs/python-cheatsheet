---
title: 'Fonction intégrée Python bytearray() - Aide-mémoire Python'
description: "Retourne un nouveau tableau d'octets. La classe bytearray est une séquence mutable d'entiers dans la plage [...]. Elle possède la plupart des méthodes habituelles des séquences mutables, décrites dans Types de séquences mutables, ainsi que la plupart des méthodes que possède le type bytes [...]"
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python bytearray()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    À partir de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#bytearray">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Retourne un nouveau tableau d'octets. La classe bytearray est une séquence mutable d'entiers dans la plage [...]. Elle possède la plupart des méthodes habituelles des séquences mutables, décrites dans Séquences Mutables, ainsi que la plupart des méthodes que possède le type bytes [...].
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `bytearray()` retourne un nouveau tableau d'octets. Cet objet est une séquence mutable d'entiers dans la plage $0 \le x < 256$. C'est essentiellement une version mutable de l'objet `bytes`, ce qui signifie que vous pouvez modifier son contenu après sa création. Ceci est utile pour manipuler des données binaires qui doivent être modifiées sur place.

## Examples

```python
# Create a bytearray from a string with a specific encoding
ba1 = bytearray("hello", "utf-8")
print(ba1)
```

Output:

```plaintext
bytearray(b'hello')
```

```python
# Create a bytearray from a list of integers
ba2 = bytearray([72, 101, 108, 108, 111])
print(ba2)
```

Output:

```plaintext
bytearray(b'Hello')
```

```python
# Modify a bytearray (it's mutable)
ba2[0] = 104  # ASCII for 'h'
ba2.append(33)  # ASCII for '!'
print(ba2)
```

Output:

```plaintext
bytearray(b'hello!')
```

## Relevant links

- <router-link to="/cheatsheet/reading-and-writing-files">Cheatsheet : Lecture et Écriture de Fichiers</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet : Listes et Tuples</router-link>
- <router-link to="/blog/python-data-types">Blog : Types de Données Python</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/memoryview">memoryview()</router-link>
- <router-link to="/builtin/open">open()</router-link>
- <router-link to="/builtin/int">int()</router-link>
