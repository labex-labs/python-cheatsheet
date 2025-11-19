---
title: 'Função nativa memoryview() do Python - Guia Rápido Python'
description: "Retorna um objeto 'visualização de memória' criado a partir do argumento fornecido. Consulte Visualizações de Memória para mais informações."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in Python memoryview()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#memoryview">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retorna um objeto "memory view" criado a partir do argumento fornecido. Veja Memory Views para mais informações.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `memoryview()` cria um objeto de visualização de memória a partir de um argumento fornecido. Uma visualização de memória permite acessar a memória de outro objeto, como um `<router-link to="/builtin/bytes">bytes</router-link>` ou um objeto `<router-link to="/builtin/bytearray">bytearray</router-link>`, sem fazer uma cópia. Isso é altamente eficiente para dados grandes, pois evita a duplicação de memória.

### Exemplos

Veja como você pode usar `memoryview()`:

```python
# Cria um bytearray
data = bytearray(b'hello world')

# Cria uma visualização de memória dos dados
view = memoryview(data)

# Acessa os dados através da visualização
print(view[0])  # ASCII para 'h'
print(view[6:11])  # uma fatia da memória
print(view[6:11].tobytes())

# Você também pode modificar os dados subjacentes através da visualização
view[0] = 72  # ASCII para 'H'
print(data)
```

```output
104
<memory at 0x...>
b'world'
bytearray(b'Hello world')
```

## Links relevantes

- <router-link to="/blog/python-data-types">Blog: Tipos de Dados Python</router-link>
- <router-link to="/builtin/bytes">bytes()</router-link>
- <router-link to="/builtin/bytearray">bytearray()</router-link>
