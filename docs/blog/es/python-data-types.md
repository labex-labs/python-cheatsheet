---
title: 'Tipos de Datos en Python Explicados - Guía Visual para Principiantes'
description: 'Esta guía ofrece una visión completa de los tipos de datos integrados de Python, sus características y casos de uso.'
date: 'Jul 20, 2025'
updated: 'Jul 20, 2025'
tags: 'python, beginner, data types'
socialImage: '/blog/python-data-types.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Tipos de Datos en Python Explicados - Guía Visual para Principiantes"
    description: "Esta guía ofrece una visión completa de los tipos de datos integrados de Python, sus características y casos de uso."
    date: "Jul 20, 2025"
    updated: "Jul 20, 2025"
    tags: "python, beginner, data types"
    socialImage: "/blog/python-data-types.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="Tipos de Datos en Python Explicados - Guía Visual para Principiantes" />

Python viene con nueve tipos de datos principales que cubren casi todo lo que necesitarás. Elegir el correcto hace que tu código sea más claro, rápido y seguro. Esta guía muestra cómo funciona cada tipo, cuándo usarlo y qué tener en cuenta. Para una visión general rápida, también consulta nuestra <router-link to="/cheatsheet/basics#data-types">guía de conceptos básicos</router-link>.

Diagrama de las categorías de tipos de datos integrados de Python y la mutabilidad.

## 1. Números – `int`, `float`, `complex`

Python tiene tres tipos para trabajar con números, cada uno diseñado para diferentes situaciones.

### Primeros ejemplos básicos

```python
# Enteros - números enteros
age = 25
score = 100
negative = -10

# Flotantes - números con decimales
price = 19.99
temperature = 98.6
pi = 3.14159

# Complejos - números con partes reales e imaginarias (matemáticas avanzadas)
z = 2 + 3j  # j representa la unidad imaginaria en Python
```

| Tipo                                                       | Literal típico         | Rasgos clave                                                                                                                         | Cuándo usar                                                 | Métodos/operaciones útiles                 |
| :--------------------------------------------------------- | :--------------------- | :----------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------- | :----------------------------------------- |
| <router-link to='/builtin/int'>`int`</router-link>         | `42`, `0xFF`           | Números enteros que pueden ser tan grandes como permita tu memoria; admite literales binarios `0b`, octales `0o`, hexadecimales `0x` | Contar, indexar, almacenar cantidades enteras               | `bit_length()`, `to_bytes()`               |
| <router-link to='/builtin/float'>`float`</router-link>     | `3.14`, `1.2e3`        | Números con punto decimal; pueden tener pequeños errores de redondeo en los cálculos                                                 | Mediciones, promedios, cálculos científicos                 | `.is_integer()`, `.hex()`, módulo math     |
| <router-link to='/builtin/complex'>`complex`</router-link> | `2+3j`, `complex(a,b)` | Números con partes reales e imaginarias (utilizados en matemáticas avanzadas); `.real`, `.imag`, `.conjugate()`                      | Matemáticas avanzadas, ingeniería, procesamiento de señales | Toda la aritmética, `abs()` da la magnitud |

### Más ejemplos

```python
# Trabajando con enteros
items = 5
total_items = items * 3  # 15

# Trabajando con flotantes
radius = 2.5
area = 3.14159 * radius * radius  # 19.634...

# Cuidado con la precisión de los flotantes
result = 0.1 + 0.2  # 0.30000000000000004 (¡no exactamente 0.3!)

# Números complejos (probablemente no los necesites como principiante)
z = complex(2, 3)     # Igual que 2+3j
magnitude = abs(z)    # 3.605...
```

## 2. Cadenas de texto – `str`

Las cadenas de texto (strings) contienen texto y son uno de los tipos más importantes que usarás. Para operaciones de cadena más detalladas, consulta nuestra <router-link to="/cheatsheet/manipulating-strings">guía de manipulación de cadenas</router-link>.

### Ejemplos básicos

```python
# Creación de cadenas
name = "Alice"
message = 'Hello world'
long_text = """Esto es una
cadena de varias líneas"""

# Operaciones básicas
greeting = "Hello, " + name  # "Hello, Alice"
repeated = "Ha" * 3          # "HaHaHa"
length = len(message)        # 11
```

**Características clave:**

- Inmutables: una vez creadas, no se pueden cambiar (pero se pueden crear nuevas)
- Usa comillas simples `'` o dobles `"`
- Comillas triples `"""` para texto de varias líneas
- Soporte para Unicode (emojis, caracteres internacionales)

### Operaciones comunes de cadenas

