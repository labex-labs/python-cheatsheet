---
title: 'Módulo Datetime de Python - Hoja de Trucos'
description: 'El módulo Datetime permite trabajar con fecha y hora proporcionando 3 tipos de datos adicionales: date, time y datetime.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Python Datetime
</base-title>

El módulo Datetime nos permite trabajar con objetos de fecha y hora. Proporciona tres tipos de datos adicionales: `date`, `time` y `datetime`.

```python
import datetime
```

## date()

```python
datetime.date(year: int, month: int, day: int)
```

El método `date` devuelve un objeto de fecha con los atributos `year`, `month` y `day`:

```python
from datetime import date
# Crear un objeto de fecha
obj = date(2022, 12, 1)
# Acceder al atributo year
obj.year
```

```output
2022
```

```python
obj.month
```

```output
12
```

```python
obj.day
```

```output
1
```

## time()

```python
datetime.time(hour: int, minute: int, second: int)
```

El método `time` devuelve un objeto de hora con los atributos `hour`, `minute`, `second`, `microsecond` y `tzinfo`:

```python
from datetime import time
# Crear un objeto de hora
obj = time(10, 20, 33)
# Acceder al atributo hour
obj.hour
```

```output
10
```

```python
obj.second
```

```output
33
```

```python
obj.microsecond
```

```output
0
```

## datetime()

```python
datetime.datetime(year, month, day, hour, minute, second)
```

El `datetime` devuelve un objeto con los atributos de los objetos `date` y `time`:

```python
from datetime import datetime
# Crear un objeto datetime con fecha y hora
obj = datetime(2024, 12, 1, 15, 35, 59)
# Acceder al atributo year
obj.year
```

```output
2024
```

```python
obj.month
```

```output
12
```

```python
obj.day
```

```output
1
```

```python
obj.hour
```

```output
15
```

```python
obj.second
```

```output
59
```

## now() y today()

Los métodos `now` y `today` devuelven un objeto `datetime` con el día y la hora exactos del sistema:

```python
from datetime import datetime
# Obtener fecha y hora actuales
now = datetime.now()
now
```

```output
datetime.datetime(2022, 7, 23, 19, 56, 49, 589806)
```

Debido a que el objeto devuelto es un `datetime`, podemos acceder a los atributos `date` y `time`:

```python
now.date()
```

```output
datetime.date(2022, 7, 23)
```

```python
now.time()
```

```output
datetime.time(19, 56, 49, 589806)
```

```python
now.year
```

```output
2022
```

```python
now.month
```

```output
7
```

```python
now.day
```

```output
23
```

```python
now.hour
```

```output
19
```

```python
now.minute
```

```output
56
```

```python
now.second
```

```output
49
```

```python
now.microsecond
```

```output
589806
```

Además, `now` puede tomar un objeto [timezone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) como parámetro opcional:

```python
from datetime import datetime, timezone
# Obtener la hora UTC actual
datetime.now(timezone.utc)
```

```output
datetime.datetime(2022, 7, 24, 0, 20, 8, 265634, tzinfo=datetime.timezone.utc)
```

Si no se especifica un parámetro _timezone_, `now` usará la zona horaria del sistema por defecto.

## strftime() y strptime()

Puede transformar fácilmente entre cadenas y objetos datetime con los métodos `strftime` y `strptime`.

### strftime()

`strftime` nos permite crear cadenas con formato legible a partir de un objeto datetime de Python:

```python
from datetime import datetime
# Obtener la fecha y hora actuales para ejemplos de formato
now = datetime.now()
now
```

```output
datetime.datetime(2022, 7, 23, 20, 31, 19, 751479)
```

```python
# Formatear datetime como día-mes-año con mes abreviado
now.strftime("%d-%b-%Y")
```

```output
'23-Jul-2022'
```

```python
# Formatear datetime como día-mes-año con mes numérico
now.strftime("%d-%m-%Y")
```

```output
'23-07-2022'
```

```python
# Formatear datetime como mes/día/año
now.strftime("%m/%d/%Y")
```

```output
'07/23/2022'
```

```python
# Formatear datetime con fecha y hora
now.strftime("%b/%d/%Y - %H:%M:%S")
```

```output
'Jul/23/2022 - 20:31:19'
```

Puede que encuentre extrañas las cadenas pasadas a `strftime`, pero es bastante fácil entender su significado. Por ejemplo, `%m/%d/%Y` devolverá el mes, el día y el año separados por `/` (07/23/2022).

### strptime()

El método `strptime` crea un objeto `datetime` a partir de una cadena.

Este método acepta dos parámetros:

```python
obj.strptime(datetime_string, format)
```

- Una cadena que representa un objeto datetime.
- El código de formato de python equivalente a esa cadena.

```python
from datetime import datetime

# Analizar cadena a objeto datetime
datetime_str = '12-Jul-2023'
datetime.strptime(datetime_str, '%d-%b-%Y')
```

```output
datetime.datetime(2023, 7, 12, 0, 0)
```

```python
# Analizar cadena con fecha y hora
datetime_str = 'Jul/12/2023 - 14:38:37'
datetime.strptime(datetime_str, "%b/%d/%Y - %H:%M:%S")
```

```output
datetime.datetime(2023, 7, 12, 14, 38, 37)
```

### Códigos de Formato

