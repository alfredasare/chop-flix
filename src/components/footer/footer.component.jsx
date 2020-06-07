import React from "react";
import {CopyWright, Email, FooterText, FooterWrapper, Form, Subscribe} from "./footer.style";
import {PrimaryButton} from "../button/button.style";

const Footer = () => {
    return (
        <FooterWrapper>
            <Subscribe>
                <FooterText terms>
                    Terms & Conditions
                </FooterText>
                <FooterText joinText>
                    Join our community to stay up to date with new releases, receive discount codes, free
                    sample packs & presets, and subscriber exclusive content. All you have to do is join
                    our community ---->>
                </FooterText>
                <Form validate>
                    <Email placeholder="Email*" type="email">
                    </Email>
                    <PrimaryButton >
                        Subscribe Now
                    </PrimaryButton>
                </Form>
            </Subscribe>
            <CopyWright>
                &copy; 2020 Chop Flix
            </CopyWright>
        </FooterWrapper>
    )
};
export default Footer;