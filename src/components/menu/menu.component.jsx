import React from "react";
import {Icon, MenuWrapper, SocialIconWrapper, VerticalLine} from "./menu.style";
import HomeIcon from "../../assets/icons/home.png";
import Audio from "../../assets/icons/waves.png";
import Cart from "../../assets/icons/store.png";
import Contact from "../../assets/icons/contact.png";


const Menu = () => {
    return (
        <MenuWrapper>
            <Icon>
                <img src={HomeIcon} alt="home icon"/>
            </Icon>
            <Icon>
                <img src={Audio} alt="audio icon"/>
            </Icon>
            <Icon>
                <img src={Cart} alt="home icon"/>
            </Icon>
            <Icon message>
                <img src={Contact} alt="home icon"/>
            </Icon>
            <VerticalLine/>
            <SocialIconWrapper>
                <i className="fab fa-instagram"/>
            </SocialIconWrapper>
            <SocialIconWrapper>
                <i className="fab fa-facebook-f"/>
            </SocialIconWrapper>
            <SocialIconWrapper>
                <i className="fab fa-twitter"/>
            </SocialIconWrapper>
            <SocialIconWrapper>
                <i className="fab fa-whatsapp"/>
            </SocialIconWrapper>
        </MenuWrapper>
    )
};

export default Menu;