```python
text = "  Python Programming  "

# Métodos útiles
clean_text = text.strip()           # "Python Programming"
words = clean_text.split()          # ["Python", "Programming"]
joined = "-".join(words)            # "Python-Programming"
upper_text = clean_text.upper()     # "PYTHON PROGRAMMING"
replaced = clean_text.replace("Python", "Java")  # "Java Programming"

# Comprobación de contenido
starts_with_p = clean_text.startswith("Python")  # True
has_gram = "gram" in clean_text                   # True

# Formato moderno (recomendado)
age = 25
formatted = f"I am {age} years old"  # "I am 25 years old"
```

## 3. Booleanos – `bool`

Los booleanos representan los valores Verdadero (`True`) o Falso (`False`), esenciales para tomar decisiones en tu código. Obtén más información sobre la <router-link to="/builtin/bool">función bool()</router-link>.

### Ejemplos básicos

```python
# Valores booleanos simples
is_student = True
is_graduated = False

# Operaciones booleanas
has_degree = is_student or is_graduated  # True
ready_to_work = is_graduated and not is_student  # False
```

**Veracidad (Truthiness)**: Python trata muchos valores como Verdadero o Falso en las condiciones:

```python
# Estos son "truthy" (actúan como True)
if "hello":     # cadenas no vacías
if [1, 2, 3]:   # listas no vacías
if 42:          # números distintos de cero

# Estos son "falsy" (actúan como False)
if "":          # cadena vacía
if []:          # lista vacía
if 0:           # cero
if None:        # valor None
```

### Ejemplos prácticos

```python
items = []
if items:
    print("We have items!")
else:
    print("No items found")  # Esto se imprimirá

score = 85
passed = score >= 60  # True
```

## 4. Tipo None – `NoneType`

`None` representa "nada" o "ningún valor"; lo verás en todas partes en Python.

### Ejemplos básicos

```python
# Variables que aún no tienen un valor
result = None
user_input = None

# Las funciones devuelven None por defecto
def greet(name):
    print(f"Hello, {name}")

return_value = greet("Alice")  # return_value es None

# Comprobando si es None
if result is None:
    print("No result yet")

# Patrón común: valores opcionales
def find_user(username):
    # ... lógica de búsqueda ...
    if user_found:
        return user_data
    else:
        return None  # No se encontró nada
```

**Importante**: Usa siempre `is` y `is not` al comparar con None, no `==`:

```python
# Correcto
if value is None:
    # hacer algo

# Incorrecto (pero funciona)
if value == None:
    # hacer algo
```

## 5. Listas – `list`

Las listas almacenan múltiples elementos en orden y te permiten cambiarlos después de la creación. Para operaciones completas de listas, consulta nuestra <router-link to="/cheatsheet/lists-and-tuples">guía de listas y tuplas</router-link>.

### Ejemplos básicos

```python
# Creación de listas
fruits = ["apple", "banana", "orange"]
numbers = [1, 2, 3, 4, 5]
mixed = ["hello", 42, True, None]  # Las listas pueden contener diferentes tipos
empty = []

# Accediendo a elementos (comienza en el índice 0)
first_fruit = fruits[0]      # "apple"
last_fruit = fruits[-1]      # "orange"
```

### Operaciones comunes

```python
shopping_list = ["milk", "bread"]

# Añadir elementos
shopping_list.append("eggs")         # ["milk", "bread", "eggs"]
shopping_list.insert(0, "butter")    # ["butter", "milk", "bread", "eggs"]
shopping_list.extend(["cheese", "ham"])  # Añadir múltiples elementos

# Eliminar elementos
shopping_list.remove("milk")         # Eliminar la primera ocurrencia
last_item = shopping_list.pop()      # Eliminar y devolver el último elemento
first_item = shopping_list.pop(0)    # Eliminar y devolver el primer elemento

# Operaciones útiles
length = len(shopping_list)
has_bread = "bread" in shopping_list
```

### Cuándo usar listas

- Cuando necesitas datos ordenados que pueden cambiar
- Construir colecciones elemento por elemento
- Cuando necesitas acceder a elementos por posición

```python
# Buenos casos de uso
grades = [85, 92, 78, 96]
todo_items = ["wash dishes", "walk dog", "study Python"]

# Procesando listas
total = sum(grades)
average = total / len(grades)

for item in todo_items:
    print(f"Task: {item}")
```

## 6. Diccionarios – `dict`

