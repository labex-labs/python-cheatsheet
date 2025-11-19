---
title: 'Depuración de Python - Hoja de trucos de Python'
description: 'En programación informática y desarrollo de software, la depuración es el proceso de encontrar y resolver errores (defectos o problemas que impiden el funcionamiento correcto) dentro de programas informáticos, software o sistemas.'
labUrl: 'https://labex.io/es/labs/python-python-debugging-633653?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Depuración de Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://en.wikipedia.org/wiki/Debugging">Encontrar y resolver errores</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    En la programación informática y el desarrollo de software, la depuración es el proceso de encontrar y resolver errores (defectos o problemas que impiden el funcionamiento correcto) dentro de programas informáticos, software o sistemas.
  </base-disclaimer-content>
</base-disclaimer>

## Lanzar Excepciones

Las excepciones se lanzan con una sentencia `raise`. En el código, una sentencia `raise` consta de lo siguiente:

- La palabra clave `raise`
- Una llamada a la función `Exception()`
- Una cadena con un mensaje de error útil pasada a la función `Exception()`

```python
# sentencia raise: lanzar manualmente una excepción con un mensaje personalizado
raise Exception('Este es el mensaje de error.')
```

```output
Traceback (most recent call last):
  File "<pyshell#191>", line 1, in <module>
    raise Exception('This is the error message.')
Exception: This is the error message.
```

Normalmente, es el código que llama a la función, no la función en sí, el que sabe cómo manejar una excepción. Por lo tanto, verá comúnmente una sentencia `raise` dentro de una función y las sentencias `try` y `except` en el código que llama a la función.

```python
# Lanzar excepciones en la función, manejarlas en el código que llama
def box_print(symbol, width, height):
    if len(symbol) != 1:
      raise Exception('El símbolo debe ser una cadena de un solo carácter.')
    if width <= 2:
      raise Exception('El ancho debe ser mayor que 2.')
    if height <= 2:
      raise Exception('La altura debe ser mayor que 2.')
    print(symbol * width)
    for i in range(height - 2):
        print(symbol + (' ' * (width - 2)) + symbol)
    print(symbol * width)

# Manejar excepciones al llamar a la función
for sym, w, h in (('*', 4, 4), ('O', 20, 5), ('x', 1, 3), ('ZZ', 3, 3)):
    try:
        box_print(sym, w, h)
    except Exception as err:  # Capturar excepción e imprimir mensaje de error
        print('Ha ocurrido una excepción: ' + str(err))
```

```output
****
*  *
*  *
****
OOOOOOOOOOOOOOOOOOOO
O                  O
O                  O
O                  O
OOOOOOOOOOOOOOOOOOOO
Ha ocurrido una excepción: El ancho debe ser mayor que 2.
Ha ocurrido una excepción: El símbolo debe ser una cadena de un solo carácter.
```

Lea más sobre [Manejo de Excepciones](/cheatsheet/exception-handling).

## Obtener el Traceback como una cadena

El `traceback` (rastreo de pila) es mostrado por Python siempre que una excepción lanzada no es manejada. Pero también se puede obtener como una cadena llamando a `traceback.format_exc()`. Esta función es útil si desea la información del traceback de una excepción pero también desea que una sentencia `except` maneje la excepción con elegancia. Deberá importar el módulo `traceback` de Python antes de llamar a esta función.

```python
# traceback.format_exc(): obtener el traceback como cadena para registro/depuración
import traceback

try:
    raise Exception('Este es el mensaje de error.')
except:
    with open('errorInfo.txt', 'w') as error_file:
        error_file.write(traceback.format_exc())  # Escribir traceback en el archivo
    print('La información del traceback se escribió en errorInfo.txt.')
```

```output
116
La información del traceback se escribió en errorInfo.txt.
```

El 116 es el valor de retorno del método `write()`, ya que se escribieron 116 caracteres en el archivo. El texto del `traceback` se escribió en errorInfo.txt.

    Traceback (most recent call last):
      File "<pyshell#28>", line 2, in <module>
    Exception: This is the error message.

## Afirmaciones (Assertions)

Una afirmación es una comprobación de cordura para asegurarse de que su código no está haciendo algo obviamente incorrecto. Estas comprobaciones de cordura se realizan mediante sentencias `assert`. Si la comprobación de cordura falla, se lanza una excepción `AssertionError`. En el código, una sentencia `assert` consta de lo siguiente:

- La palabra clave `assert`
- Una condición (es decir, una expresión que se evalúa como `True` o `False`)
- Una coma
- Una `string` para mostrar cuando la condición es `False`

```python
# sentencia assert: verificar condición, lanzar AssertionError si es False
pod_bay_door_status = 'open'
assert pod_bay_door_status == 'open', 'Las puertas de la bahía de pods deben estar "open".'  # Pasa

pod_bay_door_status = 'Lo siento, Dave. Me temo que no puedo hacer eso.'
assert pod_bay_door_status == 'open', 'Las puertas de la bahía de pods deben estar "open".'  # Lanza AssertionError
```

```output
Traceback (most recent call last):
  File "<pyshell#10>", line 1, in <module>
    assert pod_bay_door_status == 'open', 'The pod bay doors need to be "open".'
AssertionError: Las puertas de la bahía de pods deben estar "open".
```

