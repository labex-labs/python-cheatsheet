---
title: 'Função Embutida round() do Python - Folha de Dicas Python'
description: 'Retorna o número arredondado para a precisão de ndigits após o ponto decimal. Se ndigits for omitido ou for None, retorna o inteiro mais próximo do seu valor de entrada.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in Python round()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#round">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
   Retorna o número arredondado para a precisão de ndigits após o ponto decimal. Se ndigits for omitido ou for None, retorna o inteiro mais próximo de sua entrada.
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `round()` arredonda um número para um número especificado de casas decimais. Se o número de casas decimais não for especificado, ela arredonda para o inteiro mais próximo.

Note que `round()` usa "arredondar metade para o par" para números terminados em .5, o que significa que arredondará para o inteiro par mais próximo.

### Exemplos

```python
# Arredondar para o inteiro mais próximo
print(round(3.14))
print(round(3.8))

# Arredondar para um número especificado de casas decimais
print(round(3.14159, 2))

# "Arredondar metade para o par"
print(round(2.5))
print(round(3.5))
```

```output
3
4
3.14
2
4
```

## Links relevantes

- <router-link to="/blog/python-data-types">Blog: Tipos de Dados Python</router-link>
- <router-link to="/cheatsheet/string-formatting">Cheatsheet: Formatação de Strings</router-link>
- <router-link to="/builtin/format">format()</router-link>
- <router-link to="/builtin/abs">abs()</router-link>
- <router-link to="/builtin/float">float()</router-link>
- <router-link to="/builtin/int">int()</router-link>
