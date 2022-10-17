import React from 'react';
import SecondGrandChild from './SecondGrandChild';
import FirstGrandChild from './FirstGrandChild';

const ThirdChild = () => {
  return (
    <div>
     <h2 className="text-indigo-500 text-xl font-medium"> third child</h2>
     <FirstGrandChild />
     <SecondGrandChild />
    </div>
  );
}

export default ThirdChild;
