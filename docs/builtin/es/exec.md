---
title: 'Función incorporada exec() de Python - Hoja de trucos de Python'
description: 'Esta función permite la ejecución dinámica de código Python. El objeto debe ser una cadena o un objeto de código. Si es una cadena, se analiza como un bloque de sentencias de Python que luego se ejecuta (a menos que ocurra un error de sintaxis) [...].'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Función incorporada exec() de Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/library/functions.html#exec">documentación de Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Esta función admite la ejecución dinámica de código Python. object debe ser una cadena o un objeto de código. Si es una cadena, la cadena se analiza como un bloque de sentencias de Python que luego se ejecuta (a menos que ocurra un error de sintaxis) [...].
  </base-disclaimer-content>
</base-disclaimer>

## Introducción

La función `exec()` en Python es una función incorporada que permite ejecutar dinámicamente código Python almacenado en una cadena. Esto puede ser muy potente para escenarios en los que se desea ejecutar código proporcionado por los usuarios, generar y ejecutar código en tiempo de ejecución, o incluso crear mini intérpretes o entornos de scripting dentro de su aplicación. Sin embargo, debe usarse con precaución, ya que puede introducir riesgos de seguridad si no se maneja correctamente.

## Sintaxis

```python
exec(object[, globals[, locals]])
```

- `object`: La cadena que contiene el código Python a ejecutar.
- `globals` (opcional): Un diccionario que representa el espacio de nombres global. Si no se proporciona, utiliza el espacio de nombres global actual.
- `locals` (opcional): Un diccionario que representa el espacio de nombres local. Si no se proporciona, utiliza el espacio de nombres local actual.

## Uso Básico

```python
code_to_execute = "print('¡Hola, exec()!')"
exec(code_to_execute)
```

```output
¡Hola, exec()!
```

La función `exec()` también se puede utilizar con la función <router-link to="/builtin/print">print()</router-link> para mostrar la salida en la consola.

## Ejecución de Múltiples Sentencias

```python
code = """
for i in range(5):
    print(i)
"""
exec(code)
```

```output
0
1
2
3
4
```

En este ejemplo, la función `exec()` se utiliza para ejecutar un bucle for que itera sobre un <router-link to="/builtin/range">range</router-link> de números e <router-link to="/builtin/print">imprime</router-link> cada número en la consola.

## Modificación de Variables

```python
x = 10
code = "x += 5"
exec(code)
print(x)
```

```output
15
```

## Uso de `globals` y `locals`

```python
x = 5
code = "x = x * 2"
globals_dict = {"x": 10}
locals_dict = {"x": 20}
exec(code, globals_dict, locals_dict)
print(x)
print(globals_dict)
print(locals_dict)
```

```output
5
{'x': 10}
{'x': 40}
```

## Creación Dinámica de Funciones

```python
def create_dynamic_function(name, args):
    code = f"def {name}({', '.join(args)}): return sum({args})"
    exec(code)

create_dynamic_function("add_numbers", ["a", "b", "c"])
result = add_numbers(2, 3, 5)
print(result)
```

```output
10
```

En este ejemplo, la función `exec()` se utiliza para crear una función dinámica que toma una lista de argumentos y devuelve su <router-link to="/builtin/sum">suma</router-link>.

## Manejo de Errores

```python
code = """
try:
    print(undefined_variable)
except NameError as e:
    print(f"Error: {e}")
"""
exec(code)
```

```output
Error: name 'undefined_variable' is not defined
```

## Nota de Seguridad

```python
user_input = input("Introduce el código a ejecutar: ")
exec(user_input)  # Precaución: Esto puede ser un riesgo de seguridad si no se sanitiza adecuadamente.
```

## Enlaces Relevantes

- <router-link :to="'/builtin/compile'">`compile()`</router-link>
- <router-link :to="'/builtin/eval'">`eval()`</router-link>
- <router-link :to="'/builtin/globals'">`globals()`</router-link>
- <router-link :to="'/builtin/locals'">`locals()`</router-link>
- <router-link :to="'/cheatsheet/exception-handling'">Manejo de Excepciones</router-link>
- <router-link :to="'/cheatsheet/debugging'">Depuración</router-link>
