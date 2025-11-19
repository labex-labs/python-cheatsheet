---
title: 'Função Embutida callable() do Python - Folha de Dicas Python'
description: 'Retorna Verdadeiro se o objeto argumento parecer invocável, Falso caso contrário. Se retornar Verdadeiro, ainda é possível que uma chamada falhe, mas se for Falso, chamar o objeto nunca terá sucesso. Note que classes são invocáveis (chamar uma classe retorna uma nova instância); instâncias são invocáveis se sua classe tiver um método __call__().'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in callable() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#callable">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Retorna True se o argumento do objeto parecer invocável, False caso contrário. Se isso retornar True, ainda é possível que uma chamada falhe, mas se for False, chamar object nunca terá sucesso. Note que classes são invocáveis (chamar uma classe retorna uma nova instância); instâncias são invocáveis se sua classe tiver um método __call__().
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

Em Python, a função `callable()` é uma função built-in que pode ser usada para determinar se um objeto é invocável, significando que pode ser invocado como uma função.

Ela retorna `True` se o objeto passado para ela for invocável e `False` caso contrário. Por exemplo, uma função, um método, uma classe, uma função lambda e um gerador são todos objetos invocáveis em Python.

Aqui está um exemplo de como você pode usar a função `callable()`:

```python
def my_function():
    pass

class MyClass:
    def __call__(self):
        pass

x = 5
y = my_function
z = MyClass()
a = lambda: None

print(callable(x))
print(callable(y))
print(callable(z))
print(callable(a))
```

```output
False
True
True
True
```

No exemplo acima, `my_function` é uma função e é invocável, `MyClass` é uma classe e também é invocável porque tem um método `__call__`, `z` é uma instância da classe `MyClass` e também é invocável porque tem um método `__call__` e `a` é uma função lambda que é invocável.

A função `callable()` pode ser útil em situações onde você precisa determinar se um objeto pode ser invocado como uma função, como quando você está trabalhando com callbacks ou outros tipos de ponteiros de função.

## Links relevantes

- <router-link :to="'/builtin/hasattr'">hasattr()</router-link>
- <router-link :to="'/cheatsheet/functions'">Funções</router-link>
- <router-link :to="'/cheatsheet/oop-basics'">Noções Básicas de OOP</router-link>
- <router-link :to="'/builtin/getattr'">getattr()</router-link>
- <router-link :to="'/builtin/isinstance'">isinstance()</router-link>
