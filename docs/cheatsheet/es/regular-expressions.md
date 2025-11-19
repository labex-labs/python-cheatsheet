---
title: 'Expresiones Regulares de Python - Hoja de Trucos'
description: 'Una expresión regular (regex) es una secuencia de caracteres que especifica un patrón de búsqueda en texto y es utilizada por algoritmos de búsqueda de cadenas.'
labUrl: 'https://labex.io/es/labs/python-python-regular-expressions-633664?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Expresiones Regulares
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://en.wikipedia.org/wiki/Regular_expression">Expresiones Regulares</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Una expresión regular (abreviada como regex [...]) es una secuencia de caracteres que especifica un patrón de búsqueda en texto. [...] utilizada por algoritmos de búsqueda de cadenas para operaciones de "buscar" o "buscar y reemplazar" en cadenas, o para validación de entrada.
  </base-disclaimer-content>
</base-disclaimer>

1. Importe el módulo regex con `import re`.
2. Cree un objeto Regex con la función `re.compile()`. (Recuerde usar una cadena sin formato/raw string).
3. Pase la cadena que desea buscar al método `search()` del objeto Regex. Esto devuelve un objeto `Match`.
4. Llame al método `group()` del objeto Match para devolver una cadena con el texto coincidente real.

Todas las funciones regex en Python están en el módulo re:

```python
# Importar el módulo re para operaciones de expresiones regulares
import re
```

## Símbolos Regex

| Símbolo                | Coincide                                                                      |
| :--------------------- | :---------------------------------------------------------------------------- |
| `?`                    | cero o una de la agrupación anterior.                                         |
| `*`                    | cero o más de la agrupación anterior.                                         |
| `+`                    | una o más de la agrupación anterior.                                          |
| `{n}`                  | exactamente n de la agrupación anterior.                                      |
| `{n,}`                 | n o más de la agrupación anterior.                                            |
| `{,m}`                 | 0 a m de la agrupación anterior.                                              |
| `{n,m}`                | al menos n y como máximo m de la agrupación anterior.                         |
| `{n,m}?` o `*?` o `+?` | realiza una coincidencia no codiciosa (non-greedy) de la agrupación anterior. |
| `^spam`                | significa que la cadena debe comenzar con spam.                               |
| `spam$`                | significa que la cadena debe terminar con spam.                               |
| `.`                    | cualquier carácter, excepto los caracteres de nueva línea.                    |
| `\d`, `\w`, y `\s`     | un dígito, palabra o carácter de espacio, respectivamente.                    |
| `\D`, `\W`, y `\S`     | cualquier cosa excepto un dígito, palabra o espacio, respectivamente.         |
| `[abc]`                | cualquier carácter entre los corchetes (como a, b, ).                         |
| `[^abc]`               | cualquier carácter que no esté entre los corchetes.                           |

## Objetos Regex de Coincidencia

```python
# re.compile(): crear objeto de patrón regex (usar cadena sin formato r'' para evitar escapar)
phone_num_regex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d')  # Patrón: 3 dígitos-3 dígitos-4 dígitos

mo = phone_num_regex.search('My number is 415-555-4242.')  # Buscar patrón

print(f'Phone number found: {mo.group()}')  # group() devuelve el texto coincidente
```

```output
Phone number found: 415-555-4242
```

## Agrupación con paréntesis

```python
# Los paréntesis crean grupos: group(1) devuelve el primer grupo, group(2) devuelve el segundo
phone_num_regex = re.compile(r'(\d\d\d)-(\d\d\d-\d\d\d\d)')  # Dos grupos entre paréntesis
mo = phone_num_regex.search('My number is 415-555-4242.')

mo.group(1)  # Devuelve el primer grupo: '415'
```

```output
'415'
```

```python
mo.group(2)
```

```output
'555-4242'
```

```python
mo.group(0)
```

```output
'415-555-4242'
```

```python
mo.group()
```

```output
'415-555-4242'
```

Para recuperar todos los grupos a la vez, use el método `groups()`:

