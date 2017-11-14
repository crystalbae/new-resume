import React, { Component } from 'react';
import Project from './project.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="profile">
          <div className="profile-img"></div>
          <div className="personal-info">
            <ul>
              <li>이름: 배수정</li>
              <li>학력: 한성대학교 의류패션산업학과 졸업</li>
              <li>이메일: baecry@gmail.com</li>
              <li>기술: HTML5, CSS3, Javascript, Jquery, React, Ruby on Rails</li>
              <li>자기소개: </li>
            </ul>
          </div>
        </div>

        <Project />
      </div>
    );
  }
}

export default App;
