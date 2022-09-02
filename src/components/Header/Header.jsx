import { IconSVG } from "helpers/IconSvg"

import {HeaderWrapper, LogoWrapper, LogoutBtn, UserName, AuthNavigate } from "./Header.styled"



export const Header = () => {


    return (
        <HeaderWrapper className="header-wrapper">
            <LogoWrapper className="logo">
                <li>
                    <IconSVG id="logo-icon" className="logo__icon" height="30" width="30"></IconSVG>
                </li>
                <li>
                    <IconSVG id="icon-Wallet" className="logo__text" height="17" width="74"></IconSVG>
                </li>
            </LogoWrapper>

            <AuthNavigate className="user-auth">
                <UserName className="user-auth__name">Name</UserName>
                <span className="user-auth__separator"></span>
                <LogoutBtn className="user-auth__logout-btn logout_btn">
                    <IconSVG id="logout-btn-icon" className="logout_btn__icon" height="18" width="18"></IconSVG>
                </LogoutBtn>
            </AuthNavigate>
        </HeaderWrapper>
    )
}