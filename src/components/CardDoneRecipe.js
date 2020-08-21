import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';

import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

function RecipeReviewCard({ recipe }) {
  const { name, image, doneDate, type, id } = recipe;
  const [expanded, setExpanded] = React.useState(false);

  const foto = type === 'comida' ? mealIcon : drinkIcon;

  const classes = useStyles();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div class="col-sm">
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe">
              <img src={foto} />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={name}
          subheader={`Feita em: ${doneDate}`}
        />
        <Link to={`/comidas/${id}`}>
          <CardMedia className={classes.media} image={image} title={name} />
        </Link>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Ultimo comentario This impressive paella is a perfect party dish and
            a fun meal to cook together with your guests. Add 1 cup of frozen
            peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
export default RecipeReviewCard;
// <Link to={`/bebidas/${id}`}>
// <img
//     src={image}
//     alt="quando clicar na bebida"
//     data-testid={`${index}-horizontal-image`}
//   />
//   <p data-testid={`${index}-horizontal-name`}>{name}</p>
// </Link>
// <p data-testid={`${index}-horizontal-top-text`}>{alcoholicOrNot}</p>
// <p data-testid={`${index}-horizontal-done-date`}>{doneDate}</p>

// <p data-testid={`${index}-horizontal-top-text`}>
//   {area} - {category}
// </p>
// <p data-testid={`${index}-horizontal-done-date`}>{doneDate}</p>
// <p>
//   {tags.slice(0, 2).map((tag) => (
//     <span data-testid={`${index}-${tag}-horizontal-tag`}>{tag}</span>
//   ))}
// </p>
