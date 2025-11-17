---
title: 'Fonction intégrée complex() de Python - Aide-mémoire Python'
description: "Retourne un nombre complexe de valeur réel + imag*1j ou convertit une chaîne ou un nombre en nombre complexe. [...] Chaque argument peut être de n'importe quel type numérique (y compris complexe). Si imag est omis, il est par défaut à zéro et le constructeur sert de conversion numérique comme int et float. Si les deux arguments sont omis, retourne 0j."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Fonction intégrée Python complex()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Tiré de la <a target="_blank" href="https://docs.python.org/3/library/functions.html#complex">documentation Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retourne un nombre complexe de valeur real + imag*1j ou convertit une chaîne ou un nombre en un nombre complexe. [...] Chaque argument peut être de n'importe quel type numérique (y compris complexe). Si imag est omis, il prend la valeur par défaut de zéro et le constructeur sert de conversion numérique comme <router-link to="/builtin/int">`int()`</router-link> et <router-link to="/builtin/float">`float()`</router-link>. Si les deux arguments sont omis, retourne 0j.
  </base-disclaimer-content>
</base-disclaimer>

## Introduction

La fonction `complex()` crée un nombre complexe. Elle peut prendre une partie réelle et une partie imaginaire comme arguments. Si un seul argument est fourni, il est considéré comme la partie réelle et la partie imaginaire est zéro.

## Examples

```python
# Create a complex number with real and imaginary parts
print(complex(3, 4))

# Create a complex number with only a real part
print(complex(5))

# Create a complex number from a string
print(complex("2+3j"))
```

Output:

```plaintext
(3+4j)
(5+0j)
(2+3j)
```

## Relevant links

- <router-link to="/blog/python-data-types">Blog : Types de données Python</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
- <router-link to="/builtin/abs">abs()</router-link>
- <router-link to="/builtin/pow">pow()</router-link>
