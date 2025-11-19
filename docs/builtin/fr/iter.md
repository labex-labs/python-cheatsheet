---
title: 'Fonction intégrée iter() de Python - Aide-mémoire Python'
description: "Retourne un objet itérateur. Le premier argument est interprété différemment selon la présence du second argument. Sans second argument, l'objet doit être une collection supportant le protocole itérable, ou le protocole séquence. Sinon, une erreur TypeError est levée."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python iter()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#iter">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retourne un objet itérateur. Le premier argument est interprété très différemment selon la présence du second argument. Sans second argument, object doit être un objet collection qui supporte le protocole itérable, ou il doit supporter le protocole séquence. S'il ne supporte aucun de ces protocoles, TypeError est levée.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `iter()` retourne un objet itérateur. Un itérateur est un objet sur lequel on peut itérer (boucler). C'est ce qui alimente les boucles `for` en Python.

Vous pouvez utiliser `iter()` pour obtenir un itérateur à partir de n'importe quel objet itérable, comme une liste, un tuple ou une chaîne de caractères.

### Exemples

**Obtenir un itérateur à partir d'une liste :**

```python
my_list = [1, 2, 3]
my_iter = iter(my_list)

print(next(my_iter))
print(next(my_iter))
print(next(my_iter))
```

```output
1
2
3
```

```python
i = iter([1, 2, 3])
print(i)
print(i.__next__())
print(i.__next__())
print(i.__next__())
```

```output
<list_iterator object at 0x7f93158badc0>
1
2
3
```

## Liens pertinents

- <router-link :to="'/builtin/next'">`next()`</router-link>
- <router-link :to="'/cheatsheet/control-flow'">Flux de contrôle</router-link>
- <router-link :to="'/cheatsheet/lists-and-tuples'">Listes et tuples</router-link>
- <router-link :to="'/builtin/enumerate'">`enumerate()`</router-link>
- <router-link :to="'/builtin/zip'">`zip()`</router-link>
- <router-link :to="'/builtin/map'">`map()`</router-link>
- <router-link :to="'/builtin/filter'">`filter()`</router-link>
