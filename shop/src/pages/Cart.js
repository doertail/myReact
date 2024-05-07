import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { changeAge, increaseCount, sortItems } from '../store'
import { useEffect } from 'react'
function Cart(){
    let state = useSelector(state=> state)
    // let a = useSelector((state)=>{return state.cart}) // a = 'kim'
    var dispatch = useDispatch()
    useEffect(() => {
      dispatch(sortItems());
    }, [state.cartData]);
    return (
      <div>
        {state.user.name} ({state.user.age}살)의 장바구니
        <button onClick={()=>{
          dispatch(changeAge())
        }}>틀버튼</button>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>상품명</th>
              <th>수량</th>
              <th>변경하기</th>
            </tr>
          </thead>
          <tbody>
            {
              state.cartData.map((d)=>{
                return <Data data={d} dispatch ={dispatch}/>;
              })
            }
          </tbody>
        </Table> 
      </div>
    )
}

function Data(props){
    return(
      <tr>
        <td>{props.data.id}</td>
        <td>{props.data.name}</td>
        <td>{props.data.count}</td>
        <td>안녕</td>
        <td>
          <button onClick={()=>{
            props.dispatch(increaseCount(props.data.id))
          }}> + </button>
        </td>
      </tr>
    )
}
export default Cart