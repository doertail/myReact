// eslint-disable-next-line
// eslint-disable-next-line
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {data} from './data.js'
// import { useState } from 'react';
// import {/*data, Item,*/} from './data.js';
import {Routes, Route, useNavigate, Outlet} from 'react-router-dom';
import Main from './pages/Main.js';
import Detail from './pages/Detail.js';
import About from './pages/About.js';
import Event from './pages/Event.js';
import Cart from './pages/Cart.js';

import { createContext, useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

export let Context1 = createContext();

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [재고] = useState([10, 11, 12]);

  let result = useQuery('작명', ()=>{
    return  axios.get('https://codingapple1.github.io/userdata.json').then((a)=>{
      return a.data
    })
  })
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>   
        <Navbar.Brand href="#home">음하하 쇼핑몰</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link onClick={()=>navigate('/')}>Home</Nav.Link>
          <Nav.Link onClick={()=>navigate('/detail')}>Detail</Nav.Link>
          <Nav.Link onClick={()=>navigate('/about')}>About</Nav.Link>
          <Nav.Link onClick={()=>navigate('/event')}>Event</Nav.Link>
          <Nav.Link onClick={()=>navigate('/cart')}>Cart</Nav.Link>
        </Nav>
        <Nav className='ms-auto'> 
          {result.isLoading ? '로딩중' : result.data.name}
        </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/detail/:id" element={
          // <Context1.Provider value= {{재고}}>
            <Detail shoes={shoes}/>
          // </Context1.Provider>
        }/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버임</div>}/>
          <Route path="location" element={<div>위치 정보임</div>}/>
        </Route>
        <Route path="/event" element={<Event/>}>
          <Route path="one" element={<div>첫 주문시 단추 사진 보너스</div>}/>
          <Route path="two" element={<div>생일기념 쿠폰 받기</div>}/>
        </Route>

        <Route path="*" element={<div>없는 페이지요~</div>}/> 
      </Routes>

    </div>
  );
}


export default App;