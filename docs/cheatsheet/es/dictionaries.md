---
title: 'Diccionarios Python - Hoja de Trucos de Python'
description: 'En Python, un diccionario es una colección ordenada por inserción (desde Python > 3.7) de pares clave-valor.'
labUrl: 'https://labex.io/es/labs/python-python-dictionaries-633655?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Diccionarios de Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

En Python, un diccionario es una colección _ordenada_ (a partir de Python > 3.7) de pares de `clave`: `valor`.

<base-disclaimer>
  <base-disclaimer-title>
    De la <a target="_blank" href="https://docs.python.org/3/tutorial/datastructures.html#dictionaries">documentación</a> de Python 3
  </base-disclaimer-title>
  <base-disclaimer-content>
    Las operaciones principales en un diccionario son almacenar un valor con alguna clave y extraer el valor dada la clave. También es posible eliminar un par clave:valor con <code>del</code>.
  </base-disclaimer-content>
</base-disclaimer>

Ejemplo de Diccionario:

```python
# Diccionario: colección de pares clave-valor
mi_gato = {
    'size': 'fat',          # clave: 'size', valor: 'fat'
    'color': 'gray',         # clave: 'color', valor: 'gray'
    'disposition': 'loud'    # clave: 'disposition', valor: 'loud'
}
```

## Establecer clave, valor usando el operador de subíndice `[]`

```python
# Añadir o actualizar entrada de diccionario usando el operador de subíndice
mi_gato = {
 'size': 'fat',
 'color': 'gray',
 'disposition': 'loud',
}
mi_gato['age_years'] = 2  # Añadir nuevo par clave-valor
print(mi_gato)
```

Salida:

```plaintext
{'size': 'fat', 'color': 'gray', 'disposition': 'loud', 'age_years': 2}
```

## Obtener valor usando el operador de subíndice `[]`

En caso de que la clave no esté presente en el diccionario, se genera un <a target="_blank" href="https://docs.python.org/3/library/exceptions.html#KeyError">`KeyError`</a>.

```python
mi_gato = {
 'size': 'fat',
 'color': 'gray',
 'disposition': 'loud',
}
print(mi_gato['size'])
```

Salida:

```plaintext
fat
```

```python
print(mi_gato['eye_color'])
```

Salida:

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
KeyError: 'eye_color'
```

## values()

El método `values()` obtiene los **valores** del diccionario:

```python
# Iterar sobre los valores del diccionario usando el método .values()
mascota = {'color': 'red', 'age': 42}
for value in mascota.values():  # Bucle a través de todos los valores
    print(value)
```

Salida:

```plaintext
red
42
```

## keys()

El método `keys()` obtiene las **claves** del diccionario:

```python
# Iterar sobre las claves del diccionario usando el método .keys()
mascota = {'color': 'red', 'age': 42}
for key in mascota.keys():  # Bucle a través de todas las claves
    print(key)
```

Salida:

```plaintext
color
age
```

No hay necesidad de usar **.keys()** ya que por defecto se iterará sobre las claves:

```python
# Iterar directamente sobre el diccionario itera sobre las claves (comportamiento por defecto)
mascota = {'color': 'red', 'age': 42}
for key in mascota:  # Equivalente a for key in mascota.keys()
    print(key)
```

Salida:

```plaintext
color
age
```

## items()

El método `items()` obtiene los **elementos** de un diccionario y los devuelve como una <router-link to=/cheatsheet/lists-and-tuples#the-tuple-data-type>Tupla</router-link>:

```python
mascota = {'color': 'red', 'age': 42}
for item in mascota.items():
    print(item)
```

Salida:

```plaintext
('color', 'red')
('age', 42)
```

Usando los métodos `keys()`, `values()` e `items()`, un bucle for puede iterar sobre las claves, los valores o los pares clave-valor en un diccionario, respectivamente.

```python
# Iterar sobre pares clave-valor usando el método .items()
mascota = {'color': 'red', 'age': 42}
for key, value in mascota.items():  # Desempaquetar tupla en clave y valor
    print(f'Key: {key} Value: {value}')
```

Salida:

```plaintext
Key: color Value: red
Key: age Value: 42
```

## get()

El método `get()` devuelve el valor de un elemento con la clave dada. Si la clave no existe, devuelve `None`:

```python
# Método .get(): recuperar valor de forma segura, devuelve None si la clave no existe
esposa = {'name': 'Rose', 'age': 33}

