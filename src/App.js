import React, { useState } from 'react';



const App = () => {
  
  const [name, setName] = useState('');
  
  const sendData = (event) => {
    // console.log(event.target.value);
    setName(event.target.value);
  }
  
  const setData = (event) => {
    // console.log(event.target.value);
    event.preventDefault();
    setFirstName(name);
  }
  
  return (
    <>
        <div>
          <form onSubmit={setData}>
            <h1>Hello</h1>
            <input type="text" name='fName' placeholder='Enter first name' onChange={sendData} value={fname} />       
            <input type="text" name= 'lName' placeholder='Enter last name' onChange={sendData} value={fname} />       
            <button style={{ backgroundColor: 'blue', color: 'white', padding: '10px 25px', margin: 'auto' }} >Click me 🤝</button>
          </form>
        </div>
    </>
  );
}



//simple submit forms
// const App = () => {
  
//   const [namefirst, setName] = useState('');

//   const [namelast, setNameLast] = useState('');
  
//   const [firstName, setFirstName] = useState();
  
//   const [lastName, setLastName] = useState();

//   const sendData = (event) => {
//     // console.log(event.target.value);
//     setName(event.target.value);
//   }

//   const sendData11 = (event) => {
//     // console.log(event.target.value);
//     setNameLast(event.target.value);
//   }
  
//   const setData = (event) => {
//     console.log(event.target.value);
//     event.preventDefault();
//     setFirstName(namefirst);
//     setLastName(namelast);
//   }
  
//   return (
//     <>
//         <div>
//           <form onSubmit={setData}>
//             <h1>Hello, { firstName } { lastName }</h1>
//             <input type="text" placeholder='Enter first name' onChange={sendData} />       
//             <input type="text" placeholder='Enter last name' onChange={sendData11} />       
//             <button style={{ backgroundColor: 'blue', color: 'white', padding: '10px 25px', margin: 'auto' }} >Click me 🤝</button>
//           </form>
//         </div>
//     </>
//   );
// }


//Events onClick onMouseEnter onDoubleClick

// const App = () => {

//   const purple = 'purple';
//   const [bgColor, setColor] = useState(purple);
//   const [name, setName] = useState('Click Me!');


//   const bgChange = () => {
//     setName('Ouch!!!!!! 🧷' )
//     setColor('red');  
//   }

//   const revert = () => {
//     setName('Ohhhhhhh!!!!!!  🏴󠁧󠁢󠁷󠁬󠁳󠁿')
//     setColor('purple');  
//   }

//   return (
//     <>
//       <div style={{ backgroundColor: bgColor }}>
//             {/* <h1 style={{ width: '100%', height: '100%' }}>asdaf</h1> */}
//             <button  onMouseEnter={bgChange} onMouseLeave={revert} onDoubleClick={revert} onClick={bgChange} style={{backgroundColor: 'blue', border: 'solid silver 2px', margin: 'auto', display: 'flex', justifyContent: 'center', color: 'white', padding: '10px 25px', borderRadius: '15px'}}>
//               { name }</button>
//       </div>
//     </>
//   );
// }


//Set Time live
// const App = () => {
//   let time = new Date().toLocaleTimeString();
  
//   const [ctime, setCTime] = useState(time);

//   const UpdateTime = () => {
//     let time = new Date().toLocaleTimeString();
//     setCTime(time);
//   }

//   setInterval(UpdateTime, 1000);
//   return (
//     <>
//       <h1 style={{textAlign: 'center'}}>{ ctime }</h1>
//       <button onClick={UpdateTime} style={{backgroundColor: 'blue', border: 'solid silver 2px', margin: 'auto' , display: 'flex' ,justifyContent: 'center', color: 'white', padding: '15px 30px', borderRadius: '15px'}}>
//         Click me</button>
//     </>
//   );
// }


// const App = () => {

// let state = useState();
// console.log(state);

// const [count, setCount] = useState(0);

// let timeH = new Date().toLocaleTimeString();
// let timeH1 = new Date().toLocaleTimeString();

// const IncNum = () => {
//   setCount(count + 1);
//   // console.log("count" + count++);
// }

//   return( 
//   <>
//   <div style={{}}>
//     <h1 style={{textAlign: 'center'}}> {timeH} </h1>
//     <button onClick={IncNum} style={{backgroundColor: 'blue', border: 'solid silver 2px', margin: 'auto' , display: 'flex' ,justifyContent: 'center', color: 'white', padding: '15px 30px', borderRadius: '15px'}}>
//       Click me</button>
//   </div>
//   </>
//   );
// }

export default App;