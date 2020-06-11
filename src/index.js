import React from "react";
import ReactDom from "react-dom";
import {Provider} from "react-redux";
import {persistor, store} from "./redux/store";
import {GlobalStyle} from "./utils";
import {PagesWrapper} from "./index.style";
import {PersistGate} from "redux-persist/integration/react";
import {BrowserRouter as Router} from 'react-router-dom';
import App from "./App";


ReactDom.render(
    <Provider store={store}>
        <GlobalStyle/>
        <PagesWrapper>
            <PersistGate persistor={persistor}>
                <Router>
                    <App/>
                </Router>
            </PersistGate>
        </PagesWrapper>
    </Provider>
    , document.querySelector("#root")
);

