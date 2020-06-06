import React from "react";
import "./button.style";
import {PrimaryButton, SecondaryButton, TertiaryButton} from "./button.style";

const Button = () => {
    return (
        <>
            <PrimaryButton >
                Hello World
            </PrimaryButton>
            <SecondaryButton >
                Secondary button
            </SecondaryButton>
            <TertiaryButton>
                Tertiary Button
            </TertiaryButton>
        </>
    )
};

export default Button;