---
title: 'Python Datetime Modul – Python Spickzettel'
description: 'Das Datetime-Modul ermöglicht die Arbeit mit Datum und Uhrzeit durch Bereitstellung von 3 zusätzlichen Datentypen: Datum, Uhrzeit und Datetime.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Datetime Modul
</base-title>

Das Datetime-Modul ermöglicht uns die Arbeit mit Datums- und Zeitobjekten. Es stellt drei zusätzliche Datentypen bereit: `date`, `time` und `datetime`.

```python
import datetime
```

## date()

```python
datetime.date(year: int, month: int, day: int)
```

Die `date`-Methode gibt ein Datumsobjekt mit den Attributen `year`, `month` und `day` zurück:

```python
from datetime import date
# Erstellen eines Datumsobjekts
obj = date(2022, 12, 1)
# Zugriff auf das Jahr-Attribut
obj.year
```

Ausgabe:

```plaintext
2022
```

```python
obj.month
```

Ausgabe:

```plaintext
12
```

```python
obj.day
```

Ausgabe:

```plaintext
1
```

## time()

```python
datetime.time(hour: int, minute: int, second: int)
```

Die `time`-Methode gibt ein Zeitobjekt mit den Attributen `hour`, `minute`, `second`, `microsecond` und `tzinfo` zurück:

```python
from datetime import time
# Erstellen eines Zeitobjekts
obj = time(10, 20, 33)
# Zugriff auf das Stunden-Attribut
obj.hour
```

Ausgabe:

```plaintext
10
```

```python
obj.second
```

Ausgabe:

```plaintext
33
```

```python
obj.microsecond
```

Ausgabe:

```plaintext
0
```

## datetime()

```python
datetime.datetime(year, month, day, hour, minute, second)
```

`datetime` gibt ein Objekt zurück, das sowohl die Attribute von `date` als auch von `time` enthält:

```python
from datetime import datetime
# Erstellen eines datetime-Objekts mit Datum und Uhrzeit
obj = datetime(2024, 12, 1, 15, 35, 59)
# Zugriff auf das Jahr-Attribut
obj.year
```

Ausgabe:

```plaintext
2024
```

```python
obj.month
```

Ausgabe:

```plaintext
12
```

```python
obj.day
```

Ausgabe:

```plaintext
1
```

```python
obj.hour
```

Ausgabe:

```plaintext
15
```

```python
obj.second
```

Ausgabe:

```plaintext
59
```

## now() und today()

Die Methoden `now` und `today` geben ein `datetime`-Objekt mit dem exakten Systemdatum und der Systemzeit zurück:

```python
from datetime import datetime
# Aktuelles Datum und Uhrzeit abrufen
now = datetime.now()
now
```

Ausgabe:

```plaintext
datetime.datetime(2022, 7, 23, 19, 56, 49, 589806)
```

Da das zurückgegebene Objekt ein `datetime` ist, können wir sowohl auf die `date`- als auch auf die `time`-Attribute zugreifen:

```python
now.date()
```

Ausgabe:

```plaintext
datetime.date(2022, 7, 23)
```

```python
now.time()
```

Ausgabe:

```plaintext
datetime.time(19, 56, 49, 589806)
```

```python
now.year
```

Ausgabe:

```plaintext
2022
```

```python
now.month
```

Ausgabe:

```plaintext
7
```

```python
now.day
```

Ausgabe:

```plaintext
23
```

```python
now.hour
```

Ausgabe:

```plaintext
19
```

```python
now.minute
```

Ausgabe:

```plaintext
56
```

```python
now.second
```

Ausgabe:

```plaintext
49
```

```python
now.microsecond
```

Ausgabe:

```plaintext
589806
```

Zusätzlich kann `now` ein [Zeitzonen](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)-Objekt als optionalen Parameter entgegennehmen:

```python
from datetime import datetime, timezone
# Aktuelle UTC-Zeit abrufen
datetime.now(timezone.utc)
```

Ausgabe:

```plaintext
datetime.datetime(2022, 7, 24, 0, 20, 8, 265634, tzinfo=datetime.timezone.utc)
```

Wenn kein _timezone_-Parameter angegeben wird, verwendet `now` standardmäßig die Systemzeitzone.

## strftime() und strptime()

Sie können einfach zwischen Strings und datetime-Objekten mit den Methoden `strftime` und `strptime` konvertieren.

