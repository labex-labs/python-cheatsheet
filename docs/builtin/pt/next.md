---
title: 'Função Embutida next() do Python - Folha de Dicas Python'
description: "Recupera o próximo item do iterador chamando seu método __next__(). Se 'default' for fornecido, ele é retornado se o iterador estiver esgotado, caso contrário, StopIteration é levantada."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in next() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#next">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Recupera o próximo item do iterador chamando seu método __next__(). Se default for fornecido, ele será retornado se o iterador estiver esgotado, caso contrário, StopIteration será levantada.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `next()` recupera o próximo item de um iterador. Se o iterador estiver esgotado, ela levanta uma exceção `StopIteration`.

Você também pode fornecer um valor padrão a ser retornado se o iterador estiver esgotado, o que evita a exceção `StopIteration`.

### Exemplos

**Usando `next()` com um iterador:**

```python
my_list = [1, 2]
my_iter = iter(my_list)

print(next(my_iter))
print(next(my_iter))

try:
    print(next(my_iter))
except StopIteration:
    print("Iterator is exhausted")
```

Saída:

```plaintext
1
2
Iterator is exhausted
```

**Usando `next()` com um valor padrão:**

```python
my_iter = iter([1])
print(next(my_iter, "default"))
print(next(my_iter, "default"))
```

Saída:

```plaintext
1
default
```

Mais exemplos:

```python
i = iter([1, 2, 3])
print(next(i))
print(next(i))
print(next(i))
```

Saída:

```plaintext
1
2
3
```

## Links relevantes

- <router-link to="/cheatsheet/control-flow">Cheatsheet: Controle de Fluxo (laços for)</router-link>
- <router-link to="/modules/itertools-module">Módulo: itertools</router-link>
- <router-link to="/builtin/iter">iter()</router-link>
- <router-link to="/builtin/map">map()</router-link>
- <router-link to="/builtin/filter">filter()</router-link>
- <router-link to="/builtin/zip">zip()</router-link>
