---
title: '파이썬 메인 함수 - 파이썬 치트 시트'
description: '최상위 코드가 실행되는 범위의 이름입니다. 모듈의 이름은 표준 입력, 스크립트 또는 대화형 프롬프트에서 읽을 때 main 으로 설정됩니다.'
labUrl: 'https://labex.io/ko/labs/python-python-main-function-633661?course=python-cheatsheet'
---

<base-title :title="frontmatter.title" :description="frontmatter.description">
주요 최상위 스크립트 환경
</base-title>

<base-lab-url :url="frontmatter.labUrl" />

## 무엇인가요?

`__main__`은 최상위 코드가 실행되는 범위의 이름입니다.
모듈의 **이름**은 표준 입력, 스크립트 또는 대화형 프롬프트에서 읽을 때 `__main__`과 동일하게 설정됩니다.

모듈은 자신의 `__name__`을 확인하여 메인 범위에서 실행 중인지 여부를 확인할 수 있으며, 이를 통해 모듈에서 코드를 조건부로 실행하는 일반적인 관용구를 사용할 수 있습니다. 스크립트로 실행되거나 `python -m`으로 실행될 때는 실행되지만, 가져오기 (import) 될 때는 실행되지 않습니다.

```python
# __name__ == "__main__": 스크립트가 직접 실행되는지 확인 (가져오기 시 아님)
if __name__ == "__main__":  # 스크립트로 실행될 때 True, 가져오기 시 False
    # 스크립트로 실행될 때만 실행
    main()
```

패키지의 경우, **main**.py 모듈을 포함하여 동일한 효과를 얻을 수 있으며, 이 모듈의 내용은 해당 모듈이 -m 으로 실행될 때 실행됩니다.

예를 들어, 모듈로 사용되도록 설계된 스크립트를 개발하는 경우 다음과 같이 해야 합니다.

```python
# 예시: 함수는 가져올 수 있지만, 테스트 코드는 직접 실행될 때만 실행됨
def add(a, b):
    return a+b

if __name__ == "__main__":  # 파일이 직접 실행될 때만 실행되며, 가져오기 시에는 실행되지 않음
    add(3, 5)
```

## 장점

1. 모든 Python 모듈에는 `__name__`이 정의되어 있으며, 이것이 `__main__`인 경우 사용자가 모듈을 독립적으로 실행하고 있음을 의미하므로 그에 따른 적절한 조치를 취할 수 있습니다.
2. 이 스크립트를 다른 스크립트에서 모듈로 가져오면 **이름**이 스크립트/모듈의 이름으로 설정됩니다.
3. Python 파일은 재사용 가능한 모듈 또는 독립 실행형 프로그램 역할을 할 수 있습니다.
4. `if __name__ == "__main__":`은 파일이 직접 실행될 때만 특정 코드를 실행하고, 가져오기될 때는 실행하지 않도록 하는 데 사용됩니다.

## 관련 링크

- <router-link to="/cheatsheet/functions">함수</router-link>
- <router-link to="/cheatsheet/setup-py">setup.py</router-link>
- <router-link to="/blog/python-projects-with-poetry-and-vscode-part-1">Poetry 및 VSCode 를 사용한 Python 프로젝트. 파트 1</router-link>
- <router-link to="/builtin/import">import()</router-link>
