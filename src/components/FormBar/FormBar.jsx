import { TransactionAddForm, ButtonRound } from "components";
import { FormEnabledButtonWrapper } from "./FormBar.styled";
import { useState, useEffect } from "react";
import { useAddAndRefetch } from "hooks/useAddAndRefetch";

export const FormBar = () => {

    const addAndRefetchTransaction = useAddAndRefetch();

    const [enabledBarStatus, setEnabledBarStatus] = useState(false);
    const [transactionAddData , setTransactionAddData] = useState('')

    const showBarCtrl = () => {
        setEnabledBarStatus(!enabledBarStatus);
    }

    useEffect(() => {

        if (transactionAddData === '') {
            return
        }

        addAndRefetchTransaction(transactionAddData);
        setTransactionAddData('');
        

    },[transactionAddData, addAndRefetchTransaction])

    return(
        <>
            <FormEnabledButtonWrapper>
                <ButtonRound operationType="income" type="button" className="form-bar__enabled-button" action={showBarCtrl}/>
            </FormEnabledButtonWrapper>
                
            {enabledBarStatus === true && <TransactionAddForm setTransactionAddData={setTransactionAddData} showBarCtrl={showBarCtrl}/>}
        </>
    )
}