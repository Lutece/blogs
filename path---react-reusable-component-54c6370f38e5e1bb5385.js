webpackJsonp([0xa7c8eb2710c7],{312:function(n,s){n.exports={data:{markdownRemark:{html:'<h3>개요</h3>\n<ul>\n<li><strong>리액트 컴포넌트를 만드는 방법</strong></li>\n<li>상태 비저장 함수형 컴포넌트</li>\n<li>상태를 사용할 때와 사용하지 않을 때</li>\n<li>각 컴포넌트의 프로퍼티 형식을 명확하게 정의해야 하는 이유</li>\n<li>리액트 독젠을 이용해 동적으로 설명서 생성하기</li>\n<li>결합된 컴포넌틀르 재사용 가능 컴포넌트로 변환하는 과정</li>\n<li>리액트 스토리북을 사용해 재사용 가능 컴포넌트 컬렉션의 문서를 생성</li>\n</ul>\n<hr>\n<h3>\b클래스 만들기</h3>\n<h4><code>createClass 팩토리</code></h4>\n<p>첫 번째 방법은 React Core 내에 있는 메서드를 사용하는 방법입니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> Using JSX <span class="token operator">--</span><span class="token operator">></span>\n<span class="token keyword">const</span> Button <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">creatClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token operator">&lt;</span>button <span class="token operator">/</span><span class="token operator">></span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//Need to use babel for transfiling</span>\n\n<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> Using Pure JS <span class="token operator">--</span><span class="token operator">></span>\n<span class="token keyword">const</span> Button <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">\'button\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//It can be read without babel</span>\n</code></pre>\n      </div>\n<h4><code>React.Component 확장</code></h4>\n<p>두 번째 방법은 ES2015의 Class를 사용하는 것입니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>Class <span class="token class-name">Button</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token operator">&lt;</span>button <span class="token operator">/</span><span class="token operator">></span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<hr>\n<h3>차이점</h3>\n<p><strong>1. 프로퍼티</strong></p>\n<p>createClass를 통해 컴포넌트를 생성하면 프로퍼티는 createClass 내에 선언합니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> Button <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  propTypes<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    text<span class="token punctuation">:</span> React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span>string\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">getDefaultProps</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      text<span class="token punctuation">:</span> <span class="token string">\'Click me\'</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token operator">&lt;</span>button<span class="token operator">></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>text<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>만약 ES2015의 클래스 구조로 컴포넌트를 생성하게 되면 클래스를 먼저 정의한 다음 \b클래스의 프로퍼티를 설정합니다. 선언된 클래스의 프로퍼티는 클래스를 통해 생성된 컴포넌트의 프로퍼티가 됩니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Button</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token operator">&lt;</span>button<span class="token operator">></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>text<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nButton<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n  text<span class="token punctuation">:</span> React<span class="token punctuation">.</span>PropTypes<span class="token punctuation">.</span>string\n<span class="token punctuation">}</span>\n\nButton<span class="token punctuation">.</span>defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span>\n  text<span class="token punctuation">:</span> <span class="token string">\'Click me\'</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><strong>2. 초기 상태 설정</strong></p>\n<p>createClass를 통해 컴포넌트를 생성할 경우 React API(getInitialState)를 사용해야 하며, 인자로 넘기는 객체 안에 컴포넌트\b 생성 시 필요한 정보들을 많이 담고 있다는 것을 확인할 수 있습니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> Button <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token function">getInitialState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n      text<span class="token punctuation">:</span> <span class="token string">\'Click me\'</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token operator">&lt;</span>button<span class="token operator">></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>text<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>ES2015 Class를 통해 상태를 설정할 경우 클래스 내부의 프로퍼티르 선언하며, React API를 사용하지 않습니다.\n또한 ES2015 Class를 통해 정의한 컴포넌트는 this를 사용하기 위해서는\nconstructor 내에 있는 super가 필요합니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Button</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>\n\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      text<span class="token punctuation">:</span> <span class="token string">\'Click me\'</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token operator">&lt;</span>button<span class="token operator">></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>text<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><strong>3. 자동 바인딩</strong></p>\n<p>클래스를 구현하는 방법에 따라서 this 바인딩 동작이 달라진다.</p>\n<p>createClass를 사용할 경우의 this는 생성되는 컴포넌트를 잘 가리킨다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>  <span class="token keyword">const</span> Button <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>하지만 React.Component를 확장해 컴포넌트를 생성하는 방식의 경우 this 값은 null을 가리킨다.\n함수가 이벤트 핸들러로 전달이 될 때 this가 자동으로 바인딩되는 과정에서 this의 참조값을 잃어버리기 때문이다.\n따라서 수동으로 바인딩 시키거나, 다른 방법으로 처리해줘야 한다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>  <span class="token keyword">class</span> <span class="token class-name">Button</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n    <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">//this = null</span>\n  <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>첫 번째 방법은 Arrow 함수를 사용하는 것이다.\nArrow 함수의 this는 함수 Scope의 바깥 영역으로 this를 바인딩 한다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>  \n  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  \n  <span class="token comment">//Transfiling이 되면 아래와 같아진다.</span>\n\n  <span class="token keyword">var</span> _this <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n\n  <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> _this<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>따라서 이전에 this 바인딩을 수동으로 해주어야 하는 상황을 Arrow 함수를 사용해서 문제점을 보완할 수 있다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Button</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>여기서 주의해야 할 점이 있다.\nrender 메서드에서 Arrow 함수를 사용해서 바인딩하게 되면 Arrow 함수가 매번 렌더링이 될 때 마다 호출된다.\n이는 Transfiling이 되면서 Arrow 함수가 즉시 실행 형태로 바뀌기 때문이다.</p>\n<p>그래서 이 문제를 해결하는 가장 좋은 방법은\n컴포넌트가 여러 번 렌더링돼도 변경되지 않는 생성자 안에서 함수를 바인딩하는 것이다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>  <span class="token keyword">class</span> <span class="token class-name">Button</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n    <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>\n\n      <span class="token keyword">this</span><span class="token punctuation">.</span>handleClick <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleClick<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>이렇게 하면 위에서 언급했던 문제들을 모두 해결할 수 있다.</p>\n<h4>상태 비저장 함수형 컴포넌트</h4>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>button <span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<p>이 컴포넌트는 단순히 표시할 요소를 반환하는 함수를 의미한다.\n상태 비저장 함수는 매개변수를 통해 props를 받을 수 있다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>  props <span class="token operator">=></span> <span class="token operator">&lt;</span>button<span class="token operator">></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>text<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>\n  <span class="token punctuation">(</span><span class="token punctuation">{</span> text <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>button<span class="token operator">></span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>\n</code></pre>\n      </div>\n<p>Component를 확장하여 컴포넌트를 만들 때와 마찬가지로\npropTypes 속성을 이용해 받게되는 프로퍼티들을 정의할 수 있다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>  <span class="token keyword">const</span> <span class="token function-variable function">Button</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>button<span class="token operator">></span><span class="token punctuation">{</span>text<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>\n\n  Button<span class="token punctuation">.</span>propTypes <span class="token operator">=</span> <span class="token punctuation">{</span>\n    text<span class="token punctuation">:</span> propTypes<span class="token punctuation">.</span>string\n  <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>또한 두 번째 파라미터로 context를 받을 수 있다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token punctuation">(</span>props<span class="token punctuation">,</span> context<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token operator">&lt;</span>button<span class="token operator">></span><span class="token punctuation">{</span>context<span class="token punctuation">.</span>currency<span class="token punctuation">}</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>상태 비저장 컴포넌트는 this가 해당 컴포넌트를 나타내지 않는다.\n따라서 라이프 사이클 메서드나 setState 함수를 사용할 수 없다.\n단지 프로퍼티와 컨텍스트를 받고 요소를 반환한다. render 메서드만 구현한다.\n이런 점 때문에 함수형 프로그래밍의 원칙이 담겨있는 프로그래밍을 할 수 있다.</p>\n<p>//ref와 이벤트 핸들러는 ref를 정리하고 진행해야 할 듯</p>',frontmatter:{date:"January 23, 2018",path:"/react/reusableComponent",title:"재사용 가능한 컴포넌트의 의미"}}},pathContext:{}}}});
//# sourceMappingURL=path---react-reusable-component-54c6370f38e5e1bb5385.js.map