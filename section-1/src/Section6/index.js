import React, { useEffect, useState} from "react";
import Axios from "axios";

const Section6 = () => {
    // https://excuser-three.vercel.app/v1/excuse/party

    const [generateExcuse, setGenerateExcuse] = useState('');

    const fetchExcuse = (excuse) => {
        Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`).then((res) => {
            setGenerateExcuse(res.data[0].excuse);
        })
    };

    return (
        <div>
            <h1>Generate an excuse</h1>
            <button onClick={() => fetchExcuse('party')}>Party</button>
            <button onClick={() => fetchExcuse('family')}>Family</button>
            <button onClick={() => fetchExcuse('office')}>office</button>
            <p>{generateExcuse}</p>
        </div>
    )
};

export default Section6;