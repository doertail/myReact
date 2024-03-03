// eslint-disable-next-line
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { useState } from 'react';
import {/*data, Item,*/Main_Page} from './data.js';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import Detail_Page from './routes/Detail.js';

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
          <Nav.Link onClick={()=>navigate('/event')}>About</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Main_Page/>}/>
        <Route path="/detail" element={<Detail_Page/>}/>
        <Route path="/about" element={<About_Page/>}>
          <Route path="member" element={<div>멤버임</div>}/>
          <Route path="location" element={<div>위치 정보임</div>}/>
        </Route>
        <Route path="/event" element={<Event_Page/>}>
          <Route path="one" element={<div>첫 주문시 단추 사진 보너스</div>}/>
          <Route path="two" element={<div>생일기념 쿠폰 받기</div>}/>
        </Route>

        <Route path="*" element={<div>없는 페이지요~</div>}/>
      </Routes>

    </div>
  );
}
function About_Page(){
  return(
    <div>
      <h4> 회사 정보임 </h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event_Page(){
  return(
    <div>
      <h3> 이벤트임 </h3>
      <Outlet></Outlet>
    </div>
  )
}

export default App;