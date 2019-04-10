import React, { Component } from 'react';
import { connect } from "react-redux";
import { compose } from "redux";
import _ from 'lodash';

import { readTodos } from '../actions'

import Header from './App_header';
import Modal_Form from './App_modal_form_create';
import Modal_Form_Update from './App_modal_form_update';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    width: 300,
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

  componentDidMount() {
    this.props.readTodos()
  }

  renderTodos(){
    const { classes } = this.props;

    return _.map(this.props.todos, todo =>(
        <Grid key={todo.id} item>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                  className={classes.media}
                  image="bg1.jpg"
                  title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  { todo.title }
                </Typography>
                <Typography component="p">
                  { todo.memo }<br />
                  { todo.updatedAt }
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Modal_Form_Update todo={ todo } />
            </CardActions>
          </Card>
        </Grid>
    ))
  }

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
                  { this.renderTodos() }
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

const mapStateToProps = state => ({ todos: state.todos })
const mapDispatchToProps = ({ readTodos })

export default compose(
    withStyles(styles),
    connect(mapStateToProps, mapDispatchToProps),
)(App);
