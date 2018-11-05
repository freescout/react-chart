import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import ArrowUp from '@material-ui/icons/KeyboardArrowUp';
import ArrowDown from '@material-ui/icons/KeyboardArrowDown';
import classNames from 'classnames';

const styles = {
  paperFooter: {
    margin: '10px',
    display: 'flex',
    verticalAlign: 'top',
  },
  paperTitle: {
    margin: '10px',
    fontWeight: 'bold',
  },
  card: {
    margin: '0px 10px',
    display: 'flex',
    alignItems: 'center',
  },
  cardtypg: {
    display: 'inline-block',
  },
  arrowUp: {
    color: 'green',
  },
  arrowDown: {
    color: 'red',
  }
};

function MyCard(props) {
  var { classes } = props;
  var [ cardcolored ] = props.cardClasses;
  return (
    <Grid item xs={3} >
      <Paper className={classes.paperTitle} elevation={0}>{props.cardTitle}</Paper>
      <Card className={classNames(classes.card, cardcolored)}>
        <CardContent className={classes.cardcontent}>
          <Typography className={classes.cardtypg} variant="h3" component="h2">{props.cardText}</Typography>
          <Typography className={classes.cardtypg} variant="subtitle2">&nbsp;&nbsp;{props.cardSubtitle}</Typography>
        </CardContent>
      </Card>
      <Paper className={classes.paperFooter} elevation={0}>
        {props.arrow === 'down' && <ArrowDown className={classNames(classes.arrow, classes.arrowDown)}/>}
        {props.arrow === 'up' && <ArrowUp className={classNames(classes.arrow, classes.arrowUp)}/>}
        {props.cardFooter}      
      </Paper>
    </Grid>
  );  
}

var StyledCard = withStyles(styles)(MyCard);

export {StyledCard};