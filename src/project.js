import React, { Component } from 'react';
import kakao from './kakao.mov';
import todo from './todo.mov';
import './project.css';

class Project extends Component {
  tabChange(project) {
    if (project === "kakao") {
      document.getElementById("todo").classList.remove("active");
      document.getElementById("todo-tab").classList.remove("active");
      document.getElementById("todo-tab").childNodes[0].childNodes[0].classList.remove("active");
      document.getElementById("kakao").classList.add("active");
      document.getElementById("kakao-tab").classList.add("active");
      document.getElementById("kakao-tab").childNodes[0].childNodes[0].classList.add("active");

    } else {
      document.getElementById("todo").classList.add("active");
      document.getElementById("todo-tab").classList.add("active");
      document.getElementById("todo-tab").childNodes[0].childNodes[0].classList.add("active");
      document.getElementById("kakao").classList.remove("active");
      document.getElementById("kakao-tab").classList.remove("active");
      document.getElementById("kakao-tab").childNodes[0].childNodes[0].classList.remove("active");
    }
  }

  render() {
    return (
      <div className="portfolio box">
        <p className="title"><i className="fa fa-folder-open-o" aria-hidden="true"></i>My Portfolio</p>
        <div className="tab-list">
          <div className="tab active" id="kakao-tab">
            <a onClick={this.tabChange.bind(this, "kakao")}><span className="glyphicon glyphicon-ok active"></span>Kakao Project</a>
          </div>
          <div className="tab" id="todo-tab">
            <a onClick={this.tabChange.bind(this, "todo")}><span className="glyphicon glyphicon-ok"></span>Todo Project</a>
          </div>
        </div>

        <div className="projects">
          <div id="kakao" className="project active">
            <p>카카오뱅크의 비상금 대출 웹페이지를 따라서 만들어본 프로젝트</p>
            <div className="links">
              <a href="http://kakao.baesujeong.me/" rel='noopener noreferrer' className="btn btn-default" target="_blank"><span className="glyphicon glyphicon-link"></span>프로젝트 열어보기</a>
              <a className="btn btn-default" id="kakao-link" href="https://www.kakaobank.com/app/products/emergencyLoan/share" target="_blank" rel='noopener noreferrer'><span className="glyphicon glyphicon-link"></span>원본 카카오페이지 바로가기</a>
            </div>
            <video src={kakao} className="kakao-video" controls="controls" autoPlay="no" loop />
          </div>
          <div id="todo" className="project">
            <p>Todo 프로젝트</p>
            <div className="links">
              <a href="http://todo.baesujeong.me/" className="btn btn-default" target="_blank" rel='noopener noreferrer'><span className="glyphicon glyphicon-link"></span>프로젝트 열어보기</a>
            </div>
            <video src={todo} className="todo-video" controls="controls" autoPlay="no" loop />
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
