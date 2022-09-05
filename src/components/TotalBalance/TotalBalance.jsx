import { TotalBalanceWrapper, TotalBalanceTittleText, TotalBalanceValueWrapper, TotalBalanceMoneySign, TotalBalanceValueArea} from './TotalBalance.styled';

export const TotalBalance = ({totalBalanceValue}) => {




    return (
        <TotalBalanceWrapper className="total-balance">
            <TotalBalanceTittleText className="total-balance__tittle-text">your balance</TotalBalanceTittleText>

            <TotalBalanceValueWrapper className="total-balance__value-wrapper">
                <TotalBalanceMoneySign className="total-balance__money-sign">₴</TotalBalanceMoneySign>
                <TotalBalanceValueArea className="total-balance__value">{totalBalanceValue}</TotalBalanceValueArea>
            </TotalBalanceValueWrapper>
            
        </TotalBalanceWrapper>
    )
}