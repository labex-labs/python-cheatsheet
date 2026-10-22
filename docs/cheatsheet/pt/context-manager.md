---
title: 'Gerenciador de Contexto Python - Folha de Dicas Python'
description: 'Embora os gerenciadores de contexto Python sejam amplamente utilizados, poucos entendem o propósito por trás de seu uso. Essas instruções, comumente usadas na leitura e gravação de arquivos, auxiliam a aplicação na conservação da memória do sistema e melhoram o gerenciamento de recursos, garantindo que recursos específicos estejam em uso apenas para determinados processos.'
labUrl: 'https://labex.io/pt/labs/python-python-context-manager-633650?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Gerenciador de Contexto Python
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

Embora os gerenciadores de contexto do Python sejam amplamente utilizados, poucos entendem o propósito por trás de seu uso. Essas instruções, comumente usadas na leitura e escrita de arquivos, ajudam a aplicação a conservar a memória do sistema e melhoram o gerenciamento de recursos, garantindo que recursos específicos sejam usados apenas para determinados processos.

## A instrução with

Um gerenciador de contexto é um objeto que é notificado quando um contexto (um bloco de código) começa e termina. Você comumente usa um com a instrução `with`. Ele cuida da notificação.

Por exemplo, objetos de arquivo são gerenciadores de contexto. Quando um contexto termina, o objeto de arquivo é fechado automaticamente:

```python
# Gerenciador de contexto: lida automaticamente com a limpeza de recursos
# O arquivo é fechado automaticamente ao sair do bloco 'with'
with open(filename) as f:  # 'f' é o objeto de arquivo
    file_contents = f.read()

# O arquivo é fechado automaticamente aqui, mesmo que um erro tenha ocorrido
```

<BaseQuiz id="cheatsheet-context-manager-1" correct="A">
<template #question>
Qual é o principal benefício de usar um gerenciador de contexto (a instrução <code>with</code>)?
</template>

<BaseQuizOption value="A" correct>A. Lida automaticamente com a limpeza de recursos, mesmo que ocorra um erro</BaseQuizOption>
<BaseQuizOption value="B">B. Faz o código ser executado mais rapidamente</BaseQuizOption>
<BaseQuizOption value="C">C. Permite que vários arquivos sejam abertos simultaneamente</BaseQuizOption>
<BaseQuizOption value="D">D. Previne todos os erros</BaseQuizOption>
<BaseQuizAnswer>Gerenciadores de contexto garantem que os recursos (como arquivos) sejam devidamente limpos ao sair do bloco, mesmo que ocorra uma exceção. Isso evita vazamento de recursos e perda de dados.</BaseQuizAnswer>
</BaseQuiz>

Qualquer coisa que termine a execução do bloco faz com que o método de saída do gerenciador de contexto seja chamado. Isso inclui exceções e pode ser útil quando um erro faz com que você saia prematuramente de um arquivo ou conexão aberta. Sair de um script sem fechar adequadamente arquivos/conexões é uma má ideia, o que pode causar perda de dados ou outros problemas. Ao usar um gerenciador de contexto, você pode garantir que precauções sejam sempre tomadas para evitar danos ou perdas dessa forma.

## Escrevendo seu próprio gerenciador de contexto

Também é possível escrever um gerenciador de contexto usando sintaxe de gerador graças ao decorador `contextlib.contextmanager`:

```python
# Gerenciador de contexto baseado em função usando o decorador contextlib
import contextlib
@contextlib.contextmanager
def context_manager(num):
    print('Enter')  # Código antes do yield é executado em __enter__
    try:
        yield num + 1   # Valor cedido se torna a variável 'cm'
    finally:
        print('Exit')    # Código após o yield é executado em __exit__

with context_manager(2) as cm:  # cm recebe o valor cedido (3)
    print('Right in the middle with cm = {}'.format(cm))
```

```output
Enter
Right in the middle with cm = 3
Exit
```

## Gerenciador de contexto baseado em classe

Você pode definir um gerenciador de contexto baseado em classe. Os métodos chave são `__enter__` e `__exit__`

```python
# Gerenciador de contexto baseado em classe: implementa os métodos __enter__ e __exit__
class ContextManager:
    def __enter__(self, *args, **kwargs):  # Chamado ao entrar no bloco 'with'
        print("--enter--")
        return self  # Pode retornar um objeto para usar como variável 'as'

    def __exit__(self, *args):  # Chamado ao sair do bloco 'with'
        print("--exit--")

with ContextManager():  # Chama __enter__, depois __exit__ quando concluído
    print("test")
```

```output
--enter--
test
--exit--
```

<BaseQuiz id="cheatsheet-context-manager-2" correct="B">
<template #question>
Quais métodos uma classe deve implementar para ser usada como um gerenciador de contexto?
</template>

<BaseQuizOption value="A">A. <code>**init**</code> e <code>**del**</code></BaseQuizOption>
<BaseQuizOption value="B" correct>B. <code>**enter**</code> e <code>**exit**</code></BaseQuizOption>
<BaseQuizOption value="C">C. <code>open</code> e <code>close</code></BaseQuizOption>
<BaseQuizOption value="D">D. <code>start</code> e <code>stop</code></BaseQuizOption>
<BaseQuizAnswer>Um gerenciador de contexto baseado em classe deve implementar <code>**enter**</code> (chamado ao entrar no bloco <code>with</code>) e <code>**exit**</code> (chamado ao sair do bloco).</BaseQuizAnswer>
</BaseQuiz>

## Links relevantes

- <router-link to="/cheatsheet/reading-and-writing-files">Leitura e Escrita de Arquivos</router-link>
- <router-link to="/cheatsheet/exception-handling">Tratamento de Exceções</router-link>
- <router-link to="/cheatsheet/decorators">Decorators</router-link>
- <router-link to="/blog/python-pathlib-essentials">10 Operações Essenciais do Sistema de Arquivos que Todo Desenvolvedor Deve Conhecer</router-link>
- <router-link to="/builtin/open">open()</router-link>
