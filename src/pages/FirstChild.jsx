import React from 'react';
import SecondGrandChild from './SecondGrandChild';

const FirstChild = () => {
  return (
    <div>
     <h2 className="text-indigo-500 text-xl font-medium"> first child</h2>
     <SecondGrandChild />
    </div>
  );
}

export default FirstChild;