```python
# groups(): devuelve una tupla de todos los grupos
mo.groups()  # Devuelve ('415', '555-4242')
```

```output
('415', '555-4242')
```

```python
area_code, main_number = mo.groups()

print(area_code)
```

```output
415
```

```python
print(main_number)
```

```output
555-4242
```

## Múltiples grupos con Pipe

Puede usar el carácter `|` donde quiera hacer coincidir una de muchas expresiones.

```python
hero_regex = re.compile (r'Batman|Tina Fey')

mo1 = hero_regex.search('Batman and Tina Fey.')
mo1.group()
```

```output
'Batman'
```

```python
mo2 = hero_regex.search('Tina Fey and Batman.')
mo2.group()
```

```output
'Tina Fey'
```

También puede usar el pipe para hacer coincidir una de varias expresiones como parte de su regex:

```python
bat_regex = re.compile(r'Bat(man|mobile|copter|bat)')
mo = bat_regex.search('Batmobile lost a wheel')

mo.group()
```

```output
'Batmobile'
```

```python
mo.group(1)
```

```output
'mobile'
```

## Coincidencia opcional con el signo de interrogación

El carácter `?` marca el grupo que lo precede como una parte opcional del patrón.

```python
bat_regex = re.compile(r'Bat(wo)?man')

mo1 = bat_regex.search('The Adventures of Batman')
mo1.group()
```

```output
'Batman'
```

```python
mo2 = bat_regex.search('The Adventures of Batwoman')
mo2.group()
```

```output
'Batwoman'
```

## Coincidencia de cero o más con el Asterisco

El `*` (asterisco) significa "coincidir cero o más". El grupo que precede al asterisco puede aparecer cualquier número de veces en el texto.

```python
bat_regex = re.compile(r'Bat(wo)*man')
mo1 = bat_regex.search('The Adventures of Batman')
mo1.group()
```

```output
'Batman'
```

```python
mo2 = bat_regex.search('The Adventures of Batwoman')
mo2.group()
```

```output
'Batwoman'
```

```python
mo3 = bat_regex.search('The Adventures of Batwowowowoman')
mo3.group()
```

```output
'Batwowowowoman'
```

## Coincidencia de uno o más con el Plus

El `+` (o plus) significa _coincidir uno o más_. El grupo que precede a un plus debe aparecer al menos una vez:

```python
bat_regex = re.compile(r'Bat(wo)+man')

mo1 = bat_regex.search('The Adventures of Batwoman')
mo1.group()
```

```output
'Batwoman'
```

```python
mo2 = bat_regex.search('The Adventures of Batwowowowoman')
mo2.group()
```

```output
'Batwowowowoman'
```

```python
mo3 = bat_regex.search('The Adventures of Batman')
mo3 is None
```

```output
True
```

## Coincidencia de repeticiones específicas con llaves

Si tiene un grupo que desea repetir un número específico de veces, siga el grupo en su regex con un número entre llaves:

```python
ha_regex = re.compile(r'(Ha){3}')

mo1 = ha_regex.search('HaHaHa')
mo1.group()
```

```output
'HaHaHa'
```

```python
mo2 = ha_regex.search('Ha')
mo2 is None
```

```output
True
```

En lugar de un número, puede especificar un rango con un mínimo y un máximo entre las llaves. Por ejemplo, la expresión regular (Ha){3,5} coincidirá con 'HaHaHa', 'HaHaHaHa' y 'HaHaHaHaHa'.

```python
ha_regex = re.compile(r'(Ha){2,3}')
mo1 = ha_regex.search('HaHaHaHa')
mo1.group()
```

```output
'HaHaHa'
```

## Coincidencia codiciosa (Greedy) y no codiciosa (Non-greedy)

Las expresiones regulares de Python son codiciosas por defecto: en situaciones ambiguas coincidirán con la cadena más larga posible. La versión no codiciosa de las llaves, que coincide con la cadena más corta posible, tiene la llave de cierre seguida de un signo de interrogación.

