import HudBar from './HudBar';

function Voting(){
    return(
        <div className="voting-page">
            <HudBar/>
            <div className="voting-elements-block">
                <div className="voting-elements-buttons">
                    <button className="voting-back"></button>
                    <button className="voting-button-back">VOTING</button>
                </div>
                <div className="voting-elements-picture">
                    <div className="voting-elements-image">
                        <div className="voting-elements-btns">
                            <button className="voting-green-smile"></button>
                            <button className="voting-heart-smile"></button>
                            <button className="voting-yellow-smile"></button>
                        </div>
                    </div>
                </div>
                <div className="voting-added-elements">
                    <div className="voting-element">
                        <div className="voting-time"><p className="time">22:35</p></div>
                        <div className="voting-imageid"><p className="imageid">Image ID: <strong className="black">fQSunHvl8</strong> was added to Favourites</p></div>
                        <div className="voting-icon"></div>
                    </div>
                    <div className="voting-element">
                        <div className="voting-time"><p className="time">22:27</p></div>
                        <div className="voting-imageid"><p className="imageid">Image ID: <strong className="black">Hjd0XecNX</strong> was added to Likes</p></div>
                        <div className="voting-icon green_smile"></div>
                    </div>
                    <div className="voting-element">
                        <div className="voting-time"><p className="time">22:21</p></div>
                        <div className="voting-imageid"><p className="imageid">Image ID: <strong className="black">BbMFS3bU</strong> was added to Dislikes</p></div>
                        <div className="voting-icon yellow_smile"></div>
                    </div>
                    <div className="voting-element">
                        <div className="voting-time"><p className="time">21:56</p></div>
                        <div className="voting-imageid"><p className="imageid">Image ID: <strong className="black">fQSunHvl8</strong> was removed from Favourites</p></div>
                    </div>
                </div>
            </div>
        </div>  
    )
}

export default Voting;