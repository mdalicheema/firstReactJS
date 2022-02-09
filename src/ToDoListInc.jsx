import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const cssStyle = {
    display: 'flex',
    justfyContent: 'center',
    backgroundColor: 'blue',
    color: 'white',
    padding: '5px 50px',
    textAlign: 'center',
}
const cssStyleP = {
    textAlign: 'left',
    paddingLeft: '45px',
}

const ToDoListInc = () => {

    const [num, setNum] = useState(0);
    
    const incNum = () => {
        setNum(num + 1);
    }
    const decNum = () => {
        if(num === 0){
          setNum(0);    
        }else{
            setNum(num - 1);
        }
    }


return (
    <>
        <div className=''>
          <div className=''>
              <button onClick={incNum} style={cssStyle}>
                  <AddIcon />
                  {/* <i class="fa fa-plus" aria-hidden="true"></i> */}
                  </button>
                  
                <h1 style={cssStyleP}>{ num }</h1>
              <button onClick={decNum} style={cssStyle}>
                  <RemoveIcon />
                  {/* <i class="fa fa-minus" aria-hidden="true"></i> */}
                  </button>
          </div>      
        </div>       
    </>

);

}


export default ToDoListInc;