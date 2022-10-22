import { PasswordSecureLable } from "./PasswordSecureLable.styled";
import { useEffect, useState } from "react"; 

export const PasswordSecureLableComponent = ({data}) => {

    const [secureLableProps, setSecureLableProps] = useState(
        {
            width: "0",
            color: null
        }
    );

    const secureLabelCreator = (incomeData) => {
        const resultColor = incomeData.length > 6 ? "green" : "red"

        return {
            width: incomeData.length * 5,
            color: resultColor
        }
    }
    
    useEffect(() => {
        if(data === null) {
            return
        }
        setSecureLableProps(secureLabelCreator(data))
    },[data])


    

    return (
        <>
            {data !== null && <PasswordSecureLable secureLableProps={secureLableProps}/>}
        </>   
    )
}