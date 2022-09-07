import React from 'react';

export function MediList() {
    return (
        <div className="uk-container">
            <form className="uk-form-horizontal">
                <input className="uk-search-input" placeholder="Search .."/>
                <button className="uk-button uk-button-primary">Submit</button>
            </form>

            <div uk-grid>

                <div className="uk-card">
                    <div className="uk-card-media-top">
                        <img src="{{item.medi_img_url}}" alt="Image not loading"/>
                    </div>
                    <div className="uk-card-body">
                        <h3 className="uk-card-title">By customer_name</h3>
                        <app-rating readOnly="true" ratingValue="indexValue($event)"/>
                        <p>medi description</p>
                        <!-- include Router Link to Medi Detail page -->
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}
