import  { TransactioCardRemoveBtn } from "./TransactionRemoveBtn.styled"
import {MdDeleteForever} from "react-icons/md";

export const TransactionRemoveBtn = ({removeAction}) => {


    return (
        <TransactioCardRemoveBtn onClick={removeAction} className="transactio-card-remove-btn">
            <MdDeleteForever/>
        </TransactioCardRemoveBtn>
    )
}