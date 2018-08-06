import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Form = ({ hasError, onSubmit, helperText, onChange }) => (
  <Paper className="app-paper form-paper">
    <form onSubmit={onSubmit}>
      <TextField
        error={hasError}
        id="helperText"
        label="Qual seu salário?"
        helperText={helperText}
        onChange={onChange}
        fullWidth
      />
      <Button variant="contained" color="primary" type="submit">
        Calcular!
      </Button>
    </form>
  </Paper>
);

export default Form;
