---
title: 'Python Reguläre Ausdrücke - Python Spickzettel'
description: 'Ein regulärer Ausdruck (kurz Regex) ist eine Zeichenfolge, die ein Suchmuster in Text definiert und von String-Suchalgorithmen verwendet wird.'
labUrl: 'https://labex.io/de/labs/python-python-regular-expressions-633664?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Reguläre Ausdrücke
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://en.wikipedia.org/wiki/Regular_expression">Reguläre Ausdrücke</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Ein regulärer Ausdruck (kurz Regex [...]) ist eine Zeichenfolge, die ein Suchmuster in Text definiert. [...] wird von String-Suchalgorithmen für "Suchen" oder "Suchen und Ersetzen"-Operationen an Zeichenfolgen oder zur Eingabevalidierung verwendet.
  </base-disclaimer-content>
</base-disclaimer>

1. Importieren Sie das Regex-Modul mit `import re`.
2. Erstellen Sie ein Regex-Objekt mit der Funktion `re.compile()`. (Denken Sie daran, einen Raw String zu verwenden.)
3. Übergeben Sie den String, den Sie durchsuchen möchten, an die `search()`-Methode des Regex-Objekts. Dies gibt ein `Match`-Objekt zurück.
4. Rufen Sie die `group()`-Methode des Match-Objekts auf, um einen String des tatsächlich gefundenen Textes zurückzugeben.

Alle Regex-Funktionen in Python befinden sich im re-Modul:

```python
# Importieren Sie das re-Modul für Operationen mit regulären Ausdrücken
import re
```

## Regex-Symbole

| Symbol                       | Entspricht                                                                |
| ---------------------------- | ------------------------------------------------------------------------- |
| `?`                          | Null oder eine der vorhergehenden Gruppe.                                 |
| `*`                          | Null oder mehr der vorhergehenden Gruppe.                                 |
| `+`                          | Eine oder mehr der vorhergehenden Gruppe.                                 |
| `{n}`                        | Genau n der vorhergehenden Gruppe.                                        |
| `{n,}`                       | n oder mehr der vorhergehenden Gruppe.                                    |
| `{,m}`                       | 0 bis m der vorhergehenden Gruppe.                                        |
| `{n,m}`                      | Mindestens n und höchstens m der vorhergehenden Gruppe.                   |
| `{n,m}?` oder `*?` oder `+?` | Führt eine nicht-gierige Übereinstimmung der vorhergehenden Gruppe durch. |
| `^spam`                      | Bedeutet, dass der String mit spam beginnen muss.                         |
| `spam$`                      | Bedeutet, dass der String mit spam enden muss.                            |
| `.`                          | Jedes Zeichen außer Zeilenumbruchzeichen.                                 |
| `\d`, `\w`, und `\s`         | Eine Ziffer, ein Wort- bzw. ein Leerzeichen-Zeichen.                      |
| `\D`, `\W`, und `\S`         | Alles außer einer Ziffer, einem Wort bzw. einem Leerzeichen.              |
| `[abc]`                      | Jedes Zeichen zwischen den Klammern (wie a, b, ).                         |
| `[^abc]`                     | Jedes Zeichen, das nicht zwischen den Klammern liegt.                     |

## Matching Regex-Objekte

```python
# re.compile(): Regex-Musterobjekt erstellen (Raw String r'' verwenden, um das Escapen zu vermeiden)
phone_num_regex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d')  # Muster: 3 Ziffern-3 Ziffern-4 Ziffern

mo = phone_num_regex.search('Meine Nummer ist 415-555-4242.')  # Nach Muster suchen

print(f'Telefonnummer gefunden: {mo.group()}')  # group() gibt den gefundenen Text zurück
```

Ausgabe:

```plaintext
Phone number found: 415-555-4242
```

## Gruppierung mit Klammern

