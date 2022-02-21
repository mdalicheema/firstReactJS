import React, {  useEffect, useState } from 'react';
import axios from "axios";

const Pokemon = () => {
    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [moves, setMoves] = useState();

    useEffect(() => {
        async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            
            console.log(res.data.name);
            console.log(res.data.moves.length);
            setName(res.data.name);
            setMoves(res.data.moves.length);
        }
        getData();
    })
    return (
        <>
           <h1>You have  <span style={{color: "red"}}>Choosen </span> <span  style={{color: "orange"}}> {num} </span> </h1>
           <h1>This is select value: <span style={{ color: "green" }}> {name} </span>  </h1>
           <h1>This is pokeman <span style={{color: "red"}}> Moves: </span>  <span style={{color: "orange"}}> {moves} </span>  </h1>
           <div className='container-fluid'>
                <select style={{fontSize: "25px", padding: "10px", margin: "35px"}} value={num} onChange={(e) => {
                    setNum(e.target.value);
                }}>
                    <option value="1">1</option>
                    <option value="25">25</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
           </div>
        </>
    );
}

export default Pokemon;