import React from "react";
import {CarouselContainer, ImageContainer} from "./carousel.style";
import Cover1 from "../../assets/images/cover1.jpg";
import Cover2 from "../../assets/images/cover2.jpg";
import Cover3 from "../../assets/images/cover3.jpg";


const Carousel = () => {



    return (
        <CarouselContainer id="carouselContainer">
            <ImageContainer image={Cover3} id="lastClone"/>
            <ImageContainer image={Cover1} />
            <ImageContainer image={Cover2} />
            <ImageContainer image={Cover3} />
            <ImageContainer image={Cover1} id="firstClone"/>
        </CarouselContainer>
    )
};

export default Carousel;