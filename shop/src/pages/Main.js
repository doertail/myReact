import { useState } from 'react'
import { data } from '../data.js'
import axios from 'axios'
import {Routes, Route, useNavigate, Outlet} from 'react-router-dom';
function Main() {  
    
    let [shoes, setShoes] = useState(data);
    let [button, setButton] = useState(0);
    return (
        <div>
          <div className='main-bg'></div>
          <div className="container">
            <div className="row">
              {
                shoes.map((e,i)=>{
                  return <Item shoes = {shoes[i]}/>
                })
              }
            </div>
          </div> 
          {
            button < 2?
            <button onClick={()=>{
              let numForUrl = button + 2
              axios.get('https://codingapple1.github.io/shop/data' + numForUrl +'.json')
              .then((result) => {
                let copy = [...shoes, ...result.data]
                setShoes(copy)
                setButton(button+1)
              })
              // .catch(()=>{
              //   console.log('실패함 ㅋㅋ')
              // })
            }}>더보기</button>
            : null
          }
          
        </div>
    )
  }

  function Item(props) {
    let navigate = useNavigate(); let id = props.shoes.id+1;
    let url = "https://codingapple1.github.io/shop/shoes"+ id + ".jpg";
    return (
        <div className="col-md-4" onClick={()=>navigate('/detail/' + props.shoes.id)}>
          <img src = {url} width="80%"  />
          <h4> {props.shoes.title} </h4>
          <p> {props.shoes.content} </p>
        </div>
    )
  }

export default Main