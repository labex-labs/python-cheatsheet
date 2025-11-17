---
title: 'Módulo CSV do Python - Folha de Dicas Python'
description: 'O Python possui um módulo csv, que permite trabalhar facilmente com arquivos CSV.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Módulo Python CSV
</base-title>

O módulo `csv` fornece ferramentas para ler e escrever em arquivos CSV, que são comumente usados para troca de dados.

<base-disclaimer>
  <base-disclaimer-title>
    Módulo csv vs Leitura-Escrita Manual de Arquivos
  </base-disclaimer-title>
  <base-disclaimer-content>
    Embora você possa ler e escrever arquivos CSV usando operações básicas de arquivo e métodos de string (como <code>open()</code> com <code>read</code> ou <code>write</code> e <code>split()</code>), o módulo <code>csv</code> foi projetado para lidar com casos extremos, como campos entre aspas, delimitadores incorporados e diferentes quebras de linha. Ele garante compatibilidade com arquivos CSV gerados por outros programas (como Excel) e reduz o risco de erros de análise. Para a maioria das tarefas CSV, prefira o módulo <code>csv</code> em vez da análise manual.
    <br>
    Para mais informações sobre os fundamentos do manuseio de arquivos, consulte a página <router-link to="/cheatsheet/file-directory-path">File and directory Paths</router-link>.
  </base-disclaimer-content>
</base-disclaimer>

Para começar, importe o módulo:

```python
import csv
```

## csv.reader()

Esta função recebe um arquivo que deve ser um [iterável de strings](https://docs.python.org/3/library/csv.html#id4:~:text=A%20csvfile%20must%20be%20an%20iterable%20of%20strings%2C%20each%20in%20the%20reader%E2%80%99s%20defined%20csv%20format). Em outras palavras, deve ser o arquivo aberto, pois segue este formato:

```python
import csv

file_path = 'file.csv'

# Ler arquivo CSV
with open(file_path, 'r', newline='') as csvfile:
  reader = csv.reader(csvfile)

  # Iterar sobre cada linha
  for line in reader:
    print(line)
```

Esta função retorna um objeto leitor que pode ser facilmente iterado para obter cada linha. Cada coluna nas linhas correspondentes pode ser acessada pelo índice, sem a necessidade de usar a função embutida [`split()`](https://www.pythoncheatsheet.org/cheatsheet/manipulating-strings#split).

## csv.writer()

Esta função recebe o arquivo a ser escrito como um arquivo csv. Semelhante à função leitor, ela deve ser invocada desta forma:

```python
import csv

file_path = 'file.csv'

# Abrir arquivo para escrita CSV
with open(file_path, 'w', newline='') as csvfile:
  writer = csv.writer(csvfile)

  # fazer algo
```

O bloco "fazer algo" pode ser substituído pelo uso das seguintes funções:

### writer.writerow()

Escreve uma única linha no arquivo CSV.

```python
# Escrever linha de cabeçalho
writer.writerow(['name', 'age', 'city'])
# Escrever linha de dados
writer.writerow(['Alice', 30, 'London'])
```

### writer.writerows()

Escreve múltiplas linhas de uma vez.

```python
# Preparar múltiplas linhas
rows = [
    ['name', 'age', 'city'],
    ['Bob', 25, 'Paris'],
    ['Carol', 28, 'Berlin']
]
# Escrever todas as linhas de uma vez
writer.writerows(rows)
```

## csv.DictReader

Permite ler arquivos CSV e acessar cada linha como um dicionário, usando a primeira linha do arquivo como chaves (cabeçalhos de coluna) por padrão.

```python
import csv

# Ler CSV como dicionário (primeira linha se torna chaves)
with open('people.csv', 'r', newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    # Acessar colunas pelo nome em vez de índice
    for row in reader:
        print(row['name'], row['age'])
```

- Cada `row` é um `OrderedDict` (ou um `dict` regular no Python 3.8+).
- Se o seu CSV não tiver cabeçalhos, você pode fornecê-los com o parâmetro `fieldnames`:

  ```python
  reader = csv.DictReader(csvfile, fieldnames=['name', 'age', 'city'])
  ```

## csv.DictWriter

Permite escrever dicionários como linhas em um arquivo CSV. Você deve especificar os `fieldnames` (cabeçalhos de coluna) ao criar o escritor.

```python
import csv

fieldnames = ['name', 'age', 'city']
rows = [
    {'name': 'Alice', 'age': 30, 'city': 'London'},
    {'name': 'Bob', 'age': 25, 'city': 'Paris'}
]

# Escrever dicionários em CSV
with open('people_dict.csv', 'w', newline='') as csvfile:
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()  # escreve a linha de cabeçalho
    writer.writerows(rows)
```

- Use `writer.writeheader()` para escrever os cabeçalhos das colunas como a primeira linha.
- Cada dicionário em `writer.writerows()` deve ter chaves que correspondam aos `fieldnames` especificados ao criar o escritor.

## Parâmetros adicionais para csv.reader() e csv.writer()

### delimiter

Deve ser o caractere usado para separar os campos. Como o tipo de arquivo indica, o padrão é a vírgula ','. Dependendo da localidade, o Excel pode gerar arquivos csv com o ponto e vírgula como delimitador.

```python
import csv

# Ler CSV com delimitador ponto e vírgula
with open('data_semicolon.csv', newline='') as csvfile:
    reader = csv.reader(csvfile, delimiter=';')
    for row in reader:
        print(row)
```

### lineterminator

Caractere ou sequência de caracteres para terminar uma linha. O mais comum é "\r\n", mas pode ser "\n".

### quotechar

Caractere usado para colocar entre aspas campos que contêm caracteres especiais (o padrão é `"`).

```python
# Usar aspas simples como caractere de citação
reader = csv.reader(csvfile, quotechar="'")
```

Para mais detalhes, consulte a <a href="https://docs.python.org/3/library/csv.html" target="_blank" rel="noopener">documentação oficial do módulo csv do Python</a>.