```python
# Klammern erstellen Gruppen: group(1) gibt die erste Gruppe zurück, group(2) die zweite
phone_num_regex = re.compile(r'(\d\d\d)-(\d\d\d-\d\d\d\d)')  # Zwei Gruppen in Klammern
mo = phone_num_regex.search('Meine Nummer ist 415-555-4242.')

mo.group(1)  # Gibt die erste Gruppe zurück: '415'
```

Ausgabe:

```plaintext
'415'
```

```python
mo.group(2)
```

Ausgabe:

```plaintext
'555-4242'
```

```python
mo.group(0)
```

Ausgabe:

```plaintext
'415-555-4242'
```

```python
mo.group()
```

Ausgabe:

```plaintext
'415-555-4242'
```

Um alle Gruppen auf einmal abzurufen, verwenden Sie die Methode `groups()`:

```python
# groups(): gibt ein Tupel aller Gruppen zurück
mo.groups()  # Gibt ('415', '555-4242') zurück
```

Ausgabe:

```plaintext
('415', '555-4242')
```

```python
area_code, main_number = mo.groups()

print(area_code)
```

Ausgabe:

```plaintext
415
```

```python
print(main_number)
```

Ausgabe:

```plaintext
555-4242
```

## Mehrere Gruppen mit Pipe

Sie können das Zeichen `|` überall dort verwenden, wo Sie einen von vielen Ausdrücken abgleichen möchten.

```python
hero_regex = re.compile (r'Batman|Tina Fey')

mo1 = hero_regex.search('Batman und Tina Fey.')
mo1.group()
```

Ausgabe:

```plaintext
'Batman'
```

```python
mo2 = hero_regex.search('Tina Fey und Batman.')
mo2.group()
```

Ausgabe:

```plaintext
'Tina Fey'
```

Sie können die Pipe auch verwenden, um eines von mehreren Mustern als Teil Ihres Regex abzugleichen:

```python
bat_regex = re.compile(r'Bat(man|mobile|copter|bat)')
mo = bat_regex.search('Batmobile verlor ein Rad')

mo.group()
```

Ausgabe:

```plaintext
'Batmobile'
```

```python
mo.group(1)
```

Ausgabe:

```plaintext
'mobile'
```

## Optionale Übereinstimmung mit dem Fragezeichen

Das Zeichen `?` kennzeichnet die ihm vorangestellte Gruppe als optionalen Teil des Musters.

```python
bat_regex = re.compile(r'Bat(wo)?man')

mo1 = bat_regex.search('Die Abenteuer von Batman')
mo1.group()
```

Ausgabe:

```plaintext
'Batman'
```

```python
mo2 = bat_regex.search('Die Abenteuer von Batwoman')
mo2.group()
```

Ausgabe:

```plaintext
'Batwoman'
```

## Null oder mehr Übereinstimmungen mit dem Sternchen

Das `*` (Sternchen) bedeutet "null oder mehr Vorkommen abgleichen". Die dem Sternchen vorangestellte Gruppe kann beliebig oft im Text vorkommen.

```python
bat_regex = re.compile(r'Bat(wo)*man')
mo1 = bat_regex.search('Die Abenteuer von Batman')
mo1.group()
```

Ausgabe:

```plaintext
'Batman'
```

```python
mo2 = bat_regex.search('Die Abenteuer von Batwoman')
mo2.group()
```

Ausgabe:

```plaintext
'Batwoman'
```

```python
mo3 = bat_regex.search('Die Abenteuer von Batwowowowoman')
mo3.group()
```

Ausgabe:

```plaintext
'Batwowowowoman'
```

## Eine oder mehr Übereinstimmungen mit dem Plus

Das `+` (Plus) bedeutet "eine oder mehr Vorkommen abgleichen". Die dem Plus vorangestellte Gruppe muss mindestens einmal vorkommen:

```python
bat_regex = re.compile(r'Bat(wo)+man')

mo1 = bat_regex.search('Die Abenteuer von Batwoman')
mo1.group()
```

Ausgabe:

```plaintext
'Batwoman'
```

