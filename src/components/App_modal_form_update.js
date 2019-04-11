import React from 'react';
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form'
import { withRouter } from 'react-router-dom';

import  { getTodo, deleteTodo, putTodo } from '../actions'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
    space: {
        marginTop: 15,
    },
});

class FormDialogShow extends React.Component {

    constructor(props){
        super(props);
        this.onUpdateClick = this.onUpdateClick.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onDeleteClick = this.onDeleteClick.bind(this)
        this.renderField = this.renderField.bind(this)
    }

    componentDidMount() {
        const id = this.props.todo.id
        if (id) this.props.getTodo(id)
    }

    state = {
        open: false,
        id: "",
        title: "",
        memo: "",
    };

    onUpdateClick = () => {
        this.setState({ open: true, id: this.props.todo.id, title: this.props.todo.title, memo: this.props.todo.memo } );
        this.props.history.push(`/todo/${this.props.todo.id}`);
    };

    handleClose = () => {
        this.setState({ open: false });
        this.props.history.push('/');
    };


    renderField(field){
        const { input, label, type, rootClass, updateValue, meta: { touched, error }} = field;

        input.value = updateValue

        return(
            <TextField
                {...input}
                label={label}
                type={type}
                onChange={ e => this.setState({ [label]: e.target.value })}
                error={!!(touched && error)}
                helperText={touched && error}
                fullWidth={true}
                classes={{root: rootClass}}
            />
        )
    }

    async onSubmit(values){
        values.id = this.state.id
        values.title = this.state.title
        values.memo = this.state.memo
        await this.props.putTodo(values);
        this.props.history.push('/');
    }

    async onDeleteClick(){
        const id = this.props.todo.id
        await this.props.deleteTodo(id);
        this.props.history.push('/');
    }

    render() {
        const { classes, handleSubmit, pristine, submitting, invalid } = this.props;

        return (
            <div className={classes.root}>
                <Button size="small" color="primary" onClick={this.onUpdateClick}>
                    Edit
                </Button>
                <Button size="small" color="primary" onClick={this.onDeleteClick}>
                    Delete
                </Button>

                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <Form onSubmit={ handleSubmit(this.onSubmit) }>
                        <DialogTitle id="form-dialog-title">編集</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                投稿内容を編集してください！
                            </DialogContentText>
                            <Field
                                autoFocus
                                margin="dense"
                                id="title"
                                label="title"
                                name="title"
                                type="text"
                                rootClass={ classes.space }
                                updateValue={ this.state.title }
                                fullWidth
                                component={this.renderField}
                            />
                            <Field
                                margin="dense"
                                id="memo"
                                label="memo"
                                name="memo"
                                type="text"
                                rootClass={classes.space}
                                updateValue={this.state.memo}
                                fullWidth
                                component={this.renderField}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                キャンセル
                            </Button>
                            <Button type="submit" onClick={this.handleClose} color="primary" disabled={ submitting || pristine || invalid }>
                                送信
                            </Button>
                        </DialogActions>
                    </Form>
            </Dialog>
    </div>
    );
    }
}

FormDialogShow.propTypes = {
    classes: PropTypes.object.isRequired,
};

const validate = values =>{
    const errors = {};

    if (!values.title) errors.title = "タイトルを入力してください";
    if (!values.memo) errors.memo = "メモを入力してください";

    return errors
}

const mapDispatchToProps = ({ deleteTodo, getTodo, putTodo });

export default withRouter(compose(
    withStyles(styles),
    connect(null, mapDispatchToProps),
)(reduxForm({ validate, form: 'todoShowForm', enableReinitialize: true })(FormDialogShow)));
