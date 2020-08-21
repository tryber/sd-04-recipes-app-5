import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
}));

export default function SpacingGrid() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={5}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Paper className={classes.paper}>
              <p>Aloo</p>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

<div className="doneFoods">
      <Link to={`/comidas/${id}`}>
        <img
          src={image}
          alt="quando clicar na comida"
          data-testid={`${index}-horizontal-image`}
        />
        <p data-testid={`${index}-horizontal-name`}>{name}</p>
      </Link>
      <p data-testid={`${index}-horizontal-top-text`}>
        {area} - {category}
      </p>
      <p data-testid={`${index}-horizontal-done-date`}>{doneDate}</p>
      <p>
        {tags.slice(0, 2).map((tag) => (
          <span data-testid={`${index}-${tag}-horizontal-tag`}>{tag}</span>
        ))}
      </p>
      {isShow ? (
        <button onClick={() => handleShare('comidas', id, setIsShow)}>
          <img
            data-testid={`${index}-horizontal-share-btn`}
            src={shareIcon}
            alt="outro icone"
          />
        </button>
      ) : (
        <p>Link copiado!</p>
      )}
    </div>