import { LogoWrapper } from "./WalletLogo.styled";
import { IconSVG } from "helpers/IconSvg";

export const WalletLogo = () => {


    return (
        <LogoWrapper className="logo">
            <li>
                <IconSVG id="logo-icon" className="logo__icon" height="30" width="30"></IconSVG>
            </li>
            <li>
                <IconSVG id="icon-Wallet" className="logo__text" height="17" width="74"></IconSVG>
            </li>
        </LogoWrapper>
    )
}