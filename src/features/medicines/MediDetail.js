import React from 'react';

export function MediDetail() {
return(
    <div className="uk-container">
        <div className="uk-flex">
            <div className="uk-flex-1">
                <div data-src="{{medicine.medi_img_url}}" uk-img></div>
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
        <nav className="uk-navbar-container" uk-navbar>
            <div className="uk-navbar-left">
                <ul className="uk-navbar-nav">
                    <li className="uk-active"><a data-toggle="tab" routerLink="detail" routerLinkActive="active">Detail</a></li>
                    <li><a data-toggle="tab" routerLink="reviews" routerLinkActive="active">Reviews</a></li>
                </ul>
            </div>
            <router-outlet></router-outlet>
        </nav>
    </div>
)
}
