---
title: 'Fonction intégrée Python callable() - Aide-mémoire Python'
description: "Retourne Vrai si l'objet argument semble appelable, Faux sinon. Si cela retourne Vrai, un appel peut toujours échouer, mais si c'est Faux, appeler l'objet ne réussira jamais. Notez que les classes sont appelables (appeler une classe retourne une nouvelle instance) ; les instances sont appelables si leur classe possède une méthode __call__()."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python callable()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#callable">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Retourne True si l'objet argument semble appelable, False sinon. Si cela retourne True, il est toujours possible qu'un appel échoue, mais si c'est False, appeler object échouera toujours. Notez que les classes sont appelables (appeler une classe retourne une nouvelle instance) ; les instances sont appelables si leur classe possède une méthode __call__().
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

En Python, la fonction `callable()` est une fonction intégrée qui peut être utilisée pour déterminer si un objet est appelable, c'est-à-dire s'il peut être invoqué comme une fonction.

Elle retourne `True` si l'objet qui lui est passé est appelable et `False` sinon. Par exemple, une fonction, une méthode, une classe, une fonction lambda et un générateur sont tous des objets appelables en Python.

Voici un exemple de la façon dont vous pouvez utiliser la fonction `callable()` :

```python
def my_function():
    pass

class MyClass:
    def __call__(self):
        pass

x = 5
y = my_function
z = MyClass()
a = lambda: None

print(callable(x))
print(callable(y))
print(callable(z))
print(callable(a))
```

```output
False
True
True
True
```

Dans l'exemple ci-dessus, `my_function` est une fonction et elle est appelable, `MyClass` est une classe et elle est également appelable car elle possède une méthode `__call__`, `z` est une instance de la classe `MyClass` et elle est également appelable car elle possède une méthode `__call__` et `a` est une fonction lambda qui est appelable.

La fonction `callable()` peut être utile dans les situations où vous devez déterminer si un objet peut être invoqué comme une fonction, par exemple lorsque vous travaillez avec des rappels (callbacks) ou d'autres types de pointeurs de fonction.

## Liens pertinents

- <router-link :to="'/builtin/hasattr'">hasattr()</router-link>
- <router-link :to="'/cheatsheet/functions'">Functions</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">OOP Basics</router-link>
- <router-link :to="'/builtin/getattr'">getattr()</router-link>
- <router-link :to="'/builtin/isinstance'">isinstance()</router-link>
