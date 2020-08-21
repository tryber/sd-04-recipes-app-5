import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();

  const [value, setValue] = useState('Suas anotações aparecerão aqui');

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          placeholder="Salve suas considerações sobre a receita"
          variant="outlined"
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
    </form>
  );
}
