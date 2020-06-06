import React from "react";
import {BrandImage, BrandText, BrandWrapper} from "./brand.style";
import Logo from "../../assets/images/brand.png"

const Brand = () => {
    return (
        <BrandWrapper>
            <BrandImage alt="logo" aria-label="logo" src={Logo}/>
            <BrandText>
                chop
            </BrandText>
            <BrandText flix>
                fl:x
            </BrandText>
        </BrandWrapper>
    )
};

export default Brand;