```python
greedy_ha_regex = re.compile(r'(Ha){3,5}')

mo1 = greedy_ha_regex.search('HaHaHaHaHa')
mo1.group()
```

```output
'HaHaHaHaHa'
```

```python
non_greedy_ha_regex = re.compile(r'(Ha){3,5}?')
mo2 = non_greedy_ha_regex.search('HaHaHaHaHa')
mo2.group()
```

```output
'HaHaHa'
```

## El método findall()

El método `findall()` devolverá las cadenas de cada coincidencia en la cadena buscada.

```python
phone_num_regex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d') # no tiene grupos

phone_num_regex.findall('Cell: 415-555-9999 Work: 212-555-0000')
```

```output
['415-555-9999', '212-555-0000']
```

## Creación de sus propias clases de caracteres

Puede definir su propia clase de caracteres usando corchetes. Por ejemplo, la clase de caracteres _[aeiouAEIOU]_ coincidirá con cualquier vocal, tanto minúscula como mayúscula.

```python
vowel_regex = re.compile(r'[aeiouAEIOU]')
vowel_regex.findall('Robocop eats baby food. BABY FOOD.')
```

```output
['o', 'o', 'o', 'e', 'a', 'a', 'o', 'o', 'A', 'O', 'O']
```

También puede incluir rangos de letras o números usando un guion. Por ejemplo, la clase de caracteres _[a-zA-Z0-9]_ coincidirá con todas las letras minúsculas, letras mayúsculas y números.

Al colocar un acento circunflejo (`^`) justo después del corchete de apertura de la clase de caracteres, puede crear una clase de caracteres negativa que coincidirá con todos los caracteres que no están en la clase de caracteres:

```python
consonant_regex = re.compile(r'[^aeiouAEIOU]')
consonant_regex.findall('Robocop eats baby food. BABY FOOD.')
```

```output
['R', 'b', 'c', 'p', ' ', 't', 's', ' ', 'b', 'b', 'y', ' ', 'f', 'd', '.', ' ', 'B', 'B', 'Y', ' ', 'F', 'D', '.']
```

## Los caracteres Caret y Dollar sign

- También puede usar el símbolo de acento circunflejo `^` al principio de un regex para indicar que una coincidencia debe ocurrir al comienzo del texto buscado.

- De manera similar, puede colocar un signo de dólar `$` al final del regex para indicar que la cadena debe terminar con este patrón regex.

- Y puede usar el `^` y el `$` juntos para indicar que toda la cadena debe coincidir con el regex.

La cadena de expresión regular `r'^Hello'` coincide con cadenas que comienzan con 'Hello':

```python
begins_with_hello = re.compile(r'^Hello')
begins_with_hello.search('Hello world!')
```

```output
<_sre.SRE_Match object; span=(0, 5), match='Hello'>
```

```python
begins_with_hello.search('He said hello.') is None
```

```output
True
```

La cadena de expresión regular `r'\d\$'` coincide con cadenas que terminan con un carácter numérico del 0 al 9:

```python
whole_string_is_num = re.compile(r'^\d+$')

whole_string_is_num.search('1234567890')
```

```output
<_sre.SRE_Match object; span=(0, 10), match='1234567890'>
```

```python
whole_string_is_num.search('12345xyz67890') is None
```

```output
True
```

```python
whole_string_is_num.search('12 34567890') is None
```

```output
True
```

## El carácter comodín

El carácter `.` (o punto) en una expresión regular coincidirá con cualquier carácter excepto una nueva línea.

```python
at_regex = re.compile(r'.at')

at_regex.findall('The cat in the hat sat on the flat mat.')
```

```output
['cat', 'hat', 'sat', 'lat', 'mat']
```

## Coincidencia de todo con Dot-Star

```python
name_regex = re.compile(r'First Name: (.*) Last Name: (.*)')

mo = name_regex.search('First Name: Al Last Name: Sweigart')
mo.group(1)
```

```output
'Al'
```

```python
mo.group(2)
```

```output
'Sweigart'
```

