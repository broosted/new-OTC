import React from 'react';

export function MediDetailReviews() {
    return (
        <div className="uk-container">

            <!-- This is a button toggling the modal -->
            <button uk-toggle="target: #my-id" type="button">Post a Review</button>

            <!-- This is the modal -->
            <div id="my-id" uk-modal>
                <div class="uk-modal-dialog uk-margin-auto-vertical">
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
