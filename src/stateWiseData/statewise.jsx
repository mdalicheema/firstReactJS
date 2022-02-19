import React, { useEffect, useState } from 'react'
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



const Statewise = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        // const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
        const actualData = await res.json();
        // const curE = actualData.bpi.USD;
        // console.log(curE.symbol);
        // console.log(actualData.bpi.USD);
        // setData(curE.code);
        setData(actualData.statewise);
    }

    useEffect(() => {
        getCovidData();
    }, [])

    return (
        <>
            <h1>This is COVID 19 Data</h1>
            <div className='container-fluid m-2 bg-light max-100'>
                <div className='heading'>
                    <h1> <span className='font-weight-bold'>INDIA'S</span>  COVID 19 DATA </h1>
                </div>
                <div className='table-responsive'>
                    <table className='table'>
                        <thead className='bg-dark font-weight-light text-white'>
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((curElem, index) => {
                                    return(
                                        <tr key = { index } >
                                            {/* <td>{curElem.code}</td>
                                            <td>{curElem.description}</td>
                                            <td>{curElem.rate}</td>
                                            <td>{curElem.rate_float}</td>
                                            <td>{curElem.symbol}</td> */}

                                            <td>{curElem.state}</td>
                                            <td>{curElem.confirmed}</td>
                                            <td>{curElem.recovered}</td>
                                            <td>{curElem.deaths}</td>
                                            <td>{curElem.active}</td>
                                            <td>{curElem.lastupdatedtime}</td>
                                    </tr>
                        );
                                })
                            }


                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
}
export default Statewise; 