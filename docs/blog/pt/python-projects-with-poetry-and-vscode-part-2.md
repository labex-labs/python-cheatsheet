---
title: 'Projetos Python com Poetry e VSCode Parte 2 - Folha de Dicas Python'
description: 'Nesta segunda parte, adicionaremos nosso Ambiente Virtual ao VSCode, atualizaremos nossas dependências e integraremos Flake8, Black e Pytest com o editor.'
date: 'April 23, 2019'
updated: 'July 3, 2022'
tags: 'python, intermediate, vscode, packaging'
socialImage: '/blog/poetry-2.jpg'
layout: 'article'
---

<route lang="yaml">
meta:
    layout: "article"
    title: "Projetos Python com Poetry e VSCode Parte 2 - Folha de Dicas Python"
    description: "Nesta segunda parte, adicionaremos nosso Ambiente Virtual ao VSCode, atualizaremos nossas dependências e integraremos Flake8, Black e Pytest com o editor."
    date: "April 23, 2019"
    updated: "July 3, 2022"
    tags: "python, intermediate, vscode, packaging"
    socialImage: "/blog/poetry-2.jpg"
</route>

<blog-title-header :frontmatter="frontmatter" title="Projetos Python com Poetry e VSCode Parte 2 - Folha de Dicas Python" />

No <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">primeiro artigo</router-link> aprendemos o que é o ficheiro `pyproject.toml` e como trabalhar com ele, usamos o [Poetry](https://poetry.eustace.io/) para iniciar um novo projeto, criar um Ambiente Virtual e para adicionar e remover dependências. Tudo isso com os seguintes comandos:

| Comando                           | Descrição                                                     |
| --------------------------------- | ------------------------------------------------------------- |
| `poetry new [package-name]`       | Iniciar um novo Projeto Python.                               |
| `poetry init`                     | Criar um ficheiro _pyproject.toml_ interativamente.           |
| `poetry install`                  | Instalar os pacotes dentro do ficheiro _pyproject.toml_.      |
| `poetry add [package-name]`       | Adicionar um pacote a um Ambiente Virtual.                    |
| `poetry add -D [package-name]`    | Adicionar um pacote de desenvolvimento a um Ambiente Virtual. |
| `poetry remove [package-name]`    | Remover um pacote de um Ambiente Virtual.                     |
| `poetry remove -D [package-name]` | Remover um pacote de desenvolvimento de um Ambiente Virtual.  |

Nesta segunda parte, vamos:

