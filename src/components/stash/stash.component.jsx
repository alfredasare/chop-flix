import React from "react";
import {
    DiscoverNewStash,
    NewStash,
    NewStashContainer,
    OverheadImage, StashArrows,
    StashContentWrapper,
    StashHeader,
    StashHeaderWord,
    StashWrapper
} from "./stash.style";
import Banana from "../../assets/images/banana.png";
import CardList from "../cardList/cardList.component";
import {ArrowCircle, ArrowForward, ArrowReverse} from "../arrow/arrow.style";
import {ArrowForwardIcon} from "../icons/icons.components";

const StashSection = () => {

    const scrollRight = () => {
        const cardList  = document.querySelector('#cardList');
        cardList.scrollLeft += 300;
    };

    const scrollLeft = () => {
      document.querySelector('#cardList').scrollLeft -=300;
    };


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
                <StashArrows>
                    <ArrowCircle onClick={scrollLeft}>
                        <ArrowReverse>
                            <ArrowForwardIcon/>
                        </ArrowReverse>
                    </ArrowCircle>
                    <ArrowCircle onClick={scrollRight}>
                        <ArrowForward>
                            <ArrowForwardIcon/>
                        </ArrowForward>
                    </ArrowCircle>
                </StashArrows>
                <CardList/>
            </StashContentWrapper>
        </StashWrapper>
    )
};

export default StashSection;