| Directiva | Significado                                                                                                                                                                                           | Ejemplo                                               |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| `%a`      | Día de la semana como nombre abreviado de la configuración regional.                                                                                                                                  | Sun, Mon, …, Sat (en_US)                              |
| `%A`      | Día de la semana como nombre completo de la configuración regional.                                                                                                                                   | Sunday, Monday, …, Saturday (en_US)                   |
| `%w`      | Día de la semana como número decimal, donde 0 es Domingo y 6 es Sábado.                                                                                                                               | 0, 1, …, 6                                            |
| `%d`      | Día del mes como número decimal con relleno de ceros.                                                                                                                                                 | 01, 02, …, 31                                         |
| `%b`      | Mes como nombre abreviado de la configuración regional.                                                                                                                                               | Jan, Feb, …, Dec (en_US)                              |
| `%B`      | Mes como nombre completo de la configuración regional.                                                                                                                                                | January, February, …, December (en_US)                |
| `%m`      | Mes como número decimal con relleno de ceros.                                                                                                                                                         | 01, 02, …, 12                                         |
| `%y`      | Año sin siglo como número decimal con relleno de ceros.                                                                                                                                               | 00, 01, …, 99                                         |
| `%Y`      | Año con siglo como número decimal.                                                                                                                                                                    | 0001, 0002, …, 2013, 2014, …, 9998, 9999              |
| `%H`      | Hora (reloj de 24 horas) como número decimal con relleno de ceros.                                                                                                                                    | 00, 01, …, 23                                         |
| `%I`      | Hora (reloj de 12 horas) como número decimal con relleno de ceros.                                                                                                                                    | 01, 02, …, 12                                         |
| `%p`      | Equivalente local de AM o PM.                                                                                                                                                                         | AM, PM (en_US)                                        |
| `%M`      | Minuto como número decimal con relleno de ceros.                                                                                                                                                      | 00, 01, …, 59                                         |
| `%S`      | Segundo como número decimal con relleno de ceros.                                                                                                                                                     | 00, 01, …, 59                                         |
| `%f`      | Microsegundo como número decimal, relleno a la izquierda con ceros.                                                                                                                                   | 000000, 000001, …, 999999                             |
| `%z`      | Desplazamiento UTC en el formato `±HHMM[SS[.ffffff]]` (cadena vacía si el objeto es ingenuo).                                                                                                         | (empty), +0000, -0400, +1030, +063415, -030712.345216 |
| `%Z`      | Nombre de la zona horaria (cadena vacía si el objeto es ingenuo).                                                                                                                                     | (empty), UTC, GMT                                     |
| `%j`      | Día del año como número decimal con relleno de ceros.                                                                                                                                                 | 001, 002, …, 366                                      |
| `%U`      | Número de semana del año (Domingo como primer día de la semana) como número decimal con relleno de ceros. Todos los días de un año nuevo que preceden al primer domingo se consideran en la semana 0. | 00, 01, …, 53                                         |
| `%W`      | Número de semana del año (Lunes como primer día de la semana) como número decimal. Todos los días de un año nuevo que preceden al primer lunes se consideran en la semana 0.                          | 00, 01, …, 53                                         |
| `%c`      | Representación de fecha y hora apropiada para la configuración regional.                                                                                                                              | Tue Aug 16 21:30:00 1988 (en_US)                      |
| `%x`      | Representación de fecha apropiada para la configuración regional.                                                                                                                                     | 08/16/88 (None)                                       |
| `%X`      | Representación de hora apropiada para la configuración regional.                                                                                                                                      | 21:30:00 (en_US)                                      |
| `%%`      | Un carácter `'%'` literal.                                                                                                                                                                            | %                                                     |

## timedelta()

El objeto `timedelta` representa la diferencia entre dos fechas u horas.

```python
from datetime import datetime

# Crear dos objetos datetime
date_1 = datetime.strptime('12-Jul-2023', '%d-%b-%Y')
date_2 = datetime.strptime('01-Jan-2024', '%d-%b-%Y')

# Calcular la diferencia (devuelve timedelta)
difference = date_2 - date_1
difference
```

```output
datetime.timedelta(days=173)
```

```python
# Obtener el número de días del timedelta
difference.days
```

```output
173
```

`timedelta` puede sumar `days`, `seconds` y `microseconds` a un objeto datetime:

```python
from datetime import datetime, timedelta

# Obtener la fecha y hora actuales para operaciones con timedelta
now = datetime.now()
now
```

```output
datetime.datetime(2022, 7, 23, 21, 25, 2, 341081)
```

```python
# Sumar 10 días y 15 segundos a la fecha y hora actuales
now + timedelta(days=10, seconds=15)
```

```output
datetime.datetime(2022, 8, 2, 21, 25, 17, 341081)
```

Y puede restar `days`, `seconds` y `microseconds` a un objeto datetime:

```python
from datetime import datetime, timedelta

# Obtener la fecha y hora actuales para el ejemplo de resta
now = datetime.now()
now
```

```output
datetime.datetime(2022, 7, 23, 21, 25, 2, 341081)
```

```python
# Restar 10 días y 15 segundos a la fecha y hora actuales
now - timedelta(days=10, seconds=15)
```

```output
datetime.datetime(2022, 7, 13, 21, 59, 41, 100883)
```

## Enlaces relevantes

- <router-link to="/cheatsheet/string-formatting">Cheatsheet: Formato de Cadenas</router-link>
- <router-link to="/blog/python-data-types">Blog: Tipos de Datos de Python</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/print">print()</router-link>
