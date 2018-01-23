---
path: "/react/reusableComponent"
date: "2018-01-23"
title: "재사용 가능한 컴포넌트의 의미"
---

### 개요
- **리액트 컴포넌트를 만드는 방법**
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

---

### 차이점

**1. 프로퍼티**

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

**2. 초기 상태 설정**

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

**3. 자동 바인딩**

클래스를 구현하는 방법에 따라서 this 바인딩 동작이 달라진다.

createClass를 사용할 경우의 this는 생성되는 컴포넌트를 잘 가리킨다.

```javascript
  const Button = React.createClass({
    handleClick() {
      console.log(this)
    },

    render() {
      return <button onClick={this.handleClick} />
    }
  })
```

하지만 React.Component를 확장해 컴포넌트를 생성하는 방식의 경우 this 값은 null을 가리킨다.
함수가 이벤트 핸들러로 전달이 될 때 this가 자동으로 바인딩되는 과정에서 this의 참조값을 잃어버리기 때문이다.
따라서 수동으로 바인딩 시키거나, 다른 방법으로 처리해줘야 한다.

```javascript
  class Button extends React.Component {
    handleClick() {
      console.log(this)
    }

    render() {
      return <button onClick={this.handleClick} />
    }
    //this = null
  }
```

첫 번째 방법은 Arrow 함수를 사용하는 것이다.
Arrow 함수의 this는 함수 Scope의 바깥 영역으로 this를 바인딩 한다.

```javascript
  
  () => this.setState()
  
  //Transfiling이 되면 아래와 같아진다.

  var _this = this;

  (function() {
    return _this.setState();

  })

```
따라서 이전에 this 바인딩을 수동으로 해주어야 하는 상황을 Arrow 함수를 사용해서 문제점을 보완할 수 있다.

```javascript

class Button extends React.Component {
  handleClick() {
    console.log(this);
  }

  render() {
    return <button onClick={() => this.handle()} />
  }
}

```

여기서 주의해야 할 점이 있다.
render 메서드에서 Arrow 함수를 사용해서 바인딩하게 되면 Arrow 함수가 매번 렌더링이 될 때 마다 호출된다.
이는 Transfiling이 되면서 Arrow 함수가 즉시 실행 형태로 바뀌기 때문이다.

그래서 이 문제를 해결하는 가장 좋은 방법은
컴포넌트가 여러 번 렌더링돼도 변경되지 않는 생성자 안에서 함수를 바인딩하는 것이다.

```javascript
  class Button extends React.Component {
    constructor(props) {
      super(props)

      this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
      console.log(this)
    }

    render() {
      return <button onClick={this.handleClick} />
    }
  }
```

이렇게 하면 위에서 언급했던 문제들을 모두 해결할 수 있다.

#### 상태 비저장 함수형 컴포넌트

```javascript
() => <button />
```

이 컴포넌트는 단순히 표시할 요소를 반환하는 함수를 의미한다.
상태 비저장 함수는 매개변수를 통해 props를 받을 수 있다.

```javascript
  props => <button>{props.text}</button>
  ({ text }) => <button>{text}</button>
```

Component를 확장하여 컴포넌트를 만들 때와 마찬가지로
propTypes 속성을 이용해 받게되는 프로퍼티들을 정의할 수 있다.

```javascript
  const Button = ({text}) => <button>{text}</button>

  Button.propTypes = {
    text: propTypes.string
  }
```

또한 두 번째 파라미터로 context를 받을 수 있다.

```javascript
(props, context) => {
  <button>{context.currency}{props.value}</button>
}
```

상태 비저장 컴포넌트는 this가 해당 컴포넌트를 나타내지 않는다.
따라서 라이프 사이클 메서드나 setState 함수를 사용할 수 없다.
단지 프로퍼티와 컨텍스트를 받고 요소를 반환한다. render 메서드만 구현한다.
이런 점 때문에 함수형 프로그래밍의 원칙이 담겨있는 프로그래밍을 할 수 있다.

//ref와 이벤트 핸들러는 ref를 정리하고 진행해야 할 듯






