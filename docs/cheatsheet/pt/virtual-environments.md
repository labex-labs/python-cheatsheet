---
title: 'Ambientes Virtuais Python - Guia Rápido Python'
description: 'O uso de um Ambiente Virtual é testar código Python em ambientes encapsulados e evitar preencher a instalação base do Python com bibliotecas usadas apenas para um projeto.'
labUrl: 'https://labex.io/pt/labs/python-python-virtual-environments-633669?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Ambiente Virtual
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

O uso de um Ambiente Virtual é para testar código python em ambientes encapsulados e também para evitar preencher a instalação base do Python com bibliotecas que podemos usar para apenas um projeto.

## virtualenv

1. Instalar virtualenv

```bash
pip install virtualenv
```

1. Instalar virtualenvwrapper-win (Windows)

```bash
pip install virtualenvwrapper-win
```

Uso:

1. Criar um Ambiente Virtual chamado `HelloWorld`

```bash
mkvirtualenv HelloWorld
```

    Tudo o que instalarmos agora será específico para este projeto. E disponível para os projetos que conectarmos a este ambiente.

1. Definir Diretório do Projeto

   Para vincular nosso virtualenv ao nosso diretório de trabalho atual, simplesmente digitamos:

```bash
setprojectdir .
```

1. Desativar

   Para passar para outra coisa na linha de comando, digite `deactivate` para desativar seu ambiente.

```bash
deactivate
```

    Note como os parênteses desaparecem.

1. Workon

   Abra o prompt de comando e digite `workon HelloWorld` para ativar o ambiente e mover para a pasta raiz do seu projeto

```bash
workon HelloWorld
```

## Poetry

<base-disclaimer>
  <base-disclaimer-title>
    Do <a href="https://python-poetry.org/">site do Poetry</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Poetry é uma ferramenta para gerenciamento de dependências e empacotamento em Python. Ele permite que você declare as bibliotecas das quais seu projeto depende e as gerenciará (instalará/atualizará) para você.
  </base-disclaimer-content>
</base-disclaimer>

1. Instalar Poetry

```bash
pip install --user poetry
```

2. Criar um novo projeto

```bash
poetry new my-project
```

    Isso criará um diretório my-project:

```plaintext
my-project
├── pyproject.toml
├── README.rst
├── poetry_demo
│   └── __init__.py
└── tests
    ├── __init__.py
    └── test_poetry_demo.py
```

    O arquivo pyproject.toml orquestrará seu projeto e suas dependências:

```toml
[tool.poetry]
name = "my-project"
version = "0.1.0"
description = ""
authors = ["your name <your@mail.com>"]

[tool.poetry.dependencies]
python = "*"

[tool.poetry.dev-dependencies]
pytest = "^3.4"
```

3. Pacotes

   Para adicionar dependências ao seu projeto, você pode especificá-las na seção tool.poetry.dependencies:

```toml
[tool.poetry.dependencies]
pendulum = "^1.4"
```

    Além disso, em vez de modificar o arquivo pyproject.toml manualmente, você pode usar o comando add e ele encontrará automaticamente uma restrição de versão adequada.

```bash
poetry add pendulum
```

    Para instalar as dependências listadas em pyproject.toml:

```bash
poetry install
```

    Para remover dependências:

```bash
poetry remove pendulum
```

Para mais informações, consulte a [documentação](https://poetry.eustace.io/docs/) ou leia aqui:

- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Projetos Python com Poetry e VSCode. Parte 1</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">Projetos Python com Poetry e VSCode. Parte 2</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">Projetos Python com Poetry e VSCode. Parte 3</router-link>

## Pipenv

<base-disclaimer>
  <base-disclaimer-title>
    Do <a target="_blank" href="https://pipenv.pypa.io/en/latest/">site do Pipenv</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Pipenv é uma ferramenta que visa trazer o melhor de todos os mundos de empacotamento (bundler, composer, npm, cargo, yarn, etc.) para o mundo Python. O Windows é um cidadão de primeira classe, em nosso mundo.
  </base-disclaimer-content>
</base-disclaimer>

1. Instalar pipenv

```bash
pip install pipenv
```

2. Entre no diretório do seu Projeto e instale os Pacotes para seu projeto

```bash
cd my_project
pipenv install <package>
```

    O Pipenv instalará seu pacote e criará um Pipfile para você no diretório do seu projeto. O Pipfile é usado para rastrear quais dependências seu projeto precisa caso você precise reinstalá-las.

3. Desinstalar Pacotes

```bash
pipenv uninstall <package>
```

4. Ativar o Ambiente Virtual associado ao seu projeto Python

```bash
pipenv shell
```

5. Sair do Ambiente Virtual

```bash
exit
```

Encontre mais informações e um vídeo em [docs.pipenv.org](https://docs.pipenv.org/).

## Anaconda

<base-disclaimer>
  <base-disclaimer-title>
    <a target="k" href="https://anaconda.com/">Anaconda</a> é outra ferramenta popular para gerenciar pacotes python.
  </base-disclaimer-title>
  <base-disclaimer-content>
    Onde pacotes, notebooks, projetos e ambientes são compartilhados. Seu lugar para hospedagem pública gratuita de pacotes conda.
  </base-disclaimer-content>
</base-disclaimer>

Uso:

1. Criar um Ambiente Virtual

```bash
conda create -n HelloWorld
```

2. Para usar o Ambiente Virtual, ative-o por:

```bash
conda activate HelloWorld
```

    Tudo o que for instalado agora será específico para o projeto HelloWorld

3. Sair do Ambiente Virtual

```bash
conda deactivate
```

## UV

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.astral.sh/uv/">Documentação do UV</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    UV é um instalador e resolvedor de pacotes Python extremamente rápido, projetado como um substituto direto para os fluxos de trabalho pip e pip-tools. UV é 10-100x mais rápido que pip e fornece gerenciamento unificado de pacotes, criação de ambiente virtual e gerenciamento de versão Python.
  </base-disclaimer-content>
</base-disclaimer>

1. Instalar UV

```bash
# Usando curl (Linux/macOS)
curl -LsSf https://astral.sh/uv/install.sh | sh

# Usando pip ou pipx
pip install uv
```

2. Criar um novo projeto com ambiente virtual

```bash
uv init my-project
cd my-project
```

3. Adicionar dependências

```bash
uv add requests
```

4. Executar comandos no ambiente do projeto

```bash
uv run python script.py
```

5. Ativar o ambiente virtual manualmente (opcional)

```bash
source .venv/bin/activate  # Linux/macOS
.venv\Scripts\activate     # Windows
```

O UV gerencia automaticamente ambientes virtuais, versões Python e dependências com velocidade e conveniência excepcionais.

## Links relevantes

- <router-link to="/cheatsheet/setup-py">setup.py</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Projetos Python com Poetry e VSCode. Parte 1</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">Projetos Python com Poetry e VSCode. Parte 2</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">Projetos Python com Poetry e VSCode. Parte 3</router-link>
- <router-link to="/blog/python-uv-package-manager">UV: O Gerenciador de Pacotes Python Relâmpago</router-link>
- <router-link to="/builtin/import">import()</router-link>
