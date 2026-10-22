---
title: 'Gestor de Contexto Python - Hoja de Trucos de Python'
description: 'Aunque los gestores de contexto de Python son muy utilizados, pocos comprenden su propósito. Estas sentencias, comunes en la lectura y escritura de archivos, ayudan a la aplicación a conservar memoria del sistema y mejoran la gestión de recursos asegurando que se utilicen solo para procesos específicos.'
labUrl: 'https://labex.io/es/labs/python-python-context-manager-633650?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Administrador de Contexto de Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Aunque los administradores de contexto de Python se utilizan ampliamente, pocos comprenden el propósito detrás de su uso. Estas sentencias, comúnmente utilizadas con la lectura y escritura de archivos, ayudan a la aplicación a conservar la memoria del sistema y mejoran la gestión de recursos asegurando que ciertos recursos solo estén en uso para procesos específicos.

## La sentencia with

Un administrador de contexto es un objeto al que se le notifica cuándo comienza y termina un contexto (un bloque de código). Comúnmente se utiliza uno con la sentencia `with`. Este se encarga de la notificación.

Por ejemplo, los objetos de archivo son administradores de contexto. Cuando un contexto termina, el objeto de archivo se cierra automáticamente:

```python
# Administrador de contexto: maneja automáticamente la limpieza de recursos
# El archivo se cierra automáticamente al salir del bloque 'with'
with open(filename) as f:  # 'f' es el objeto de archivo
    file_contents = f.read()

# El archivo se cierra automáticamente aquí, incluso si ocurrió un error
```

<BaseQuiz id="cheatsheet-context-manager-1" correct="A">
<template #question>
¿Cuál es el principal beneficio de usar un administrador de contexto (la sentencia <code>with</code>)?
</template>

<BaseQuizOption value="A" correct>A. Maneja automáticamente la limpieza de recursos, incluso si ocurre un error</BaseQuizOption>
<BaseQuizOption value="B">B. Hace que el código se ejecute más rápido</BaseQuizOption>
<BaseQuizOption value="C">C. Permite abrir múltiples archivos simultáneamente</BaseQuizOption>
<BaseQuizOption value="D">D. Previene todos los errores</BaseQuizOption>
<BaseQuizAnswer>Los administradores de contexto aseguran que los recursos (como los archivos) se limpien adecuadamente al salir del bloque, incluso si ocurre una excepción. Esto previene fugas de recursos y pérdida de datos.</BaseQuizAnswer>
</BaseQuiz>

Cualquier cosa que finalice la ejecución del bloque provoca que se llame al método de salida del administrador de contexto. Esto incluye excepciones, y puede ser útil cuando un error provoca que salga prematuramente de un archivo o conexión abierta. Salir de un script sin cerrar correctamente los archivos/conexiones es una mala idea, lo que puede causar pérdida de datos u otros problemas. Al usar un administrador de contexto, puede asegurarse de que siempre se tomen precauciones para prevenir daños o pérdidas de esta manera.

## Escribir su propio administrador de contexto

También es posible escribir un administrador de contexto usando sintaxis de generador gracias al decorador `contextlib.contextmanager`:

```python
# Administrador de contexto basado en función usando el decorador contextlib
import contextlib
@contextlib.contextmanager
def context_manager(num):
    print('Enter')  # El código antes de yield se ejecuta en __enter__
    try:
        yield num + 1   # El valor cedido se convierte en la variable 'cm'
    finally:
        print('Exit')    # El código después de yield se ejecuta en __exit__

with context_manager(2) as cm:  # cm recibe el valor cedido (3)
    print('Right in the middle with cm = {}'.format(cm))
```

```output
Enter
Right in the middle with cm = 3
Exit
```

## Administrador de contexto basado en clases

Puede definir un administrador de contexto basado en clases. Los métodos clave son `__enter__` y `__exit__`

```python
# Administrador de contexto basado en clases: implementa los métodos __enter__ y __exit__
class ContextManager:
    def __enter__(self, *args, **kwargs):  # Se llama al entrar en el bloque 'with'
        print("--enter--")
        return self  # Puede devolver un objeto para usar como variable 'as'

    def __exit__(self, *args):  # Se llama al salir del bloque 'with'
        print("--exit--")

with ContextManager():  # Llama a __enter__, luego a __exit__ cuando termina
    print("test")
```

```output
--enter--
test
--exit--
```

<BaseQuiz id="cheatsheet-context-manager-2" correct="B">
<template #question>
¿Qué métodos debe implementar una clase para ser utilizada como administrador de contexto?
</template>

<BaseQuizOption value="A">A. <code>**init**</code> y <code>**del**</code></BaseQuizOption>
<BaseQuizOption value="B" correct>B. <code>**enter**</code> y <code>**exit**</code></BaseQuizOption>
<BaseQuizOption value="C">C. <code>open</code> y <code>close</code></BaseQuizOption>
<BaseQuizOption value="D">D. <code>start</code> y <code>stop</code></BaseQuizOption>
<BaseQuizAnswer>Un administrador de contexto basado en clases debe implementar <code>**enter**</code> (llamado al entrar en el bloque <code>with</code>) y <code>**exit**</code> (llamado al salir del bloque).</BaseQuizAnswer>
</BaseQuiz>

## Enlaces relevantes

- <router-link to="/cheatsheet/reading-and-writing-files">Lectura y Escritura de Archivos</router-link>
- <router-link to="/cheatsheet/exception-handling">Manejo de Excepciones</router-link>
- <router-link to="/cheatsheet/decorators">Decoradores</router-link>
- <router-link to="/blog/python-pathlib-essentials">10 Operaciones Esenciales del Sistema de Archivos que Todo Desarrollador Debe Conocer</router-link>
- <router-link to="/builtin/open">open()</router-link>
