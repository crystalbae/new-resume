import React, { Component } from 'react';
import Project from './project.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="intro box">
          <div className="profile-img"></div>
          <div className="text">
            <h1>안녕하세요.</h1>
            <p>프론트엔드 개발자 배수정입니다 <i className="fa fa-smile-o" aria-hidden="true"></i></p>
          </div>
        </div>

        <div className="profile box">
          <p className="title"><i className="fa fa-user-o" aria-hidden="true"></i>About Me</p>
          <p className="introduce">저는 대학 졸업 후 남들 보다 빠르게 결혼 생활을 시작하였고,
             한동안은 살림과 육아를 책임지는 평범한 전업 주부로서 살아왔습니다.
             프로그래밍과는 전혀 인연이 없었던 제가 개발에 관심을 갖게 된 계기는,
             생활 코딩이라는 웹사이트를 통해 처음 코딩을 접하면서 부터 입니다.
             처음에는 단순히 취미삼아 공부를 시작했지만, 어느 순간 부터 푹 빠져서 몰입하고 있는
             저를 발견하게 되었습니다. 처음에는 ‘내가 과연 구현 할 수 있을까?’하는 기술이라도
             구글링과 끈질긴 인내로 결국에는 해냈을 때 희열을 느꼈고, 하면 할 수 있다는 자신감도 생겼습니다.
             나날이 새로운 것들이 쏟아지는 프론트엔드 기술 분야이기에, 끊임없이 공부하며 더욱 발전하고 싶습니다.
          </p>
          <span className="details">PERSONAL DETAILS</span>
          <ul>
            <li><span className="info-label">이름:</span> 배수정</li>
            <li><span className="info-label">학력:</span> 한성대학교 의류패션산업학과 졸업</li>
            <li><span className="info-label">이메일:</span> baecry@gmail.com</li>
            <li><span className="info-label">기술:</span> HTML5, CSS3, Javascript, Jquery, React, Ruby on Rails</li>
          </ul>
        </div>

        <Project />
      </div>
    );
  }
}

export default App;
