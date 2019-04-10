import React from 'react';
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form'
import { withRouter } from 'react-router-dom';

import  { postTodo } from '../actions'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import { compose } from "redux";
import { Form } from "redux-form";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    modal: {
        marginBottom: 20,
        marginLeft: 50,
    },
    button: {
        width: '100%',
        marginTop: 20,
    },
    control: {
        padding: theme.spacing.unit * 2,
    },
});

class FormDialog extends React.Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this)
    }

    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
        this.props.history.push('/todo/new');
    };

    handleClose = () => {
        this.setState({ open: false });
        this.props.history.push('/');
    };

    renderField(field){
        const { input, label, type, meta: { touched, error }} = field;

        return(
            <div>
                <input {...input} placeholder={label} type={type} />
                {touched && error && <span>{error}</span>}
            </div>
        )
    }

    async onSubmit(values){
        await this.props.postTodo(values);
        this.props.history.push('/');
    }

    render() {
        const { classes, handleSubmit, pristine, submitting, invalid  } = this.props;

        return (
            <div className={classes.root}>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen} className={classes.modal}>
                    add new post
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <Form onSubmit={handleSubmit(this.onSubmit)}>
                        <DialogTitle id="form-dialog-title">投稿</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                投稿内容を記述してください！
                            </DialogContentText>
                            <Field
                                autoFocus
                                margin="dense"
                                id="title"
                                label="title"
                                name="title"
                                type="text"
                                fullWidth
                                component={this.renderField}
                            />
                            <Field
                                margin="dense"
                                id="memo"
                                label="memo"
                                name="memo"
                                type="text"
                                fullWidth
                                component={this.renderField}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                キャンセル
                            </Button>
                            <Button type="submit" onClick={this.handleClose} color="primary" disabled={ pristine || submitting || invalid }>
                                送信
                            </Button>
                        </DialogActions>
                    </Form>
                </Dialog>
            </div>
    );
    }
}

FormDialog.propTypes = {
    classes: PropTypes.object.isRequired,
};

const validate = values =>{
    const errors = {};

    if (!values.title) errors.title = "タイトルを入力してください";
    if (!values.memo) errors.memo = "メモを入力してください";

    return errors
}

const mapDispatchToProps = ({ postTodo });

export default withRouter(compose(
    withStyles(styles),
    connect(null, mapDispatchToProps),
)(reduxForm({ validate, form: 'todoNewForm'})(FormDialog)));
