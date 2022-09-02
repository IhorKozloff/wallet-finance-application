import styled from 'styled-components';
import backgroundImageCurrency from '../../img/background-image-currency.png';


export const ExchangeRatesWrapper = styled.div`
    color: var(--white);
    border-radius: 30px;
    overflow: hidden;
`;
export const ExchangeRatesHead = styled.ul`
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: var(--blue);
   padding: 11px 17px;
   opacity: 0.8;
`;
export const HeadListItem = styled.li`
    font-family: var(--baseFont);
    font-style: normal;
    font-weight: var(--bold);
    font-size: 18px;
    line-height: 27px;
`;
export const ExchangeRatesContent = styled.ul`
    background-color: var(--active-blue);
    background-image: linear-gradient(rgba(255, 255, 255, 0.2) -8.67%, rgba(255, 255, 255, 0) 116.22%), url('${backgroundImageCurrency}');
    background-size: contain;
    padding: 12px 15px 16px 20px;
    background-repeat: no-repeat;
    background-position: center bottom;
    padding: 12px 20px 16px 20px;

    & span {
        display: block;
    }
`;

export const ExchangeRatesContentItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:not(:last-of-type) {
        margin-bottom: 12px;
    }
`;