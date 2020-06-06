import React, {useState} from "react";
import ReactDom from "react-dom";
import {ThemeProvider} from "styled-components";
import {lightTheme, defaultTheme, GlobalStyle} from "./utils";
import Homepage from "./pages/home/homepage";
import {PagesWrapper} from "./index.style";


const App = () => {
    const [useLightTheme] = useState(false);

    return (
        <>
            <GlobalStyle/>
            <ThemeProvider theme={useLightTheme ? lightTheme : defaultTheme}>
                <PagesWrapper>
                    <Homepage />
                </PagesWrapper>
            </ThemeProvider>
        </>
    )
};

ReactDom.render(<App/>, document.querySelector("#root"));

