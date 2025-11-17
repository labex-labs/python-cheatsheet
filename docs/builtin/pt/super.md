---
title: 'Função Embutida super() em Python - Folha de Dicas Python'
description: 'Retorna um objeto proxy que delega chamadas de método a uma classe pai ou irmã. Isso é útil para acessar métodos herdados que foram substituídos em uma classe.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in super() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#super">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Retorna um objeto proxy que delega chamadas de método a uma classe pai ou irmã do tipo. Isso é útil para acessar métodos herdados que foram substituídos em uma classe.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `super()` é usada para chamar um método de uma classe pai. Isso é particularmente útil em herança quando você deseja estender a funcionalidade de um método do pai sem substituí-lo completamente.

### Exemplo

```python
class Parent:
    def greet(self):
        print("Hello from Parent")

class Child(Parent):
    def greet(self):
        # Call the parent's greet method
        super().greet()
        print("Hello from Child")

c = Child()
c.greet()
```

Saída:

```plaintext
Hello from Parent
Hello from Child
```

## Links relevantes

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: Noções Básicas de OOP</router-link>
- <router-link to="/cheatsheet/decorators">Cheatsheet: Decorators</router-link>
- <router-link to="/cheatsheet/functions">Cheatsheet: Funções</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/isinstance">isinstance()</router-link>
- <router-link to="/builtin/issubclass">issubclass()</router-link>
- <router-link to="/builtin/classmethod">classmethod()</router-link>
- <router-link to="/builtin/staticmethod">staticmethod()</router-link>
- <router-link to="/builtin/property">property()</router-link>