- Adicionar o nosso Ambiente Virtual ao [VSCode](https://code.visualstudio.com/).
- Atualizar as nossas dependências.
- Integrar as nossas dependências de desenvolvimento com o editor:
  - _Flake8_
  - _Black_
  - _Pytest_

E num <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">terceiro artigo</router-link> escreveremos uma biblioteca de exemplo, construiremos o nosso projeto com _Poetry_ e publicá-lo-emos no _PyPI_.

Antes de começarmos, certifique-se de que instalou o [VSCode](https://code.visualstudio.com/), adicionou a extensão [Python](https://marketplace.visualstudio.com/itemdetails?itemName=ms-python.python) e que seguiu e compreendeu o <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">primeiro artigo</router-link> desta série.

## Configuração do Poetry no VSCode

Passaram alguns dias desde a primeira parte, por isso pode ser uma boa ideia verificar se há novas versões das nossas dependências. Abra o seu terminal, navegue para dentro do diretório do seu projeto e digite o comando `poetry update`:

![poetry update](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/update.png)

Até agora, não há novas versões disponíveis.

Quando cria um Ambiente Virtual com o comando _venv_, o _VSCode_ irá automaticamente configurá-lo como o Ambiente Python predefinido para esse projeto. Ao trabalhar com o _Poetry_, pela primeira vez teremos de digitar o seguinte no terminal e dentro da pasta do projeto:

```bash
poetry shell
code .
```

O primeiro comando, `poetry shell`, irá colocar-nos dentro do nosso ambiente virtual, e `code .` abrirá a pasta atual dentro do _VSCode_.

![vscode](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/vscode.png)

Abra a pasta **how-long** (ou a com o nome do seu projeto) usando o painel esquerdo e, ao lado de `__init__.py`, crie um ficheiro `how-long.py`. No canto inferior esquerdo, verá o Ambiente Python atual:

![python version](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/python-code.png)

Clique nele e uma lista de Ambientes disponíveis será exibida. Escolha aquele que tem o nome do seu projeto:

![choose python](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/choose-environment.png)

Agora, vamos integrar as nossas dependências de desenvolvimento, _Flake8_, _Black_ e _Pytest_ no Visual Studio Code.

## Flake8

O [Flake8](http://flake8.pycqa.org/en/latest/) fornecerá aos nossos projetos capacidades de _linting_. Por outras palavras, avisará sobre erros de sintaxe e estilo, e graças ao VSCode, saberemos deles enquanto digitamos.

Por predefinição, a extensão Python vem com o _Pylint_ ativado, que é poderoso mas complexo de configurar. Para mudar para o _Flake8_, faça uma alteração em qualquer ficheiro Python e guarde-o; no canto inferior direito, aparecerá uma mensagem pop-up:

![flake8](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/select-linter.png)

Clique em **Select Linter** e escolha **Flake8** na lista. Agora, o _VSCode_ irá informar-nos dos nossos problemas de _sintaxe_ e _estilo_, a verde ou vermelho dependendo da sua gravidade, sempre com uma boa descrição do que está errado:

![linting](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/linting.png)

Parece que temos dois problemas: falta uma linha em branco no final do nosso ficheiro (estilo) e esquecemo-nos de adicionar aspas à nossa _string_ _Hello, World!_ (sintaxe). Corrija-os e veja todos os avisos desaparecerem.

## Black

O [Black](https://github.com/ambv/black) é um formatador de código, uma ferramenta que irá olhar para o nosso código e formatá-lo automaticamente em conformidade com o guia de estilo [PEP 8](https://www.python.org/dev/peps/pep-0008/), o mesmo _PEP_ que o _Flake8_ usa para fazer o _lint_ dos nossos erros de estilo.

Pressione `shift + cmd/ctrl + p` para abrir a Paleta de Comandos, digite **Format Document** e pressione enter. Uma nova mensagem pop-up aparecerá:

![black formatter popup](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/format-popup.png)

Selecione **Use Black**. Agora copie este código mal formatado para o seu ficheiro python:

```python
for i in range(5):         # this comment has too many spaces
      print(i)  # this line has 6 space indentation.
```

Que pedaço de c\*\*\*... código feio. Tente formatá-lo novamente e veja como o _Black_ corrige todos eles para si!

Outra coisa que podemos fazer é configurar o VSCode para que cada vez que guardamos, o _Black_ formate automaticamente o nosso código. Pressione `cmd/ctrl + ,` para abrir as Definições (Settings). Certifique-se de que está em **Workspace Settings**, procure por **Format On Save** e ative a caixa de seleção:

![format on save](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/format-on-save.png)

Por último, o _Black_ tem como predefinição 88 caracteres por linha, em contraste com os 80 permitidos pelo _Flake8_, por isso, para evitar conflitos, abra a pasta **.vscode** e adicione o seguinte ao final do ficheiro **settings.json**:

```json
{
    ...
    "python.linting.flake8Args": [
        "--max-line-length=88"
    ],
}
```

![black-settings](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/black-settings.png)

## Pytest

Se é sério em relação à programação, é crucial que aprenda a testar os seus projetos. É uma habilidade incrivelmente útil que lhe permite escrever e entregar programas com confiança, reduzindo a possibilidade de surgirem bugs catastróficos após o lançamento.

O [Pytest](https://docs.pytest.org/en/latest/) é um _framework_ muito popular e fácil de usar para escrever testes. Nós [já o instalámos](https://www.pythoncheatsheet.org/blog/python-projects-with-poetry-and-vscode-part-1#Dependency-Management), por isso também o integraremos com o _VSCode_.

Abra a pasta **tests** e selecione o ficheiro `test_how_long.py`. O _Poetry_ já nos dá o nosso primeiro teste:

```python
# test_how_long.py
from how_long import __version__


def test_version():
    assert __version__ == '0.1.0'
```

Neste teste, importamos a variável `__version__` do ficheiro `__init__.py` que está dentro da pasta **how_long** e afirmamos que a versão atual é _0.1.0_. Abra o terminal integrado indo a **Terminal > New Terminal** e digite:

```bash
pytest
```

O Resultado será assim:

![pytest](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/pytest-terminal.png)

Ok, tudo está bem. Abra a sua Paleta de Comandos com `shift + cmd/ctrl + p`:

- Escreva **unit** e selecione **Python: Configure Unit Tests**.
- Selecione **pytest**.
- Escolha o diretório onde guardou os testes, **tests** no nosso caso.

Três coisas aconteceram:

- Um novo botão apareceu na barra de estado: **Run Tests**. Isto é o mesmo que digitar _pytest_ no terminal. Pressione-o e selecione **Run All Unit Tests**. Quando terminar, informá-lo-á do número de testes que passaram e dos testes que falharam:

  ![test status bar](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img.png)

- Um novo ícone na barra lateral esquerda. Se clicar nele, aparecerá um painel a exibir todos os testes. Aqui, pode executar cada um individualmente:

  ![test side panel](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/test-side-panel.png)

- Dentro do ficheiro de teste, novas opções serão exibidas antes de cada função de teste: um ícone de verificação aparecerá se estiver OK, e um _x_ caso contrário. Também permite executar testes específicos:

  ![test inline](https://raw.githubusercontent.com/wilfredinni/pysheetComments/master/2019/April/poetry_vscode_p2/img/test-inline.png)

## Conclusão

Até agora, temos:

- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Iniciado um novo projeto</router-link>, criado um Ambiente Virtual e adicionado, eliminado e atualizado dependências.
- Adicionado o nosso [Ambiente Virtual ao VSCode](#setting-up-poetry-on-vscode), [Configurado o _Flake8_](#flake8) para fazer _lint_ do nosso código enquanto digitamos, selecionado o [_Black_](#black) como formatador e [incluído o _Pytest_](#pytest) para executar os nossos testes visualmente.

Finalmente, no <router-link to="/blog/python-projects-with-poetry-and-vscode-part-3">terceiro e último artigo</router-link>, vamos:

- Escrever uma biblioteca de exemplo.
- Construir o nosso projeto com _Poetry_.
- Publicá-lo no _PyPI_.
