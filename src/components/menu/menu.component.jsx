import React from "react";
import {Icon, MenuWrapper, SocialIconWrapper, VerticalLine} from "./menu.style";


const Menu = () => {
    return (
        <MenuWrapper>
            <Icon>
                <i className="fas fa-home"/>
            </Icon>
            <Icon>
                <i className="fas fa-home"/>
            </Icon>
            <Icon>
                <i className="fas fa-home"/>
            </Icon>
            <Icon message>
                <i className="fas fa-home"/>
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