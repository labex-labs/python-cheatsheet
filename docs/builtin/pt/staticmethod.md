---
title: 'Função Embutida staticmethod() do Python - Folha de Dicas Python'
description: 'Transforma um método em um método estático.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in staticmethod() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#staticmethod">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Transforma um método em um método estático.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

O decorador `@staticmethod` transforma um método de modo que ele pertença a uma classe, mas não receba a classe ou a instância como primeiro argumento. Isso é útil para criar funções utilitárias que têm uma conexão lógica com uma classe, mas não dependem do estado da classe ou da instância.

Um método estático pode ser chamado tanto na própria classe quanto em uma instância.

### Exemplo

Veja como definir e chamar um método estático:

```python
class MathHelper:
    @staticmethod
    def add(x, y):
        return x + y

# Chamada na classe
result1 = MathHelper.add(5, 3)
print(result1)

# Chamada em uma instância
helper = MathHelper()
result2 = helper.add(10, 20)
print(result2)
```

Saída:

```plaintext
8
30
```

Um método estático não tem acesso à classe (`cls`) ou à instância (`self`). É essencialmente uma função regular com namespace dentro da classe.

## Links relevantes

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: Noções Básicas de OOP</router-link>
- <router-link to="/cheatsheet/decorators">Cheatsheet: Decoradores</router-link>
- <router-link to="/cheatsheet/functions">Cheatsheet: Funções</router-link>
- <router-link to="/builtin/classmethod">classmethod()</router-link>
- <router-link to="/builtin/property">property()</router-link>
