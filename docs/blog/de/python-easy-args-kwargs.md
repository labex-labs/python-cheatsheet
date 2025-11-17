---
title: 'Python *args und **kwargs einfach erklärt - Python Spickzettel'
description: '*args und **kwargs wirken einschüchternd, sind aber leicht zu verstehen und verleihen Ihren Funktionen enorme Flexibilität.'
date: 'March 08, 2019'
updated: 'July 1, 2022'
tags: 'python, intermediate'
socialImage: '/blog/kwargs.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Python *args und **kwargs einfach erklärt - Python Spickzettel"
    description: "*args und **kwargs wirken einschüchternd, sind aber leicht zu verstehen und verleihen Ihren Funktionen enorme Flexibilität."
    date: "March 08, 2019"
    updated: "July 1, 2022"
    tags: "python, intermediate"
    socialImage: "/blog/kwargs.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="Python \*args und \*\*kwargs einfach erklärt - Python Spickzettel" />

Ich weiß nicht, wie es Ihnen geht, aber jedes Mal, wenn ich eine Funktion mit `*args` und `**kwargs` als Parameter sah, bekam ich ein wenig Angst. Ich habe sie sogar bei Backend-Arbeiten mit Django „verwendet“, ohne etwas davon zu verstehen. Wenn Sie wie ich ein autodidaktischer Entwickler sind, weiß ich, dass Sie das auch schon erlebt haben.

Vor ein paar Monaten beschloss ich, faul zu sein und mich darüber zu informieren. Zu meiner Überraschung waren sie leicht zu verstehen, wenn man mit dem Interpreter spielte, aber nicht so leicht, wenn man darüber las. Ich habe diesen Beitrag geschrieben, um zu erklären, wie [args und kwargs](https://www.pythoncheatsheet.org/#args-and-kwargs) jemand sie mir hätte erklären sollen.

## Grundlagen

Das Erste, was Sie wissen müssen, ist, dass `*args` und `**kwargs` es Ihnen ermöglichen, eine undefinierte Anzahl von `arguments` und `keywords` beim Aufruf einer [Funktion](https://www.pythoncheatsheet.org/#Functions) zu übergeben:

```python
def some_function(*args, **kwargs):
    pass

# Aufruf von some_function mit einer beliebigen Anzahl von Argumenten
some_function(arg1, arg2, arg3)

# Aufruf von some_function mit einer beliebigen Anzahl von Schlüsselwörtern
some_function(key1=arg1, key2=arg2, key3=arg3)

# Aufruf beider, Argumente und Schlüsselwörter
some_function(arg, key1=arg1)

# oder keine
some_function()
```

Zweitens sind die Wörter `args` und `kwargs` Konventionen. Das bedeutet, dass sie nicht vom Interpreter auferlegt werden, sondern von der Python-Community als gute Praxis angesehen werden:

```python
# Diese Funktion würde einwandfrei funktionieren
def some_function(*arguments, **keywords):
    pass
```

<base-warning>
  <base-warning-title>
    Ein Hinweis zu Konventionen
  </base-warning-title>
  <base-warning-content>
    Auch wenn die obige Funktion funktioniert, tun Sie es nicht. Konventionen dienen dazu, Ihnen zu helfen, lesbaren Code für sich selbst und jeden zu schreiben, der an Ihrem Projekt interessiert sein könnte.
    Andere Konventionen umfassen die 4-Leerzeichen-Einrückung, Kommentare und Imports. Das Lesen des <a target="_blank" href="https://www.python.org/dev/peps/pep-0008/">PEP 8 – Style Guide for Python Code</a> wird dringend empfohlen.
  </base-warning-content>
</base-warning>

Wie weiß Python also, dass unsere Funktion mehrere Argumente und Schlüsselwörter akzeptieren soll? Ja, die Antworten sind die Operatoren `*` und `**`.

Nachdem wir nun die Grundlagen behandelt haben, arbeiten wir damit 👊.

## args

Wir wissen jetzt, wie man mehrere Argumente mithilfe von `*args` als Parameter an unsere Funktionen übergibt, aber wie arbeiten wir damit? Es ist einfach: Alle Argumente befinden sich in der `args`-Variable als [Tupel](https://www.pythoncheatsheet.org/#Tuple-Data-Type):

```python
def some_function(*args):
    print(f'Arguments passed: {args} as {type(args)}')


some_function('arg1', 'arg2', 'arg3')
# Arguments passed: ('arg1', 'arg2', 'arg3') as <class 'tuple'>
```

Wir können darüber iterieren:

```python
def some_function(*args):
    for a in args:
        print(a)


some_function('arg1', 'arg2', 'arg3')
# arg1
# arg2
# arg3
```

Greifen Sie mit einem Index auf die Elemente zu:

```python
def some_function(*args):
    print(args[1])


some_function('arg1', 'arg2', 'arg3')  # arg2
```

Slicing:

```python
def some_function(*args):
    print(args[0:2])


some_function('arg1', 'arg2', 'arg3')
# ('arg1', 'arg2')
```

Alles, was Sie mit einem [Tupel](https://www.pythoncheatsheet.org/#Tuple-Data-Type) tun können, können Sie mit `args` tun.

## kwargs

Während Argumente in der `args`-Variablen enthalten sind, befinden sich Schlüsselwörter in `kwargs`, diesmal jedoch als [Wörterbuch](https://www.pythoncheatsheet.org/#Dictionaries-and-Structuring-Data), wobei der Schlüssel das Schlüsselwort ist:

```python
def some_function(**kwargs):
    print(f'keywords: {kwargs} as {type(kwargs)}')


some_function(key1='arg1', key2='arg2', key3='arg3')
# keywords: {'key1': 'arg1', 'key2': 'arg2', 'key3': 'arg3'} as <class 'dict'>
```

Auch hier können wir mit `kwargs` dasselbe tun, was wir mit jedem [Wörterbuch](https://www.pythoncheatsheet.org/#Dictionaries-and-Structuring-Data) tun würden.

Iterieren über:

```python
def some_function(**kwargs):
    for key, value in kwargs.items():
        print(f'{key}: {value}')


some_function(key1='arg1', key2='arg2', key3='arg3')
# key1: arg1
# key2: arg2
# key3: arg3
```

Verwenden Sie die `get()`-Methode:

```python
def some_function(key, **kwargs):
    print(kwargs.get(key))


some_function('key3', key1='arg1', key2='arg2', key3='arg3')
# arg3
```

Und vieles [mehr](https://www.pythoncheatsheet.org/#Dictionaries-and-Structuring-Data) =).

## Fazit

`*args` und `**kwargs` mögen beängstigend erscheinen, aber die Wahrheit ist, dass sie nicht so schwer zu verstehen sind und die Macht haben, Ihren Funktionen viel Flexibilität zu verleihen. Wenn Sie sich mit [Tupeln](https://www.pythoncheatsheet.org/#Tuple-Data-Type) und [Wörterbüchern](https://www.pythoncheatsheet.org/#Dictionaries-and-Structuring-Data) auskennen, sind Sie bereit.

Möchten Sie mit args und kwargs spielen? [Dies](https://mybinder.org/v2/gh/wilfredinni/python-cheatsheet/master?filepath=jupyter_notebooks) ist ein Online-Jupyter-Notebook zum Ausprobieren.

Einige Beispiele verwenden `f-strings`, eine relativ neue Methode zum Formatieren von Strings in Python 3.6+. [Hier](https://www.pythoncheatsheet.org/#Formatted-String-Literals-or-f-strings) können Sie mehr darüber lesen.