En lenguaje sencillo, una sentencia `assert` dice: "Afirmo que esta condición es verdadera, y si no lo es, hay un error en alguna parte del programa". A diferencia de las excepciones, su código no debe manejar las sentencias `assert` con `try` y `except`; si una `assert` falla, su programa debería fallar. Al fallar rápidamente de esta manera, acorta el tiempo entre la causa original del error y la primera vez que nota el error. Esto reducirá la cantidad de código que tendrá que revisar antes de encontrar el código que está causando el error.

### Deshabilitar Afirmaciones

Las afirmaciones se pueden deshabilitar pasando la opción `-O` al ejecutar Python.

## Registro (Logging)

Para habilitar el módulo `logging` para mostrar mensajes de registro en su pantalla mientras se ejecuta su programa, copie lo siguiente al principio de su programa:

```python
import logging
logging.basicConfig(level=logging.DEBUG, format=' %(asctime)s - %(levelname)s- %(message)s')
```

Suponga que escribió una función para calcular el factorial de un número. En matemáticas, el factorial de 4 es 1 × 2 × 3 × 4, o 24. El factorial de 7 es 1 × 2 × 3 × 4 × 5 × 6 × 7, o 5,040. Abra una nueva ventana del editor de archivos e ingrese el siguiente código. Tiene un error, pero también ingresará varias sentencias de registro para ayudarse a descubrir qué está saliendo mal. Guarde el programa como factorialLog.py.

```python
import logging
logging.basicConfig(level=logging.DEBUG, format=' %(asctime)s - %(levelname)s- %(message)s')
logging.debug('Inicio del programa')

def factorial(n):
    logging.debug('Inicio de factorial(%s)' % (n))
    total = 1
    for i in range(1, n + 1):
        total *= i
        logging.debug('i es ' + str(i) + ', total es ' + str(total))
    logging.debug('Fin de factorial(%s)' % (n))
    return total

print(factorial(5))
logging.debug('Fin del programa')
```

```output
2015-05-23 16:20:12,664 - DEBUG - Inicio del programa
2015-05-23 16:20:12,664 - DEBUG - Inicio de factorial(5)
2015-05-23 16:20:12,665 - DEBUG - i es 0, total es 0
2015-05-23 16:20:12,668 - DEBUG - i es 1, total es 0
2015-05-23 16:20:12,670 - DEBUG - i es 2, total es 0
2015-05-23 16:20:12,673 - DEBUG - i es 3, total es 0
2015-05-23 16:20:12,675 - DEBUG - i es 4, total es 0
2015-05-23 16:20:12,678 - DEBUG - i es 5, total es 0
2015-05-23 16:20:12,680 - DEBUG - Fin de factorial(5)
0
2015-05-23 16:20:12,684 - DEBUG - Fin del programa
```

## Niveles de Registro (Logging Levels)

Los niveles de registro proporcionan una forma de categorizar sus mensajes de registro por importancia. Hay cinco niveles de registro, descritos en la Tabla 10-1 de menor a mayor importancia. Los mensajes se pueden registrar en cada nivel utilizando una función de registro diferente.

| Nivel      | Función de Registro  | Descripción                                                                                                                                        |
| ---------- | -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `DEBUG`    | `logging.debug()`    | El nivel más bajo. Se utiliza para pequeños detalles. Normalmente, solo le interesan estos mensajes al diagnosticar problemas.                     |
| `INFO`     | `logging.info()`     | Se utiliza para registrar información sobre eventos generales en su programa o confirmar que las cosas funcionan en su punto del programa.         |
| `WARNING`  | `logging.warning()`  | Se utiliza para indicar un problema potencial que no impide que el programa funcione, pero podría hacerlo en el futuro.                            |
| `ERROR`    | `logging.error()`    | Se utiliza para registrar un error que hizo que el programa no pudiera hacer algo.                                                                 |
| `CRITICAL` | `logging.critical()` | El nivel más alto. Se utiliza para indicar un error fatal que ha causado o está a punto de causar que el programa deje de ejecutarse por completo. |

## Deshabilitar el Registro

Después de depurar su programa, probablemente no querrá que todos estos mensajes de registro saturen la pantalla. La función `logging.disable()` los deshabilita para que no tenga que entrar en su programa y eliminar todas las llamadas de registro manualmente.

```python
import logging

logging.basicConfig(level=logging.INFO, format=' %(asctime)s -%(levelname)s - %(message)s')
logging.critical('¡Error crítico! ¡Error crítico!')
```

```output
2015-05-22 11:10:48,054 - CRITICAL - ¡Error crítico! ¡Error crítico!
```

```python
logging.disable(logging.CRITICAL)
logging.critical('¡Error crítico! ¡Error crítico!')
logging.error('¡Error! ¡Error!')
```

## Registro en un Archivo

En lugar de mostrar los mensajes de registro en la pantalla, puede escribirlos en un archivo de texto. La función `logging.basicConfig()` acepta un argumento de palabra clave `filename`, así:

```python
import logging
logging.basicConfig(filename='myProgramLog.txt', level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')
```

## Enlaces relevantes

- <router-link to="/cheatsheet/exception-handling">Manejo de Excepciones</router-link>
- <router-link to="/builtin/breakpoint">breakpoint()</router-link>
