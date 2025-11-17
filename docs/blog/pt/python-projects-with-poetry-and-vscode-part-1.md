---
title: 'Projetos Python com Poetry e VSCode Parte 1 - Folha de Dicas Python'
description: 'Usaremos o Poetry para iniciar um projeto simples, gerenciar dependências e publicá-lo no PyPI. Também integraremos Pytest, Black e Flake8 no VSCode diretamente de um Ambiente Virtual.'
date: 'April 12, 2019'
updated: 'July 3, 2022'
tags: 'python, intermediate, vscode, packaging'
socialImage: '/blog/poetry-1.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Projetos Python com Poetry e VSCode Parte 1 - Folha de Dicas Python"
    description: "Usaremos o Poetry para iniciar um projeto simples, gerenciar dependências e publicá-lo no PyPI. Também integraremos Pytest, Black e Flake8 no VSCode diretamente de um Ambiente Virtual."
    date: "April 12, 2019"
    updated: "July 3, 2022"
    tags: "python, intermediate, vscode, packaging"
    socialImage: "/blog/poetry-1.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="Projetos Python com Poetry e VSCode Parte 1 - Folha de Dicas Python" />

Um Ambiente Virtual é uma instalação Python isolada, projetada para evitar preencher nossa instalação base com bibliotecas que poderemos usar para apenas um projeto. Também nos permite gerenciar múltiplas versões do mesmo pacote em diferentes projetos. Poderíamos, por exemplo, precisar do Django 4.1 para um e 1.9 para o outro.

<base-disclaimer>
  <base-disclaimer-title>
    Python Poetry
  </base-disclaimer-title>
  <base-disclaimer-content>
    Poetry é uma ferramenta para lidar com a instalação de dependências, bem como a construção e empacotamento de pacotes Python. Ele só precisa de um arquivo para fazer tudo isso: o novo, <a target="_blank" href="https://www.python.org/dev/peps/pep-0518/">padronizado</a> <code>pyproject.toml</code>`. Em outras palavras, poetry usa <code>pyproject.toml</code> para substituir <code>setup.py</code>, <code>requirements.txt</code>, <code>setup.cfg</code>, <code>MANIFEST.in</code> e o recém-adicionado <code>Pipfile</code>.
  </base-disclaimer-content>
</base-disclaimer>

Nesta série de artigos, usaremos o [Poetry](https://poetry.eustace.io/) para gerenciar nossas dependências, construir um projeto simples e, com um único comando, publicá-lo no [PyPI](https://pypi.org/).

Nesta primeira parte, nós iremos:

- Iniciar um novo projeto.
- Criar um Ambiente Virtual.
- Gerenciar dependências.

No <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">segundo artigo</router-link>, nós iremos:

- Adicionar nosso Ambiente Virtual ao [VSCode](https://code.visualstudio.com/).
- Integrar nossas dependências de desenvolvimento:
  - _Flake8_
  - _Black_
  - _Pytest_

E finalmente, em um <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">terceiro artigo</router-link> nós iremos:

- Escrever uma biblioteca de exemplo.
- Construir nosso projeto com _Poetry_.
- Publicá-lo no _PyPI_.

## Instalando Poetry

A maneira mais fácil é usar _pip_:

```bash
pip install poetry
```

Mas usaremos o instalador próprio do Poetry para isolá-lo do resto do sistema, terceirizando suas dependências. Esta é a maneira recomendada de instalar o poetry:

```bash
curl -sSL https://raw.githubusercontent.com/python-poetry/poetry/master/get-poetry.py | python -
```

Desta forma, mais tarde poderemos atualizar o poetry para a versão estável mais recente com o comando `poetry self update`.

## Iniciando um novo projeto

Podemos agora iniciar um novo projeto Python usando o comando `poetry new [nome_do_projeto]`. Eu o chamarei de **_how-long_** e será uma biblioteca simples para medir o tempo de execução de uma função:

```bash
poetry new how-long
```

> Nota: Para projetos existentes, você pode usar o comando `poetry init` e criar interativamente um _pyproject.toml_.

O diretório _how-long_ é criado e dentro dele há uma estrutura de projeto básica:

```
how-long
├── README.rst
├── how_long
│   └── __init__.py
├── pyproject.toml
└── tests
    ├── __init__.py
    └── test_how_long.py
```

Para um guia abrangente sobre como lidar com caminhos de arquivos e diretórios, o que é essencial para gerenciar estruturas de projetos, consulte a página <router-link to="/cheatsheet/file-directory-path">File and directory Paths</router-link>.

> Nota: Para poder publicar seu projeto, você precisa de um nome disponível. Use a pesquisa do [PyPI](https://pypi.org/) para isso.

### O arquivo pyproject.toml

O arquivo **pyproject.toml** gerenciará os detalhes e as dependências do projeto:

```
[tool.poetry]
name = "how-long"
version = "0.1.0"
description = "A simple decorator to measure a function execution time."
authors = ["wilfredinni <carlos.w.montecinos@gmail.com>"]

[tool.poetry.dependencies]
python = "^3.7"

[tool.poetry.dev-dependencies]
pytest = "^3.0"

