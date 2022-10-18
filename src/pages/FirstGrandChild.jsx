import React,{useContext} from 'react';
import { userContext} from './Parent'
import FirstGreatGrandChild from './FirstGreatGrandChild'

const FirstGrandChild = () => {
    //  const noticeContext =  useContext(userContext)
    //  const {name,age,gender,isFav} = noticeContext
  return (
    <div>
      <h6 className="text-orange-500 text-base font-normal">first grand child</h6>
      <FirstGreatGrandChild />
      {/* <a
  className="group grid grid-cols-1 overflow-hidden rounded-lg border border-gray-100 sm:grid-cols-3"
  href="#"
>
  <div className="relative">
    <img
      alt="Climber"
      src="https://images.unsplash.com/photo-1597698063932-9450882bb1be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      className="absolute inset-0 h-full w-full object-cover"
    />
  </div>

  <div className="p-8 sm:col-span-2">
    <ul className="flex gap-1">
      <li
        className="inline-block rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white"
      >
        Notice
      </li>

      <li
        className="inline-block rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white"
      >
        Information
      </li>
    </ul>

    <h3 className="mt-4 font-bold">name : {name}</h3>

    <p className="mt-2 text-sm text-gray-500">
      age:{age}
    </p>
    <p className="mt-2 text-sm text-gray-500">
      gender:{gender}
    </p>
    <p className="mt-2 text-sm text-gray-500">
      fav:{isFav}
    </p>
  </div>
</a> */}

    </div>
  );
}

export default FirstGrandChild;
