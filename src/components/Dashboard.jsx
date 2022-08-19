import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Box, Paper, Grid, CssBaseline } from '@mui/material';
import RowRadioButtonsGroup from './RadioButton';
import MyInput from './Input';
import ButtonGroup from './ButtonsGroup';
import GradientGroup from './GradientGroup';


// backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#000',
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#000',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.red,
  textColor: theme.palette.text.red,
}));

export default function BasicGrid() {
  let names = ['Altura(cm):', 'Peso(kg):', 'Cintura(cm):', 'Cuello(cm):'];
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed sx={{marginTop: 3}}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item sx={{ color: '#fff', textAlign: 'left'}}>
                <h1>Calculadora de grasa corporal</h1>
                <p>
                  El metodo de la marina de estados Unidos (US navid method) ofrece una manera
                  sencilla de calcular un aproximado del porcentaje de tejido adiposo en el cuerpo de
                  una persona.
                </p>
                <p>Los valores requeridos por la formula son los siguientes:</p>

                <br/>
                <RowRadioButtonsGroup></RowRadioButtonsGroup>
                {
                  names.map((name) => {
                    return <MyInput name={name}></MyInput>
                  })
                }
                <ButtonGroup/>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item sx={{ color: '#fff', height: '100%'}}>
                <GradientGroup></GradientGroup>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
}