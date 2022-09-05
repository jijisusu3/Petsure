# 리액트 기초 & JSX

## React의 특징

### 라이브러리 vs. 프레임워크

- 라이브러리는 개발 편의를 위한 도구의 모음
- 프레임워크는 기반 구조까지 잡혀있음
- 즉, 라이브러리는 공구, 프레임워크는 공장
- React는 라이브러리를 표방

### 생태계

- 생태계가 풍부하다 = 구글링하기 좋다
- 생태계가 풍부한 라이브러리를 택했을 때의 이점
    - 해당 기술에 대한 관심도, 실제 사용 빈도, 사용자 수가 많음
    - 관련 라이브러리(도구)가 많음
    - 문제를 해결할 방법을 찾기가 쉬움 (ex: StackOverflow)
    - 나와 같은 고민을 하는, 혹은 했던 사람이 많음
    - 실무에서 사용할 확률이 높음
- 이런 점에서 React는 생태계가 빈약한 라이브러리에 비해 상당한 이점을 가지고 있음

### 기술적 근간

- 많은 사람들에게 사랑받고 있다 ≠ 기술적 근간이 좋다
- 하지만 리액트는 기술적으로 확실한 장점이 있음
    - Virtual DOM, JSX, Flux, 함수형 프로그래밍 등
- 새로운 기술을 배우는 시작점으로 좋음

### With 라이브러리

- 생태계가 성숙해가면서 고민의 깊이 또한 성숙해짐
- 리액트를 풍성하게 해주는 라이브러리들이 많고, 새롭고 좋은 라이브러리들이 계속 나오고 있음
    - ex: SWR, Framer motion 등

## JSX

### DOM (Document Object Model)

- 문서를 논리 트리로 표현
- 브라우저가 이해하는 Element의 원형
- 메모리에 웹 페이지 문서 구조를 표현
- 즉, DOM으로부터 Element가 나옴

### 리액트에서 DOM를 렌더링하는 방법

- `React.createElement(type, [props], [...children])`로 Element 생성
    
    ```jsx
    const rootElement = document.getElementById('root');
    
    // React로 Element 생성
    let element = React.createElement('h1', { children: 'Hello, world!' });
    
    // props 없이 children만 넘길 수 있음
    element = React.createElement('h1', null, 'Hello, world!');
    
    // props로 클래스 이름을 전달할 수 있음
    // 주의: React에서는 클래스 이름을 나타내는 프로퍼티가 class가 아니라 className
    element = React.createElement(
    	'h1', 
    	{ 
    		className: 'title',
    		children: 'Hello, world!' 
    	}
    );
    
    // props.children보다 세 번째 인자로 준 요소의 값이 더 우선순위가 높음
    element = React.createElement(
    	'h1', 
    	{ 
    		className: 'title',
    		children: 'Hello, world!' 
    	},
    	'Hello, world!!!!!!'
    );  // => Hello, world!!!!!!
    
    // props.children에는 배열 타입으로 여러 개의 값을 전달할 수 있음
    // props 대신 세 번째 인자에도 마찬가지
    element = React.createElement(
    	'h1', 
    	{ 
    		className: 'title',
    		children: ['Hello, world!', "It's me!"]
    	}
    );  // => Hello, world! It's me!
    element = React.createElement(
    	'h1', 
    	{ 
    		className: 'title'
    	},
    	['Hello, world!', "It's me!"]
    );  // => Hello, world! It's me!
    ```
    
- `ReactDOM.render(element, container[, callback])`로 자식 Element 연결
    
    ```jsx
    ReactDOM.render(element, rootElement);
    ```
    

### JSX 사용법

- 위의 예시처럼 Element를 계속 생성하려 하면 번거로움
- 문자도 HTML도 아닌 JS의 확장 문법인 JSX로 Element를 쉽게 생성할 수 있음
    
    ```jsx
    const element = <h1>Hello, world!</h1>;  // => Hello, world!
    ```
    
- 해석하려면 JS 컴파일러인 Babel이 필요
    - 주의: CDN으로 Babel을 사용할 경우 `<script>`태그에 `type="text/babel"` 속성을 추가할 것
- JSX 안에 변수를 주입해줄 수 있음
    - `{ }` 안에 변수를 넣어서 표현
    
    ```jsx
    const text = 'Hello, world!';
    const titleClassName = 'title';
    
    // 클래스명은 title이 됨
    // 속성에 변수를 주입할 때는 큰따옴표를 사용하지 말 것
    let element = <h1 className={titleClassName}>{text}</h1>;  // => Hello, world!
    
    // children으로 props를 넘겨주면 닫는 태그가 필요 없음
    element = <h1 className={titleClassName} children={text} />;  // => Hello, world!
    ```
    
- props 객체 자체를 넘겨줄 수도 있음 (Spread 연산자 사용)
    
    ```jsx
    const props = { className: 'title', children: 'Hello, world!' };
    const element = <h1 {...props} />;  // => Hello, world!
    ```
    

### 멀티 Element 생성

- `root` 요소 아래에 3개의 자식 요소를 두고 싶다면?
    
    ```jsx
    const rootElement = document.getElementById('root');
    
    // 두 줄 이상 넘어가는 JSX는 소괄호로 감쌀 것
    const element = (
    	<div className="box" children={
    		[
    			React.createElement('h1', null, 'Hi'),
    			React.createElement('h2', null, 'Bye'),
    			React.createElement('h3', null, 'Children')
    		]
    	} />
    );
    
    ReactDOM.render(element, rootElement);
    ```
    
    - 하지만 이렇게 하면 `root`의 자식 Element로 `div` 태그가 들어가고, 그 아래로 3개의 자식 요소가 들어감
