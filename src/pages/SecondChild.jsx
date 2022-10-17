import React from 'react';
import FirstGrandChild from './FirstGrandChild';

const SecondChild = () => {
  return (
    <div>
      <h2 className="text-indigo-500 text-xl font-medium">Second Child</h2>
      <FirstGrandChild />
    </div>
  );
}

export default SecondChild;
