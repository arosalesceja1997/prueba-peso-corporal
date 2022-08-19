import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RowRadioButtonsGroup() {
    return (
        <FormControl sx={{ color: 'white' }}>
            <FormLabel id="demo-row-radio-buttons-group-label" className="cdgc-text-center">Genero</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                <FormControlLabel value="Hombre" control={<Radio sx={{
                    color: '#fff',
                    '&.Mui-checked': {
                        color: '#fff',
                    },
                }} />} label="Hombre" />
                <FormControlLabel value="Mujer" control={<Radio sx={{
                    color: '#fff', 
                    '&.Mui-checked': {
                        color: '#fff',
                    },
                }} />} label="Mujer" />
            </RadioGroup>
        </FormControl>
    );
}