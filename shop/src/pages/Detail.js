import { useParams } from "react-router-dom";
function Detail(props) {
  let {id} = useParams();
  let newId = parseInt(id,10) + 1;
  let url = "https://codingapple1.github.io/shop/shoes" + newId + ".jpg";
  const target = props.shoes.find(obj => obj.id == id);

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={url} width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{target.title}</h4>
            <p>{target.content}</p>
            <p>{target.price}</p>
            <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>
      </div> 
    )
  }

export default Detail;