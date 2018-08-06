import React, { Component } from 'react';
import moment from 'moment';
import Paper from '@material-ui/core/Paper';
import Form from './components/Form';
import EarningsPanel from './components/EarningsPanel';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: moment().format('DD/MM/YYYY'),
      time: moment().format('HH:mm:ss'),
      earnings: 0,
      earningsPerSecond: 0,
      inputValue: 0,
      earningsPerMinute: 0,
      earningsPerDay: 0,
      earningsPerWeak: 0,
      inputMessage: 'Bruto ou liquido você decide. Ex: 32,00',
      inputError: false,
    };

    this.setSalary = this.setSalary.bind(this);
    this.getInputValue = this.getInputValue.bind(this);
    this.resetApp = this.resetApp.bind(this);
  }

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  setSalary(e) {
    e.preventDefault();
    const brlCurrencyReg = /\d+(?:\.\d{3})*?,\d{2}/i;
    let value = this.state.inputValue;

    if (brlCurrencyReg.test(value)) {
      value = value.replace(/\./g, '');
      const salaryPerDay = parseFloat(value) / 30;
      const salaryPerWeek = salaryPerDay * 7;
      const salaryPerHour = salaryPerDay / 24;
      const salaryPerMinute = salaryPerHour / 60;
      const salaryPerSecond = salaryPerMinute / 60;

      this.setState({
        earningsPerSecond: salaryPerSecond,
        earningsPerWeak: salaryPerWeek,
        earningsPerDay: salaryPerDay,
        earningsPerHour: salaryPerHour,
        earningsPerMinute: salaryPerMinute
      });
    } else {
      this.setState({inputMessage: 'Digite um valor valido Ex: 232.123,90', inputError: true});
    }
  }

  getInputValue(e) {
    this.setState({
      inputValue: e.target.value,
      inputMessage: 'Bruto ou liquido você decide. Ex: 32,00',
      inputError: false
    });
  }

  tick() {
    this.setState({
      date: moment().format('DD/MM/YYYY'),
      time: moment().format('HH:mm:ss'),
      earnings: this.state.earnings + this.state.earningsPerSecond

    });
  }

  resetApp() {
    this.setState({
      earnings: 0,
      earningsPerSecond: 0,
      inputValue: 0,
      earningsPerMinute: 0,
      earningsPerDay: 0,
      earningsPerWeak: 0,
      inputMessage: 'Bruto ou liquido você decide. Ex: 32,00',
      inputError: false,
    });
  }

  render() {
    const {date, time, earnings, earningsPerSecond, inputValue, earningsPerWeak, earningsPerDay, earningsPerMinute, inputMessage, inputError} = this.state;

    return (
      <div className="app">
        <div className="title">
          Quanto você ganha?
        </div>
        <div className="app-container">
          <Paper className="app-paper">
            <p>{date}</p>
            <p className="clock">{time}</p>
          </Paper>

          {earningsPerSecond > 0 ?
            <EarningsPanel onClear={this.resetApp} realTimeEarnings={earnings} earningsPerMonth={inputValue}
                           earningsPerWeak={earningsPerWeak} earningsPerDay={earningsPerDay}
                           earningsPerMinute={earningsPerMinute}/> :
            <Form onSubmit={this.setSalary} hasError={inputError} helperText={inputMessage}
                  onChange={this.getInputValue}/>}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
