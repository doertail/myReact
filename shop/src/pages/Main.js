import {data} from '../data.js'

function Main() {
    return (
        <div>
          <div className='main-bg'></div>
          <div className="container">
            <div className="row">
              {
                data.map((e,i)=>{
                  return <Item shoes = {data[i]} />
                })
              }
            </div>
          </div> 
        </div>
    )
  }

  function Item(props) {
    let id = props.shoes.id++;
    let url = "https://codingapple1.github.io/shop/shoes"+ id + ".jpg";
    return (
        <div className="col-md-4">
          <img src = {url} width="80%"/>
          <h4> {props.shoes.title} </h4>
          <p> {props.shoes.content} </p>
        </div>
    )
  }

export default Main