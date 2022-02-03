import React, { useState } from 'react';




//spread operators or three dots (...) for arrays and objects
// const App  = () => {

//   //arrays  
//   const fullName = ['tahir', 'saleem'];
//   const biodata = [1, ...fullName, 26, 'male'];
//   console.log(fullName);
//   console.log(biodata);
  
//   const shootinggames = ['try to shoot', 'they are going to dead'];
//   const flygames = ['how to fly', 'bloons have gone through the sky'];
//   const games = [...shootinggames, ...flygames];
//   console.log(games);
  
//   // objects
//   const battle = {
//     name: 'zarb-e-azab',
//     location: 'nothern areas'
//   };
  
//   const country = {
//     count: 'pak',
//     ...battle,
//     xcode: '0092',
//   };

//   console.log(country);

//   return(
//     <>
//       <h1>Wohooooooooo!!!!!!!!!!!!! ♐  🎿</h1>
//     </>
//   );
// }


//complex form vs Login page
const App = () => {
  
  const [fullName, setName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });
  
  const sendData = (event) => {
    // console.log(event.target.value);
    // console.log(event.target.name);
    // console.log(event.target.placeholder);

    // const value = event.target.value;
    // const name = event.target.name;

     const {name, value} = event.target;

    setName((preValue) => {
      // console.log(preValue);
      return {
        ...preValue,
        [name] : value,
      };
      // if(name === 'fName'){
      //   return {
      //     fname: value,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //     phone: preValue.phone,
      //   };
      // }else if(name === 'lName'){
      //   return{
      //     fname: preValue.fname,
      //     lname: value,
      //     email: preValue.email,
      //     phone: preValue.phone,
      //   }
      // }else if(name === 'eMail'){
      //   return{
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: value,
      //     phone: preValue.phone,
      //   }
      // }else{
      //   return{
      //     fname: preValue.fname,
      //     lname: preValue.lname,
      //     email: preValue.email,
      //     phone: value,
      //   }
      // }
    });

  }
  
  const setData = (event) => {
    // console.log(event.target.value);
    event.preventDefault();
    alert('form submited');
  }
  
  return (
    <>
        <div>
          <form onSubmit={setData}>
            <h1>Hello, {fullName.fname} {fullName.lname} </h1>
            <h3>{fullName.email}</h3>
            <p>{fullName.phone}</p>
            <p>{fullName.qua}</p>
            <input 
             type="text" name='fname' 
             placeholder='Enter first name' 
             onChange={sendData}
             value={fullName.fname}
             required />       
            <input 
             type="text" name= 'lname' 
             placeholder='Enter last name'
             onChange={sendData} 
             value={fullName.lname} 
             required />
             <input 
             type="email" name= 'email' 
             placeholder='Enter your email'
             onChange={sendData} 
             value={fullName.email} 
             required />
             <input 
             type="number" name= 'phone' 
             placeholder='Enter your phone'
             onChange={sendData} 
             value={fullName.phone} 
             required /> 
             <input 
             type="text" name= 'qua' 
             placeholder='Enter your qualification'
             onChange={sendData} 
             value={fullName.qua} 
             required />       
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