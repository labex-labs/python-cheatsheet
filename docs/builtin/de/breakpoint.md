---
title: 'Python breakpoint()-Funktion – Python Spickzettel'
description: 'Diese Funktion startet den Debugger an der Aufrufstelle. Sie ruft sys.breakpointhook() auf und übergibt Argumente und Schlüsselwortargumente direkt weiter. Standardmäßig ruft sys.breakpointhook() pdb.set_trace() ohne Argumente auf. Dies dient der Bequemlichkeit, um den Debugger zu starten, ohne explizit pdb importieren oder viel Code schreiben zu müssen. sys.breakpointhook() kann jedoch auf eine andere Funktion gesetzt werden, sodass breakpoint() automatisch diese Funktion aufruft und Sie in den gewünschten Debugger gelangen.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python breakpoint() eingebaute Funktion
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Aus der <a target="_blank" href="https://docs.python.org/3/library/functions.html#breakpoint">Python 3 Dokumentation</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Diese Funktion lässt Sie an der Aufrufstelle in den Python-Debugger [...].
    <br/>
    Python breakpoint() ruft den Python-Debugger an einer bestimmten Zeile auf
  </base-disclaimer-content>
</base-disclaimer>

## Einführung

Die in Python 3.7 eingeführte Funktion `breakpoint()` bietet eine einfache Möglichkeit, an einer bestimmten Stelle in Ihrem Code in den Python-Debugger (`pdb`) einzusteigen. Sie ist eine bequeme Alternative zur manuellen Importierung von `pdb` und dem Aufruf von `pdb.set_trace()`. Diese Funktion vereinfacht den Debugging-Prozess, indem sie es Ihnen ermöglicht, Variablen zu inspizieren und Ihren Code interaktiv schrittweise durchzugehen.

## Beispiel

Hier sehen Sie, wie Sie `breakpoint()` verwenden können, um die Ausführung anzuhalten und Variablen zu inspizieren:

```python
def calculate_sum(a, b):
    result = a + b
    # Wir möchten das 'result' überprüfen, bevor wir es zurückgeben
    breakpoint()
    return result

# Wenn Sie dies ausführen, startet der Debugger direkt nachdem 'result' berechnet wurde
# Sie können dann 'result' in der (Pdb) Eingabeaufforderung eingeben, um seinen Wert zu sehen
# Um die Ausführung fortzusetzen, geben Sie 'c' oder 'continue' ein
final_sum = calculate_sum(10, 20)
print(final_sum)
```

```output
(Pdb) result
30
(Pdb) c
30
```

## Relevante Links

- <router-link to="/cheatsheet/debugging">Cheatsheet: Debugging</router-link>
- <router-link to="/cheatsheet/control-flow">Cheatsheet: Kontrollfluss</router-link>
- <router-link to="/builtin/print">print()</router-link>
- <router-link to="/builtin/input">input()</router-link>
- <router-link to="/builtin/eval">eval()</router-link>
- <router-link to="/builtin/exec">exec()</router-link>
- <router-link to="/builtin/globals">globals()</router-link>
- <router-link to="/builtin/locals">locals()</router-link>
