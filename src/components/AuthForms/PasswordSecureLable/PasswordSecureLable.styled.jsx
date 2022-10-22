import styled from "styled-components";

export const PasswordSecureLable = styled.div`
    width: ${props => props.secureLableProps.width > 0 ? props.secureLableProps.width + 50 + "px" : "0px"};
    height: 2px;
    border-radius: 1px;
    background-color: ${props => props.secureLableProps.color};
    position: absolute;
    bottom: 0;
    left: 0;
`;
//