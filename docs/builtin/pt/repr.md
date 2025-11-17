---
title: 'Função Embutida Python repr() - Guia Rápido Python'
description: 'Retorna uma string contendo uma representação imprimível de um objeto. Para muitos tipos, esta função tenta retornar uma string que produziria um objeto com o mesmo valor quando passada para eval(); caso contrário, a representação é uma string entre colchetes angulares que contém o nome do tipo do objeto juntamente com informações adicionais, frequentemente incluindo o nome e o endereço do objeto. Uma classe pode controlar o que esta função retorna para suas instâncias definindo um método __repr__().'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in Python repr()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#repr">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retorna uma string contendo uma representação imprimível de um objeto. Para muitos tipos, esta função tenta retornar uma string que produziria um objeto com o mesmo valor quando passada para eval(); caso contrário, a representação é uma string entre colchetes angulares que contém o nome do tipo do objeto juntamente com informações adicionais, muitas vezes incluindo o nome e o endereço do objeto. Uma classe pode controlar o que esta função retorna para suas instâncias definindo um método __repr__().
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `repr()` retorna uma string contendo uma representação imprimível de um objeto. O objetivo de `repr()` é ser inequívoco. Para muitos tipos, `repr()` retorna uma string que pode ser executada por <router-link to="/builtin/eval">eval()</router-link> para criar um objeto idêntico.

Isso é diferente de <router-link to="/builtin/str">str()</router-link>, que se destina a ser legível por humanos.

### Exemplo

```python
import datetime

# Para uma string, repr() adiciona aspas
print(repr("hello"))

# Para um objeto datetime, é inequívoco
now = datetime.datetime.now()
print(repr(now))

# Você pode definir __repr__ para suas próprias classes
class Person:
    def __init__(self, name):
        self.name = name

    def __repr__(self):
        return f"Person(name='{self.name}')"

p = Person("John")
print(repr(p))
```

Saída:

```plaintext
'hello'
datetime.datetime(2023, 10, 27, 10, 0, 0, 123456)
Person(name='John')
```

## Links Relevantes

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: Noções Básicas de OOP</router-link>
- <router-link to="/cheatsheet/debugging">Cheatsheet: Depuração (Debugging)</router-link>
- <router-link to="/cheatsheet/string-formatting">Cheatsheet: Formatação de Strings</router-link>
- <router-link to="/builtin/str">str()</router-link>
- <router-link to="/builtin/ascii">ascii()</router-link>
- <router-link to="/builtin/eval">eval()</router-link>
- <router-link to="/builtin/format">format()</router-link>
