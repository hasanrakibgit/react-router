import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faFlag, faFutbol, faMars, faArrowLeft, } from '@fortawesome/free-solid-svg-icons';
import Male from '../../Image/male.png';
import Female from '../../Image/female.png';
import './LeagueDetails.css';

const LeagueDetails = () => {
    const { leagueId } = useParams();
    const [details, setDetails] = useState([])
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data.leagues[0]))
    }, []);
    const { strLeague, intFormedYear, strCountry, strSport, strGender, strLogo, strDescriptionEN, strDescriptionFR, strFacebook, strTwitter, strYoutube, strBadge, strBanner } = details;
    const history = useHistory();
    const handleClick = () => {
        history.push('/home')
    };
    return (
        <div>
            <div>
                <img className="banner-img" src={strBanner} alt="" />
                <img className="logo-img" src={strBadge} alt="" />
            </div>
            <div className="details-bg">
                <div className="details-summary">

                    <div className="details-info">
                        <h1> {strLeague}</h1>
                        <h4><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded : {intFormedYear}</h4>
                        <h4><FontAwesomeIcon icon={faFlag} /> Country : {strCountry}</h4>
                        <h4><FontAwesomeIcon icon={faFutbol} /> Sports Type : {strSport}</h4>
                        <h4><FontAwesomeIcon icon={faMars} /> Gender : {strGender}</h4>
                    </div>
                    <div className="conditional-img">
                        {
                            strGender === "Male" ? <img className="img" src={Male} alt="" />
                                : <img className="img" src={Female} alt="" />
                        }

                    </div>
                </div>

                <div className="description">
                    <h4>{strDescriptionEN}</h4>
                    <h4>{strDescriptionFR}</h4>
                </div>
                <div className="btn-div">
                    <button className="back-btn" onClick={() => handleClick()}><FontAwesomeIcon icon={faArrowLeft} />  Back  </button>
                </div>
                <div className="social-icon">
                    <div className="icon"> <a href={`https://${strFacebook}`} target="_blank"> <h1> <FontAwesomeIcon icon={faFacebook} /> </h1> </a> </div>
                    <div className="icon"> <a href={`https://${strTwitter}`} target="_blank"> <h1> <FontAwesomeIcon icon={faTwitter} /> </h1> </a> </div>
                    <div className="icon"> <a href={`https://${strYoutube}`} target="_blank"> <h1> <FontAwesomeIcon icon={faYoutube} /> </h1> </a> </div>
                </div>
                <div className="footer">
                    <p>Sports Valley © 2021. All rights not reserved</p>
                </div>
            </div>
        </div>
    );
};

export default LeagueDetails;