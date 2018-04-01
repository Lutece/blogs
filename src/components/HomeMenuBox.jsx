import React from 'react';
import Link from 'gatsby-link';

const styles = {

};

export default class HomeMenuBox extends React.Component {
  render() {
    return (
      <div className="columns post-menu">
        {/* <div className="column">
          자바스크립트
        </div>
        <div className="column">
          함수형 프로그래밍
        </div>
        <div className="column">
          디자인 패턴
        </div>
        <div className="column">
          프론트엔드 기술
        </div> */}
        <div className="column post-menu--item">
          <Link exact to="/react"> 
            React
          </Link>
        </div>
        <div className="column post-menu--item">
          <Link exact to="/ui"> 
            UI
          </Link>
        </div>
        <div className="column post-menu--item">
          <Link exact to="/ui"> 
            TIL
          </Link>
        </div>
      </div>
    )
  }
}