import React, {useEffect} from "react";
import Cover from "../../components/cover/cover.component";
import StashSection from "../../components/stash/stash.component";
import Creation from "../../components/creation/creation.component";
import FreeSection from "../../components/free/free.component";
import Footer from "../../components/footer/footer.component";
import {IconCircles, MenuIconWrapper} from "./homepage.style";
import {menuToggle} from "../../utils/menu-disappearer";


const Homepage = () => {

    useEffect(() => {
        const menuIcon = document.querySelector("#menuIcon");
        menuIcon.style.display = "none";
    }, []);

    const changeLook = () => {
        const menuIcon = document.querySelector("#menuIcon");
        const menuElement = document.querySelector("#menu");
        let social = document.querySelectorAll('.social');

        if (menuToggle()){
            social.forEach(icon => icon.style.opacity = 1);
            menuIcon.classList.add("rotate-icon");
            menuElement.style.position = "fixed";
            menuElement.classList.remove("menu-disappear");
            menuElement.style.transform = "translateY(-20px)";

        }else{
            menuIcon.classList.remove("rotate-icon");
            menuElement.classList.add("menu-disappear");
        }
    };
    return (
        <>
            <Cover/>
            <StashSection/>
            <Creation/>
            <FreeSection/>
            <Footer/>
            <MenuIconWrapper onClick={changeLook} id="menuIcon">
                <IconCircles/>
                <IconCircles/>
                <IconCircles/>
            </MenuIconWrapper>
        </>
    )
};

export default Homepage;