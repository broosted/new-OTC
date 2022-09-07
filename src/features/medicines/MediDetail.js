import React, {Component} from 'react';
import {MediDetailDetailsTab} from "./MediDetailDetailsTab";
import {MediDetailReviews} from "./MediDetailReviews";
import {Link, Route, Routes} from "react-router-dom";


export class MediDetail extends Component {

    render() {
        return (
    <div className="uk-container">
        <div className="uk-flex">
            <div className="uk-flex-1">
                <div data-src="{{medicine.medi_img_url}}"></div>
            </div>
            <div className="uk-flex-2">
                <article className="uk-article">
                    <h3 className="uk-article-title">Media heading</h3>
                    <p className="uk-article-meta">
                        medicine.medi_description
                    </p>
                </article>
            </div>
        </div>
        <nav className="uk-navbar-container">
            <div className="uk-navbar-left">
                <ul className="uk-navbar-nav">
                    <li className="uk-active"><Link to="details">Details</Link></li>
                    <li><Link to="reviews">Reviews</Link></li>
                </ul>
            </div>
        </nav>
        <div className="uk-container">
            <Routes>
                <Route path="details" element={<MediDetailDetailsTab />} />
                <Route path="reviews" element={<MediDetailReviews />} />
            </Routes>
        </div>
    </div>
)}
}