Los diccionarios almacenan datos como pares clave-valor, como un diccionario real donde buscas palabras (claves) para encontrar definiciones (valores). Para operaciones completas de diccionarios, consulta nuestra <router-link to="/cheatsheet/dictionaries">guía de diccionarios</router-link>.

### Ejemplos básicos

```python
# Creación de diccionarios
person = {"name": "Alice", "age": 30, "city": "New York"}
grades = {"math": 85, "english": 92, "science": 78}
empty = {}

# Accediendo a valores
name = person["name"]        # "Alice"
age = person.get("age")      # 30 (forma más segura)
height = person.get("height", "unknown")  # "unknown" si la clave no existe
```

### Operaciones comunes

```python
student = {"name": "Bob", "grade": 85}

# Añadir/actualizar valores
student["age"] = 20           # Añadir nuevo par clave-valor
student["grade"] = 90         # Actualizar valor existente

# Métodos útiles
keys = student.keys()         # dict_keys(['name', 'grade', 'age'])
values = student.values()     # dict_values(['Bob', 90, 20])
items = student.items()       # dict_items([('name', 'Bob'), ...])

# Comprobando si existen claves
if "name" in student:
    print(f"Student name: {student['name']}")

# Eliminar elementos
age = student.pop("age")      # Eliminar y devolver valor
student.pop("height", None)   # Eliminación segura (sin error si la clave falta)
```

### Cuándo usar diccionarios

- Cuando necesitas buscar valores por un identificador único
- Almacenar datos estructurados (como registros)
- Contar cosas
- Caché/memoización

```python
# Buenos casos de uso
inventory = {"apples": 50, "bananas": 30, "oranges": 25}
user_profile = {
    "username": "alice123",
    "email": "alice@example.com",
    "is_premium": True
}

# Ejemplo de conteo
text = "hello world"
char_count = {}
for char in text:
    char_count[char] = char_count.get(char, 0) + 1
# Resultado: {'h': 1, 'e': 1, 'l': 3, 'o': 2, ' ': 1, 'w': 1, 'r': 1, 'd': 1}
```

## 6. Tuplas – `tuple`

Las tuplas son como las listas pero no se pueden cambiar después de la creación. Piénsalo como listas "bloqueadas". Aprende más sobre las tuplas en nuestra <router-link to="/cheatsheet/lists-and-tuples">guía de listas y tuplas</router-link>.

### Ejemplos básicos

```python
# Creación de tuplas
coordinates = (10, 20)
rgb_color = (255, 0, 128)
single_item = (42,)    # Nota la coma para tuplas de un solo elemento
empty = ()

# Los paréntesis son a menudo opcionales
point = 5, 10          # Igual que (5, 10)
name_age = "Alice", 25 # Igual que ("Alice", 25)

# Accediendo a elementos (igual que las listas)
x = coordinates[0]     # 10
y = coordinates[1]     # 20
```

### Desempaquetado de tuplas

```python
# El desempaquetado es muy útil
point = (100, 200)
x, y = point          # x=100, y=200

# Intercambio de valores
a = 5
b = 10
a, b = b, a           # Ahora a=10, b=5

# Función que devuelve múltiples valores
def get_name_age():
    return "Bob", 25

name, age = get_name_age()
```

### Cuándo usar tuplas

- Cuando tienes una colección fija que no cambiará
- Devolver múltiples valores de funciones
- Como claves de diccionario (ya que son inmutables)
- Representar coordenadas, valores RGB, etc.

```python
# Buenos casos de uso
WINDOW_SIZE = (800, 600)        # Constantes
DEFAULT_COLOR = (255, 255, 255) # RGB blanco

# Diccionario con claves de tupla
locations = {
    (0, 0): "origin",
    (1, 1): "northeast",
    (-1, -1): "southwest"
}
```

## 7. Conjuntos – `set`

Los conjuntos almacenan elementos únicos sin duplicados y sin un orden particular. Genial para pruebas de pertenencia y para eliminar duplicados. Para operaciones completas de conjuntos, consulta nuestra <router-link to="/cheatsheet/sets">guía de conjuntos</router-link>.

### Ejemplos básicos

```python
# Creación de conjuntos
colors = {"red", "green", "blue"}
numbers = {1, 2, 3, 4, 5}
empty = set()  # ¡Nota: {} crea un diccionario vacío, no un conjunto!

# A partir de listas (elimina duplicados)
mixed_list = [1, 2, 2, 3, 3, 3]
unique_numbers = set(mixed_list)  # {1, 2, 3}
```

### Operaciones comunes

