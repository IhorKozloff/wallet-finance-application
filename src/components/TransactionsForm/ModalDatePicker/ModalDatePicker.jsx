import { useState, useEffect } from 'react';
import { ModalDatePickerWrapper } from './ModalDatePicker.styled';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


export const ModalDatePicker = ({children, setaDataFormDate}) => {

    const [value, setValue] = useState(dayjs());

    const handleChange = (newValue) => {
      setValue(newValue);
    };

    useEffect(() => {
        setaDataFormDate(dayjs(`${value.$d}`).format('DD/MM/YYYY'))
    },[setaDataFormDate, value])

    return  (

        

    <ModalDatePickerWrapper className="modal-transaction-date-wrapper">
        <LocalizationProvider dateAdapter={AdapterDayjs}>

                <DesktopDatePicker
                    label="Select date"
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => <TextField  {...params}/>}
                    showDaysOutsideCurrentMonth
                    InputProps={{sx: {"& .MuiSvgIcon-root": {color: "var(--active-blue)"}}}}
                />

        </LocalizationProvider>
    </ModalDatePickerWrapper>
        
    )
}

