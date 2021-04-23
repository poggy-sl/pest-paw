
function HudBar(){
    return(
        <div className="voting-links-block">
                <div className="voting-search-box">
                    <input className="voting-search" type="search" placeholder="Search for breeds by name"/>
                </div>
                <button className="voting-button smile"></button>
                <button className="voting-button heart"></button>
                <button className="voting-button sad"></button>
            </div>
    )
}

export default HudBar;