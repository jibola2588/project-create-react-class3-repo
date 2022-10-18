import React,{useContext} from 'react';
import {userContext} from './Parent'

const FirstGreatGrandChild = () => {
 const countContext =  useContext(userContext)
 console.log(countContext);
 const {dispatch} = countContext
  return (
    <div>
      <h4>first great grand child</h4>
      <button
      className='border border-red-400 px-3 py-2 flex items-center'
      onClick = {() => dispatch({type:'inc',value:7})}
      >+7</button>
      <button
      className='border border-indigo-400 px-3 py-2 flex items-center'
      onClick = {() => dispatch('res')}
      >res</button>
    </div>
  );
}

export default FirstGreatGrandChild;
