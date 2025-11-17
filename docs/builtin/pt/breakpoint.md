---
title: 'Função Embutida breakpoint() do Python - Folha de Dicas Python'
description: 'Esta função o leva diretamente ao depurador no ponto de chamada. Especificamente, ela chama sys.breakpointhook(), passando argumentos e palavras-chave diretamente. Por padrão, sys.breakpointhook() chama pdb.set_trace(), esperando nenhum argumento. Neste caso, é puramente uma função de conveniência para que você não precise importar explicitamente o pdb ou digitar tanto código para entrar no depurador. No entanto, sys.breakpointhook() pode ser configurado para outra função e breakpoint() chamará automaticamente essa função, permitindo que você entre no depurador de sua escolha.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Função built-in Python breakpoint()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    Da <a target="_blank" href="https://docs.python.org/3/library/functions.html#breakpoint">documentação do Python 3</a>
  </base-disclaimer-title>
  <base-disclaimer-content>
    Esta função o leva ao depurador no local da chamada [...].
    <br/>
    Python breakpoint() chama o depurador Python em uma determinada linha
  </base-disclaimer-content>
</base-disclaimer>

## Introdução

A função `breakpoint()` em Python, introduzida no Python 3.7, fornece uma maneira fácil de entrar no depurador Python (`pdb`) em um ponto específico do seu código. É uma alternativa conveniente a importar manualmente `pdb` e chamar `pdb.set_trace()`. Esta função simplifica o processo de depuração, permitindo inspecionar variáveis e percorrer seu código interativamente.

## Exemplo

Veja como você pode usar `breakpoint()` para pausar a execução e inspecionar variáveis:

```python
def calculate_sum(a, b):
    result = a + b
    # Queremos inspecionar 'result' antes de retornar
    breakpoint()
    return result

# Quando você executa isso, o depurador iniciará logo após 'result' ser calculado
# Você pode então digitar 'result' no prompt (Pdb) para ver seu valor
# Para continuar a execução, digite 'c' ou 'continue'
final_sum = calculate_sum(10, 20)
print(final_sum)
```

Saída:

```plaintext
(Pdb) result
30
(Pdb) c
30
```

## Links relevantes

- <router-link to="/cheatsheet/debugging">Cheatsheet: Debugging</router-link>
- <router-link to="/cheatsheet/control-flow">Cheatsheet: Control Flow</router-link>
- <router-link to="/builtin/print">print()</router-link>
- <router-link to="/builtin/input">input()</router-link>
- <router-link to="/builtin/eval">eval()</router-link>
- <router-link to="/builtin/exec">exec()</router-link>
- <router-link to="/builtin/globals">globals()</router-link>
- <router-link to="/builtin/locals">locals()</router-link>
