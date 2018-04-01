---
path: "/react/pure-component"
date: "2018-02-09"
title: "Deep Copy와 Shallow Copy, Pure Component"
---

### Agenda
- Shallow Copy와 Deep Copy
- React.Component 와 React.PureComponent의 차이

---

### Shallow Copy is

우리는 값의 '복제'라는 개념을 생각할 때 '별개의 것'이라고 예상합니다. 

즉, 복제가 진행되면 복제된 대상과 원본은 서로 영향을 끼치지 않는 다는 것을 의미합니다.

'Shallow'라는 단어의 의미는 __물리적으로 두께 또는 깊이 따위가 얕다__라는 뜻을 갖고 있습니다. (얄팍하다 라는 뜻도 있다.)

다시 말해, 'Shallow Copy'는 __객체의 복제 과정이 깊지 않음__을 의미합니다.

아래의 예제를 살펴보면 Shallow Copy의 의미를 이해할 수 있습니다.

```javascript
    let originalObj = { a: 1, b: {c: 2} };
    let shallowCopyObj = Object.assign({}, originalObj);
    
    shallowCopyObj.b.c = 3;
    console.log(originalObj.b.c) // output 3 : 복제의 원본이 되는 객체의 프로퍼티 값이 바뀐다.
```

'Shallow Copy'가 진행될 때 '복제'하려는 값이 참조 타입인 객체이고 그 객체의 내부 프로퍼티가 '참조 타입'인 값이 존재하는 경우,

참조 값은 프로퍼티가 그대로 유지된 채 새로운 객체가 생성됩니다.

`Shallow Copy'가 진행되어 만들어진 복제된 객체의 프로퍼티와, 원본의 프로퍼티는 서로 같은 것을 가리키게 됩니다.

따라서 참조 타입 값을 프로퍼티로 갖고 있는 객체를 복제할 때는 

프로퍼티들도 모두 온전히 복제가 이루어져야 하는 지에 대해 한번 더 생각해 볼 필요성이 있습니다.

참조 값인 프로퍼티들 또한 복제가 이루어지는 과정을 'Deep Copy'라고 합니다.

---

### Deep Copy is

'Deep Copy'에서 'Deep'은 'Shallow'와는 반대의 표현입니다. 즉, '깊다.(물리적으로)'를 의미합니다.

그럼 'Deep Copy'의 과정이 'Shallow Copy'와 다른 점을 생각해봅시다.

'Shallow Copy'는 복제하는 대상이 객체일 경우 새로운 객체를 만들고 그 객체가 갖고 있는 내부를 복제하는 과정을 한번만 거치며 끝이 납니다.

여기서 주목할 것은 복제하는 대상이 참조 타입인 '객체'임을 확인하고 객체일 경우 새로운 객체를 만드는 과정입니다.

'Shallow Copy'는 객체인지를 확인하고 새로운 객체를 할당하는 과정을 원본 객체 자체만 거치고,

'Deep Copy'는 원본 객체의 프로퍼티들을 모두 거친다는 차이점이 있습니다.

```javascript
    //Deep Copy의미를 clone으로 대체하여 표현하기도 있습니다. 
    function cloneObject(obj) {
        var cloneObj = {};
        for(var i in obj) {
            if(obj[i] !== null &&  typeof(obj[i]) === "object") {
                cloneObj[i] = cloneObject(obj[i]);
            } else {
                cloneObj[i] = obj[i];
            }
        }
        return cloneObj;
    }

    let originalObj = { a: 1, b: {c: 2} };
    let shallowCopyObj = cloneObject(originalObj);
    shallowCopyObj.b.c = 3;
    
    console.log(originalObj.b.c); // output 2
```

---

### Component is

React에서 컴포넌트는 어플리케이션을 구성하는 '단위'라고 할 수 있습니다.

예를 들어 Todo 앱을 만든다고 가정하면 여러가지 기준을 통해 어플리케이션을 나눠 컴포넌트를 관리할 수 있습니다.

React는 여러 컴포넌트들의 조합으로 어플리케이션을 만듭니다.

React의 컴포넌트들은 부모-자식 관계를 만들 수 있으며, 

![Image](http://blog.mgechev.com/images/overview-components/component-tree.png)

기본적인 컴포넌트는 React 라이브러리 내에 있는 __Component__를 상속을 통해 구현할 수 있습니다.

컴포넌트들 사이에 부모-자식 관계가 생성되면 데이터를 주고 받을 수 있으며 __One-way data flow__입니다.

```jsx
import React, { Component } from 'react';

export default class Normal extends Component {

  render() {
    return (
      <div>
        This is just Component
      </div>
    )
  }
}

```

기본적으로 부모의 컴포넌트가 Rendering 되면 자식 컴포넌트도 함께 Rendering 됩니다.

그러나 무조건적인 Rendering은 비효율적이기 때문에 React의 컴포넌트는 Rendering을 통제할 수 있는 메서드를 갖고 있습니다.

__shouldComponentUpdate__라는 메서드를 통해 컴포넌트의 Rendering을 컨트롤할 수 있습니다.

__shouldComponentUpdate__라는 메서드는 인자로 nextProps와 nextState를 받으며,

Return 값으로 true , false 넘기며 true, false 여부에 따라 컴포넌트를 Rendering 합니다.

React의 __Component__를 통해 만들어진 컴포넌트는 기본적으로 __shouldComponentUpdate__를 실행하지 않습니다.

그렇기 때문에 무조건적인 Rendering을 막기 위해서는 __shouldComponentUpdate__를 따로 구현하여 통제하거나, 컴포넌트를 재설계해야하는 과정이 필요합니다.

---

### PureComponent is

컴포넌트의 종류 중 __PureComponent__라는 것이 존재합니다.

이것은 React 라이브러리 내에 있으며 컴포넌트를 만들 때 __Component__대신 사용할 수 있습니다.

이 둘의 차이는 __shouldComponentUpdate__의 __실행여부__ 입니다.

__PureComponent__를 통해 컴포넌트를 만들면 컴포넌트 렌더링 시점에 __shouldComponentUpdate__를 실행하게 되는데,

__PureComponent__는 props와 state를 캐싱합니다.

캐싱된 props와 state를 새로 들어온 props, state외 __Shallow Comparison__(얕은 비교를) 하여 Rendering 여부를 판단합니다.

Rendering 시점에서 props나 state의 변화가 없으면 컴포넌트를 Rendering 하지 않습니다.

여기서 주의해야 할 점은 __Shallow Comparison__(얕은 비교)이기 때문에 props와 state의 데이터 구조가 복잡한 형태일 경우,

컴포넌트의 Rendering 시점이 원하지 않는 방향으로 판단될 수 있습니다.

[참조 링크](https://reactjs.org/docs/react-api.html#reactpurecomponent)