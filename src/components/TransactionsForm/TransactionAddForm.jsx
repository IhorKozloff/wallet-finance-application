import { TransactionAddFormWrapper, FormTittle, CustomRadioButton, TransactionAddFormContainer, ModalTextInput, FormButtonsList, FormChangerWrapper, CustomRadioButtonWrapper, RangeSwitcherBtn } from './TransactionAddForm.styled';
import { ModalDatePicker } from './ModalDatePicker/ModalDatePicker'
import { createPortal } from 'react-dom';
import { useState, useRef} from "react"
import { categoriesDataSet } from '../../assets/categories';
import { categoriesIncomeDataSet } from '../../assets/categoriesIncome';
import { ModalTransactionSelectButton, GreenLargeButtonStyled, BlueFormButtonStyled } from "components";

import { Formik, Form } from 'formik';


export const TransactionAddForm = ({setTransactionAddData, showBarCtrl}) => {
    const [ dataFormDate, setaDataFormDate] = useState('');
    const [category, setCategory] = useState();
    const [ formsStatus, setFormsStatus] = useState("income");
    const inputRangeRef = useRef();
    


    const onChangeRadioBtn = (event) => {
        console.log(event.target.value)
        setFormsStatus(event.target.value)

        if (event.target.value === "income") {
            inputRangeRef.current.value = "0"
            return
        }
        if (event.target.value === "expense") {    
            inputRangeRef.current.value = "1"
            return
        }
    }

    const onRangeBtnChange = (value) => {
        if (value === "1") {
            setFormsStatus("expense");
            return;
        }
        if (value === "0") {
            setFormsStatus("income");
            return
        }
    }


    const onSelectChange = (selectValue) => {
        setCategory(selectValue);
    }
    const onSubmit = ({sum = '', comment = ''}, actions) => {

        const dateToObjectConverter = (date) => {
            const dateArr = date.split("/");
            console.log(dateArr)
            const newDateObj = {
                day: Number(dateArr[0]),
                month: Number(dateArr[1]),
                year: Number(dateArr[2])
            }
            console.log(newDateObj)
            return newDateObj
        }

        const newTransactionDataSet = {type: formsStatus, category, sum, comment, date: dateToObjectConverter(dataFormDate)};
        console.log(newTransactionDataSet)
        setTransactionAddData(newTransactionDataSet);
        actions.resetForm();
        showBarCtrl();


    }

    return createPortal(
            <TransactionAddFormWrapper>
                <TransactionAddFormContainer>
                        <FormTittle className="forms__tittle">Add transaction</FormTittle>
                        <FormChangerWrapper>
                                <CustomRadioButtonWrapper  formsStatus={formsStatus} className="income-checkbox">
                                    <label>
                                    <CustomRadioButton checked="checked" onChange={(event) => {
                                        
                                        onChangeRadioBtn(event)
                                    }} type="radio" name="formType" value="income"/>
                                    Income
                                    </label>
                                </CustomRadioButtonWrapper>
                                
                                <RangeSwitcherBtn 
                                    formsStatus={formsStatus}
                                    ref={inputRangeRef}
                                    className='range-switcher-btn' 
                                    name="range-switcher" 
                                    defaultValue="0"
                                    min="0" 
                                    max="1" 
                                    step="1"
                                    onChange={(event) => {
                                        console.log(event.target.value)
                                        onRangeBtnChange(event.target.value)
                                    }}
                                >
                                </RangeSwitcherBtn>

                                <CustomRadioButtonWrapper formsStatus={formsStatus} className="expense-checkbox">
                                    <label>
                                    <CustomRadioButton  onChange={(event) => {
                                        onChangeRadioBtn(event)
                                    }} type="radio" name="formType" value="expense"/>
                                    Expense
                                    </label>
                                </CustomRadioButtonWrapper>
                        </FormChangerWrapper>
                        

                        <Formik 
                            initialValues={{sum: '', comment: ''}}
                            onSubmit={onSubmit}
                        >
                            <Form>            
                                {formsStatus === "expense"  && <ModalTransactionSelectButton name="incomeSelect" items={categoriesDataSet} changeValue={onSelectChange}/>}
                                {formsStatus === "income"  && <ModalTransactionSelectButton name="expenseSelect" items={categoriesIncomeDataSet} changeValue={onSelectChange}/>}

                                    <ModalTextInput  placeholder="00.00" name='sum' className='sum-field'></ModalTextInput>

                                    <ModalDatePicker name="date" setaDataFormDate={setaDataFormDate}/>

                                    <ModalTextInput placeholder="Comment" name='comment' className='comment-field'/>

                                    <FormButtonsList className='form-btns-wrapper'>
                                        <li>
                                            <GreenLargeButtonStyled type='submit'>Add</GreenLargeButtonStyled>
                                        </li>
                                        <li>
                                            <BlueFormButtonStyled type='button' onClick={showBarCtrl}>Cancel</BlueFormButtonStyled>
                                        </li>
                                    </FormButtonsList>
                            </Form>
                        </Formik>
                </TransactionAddFormContainer>
            </TransactionAddFormWrapper>, document.querySelector("#modal-root")
        
    )
}