import React from "react";

const Search: React.FC = () => {

    return(

        <>

            <div id="search-popup" className="search-popup">
                <div className="close-search theme-btn">
                    <span className="flaticon-cancel"></span>
                </div>
                <div className="popup-inner">
                    <div className="overlay-layer"></div>
                    <div className="search-form">
                        <form method="post" action="#">
                            <div className="form-group">
                                <fieldset>
                                    <input type="search" className="form-control" name="search-input" value=""
                                           placeholder="Search Here" required />
                                        <input type="submit" value="Search Now!" className="theme-btn" />
                                </fieldset>
                            </div>
                        </form>

                        <br />
                            <h3>Recent Search Keywords</h3>
                            <ul className="recent-searches">
                                <li><a href="#">Climate</a></li>
                                <li><a href="#">Network</a></li>
                                <li><a href="#">Partners</a></li>
                                <li><a href="#">Tikkun</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>

                    </div>

                </div>
            </div>

        </>

    )

}

export default Search