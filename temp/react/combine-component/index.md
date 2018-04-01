---
path: "/react/combine-component"
date: "2018-01-24"
title: "컴포넌트 조합하기"
---

### 개요
- **컴포넌트가 프로퍼티와 자식을 사용해 다른 컴포넌트와 통신하는 방법**
- 컨테이너와 프레젠테이션 패턴으로 코드의 유지 관리성을 개선하는 방법
- 믹스인을 사용한 문제 해결 방법과 실패 이유
- 리컴포즈 라이브러리와 기본 제공 함수
- 컨텍스트와 상호작용하고 컨텍스트와 컴포넌트 간의 결합을 방지하는 방법
- 함수 자식 컴포넌트 패턴과 그 장점 소개

---

컴포넌트가 다른 컴포넌트로 프로퍼티를 전달할 때는 컴포넌트의 부모-자식 관계에 상관없이
전달하는 쪽을 **소유자** 라고 한다.

---

#### Children

소유자가 render 메서드 안에 정의된 컴포넌트로 전달하는 children이라는 특수한 프로퍼티가 있다.
이 프로퍼티는 포함하는 값에 대한 정보를 제공하지 않기 때문에 불투명하다.

프로퍼티는 JSX에서 컴포넌트 자체의 속성으로서 전달되거나, createElement 함수의 두 번째 매개변수로
전달된 프로퍼티를 받는다.

```javascript

const Button = ({children}) => {
    <button className='btn'>{children}</button>
}

Button.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.array,
        React.PropTypes.element
    ])
}
/*
    children 요소가 하나 있는 경우,
    배열이 아닌 요소로 반환되기 떄문에 children 요소의 타입을 정의할 때
    주의해야 한다.
*/

<Button>
    <img src='' />
    <span>text</span>
</Button>
/*
    이 내용이 children에 모두 담겨
    그대로 렌더링 된다.
*/

```

---

#### 컨테이너와 프레젠테이션 패턴