### strftime()

`strftime` ermöglicht es uns, menschenlesbare formatierte Strings aus einem Python datetime-Objekt zu erstellen:

```python
from datetime import datetime
# Aktuelles Datum und Uhrzeit für Formatierungsbeispiele abrufen
now = datetime.now()
now
```

Ausgabe:

```plaintext
datetime.datetime(2022, 7, 23, 20, 31, 19, 751479)
```

```python
# Datum und Uhrzeit als Tag-Monat-Jahr mit abgekürztem Monat formatieren
now.strftime("%d-%b-%Y")
```

Ausgabe:

```plaintext
'23-Jul-2022'
```

```python
# Datum und Uhrzeit als Tag-Monat-Jahr mit numerischem Monat formatieren
now.strftime("%d-%m-%Y")
```

Ausgabe:

```plaintext
'23-07-2022'
```

```python
# Datum und Uhrzeit als Monat/Tag/Jahr formatieren
now.strftime("%m/%d/%Y")
```

Ausgabe:

```plaintext
'07/23/2022'
```

```python
# Datum und Uhrzeit mit Datum und Uhrzeit formatieren
now.strftime("%b/%d/%Y - %H:%M:%S")
```

Ausgabe:

```plaintext
'Jul/23/2022 - 20:31:19'
```

Die an `strftime` übergebenen Strings mögen etwas seltsam erscheinen, aber es ist recht einfach, ihre Bedeutung zu verstehen. Zum Beispiel gibt `%m/%d/%Y` den Monat, den Tag und das Jahr getrennt durch `/` zurück (07/23/2022).

### strptime()

Die Methode `strptime` erstellt ein `datetime`-Objekt aus einem String.

Diese Methode akzeptiert zwei Parameter:

```python
obj.strptime(datetime_string, format)
```

- Ein String, der ein datetime-Objekt darstellt.
- Der Python-Formatcode, der diesem String entspricht.

```python
from datetime import datetime

# String in datetime-Objekt parsen
datetime_str = '12-Jul-2023'
datetime.strptime(datetime_str, '%d-%b-%Y')
```

Ausgabe:

```plaintext
datetime.datetime(2023, 7, 12, 0, 0)
```

```python
# String mit Datum und Uhrzeit parsen
datetime_str = 'Jul/12/2023 - 14:38:37'
datetime.strptime(datetime_str, "%b/%d/%Y - %H:%M:%S")
```

Ausgabe:

```plaintext
datetime.datetime(2023, 7, 12, 14, 38, 37)
```

### Formatcodes

