---
title: 'Função Embutida hash() do Python - Folha de Dicas Python'
description: 'Retorna o valor hash do objeto (se ele tiver um). Valores hash são inteiros. Eles são usados para comparar rapidamente chaves de dicionário durante uma pesquisa em dicionário. Valores numéricos que se comparam como iguais têm o mesmo valor hash (mesmo que sejam de tipos diferentes, como é o caso de 1 e 1.0).'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in hash() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#hash">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retorna o valor hash do objeto (se ele tiver um). Os valores hash são inteiros. Eles são usados para comparar rapidamente as chaves de dicionário durante uma pesquisa em dicionário. Valores numéricos que se comparam como iguais têm o mesmo valor hash (mesmo que sejam de tipos diferentes, como é o caso de 1 e 1.0).
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `hash()` retorna um inteiro que representa o valor hash de um objeto. Isso é usado principalmente por dicionários para procurar chaves rapidamente.

Apenas objetos "hashable" (imutáveis) podem ser passados para `hash()`. Um objeto é hashable se tiver um valor hash que nunca muda durante sua vida útil. Todos os tipos imutáveis nativos do Python (como strings, números e tuplas) são hashable, enquanto contêineres mutáveis (como listas e dicionários) não são.

### Exemplos

```python
# Hash de um inteiro é o próprio inteiro
print(hash(1))
print(hash(1.0))  # 1 e 1.0 são iguais

# Hash de uma string (a saída varia)
print(hash('hello'))

# Hash de uma tupla (a saída varia)
print(hash((1, 2, 3)))

# Tentar fazer o hash de uma lista levantará um TypeError
try:
    hash([1, 2, 3])
except TypeError as e:
    print(e)
```

Saída:

```plaintext
1
1
-1182655621190490452
529344067295497451
unhashable type: 'list'
```

## Links relevantes

- <router-link :to="'/cheatsheet/dictionaries'">Dicionários</router-link>
- <router-link :to="'/builtin/id'">id()</router-link>
- <router-link :to="'/cheatsheet/sets'">Sets</router-link>
- <router-link :to="'/blog/python-sets-what-why-how'">Python Sets: O Quê, Porquê e Como</router-link>
- <router-link :to="'/builtin/frozenset'">frozenset()</router-link>
- <router-link :to="'/builtin/object'">object()</router-link>
