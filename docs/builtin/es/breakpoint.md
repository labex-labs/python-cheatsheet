---
title: 'Función incorporada breakpoint() de Python - Hoja de trucos de Python'
description: 'Esta función te lleva al depurador en el punto de llamada. Llama a sys.breakpointhook(), pasando argumentos y palabras clave directamente. Por defecto, sys.breakpointhook() llama a pdb.set_trace(). Es una función de conveniencia para entrar al depurador sin importar pdb explícitamente. Sin embargo, sys.breakpointhook() puede configurarse para llamar a otra función de depuración.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada Python breakpoint()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#breakpoint">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Esta función te introduce en el depurador en el punto de llamada [...].
    <br/>
    Python breakpoint() llama al depurador de Python en una línea dada
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `breakpoint()` en Python, introducida en Python 3.7, proporciona una forma sencilla de entrar en el depurador de Python (`pdb`) en un punto específico de tu código. Es una alternativa conveniente a importar manualmente `pdb` y llamar a `pdb.set_trace()`. Esta función simplifica el proceso de depuración, permitiéndote inspeccionar variables y recorrer tu código interactivamente.

## Ejemplo

Así es como puedes usar `breakpoint()` para pausar la ejecución e inspeccionar variables:

```python
def calculate_sum(a, b):
    result = a + b
    # Queremos inspeccionar 'result' antes de devolverlo
    breakpoint()
    return result

# Cuando ejecutas esto, el depurador comenzará justo después de que se calcule 'result'
# Luego puedes escribir 'result' en el prompt (Pdb) para ver su valor
# Para continuar la ejecución, escribe 'c' o 'continue'
final_sum = calculate_sum(10, 20)
print(final_sum)
```

```output
(Pdb) result
30
(Pdb) c
30
```

## Enlaces relevantes

- <router-link to="/cheatsheet/debugging">Cheatsheet: Debugging</router-link>
- <router-link to="/cheatsheet/control-flow">Cheatsheet: Control Flow</router-link>
- <router-link to="/builtin/print">print()</router-link>
- <router-link to="/builtin/input">input()</router-link>
- <router-link to="/builtin/eval">eval()</router-link>
- <router-link to="/builtin/exec">exec()</router-link>
- <router-link to="/builtin/globals">globals()</router-link>
- <router-link to="/builtin/locals">locals()</router-link>
