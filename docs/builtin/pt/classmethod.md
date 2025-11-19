---
title: 'Função Embutida classmethod() em Python - Guia Rápido de Python'
description: 'Transforma um método em um método de classe. Um método de classe recebe a classe como primeiro argumento implícito, assim como um método de instância recebe a instância.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in classmethod() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#classmethod">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Transforma um método em um método de classe. Um método de classe recebe a classe como um primeiro argumento implícito, assim como um método de instância recebe a instância.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

Um `classmethod` é um método que está vinculado à classe e não à instância da classe. Ele recebe a própria classe como seu primeiro argumento, convencionalmente nomeado `cls`. Isso contrasta com um método de instância regular, que recebe a instância como seu primeiro argumento (`self`).

Eles são frequentemente usados para métodos de fábrica que criam instâncias da classe de uma maneira específica.

## Exemplo

Aqui está um caso de uso comum: criar um método de fábrica que pode instanciar a classe a partir de um formato de dados diferente, como um dicionário.

```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    @classmethod
    def from_dict(cls, data):
        # Este é um método de fábrica que cria uma instância de Person a partir de um dicionário
        return cls(data['name'], data['age'])

    def display(self):
        print(f"Name: {self.name}, Age: {self.age}")

# Dados para uma nova pessoa
person_data = {'name': 'John', 'age': 30}

# Cria uma instância de Person usando o método de classe
p = Person.from_dict(person_data)

p.display()
```

```output
Name: John, Age: 30
```

## Links relevantes

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: Noções Básicas de OOP</router-link>
- <router-link to="/cheatsheet/decorators">Cheatsheet: Decorators</router-link>
- <router-link to="/cheatsheet/functions">Cheatsheet: Funções</router-link>
- <router-link to="/builtin/staticmethod">staticmethod()</router-link>
- <router-link to="/builtin/property">property()</router-link>
- <router-link to="/builtin/object">object()</router-link>
