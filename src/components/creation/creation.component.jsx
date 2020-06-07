import React from "react";
import {
    CreationWrapper,
    ProcessText,
    SessionContentWrapper,
    SessionHeader,
    VideoPlayer,
    VideoWrapper
} from "./creation.style";


const Creation = () => {
    return (
        <CreationWrapper>
            <VideoWrapper>
                <VideoPlayer muted loop allowFullScreen frameBorder="0"
                             src="https://www.youtube.com/embed/ntLop32pYd0?controls=1"/>
            </VideoWrapper>
            <SessionContentWrapper>
                <SessionHeader>
                    Sessions
                </SessionHeader>
                <ProcessText>
                    Our process and how we get you the sounds you have come to love so much.
                    Our way of making you feel like you were part of the process
                </ProcessText>
            </SessionContentWrapper>
        </CreationWrapper>
    )
};

export default Creation;