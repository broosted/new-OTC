import React, {Component} from "react";
import "./App.css";
import {About} from "./features/about/About";
import {MediList} from "./features/medicines/MediList";
import {MediDetail} from "./features/medicines/MediDetail";
import { Routes, Route, Link } from "react-router-dom";
import {MediDetailDetailsTab} from "./features/medicines/MediDetailDetailsTab";
import {MediDetailReviews} from "./features/medicines/MediDetailReviews";


class App extends Component {

    render() {
        return (
            <div className="uk-container">
                <nav className="uk-navbar-container">
                    <div className="uk-navbar-left">
                        <ul className="uk-navbar-nav">
                            <li><a href="" className="uk-navbar-item uk-logo">OTC</a></li>
                            <li className="uk-active"><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </div>
                    <div className="uk-navbar-center">…</div>
                    <div className="uk-navbar-right">…</div>
                </nav>

                <div className="uk-container">
                    <Routes>
                        <Route path="/" element={<MediList />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/medi-detail/:id/*" element={<MediDetail />}>
                            <Route path="details" element={<MediDetailDetailsTab />} />
                            <Route path="reviews" element={<MediDetailReviews />} />
                        </Route>
                    </Routes>
                </div>
            </div>
        );
    }
}

export default App;
