import { TransactionAddForm, ButtonRound } from "components";
import { FormEnabledButtonWrapper } from "./FormBar.styled";
import { useState } from "react";

export const FormBar = () => {

    const [enabledBarStatus, setEnabledBarStatus] = useState(false);


    const showBarCtrl = () => {
        setEnabledBarStatus(!enabledBarStatus);
        console.log(`showBarCtrl activated`)
    }

    return(
        <>
            <FormEnabledButtonWrapper>
                <ButtonRound operationType="income" type="button" className="form-bar__enabled-button" action={showBarCtrl}/>
            </FormEnabledButtonWrapper>
                
            {enabledBarStatus === true && <TransactionAddForm showBarCtrl={showBarCtrl}/>}
        </>
    )
}