---
title: 'Manejo de Excepciones en Python - Hoja de Trucos'
description: 'En Python, el manejo de excepciones es el proceso de responder a la ocurrencia de excepciones.'
labUrl: 'https://labex.io/es/labs/python-python-exception-handling-633656?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Manejo de Excepciones en Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://en.wikipedia.org/wiki/Exception_handling">Manejo de excepciones</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    En la computación y la programación de computadoras, el manejo de excepciones es el proceso de responder a la ocurrencia de excepciones, condiciones anómalas o excepcionales que requieren un procesamiento especial.
  </base-disclaimer-content>
</base-disclaimer>

Python tiene muchas [built-in exceptions](https://docs.python.org/3/library/exceptions.html) que se generan cuando un programa encuentra un error, y la mayoría de las bibliotecas externas, como la popular [Requests](https://requests.readthedocs.io/en/latest), incluyen sus propias [custom exceptions](https://requests.readthedocs.io/en/latest/user/quickstart/#errors-and-exceptions) con las que tendremos que lidiar.

## Manejo básico de excepciones

No se puede dividir por cero, eso es una verdad matemática, y si intentas hacerlo en Python, el intérprete generará la excepción incorporada [ZeroDivisionError](https://docs.python.org/3/library/exceptions.html#ZeroDivisionError):

```python
def divide(dividend , divisor):
    print(dividend / divisor)

divide(dividend=10, divisor=5)
```

Salida:

```plaintext
2
```

```python
divide(dividend=10, divisor=0)
```

Salida:

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ZeroDivisionError: division by zero
```

Supongamos que no queremos que nuestro programa detenga su ejecución o muestre al usuario una salida que no entenderá. Digamos que queremos imprimir un mensaje útil y claro, entonces necesitamos **_manejar_** la excepción con las palabras clave `try` y `except`:

```python
# try-except: manejar excepciones con elegancia
def divide(dividend , divisor):
    try:  # Intenta ejecutar este código
        print(dividend / divisor)
    except ZeroDivisionError:  # Captura el tipo de excepción específico
        print('No se puede dividir por 0')

divide(dividend=10, divisor=5)
```

Salida:

```plaintext
2
```

```python
divide(dividend=10, divisor=0)
```

Salida:

```plaintext
No se puede dividir por 0
```

## Manejo de múltiples excepciones usando un bloque de excepción

También puedes manejar múltiples excepciones en una sola línea como la siguiente sin necesidad de crear múltiples bloques de excepción.

```python
# Manejar múltiples excepciones en un bloque except
def divide(dividend , divisor):
    try:
        if (dividend == 10):
          var = 'str' + 1  # Esto generará TypeError
        else:
          print(dividend / divisor)
    except (ZeroDivisionError, TypeError) as error:  # Captura múltiples tipos de excepción
        print(error)  # Imprime el mensaje de error

divide(dividend=20, divisor=5)
```

Salida:

```plaintext
4
```

```python
divide(dividend=10, divisor=5)
```

Salida:

```plaintext
can only concatenate str (not "int") to str
```

```python
divide(dividend=10, divisor=0)
```

Salida:

```plaintext
division by zero
```

## Código Finally en el manejo de excepciones

El código dentro de la sección `finally` siempre se ejecuta, sin importar si se ha generado una excepción o no:

```python
# Bloque finally: siempre se ejecuta independientemente de las excepciones
def divide(dividend , divisor):
    try:
        print(dividend / divisor)
    except ZeroDivisionError:
        print('No se puede dividir por 0')
    finally:  # Siempre se ejecuta, incluso si ocurre una excepción
        print('Ejecución finalizada')

divide(dividend=10, divisor=5)
```

Salida:

```plaintext
2.0
Ejecución finalizada
```

```python
divide(dividend=10, divisor=0)
```

Salida:

```plaintext
No se puede dividir por 0
Ejecución finalizada
```

## Excepciones Personalizadas

Las excepciones personalizadas se inicializan creando una `class` que hereda de la clase base `Exception` de Python, y se generan usando la palabra clave `raise`:

```python
# Excepción personalizada: creada heredando de la clase Exception
class MyCustomException(Exception):
    pass

raise MyCustomException  # Genera la excepción personalizada
```

Salida:

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
__main__.MyCustomException
```

Para declarar un mensaje de excepción personalizado, puedes pasarlo como parámetro:

```python
class MyCustomException(Exception):
    pass

raise MyCustomException('Un mensaje personalizado para mi excepción personalizada')
```

Salida:

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
__main__.MyCustomException: Un mensaje personalizado para mi excepción personalizada
```

Manejar una excepción personalizada es igual que cualquier otra:

```python
try:
    raise MyCustomException('Un mensaje personalizado para mi excepción personalizada')
except MyCustomException:
    print('Mi excepción personalizada fue generada')
```

Salida:

```plaintext
Mi excepción personalizada fue generada
```

## Enlaces relevantes

- <router-link to="/cheatsheet/control-flow">Control Flow</router-link>
- <router-link to="/builtin/breakpoint">breakpoint()</router-link>
- <router-link to="/builtin/isinstance">isinstance()</router-link>
- <router-link to="/builtin/issubclass">issubclass()</router-link>
