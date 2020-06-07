import React from "react";
import Cover from "../../components/cover/cover.component";
import StashSection from "../../components/stash/stash.component";
import Creation from "../../components/creation/creation.component";
import FreeSection from "../../components/free/free.component";
import Footer from "../../components/footer/footer.component";


const Homepage = () => {
    return (
        <>
            <Cover/>
            <StashSection/>
            <Creation/>
            <FreeSection/>
            <Footer/>
        </>
    )
};

export default Homepage;