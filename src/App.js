import React, { useState } from 'react';


const App = () => {

let state = useState();
console.log(state);

const [count, setCount] = useState(0);

let timeH = new Date().toLocaleTimeString();
let timeH1 = new Date().toLocaleTimeString();

const IncNum = () => {
  setCount(count + 1);
  // console.log("count" + count++);
}

  return( 
  <>
  <div style={{}}>
    <h1 style={{textAlign: 'center'}}> {timeH} </h1>
    <button onClick={IncNum} style={{backgroundColor: 'blue', border: 'solid silver 2px', margin: 'auto' , display: 'flex' ,justifyContent: 'center', color: 'white', padding: '15px 30px', borderRadius: '15px'}}>
      Click me</button>
  </div>
  </>
  );
}

export default App;