```python
tags = {"python", "programming", "beginner"}

# Añadir elementos
tags.add("tutorial")
tags.update(["coding", "learning"])  # Añadir múltiples elementos

# Eliminar elementos
tags.remove("beginner")     # Error si el elemento no existe
tags.discard("advanced")    # Sin error si el elemento no existe

# Prueba de pertenencia (¡muy rápida!)
if "python" in tags:
    print("This is about Python!")

# Operaciones de conjuntos
set1 = {1, 2, 3}
set2 = {3, 4, 5}
union = set1 | set2         # {1, 2, 3, 4, 5}
intersection = set1 & set2   # {3}
difference = set1 - set2     # {1, 2}
```

### Cuándo usar conjuntos

- Eliminar duplicados de una colección
- Pruebas de pertenencia rápidas
- Operaciones matemáticas de conjuntos
- Seguimiento de visitantes únicos, identificadores, etc.

```python
# Buenos casos de uso
unique_visitors = set()
unique_visitors.add("user123")
unique_visitors.add("user456")
unique_visitors.add("user123")  # No añadirá el duplicado
print(len(unique_visitors))     # 2

# Eliminar duplicados de una lista
items = ["apple", "banana", "apple", "orange", "banana"]
unique_items = list(set(items))  # ['apple', 'banana', 'orange']
```

## Elegir el tipo correcto – consejos del mundo real

| Escenario                                      | Mejor tipo                                                  | Razón                                                |
| :--------------------------------------------- | :---------------------------------------------------------- | :--------------------------------------------------- |
| Almacenar la edad del usuario                  | <router-link to='/builtin/int'>`int`</router-link>          | Números enteros, no se necesitan decimales           |
| Precio del producto                            | <router-link to='/builtin/float'>`float`</router-link>      | Necesita lugares decimales                           |
| Estado de inicio de sesión del usuario         | <router-link to='/builtin/bool'>`bool`</router-link>        | Valor simple de verdadero/falso                      |
| Segundo nombre del usuario (podría no existir) | <router-link to='/builtin/str'>`str`</router-link> o `None` | Podría estar ausente                                 |
| Artículos del carrito de compras               | <router-link to='/builtin/list'>`list`</router-link>        | Ordenado, se pueden añadir/quitar elementos          |
| Datos del perfil de usuario                    | <router-link to='/builtin/dict'>`dict`</router-link>        | Pares clave-valor (nombre, correo electrónico, etc.) |
| Coordenadas GPS                                | <router-link to='/builtin/tuple'>`tuple`</router-link>      | Par fijo que no cambiará                             |
| Categorías de productos únicas                 | <router-link to='/builtin/set'>`set`</router-link>          | Sin duplicados, búsqueda rápida                      |

## Hoja de trucos sobre mutabilidad y hashabilidad

| Tipo                                                                                                                                                                   | ¿Mutable? | ¿Hashable? | ¿Puede ser clave de dict? |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------- | :--------- | :------------------------ |
| <router-link to='/builtin/int'>`int`</router-link>, <router-link to='/builtin/float'>`float`</router-link>, <router-link to='/builtin/complex'>`complex`</router-link> | No        | Sí         | ✔                        |
| <router-link to='/builtin/str'>`str`</router-link>                                                                                                                     | No        | Sí         | ✔                        |
| <router-link to='/builtin/bool'>`bool`</router-link>                                                                                                                   | No        | Sí         | ✔                        |
| `None`                                                                                                                                                                 | No        | Sí         | ✔                        |
| <router-link to='/builtin/tuple'>`tuple`</router-link> (con elementos inmutables)                                                                                      | No        | Sí         | ✔                        |
| <router-link to='/builtin/list'>`list`</router-link>                                                                                                                   | Sí        | No         | ✘                         |
| <router-link to='/builtin/dict'>`dict`</router-link>                                                                                                                   | Sí        | No         | ✘                         |
| <router-link to='/builtin/set'>`set`</router-link>                                                                                                                     | Sí        | No         | ✘                         |

## Conclusiones clave para principiantes

1. **Empieza simple**: Usa `int` para números enteros, `float` para decimales, `str` para texto, `bool` para verdadero/falso y `None` para "ningún valor".

2. **Colecciones fáciles**: Usa `list` cuando necesites cambiar cosas, `tuple` cuando no, `dict` para pares clave-valor y `set` para elementos únicos.

3. **En caso de duda**: `list` y `dict` cubren la mayoría de las necesidades de colecciones para principiantes.

4. **Practica con ejemplos sencillos** antes de pasar a casos de uso complejos.

5. **Recuerda**: Python es indulgente; siempre puedes convertir entre tipos compatibles cuando sea necesario.
