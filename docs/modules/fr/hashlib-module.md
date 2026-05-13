---
title: Module Hashlib Python - Aide-mémoire Python
description: Le module `hashlib` fournit des fonctions de hachage sécurisées comme SHA-256 et MD5.
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Module Hashlib Python
</base-title>

Le module `hashlib` fournit des fonctions de hachage sécurisées comme SHA-256 et MD5.

```python
import hashlib
```

Les fonctions de hachage transforment les données en un condensat de longueur fixe. Un petit changement dans l’entrée produit un condensat très différent.

## Créer un hachage

On commence généralement par choisir un algorithme et passer des octets.

```python
import hashlib

digest = hashlib.sha256(b'hello world')
print(digest.hexdigest())
```

```output
b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
```

Les chaînes doivent d’abord être encodées en octets :

```python
import hashlib

message = 'hello world'
digest = hashlib.sha256(message.encode('utf-8')).hexdigest()
print(digest)
```

```output
b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
```

## Mise à jour incrémentale

Les hachages peuvent être mis à jour par blocs.

```python
hasher = hashlib.sha256()
hasher.update(b'hello ')
hasher.update(b'world')
print(hasher.hexdigest())
```

```output
b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
```

## Comparer les algorithmes

Les différents algorithmes produisent des condensats de tailles différentes.

```python
print(hashlib.md5(b'abc').hexdigest())
print(hashlib.sha1(b'abc').hexdigest())
print(hashlib.sha256(b'abc').hexdigest())
```

```output
900150983cd24fb0d6963f7d28e17f72
a9993e364706816aba3e25717850c26c9cd0d89d
ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad
```

## Hacher un fichier

Lisez les fichiers par blocs afin de ne pas charger les gros fichiers en mémoire d’un seul coup.

```python
import hashlib
from pathlib import Path

path = Path('example.txt')
path.write_text('hello world')

hasher = hashlib.sha256()
with path.open('rb') as file:
    for chunk in iter(lambda: file.read(8192), b''):
        hasher.update(chunk)

print(hasher.hexdigest())
path.unlink()
```

```output
b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9
```

<base-warning>
  <base-warning-title>
    WARNING
  </base-warning-title>
  <base-warning-content>
    Pour du nouveau code, privilégiez des algorithmes modernes comme SHA-256 ou SHA-512. MD5 et SHA-1 restent utiles pour les sommes de contrôle, mais ne conviennent pas aux usages sensibles à la sécurité.
  </base-warning-content>
</base-warning>

## Liens pertinents

- <router-link to="/modules/pathlib-module">Module: pathlib</router-link>
- <router-link to="/cheatsheet/reading-and-writing-files">Aide-mémoire : Lire et écrire des fichiers</router-link>
- <router-link to="/builtin/open">open()</router-link>
