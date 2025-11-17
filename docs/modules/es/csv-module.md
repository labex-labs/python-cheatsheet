---
title: 'Módulo CSV de Python - Hoja de Trucos de Python'
description: 'Python incluye el módulo csv, que facilita el trabajo con archivos CSV.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Python CSV
</base-title>

El módulo `csv` proporciona herramientas para leer y escribir en archivos CSV, que se utilizan comúnmente para el intercambio de datos.

<base-disclaimer>
  <base-disclaimer-title>
    Módulo csv frente a Lectura-Escritura Manual de Archivos
  </base-disclaimer-title>
  <base-disclaimer-content>
    Aunque puedes leer y escribir archivos CSV utilizando operaciones básicas de archivos y métodos de cadena (como <code>open()</code> con <code>read</code> o <code>write</code> y <code>split()</code>), el módulo <code>csv</code> está diseñado para manejar casos extremos como campos entre comillas, delimitadores incrustados y diferentes terminaciones de línea. Asegura la compatibilidad con archivos CSV generados por otros programas (como Excel) y reduce el riesgo de errores de análisis. Para la mayoría de las tareas CSV, prefiere el módulo <code>csv</code> sobre el análisis manual.
    <br>
    Para obtener más información sobre los conceptos básicos del manejo de archivos, consulta la página de <router-link to="/cheatsheet/file-directory-path">Rutas de Archivos y Directorios</router-link>.
  </base-disclaimer-content>
</base-disclaimer>

Para empezar, importa el módulo:

```python
import csv
```

## csv.reader()

Esta función recibe un archivo que debe ser un [iterable de cadenas](https://docs.python.org/3/library/csv.html#id4:~:text=A%20csvfile%20must%20be%20an%20iterable%20of%20strings%2C%20each%20in%20the%20reader%E2%80%99s%20defined%20csv%20format). En otras palabras, debe ser el archivo abierto como se muestra a continuación:

```python
import csv

file_path = 'file.csv'

# Leer archivo CSV
with open(file_path, 'r', newline='') as csvfile:
  reader = csv.reader(csvfile)

  # Iterar sobre cada línea
  for line in reader:
    print(line)
```

Esta función devuelve un objeto lector que se puede iterar fácilmente para obtener cada fila. Cada columna en las filas correspondientes se puede acceder mediante el índice, sin necesidad de utilizar la función incorporada [`split()`](https://www.pythoncheatsheet.org/cheatsheet/manipulating-strings#split).

## csv.writer()

Esta función recibe el archivo que se va a escribir como un archivo csv, similar a la función lector, se debe invocar de esta manera:

```python
import csv

file_path = 'file.csv'

# Abrir archivo para escribir CSV
with open(file_path, 'w', newline='') as csvfile:
  writer = csv.writer(csvfile)

  # hacer algo
```

El bloque "hacer algo" podría reemplazarse con el uso de las siguientes funciones:

### writer.writerow()

Escribe una sola fila en el archivo CSV.

```python
# Escribir fila de encabezado
writer.writerow(['name', 'age', 'city'])
# Escribir fila de datos
writer.writerow(['Alice', 30, 'London'])
```

### writer.writerows()

Escribe múltiples filas a la vez.

```python
# Preparar múltiples filas
rows = [
    ['name', 'age', 'city'],
    ['Bob', 25, 'Paris'],
    ['Carol', 28, 'Berlin']
]
# Escribir todas las filas a la vez
writer.writerows(rows)
```

## csv.DictReader

Permite leer archivos CSV y acceder a cada fila como un diccionario, utilizando la primera fila del archivo como las claves (encabezados de columna) por defecto.

```python
import csv

# Leer CSV como diccionario (la primera fila se convierte en claves)
with open('people.csv', 'r', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    # Acceder a las columnas por nombre en lugar de por índice
    for row in reader:
        print(row['name'], row['age'])
```

- Cada `row` es un `OrderedDict` (o un `dict` regular en Python 3.8+).
- Si tu CSV no tiene encabezados, puedes proporcionarlos con el parámetro `fieldnames`:

  ```python
  reader = csv.DictReader(csvfile, fieldnames=['name', 'age', 'city'])
  ```

## csv.DictWriter

Te permite escribir diccionarios como filas en un archivo CSV. Debes especificar los nombres de los campos (`fieldnames`, encabezados de columna) al crear el escritor.

```python
import csv

fieldnames = ['name', 'age', 'city']
rows = [
    {'name': 'Alice', 'age': 30, 'city': 'London'},
    {'name': 'Bob', 'age': 25, 'city': 'Paris'}
]

# Escribir diccionarios a CSV
with open('people_dict.csv', 'w', newline='') as csvfile:
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()  # escribe la fila de encabezado
    writer.writerows(rows)
```

- Usa `writer.writeheader()` para escribir los encabezados de columna como la primera fila.
- Cada diccionario en `writer.writerows()` debe tener claves que coincidan con los `fieldnames` especificados al crear el escritor.

## Parámetros adicionales para csv.reader() y csv.writer()

### delimiter

Debe ser el carácter utilizado para separar los campos. Como indica el tipo de archivo, el valor predeterminado es la coma ','. Dependiendo de la configuración regional, Excel podría generar archivos csv con el punto y coma como delimitador.

```python
import csv

# Leer CSV con delimitador de punto y coma
with open('data_semicolon.csv', newline='') as csvfile:
    reader = csv.reader(csvfile, delimiter=';')
    for row in reader:
        print(row)
```

### lineterminator

Carácter o secuencia de caracteres para finalizar una línea. El más común es "\r\n" pero podría ser "\n".

### quotechar

Carácter utilizado para poner entre comillas los campos que contienen caracteres especiales (el valor predeterminado es `"`).

```python
# Usar comilla simple como carácter de comilla
reader = csv.reader(csvfile, quotechar="'")
```

Para más detalles, consulta la <a href="https://docs.python.org/3/library/csv.html" target="_blank" rel="noopener">documentación oficial del módulo csv de Python</a>.