```python
mo2 = bat_regex.search('Die Abenteuer von Batwowowowoman')
mo2.group()
```

Ausgabe:

```plaintext
'Batwowowowoman'
```

```python
mo3 = bat_regex.search('Die Abenteuer von Batman')
mo3 is None
```

Ausgabe:

```plaintext
True
```

## Übereinstimmung spezifischer Wiederholungen mit geschweiften Klammern

Wenn Sie eine Gruppe haben, die Sie eine bestimmte Anzahl von Malen wiederholen möchten, folgen Sie der Gruppe in Ihrem Regex mit einer Zahl in geschweiften Klammern:

```python
ha_regex = re.compile(r'(Ha){3}')

mo1 = ha_regex.search('HaHaHa')
mo1.group()
```

Ausgabe:

```plaintext
'HaHaHa'
```

```python
mo2 = ha_regex.search('Ha')
mo2 is None
```

Ausgabe:

```plaintext
True
```

Anstelle einer Zahl können Sie einen Bereich mit einem Minimum und einem Maximum zwischen den geschweiften Klammern angeben. Zum Beispiel gleicht der Regex (Ha){3,5} 'HaHaHa', 'HaHaHaHa' und 'HaHaHaHaHa' ab.

```python
ha_regex = re.compile(r'(Ha){2,3}')
mo1 = ha_regex.search('HaHaHaHa')
mo1.group()
```

Ausgabe:

```plaintext
'HaHaHa'
```

## Gierige und nicht-gierige Übereinstimmungen

Pythons reguläre Ausdrücke sind standardmäßig gierig: In mehrdeutigen Situationen versuchen sie, die längstmögliche Zeichenfolge abzugleichen. Die nicht-gierige Version der geschweiften Klammern, die die kürzestmögliche Zeichenfolge abgleicht, hat die schließende geschweifte Klammer gefolgt von einem Fragezeichen.

```python
greedy_ha_regex = re.compile(r'(Ha){3,5}')

mo1 = greedy_ha_regex.search('HaHaHaHaHa')
mo1.group()
```

Ausgabe:

```plaintext
'HaHaHaHaHa'
```

```python
non_greedy_ha_regex = re.compile(r'(Ha){3,5}?')
mo2 = non_greedy_ha_regex.search('HaHaHaHaHa')
mo2.group()
```

Ausgabe:

```plaintext
'HaHaHa'
```

## Die findall()-Methode

Die Methode `findall()` gibt die Strings jeder Übereinstimmung im durchsuchten String zurück.

```python
phone_num_regex = re.compile(r'\d\d\d-\d\d\d-\d\d\d\d') # hat keine Gruppen

phone_num_regex.findall('Handy: 415-555-9999 Büro: 212-555-0000')
```

Ausgabe:

```plaintext
['415-555-9999', '212-555-0000']
```

## Eigene Zeichenklassen erstellen

Sie können Ihre eigene Zeichenklasse mit eckigen Klammern definieren. Zum Beispiel gleicht die Zeichenklasse _[aeiouAEIOU]_ jeden Vokal ab, sowohl klein als auch groß.

```python
vowel_regex = re.compile(r'[aeiouAEIOU]')
vowel_regex.findall('Robocop isst Babynahrung. BABYNahrung.')
```

Ausgabe:

```plaintext
['o', 'o', 'o', 'e', 'a', 'a', 'o', 'o', 'A', 'O', 'O']
```

Sie können auch Bereiche von Buchstaben oder Zahlen einschließen, indem Sie einen Bindestrich verwenden. Zum Beispiel gleicht die Zeichenklasse _[a-zA-Z0-9]_ alle Kleinbuchstaben, Großbuchstaben und Zahlen ab.

Indem Sie ein Zirkumflexzeichen (`^`) direkt nach der öffnenden Klammer der Zeichenklasse platzieren, können Sie eine negative Zeichenklasse erstellen, die alle Zeichen abgleicht, die nicht in der Zeichenklasse enthalten sind:

