---
title: 'Gestor de Contexto Python - Hoja de Trucos de Python'
description: 'Aunque los gestores de contexto de Python son muy utilizados, pocos comprenden su propósito. Estas sentencias, comunes en la lectura y escritura de archivos, ayudan a la aplicación a conservar memoria del sistema y mejoran la gestión de recursos asegurando que se utilicen solo para procesos específicos.'
labUrl: 'https://labex.io/es/labs/python-python-context-manager-633650?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Gestor de Contexto de Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Aunque los gestores de contexto de Python se usan ampliamente, pocos entienden el propósito detrás de su uso. Estas sentencias, comúnmente utilizadas con la lectura y escritura de archivos, ayudan a la aplicación a conservar la memoria del sistema y mejoran la gestión de recursos asegurando que recursos específicos solo se utilicen para ciertos procesos.

## La sentencia with

Un gestor de contexto es un objeto al que se notifica cuando un contexto (un bloque de código) comienza y termina. Comúnmente se utiliza uno con la sentencia `with`. Esta se encarga de la notificación.

Por ejemplo, los objetos de archivo son gestores de contexto. Cuando un contexto termina, el objeto de archivo se cierra automáticamente:

```python
# Gestor de contexto: maneja automáticamente la limpieza de recursos
# El archivo se cierra automáticamente al salir del bloque 'with'
with open(filename) as f:  # 'f' es el objeto de archivo
    file_contents = f.read()

# El archivo se cierra automáticamente aquí, incluso si ocurrió un error
```

Cualquier cosa que finalice la ejecución del bloque provoca que se llame al método de salida del gestor de contexto. Esto incluye excepciones, y puede ser útil cuando un error provoca que salga prematuramente de un archivo o conexión abierta. Salir de un script sin cerrar correctamente archivos/conexiones es una mala práctica, que puede causar pérdida de datos u otros problemas. Al usar un gestor de contexto, puede asegurarse de que siempre se tomen precauciones para prevenir daños o pérdidas de esta manera.

## Escribiendo su propio gestor de contexto

También es posible escribir un gestor de contexto usando sintaxis de generador gracias al decorador `contextlib.contextmanager`:

```python
# Gestor de contexto basado en función usando el decorador contextlib
import contextlib
@contextlib.contextmanager
def context_manager(num):
    print('Enter')  # El código antes de yield se ejecuta en __enter__
    yield num + 1   # El valor cedido se convierte en la variable 'cm'
    print('Exit')    # El código después de yield se ejecuta en __exit__

with context_manager(2) as cm:  # cm recibe el valor cedido (3)
    print('Right in the middle with cm = {}'.format(cm))
```

Salida:

```plaintext
Enter
Right in the middle with cm = 3
Exit
```

## Gestor de contexto basado en clases

Puede definir un gestor de contexto basado en clases. Los métodos clave son `__enter__` y `__exit__`

```python
# Gestor de contexto basado en clases: implementa los métodos __enter__ y __exit__
class ContextManager:
    def __enter__(self, *args, **kwargs):  # Se llama al entrar en el bloque 'with'
        print("--enter--")
        return self  # Puede devolver un objeto para usar como variable 'as'

    def __exit__(self, *args):  # Se llama al salir del bloque 'with'
        print("--exit--")

with ContextManager():  # Llama a __enter__, luego a __exit__ cuando termina
    print("test")
```

Salida:

```plaintext
--enter--
test
--exit--
```

## Enlaces relevantes

- <router-link to="/cheatsheet/reading-and-writing-files">Lectura y Escritura de Archivos</router-link>
- <router-link to="/cheatsheet/exception-handling">Manejo de Excepciones</router-link>
- <router-link to="/cheatsheet/decorators">Decoradores</router-link>
- <router-link to="/blog/python-pathlib-essentials">10 Operaciones Esenciales del Sistema de Archivos que Todo Desarrollador Debe Conocer</router-link>
- <router-link to="/builtin/open">open()</router-link>
