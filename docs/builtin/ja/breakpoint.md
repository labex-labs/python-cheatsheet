---
title: 'Python 組み込み関数 breakpoint() - Python チートシート'
description: 'この関数は、呼び出し箇所でデバッガを起動します。具体的には、引数とキーワード引数をそのまま渡して sys.breakpointhook() を呼び出します。デフォルトでは、sys.breakpointhook() は引数を取らずに pdb.set_trace() を呼び出します。これは、pdb を明示的にインポートしたり、デバッガに入るために入力するコード量を減らすための単なる便利な関数です。ただし、sys.breakpointhook() は別の関数に設定でき、breakpoint() はそれを自動的に呼び出し、選択したデバッガにドロップインできます。'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python の組み込み関数 breakpoint()
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#breakpoint">Python 3 ドキュメント</a>より
  </base-disclaimer-title>
  <base-disclaimer-content>
    この関数は、呼び出し箇所でデバッガに入ります [...].
    <br/>
    Python breakpoint() は指定された行で Python デバッガを呼び出します
  </base-disclaimer-content>
</base-disclaimer>

## 導入

Python 3.7 で導入された`breakpoint()`関数は、コードの特定の場所で Python デバッガ（`pdb`）に入る簡単な方法を提供します。これは、手動で`pdb`をインポートして`pdb.set_trace()`を呼び出すことの便利な代替手段です。この関数はデバッグプロセスを簡素化し、変数の検査やコードの対話的なステップ実行を可能にします。

## 例

変数を検査するために`breakpoint()`を使用する方法を以下に示します。

```python
def calculate_sum(a, b):
    result = a + b
    # 返す前に 'result' を検査したい
    breakpoint()
    return result

# これを実行すると、'result' が計算された直後にデバッガが起動します
# その後、(Pdb) プロンプトで 'result' と入力するとその値を確認できます
# 実行を続行するには、'c' または 'continue' と入力します
final_sum = calculate_sum(10, 20)
print(final_sum)
```

出力：

```plaintext
(Pdb) result
30
(Pdb) c
30
```

## 関連リンク

- <router-link to="/cheatsheet/debugging">チートシート：デバッグ</router-link>
- <router-link to="/cheatsheet/control-flow">チートシート：制御フロー</router-link>
- <router-link to="/builtin/print">print()</router-link>
- <router-link to="/builtin/input">input()</router-link>
- <router-link to="/builtin/eval">eval()</router-link>
- <router-link to="/builtin/exec">exec()</router-link>
- <router-link to="/builtin/globals">globals()</router-link>
- <router-link to="/builtin/locals">locals()</router-link>
