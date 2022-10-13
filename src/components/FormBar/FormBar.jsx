import { TransactionAddForm, ButtonRound } from "components";
import { FormEnabledButtonWrapper } from "./FormBar.styled";
import { useState, useEffect } from "react";
import { onAddTransactionAPI } from "API";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const FormBar = () => {
    const navigate = useNavigate();
    const { token } = useSelector(state => state.userStatus.user)
    const [enabledBarStatus, setEnabledBarStatus] = useState(false);
    const [transactionAddData , setTransactionAddData] = useState('')

    const showBarCtrl = () => {
        setEnabledBarStatus(!enabledBarStatus);
    }

    useEffect(() => {
        if (transactionAddData === '') {
            return
        }
        onAddTransactionAPI(transactionAddData, token);
        setTransactionAddData('')
        navigate('/')
    },[navigate, token, transactionAddData])

    return(
        <>
            <FormEnabledButtonWrapper>
                <ButtonRound operationType="income" type="button" className="form-bar__enabled-button" action={showBarCtrl}/>
            </FormEnabledButtonWrapper>
                
            {enabledBarStatus === true && <TransactionAddForm setTransactionAddData={setTransactionAddData} showBarCtrl={showBarCtrl}/>}
        </>
    )
}