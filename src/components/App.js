import React, { Component } from 'react';
import './App.css';

import Header from './App_header';
import Modal_Form from './App_modal_form';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class App extends Component {
  state = {
    spacing: '16',
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
        <React.Fragment>
          <Header />
          <Modal_Form />
          <div>
            <Grid container className={classes.root} spacing={16}>
              <Grid item xs={12}>
                <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
                  {[0, 1, 2, 3, 4, 5].map(value => (
                      <Grid key={value} item>
                        <Card className={classes.card}>
                          <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="bg1.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                                テストTodo
                              </Typography>
                              <Typography component="p">
                                テストTodoです<br />
                                このデザインはMaterial-uiを使用しています
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                          <CardActions>
                            <Button size="small" color="primary">
                              Edit
                            </Button>
                            <Button size="small" color="primary">
                              Delete
                            </Button>
                          </CardActions>
                        </Card>
                      </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </div>
        </React.Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
