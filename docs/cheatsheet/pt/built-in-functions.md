---
title: 'Funções Nativas do Python - Folha de Dicas Python'
description: 'O interpretador Python possui várias funções e tipos integrados que estão sempre disponíveis.'
labUrl: 'https://labex.io/pt/labs/python-python-built-in-functions-633648?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Funções Embutidas do Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

O interpretador Python possui um número de funções e tipos embutidos que estão sempre disponíveis.

## Funções Embutidas do Python

| Função                                                               | Descrição                                                                     |
| -------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| <router-link to='/builtin/abs'>abs()</router-link>                   | Retorna o valor absoluto de um número.                                        |
| <router-link to='/builtin/aiter'>aiter()</router-link>               | Retorna um iterador assíncrono para um iterável assíncrono.                   |
| <router-link to='/builtin/all'>all()</router-link>                   | Retorna True se todos os elementos do iterável forem verdadeiros.             |
| <router-link to='/builtin/any'>any()</router-link>                   | Retorna True se qualquer elemento do iterável for verdadeiro.                 |
| <router-link to='/builtin/ascii'>ascii()</router-link>               | Retorna uma string com uma representação imprimível de um objeto.             |
| <router-link to='/builtin/bin'>bin()</router-link>                   | Converte um número inteiro para uma string binária.                           |
| <router-link to='/builtin/bool'>bool()</router-link>                 | Retorna um valor Booleano.                                                    |
| <router-link to='/builtin/breakpoint'>breakpoint()</router-link>     | Coloca você no depurador no ponto de chamada.                                 |
| <router-link to='/builtin/bytearray'>bytearray()</router-link>       | Retorna um novo array de bytes.                                               |
| <router-link to='/builtin/bytes'>bytes()</router-link>               | Retorna um novo objeto “bytes”.                                               |
| <router-link to='/builtin/callable'>callable()</router-link>         | Retorna True se o argumento do objeto for chamável, False caso contrário.     |
| <router-link to='/builtin/chr'>chr()</router-link>                   | Retorna a string que representa um caractere.                                 |
| <router-link to='/builtin/classmethod'>classmethod()</router-link>   | Transforma um método em um método de classe.                                  |
| <router-link to='/builtin/compile'>compile()</router-link>           | Compila a origem em um objeto de código ou AST.                               |
| <router-link to='/builtin/complex'>complex()</router-link>           | Retorna um número complexo com o valor real + imag\*1j.                       |
| <router-link to='/builtin/delattr'>delattr()</router-link>           | Exclui o atributo nomeado, desde que o objeto o permita.                      |
| <router-link to='/builtin/dict'>dict()</router-link>                 | Cria um novo dicionário.                                                      |
| <router-link to='/builtin/dir'>dir()</router-link>                   | Retorna a lista de nomes no escopo local atual.                               |
| <router-link to='/builtin/divmod'>divmod()</router-link>             | Retorna um par de números consistindo em seu quociente e resto.               |
| <router-link to='/builtin/enumerate'>enumerate()</router-link>       | Retorna um objeto enumerate.                                                  |
| <router-link to='/builtin/eval'>eval()</router-link>                 | Avalia e executa uma expressão.                                               |
| <router-link to='/builtin/exec'>exec()</router-link>                 | Esta função suporta a execução dinâmica de código Python.                     |
| <router-link to='/builtin/filter'>filter()</router-link>             | Constrói um iterador a partir de um iterável e retorna o que for verdadeiro.  |
| <router-link to='/builtin/float'>float()</router-link>               | Retorna um número de ponto flutuante a partir de um número ou string.         |
| <router-link to='/builtin/format'>format()</router-link>             | Converte um valor em uma representação “formatada”.                           |
| <router-link to='/builtin/frozenset'>frozenset()</router-link>       | Retorna um novo objeto frozenset.                                             |
| <router-link to='/builtin/getattr'>getattr()</router-link>           | Retorna o valor do atributo nomeado do objeto.                                |
| <router-link to='/builtin/globals'>globals()</router-link>           | Retorna o dicionário que implementa o namespace do módulo atual.              |
| <router-link to='/builtin/hasattr'>hasattr()</router-link>           | Retorna True se o objeto tiver o atributo nomeado.                            |
| <router-link to='/builtin/hash'>hash()</router-link>                 | Retorna o valor hash do objeto.                                               |
| <router-link to='/builtin/help'>help()</router-link>                 | Invoca o sistema de ajuda embutido.                                           |
| <router-link to='/builtin/hex'>hex()</router-link>                   | Converte um número inteiro para uma string hexadecimal em minúsculas.         |
| <router-link to='/builtin/id'>id()</router-link>                     | Retorna a “identidade” de um objeto.                                          |
| <router-link to='/builtin/input'>input()</router-link>               | Esta função recebe uma entrada e a converte em uma string.                    |
| <router-link to='/builtin/int'>int()</router-link>                   | Retorna um objeto inteiro construído a partir de um número ou string.         |
| <router-link to='/builtin/isinstance'>isinstance()</router-link>     | Retorna True se o argumento do objeto for uma instância de um objeto.         |
| <router-link to='/builtin/issubclass'>issubclass()</router-link>     | Retorna True se classe for uma subclasse de classinfo.                        |
| <router-link to='/builtin/iter'>iter()</router-link>                 | Retorna um objeto iterador.                                                   |
| <router-link to='/builtin/len'>len()</router-link>                   | Retorna o comprimento (o número de itens) de um objeto.                       |
| <router-link to='/builtin/list'>list()</router-link>                 | Em vez de ser uma função, list é um tipo de sequência mutável.                |
| <router-link to='/builtin/locals'>locals()</router-link>             | Atualiza e retorna um dicionário com a tabela de símbolos local atual.        |
| <router-link to='/builtin/map'>map()</router-link>                   | Retorna um iterador que aplica a função a cada item do iterável.              |
| <router-link to='/builtin/max'>max()</router-link>                   | Retorna o maior item em um iterável.                                          |
| <router-link to='/builtin/min'>min()</router-link>                   | Retorna o menor item em um iterável.                                          |
| <router-link to='/builtin/next'>next()</router-link>                 | Recupera o próximo item do iterador.                                          |
| <router-link to='/builtin/object'>object()</router-link>             | Retorna um novo objeto sem recursos.                                          |
| <router-link to='/builtin/oct'>oct()</router-link>                   | Converte um número inteiro para uma string octal em minúsculas.               |
| <router-link to='/builtin/open'>open()</router-link>                 | Abre um arquivo e retorna um objeto de arquivo correspondente.                |
| <router-link to='/builtin/ord'>ord()</router-link>                   | Retorna um inteiro que representa o ponto de código Unicode de um caractere.  |
| <router-link to='/builtin/pow'>pow()</router-link>                   | Retorna base elevado à potência exp.                                          |
| <router-link to='/builtin/print'>print()</router-link>               | Imprime objetos no arquivo de fluxo de texto.                                 |
| <router-link to='/builtin/property'>property()</router-link>         | Retorna um atributo de propriedade.                                           |
| <router-link to='/builtin/repr'>repr()</router-link>                 | Retorna uma string contendo uma representação imprimível de um objeto.        |
| <router-link to='/builtin/reversed'>reversed()</router-link>         | Retorna um iterador reverso.                                                  |
| <router-link to='/builtin/round'>round()</router-link>               | Retorna o número arredondado para a precisão de ndigits após o ponto decimal. |
| <router-link to='/builtin/set'>set()</router-link>                   | Retorna um novo objeto set.                                                   |
| <router-link to='/builtin/setattr'>setattr()</router-link>           | Este é o correspondente de getattr().                                         |
| <router-link to='/builtin/slice'>slice()</router-link>               | Retorna um objeto fatiado representando um conjunto de índices.               |
| <router-link to='/builtin/sorted'>sorted()</router-link>             | Retorna uma nova lista ordenada a partir dos itens do iterável.               |
| <router-link to='/builtin/staticmethod'>staticmethod()</router-link> | Transforma um método em um método estático.                                   |
| <router-link to='/builtin/str'>str()</router-link>                   | Retorna uma versão str do objeto.                                             |
| <router-link to='/builtin/sum'>sum()</router-link>                   | Soma start e os itens de um iterável.                                         |
| <router-link to='/builtin/super'>super()</router-link>               | Retorna um objeto proxy que delega chamadas de método a um pai ou irmão.      |
| <router-link to='/builtin/tuple'>tuple()</router-link>               | Em vez de ser uma função, é na verdade um tipo de sequência imutável.         |
| <router-link to='/builtin/type'>type()</router-link>                 | Retorna o tipo de um objeto.                                                  |
| <router-link to='/builtin/vars'>vars()</router-link>                 | Retorna o atributo dict para qualquer outro objeto com um atributo dict.      |
| <router-link to='/builtin/zip'>zip()</router-link>                   | Itera sobre vários iteráveis em paralelo.                                     |
| <router-link to='/builtin/import'>**import**()</router-link>         | Esta função é invocada pela instrução import.                                 |
