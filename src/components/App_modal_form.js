import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";

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

    state = {
        open: false,
    };

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;

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
                    <DialogTitle id="form-dialog-title">投稿</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            投稿内容を記述してください！
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="title"
                            label="title"
                            type="text"
                            fullWidth
                        />
                        <TextField
                            margin="dense"
                            id="memo"
                            label="memo"
                            type="text"
                            fullWidth
                        />
                        <input
                            accept="image/*"
                            className={classes.input}
                            style={{ display: 'none' }}
                            id="raised-button-file"
                            multiple
                            type="file"
                        />
                        <label htmlFor="raised-button-file">
                            <Button variant="raised" component="span" className={classes.button}>
                                Image Upload
                            </Button>
                        </label>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            キャンセル
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            送信
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

FormDialog.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormDialog);

