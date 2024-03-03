let data = [
  {
    id : 0,
    title : "White and Black",
    content : "Born in France",
    price : 120000
  },

  {
    id : 1,
    title : "Red Knit",
    content : "Born in Seoul",
    price : 110000
  },

  {
    id : 2,
    title : "Grey Yordan",
    content : "Born in the States",
    price : 130000
  }
] 

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

function Main_Page() {
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
export {Item, Main_Page};