---
title: 'Módulo Subprocess do Python - Folha de Dicas Python'
description: 'O módulo subprocess permite iniciar e gerenciar processos do sistema.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Subprocess do Python
</base-title>

[Subprocess](https://docs.python.org/3/library/subprocess.html) é um módulo embutido que nos permite gerar novos processos do sistema, conectar-se aos seus fluxos de entrada/saída/erro e obter seus códigos de retorno.

```python
import subprocess
```

## Executando um Comando do Sistema

A função `run` é usada para executar um comando do sistema.

```python
subprocess.run(['echo', 'Hello World!'])
```

```output
Hello World!
```

Se você quiser executar um comando como uma única string em vez de uma lista, use:

```python
subprocess.run('echo Hello World!', shell=True)
```

```output
Hello World!
```

Ambos imprimirão a saída automaticamente no terminal.

<base-warning>
  <base-warning-title>
    AVISO
  </base-warning-title>
  <base-warning-content>
    Evite `shell=True` com entrada não confiável (risco de injeção de shell).
  </base-warning-content>
</base-warning>

## Capturando a Saída

Para capturar a saída, defina `capture_output` como `True`:

```python
result = subprocess.run(
  ['echo', 'Hello World!'],
  capture_output=True,
  text=True
)

output = result.stdout
error = result.stderr
returncode = result.returncode
```

```output
output = "Hello World!\n"
error = ""
returncode = 0
```

Aqui, `text=True` informa à função para ler a saída como texto em vez de bytes.

Um `returncode` de 0 indica sucesso; qualquer valor diferente de zero indica um erro.

## Verificando Erros

Embora possamos verificar o sucesso usando o código de retorno, existe uma maneira mais "Pythônica" de fazer isso:

```python
try:
  result = subprocess.run(
    ['ls', 'my_dir'],
    check=True,
  )
  print('Finished without errors.')
except subprocess.CalledProcessError:
  print('Error: Directory does not exist.')
```

```output
Error: Directory does not exist.
```

Se `check` for definido como `True` e o código de retorno não for 0 (operação malsucedida), o subprocesso levantará um `subprocess.CalledProcessError`, que pode ser tratado da maneira usual usando um bloco `except`.

## Executando Comandos com Tempo Limite (Timeout)

Você pode definir um tempo limite para um processo. Se demorar mais do que o tempo especificado, `subprocess.TimeoutExpired` será levantado:

```python
try:
    subprocess.run(['sleep', '10'], timeout=5)
except subprocess.TimeoutExpired:
    print('Process took too long!')
```

```output
Process took too long!
```

## Gravando a Saída em um Arquivo

Você pode redirecionar a saída para um arquivo definindo `stdout` (e `stderr`, se necessário) para um objeto de arquivo:

```python
with open('output.txt', 'w') as f:
    subprocess.run(['ls', '-l'], stdout=f, stderr=f)
```

Aqui, tanto a saída normal quanto os erros aparecerão no arquivo, na ordem em que são gerados.

**Nota:** `text=True` é útil quando você deseja manipular a saída como uma string em Python. Não é estritamente necessário ao redirecionar a saída diretamente para um arquivo.

## Links Relevantes

- <router-link to="/cheatsheet/reading-and-writing-files">Cheatsheet: Leitura e Escrita de Arquivos</router-link>
- <router-link to="/cheatsheet/file-directory-path">Cheatsheet: Caminho de Arquivo e Diretório</router-link>
- <router-link to="/cheatsheet/exception-handling">Cheatsheet: Tratamento de Exceções</router-link>
- <router-link to="/modules/os-module">Módulo: os</router-link>
- <router-link to="/builtin/open">open()</router-link>
