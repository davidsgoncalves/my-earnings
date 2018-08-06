import React from 'react'
import Currency from 'react-currency-formatter';

const BrlCurrency = ({value}) => (
  <Currency quantity={value} currency="BRL"/>
);

export default BrlCurrency;
