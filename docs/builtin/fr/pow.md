---
title: 'Fonction intégrée pow() en Python - Aide-mémoire Python'
description: "La fonction pow() retourne la puissance d'un nombre."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
La fonction intégrée Python pow()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#pow">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
      La fonction pow() retourne la puissance d'un nombre. Elle prend deux ou trois arguments :
      pow(base, exp): Retourne base élevé à la puissance exp (base ** exp).
      pow(base, exp, mod): Retourne (base ** exp) % mod (pour l'arithmétique modulaire).
      Le résultat est calculé plus efficacement que base ** exp % mod, si l'argument mod est présent.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `pow()` est utilisée pour l'exponentiation. Elle peut prendre deux ou trois arguments.

- `pow(base, exp)`: Ceci est équivalent à `base ** exp`.
- `pow(base, exp, mod)`: Ceci est équivalent à `(base ** exp) % mod`, mais est plus efficace. Ceci est utile pour l'arithmétique modulaire.

### Exemples

```python
# Utilisation de deux arguments (base ** exp)
print(pow(2, 3))
print(pow(3, 2))
print(pow(2, -3))  # équivalent à 1 / (2**3)

# Utilisation de trois arguments ((base ** exp) % mod)
print(pow(3, 2, 4))  # puisque 3**2 est 9, et 9 % 4 est 1
print(pow(2, 3, 5))  # puisque 2**3 est 8, et 8 % 5 est 3
```

```output
8
9
0.125
1
3
```

## Liens pertinents

- <router-link to="/blog/python-data-types">Blog : Types de données Python</router-link>
- <router-link to="/builtin/divmod">divmod()</router-link>
- <router-link to="/builtin/abs">abs()</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
