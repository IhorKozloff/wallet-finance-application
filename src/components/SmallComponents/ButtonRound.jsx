import { StyledButtonRound, HorizontalIcon, VerticalIcon } from './ButtonRound.styled';

export const ButtonRound = ({operationType, action}) => {

   
    return(
        <>
        
        {operationType === "income" && <StyledButtonRound 
            type="button" 
            className="green-round-button" 
            background="var(--green)" 
            shadow="0px 6px 15px rgba(36, 204, 167, 0.5)"
            onClick={action}>
                <HorizontalIcon/>
                <VerticalIcon/>
        </StyledButtonRound>}

        {operationType === "expense" && <StyledButtonRound 
            type="button" 
            className="green-round-button" 
            background="var(--pink)" 
            shadow="0px 6px 15px rgba(255, 101, 150, 0.5)"
            onClick={action}>
                <HorizontalIcon/>
        </StyledButtonRound>}
        
        </>
        
    )
}