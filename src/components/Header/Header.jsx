import { IconSVG } from "helpers/IconSvg"
import { Link } from "react-router-dom"
import { WalletLogo } from "components";
import {HeaderWrapper, LogoutBtn, UserName, AuthNavigate } from "./Header.styled"



export const Header = () => {


    return (
        <HeaderWrapper className="header-wrapper">

            <WalletLogo/>

            <AuthNavigate className="user-auth">
                <Link to="register" style={{marginRight: "10px"}}>Register</Link>
                <Link to="login" style={{marginRight: "10px"}}>Login</Link>
                <UserName className="user-auth__name">Name</UserName>
                <span className="user-auth__separator"></span>
                <LogoutBtn className="user-auth__logout-btn logout_btn">
                    <IconSVG id="logout-btn-icon" className="logout_btn__icon" height="18" width="18"></IconSVG>
                </LogoutBtn>
            </AuthNavigate>
        </HeaderWrapper>
    )
}