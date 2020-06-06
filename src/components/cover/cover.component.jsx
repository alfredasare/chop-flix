import React from "react";
import {
    CoverTextWrapper,
    CoverWrapper,
    MainCoverText,
    SampleButton,
    WhoWeBeSubText,
    WhoWeBeTitle,
    WhoWeBeWrapper
} from "./cover.style";
import Menu from "../menu/menu.component";
import Brand from "../brand/brand.component";

const Cover = () => {
    return (
        <CoverWrapper>
            <Menu/>
            <Brand/>
            <SampleButton>
                Samples
            </SampleButton>
            <CoverTextWrapper>
                <MainCoverText>
                    Chop <br/> fl:x
                </MainCoverText>
                <WhoWeBeWrapper>
                    <WhoWeBeTitle>
                        Who we be
                    </WhoWeBeTitle>
                    <WhoWeBeSubText>
                        Welcome to chop fl:x. We present you sounds from the other side. We hope you enjoy our
                        collections paah cos more tings dey inside.
                    </WhoWeBeSubText>
                </WhoWeBeWrapper>
            </CoverTextWrapper>
        </CoverWrapper>
    )
};

export default Cover;