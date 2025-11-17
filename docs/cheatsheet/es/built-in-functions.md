---
title: 'Funciones Integradas de Python - Hoja de Trucos de Python'
description: 'El intérprete de Python tiene varias funciones y tipos integrados que están siempre disponibles.'
labUrl: 'https://labex.io/es/labs/python-python-built-in-functions-633648?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Funciones Integradas de Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

El intérprete de Python tiene una serie de funciones y tipos integrados que siempre están disponibles.

## Funciones Integradas de Python

| Función                                                              | Descripción                                                                        |
| -------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| <router-link to='/builtin/abs'>abs()</router-link>                   | Devuelve el valor absoluto de un número.                                           |
| <router-link to='/builtin/aiter'>aiter()</router-link>               | Devuelve un iterador asíncrono para un iterable asíncrono.                         |
| <router-link to='/builtin/all'>all()</router-link>                   | Devuelve True si todos los elementos del iterable son verdaderos.                  |
| <router-link to='/builtin/any'>any()</router-link>                   | Devuelve True si algún elemento del iterable es verdadero.                         |
| <router-link to='/builtin/ascii'>ascii()</router-link>               | Devuelve una cadena con una representación imprimible de un objeto.                |
| <router-link to='/builtin/bin'>bin()</router-link>                   | Convierte un número entero a una cadena binaria.                                   |
| <router-link to='/builtin/bool'>bool()</router-link>                 | Devuelve un valor booleano.                                                        |
| <router-link to='/builtin/breakpoint'>breakpoint()</router-link>     | Te introduce en el depurador en el punto de llamada.                               |
| <router-link to='/builtin/bytearray'>bytearray()</router-link>       | Devuelve un nuevo array de bytes.                                                  |
| <router-link to='/builtin/bytes'>bytes()</router-link>               | Devuelve un nuevo objeto "bytes".                                                  |
| <router-link to='/builtin/callable'>callable()</router-link>         | Devuelve True si el argumento del objeto es invocable, False si no lo es.          |
| <router-link to='/builtin/chr'>chr()</router-link>                   | Devuelve la cadena que representa un carácter.                                     |
| <router-link to='/builtin/classmethod'>classmethod()</router-link>   | Transforma un método en un método de clase.                                        |
| <router-link to='/builtin/compile'>compile()</router-link>           | Compila el código fuente en un objeto de código o AST.                             |
| <router-link to='/builtin/complex'>complex()</router-link>           | Devuelve un número complejo con el valor real + imag\*1j.                          |
| <router-link to='/builtin/delattr'>delattr()</router-link>           | Elimina el atributo con nombre, siempre que el objeto lo permita.                  |
| <router-link to='/builtin/dict'>dict()</router-link>                 | Crea un nuevo diccionario.                                                         |
| <router-link to='/builtin/dir'>dir()</router-link>                   | Devuelve la lista de nombres en el ámbito local actual.                            |
| <router-link to='/builtin/divmod'>divmod()</router-link>             | Devuelve un par de números que consiste en su cociente y resto.                    |
| <router-link to='/builtin/enumerate'>enumerate()</router-link>       | Devuelve un objeto enumerate.                                                      |
| <router-link to='/builtin/eval'>eval()</router-link>                 | Evalúa y ejecuta una expresión.                                                    |
| <router-link to='/builtin/exec'>exec()</router-link>                 | Esta función soporta la ejecución dinámica de código Python.                       |
| <router-link to='/builtin/filter'>filter()</router-link>             | Construye un iterador a partir de un iterable y devuelve los elementos verdaderos. |
| <router-link to='/builtin/float'>float()</router-link>               | Devuelve un número de punto flotante a partir de un número o cadena.               |
| <router-link to='/builtin/format'>format()</router-link>             | Convierte un valor a una representación "formateada".                              |
| <router-link to='/builtin/frozenset'>frozenset()</router-link>       | Devuelve un nuevo objeto frozenset.                                                |
| <router-link to='/builtin/getattr'>getattr()</router-link>           | Devuelve el valor del atributo con nombre del objeto.                              |
| <router-link to='/builtin/globals'>globals()</router-link>           | Devuelve el diccionario que implementa el espacio de nombres del módulo actual.    |
| <router-link to='/builtin/hasattr'>hasattr()</router-link>           | Devuelve True si el objeto tiene el atributo con nombre.                           |
| <router-link to='/builtin/hash'>hash()</router-link>                 | Devuelve el valor hash del objeto.                                                 |
| <router-link to='/builtin/help'>help()</router-link>                 | Invoca el sistema de ayuda integrado.                                              |
| <router-link to='/builtin/hex'>hex()</router-link>                   | Convierte un número entero a una cadena hexadecimal en minúsculas.                 |
| <router-link to='/builtin/id'>id()</router-link>                     | Devuelve la "identidad" de un objeto.                                              |
| <router-link to='/builtin/input'>input()</router-link>               | Esta función toma una entrada y la convierte en una cadena.                        |
| <router-link to='/builtin/int'>int()</router-link>                   | Devuelve un objeto entero construido a partir de un número o cadena.               |
| <router-link to='/builtin/isinstance'>isinstance()</router-link>     | Devuelve True si el argumento del objeto es una instancia de un objeto.            |
| <router-link to='/builtin/issubclass'>issubclass()</router-link>     | Devuelve True si clase es una subclase de classinfo.                               |
| <router-link to='/builtin/iter'>iter()</router-link>                 | Devuelve un objeto iterador.                                                       |
| <router-link to='/builtin/len'>len()</router-link>                   | Devuelve la longitud (el número de elementos) de un objeto.                        |
| <router-link to='/builtin/list'>list()</router-link>                 | En lugar de ser una función, list es un tipo de secuencia mutable.                 |
| <router-link to='/builtin/locals'>locals()</router-link>             | Actualiza y devuelve un diccionario con la tabla de símbolos local actual.         |
| <router-link to='/builtin/map'>map()</router-link>                   | Devuelve un iterador que aplica la función a cada elemento del iterable.           |
| <router-link to='/builtin/max'>max()</router-link>                   | Devuelve el elemento más grande en un iterable.                                    |
| <router-link to='/builtin/min'>min()</router-link>                   | Devuelve el elemento más pequeño en un iterable.                                   |
| <router-link to='/builtin/next'>next()</router-link>                 | Recupera el siguiente elemento del iterador.                                       |
| <router-link to='/builtin/object'>object()</router-link>             | Devuelve un nuevo objeto sin características.                                      |
| <router-link to='/builtin/oct'>oct()</router-link>                   | Convierte un número entero a una cadena octal.                                     |
| <router-link to='/builtin/open'>open()</router-link>                 | Abre un archivo y devuelve un objeto de archivo correspondiente.                   |
| <router-link to='/builtin/ord'>ord()</router-link>                   | Devuelve un entero que representa el punto de código Unicode de un carácter.       |
| <router-link to='/builtin/pow'>pow()</router-link>                   | Devuelve base elevado a la potencia exp.                                           |
| <router-link to='/builtin/print'>print()</router-link>               | Imprime objetos en el flujo de texto del archivo.                                  |
| <router-link to='/builtin/property'>property()</router-link>         | Devuelve un atributo de propiedad.                                                 |
| <router-link to='/builtin/repr'>repr()</router-link>                 | Devuelve una cadena que contiene una representación imprimible de un objeto.       |
| <router-link to='/builtin/reversed'>reversed()</router-link>         | Devuelve un iterador inverso.                                                      |
| <router-link to='/builtin/round'>round()</router-link>               | Devuelve el número redondeado a la precisión de ndigits después del punto decimal. |
| <router-link to='/builtin/set'>set()</router-link>                   | Devuelve un nuevo objeto set.                                                      |
| <router-link to='/builtin/setattr'>setattr()</router-link>           | Este es el complemento de getattr().                                               |
| <router-link to='/builtin/slice'>slice()</router-link>               | Devuelve un objeto segmentado que representa un conjunto de índices.               |
| <router-link to='/builtin/sorted'>sorted()</router-link>             | Devuelve una nueva lista ordenada a partir de los elementos del iterable.          |
| <router-link to='/builtin/staticmethod'>staticmethod()</router-link> | Transforma un método en un método estático.                                        |
| <router-link to='/builtin/str'>str()</router-link>                   | Devuelve una versión str del objeto.                                               |
| <router-link to='/builtin/sum'>sum()</router-link>                   | Suma start y los elementos de un iterable.                                         |
| <router-link to='/builtin/super'>super()</router-link>               | Devuelve un objeto proxy que delega las llamadas a métodos a un padre o hermano.   |
| <router-link to='/builtin/tuple'>tuple()</router-link>               | En lugar de ser una función, es en realidad un tipo de secuencia inmutable.        |
| <router-link to='/builtin/type'>type()</router-link>                 | Devuelve el tipo de un objeto.                                                     |
| <router-link to='/builtin/vars'>vars()</router-link>                 | Devuelve el atributo dict para cualquier otro objeto con un atributo dict.         |
| <router-link to='/builtin/zip'>zip()</router-link>                   | Itera sobre varios iterables en paralelo.                                          |
| <router-link to='/builtin/import'>**import**()</router-link>         | Esta función es invocada por la sentencia import.                                  |
