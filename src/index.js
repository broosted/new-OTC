import React from "react";
import ReactDOM from "react-dom";

import { Provider } from 'react-redux';
import configureAppStore  from "./store";

import App from "./App.js";

const store = configureAppStore

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import 'uikit/dist/css/uikit.min.css';

// loads the Icon plugin
UIkit.use(Icons);

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </Provider>, document.getElementById("root"));