- 위와 같은 상황을 방지하기 위해 `React.Fragment`를 사용
    - 부모로서 감싸주는 역할만 수행, 실제로는 렌더링되지 않음
    
    ```jsx
    const rootElement = document.getElementById('root');
    
    // children 배열 안에 JSX를 사용할 수 있음
    let element = (
    	<React.Fragment children={
    		[
    			<h1>Hi</h1>,
    			React.createElement('h2', null, 'Bye'),
    			React.createElement('h3', null, 'Children')
    		]
    	} />
    );
    
    // props 대신 아래와 같이 직접 주입할 수 있음
    element = (
    	<React.Fragment>
    		{[<h1>H1</h1>, <h2>Bye</h2>, <h3>Children</h3>]}
    	</React.Fragment>
    );
    
    // 아예 괄호와 콤마를 생략할 수도 있음
    element = (
    	<React.Fragment>
    		<h1>H1</h1>
    		<h2>Bye</h2>
    		<h3>Children</h3>
    	</React.Fragment>
    );
    
    // React.Fragment는 생략 가능
    element = (
    	<>
    		<h1>H1</h1>
    		<h2>Bye</h2>
    		<h3>Children</h3>
    	</>
    );
    
    ReactDOM.render(element, rootElement);
    ```
    

### Element 찍어내기

- 같은 Element를 여러 개 찍어내고 싶다면? JSX를 리턴하는 함수를 사용
    
    ```jsx
    const rootElement = document.getElementById('root');
    
    const paint = () => (
    	<>
    		<h1>H1</h1>
    		<h2>Bye</h2>
    	</>
    );
    
    // paint 반복
    const element = (
    	<>
    		{paint()}
    		{paint()}
    		{paint()}
    	</>
    );
    
    ReactDOM.render(element, rootElement);
    ```
    
- 함수에 파라미터 추가
    
    ```jsx
    const rootElement = document.getElementById('root');
    
    const paint = (title, description) => (
    	<>
    		<h1>{title}</h1>
    		<h2>{description}</h2>
    	</>
    );
    
    // paint 반복
    const element = (
    	<>
    		{paint('Good', 'good')}
    		{paint('Bad', 'bad')}
    		{paint('So so', 'so so')}
    	</>
    );
    
    ReactDOM.render(element, rootElement);
    ```
    
- JSX 함수는 첫 번째 파라미터로 `props`를 가짐
    - 참고: `Paint` 함수는 대문자로 시작하는데, 이와 같이 대문자로 시작해야 JSX Element로 인식됨
        - 소문자로 시작할 경우 `<p>`, `<span>` 등과 같이 기존에 존재하는 HTML 요소와 겹칠 수 있으므로 명시적으로 대문자를 사용하여 JSX 기반의 요소임을 나타냄
    
    ```jsx
    const rootElement = document.getElementById('root');
    
    const Paint = ({ title, description }) => (
    	<>
    		<h1>{title}</h1>
    		<h2>{description}</h2>
    	</>
    );
    
    // 위의 예시와 동일하게 동작함
    const element = (
    	<>
    		<Paint title="Good" description="good" />
    		<Paint title="Bad" description="bad" />
    		<Paint title="So so" description="so so" />
    	</>
    );
    
    ReactDOM.render(element, rootElement);
    ```
    
- `props.children`은 자식 태그를 나타냄
    - 자식의 개수는 무제한
    
    ```jsx
    const rootElement = document.getElementById('root');
    
    const Paint = ({ title, description, children }) => (
    	<>
    		<h1>{title}</h1>
    		<h2>{description}</h2>
    		{children}
    	</>
    );
    
    // <h3>Hi</h3> 부분이 Paint의 {children} 부분에 렌더링됨
    const element = (
    	<>
    		<Paint title="Good" description="good">
    			<h3>Hi</h3>
    		</Paint>
    	</>
    );
    
    ReactDOM.render(element, rootElement);
    ```
    

### JS와 JSX 섞어쓰기

- 다음과 같이 JS와 JSX를 섞어서 사용할 수 있음
    - JS 안에 JSX를 쓰거나, JSX 안에 JS를 사용 (Interpolation, 보간법)
        - 이미 HTML에서 Interpolation을 쓰고 있었음 (ex: HTML 안의 `<style>` 태그)
    
    ```jsx
    const Paint = ({ title, description, children }) => (
    	<>
    		<h1>{title}</h1>
    		<h2>{description}</h2>
    		{children}
    	</>
    );
    
    const element = (
    	<>
    		<Paint title="Good" description="good">
    			{Paint({ title: 'Bad', description: 'bad', children: 'hi' })}
    		</Paint>
    	</>
    );
    ```
    
- props로 전달 받은 값이 대문자로 시작하면 `<h1>` 태그로, 소문자로 시작하면 `<h3>` 태그로 렌더링
    
    ```jsx
    const Text = ({ text }) => {
    	// text가 대문자로 시작하면 h1, 소문자로 시작하면 h3
    	if (text.charAt(0) === text.charAt(0).toUpperCase()) {
    		return <h1>{text}</h1>;
    	} else {
    		return <h3>{text}</h3>;
    	}
    };
    
    const element = (
    	<>
    		<Text text="Text" />
    		<Text text="text" />
    	</>
    );
    ```
    
- 짝수를 props로 전달 받으면 `<h1>` 태그로, 홀수를 전달 받으면 `<h3>` 태그로 렌더링
    
    ```jsx
    function Number({ number }) {
    	return number % 2 === 0 ? <h1>{number}</h1> : <h3>{number}</h3>;
    }
    
    let element = (
    	<>
    		<Number number={1} />
    		<Number number={2} />
    	</>
    );
    
    // map을 사용하여 요소 반복
    element = (
    	<>
    		{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(number => (
    			<Number number={number} />
    		))}
    	</>
    );
    ```