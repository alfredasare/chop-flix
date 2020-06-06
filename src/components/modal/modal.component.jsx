import React from "react";
import {ModalWrapper, TopWrapper} from "./modal.style";
import Monkey from "../../assets/images/brand.png";

const Modal = () => {
    return (
        <ModalWrapper>
            <TopWrapper>
                <div>
                    Sign up for easy access to music plugins
                </div>
                <img src={Monkey} style={{opacity: 0.5}} width="150px" alt="monkey" aria-label="monkey"/>
            </TopWrapper>
        </ModalWrapper>
    )
};

export default Modal;