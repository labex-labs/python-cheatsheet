---
title: 'Python Setup.py - Folha de Dicas Python'
description: 'O script setup é o centro de toda a atividade na construção, distribuição e instalação de módulos usando o Distutils. O objetivo principal do script setup é descrever sua distribuição de módulo para o Distutils, para que os vários comandos que operam em seus módulos façam o que é correto.'
labUrl: 'https://labex.io/pt/labs/python-python-setup-py-633666?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
setup.py do Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

<base-warning>
  <base-warning-title>
    Uma opinião 'controversa'
  </base-warning-title>
  <base-warning-content>
    Usar o `setup.py` para empacotar e distribuir seus pacotes python pode ser bastante desafiador de vez em quando. Ferramentas modernas como <a target="_blank" href="https://python-poetry.org/">Poetry</a> e <a target="_blank" href="https://docs.astral.sh/uv/">UV</a> tornam não apenas o empacotamento **muito mais fácil**, mas também ajudam você a gerenciar suas dependências de uma maneira muito conveniente. O UV é particularmente notável por ser 10-100x mais rápido que as ferramentas tradicionais.
  </base-warning-content>
</base-warning>

Se você quiser mais informações sobre Poetry, pode ler os seguintes artigos:

- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Projetos Python com Poetry e VSCode. Parte 1</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">Projetos Python com Poetry e VSCode. Parte 2</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">Projetos Python com Poetry e VSCode. Parte 3</router-link>

Para um guia abrangente sobre o UV, o gerenciador de pacotes Python ultrarrápido, leia: <router-link to="/blog/python-uv-package-manager">UV: O Gerenciador de Pacotes Python Ultrarrápido</router-link>.

## Introdução

O script setup é o centro de toda a atividade na construção, distribuição e instalação de módulos usando o Distutils. O principal objetivo do script setup é descrever sua distribuição de módulo para o Distutils, para que os vários comandos que operam em seus módulos façam a coisa certa.

Para um guia abrangente sobre o manuseio de caminhos de arquivos e diretórios, o que é essencial para gerenciar estruturas de projetos, consulte a página <router-link to="/cheatsheet/file-directory-path">Caminhos de Arquivos e Diretórios</router-link>.

O arquivo `setup.py` está no coração de um projeto Python. Ele descreve todos os metadados sobre seu projeto. Existem alguns campos que você pode adicionar a um projeto para dar a ele um rico conjunto de metadados que descrevem o projeto. No entanto, existem apenas três campos obrigatórios: `name`, `version` e `packages`. O campo `name` deve ser exclusivo se você deseja publicar seu pacote no Python Package Index (PyPI). O campo `version` rastreia diferentes lançamentos do projeto. O campo `packages` descreve onde você colocou o código-fonte Python dentro do seu projeto.

Isso permite que você instale facilmente pacotes Python. Muitas vezes, é suficiente escrever:

```bash
python setup.py install
```

e o módulo se instalará.

## Exemplo

Nosso setup.py inicial também incluirá informações sobre a licença e reutilizará o arquivo README.txt para o campo `long_description`. Isso ficará assim:

```python
# setup.py: define metadados do pacote para distribuição
from distutils.core import setup
setup(
   name='pythonCheatsheet',  # Nome do pacote (deve ser exclusivo no PyPI)
   version='0.1',  # Número da versão
   packages=['pipenv',],  # Lista de pacotes a serem incluídos
   license='MIT',  # Tipo de licença
   long_description=open('README.txt').read(),  # Ler descrição do arquivo
)
```

Para mais informações, visite a [documentação oficial](http://docs.python.org/3.11/install/index.html).

## Links Relevantes

- <router-link to="/cheatsheet/virtual-environments">Ambientes Virtuais</router-link>
- <router-link to="/cheatsheet/file-directory-path">Caminhos de Arquivos e Diretórios</router-link>
- <router-link to="/blog/python-uv-package-manager">UV: O Gerenciador de Pacotes Python Ultrarrápido</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Projetos Python com Poetry e VSCode. Parte 1</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-2">Projetos Python com Poetry e VSCode. Parte 2</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">Projetos Python com Poetry e VSCode. Parte 3</router-link>
- <router-link to="/builtin/import">import()</router-link>
