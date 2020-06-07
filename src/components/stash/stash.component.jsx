import React from "react";
import {
    DiscoverNewStash,
    NewStash,
    NewStashContainer,
    OverheadImage,
    StashContentWrapper,
    StashHeader,
    StashHeaderWord,
    StashWrapper
} from "./stash.style";
import Banana from "../../assets/images/banana.png";
import CardList from "../cardList/cardList.component";

const StashSection = () => {
    return (
        <StashWrapper>
            <OverheadImage>
                <img src={Banana} alt="banana"/>
            </OverheadImage>
            <StashContentWrapper>
                <StashHeader>
                    <StashHeaderWord dashed>
                        Overview
                    </StashHeaderWord>
                    <StashHeaderWord>
                        Genres
                    </StashHeaderWord>
                </StashHeader>
                <NewStashContainer>
                    <NewStash>
                        New stash
                    </NewStash>
                    <DiscoverNewStash>
                        Discover our latest sample libraries <br/> and unlock endless endless possibilities
                    </DiscoverNewStash>
                </NewStashContainer>
                <CardList/>
            </StashContentWrapper>
        </StashWrapper>
    )
};

export default StashSection;