import { DoDisturb } from "@mui/icons-material";
import React, { useState } from "react";
import { questions } from './api';
// import './accordian.css';
import MyAccordion from "./MyAccordion";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



const Accordion = () => {
    
    const [data, setData] = useState(questions);

    return (
        <>
           <h1 className=" text-center ">This is my Accordion</h1>
           {
                data.map((curElem) => {
                    const { id } = curElem;
                    return <MyAccordion key={id} {...curElem}  />
                })
           }
           
        </>
    );
}


export default Accordion;