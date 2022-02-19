import {React, useState} from 'react';


const MyAccordion = ({question, answer}) => {
    const [show, setShow] = useState(false);
  return (
       <>
            <div style={{width: '450px'}}>
                
                <h3 className='text-center' 
                style={{backgroundColor: 'gainsboro'}}>
                    <label
                    onClick={() => setShow(!show) }
                    style={{backgroundColor: 'white'}}>
                    { show? '➖' : '➕'}</label> {question }</h3>  
            </div>
            {show && <p className='text-center'>{ answer}</p>}
        </>
  );
}

export default MyAccordion;