import React from "react";
import {Icon, MenuWrapper, SocialIconWrapper, VerticalLine} from "./menu.style";
import HomeIcon from "../../assets/icons/home.png";
import Audio from "../../assets/icons/waves.png";
import Cart from "../../assets/icons/store.png";
import Contact from "../../assets/icons/contact.png";
import "../../utils/menu-disappearer";


const Menu = () => {
    return (
        <MenuWrapper id="menu">
            <Icon home>
                <img src={HomeIcon} alt="home icon"/>
            </Icon>
            <Icon audio>
                <img src={Audio} alt="audio icon"/>
            </Icon>
            <Icon basket>
                <img src={Cart} alt="home icon"/>
            </Icon>
            <Icon message>
                <img src={Contact} alt="home icon"/>
            </Icon>
            <VerticalLine id="vertical"/>
            <SocialIconWrapper className="social">
                <i className="fab fa-instagram"/>
            </SocialIconWrapper>
            <SocialIconWrapper className="social">
                <i className="fab fa-facebook-f"/>
            </SocialIconWrapper>
            <SocialIconWrapper className="social">
                <i className="fab fa-twitter"/>
            </SocialIconWrapper>
            <SocialIconWrapper className="social">
                <i className="fab fa-whatsapp"/>
            </SocialIconWrapper>
        </MenuWrapper>
    )
};

export default Menu;