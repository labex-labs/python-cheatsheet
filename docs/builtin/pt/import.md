---
title: 'Função Embutida Python __import__() - Folha de Dicas Python'
description: 'Esta função é invocada pela instrução import. Pode ser substituída [...] para alterar a semântica da instrução import, mas isso é fortemente desaconselhado, pois geralmente é mais simples usar ganchos de importação [...]. O uso direto de __import__() também é desencorajado em favor de importlib.import_module().'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in Python `__import__`
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#import__">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Esta função é invocada pela instrução import. Ela pode ser substituída [...] para alterar a semântica da instrução import, mas fazer isso é fortemente desencorajado, pois geralmente é mais simples usar ganchos de importação [...]. O uso direto de __import__() também é desencorajado em favor de importlib.import_module().
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `__import__()` é a função subjacente que é chamada pela instrução `import`. Embora seja possível usá-la diretamente, geralmente é desencorajado. Para importar módulos dinamicamente, a função `importlib.import_module()` é a abordagem recomendada.

### Exemplo

Veja como você poderia usar `__import__()` para importar dinamicamente o módulo `math`:

```python
# Importar dinamicamente o módulo 'math'
math_module = __import__('math')

# Agora você pode usá-lo como um import normal
print(math_module.sqrt(4))
```

Saída:

```plaintext
2.0
```

No entanto, a maneira recomendada usando `importlib` é:

```python
import importlib

math_module = importlib.import_module('math')
print(math_module.sqrt(4))
```

Saída:

```plaintext
2.0
```

## Links relevantes

- <router-link :to="'/modules/importlib'">Módulo importlib</router-link>
- <router-link :to="'/cheatsheet/setup-py'">setup.py</router-link>
- <router-link :to="'/blog/python-projects-with-poetry-and-vscode-part-1'">Projetos Python com Poetry e VS Code (Parte 1)</router-link>
- <router-link :to="'/builtin/globals'">globals()</router-link>
- <router-link :to="'/builtin/locals'">locals()</router-link>
