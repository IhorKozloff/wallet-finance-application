import { IconSVG } from "helpers/IconSvg"
import { NavigationBarWrapper, NavigationList,  NavigationItem, NavigationButton, StyledLink} from "./NavigationBar.styled"


export const NavigationBar = () => {



    return (
        <NavigationBarWrapper className="navigation">
            <NavigationList className="navigation__list nav-list">

                <NavigationItem className="nav-list__item">
                    <StyledLink to="/">
                        <NavigationButton className="nav-list__button">
                            <IconSVG id="home-btn-icon"></IconSVG>
                        </NavigationButton>
                    </StyledLink>
                </NavigationItem>

                <NavigationItem className="nav-list__item">
                    <StyledLink to="statistic">
                        <NavigationButton className="nav-list__button">
                            <IconSVG id="statistic-btn-icon"></IconSVG>
                        </NavigationButton>
                    </StyledLink>
                </NavigationItem>


                <NavigationItem className="nav-list__item">
                    <StyledLink to="exchange-rates">
                        <NavigationButton className="nav-list__button">
                            <IconSVG id="money-btn-icon"></IconSVG>
                        </NavigationButton>
                    </StyledLink>
                </NavigationItem>

            </NavigationList>
        </NavigationBarWrapper>
    )
}



                    