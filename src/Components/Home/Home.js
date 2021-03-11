import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { useEffect, useState } from 'react';
import League from '../League/League';
import './Home.css'
import bg from '../../Image/bg.jpg';

const Home = () => {

    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        const url = "https://www.thesportsdb.com/api/v1/json/1/all_leagues.php"
        fetch(url)
            .then(res => res.json())
            .then(data => setLeagues(data.leagues))

    }, []);

    return (
        <div  >
            <header>
                <div  >
                    < img className='bg-img' src={bg} alt=""/>
                    <h1 className="header-text ">Sports Valley</h1>
                </div>
            
            </header>
            <div className="container-bg">
            <div className="container">
            {
                leagues && leagues.map(league => <League league = {league}></League>)
            }
            </div>
            </div>
        </div>
    );
};

export default Home;