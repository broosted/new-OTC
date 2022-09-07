import React from 'react';

export function MediDetailReviews() {
    return (
        <div className="uk-container">


            <button uk-toggle="target: #my-id" type="button">Post a Review</button>


            <div id="my-id" className="uk-modal">
                <div className="uk-modal-dialog uk-margin-auto-vertical">
                    <div className="uk-modal-header">
                        <h2 className="uk-modal-title">Post a Review</h2>
                    </div>
                    <div className="uk-modal-body">
                        <form>
                            <input className="uk-input" placeholder="Full Name"/>
                            <div>
                                <label className="uk-form-label">Rating</label>
                                <app-rating readOnly="false" ratingValue="indexValue($event)"/>
                            </div>
                            <div>
                                <label className="uk-form-label">Review</label>
                                <textarea className="uk-textarea"></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="uk-modal-footer">
                        <button className="uk-button uk-button-primary">Submit</button>
                        <button className="uk-modal-close" type="button">Cancel</button>
                    </div>
                </div>
            </div>

            <div className="uk-grid">
                <div className="uk-card uk-card-body">
                    <h3 className="uk-card-title">By customer_name</h3>
                    <app-rating readOnly="true" ratingValue="indexValue($event)"/>
                    <p>customer review</p>
                    <span uk-icon="pencil" uk-toggle="target: #my-id-edit"></span>
                    <span uk-icon="trash"></span>
                </div>
                <div className="uk-card uk-card-body">
                    <h3 className="uk-card-title">By customer_name</h3>
                    <app-rating readOnly="true" ratingValue="indexValue($event)"/>
                    <p>customer review</p>
                    <span uk-icon="pencil" uk-toggle="target: #my-id-edit"></span>
                    <span uk-icon="trash"></span>
                </div>
            </div>


            <div id="my-id-edit" className="uk-modal">
                <div className="uk-modal-dialog uk-margin-auto-vertical">
                    <div className="uk-modal-header">
                        <h2 className="uk-modal-title">Post a Review</h2>
                    </div>
                    <div className="uk-modal-body">
                        <form>
                            <input className="uk-input" placeholder="Full Name"/>
                            <div>
                                <label className="uk-form-label">Rating</label>
                                <app-rating readOnly="false" ratingValue="indexValue($event)"/>
                            </div>
                            <div>
                                <label className="uk-form-label">Review</label>
                                <textarea className="uk-textarea"></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="uk-modal-footer">
                        <button className="uk-button uk-button-primary">Submit</button>
                        <button className="uk-modal-close" type="button">Cancel</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
