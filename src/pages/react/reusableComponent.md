---
path: "/react/reusableComponent"
date: "2018-01-23"
title: "재사용 가능한 컴포넌트의 의미"
---

### 개요
- 리액트 컴포넌트를 만드는 방법
- 상태 비저장 함수형 컴포넌트
- 상태를 사용할 때와 사용하지 않을 때
- 각 컴포넌트의 프로퍼티 형식을 명확하게 정의해야 하는 이유
- 리액트 독젠을 이용해 동적으로 설명서 생성하기
- 결합된 컴포넌틀르 재사용 가능 컴포넌트로 변환하는 과정
- 리액트 스토리북을 사용해 재사용 가능 컴포넌트 컬렉션의 문서를 생성

---

### 클래스 만들기

#### `createClass 팩토리`
첫 번째 방법은 React Core 내에 있는 메서드를 사용하는 방법입니다.

```javascript
<!-- Using JSX -->
const Button = React.creatClass({
  render() {
    <button />
  },
});
//Need to use babel for transfiling

<!-- Using Pure JS -->
const Button = React.createClass({
  render() {
    return React.createElement('button')
  }
});
//It can be read without babel
```

#### `React.Component 확장`
두 번째 방법은 ES2015의 Class를 사용하는 것입니다.

```javascript
Class Button extends React.Component {
  render() {
    return <button />
  }
}
```

#### 차이점
1. 프로퍼티

createClass를 통해 컴포넌트를 생성하면 프로퍼티는 createClass 내에 선언합니다.

```javascript

const Button = React.createClass({
  propTypes: {
    text: React.PropTypes.string
  },
  getDefaultProps() {
    return {
      text: 'Click me'
    }
  }
  render() {
    return <button>{this.props.text}</button>
  }
})

```

만약 ES2015의 클래스 구조로 컴포넌트를 생성하게 되면 클래스를 먼저 정의한 다음 클래스의 프로퍼티를 설정합니다. 선언된 클래스의 프로퍼티는 클래스를 통해 생성된 컴포넌트의 프로퍼티가 됩니다.

```javascript
class Button extends React.Component {
  render() {
    return <button>{this.props.text}</button>
  }
}

Button.propTypes = {
  text: React.PropTypes.string
}

Button.defaultProps = {
  text: 'Click me'
}
```

2. 초기 상태 설정

createClass를 통해 컴포넌트를 생성할 경우 React API(getInitialState)를 사용해야 하며, 인자로 넘기는 객체 안에 컴포넌트 생성 시 필요한 정보들을 많이 담고 있다는 것을 확인할 수 있습니다.
```javascript
const Button = React.createClass({
  getInitialState() {
    return {
      text: 'Click me'
    }
  },
  render() {
    return <button>{this.state.text}</button>
  }
})
```

ES2015 Class를 통해 상태를 설정할 경우 클래스 내부의 프로퍼티르 선언하며, React API를 사용하지 않습니다. 
또한 ES2015 Class를 통해 정의한 컴포넌트는 this를 사용하기 위해서는
constructor 내에 있는 super가 필요합니다.
```javascript
class Button extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: 'Click me'
    }
  }

  render() {
    return <button>{this.state.text}</button>
  }
}
```

#### 자동 바인딩



