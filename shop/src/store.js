import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name: 'user',
  initialState : {name:'Kim', age: 22},
  reducers : {
    changeName(state){
      state.name = "Park"
    },
    changeAge(state){
      state.age += 1
    }
  }
})

export let { changeName, changeAge } = user.actions;

let stock = createSlice({
  name: 'stock',
  initialState : [10,11,12]
})

let cartData = createSlice({
  name: 'cartData',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers : {
    increaseCount(state, action){
      state.find(obj => obj.id == action.payload).count++;
    },
    pushItem(state, action){
      let newItem = {id: action.payload.id, name: action.payload.title, count: 1};
      let flag = false;
      state.forEach((e)=>{
        if(e.id == newItem.id){
          flag = true;
          e.count++;
        }
      })
      if(flag === false)
        state.push(newItem)
    },
    sortItems(state){
      state.sort((a, b)=> a.id > b.id);
    }
  }
})
 
export let { increaseCount, pushItem, sortItems } = cartData.actions;

export default configureStore({
  reducer: { 
    user : user.reducer,
    stock : stock.reducer,
    cartData : cartData.reducer
  }
}) 

