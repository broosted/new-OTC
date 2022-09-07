import React, { Component} from "react";
import "./App.css";
import {About} from "./features/about/About";


class App extends Component{
    render(){
        return(
            <div className="uk-container">
                    <button className="uk-button uk-button-default">Default Button</button>

                <nav className="uk-navbar-container" uk-navbar>
                    <div className="uk-navbar-left">
                        <ul className="uk-navbar-nav">
                            <li><a href="" className="uk-navbar-item uk-logo">OTC</a></li>
                            <li className="uk-active"><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                        </ul>
                    </div>
                    <div className="uk-navbar-center">…</div>
                    <div className="uk-navbar-right">…</div>
                </nav>
            </div>
        );
    }
}

export default App;
