// eslint-disable-next-line
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { useState } from 'react';
// import {/*data, Item,*/} from './data.js';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Main from './pages/Main.js';
import Detail from './pages/Detail.js';
import About from './pages/About.js';
import Event from './pages/Event.js';
function App() {

  let navigate = useNavigate();

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
        </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/detail" element={<Detail/>}/>
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