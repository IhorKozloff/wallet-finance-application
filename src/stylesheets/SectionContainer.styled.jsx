import styled from 'styled-components';

export const Section = styled.section`
    box-sizing: border-box;
`;
export const Container = styled.div`
    margin: 0 auto;
    width: 100%;
    background-color: var(--background-light-grey);
    box-sizing: border-box;

    @media screen and (min-width: 320px) {
        width: 320px;

        padding: 12px 20px 0 20px;

       
    }
    @media screen and (min-width: 768px) {
        width: 705px;

    }
    @media screen and (min-width: 1280px) {
        width: 1245px;
    }



    &.header-container {
        padding: 15px 20px;
        background-color: var(--white);
    }
    &.navigation-container {
        padding:12px 0 0 0;
    }
`;
