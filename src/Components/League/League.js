import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './League.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const League = (props) => {
    const { idLeague, strLeague, strLeagueAlternate, strSport } = props.league

    const [details, setDetails] = useState([])
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data.leagues[0]))
    }, []);
    const { strLogo } = details;
    

    return (
            
        <div >
            
            <div className="card">
                <div >
                    <img className="logo" src={strLogo} alt="" />
                </div>


                <div className="short-details" >
                    <h3 className="league-titel"> {strLeagueAlternate}</h3>
                    <h4 className="sports-type"> Sports Type : {strSport}</h4>
                    <Link to={`/details/${idLeague}`}><button className="explore-btn"> Explore  <FontAwesomeIcon icon={faArrowRight} /> </button></Link>
                </div>
            </div>

        </div>
    );
};

export default League;