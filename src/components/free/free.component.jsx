import React from "react";
import {
    DownloadIconFree,
    FlexHeader,
    FreeMachine,
    FreeSubText,
    FreeWrapper,
    HeaderOne,
    HeaderTwo,
    TextWrapper
} from "./free.style";
import Machine from "../../assets/images/free.png";
import {PrimaryButton} from "../button/button.style";
import {DownloadIcon} from "../icons/icons.components";

const FreeSection = () => {
    return (
        <FreeWrapper>
            <FreeMachine src={Machine} alt="free download"/>
            <TextWrapper>
                <FlexHeader>
                    <DownloadIconFree>
                        <DownloadIcon/>
                    </DownloadIconFree>
                    <HeaderOne>
                        Free
                    </HeaderOne>
                </FlexHeader>
                <HeaderTwo>
                    downloads
                </HeaderTwo>
                <FreeSubText>
                    We occasionally pick a handful of sample items from our packs and give them out
                    for free for you to enjoy. These might be free but still golden. Check them out
                    and I promise, you go feel pass
                </FreeSubText>
                <PrimaryButton>
                    Get free sample
                </PrimaryButton>
            </TextWrapper>
        </FreeWrapper>
    )
};

export default FreeSection;