/*https://material-ui.com/pt/components/text-fields/*/

import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(0),
            width: 300,
        },
    },
}));

export default function FormPropsTextFields() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <TextField id="outlined-search" label="Organization name" type="search" variant="outlined" />
            </div>
        </form>
    );
}
