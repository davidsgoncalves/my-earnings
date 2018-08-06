import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import BrlCurrency from './BrlCurrency';

const EarningsPanel = ({realTimeEarnings, earningsPerMonth, earningsPerWeak, earningsPerDay, earningsPerMinute, onClear }) => (
  <Paper className="app-paper data-paper">
    <p className='real-time-data'>Você já ganhou <BrlCurrency value={realTimeEarnings}/> enquanto este site esteve aberto!</p>
    <hr/>
    <p>Você ganha por mês <BrlCurrency value={parseFloat(earningsPerMonth.replace(/\./g, ''))}/></p>
    <p>Você ganha por semana <BrlCurrency value={earningsPerWeak}/></p>
    <p>Você ganha por dia <BrlCurrency value={earningsPerDay}/></p>
    <p>Você ganha por minuto <BrlCurrency value={earningsPerMinute}/></p>

    <Button variant="contained" color="primary" onClick={onClear} >
      Alterar Salário!
    </Button>
  </Paper>
);

export default EarningsPanel;