[build-system]
requires = ["poetry>=0.12"]
build-backend = "poetry.masonry.api"
```

#### [tool.poetry]

Os detalhes. Adicionar uma [licença](https://poetry.eustace.io/docs/pyproject/#license) e um [README](https://poetry.eustace.io/docs/pyproject/#readme) pode ser uma boa ideia:

```
[tool.poetry]
...
license = "MIT"
readme = "README.rst"
```

#### [tool.poetry.dependencies]

O primeiro é a versão do Python. Basicamente, este projeto será compatível com Python 3.7 e superior. Além disso, a partir de agora, todo pacote que instalarmos e que se destina a ser usado em produção será listado aqui.

#### [tool.poetry.dev-dependencies]

Estes pacotes são apenas para desenvolvimento e não serão incluídos quando publicarmos nosso projeto. Por padrão, o Poetry inclui o [Pytest](https://docs.pytest.org/en/latest/), então o usaremos para testar nosso projeto mais tarde.

## Criando um Ambiente Virtual

Para criar um Ambiente Virtual e instalar o _Pytest_, usaremos o comando `poetry install`:

```bash
poetry install
```

![poetry-install-command](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p1/poetry-install.png)

Depois de concluído, um novo arquivo, `poetry.lock`, será criado.

> Quando o Poetry terminar a instalação, ele grava todos os pacotes e as versões exatas deles que baixou no arquivo poetry.lock, travando o projeto nessas versões específicas. Você deve commitar o arquivo poetry.lock no repositório do seu projeto para que todas as pessoas que trabalham no projeto fiquem travadas nas mesmas versões das dependências.

## Gerenciamento de Dependências

Uma maneira de adicionar ou remover dependências é editar diretamente o _pyproject.toml_ e depois executar `poetry install` para aplicar as alterações. Em vez disso, usaremos os comandos `add` e `remove` para evitar modificações manuais.

### Adicionando dependências

Vamos adicionar dois pacotes ao projeto, _pendulum_ e _coo_:

```bash
poetry add pendulum coo
```

![poetry-add-command](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p1/poetry-add.png)

Abra _pyproject.toml_ e _poetry.lock_ e veja como eles foram atualizados.

### Adicionando dependências de Desenvolvimento

Estas dependências estarão disponíveis apenas durante o desenvolvimento; o Poetry não as incluirá ao construir e publicar o projeto.

Já instalamos o _Pytest_, mas também usaremos o [flake8](http://flake8.pycqa.org/en/latest/) para linting e o [mypy](http://mypy-lang.org/) para tipagem estática:

```bash
poetry add -D flake8 mypy
```

Agora que penso bem, esqueci de adicionar um formatador. Vamos usar o [black](https://black.readthedocs.io/en/stable/):

```bash
poetry add -D black
[ValueError]
Could not find a matching version of package black

add [-D|--dev] [--git GIT] [--path PATH] [-E|--extras EXTRAS] [--optional] [--python PYTHON] [--platform PLATFORM] [--allow-prereleases] [--dry-run] [--] <name> (<name>)...
```

Este erro acontece porque o _black_ está em estado de pré-lançamento, então o Poetry não consegue encontrar nenhuma versão estável para nós. Mas eu realmente o quero, então vamos instalá-lo mesmo assim com a flag `--allow-prereleases`:

```bash
poetry add -D black --allow-prereleases
```

![poetry-add-dev-command](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p1/poetry-add-dev.png)

### Removendo dependências

Sabe de uma coisa, mudei de ideia, este projeto não usará nem _coo_ nem _mypy_. Comece removendo _coo_, uma dependência normal do nosso projeto:

```bash
poetry remove coo
```

Agora _mypy_, que é uma dependência de desenvolvimento:

```bash
poetry remove -D mypy
```

## Conclusão

Nesta primeira parte, iniciamos um novo projeto, criamos um Ambiente Virtual e adicionamos e removemos dependências usando os seguintes comandos:

| Comando                             | Descrição                                                     |
| ----------------------------------- | ------------------------------------------------------------- |
| `poetry new [nome-do-pacote]`       | Iniciar um novo Projeto Python.                               |
| `poetry init`                       | Criar um arquivo _pyproject.toml_ interativamente.            |
| `poetry install`                    | Instalar os pacotes dentro do arquivo _pyproject.toml_.       |
| `poetry add [nome-do-pacote]`       | Adicionar um pacote a um Ambiente Virtual.                    |
| `poetry add -D [nome-do-pacote]`    | Adicionar um pacote de desenvolvimento a um Ambiente Virtual. |
| `poetry remove [nome-do-pacote]`    | Remover um pacote de um Ambiente Virtual.                     |
| `poetry remove -D [nome-do-pacote]` | Remover um pacote de desenvolvimento de um Ambiente Virtual.  |
| `poetry self:update`                | Atualizar o poetry para a versão estável mais recente.        |

Em um <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">segundo artigo</router-link>, veremos mais comandos do _Poetry_, adicionaremos nosso Ambiente Virtual ao _VSCode_ e usaremos os pacotes de desenvolvimento que instalamos para fazer lint (Flake8), formatar (Black) e testar (Pytest) nosso código dentro do editor. Finalmente, em um terceiro, escreveremos e publicaremos uma biblioteca de exemplo no _PyPI_.

Alguma dúvida ou sugestão? Por favor, deixe um comentário.
