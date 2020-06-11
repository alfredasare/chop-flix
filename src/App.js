import React, {useState} from 'react';
import {Switch, Route} from "react-router-dom";
import ScrollToTop from "./utils/scroll-to-top";
import Homepage from "./pages/home/homepage";
import {defaultTheme, lightTheme} from "./utils";
import {ThemeProvider} from "styled-components";

function App() {
    const [useLightTheme] = useState(false);


    return (
        <ThemeProvider theme={useLightTheme ? lightTheme : defaultTheme}>
            <ScrollToTop/>
            <Switch>
                <Route path="/" exact component={Homepage}/>
            </Switch>
        </ThemeProvider>

    )
}
export default App;