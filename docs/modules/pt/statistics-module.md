---
title: "Módulo Statistics do Python - Folha de Referência Python"
description: "O módulo `statistics` fornece ferramentas simples para calcular médias, medianas e outras estatísticas descritivas."
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Statistics do Python
</base-title>

O módulo `statistics` fornece ferramentas simples para calcular médias, medianas e outras estatísticas descritivas.

O módulo foi adicionado no Python 3.4.

```python
import statistics
```

Use `statistics` quando você precisar de cálculos comuns para uma pequena lista de números. Para análise avançada de dados, bibliotecas como NumPy e pandas são mais poderosas, mas não fazem parte da biblioteca padrão.

## mean()

```python
import statistics

scores = [80, 90, 95, 100]
print(statistics.mean(scores))
```

```output
91.25
```

`fmean` retorna uma média em ponto flutuante e costuma ser mais rápida para dados numéricos:

```python
import statistics

print(statistics.fmean([1, 2, 3]))
```

```output
2.0
```

## median()

```python
import statistics

values = [1, 3, 5, 100]
print(statistics.median(values))
```

```output
4.0
```

## mode()

`mode` retorna o valor mais comum.

```python
import statistics

print(statistics.mode(['python', 'python', 'rust']))
```

```output
python
```

Se houver mais de um valor comum, `multimode` retorna todos:

```python
import statistics

print(statistics.multimode(['red', 'blue', 'red', 'blue']))
```

```output
['red', 'blue']
```

## stdev()

`stdev` calcula o desvio padrão amostral.

```python
import statistics

print(round(statistics.stdev([2, 4, 4, 4, 5, 5, 7, 9]), 2))
```

```output
2.14
```

## Lidando com dados vazios

A maioria das funções levanta `StatisticsError` para entrada vazia.

```python
import statistics

try:
    statistics.mean([])
except statistics.StatisticsError as error:
    print(type(error).__name__)
```

```output
StatisticsError
```

## Links relacionados

- <router-link to="/modules/math-module">Módulo: math</router-link>
- <router-link to="/cheatsheet/lists-and-tuples">Folha de Referência: Listas e tuplas</router-link>
- <router-link to="/builtin/round">round()</router-link>