```python
consonant_regex = re.compile(r'[^aeiouAEIOU]')
consonant_regex.findall('Robocop isst Babynahrung. BABYNahrung.')
```

Ausgabe:

```plaintext
['R', 'b', 'c', 'p', ' ', 't', 's', ' ', 'b', 'b', 'y', ' ', 'f', 'd', '.', ' ', 'B', 'B', 'Y', ' ', 'F', 'D', '.']
```

## Die Zeichen Zirkumflex und Dollar

- Sie können auch das Zirkumflexsymbol `^` am Anfang eines Regex verwenden, um anzuzeigen, dass eine Übereinstimmung am Anfang des durchsuchten Textes erfolgen muss.

- Ebenso können Sie ein Dollarzeichen `$` am Ende des Regex platzieren, um anzuzeigen, dass der String mit diesem Regex-Muster enden muss.

- Und Sie können `^` und `$` zusammen verwenden, um anzuzeigen, dass der gesamte String mit dem Regex übereinstimmen muss.

Der reguläre Ausdrucksstring `r'^Hello'` gleicht Strings ab, die mit 'Hello' beginnen:

```python
begins_with_hello = re.compile(r'^Hello')
begins_with_hello.search('Hello world!')
```

Ausgabe:

```plaintext
<_sre.SRE_Match object; span=(0, 5), match='Hello'>
```

```python
begins_with_hello.search('He said hello.') is None
```

Ausgabe:

```plaintext
True
```

Der reguläre Ausdrucksstring `r'\d\$'` gleicht Strings ab, die mit einer numerischen Zeichenfolge von 0 bis 9 enden:

```python
whole_string_is_num = re.compile(r'^\d+$')

whole_string_is_num.search('1234567890')
```

Ausgabe:

```plaintext
<_sre.SRE_Match object; span=(0, 10), match='1234567890'>
```

```python
whole_string_is_num.search('12345xyz67890') is None
```

Ausgabe:

```plaintext
True
```

```python
whole_string_is_num.search('12 34567890') is None
```

Ausgabe:

```plaintext
True
```

## Das Wildcard-Zeichen

Das Zeichen `.` (oder Punkt) in einem regulären Ausdruck gleicht jedes Zeichen außer einem Zeilenumbruch ab:

```python
at_regex = re.compile(r'.at')

at_regex.findall('Die Katze auf der Matte saß auf der flachen Matte.')
```

Ausgabe:

```plaintext
['cat', 'hat', 'sat', 'lat', 'mat']
```

## Alles mit Punkt-Stern abgleichen

```python
name_regex = re.compile(r'First Name: (.*) Last Name: (.*)')

mo = name_regex.search('First Name: Al Last Name: Sweigart')
mo.group(1)
```

Ausgabe:

```plaintext
'Al'
```

```python
mo.group(2)
```

Ausgabe:

```plaintext
'Sweigart'
```

Das `.*` verwendet den gierigen Modus: Es wird immer versuchen, so viel Text wie möglich abzugleichen. Um beliebigen Text nicht-gierig abzugleichen, verwenden Sie den Punkt, Stern und das Fragezeichen (`.*?`). Das Fragezeichen weist Python an, nicht-gierig abzugleichen:

```python
non_greedy_regex = re.compile(r'<.*?>')
mo = non_greedy_regex.search('<Diene dem Mann> zum Abendessen.>.')
mo.group()
```

Ausgabe:

```plaintext
'<Diene dem Mann>'
```

```python
greedy_regex = re.compile(r'<.*>')
mo = greedy_regex.search('<Diene dem Mann> zum Abendessen.>.')
mo.group()
```

Ausgabe:

```plaintext
'<Diene dem Mann> zum Abendessen.>.'
```

## Zeilenumbrüche mit dem Punkt-Zeichen abgleichen

