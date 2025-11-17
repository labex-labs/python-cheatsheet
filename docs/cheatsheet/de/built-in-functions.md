---
title: 'Python-Funktionen – Python Spickzettel'
description: 'Der Python-Interpreter verfügt über zahlreiche Funktionen und Typen, die standardmäßig immer verfügbar sind.'
labUrl: 'https://labex.io/de/labs/python-python-built-in-functions-633648?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python Eingebaute Funktionen
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Der Python-Interpreter verfügt über eine Reihe von Funktionen und Typen, die fest eingebaut sind und immer verfügbar sind.

## Python Eingebaute Funktionen

| Funktion                                                             | Beschreibung                                                                                                          |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| <router-link to='/builtin/abs'>abs()</router-link>                   | Gibt den Absolutwert einer Zahl zurück.                                                                               |
| <router-link to='/builtin/aiter'>aiter()</router-link>               | Gibt einen asynchronen Iterator für ein asynchrones iterierbares Objekt zurück.                                       |
| <router-link to='/builtin/all'>all()</router-link>                   | Gibt True zurück, wenn alle Elemente des iterierbaren Objekts wahr sind.                                              |
| <router-link to='/builtin/any'>any()</router-link>                   | Gibt True zurück, wenn irgendein Element des iterierbaren Objekts wahr ist.                                           |
| <router-link to='/builtin/ascii'>ascii()</router-link>               | Gibt eine Zeichenkette mit einer darstellbaren Darstellung eines Objekts zurück.                                      |
| <router-link to='/builtin/bin'>bin()</router-link>                   | Konvertiert eine Ganzzahl in eine Binärzeichenkette.                                                                  |
| <router-link to='/builtin/bool'>bool()</router-link>                 | Gibt einen booleschen Wert zurück.                                                                                    |
| <router-link to='/builtin/breakpoint'>breakpoint()</router-link>     | Wirft Sie in den Debugger an der Aufrufstelle.                                                                        |
| <router-link to='/builtin/bytearray'>bytearray()</router-link>       | Gibt ein neues Array von Bytes zurück.                                                                                |
| <router-link to='/builtin/bytes'>bytes()</router-link>               | Gibt ein neues „bytes“-Objekt zurück.                                                                                 |
| <router-link to='/builtin/callable'>callable()</router-link>         | Gibt True zurück, wenn das Objektargument aufrufbar ist, andernfalls False.                                           |
| <router-link to='/builtin/chr'>chr()</router-link>                   | Gibt die Zeichenkette zurück, die ein Zeichen darstellt.                                                              |
| <router-link to='/builtin/classmethod'>classmethod()</router-link>   | Transformiert eine Methode in eine Klassenmethode.                                                                    |
| <router-link to='/builtin/compile'>compile()</router-link>           | Kompiliert den Quellcode in ein Code- oder AST-Objekt.                                                                |
| <router-link to='/builtin/complex'>complex()</router-link>           | Gibt eine komplexe Zahl mit dem Wert real + imag\*1j zurück.                                                          |
| <router-link to='/builtin/delattr'>delattr()</router-link>           | Löscht das benannte Attribut, sofern das Objekt dies zulässt.                                                         |
| <router-link to='/builtin/dict'>dict()</router-link>                 | Erstellt ein neues Wörterbuch.                                                                                        |
| <router-link to='/builtin/dir'>dir()</router-link>                   | Gibt die Liste der Namen im aktuellen lokalen Gültigkeitsbereich zurück.                                              |
| <router-link to='/builtin/divmod'>divmod()</router-link>             | Gibt ein Zahlenpaar zurück, bestehend aus Quotient und Rest.                                                          |
| <router-link to='/builtin/enumerate'>enumerate()</router-link>       | Gibt ein enumerate-Objekt zurück.                                                                                     |
| <router-link to='/builtin/eval'>eval()</router-link>                 | Wertet einen Ausdruck aus und führt ihn aus.                                                                          |
| <router-link to='/builtin/exec'>exec()</router-link>                 | Diese Funktion unterstützt die dynamische Ausführung von Python-Code.                                                 |
| <router-link to='/builtin/filter'>filter()</router-link>             | Erstellt einen Iterator aus einem iterierbaren Objekt und gibt die Elemente zurück, für die die Funktion True ergibt. |
| <router-link to='/builtin/float'>float()</router-link>               | Gibt eine Gleitkommazahl aus einer Zahl oder Zeichenkette zurück.                                                     |
| <router-link to='/builtin/format'>format()</router-link>             | Konvertiert einen Wert in eine „formatierte“ Darstellung.                                                             |
| <router-link to='/builtin/frozenset'>frozenset()</router-link>       | Gibt ein neues frozenset-Objekt zurück.                                                                               |
| <router-link to='/builtin/getattr'>getattr()</router-link>           | Gibt den Wert des benannten Attributs des Objekts zurück.                                                             |
| <router-link to='/builtin/globals'>globals()</router-link>           | Gibt das Wörterbuch zurück, das den aktuellen Modul-Namensraum implementiert.                                         |
| <router-link to='/builtin/hasattr'>hasattr()</router-link>           | Gibt True zurück, wenn das Objekt das benannte Attribut besitzt.                                                      |
| <router-link to='/builtin/hash'>hash()</router-link>                 | Gibt den Hash-Wert des Objekts zurück.                                                                                |
| <router-link to='/builtin/help'>help()</router-link>                 | Ruft das eingebaute Hilfesystem auf.                                                                                  |
| <router-link to='/builtin/hex'>hex()</router-link>                   | Konvertiert eine Ganzzahl in eine kleingeschriebene Hexadezimalzeichenkette.                                          |
| <router-link to='/builtin/id'>id()</router-link>                     | Gibt die „Identität“ eines Objekts zurück.                                                                            |
| <router-link to='/builtin/input'>input()</router-link>               | Diese Funktion nimmt eine Eingabe entgegen und konvertiert sie in eine Zeichenkette.                                  |
| <router-link to='/builtin/int'>int()</router-link>                   | Gibt ein Ganzzahl-Objekt zurück, das aus einer Zahl oder Zeichenkette konstruiert wurde.                              |
| <router-link to='/builtin/isinstance'>isinstance()</router-link>     | Gibt True zurück, wenn das Objektargument eine Instanz eines Objekts ist.                                             |
| <router-link to='/builtin/issubclass'>issubclass()</router-link>     | Gibt True zurück, wenn Klasse eine Unterklasse von classinfo ist.                                                     |
| <router-link to='/builtin/iter'>iter()</router-link>                 | Gibt ein Iterator-Objekt zurück.                                                                                      |
| <router-link to='/builtin/len'>len()</router-link>                   | Gibt die Länge (die Anzahl der Elemente) eines Objekts zurück.                                                        |
| <router-link to='/builtin/list'>list()</router-link>                 | Ist eher ein veränderbarer Sequenztyp als eine Funktion.                                                              |
| <router-link to='/builtin/locals'>locals()</router-link>             | Aktualisiert und gibt ein Wörterbuch mit der aktuellen lokalen Symboltabelle zurück.                                  |
| <router-link to='/builtin/map'>map()</router-link>                   | Gibt einen Iterator zurück, der die Funktion auf jedes Element des iterierbaren Objekts anwendet.                     |
| <router-link to='/builtin/max'>max()</router-link>                   | Gibt das größte Element in einem iterierbaren Objekt zurück.                                                          |
| <router-link to='/builtin/min'>min()</router-link>                   | Gibt das kleinste Element in einem iterierbaren Objekt zurück.                                                        |
| <router-link to='/builtin/next'>next()</router-link>                 | Ruft das nächste Element aus dem Iterator ab.                                                                         |
| <router-link to='/builtin/object'>object()</router-link>             | Gibt ein neues, funktionsloses Objekt zurück.                                                                         |
| <router-link to='/builtin/oct'>oct()</router-link>                   | Konvertiert eine Ganzzahl in eine oktale Zeichenkette.                                                                |
| <router-link to='/builtin/open'>open()</router-link>                 | Öffnet eine Datei und gibt ein entsprechendes Datei-Objekt zurück.                                                    |
| <router-link to='/builtin/ord'>ord()</router-link>                   | Gibt eine Ganzzahl zurück, die den Unicode-Codepunkt eines Zeichens darstellt.                                        |
| <router-link to='/builtin/pow'>pow()</router-link>                   | Gibt Basis hoch exp zurück.                                                                                           |
| <router-link to='/builtin/print'>print()</router-link>               | Gibt Objekte auf den Textstrom aus.                                                                                   |
| <router-link to='/builtin/property'>property()</router-link>         | Gibt ein Eigenschaftsattribut zurück.                                                                                 |
| <router-link to='/builtin/repr'>repr()</router-link>                 | Gibt eine Zeichenkette zurück, die eine darstellbare Darstellung eines Objekts enthält.                               |
| <router-link to='/builtin/reversed'>reversed()</router-link>         | Gibt einen umgekehrten Iterator zurück.                                                                               |
| <router-link to='/builtin/round'>round()</router-link>               | Gibt die Zahl gerundet auf ndigits Nachkommastellen zurück.                                                           |
| <router-link to='/builtin/set'>set()</router-link>                   | Gibt ein neues Set-Objekt zurück.                                                                                     |
| <router-link to='/builtin/setattr'>setattr()</router-link>           | Dies ist das Gegenstück zu getattr().                                                                                 |
| <router-link to='/builtin/slice'>slice()</router-link>               | Gibt ein geschnittenes Objekt zurück, das einen Satz von Indizes darstellt.                                           |
| <router-link to='/builtin/sorted'>sorted()</router-link>             | Gibt eine neue sortierte Liste aus den Elementen des iterierbaren Objekts zurück.                                     |
| <router-link to='/builtin/staticmethod'>staticmethod()</router-link> | Transformiert eine Methode in eine statische Methode.                                                                 |
| <router-link to='/builtin/str'>str()</router-link>                   | Gibt eine str-Version des Objekts zurück.                                                                             |
| <router-link to='/builtin/sum'>sum()</router-link>                   | Addiert start und die Elemente eines iterierbaren Objekts.                                                            |
| <router-link to='/builtin/super'>super()</router-link>               | Gibt ein Proxy-Objekt zurück, das Methodenaufrufe an einen Eltern- oder Geschwisterteil delegiert.                    |
| <router-link to='/builtin/tuple'>tuple()</router-link>               | Ist eher ein unveränderlicher Sequenztyp als eine Funktion.                                                           |
| <router-link to='/builtin/type'>type()</router-link>                 | Gibt den Typ eines Objekts zurück.                                                                                    |
| <router-link to='/builtin/vars'>vars()</router-link>                 | Gibt das dict-Attribut für jedes andere Objekt mit einem dict-Attribut zurück.                                        |
| <router-link to='/builtin/zip'>zip()</router-link>                   | Iteriert parallel über mehrere iterierbare Objekte.                                                                   |
| <router-link to='/builtin/import'>**import**()</router-link>         | Diese Funktion wird durch die import-Anweisung aufgerufen.                                                            |
