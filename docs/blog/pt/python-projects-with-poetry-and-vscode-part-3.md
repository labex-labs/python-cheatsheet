---
title: 'Projetos Python com Poetry e VSCode Parte 3 - Guia Rápido Python'
description: 'Finalmente, nesta terceira parte, escreveremos uma biblioteca de exemplo, construiremos nosso projeto com *Poetry* e o publicaremos no PyPI.'
date: 'May 21, 2019'
updated: 'July 3, 2022'
tags: 'python, intermediate, vscode, packaging'
socialImage: '/blog/poetry-3.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Projetos Python com Poetry e VSCode Parte 3 - Guia Rápido Python"
    description: "Finalmente, nesta terceira parte, escreveremos uma biblioteca de exemplo, construiremos nosso projeto com *Poetry* e o publicaremos no PyPI."
    date: "May 21, 2019"
    updated: "July 3, 2022"
    tags: "python, intermediate, vscode, packaging"
    socialImage: "/blog/poetry-3.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="Projetos Python com Poetry e VSCode Parte 3 - Guia Rápido Python" />

No <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">primeiro artigo</router-link> começamos um novo projeto, criamos um Ambiente Virtual e gerenciamos as dependências. Na <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">segunda parte</router-link>, adicionamos nosso Ambiente Virtual ao [VSCode](https://code.visualstudio.com/) e integramos nossas dependências de desenvolvimento.

E finalmente, nesta terceira e última parte, faremos:

- Escrever uma biblioteca de exemplo.
- Construir nosso projeto com _Poetry_.
- Publicá-lo no _PyPI_.

## Comandos do Poetry

Aqui está uma tabela com os comandos usados nesta série, bem como suas descrições. Para uma lista completa, leia a [Documentação do Poetry](https://poetry.eustace.io/docs/cli/).

| Comando                             | Descrição                                                    |
| ----------------------------------- | ------------------------------------------------------------ |
| `poetry new [nome-do-pacote]`       | Inicia um novo Projeto Python.                               |
| `poetry init`                       | Cria um arquivo _pyproject.toml_ interativamente.            |
| `poetry install`                    | Instala os pacotes dentro do arquivo _pyproject.toml_.       |
| `poetry add [nome-do-pacote]`       | Adiciona um pacote a um Ambiente Virtual.                    |
| `poetry add -D [nome-do-pacote]`    | Adiciona um pacote de desenvolvimento a um Ambiente Virtual. |
| `poetry remove [nome-do-pacote]`    | Remove um pacote de um Ambiente Virtual.                     |
| `poetry remove -D [nome-do-pacote]` | Remove um pacote de desenvolvimento de um Ambiente Virtual.  |
| `poetry update`                     | Obtém as versões mais recentes das dependências              |
| `poetry shell`                      | Inicia um shell dentro do ambiente virtual.                  |
| `poetry build`                      | Constrói os arquivos de origem e wheels.                     |
| `poetry publish`                    | Publica o pacote no Pypi.                                    |
| `poetry publish --build`            | Constrói e publica um pacote.                                |
| `poetry self:update`                | Atualiza o poetry para a versão estável mais recente.        |

## O Projeto

Você pode baixar o código-fonte do [GitHub](https://github.com/wilfredinni/how-long) se desejar, mas como mencionado anteriormente, este será um decorador simples que imprimirá no console quanto tempo leva para uma função ser executada.

Funcionará assim:

```python
from how_long import timer

@timer
def test_function():
    [i for i in range(10000)]

test_function()
# Execution Time: 955 ms.
```

E o diretório do projeto será o seguinte:

```
how-long
├── how_long
│   ├── how_long.py
│   └── __init__.py
├── how_long.egg-info
│   ├── dependency_links.txt
│   ├── PKG-INFO
│   ├── requires.txt
│   ├── SOURCES.txt
│   └── top_level.txt
├── LICENSE
├── poetry.lock
├── pyproject.toml
├── README.rst
└── tests
    ├── __init__.py
    └── test_how_long.py
```

Antes de começarmos, verifique as atualizações do pacote com o comando `poetry update`:

![poetry update](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/May/poetry_vscode_p3/img/poetry_update.png)

Adicione uma breve descrição para o projeto no `README.rst`:

```
how_long
========

Simple Decorator to measure a function execution time.

Example
_______

.. code-block:: python

    from how_long import timer


    @timer
    def some_function():
        return [x for x in range(10_000_000)]
```

Navegue até `how_long/how_long.py`:

```python
# how_long.py
from functools import wraps

import pendulum


def timer(function):
    """
    Simple Decorator to measure a function execution time.
    """

    @wraps(function)
    def function_wrapper():
        start = pendulum.now()
        function()
        elapsed_time = pendulum.now() - start
        print(f"Execution Time: {elapsed_time.microseconds} ms.")

    return function_wrapper
```

Em `how_long/__init__.py`:

```python
from .how_long import timer

__version__ = "0.1.1"
```

E finalmente, o arquivo `tests/test_how_long.py`:

```python
from how_long import __version__
from how_long import timer


def test_version():
    assert __version__ == "0.1.1"


def test_wrap():
    @timer
    def wrapped_function():
        return

    assert wrapped_function.__name__ == "wrapped_function"
```

Você pode agora usar `poetry install` no seu terminal para instalar e provar seu pacote localmente. Ative seu ambiente virtual se ainda não o fez e no shell interativo do Python:

```python
>>> from how_long import timer
>>>
>>> @timer
... def test_function():
...     [i for i in range(10000)]
...
>>> test_function()
Execution Time: 705 ms.
```

[Execute os testes](https://www.pythoncheatsheet.org/blog/python-projects-with-poetry-and-vscode-part-2#Pytest) e se tudo estiver correto, siga em frente.

## Construção e Publicação

Finalmente, chegou a hora de tornar este projeto disponível para o mundo! Certifique-se de ter uma conta no [PyPI](https://pypi.org). Lembre-se de que o nome do pacote deve ser exclusivo; se tiver dúvidas, use a [busca](https://pypi.org/search/?q=) para verificar.

### Construção (Build)

O comando `poetry build` constrói os arquivos de origem e [wheels](https://pythonwheels.com/) que serão posteriormente carregados como a fonte do projeto:

![poetry build](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/May/poetry_vscode_p3/img/poetry_build.png)

O diretório _how_long.egg-info_ será criado.

### Publicação (Publish)

Este comando publica o pacote no _PyPI_ e o registra automaticamente antes de fazer o upload se for a primeira vez que é enviado:

![poetry publish](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/May/poetry_vscode_p3/img/poetry_publish.png)

> Você também pode construir e publicar seu projeto com `$ poetry publish --build`.

Insira suas credenciais e, se tudo estiver ok, [navegue](https://pypi.org/project/how-long/) pelo seu projeto, e você verá algo como isto:

![pipy how-long](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/May/poetry_vscode_p3/img/pypi.png)

Agora podemos informar aos outros que eles podem usar `pip install how-long` de qualquer máquina, em qualquer lugar!

## Conclusão

Lembro-me da primeira vez que tentei publicar um pacote, e foi um pesadelo. Eu estava apenas começando em Python e tive que gastar algumas "poucas horas" tentando entender o que era o arquivo `setup.py` e como usá-lo. No final, acabei com vários arquivos: um `Makefile`, um `MANIFEST.in`, um `requirements.txt` e um `test_requirements.txt`. É por isso que as palavras de [Sébastien Eustace](https://github.com/sdispater), o criador do [Poetry](https://github.com/sdispater/poetry), fizeram muito sentido para mim:

> Packaging and dependency management in Python are rather convoluted and hard to understand for newcomers. Even for seasoned developers it might be cumbersome at times to create all files needed in a Python project: `setup.py`, `requirements.txt`, `setup.cfg`, `MANIFEST.in` and the newly added `Pipfile`.
>
> So I wanted a tool that would limit everything to a single configuration file to do: dependency management, packaging and publishing.
>
> It takes inspiration in tools that exist in other languages, like `composer` (PHP) or `cargo` (Rust).
>
> And, finally, there is no reliable tool to properly resolve dependencies in Python, so I started `poetry` to bring an exhaustive dependency resolver to the Python community.

Poetry não é [de forma alguma perfeito](https://frostming.com/2019/01-04/pipenv-poetry#what-about-poetry), mas, ao contrário de outras ferramentas, ele realmente faz o que promete.
