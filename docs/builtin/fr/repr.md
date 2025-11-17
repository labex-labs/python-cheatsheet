---
title: 'Fonction intégrée Python repr() - Aide-mémoire Python'
description: "Retourne une chaîne contenant une représentation imprimable d'un objet. Pour de nombreux types, cette fonction tente de retourner une chaîne qui produirait un objet de même valeur lorsqu'elle est passée à eval() ; sinon, la représentation est une chaîne entourée d'angles contenant le nom du type de l'objet ainsi que des informations supplémentaires incluant souvent le nom et l'adresse de l'objet. Une classe peut contrôler ce que cette fonction retourne pour ses instances en définissant une méthode __repr__()."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
La fonction intégrée Python repr()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#repr">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retourne une chaîne de caractères contenant une représentation imprimable d'un objet. Pour de nombreux types, cette fonction tente de retourner une chaîne qui produirait un objet de même valeur lorsqu'elle est passée à eval() ; sinon, la représentation est une chaîne entourée de chevrons contenant le nom du type de l'objet ainsi que des informations supplémentaires incluant souvent le nom et l'adresse de l'objet. Une classe peut contrôler ce que cette fonction retourne pour ses instances en définissant une méthode __repr__().
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `repr()` retourne une chaîne de caractères contenant une représentation imprimable d'un objet. L'objectif de `repr()` est d'être sans ambiguïté. Pour de nombreux types, `repr()` retourne une chaîne qui peut être exécutée par <router-link to="/builtin/eval">eval()</router-link> pour créer un objet identique.

Ceci est différent de <router-link to="/builtin/str">str()</router-link>, qui est destiné à être lisible par l'homme.

### Exemple

```python
import datetime

# Pour une chaîne de caractères, repr() ajoute des guillemets
print(repr("hello"))

# Pour un objet datetime, c'est sans ambiguïté
now = datetime.datetime.now()
print(repr(now))

# Vous pouvez définir __repr__ pour vos propres classes
class Person:
    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return f"Person(name='{self.name}')"

p = Person("John")
print(repr(p))
```

Sortie :

```plaintext
'hello'
datetime.datetime(2023, 10, 27, 10, 0, 0, 123456)
Person(name='John')
```

## Liens pertinents

- <router-link to="/cheatsheet/oop-basics">Cheatsheet : Bases de l'OOP</router-link>
- <router-link to="/cheatsheet/debugging">Cheatsheet : Débogage</router-link>
- <router-link to="/cheatsheet/string-formatting">Cheatsheet : Formatage de chaînes</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/ascii">ascii()</router-link>
- <router-link to="/builtin/eval">eval()</router-link>
- <router-link to="/builtin/format">format()</router-link>
