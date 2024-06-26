import React, { useContext } from "react";
import { ProfileContext } from "../App";
import { useQuery } from "react-query";
import Axios from "axios";


const Home = () => {

    const {userName} = useContext(ProfileContext);

    const {data : catData, isLoading, isError, error, refetch} = useQuery(['cat'], () => {
        return Axios.get('https://catfact.ninja/fact').then((respons) => respons.data)
    });

    if (isLoading) {
        return <p>Loading...</p>
    };

    if (isError) {
        return <p>Sorry, There was an error. Error: {error.message}</p>
    };
    
    return (
        <div>
            <h2>HOME page. - user name is {userName}</h2>
            <p>{catData?.fact}</p>
            <button onClick={refetch}>Update</button>
        </div>
    )
};

export default Home;