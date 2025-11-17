---
title: 'Python 내장 함수 breakpoint() - Python 치트 시트'
description: '이 함수는 호출 지점에서 디버거로 진입하게 합니다. 구체적으로 sys.breakpointhook() 을 호출하며 인자 (args) 와 키워드 인자 (kws) 를 그대로 전달합니다. 기본적으로 sys.breakpointhook() 은 인자를 받지 않는 pdb.set_trace() 를 호출합니다. 이 경우, 명시적으로 pdb 를 가져오거나 디버거에 진입하기 위해 더 많은 코드를 입력할 필요가 없는 편리한 함수입니다. 하지만 sys.breakpointhook() 을 다른 함수로 설정할 수 있으며, breakpoint() 는 자동으로 해당 함수를 호출하여 원하는 디버거로 진입할 수 있게 합니다.'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
Python breakpoint() 내장 함수
</base-title>

<base-disclaimer>
  <base-disclaimer-title>
    <a target="_blank" href="https://docs.python.org/3/library/functions.html#breakpoint">Python 3 설명서</a>에서 발췌
  </base-disclaimer-title>
  <base-disclaimer-content>
    이 함수는 호출 지점에서 디버거로 진입합니다 [...].
    <br/>
    Python breakpoint() 는 주어진 줄에서 Python 디버거를 호출합니다
  </base-disclaimer-content>
</base-disclaimer>

## 소개

Python 3.7 에 도입된 `breakpoint()` 함수는 코드의 특정 지점에서 Python 디버거 (`pdb`) 에 쉽게 진입할 수 있는 방법을 제공합니다. 이는 `pdb`를 수동으로 가져와 `pdb.set_trace()`를 호출하는 편리한 대안입니다. 이 함수는 디버깅 프로세스를 단순화하여 변수를 검사하고 코드를 대화형으로 단계별로 실행할 수 있게 해줍니다.

## 예시

다음은 `breakpoint()`를 사용하여 실행을 일시 중지하고 변수를 검사하는 방법입니다.

```python
def calculate_sum(a, b):
    result = a + b
    # 반환하기 전에 'result'를 검사하고 싶습니다
    breakpoint()
    return result

# 이것을 실행하면, 'result'가 계산된 직후 디버거가 시작됩니다
# 그런 다음 (Pdb) 프롬프트에서 'result'를 입력하여 값을 확인할 수 있습니다
# 실행을 계속하려면 'c' 또는 'continue'를 입력하십시오
final_sum = calculate_sum(10, 20)
print(final_sum)
```

출력:

```plaintext
(Pdb) result
30
(Pdb) c
30
```

## 관련 링크

- <router-link to="/cheatsheet/debugging">치트 시트: 디버깅</router-link>
- <router-link to="/cheatsheet/control-flow">치트 시트: 제어 흐름</router-link>
- <router-link to="/builtin/print">print()</router-link>
- <router-link to="/builtin/input">input()</router-link>
- <router-link to="/builtin/eval">eval()</router-link>
- <router-link to="/builtin/exec">exec()</router-link>
- <router-link to="/builtin/globals">globals()</router-link>
- <router-link to="/builtin/locals">locals()</router-link>
