import styled, {css} from 'styled-components';
import { Link } from 'react-router-dom';

// to make re-usable styles 
const OptionStyles = css`
    padding: 10px 15px;
    cursor: pointer;
`;

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    display: flex;
    align-items: center;
    padding: 10px;
`;

export const OptionContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
    ${OptionStyles}
`;

export const OptionDiv = styled.div`
    ${OptionStyles}
`;