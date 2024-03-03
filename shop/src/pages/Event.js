import {Outlet} from 'react-router-dom';
function Event(){
    return(
      <div>
        <h3> 이벤트임 </h3>
        <Outlet></Outlet>
      </div>
    )
  }

export default Event;