import React,{useContext}from 'react';
import { userContext } from './Parent'

const SecondGrandChild = () => {
  const dataContext =   useContext(userContext)
  console.log(dataContext);
  const {location,details} = dataContext
  return (
    <div className ="w-1/3">
      <h6 className="text-orange-500 text-base font-normal">Second grand child</h6>
      <a href="#" className="block overflow-hidden rounded-2xl">
  <img
    alt="Office"
    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    className="h-56 w-full object-cover"
  />

  <div className="bg-gray-300 p-4">
    <p className="text-xs text-gray-700">website.com</p>

    <h3 className="text-sm text-green-500">
      loaction:{location}
    </h3>

    <p className="mt-1 text-xs text-gray-700">
      details:{details}
    </p>
  </div>
</a>

    </div>
  );
}

export default SecondGrandChild;
