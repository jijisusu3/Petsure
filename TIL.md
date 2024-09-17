# 0905

### react 관련 공부

### 정리

* public/index.html <title></title>은 탭에 보여주는 이름
* React 컴포넌트 : 상단 import / 중앙 App컴포넌트 / 하단 export

```javascript
// 상단 import
import logo from './logo.svg';
import './App.css';


// 중앙 App컴포넌트
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// 하단 export
export default App;
```

* Import문(App.js 기준)
  * import React from 'react'; -> 지금 react 생성하면 없음. JSX를 `React.createElement()`로 변환
  * import logo from './logo.svg'; -> 로고 불러옴
  * import './App.css'; -> JS모듈구문 X / 웹팩!. App 컴포넌트에 관련된 CSS 불러옴
* App 컴포넌트
  * 컴포넌트 함수는 PascalCase
  * div 태그는 class 대신 className 속성!
* Export 문
  * export default App 통해 App 컴포넌트를 다른 모듈에서 사용 가능



* src/index.js
  * 파일은 자신을 실행하기 위해 필요한 모듈이지만, 다른 에셋들을 모두 임포트하며 시작
  * src/index.css는 전체 앱에 적용되는 전역 스타일
  * App이 Import 된 것은 App.js에서 export했기때문
  * root를 정의했는데 이는 public/index.html에서 div id=root 썻기 때문
  * 랜더링 원하는 함수 여기선 <App />



### 변수 / props

* JSX 안의 변수들

```javascript
<img src={logo} className="App-logo" alt="logo" />
```

* {logo} -> 위에 import logo 가리킴!(JSX 변수)



### 라우터(V6 기준)

* 종류

  * BrowserRouter : HTML5를 지원하는 브라우저 주소 감지
  * HashRouter : 해시 주소(/#text)를 감지

* Router 컴포넌트 사용법

  * ```js
    <Route path="주소규칙" element={보여 줄 컴포넌트 JSX} />
    ```

* 쿼리스트링

  * **pathname**: 현재 주소의 경로 (쿼리스트링 제외)
  * **search**: 맨 앞의 ? 문자 포함한 쿼리스트링 값
  * **hash**: 주소의 # 문자열 뒤의 값 (주로 History API 가 지원되지 않는 구형 브라우저에서 클라이언트 라우팅을 사용할 때 쓰는 해시 라우터에서 사용합니다.)
  * **state**: 페이지로 이동할때 임의로 넣을 수 있는 상태 값
  * **key**: `location` 객체의 고유 값, 초기에는 `default` 이며 페이지가 변경될때마다 고유의 값이 생성됨
  * V6부턴 useSearchParams Hook 통해 쿼리스트링을 따로 파싱해야하는 번거로움 X(src/pages/About.js)

* 라우팅
  * r[eact-router-dom v6 업그레이드 되면서 달라진 것들](https://velog.io/@soryeongk/ReactRouterDomV6)



### 리액트 훅

* [리액트 훅 기본](https://iamiet.tistory.com/69#%E-%--%-F%--useEffect)
* [React로-...더보기-버튼-만들기-반응형](https://velog.io/@arihi/React로-...더보기-버튼-만들기-반응형)
* [useRef 사용법](https://www.daleseo.com/react-hooks-use-ref/)
* [React로 타이머 구현하기 Part.3 (完) (velog.io)](https://velog.io/@leobang17/React로-타이머-구현하기-pt.3)





# 0906

### redux 관련 공부

### 정리

* props 문법 대신
  * props는 state를 하위 component로 전달전달 해야되므로 이 과정을 없애기위함
  * store.js 만들어서 필요한 state를 저장해두면 각 component에 쉽게 쓸 수 있다.

* state 변경관리(상태관리)에 좋다.
  * 하나의 state를 여러 component에서 다른 방식으로 수정할 때 추적/관리하기 쉽다.
  * store.js에 state의 수정방법을 정의해 두고, component에서 수정사항 요청만 하도록 코드 제한

* 참고 영상
  * https://www.youtube.com/watch?v=QZcYz2NrDIs





# 0913

### 로고 제작

* adobe express
  * https://express.adobe.com/ko-KR/sp/design/post/urn:aaid:sc:AP:5c3d1f8c-3866-46a7-8ccb-855c63ae25bb

### git cz

* commitizen으로 커밋 버전관리
  * https://dailyheumsi.tistory.com/266





# 0914

### 와이어프레임

* 질병사전 page

### 로고

* 로고 다시 제작 중..



# 0915

### 로고

* 로고 제작 / 피그마 적용



# 0916

### 와이어프레임

* 펫 보험 완료
* 질병 상식 진행 중