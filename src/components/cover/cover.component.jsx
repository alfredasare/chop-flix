import React, {useEffect, useState} from "react";
import {
    Arrows, CarouselTracker, CarouselTrackerWrapper,
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
import Carousel from "../carousel/carousel.component";
import {ArrowForwardIcon} from "../icons/icons.components";
import {nextButton, loadVariables, previousButton} from "../../utils/carouselController";
import "../../utils/carouselController";
import {ArrowCircle, ArrowForward, ArrowReverse} from "../arrow/arrow.style";

const Cover = () => {
        const [images, setImages] = useState(0);

        const dots = [];

        for (let i = 0; i < images; i++) {
            dots.push(<CarouselTracker key={i}/>);
        }

        const clickNext = () => {
            nextButton();
        };
        const clickPrevious = () => {
            previousButton();
        };

        useEffect(() => {
            loadVariables();
        });
        useEffect(() => {
            const imagesLoaded = document.querySelectorAll("#carouselContainer *");
            setImages(imagesLoaded.length - 2);
            setInterval(() => {
                clickNext();
            }, 10000);
        }, []);

        return (
            <CoverWrapper>
                <Carousel/>
                <Menu/>
                <Brand/>
                <CarouselTrackerWrapper id="dots">
                    {dots}
                </CarouselTrackerWrapper>
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
                <Arrows>
                    <ArrowCircle onClick={clickPrevious}>
                        <ArrowReverse>
                            <ArrowForwardIcon/>
                        </ArrowReverse>
                    </ArrowCircle>
                    <ArrowCircle onClick={clickNext}>
                        <ArrowForward>
                            <ArrowForwardIcon/>
                        </ArrowForward>
                    </ArrowCircle>
                </Arrows>
            </CoverWrapper>
        )
    }
;

export default Cover;