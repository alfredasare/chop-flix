import React, {useState} from "react";
import ReactDom from "react-dom";
import {Provider} from 'react-redux';
import {PersistGate} from "redux-persist/integration/react";
import {store, persistor} from "./redux/store";
import {ThemeProvider} from "styled-components";
import {lightTheme, defaultTheme, GlobalStyle} from "./utils";
import Homepage from "./pages/home/homepage";
import {PagesWrapper} from "./index.style";


const App = () => {
    const [useLightTheme] = useState(false);

    return (
        <Provider store={store}>
            <GlobalStyle/>
            <ThemeProvider theme={useLightTheme ? lightTheme : defaultTheme}>
                <PagesWrapper>
                    <PersistGate persistor={persistor}>
                        <Homepage />
                    </PersistGate>
                </PagesWrapper>
            </ThemeProvider>
        </Provider>
    )
};

ReactDom.render(<App/>, document.querySelector("#root"));

