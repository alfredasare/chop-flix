import styled from "styled-components";
import {typeScale} from "../../utils";
import {applyStyleModifiers} from "styled-components-modifiers";

const BUTTON_MODIFIERS = {
    small: () => `
    font-size: ${typeScale.copyrightText};
    padding: 8px;
    `,
    large: () => `
    font-size: ${typeScale.header5};
    padding: 16px 24px;
    `,
    warning: ({props}) => `
    background-color: ${props.theme.status.warningColor};
    color: ${props.theme.textColorOnPrimary};
    
    &:hover{
    background-color: ${props.theme.status.warningColorHover};
    }
    &: focus{
    outline-color: ${props.theme.status.warningColor};
    }
    &: active{
    background: ${props.theme.status.warningColorActive}
    }
    `,
    warningSecondary: ({props}) => `
    background: none;
    color: ${props.theme.status.warningColor}
    `,
    warningTertiary: ({props}) => `
    background: none;
    color: ${props.theme.status.warningColor};
    border-color: ${props.theme.status.warningColor};
    &:focus{
    background: ${props.theme.status.warningColor}
    }
    `,
    error: ({props}) => `
    background-color: ${props.theme.status.dangerColor};
    color: ${props.theme.textColorOnPrimary};
    
    &:hover{
    background-color: ${props.theme.status.dangerColorHover};
    }
    
    &:active{
    background-color: ${props.theme.status.dangerColorActive};
    }
    
    &:focus{
    outline-color: ${props.theme.status.dangerColor};
    }
    `,
    errorSecondary: ({props}) => `
    background: none;
    color: ${props.theme.status.dangerColor};
    `,
    errorTertiary: ({props}) => `
    background: none;
    color: ${props.theme.status.dangerColor};
    border-color: ${props.theme.status.dangerColor};
    &:focus{
    background: ${props.theme.status.dangerColor};
    }
    `,
    success: ({props}) => `
    background-color: ${props.theme.status.successColor};
    color: ${props => props.theme.textColorOnPrimary};
    
    &:hover{
    background-color: ${props.theme.status.successColorHover};
    }
    
    &:active{
    background-color: ${props.theme.status.successColorActive};
    }
    
    &:focus{
    outline-color: ${props.theme.status.successColor};
    }
    `,
    successSecondary: ({props}) => `
    background: none;
    color: ${props.theme.status.successColor};
    `,
    successTertiary: ({props}) => `
    background: none;
    color: ${props.theme.status.successColor};
    border-color: ${props.theme.status.successColor};
    &:focus{
    background: ${props.theme.status.successColor};
    }
    `,
    
};

export const ButtonStyle = styled.button`
  padding: 14px 24px;
  min-width: 100px;
  border: none;
  font-size: ${typeScale.paragraph};
  color: ${props => props.theme.textColorOnPrimary};
  cursor: pointer;
  font-family: "Montserrat", monospace;
  transition: background-color 0.2s linear;
  
  &:hover{
  background-color: ${props => props.theme.primaryColorHover};
  color: ${props => props.theme.textColorOnDisabled};
  }
  
  &:focus{
  outline: 3px solid ${props => props.theme.primaryColor};
  outline-offset: 2px;
  }
  &:active{
  background-color: ${props => props.theme.primaryColorActive};
  }
  
  &:disabled{
  background-color: ${props => props.theme.primaryColorDisabled};
  color: ${props => props.theme.textColorOnPrimary};
  cursor: not-allowed;
  }
`;

export const PrimaryButton = styled(ButtonStyle)`
  background-color: ${props => props.theme.primaryColor};
  ${applyStyleModifiers(BUTTON_MODIFIERS)}

`;

export const SecondaryButton = styled(ButtonStyle)`
  background: none;
  color: ${props => props.theme.primaryColor};
  &:disabled{
  background: none;
  color: ${props => props.theme.primaryColorDisabled};
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const TertiaryButton = styled(ButtonStyle)`
  background: none;
  border: 1px solid ${props => props.theme.primaryColor};
  color: ${props => props.theme.primaryColor};
  &:disabled{
  background: none;
  border-color: ${props => props.theme.primaryColorDisabled};
  color: ${props => props.theme.primaryColorDisabled};
  }
  &:focus{
  background: ${props => props.theme.primaryColor};
  color: ${props => props.theme.textColorOnPrimary};
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)}

`;