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
          <p className="introduce">
            대학 졸업 후 남들 보다 빠르게 결혼 생활을 시작하였고, 한동안은 살림과 육아를 책임지는 평범한 전업 주부로서 살았습니다.
            매일 반복되는 평범한 일상에서 벗어나 저의 욕구를 채워줄 무언가를 찾던 중 코딩이 눈에 들어왔습니다.
            프로그래밍과는 전혀 인연이 없었지만, IT 기술이 우리 일상 깊숙이 파고든 만큼 변화하는 시대에 발 맞추기 위해 처음에는 취미삼아 공부를 시작했습니다.
          </p>
          <p className="introduce">
            코드카데미 같은 온라인 강좌나 책을 통해 독학하였고, 기본 적인 싱글 페이지 웹은 만들수 있게 되었습니다.
            처음에는 ‘내가 과연 구현할 수 있을까?’ 했던 기술도 대부분 구글링을 통해 스스로 해결해나가며 재미를 느꼈습니다.
            하지만 혼자서만 독학으로 개발을 배우고 무언가를 만드는데 한계를 느꼈고,
            다른 사람들과의 협업을 통해 어떠한 서비스에 제가 조금이라도 기여할 수 있었으면 좋겠다는 바람이 생겼습니다.
          </p>
          <p className="introduce">
            퍼블리싱은 제 역할을 할 자신이 있고, 프론트엔드에서도 팀에 충분히 기여할 수 있을거라 생각합니다.
            또한 포트폴리오를 공유할 방법을 고민하던 중 AWS에서 제공하는 EC2 서비스를 알게되었고, EC2 인스턴스를 생성하고 도메인 연결까지 해보게 되었습니다.
            첫 경험이라 시간은 꽤 걸렸지만 포트폴리오를 준비하며 프론트쪽부터 서버를 다루는 일까지 처음 부터 끝까지 해 볼 수 있어서 좋은 경험이었습니다.
            모르는 것이 있더라도 새로운 기술을 배우는데 전혀 두려움이 없고, 오히려 끊임 없이 새로운 기술들이 쏟아지는 분야이기에 개발자는 계속 공부하고 배워야한다는 생각입니다.
          </p>
          <p className="introduce last">
            현재는 ‘내가 그 기능을 구현할 수 있는지’ 여부에 중점을 두고 개발 공부를 하고 있지만,
            점차 다양한 기능들이 하나씩 추가되고 코드가 복잡해지는것을 느끼면서 부터는,
            누가 보아도 이해하기 쉬운 가독성 좋은 코드를 쓰기 위해 노력하고 있습니다.
          </p>
          <span className="details">Personal Details</span>
          <ul>
            <li><span className="info-label">이름:</span> 배수정</li>
            <li><span className="info-label">학력:</span> 한성대학교 의류패션산업학과 졸업</li>
            <li><span className="info-label">이메일:</span> baecry@gmail.com</li>
            <li><span className="info-label">기술:</span> HTML5, CSS3, JavaScript, jQuery, React, Ruby on Rails</li>
          </ul>
        </div>

        <Project />
      </div>
    );
  }
}

export default App;
