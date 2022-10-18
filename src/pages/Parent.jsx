
import React,{createContext,useReducer} from 'react';
import FirstChild from './FirstChild';
import SecondChild from './SecondChild';
import ThirdChild from './ThirdChild';

export const userContext = createContext()

const initialState = 18;

const reducer = (state,action) => { 
  if(action.type === 'inc'){ 
    return state + action.value
  }
  if(action.type === 'dec'){ 
    return state - action.value
  }
  if(action === 'res'){ 
    return initialState
  }
  return state
}

const Parent = () => {

  const [count,dispatch] =  useReducer(reducer,initialState)
   console.log(count)

  // const user  = { 
  //   name : 'Abasifreke james',
  //   age : 23,
  //   gender:'male',
  //   isFav :'tennis',
  //   location: 'Abuja',
  //   details:'A logistics website,you call we take you anywhere you want to go'
  // }

  return (
    <div>
      <userContext.Provider value = {{count,dispatch}} > 
      <h1 className="text-green-600 text-3xl font-bold">Parent Comp</h1>
      <FirstChild />
      <SecondChild />
      <ThirdChild />
      <div className='text-center mt-4'>
         <h3 className='text-center'>count -- 
         <span className="text-red-600 text-xl"> {count} </span></h3>
        <div className= 'flex items-center justify-center mt-5'>
         <button  
         className='px-5 py-2 bg-indigo-500 text-white flex items-center mx-2'
         onClick = {() => dispatch({type:'inc',value:4})}
         >+4</button>
         <button  
         className='px-5 py-2 bg-indigo-500 text-white flex items-center mx-2'
         onClick = {() => dispatch({type:'inc',value:10})}
         >+10</button>
         {/* <button  
         className='px-5 py-2 bg-indigo-500 text-white flex items-center mx-2'
         onClick = {() => dispatch('inc')}
         >+</button> */}
         <button 
          className='px-5 py-2 bg-red-500 text-white flex items-center mx-2'
         onClick = {() => dispatch({type:'dec',value:6})}
         >-6</button>
         <button 
          className='px-5 py-2 bg-red-500 text-white flex items-center mx-2'
         onClick = {() => dispatch({type:'dec',value:20})}
         >-20</button>
         {/* <button 
          className='px-5 py-2 bg-red-500 text-white flex items-center mx-2'
         onClick = {() => dispatch('dec')}
         >-</button> */}
         <button 
          className='px-5 py-2 bg-orange-500 text-white flex items-center mx-2'
         onClick = {() => dispatch('res')}
         >reset</button>
         </div>
      </div>
      </userContext.Provider>
    </div>
  );
}

export default Parent;