Der Punkt-Stern gleicht alles außer einem Zeilenumbruch ab. Indem Sie `re.DOTALL` als zweites Argument an `re.compile()` übergeben, können Sie das Punkt-Zeichen so ändern, dass es alle Zeichen einschließlich des Zeilenumbruchzeichens abgleicht:

```python
no_newline_regex = re.compile('.*')
no_newline_regex.search('Dienen Sie dem öffentlichen Vertrauen.\nSchützen Sie die Unschuldigen.\nSetzen Sie das Gesetz durch.').group()
```

Ausgabe:

```plaintext
'Serve the public trust.'
```

```python
newline_regex = re.compile('.*', re.DOTALL)
newline_regex.search('Dienen Sie dem öffentlichen Vertrauen.\nSchützen Sie die Unschuldigen.\nSetzen Sie das Gesetz durch.').group()
```

Ausgabe:

```plaintext
'Serve the public trust.\nProtect the innocent.\nUphold the law.'
```

## Groß-/Kleinschreibung-unempfindliches Matching

Um Ihr Regex groß-/kleinschreibung-unempfindlich zu machen, können Sie `re.IGNORECASE` oder `re.I` als zweites Argument an `re.compile()` übergeben:

```python
robocop = re.compile(r'robocop', re.I)

robocop.search('Robocop ist halb Mensch, halb Maschine, ganz Cop.').group()
```

Ausgabe:

```plaintext
'Robocop'
```

```python
robocop.search('ROBOCOP schützt die Unschuldigen.').group()
```

Ausgabe:

```plaintext
'ROBOCOP'
```

```python
robocop.search('Al, warum spricht dein Programmierbuch so viel über robocop?').group()
```

Ausgabe:

```plaintext
'robocop'
```

## Ersetzen von Zeichenfolgen mit der sub()-Methode

Die Methode `sub()` für Regex-Objekte erhält zwei Argumente übergeben:

1. Das erste Argument ist ein String, der alle Übereinstimmungen ersetzt.
2. Das zweite ist der String für den regulären Ausdruck.

Die Methode `sub()` gibt einen String mit den angewendeten Ersetzungen zurück:

```python
names_regex = re.compile(r'Agent \w+')

names_regex.sub('ZENSIERT', 'Agent Alice gab die geheimen Dokumente an Agent Bob.')
```

Ausgabe:

```plaintext
'ZENSIERT gab die geheimen Dokumente an ZENSIERT.'
```

## Verwaltung komplexer Regexes

Um der Funktion `re.compile()` mitzuteilen, dass Leerzeichen und Kommentare innerhalb des regulären Ausdrucksstrings ignoriert werden sollen, kann der "Verbose-Modus" aktiviert werden, indem die Variable `re.VERBOSE` als zweites Argument an `re.compile()` übergeben wird.

Anstatt eines schwer lesbaren regulären Ausdrucks wie diesem:

```python
phone_regex = re.compile(r'((\d{3}|\(\d{3}\))?(\s|-|\.)?\d{3}(\s|-|\.)\d{4}(\s*(ext|x|ext.)\s*\d{2,5})?)')
```

können Sie den regulären Ausdruck über mehrere Zeilen mit Kommentaren wie folgt verteilen:

```python
phone_regex = re.compile(r'''(
    (\d{3}|\(\d{3}\))?            # Vorwahl
    (\s|-|\.)?                    # Trennzeichen
    \d{3}                         # erste 3 Ziffern
    (\s|-|\.)                     # Trennzeichen
    \d{4}                         # letzte 4 Ziffern
    (\s*(ext|x|ext.)\s*\d{2,5})?  # Durchwahl
    )''', re.VERBOSE)
```

## Relevante Links

- <router-link to="/cheatsheet/manipulating-strings">Zeichenfolgen bearbeiten</router-link>
- <router-link to="/cheatsheet/string-formatting">String-Formatierung</router-link>
- <router-link to="/blog/python-data-types">Python Datentypen Blogbeitrag</router-link>
- <router-link to="/builtin/compile">compile()</router-link>