| Direktive | Bedeutung                                                                                                                                                                            | Beispiel                                             |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| `%a`      | Wochentag als lokalisierter abgekürzter Name.                                                                                                                                        | Sun, Mon, …, Sat (en_US)                             |
| `%A`      | Wochentag als lokalisierter vollständiger Name.                                                                                                                                      | Sunday, Monday, …, Saturday (en_US)                  |
| `%w`      | Wochentag als Dezimalzahl, wobei 0 Sonntag und 6 Samstag ist.                                                                                                                        | 0, 1, …, 6                                           |
| `%d`      | Tag des Monats als mit Null aufgefüllte Dezimalzahl.                                                                                                                                 | 01, 02, …, 31                                        |
| `%b`      | Monat als lokalisierter abgekürzter Name.                                                                                                                                            | Jan, Feb, …, Dec (en_US)                             |
| `%B`      | Monat als lokalisierter vollständiger Name.                                                                                                                                          | January, February, …, December (en_US)               |
| `%m`      | Monat als mit Null aufgefüllte Dezimalzahl.                                                                                                                                          | 01, 02, …, 12                                        |
| `%y`      | Jahr ohne Jahrhundert als mit Null aufgefüllte Dezimalzahl.                                                                                                                          | 00, 01, …, 99                                        |
| `%Y`      | Jahr mit Jahrhundert als Dezimalzahl.                                                                                                                                                | 0001, 0002, …, 2013, 2014, …, 9998, 9999             |
| `%H`      | Stunde (24-Stunden-Format) als mit Null aufgefüllte Dezimalzahl.                                                                                                                     | 00, 01, …, 23                                        |
| `%I`      | Stunde (12-Stunden-Format) als mit Null aufgefüllte Dezimalzahl.                                                                                                                     | 01, 02, …, 12                                        |
| `%p`      | Lokales Äquivalent von entweder AM oder PM.                                                                                                                                          | AM, PM (en_US)                                       |
| `%M`      | Minute als mit Null aufgefüllte Dezimalzahl.                                                                                                                                         | 00, 01, …, 59                                        |
| `%S`      | Sekunde als mit Null aufgefüllte Dezimalzahl.                                                                                                                                        | 00, 01, …, 59                                        |
| `%f`      | Mikrosekunde als Dezimalzahl, links mit Nullen aufgefüllt.                                                                                                                           | 000000, 000001, …, 999999                            |
| `%z`      | UTC-Offset in der Form `±HHMM[SS[.ffffff]]` (leerer String, wenn das Objekt naiv ist).                                                                                               | (leer), +0000, -0400, +1030, +063415, -030712.345216 |
| `%Z`      | Zeitzonenname (leerer String, wenn das Objekt naiv ist).                                                                                                                             | (leer), UTC, GMT                                     |
| `%j`      | Tag des Jahres als mit Null aufgefüllte Dezimalzahl.                                                                                                                                 | 001, 002, …, 366                                     |
| `%U`      | Kalenderwochennummer des Jahres (Sonntag als erster Tag der Woche) als mit Null aufgefüllte Dezimalzahl. Alle Tage in einem neuen Jahr vor dem ersten Sonntag gelten als in Woche 0. | 00, 01, …, 53                                        |
| `%W`      | Kalenderwochennummer des Jahres (Montag als erster Tag der Woche) als Dezimalzahl. Alle Tage in einem neuen Jahr vor dem ersten Montag gelten als in Woche 0.                        | 00, 01, …, 53                                        |
| `%c`      | Lokal angemessene Datums- und Zeitdarstellung.                                                                                                                                       | Tue Aug 16 21:30:00 1988 (en_US)                     |
| `%x`      | Lokal angemessene Datumsdarstellung.                                                                                                                                                 | 08/16/88 (None)                                      |
| `%X`      | Lokal angemessene Zeitdarstellung.                                                                                                                                                   | 21:30:00 (en_US)                                     |
| `%%`      | Ein literales `'%'`-Zeichen.                                                                                                                                                         | %                                                    |

## timedelta()

Das `timedelta`-Objekt repräsentiert die Differenz zwischen zwei Daten oder Zeiten.

```python
from datetime import datetime

# Zwei datetime-Objekte erstellen
date_1 = datetime.strptime('12-Jul-2023', '%d-%b-%Y')
date_2 = datetime.strptime('01-Jan-2024', '%d-%b-%Y')

# Differenz berechnen (gibt timedelta zurück)
difference = date_2 - date_1
difference
```

Ausgabe:

```plaintext
datetime.timedelta(days=173)
```

```python
# Anzahl der Tage aus timedelta abrufen
difference.days
```

Ausgabe:

```plaintext
173
```

`timedelta` kann `days`, `seconds` und `microseconds` zu einem datetime-Objekt hinzufügen:

```python
from datetime import datetime, timedelta

# Aktuelles Datum und Uhrzeit für timedelta-Operationen abrufen
now = datetime.now()
now
```

Ausgabe:

```plaintext
datetime.datetime(2022, 7, 23, 21, 25, 2, 341081)
```

```python
# 10 Tage und 15 Sekunden zur aktuellen datetime hinzufügen
now + timedelta(days=10, seconds=15)
```

Ausgabe:

```plaintext
datetime.datetime(2022, 8, 2, 21, 25, 17, 341081)
```

Und kann `days`, `seconds` und `microseconds` von einem datetime-Objekt subtrahieren:

```python
from datetime import datetime, timedelta

# Aktuelles Datum und Uhrzeit für Subtraktionsbeispiel abrufen
now = datetime.now()
now
```

Ausgabe:

```plaintext
datetime.datetime(2022, 7, 23, 21, 25, 2, 341081)
```

```python
# 10 Tage und 15 Sekunden von der aktuellen datetime subtrahieren
now - timedelta(days=10, seconds=15)
```

Ausgabe:

```plaintext
datetime.datetime(2022, 7, 13, 21, 59, 41, 100883)
```

## Relevante Links

- <router-link to="/cheatsheet/string-formatting">Cheatsheet: String-Formatierung</router-link>
- <router-link to="/blog/python-data-types">Blog: Python-Datentypen</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/print">print()</router-link>
