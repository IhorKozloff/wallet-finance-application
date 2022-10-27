import { LayoutComponentsWrapper, NavigationAndBalanceWrapper } from "./LayoutComponentsBar.styled";
import { NavigationBar, ExchangeRates, TotalBalance } from "components";
import Media from 'react-media';


export const LayoutComponentsBar = () => {



    return (
        <LayoutComponentsWrapper>
            <NavigationAndBalanceWrapper>
                <nav>
                    <NavigationBar/>
                </nav>

                <TotalBalance/>
            </NavigationAndBalanceWrapper>
            

            <Media query="(min-width: 768px)" render={() =>
                (
                    <ExchangeRates/>
                )}
            />

        </LayoutComponentsWrapper>
    )
}