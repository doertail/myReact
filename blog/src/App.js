/*eslint-disable*/
import React from "react";
import "./App.css";
import { useState } from "react";

function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '파이썬독학', '능지단']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(-1);
  let [입력값, 입력값변경] = useState('');
  return (
    <div className="App">
      <div className="black-nav">
        <h4> ReactBlog </h4>
      </div>
      <span onClick={()=>{
        글제목변경(글제목.toSorted((a,b)=>a>b));
      }}> 가나다순 정렬 </span>

      {/* <div className ='list'>
        <h4> { 글제목[0] } <span onClick={ ()=>{따봉변경(따봉+1)} }> 👍 </span> {따봉} </h4>
        <p> 2월 17일 발행 </p>
      </div>
      <div className ='list'>
        <h4> { 글제목[1] } </h4>
        <p> 2월 17일 발행 </p>
      </div>
      <div className ='list'>
        <h4 onClick={ ()=>{setModal(!modal)}}> { 글제목[2] } </h4>
        <p> 2월 17일 발행 </p>
      </div> */}

      {
        글제목.map((e, i)=>{
          return (
          <div className ='list'>
            <h4 onClick={()=>{
              if(modal == i)
                setModal(-1);
              else
                setModal(i)}}> 
              {e} 
              <span onClick={(e)=>{
                e.stopPropagation();
                let copy = [... 따봉];
                copy[i] = copy[i]+1;
                따봉변경(copy);
              } }> 👍 </span> {따봉[i]}
            </h4>
            <p> 2월 17일 발행 </p> 
            <button onClick={()=>{
              let copy = [... 글제목];
              copy.splice(i,1);
              글제목변경(copy);
            }}> 삭제 버튼 </button>
            
          </div>)
        })
      }
      <div>
        <input onInput={(e)=>{
          입력값변경(e.target.value);
          
        }}/> 
        <button onClick={()=>{
          let copy = [... 글제목];
          copy.unshift(입력값)
          글제목변경(copy);
        }}> 제출 </button>
      </div>


      {
        // 조건식  참일때 : 거짓일 때
        modal!=-1 ? <Modal  i={modal} 글제목={글제목}/> : null
      }
        
        </div>
      );
}


function Modal(props){
  return (
    <div className="modal">
        <h4> {props.글제목[props.i]}  </h4>
        <p> 날짜 </p>
        <p> 상세 내용 </p>
        <button> 글수정 </button>
      </div>
  );
}



export default App;
