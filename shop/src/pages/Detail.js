import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { useDispatch} from 'react-redux'
// import {Context1} from "./../App.js"
import { pushItem } from "../store.js";

function Detail(props) {
  var dispatch = useDispatch();
  // let [재고] = useContext(Context1);

  let [alert, setAlert] = useState(false);
  let [count, setCount] = useState('');
  let [tab, setTab] = useState(0);
  useEffect(()=>{
    if(isNaN(count)){
      setAlert(true);
    }
    else
      setAlert(false);
  })
  
  const saveCount = event => {
    setCount(event.target.value);
  };
  
  let {id} = useParams();
  let newId = parseInt(id,10) + 1;
  let url = "https://codingapple1.github.io/shop/shoes" + newId + ".jpg";
  const target = props.shoes.find(obj => obj.id == id);
  let [fade2, setFade2] = useState('')
  useEffect(()=>{
    setFade2('end');
    
    return ()=>{
      setFade2('')
    }
  }, [])
    return (
      <div className={"container start "+fade2}>
        {
          alert === true 
          ? <div className="alert alert-warning">
            경고: 숫자만 입력하시오!!!!
          </div> : null 
        }
        <div className="row">
          <div className="col-md-6">
            <img src={url} width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{target.title}</h4>
            <p>{target.content}</p>
            <input
              className="login_id"
              type="text"
              placeholder="수량"
              value={count}
              onChange={saveCount}
            />
            <p>{target.price}원</p>
            <button className="btn btn-danger" onClick={()=>{
              dispatch(pushItem(target));
            }}>주문하기</button>  
            {/* <button className="btn btn-danger" >주문하기</button>   */}
          </div>
        </div>

        <Nav variant="tabs"  defaultActiveKey="link0">
            <Nav.Item>
              <Nav.Link onClick={()=>{setTab(0)}} eventKey="link0">버튼0</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={()=>{setTab(1)}} eventKey="link1">버튼1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={()=>{setTab(2)}} eventKey="link2">버튼2</Nav.Link>
            </Nav.Item>
        </Nav>
        <TabContent tab = {tab} shoes = {props.shoes}/>

      </div> 
    )
  }

  function TabContent(props){
    let [fade, setFade] = useState('');
    useEffect(()=>{
      setTimeout(()=>{setFade('end')},100)
      
      return ()=>{
        setFade('')
      }
    }, [props])
    return <div className={'start ' + fade}>
        { [<div>{props.shoes[0].title}</div>, <div>내용1</div>, <div>내용2</div>][props.tab] }
      </div>
  }
  
export default Detail;