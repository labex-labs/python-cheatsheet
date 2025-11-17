---
title: 'Função Principal Python - Folha de Dicas Python'
description: 'É o nome do escopo em que o código de nível superior é executado. O nome de um módulo é definido como main quando lido da entrada padrão, de um script ou de um prompt interativo.'
labUrl: 'https://labex.io/pt/labs/python-python-main-function-633661?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Ambiente de script de nível superior principal
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

## O que é

`__main__` é o nome do escopo em que o código de nível superior é executado.
O **nome** de um módulo é definido como igual a `__main__` quando lido da entrada padrão, de um script ou de um prompt interativo.

Um módulo pode descobrir se está sendo executado no escopo principal verificando seu próprio `__name__`, o que permite um idioma comum para executar código condicionalmente em um módulo. Quando é executado como um script ou com `python -m`, mas não quando é importado:

```python
# __name__ == "__main__": verifica se o script é executado diretamente (não importado)
if __name__ == "__main__":  # Verdadeiro quando executado como script, Falso quando importado
    # executa somente se executado como script
    main()
```

Para um pacote, o mesmo efeito pode ser alcançado incluindo um módulo **main.py**, cujo conteúdo será executado quando o módulo for executado com -m.

Por exemplo, estamos desenvolvendo um script projetado para ser usado como um módulo, devemos fazer:

```python
# Exemplo: função pode ser importada, mas o código de teste só é executado quando executado diretamente
def add(a, b):
    return a+b

if __name__ == "__main__":  # Só executa quando o arquivo é executado, não quando importado
    add(3, 5)
```

## Vantagens

1. Todo módulo Python tem seu `__name__` definido e, se este for `__main__`, implica que o módulo está sendo executado de forma autônoma pelo usuário, e podemos realizar as ações apropriadas correspondentes.
2. Se você importar este script como um módulo em outro script, o **nome** será definido como o nome do script/módulo.
3. Arquivos Python podem funcionar como módulos reutilizáveis ou como programas autônomos.
4. `if __name__ == "__main__":` é usado para executar algum código somente se o arquivo for executado diretamente e não estiver sendo importado.

## Links relevantes

- <router-link to="/cheatsheet/functions">Funções</router-link>
- <router-link to="/cheatsheet/setup-py">setup.py</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Projetos Python com Poetry e VSCode. Parte 1</router-link>
- <router-link to="/builtin/import">import()</router-link>
