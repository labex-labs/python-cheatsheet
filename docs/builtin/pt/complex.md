---
title: 'Função Embutida complex() do Python - Folha de Dicas Python'
description: 'Retorna um número complexo com o valor real + imag*1j ou converte uma string ou número para um número complexo. [...] Cada argumento pode ser qualquer tipo numérico (incluindo complexo). Se imag for omitido, o padrão é zero e o construtor serve como uma conversão numérica como int e float. Se ambos os argumentos forem omitidos, retorna 0j.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in complex() do Python
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#complex">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retorna um número complexo com o valor real + imag*1j ou converte uma string ou número para um número complexo. [...] Cada argumento pode ser qualquer tipo numérico (incluindo complexo). Se imag for omitido, ele será padrão para zero e o construtor servirá como uma conversão numérica como <router-link to="/builtin/int">`int()`</router-link> e <router-link to="/builtin/float">`float()`</router-link>. Se ambos os argumentos forem omitidos, retorna 0j.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `complex()` cria um número complexo. Ela pode receber uma parte real e uma parte imaginária como argumentos. Se apenas um argumento for fornecido, ele é considerado a parte real, e a parte imaginária é zero.

## Exemplos

```python
# Cria um número complexo com partes real e imaginária
print(complex(3, 4))

# Cria um número complexo com apenas uma parte real
print(complex(5))

# Cria um número complexo a partir de uma string
print(complex("2+3j"))
```

```output
(3+4j)
(5+0j)
(2+3j)
```

## Links relevantes

- <router-link to="/blog/python-data-types">Blog: Tipos de Dados do Python</router-link>
- <router-link to="/builtin/int">int()</router-link>
- <router-link to="/builtin/float">float()</router-link>
- <router-link to="/builtin/abs">abs()</router-link>
- <router-link to="/builtin/pow">pow()</router-link>
