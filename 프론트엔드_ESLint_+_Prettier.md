# 프론트엔드 ESLint + Prettier

## 설치법

1. VSCode Extension에서 `ESLint` 설치 (`Prettier`는 설치했으면 비활성)
2. frontend 폴더에서 eslint 초기화 실행: `npx eslint --init`
    - How would you like to use ESLint?
        - `To check syntax, find problems, and enforce code style`
    - What type of modules does your project use?
        - `Javascript modules (import/export)`
    - Which framework does yout project use?
        - `React`
    - Does your project use Typescript?
        - `No`
    - How would you like to define a style for your project?
        - `Use a popular style guide`
    - Where does yout code run? (Press <space> to select, <a> to toggle all, <i> to invert selection)
        - `Browser, Node 둘 다 선택 (a 를 누르면 둘 다 선택됨)`
    - Which style guide do you want to follow?
        - `Standard`
    - What format do you want your config file to be in?
        - `JSON`
    - Would you like to install them now with npm?
        - `Yes`
    - Which package manager do you want to use?
        - `npm`
3. prettier 설치: `npm install --save-dev --save-exact prettier`
4. ESLint 플러그인 설치: `npm i -D eslint-config-prettier eslint-plugin-prettier`
5. frontend 루트 위치에 있는 `.eslintrc.json` 파일을 열고 모조리 지운 다음, 아래 코드를 복붙
    
    ```json
    {
        "env": {
            "browser": true,
            "es2021": true,
            "node": true
        },
        "extends": [
            "plugin:react/recommended",
            "react-app",
    				// airbnb나 standard는 제거해도 됨
            "plugin:prettier/recommended"
        ],
        "parserOptions": {
            "ecmaFeatures": {
                "jsx": true
            },
            "ecmaVersion": "latest",
            "sourceType": "module"
        },
        "plugins": [
            "react"
        ],
        "rules": {
            "prettier/prettier": [
                "error",
                {
                    // prettier 규칙
                }
            ],
    				// 기타 react 관련 규칙
        }
    }
    ```
    
6. VSCode의 설정 > `settings.json`을 열고, 다음 옵션들을 추가할 것
    
    ```json
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
    "[javascript]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascriptreact]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
    ```
    
7. 적용되는 데 시간이 걸릴 수도 있으니 기다릴 것!

## 컨벤션

### Prettier

```json
{
  "singleQuote": true,
  "semi": false,
  "useTabs": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80,
  "arrowParens": "avoid",
  "endOfLine": "auto"
}
```

### ESLint (React)

```json
{
	"react/prefer-stateless-function": 0,
	"react/jsx-filename-extension": 0,
	"react/jsx-one-expression-per-line": 0,
	"react/react-in-jsx-scope": 0
}
```