f'My wife name is {esposa.get("name")}'  # Devuelve 'Rose'
```

Salida:

```plaintext
'My wife name is Rose'
```

```python
f'She is {esposa.get("age")} years old.'
```

Salida:

```plaintext
'She is 33 years old.'
```

```python
f'She is deeply in love with {esposa.get("husband")}'
```

Salida:

```plaintext
'She is deeply in love with None'
```

También puedes cambiar el valor predeterminado `None` por uno de tu elección:

```python
esposa = {'name': 'Rose', 'age': 33}

f'She is deeply in love with {esposa.get("husband", "lover")}'
```

Salida:

```plaintext
'She is deeply in love with lover'
```

## Añadir elementos con setdefault()

Es posible añadir un elemento a un diccionario de esta manera:

```python
esposa = {'name': 'Rose', 'age': 33}
if 'has_hair' not in esposa:
    esposa['has_hair'] = True
```

Usando el método `setdefault`, podemos hacer el mismo código más corto:

```python
esposa = {'name': 'Rose', 'age': 33}
esposa.setdefault('has_hair', True)
esposa
```

Salida:

```plaintext
{'name': 'Rose', 'age': 33, 'has_hair': True}
```

## Eliminar Elementos

### pop()

El método `pop()` elimina y devuelve un elemento basado en una clave dada.

```python
esposa = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
esposa.pop('age')
```

Salida:

```plaintext
33
```

```python
esposa
```

Salida:

```plaintext
{'name': 'Rose', 'hair': 'brown'}
```

### popitem()

El método `popitem()` elimina el último elemento en un diccionario y lo devuelve.

```python
esposa = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
esposa.popitem()
```

Salida:

```plaintext
('hair', 'brown')
```

```python
esposa
```

Salida:

```plaintext
{'name': 'Rose', 'age': 33}
```

### del()

El método `del()` elimina un elemento basado en una clave dada.

```python
esposa = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
del esposa['age']
esposa
```

Salida:

```plaintext
{'name': 'Rose', 'hair': 'brown'}
```

### clear()

El método `clear()` elimina todos los elementos de un diccionario.

```python
esposa = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
esposa.clear()
esposa
```

Salida:

```plaintext
{}
```

## Comprobar claves en un Diccionario

```python
persona = {'name': 'Rose', 'age': 33}

'name' in persona.keys()
```

Salida:

```plaintext
True
```

```python
'height' in persona.keys()
```

Salida:

```plaintext
False
```

```python
'skin' in persona # Puedes omitir keys()
```

Salida:

```plaintext
False
```

## Comprobar valores en un Diccionario

```python
persona = {'name': 'Rose', 'age': 33}

'Rose' in persona.values()
```

Salida:

```plaintext
True
```

```python
33 in persona.values()
```

Salida:

```plaintext
True
```

## Impresión Bonita (Pretty Printing)

```python
import pprint

esposa = {'name': 'Rose', 'age': 33, 'has_hair': True, 'hair_color': 'brown', 'height': 1.6, 'eye_color': 'brown'}
pprint.pprint(esposa)
```

Salida:

```plaintext
{'age': 33,
 'eye_color': 'brown',
 'hair_color': 'brown',
 'has_hair': True,
 'height': 1.6,
 'name': 'Rose'}
```

## Fusionar dos diccionarios

Para Python 3.5+:

```python
dict_a = {'a': 1, 'b': 2}
dict_b = {'b': 3, 'c': 4}
dict_c = {**dict_a, **dict_b}
dict_c
```

Salida:

```plaintext
{'a': 1, 'b': 3, 'c': 4}
```

## Enlaces relevantes

- <router-link to="/blog/python-data-types">Publicación de Blog Tipos de Datos de Python</router-link>
- <router-link to="/blog/python-easy-args-kwargs">Python \*args y \*\*kwargs Hechos Fáciles</router-link>
- <router-link to="/cheatsheet/comprehensions">Comprensiones</router-link>
- <router-link to="/cheatsheet/args-and-kwargs">Args y Kwargs</router-link>
- <router-link to="/blog/python-comprehensions-step-by-step">Comprensiones de Python Paso a Paso</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/len">len()</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
