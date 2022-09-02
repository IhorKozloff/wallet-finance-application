import { TotalBalanceWrapper, TotalBalanceTittleText, TotalBalanceValueWrapper, TotalBalanceMoneySign, TotalBalanceValue} from './TotalBalance.styled';

export const TotalBalance = () => {




    return (
        <TotalBalanceWrapper className="total-balance">
            <TotalBalanceTittleText className="total-balance__tittle-text">your balance</TotalBalanceTittleText>

            <TotalBalanceValueWrapper className="total-balance__value-wrapper">
                <TotalBalanceMoneySign className="total-balance__money-sign">₴</TotalBalanceMoneySign>
                <TotalBalanceValue className="total-balance__value">24 000.00</TotalBalanceValue>
            </TotalBalanceValueWrapper>
            
        </TotalBalanceWrapper>
    )
}