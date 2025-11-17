---
title: 'Función incorporada format() de Python - Hoja de trucos de Python'
description: "Convierte un valor a una representación 'formateada', controlada por format_spec. La interpretación de format_spec dependerá del tipo del argumento value. [...]"
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada format() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#format">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Convierte un valor a una representación "formateada", según lo controlado por format_spec. La interpretación de format_spec dependerá del tipo del argumento value. [...].
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `format()` en Python es una función incorporada versátil que le permite crear cadenas formateadas. Proporciona una forma de incrustar valores en una cadena, controlar su alineación y especificar su presentación, como el número de decimales o el relleno.

La función <router-link to="/builtin/format">format()</router-link> formatea un valor especificado en un formato especificado.

## Ejemplos

```python
name = 'Micheal'
company = 'Dunder Mifflin'

print("My name is {0} and I work for {1}.".format(name, company))

# Formatting string (faster and easier)
print(f"My name is {name} and I work for {company}.")
```

Salida:

```plaintext
My name is Micheal and I work for Dunder Mifflin.
My name is Micheal and I work for Dunder Mifflin.
```

## Enlaces relevantes

- <router-link :to="'/builtin/str/'">str()</router-link>
- <router-link :to="'/cheatsheet/string-formatting'">Formato de Cadenas (String Formatting)</router-link>
- <router-link :to="'/cheatsheet/manipulating-strings'">Manipulación de Cadenas (Manipulating Strings)</router-link>
- <router-link :to="'/builtin/print'">print()</router-link>
