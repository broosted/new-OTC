import React, { Component} from "react";
import "./App.css";
import {About} from "./features/about/About";


class App extends Component{
    render(){
        return(
            <div className="uk-container">
                    <button className="uk-button uk-button-default">Default Button</button>

                <About/>
            </div>
        );
    }
}

export default App;
