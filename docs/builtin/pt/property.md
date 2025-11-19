---
title: 'Função Embutida property() do Python - Folha de Dicas Python'
description: 'Retorna um atributo de propriedade.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in property() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#property">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retorna um atributo de propriedade.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `property()` é usada para criar atributos de propriedade. Um atributo de propriedade é um tipo especial de atributo que possui métodos getter, setter e delete. Isso permite que você adicione lógica à obtenção, definição ou exclusão do valor de um atributo.

É mais comum usar o decorador `@property`, que é uma maneira mais conveniente de usar `property()`.

### Exemplo

Aqui está um exemplo de como usar `property()` para criar um atributo somente leitura:

```python
class Person:
    def __init__(self, name):
        self._name = name

    def get_name(self):
        print("Obtendo nome")
        return self._name

    # Cria uma propriedade
    name = property(get_name)

p = Person("John")
print(p.name)  # Isso chama get_name()
```

```output
Obtendo nome
John
```

Nota: `p.name = "Jane"` levantaria um AttributeError porque não há um setter.

E aqui está a maneira mais comum de fazer isso com o decorador `@property`:

```python
class Person:
    def __init__(self, name):
        self._name = name

    @property
    def name(self):
        print("Obtendo nome")
        return self._name

p = Person("John")
print(p.name)
```

```output
Obtendo nome
John
```

## Links relevantes

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: Noções Básicas de OOP</router-link>
- <router-link to="/cheatsheet/decorators">Cheatsheet: Decorators</router-link>
- <router-link to="/cheatsheet/dataclasses">Cheatsheet: Dataclasses</router-link>
- <router-link to="/builtin/getattr">getattr()</router-link>
- <router-link to="/builtin/setattr">setattr()</router-link>
- <router-link to="/builtin/delattr">delattr()</router-link>
