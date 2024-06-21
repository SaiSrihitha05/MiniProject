import React from 'react';

function Child(props) {
  return (
    <div>
      <button className="m-4 btn btn-success" onClick={()=>props.onIncrement()}>
        <p className='display-6 p-1 '>Increment++</p>
      </button>

      <button className="m-4 btn btn-danger" onClick={()=>props.onDecrement()}>
      <p className='display-6 p-1'>Decrement--</p>
      </button>
    </div>











  );
}

export default Child;