El `.*` utiliza el modo codicioso (greedy): Siempre intentará hacer coincidir la mayor cantidad de texto posible. Para hacer coincidir cualquier texto de forma no codiciosa, use el punto, el asterisco y el signo de interrogación (`.*?`). El signo de interrogación le indica a Python que coincida de forma no codiciosa:

```python
non_greedy_regex = re.compile(r'<.*?>')
mo = non_greedy_regex.search('<To serve man> for dinner.>')
mo.group()
```

```output
'<To serve man>'
```

```python
greedy_regex = re.compile(r'<.*>')
mo = greedy_regex.search('<To serve man> for dinner.>')
mo.group()
```

```output
'<To serve man> for dinner.>'
```

## Coincidencia de nuevas líneas con el carácter Punto

El punto-asterisco coincide con todo excepto una nueva línea. Al pasar `re.DOTALL` como segundo argumento a `re.compile()`, puede hacer que el carácter punto coincida con todos los caracteres, incluido el carácter de nueva línea:

```python
no_newline_regex = re.compile('.*')
no_newline_regex.search('Serve the public trust.\nProtect the innocent.\nUphold the law.').group()
```

```output
'Serve the public trust.'
```

```python
newline_regex = re.compile('.*', re.DOTALL)
newline_regex.search('Serve the public trust.\nProtect the innocent.\nUphold the law.').group()
```

```output
'Serve the public trust.\nProtect the innocent.\nUphold the law.'
```

## Coincidencia sin distinción entre mayúsculas y minúsculas

Para hacer que su regex no distinga entre mayúsculas y minúsculas, puede pasar `re.IGNORECASE` o `re.I` como segundo argumento a `re.compile()`:

```python
robocop = re.compile(r'robocop', re.I)

robocop.search('Robocop is part man, part machine, all cop.').group()
```

```output
'Robocop'
```

```python
robocop.search('ROBOCOP protects the innocent.').group()
```

```output
'ROBOCOP'
```

```python
robocop.search('Al, why does your programming book talk about robocop so much?').group()
```

```output
'robocop'
```

## Sustitución de cadenas con el método sub()

El método `sub()` para objetos Regex recibe dos argumentos:

1. El primer argumento es una cadena para reemplazar cualquier coincidencia.
2. El segundo es la cadena para la expresión regular.

El método `sub()` devuelve una cadena con las sustituciones aplicadas:

```python
names_regex = re.compile(r'Agent \w+')

names_regex.sub('CENSORED', 'Agent Alice gave the secret documents to Agent Bob.')
```

```output
'CENSORED gave the secret documents to CENSORED.'
```

## Gestión de Regexes complejos

Para indicarle a la función `re.compile()` que ignore los espacios en blanco y los comentarios dentro de la cadena de expresión regular, se puede habilitar el "modo detallado" (verbose mode) pasando la variable `re.VERBOSE` como segundo argumento a `re.compile()`.

Ahora, en lugar de una expresión regular difícil de leer como esta:

```python
phone_regex = re.compile(r'((\d{3}|\(\d{3}\))?(\s|-|\.)?\d{3}(\s|-|\.)\d{4}(\s*(ext|x|ext.)\s*\d{2,5})?)')
```

puede distribuir la expresión regular en varias líneas con comentarios como este:

```python
phone_regex = re.compile(r'''(
    (\d{3}|\(\d{3}\))?            # código de área
    (\s|-|\.)?                    # separador
    \d{3}                         # primeros 3 dígitos
    (\s|-|\.)                     # separador
    \d{4}                         # últimos 4 dígitos
    (\s*(ext|x|ext.)\s*\d{2,5})?  # extensión
    )''', re.VERBOSE)
```

## Enlaces relevantes

- <router-link to="/cheatsheet/manipulating-strings">Manipulación de Cadenas</router-link>
- <router-link to="/cheatsheet/string-formatting">Formato de Cadenas</router-link>
- <router-link to="/blog/python-data-types">Publicación del Blog Tipos de Datos de Python</router-link>
- <router-link to="/builtin/compile">compile()</router-link>
