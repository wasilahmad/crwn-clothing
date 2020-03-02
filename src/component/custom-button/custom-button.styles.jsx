import styled, {css} from 'styled-components';

const ButtonStyles = css`
    background-color: black;
    color: white;
    border: 1px solid transparent;

    &:hover {
        background-color: white;
        color: black;
        border-color: black;
    }
`;

const InvertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border-color: transparent;
    }
`;

const GoogleButtonStyles = css`
    background-color: #4285f4;
    color: white;
    border:1px solid #4285f4;

    &:hover {
        background-color: #357ae8;
        color: white;
        border-color: transparent;
    }
`;

const getButtonStyles = props => {
    if(props.isGoogleSignIn) {
        return GoogleButtonStyles;
    }

    return props.inverted ? InvertedButtonStyles : ButtonStyles;
}

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;    
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;    
    cursor: pointer;

    ${getButtonStyles}
`;