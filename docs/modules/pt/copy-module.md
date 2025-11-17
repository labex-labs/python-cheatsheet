---
title: 'Módulo Copy do Python - Folha de Dicas Python'
description: 'O Módulo Copy oferece funções para copiar diversos elementos como listas, objetos e arrays. Permite criar cópias rasas (shallow) e cópias profundas (deep).'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Copy do Python
</base-title>

O Módulo Copy é um conjunto de funções relacionadas à cópia de diferentes elementos de uma lista, objetos, arrays, etc. Pode ser usado para criar cópias rasas (shallow copies) bem como cópias profundas (deep copies).

<base-disclaimer>
  <base-disclaimer-title>
    Da documentação do Python 3 <a target="_blank" href="https://docs.python.org/3/library/copy.html">documentação</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    As instruções de atribuição em Python não copiam objetos, elas criam ligações entre um alvo e um objeto. Para coleções que são mutáveis ou contêm itens mutáveis, uma cópia é às vezes necessária para que se possa alterar uma cópia sem alterar a outra. Este módulo fornece operações genéricas de cópia <b>rasa</b> (shallow) e <b>profunda</b> (deep).
  </base-disclaimer-content>
</base-disclaimer>

## Operações de cópia rasa (Shallow copy operations)

A cópia rasa constrói um novo objeto composto e então (na medida do possível) insere referências nele aos objetos encontrados no original.

copy.copy(x)
Retorna uma cópia rasa de x.

```python
import copy
a = [[1],[2],[3]]
# Cria cópia rasa (listas aninhadas ainda são referenciadas)
b = copy.copy(a)

a
```

Output:

```plaintext
[[1], [2], [3]]
```

```python
b
```

Output:

```plaintext
[[1], [2], [3]]
```

### Sem importar o módulo copy você não pode usá-lo

Output:

```plaintext
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'copy' is not defined
```

## Operações de cópia profunda (Deep copy operations)

Uma cópia profunda constrói um novo objeto composto e então, recursivamente, insere cópias nele dos objetos encontrados no original.

copy.deepcopy(x[, memo])
Retorna uma cópia profunda de x.

```python
import copy
a = [[1],[2],[3]]
# Cria cópia profunda (cópia completamente independente)
b = copy.deepcopy(a)

# Modifica o original
a[0][0] = 0
a[1] = None

a
```

Output:

```plaintext
[[0], None, [3]]
```

```python
b
```

Output:

```plaintext
[[1], [2], [3]]
```

## Links relevantes

- <router-link to="/cheatsheet/oop-basics">Cheatsheet: Noções Básicas de OOP</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Cheatsheet: Listas e Tuplas</router-link>
- <router-link to="/cheatsheet/dictionaries">Cheatsheet: Dicionários</router-link>
- <router-link to="/blog/python-data-types">Blog: Tipos de Dados do Python</router-link>
- <router-link to="/builtin/object">object()</router-link>
- <router-link to="/builtin/list">list()</router-link>
- <router-link to="/builtin/dict">dict()</router-link>
- <router-link to="/builtin/slice">slice()</router-link>
