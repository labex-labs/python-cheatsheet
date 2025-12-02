---
title: 'Módulo Subprocess de Python - Hoja de Trucos de Python'
description: 'El módulo subprocess permite iniciar y gestionar procesos del sistema.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Subprocess de Python
</base-title>

[Subprocess](https://docs.python.org/3/library/subprocess.html) es un módulo incorporado que nos permite generar nuevos procesos del sistema, conectarnos a sus flujos de entrada/salida/error y obtener sus códigos de retorno.

```python
import subprocess
```

## Ejecutar un Comando del Sistema

La función `run` se utiliza para ejecutar un comando del sistema.

```python
subprocess.run(['echo', 'Hello World!'])
```

```output
Hello World!
```

Si desea ejecutar un comando como una sola cadena en lugar de una lista, use:

```python
subprocess.run('echo Hello World!', shell=True)
```

```output
Hello World!
```

Ambos imprimirán automáticamente la salida en la terminal.

<base-warning>
  <base-warning-title>
    ADVERTENCIA
  </base-warning-title>
  <base-warning-content>
    Evite `shell=True` con entradas no confiables (riesgo de inyección de shell).
  </base-warning-content>
</base-warning>

## Capturar la Salida

Para capturar la salida, establezca `capture_output` en `True`:

```python
result = subprocess.run(
  ['echo', 'Hello World!'],
  capture_output=True,
  text=True
)

output = result.stdout
error = result.stderr
returncode = result.returncode
```

```output
output = "Hello World!\n"
error = ""
returncode = 0
```

Aquí, `text=True` le indica a la función que lea la salida como texto en lugar de bytes.

Un `returncode` de 0 indica éxito; cualquier valor distinto de cero indica un error.

## Comprobar Errores

Si bien podemos verificar el éxito usando el código de retorno, hay una forma más "pythónica" de hacerlo:

```python
try:
  result = subprocess.run(
    ['ls', 'my_dir'],
    check=True,
  )
  print('Finished without errors.')
except subprocess.CalledProcessError:
  print('Error: Directory does not exist.')
```

```output
Error: Directory does not exist.
```

Si `check` se establece en `True` y el código de retorno no es 0 (operación no exitosa), subprocess generará un `subprocess.CalledProcessError`, que se puede manejar de la manera habitual utilizando un bloque `except`.

## Ejecutar Comandos con Tiempo de Espera (Timeout)

Puede establecer un tiempo de espera para un proceso. Si tarda más que el tiempo especificado, se genera `subprocess.TimeoutExpired`:

```python
try:
    subprocess.run(['sleep', '10'], timeout=5)
except subprocess.TimeoutExpired:
    print('Process took too long!')
```

```output
Process took too long!
```

## Escribir Salida en un Archivo

Puede redirigir la salida a un archivo estableciendo `stdout` (y `stderr`, si es necesario) a un objeto de archivo:

```python
with open('output.txt', 'w') as f:
    subprocess.run(['ls', '-l'], stdout=f, stderr=f)
```

Aquí, tanto la salida normal como los errores aparecerán en el archivo, en el orden en que se generan.

**Nota:** `text=True` es útil cuando desea manipular la salida como una cadena en Python. No es estrictamente necesario cuando se redirige la salida directamente a un archivo.

## Enlaces Relevantes

- <router-link to="/cheatsheet/reading-and-writing-files">Cheatsheet: Lectura y Escritura de Archivos</router-link>
- <router-link to="/cheatsheet/file-directory-path">Cheatsheet: Ruta de Archivo y Directorio</router-link>
- <router-link to="/cheatsheet/exception-handling">Cheatsheet: Manejo de Excepciones</router-link>
- <router-link to="/modules/os-module">Módulo: os</router-link>
- <router-link to="/builtin/open">open()</router-link>
