import React from 'react';
import {Rating} from "../rating/Rating";
import {Link} from "react-router-dom";
import {MediDetail} from "./MediDetail";

export function MediList() {
    return (
        <div className="uk-container">
            <form className="uk-form-horizontal">
                <input className="uk-search-input" placeholder="Search .."/>
                <button className="uk-button uk-button-primary">Submit</button>
            </form>

            <div className="uk-grid">

                <div className="uk-card">
                    <div className="uk-card-media-top">
                        <img src="item.medi_img_url" alt="Image not loading"/>
                    </div>
                    <div className="uk-card-body">
                        <h3 className="uk-card-title">By customer_name</h3>
                        {/*<Rating readOnly="true" ratingValue="indexValue($event)"/>*/}
                        <p>medi description</p>
                        <nav>
                            <Link to="/medi-detail/:id">Check Details</Link>
                        </nav>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}
